# Building the Pragtical WebAssembly Demo

This documents the browser port currently implemented in `../prag`, and the
website integration in this repository. The ordinary desktop checkout at
`../pragtical` is not interchangeable with that port: it does not contain all
the web-specific build, native API, and runtime changes described below.

The demo runs the actual editor, using SDL3, Lua 5.4, and a temporary in-memory
filesystem. It produces a single-threaded fallback and a pthread build. Both
are needed for the website's automatic runtime selection.

## Prerequisites

Install Emscripten, Meson, Ninja, CMake, Python 3, Git, Node.js, and npm. A first
build needs network access to download the editor's wrapped dependencies.
The website requires Node.js 20 or newer.
Downloading an existing release instead of compiling requires only Python 3
and curl: run `python3 scripts/fetch-web-preview.py` from the website checkout.

On this Arch Linux machine, Emscripten is provided by the `emscripten` package:

```sh
sudo pacman -S --needed emscripten meson ninja cmake python git
export PATH="$PATH:/usr/lib/emscripten"
emcc --version
em++ --version
```

Node.js and npm must also be installed. The working local toolchain used
Emscripten package 7.0.0, Meson 1.12.1, Ninja 1.13.2, CMake 4.4.5, Python
3.14.10, Node.js 22.23.4, and npm 12.2.2. These are tested versions, not
necessarily minimum requirements. With an emsdk installation instead, activate
its environment before configuring Meson.

The website build helper adds `/usr/lib/emscripten` to `PATH` automatically
when `emcc` is otherwise unavailable. Manual Meson commands need the compiler
tools on `PATH` from the start.

## Recommended Build

Run from the website repository:

```sh
npm ci
bash scripts/build-web-preview.sh single
bash scripts/build-web-preview.sh threaded
npm run build
```

The helper uses these defaults:

| Variant | Editor build directory | Website destination |
| --- | --- | --- |
| Single-threaded | `../prag/build-web` | `static/try/` |
| Threaded | `../prag/build-web-threaded` | `static/try/threaded/` |

Each variant produces `src/pragtical.js`, `src/pragtical.wasm`, and
`src/pragtical.data` in its build directory. The helper copies all three into
the matching website destination and copies `licenses/licenses.md` into
`static/try/licenses.md`.

Environment overrides are available:

```sh
PRAGTICAL_SOURCE=/absolute/path/to/browser-port \
PRAGTICAL_WEB_BUILD=/tmp/pragtical-web-threaded \
JOBS=4 bash scripts/build-web-preview.sh threaded
```

`PRAGTICAL_SOURCE` must contain the browser-port changes. Never share a build
directory between variants or reuse a native build directory. The helper
checks the `web_threads` option and both C/C++ pthread compile flags before
building, so a mismatched directory fails rather than silently shipping the
wrong mode. Changing the SDK or cross-file configuration may require a fresh
build directory.

The browser port was fast-forwarded to upstream master `06885870` (v3.15.0)
before the current rebuild. Upstream now includes the workspace changes and
the exact-deadline and pending-animation scheduler fixes. Preserve the remaining
web-specific changes when pulling future versions; inspect Git status in the
editor checkout separately from the website. The pre-update web-port stash
was retained as a local safety copy, not published.

### Widget Revision

The helper downloads Widget if needed, verifies its Git HEAD against
`../prag/subprojects/widget.wrap`, and reapplies the Meson packagefile overlay.
Meson can merely warn about an existing outdated checkout; that is not enough
to establish runtime compatibility.

If this check fails, inspect the subproject before updating it:

```sh
git -C ../prag/subprojects/widget status --short
meson subprojects update --sourcedir ../prag widget
```

Do not discard local subproject changes. An old Widget checkout previously
caused Settings to crash because `Label:wrap_text()` was missing.

### Incremental Builds and Preloaded Data

The helper reconfigures an existing build and runs Meson compilation. It then
removes only the generated `src/pragtical.js` and compiles again to force the
pack/link step. This is intentional: editor Lua modules, Widget sources,
themes, and media are preload inputs, and not every changed file is tracked
as an ordinary compiler dependency.

Do not skip this repack after changing a plugin or demo file. Do not clean the
entire dependency tree just to refresh the data bundle. Keep each variant's
JavaScript, WASM, and data files together from the same successful build.

## Cross Compilation

The base cross file is `../prag/resources/cross/unknown-wasm32.ini`. The
threaded build additionally loads `resources/cross/wasm32-threads.ini` after
the base file, so it can reuse and extend the base `web_link_args` constant.

For reference, fresh manual configurations from the editor checkout are:

```sh
cd ../prag
export PATH="$PATH:/usr/lib/emscripten"
meson setup --cross-file resources/cross/unknown-wasm32.ini build-web
meson compile -C build-web -j 8

meson setup \
  --cross-file resources/cross/unknown-wasm32.ini \
  --cross-file resources/cross/wasm32-threads.ini \
  build-web-threaded
meson compile -C build-web-threaded -j 8
```

These commands configure and compile; they do not perform the helper's Widget
verification, forced preload refresh, or copying into the website.

### Base Configuration

The cross file uses `emcc`, `em++`, `emar`, `emstrip`, and `emcmake cmake`.
It disables host `pkg-config` lookup, sets the host to little-endian
`wasm32-emscripten`, and marks target executables as needing a wrapper rather
than attempting to execute them during configuration.

It selects release/static builds and `wrap_mode=forcefallback`, with:

- Lua 5.4 instead of LuaJIT (`jit=false`).
- PCRE2 JIT and its executable-memory allocator disabled.
- `portable=true`, `ppm=false`, `net=false`, and `repl_history=false`.
- The dummy directory-monitor backend.

The shared Emscripten linker configuration includes:

| Option | Purpose |
| --- | --- |
| `ALLOW_MEMORY_GROWTH=1` | Allow the heap to grow |
| `INITIAL_MEMORY=104857600` | Start with 100 MiB |
| `STACK_SIZE=1048576` | Set a 1 MiB stack |
| `FORCE_FILESYSTEM=1` | Retain virtual-filesystem support |
| `ENVIRONMENT=web` | Target the browser |
| `EXPORTED_RUNTIME_METHODS=FS,ccall` | Expose the filesystem and bridge calls |
| `MODULARIZE=1` | Return an asynchronous module factory |
| `EXPORT_NAME=createPragtical` | Name that factory |
| `EXIT_RUNTIME=0` | Keep the browser runtime alive |

The editor Meson configuration detects Emscripten as `is_web`. It disables
desktop SDL integrations, native dialogs, SDL GPU/Vulkan/Metal, and host X11
probing. The single-threaded HarfBuzz build uses `HB_NO_MT`.

### Threaded Configuration

The overlay sets `web_threads=true` and passes `-pthread` to both C/C++
compilation and linking, including dependencies. Linking also enables
`ENVIRONMENT=web,worker`, `PTHREAD_POOL_SIZE=8`, and
`PTHREAD_POOL_SIZE_STRICT=2`. Meson's C/C++ thread counts are set to eight,
and SDL's `SDL_PTHREADS` option is enabled.

The top-level Meson file overrides the `threads` dependency explicitly. This
matters: a cached automatically detected dependency previously appended
`PTHREAD_POOL_SIZE=4` after the requested eight, silently reducing the actual
pool. Changing the cross-file option alone did not fix that cached dependency.
Keep the explicit override, and verify the browser actually creates eight
workers. The current SDK bootstraps them from `pragtical.js` itself; it does
not generate a separate `.worker.js`. The helper copies one if a future SDK
does generate it; packaging and tests would then need updating too.

The demo limits project search to three workers plus its coordinator, leaving
pool capacity for other editor workers and audio cleanup. Do not restore a
CPU-count-based default without considering the fixed pool. Do not block the
browser event loop waiting for unfinished workers or proxy work.

## Virtual Filesystem and Demo Content

`../prag/src/meson.build` preloads these paths:

| Source | Browser filesystem |
| --- | --- |
| `data/` | `/app/data/` |
| `subprojects/widget/` | `/app/data/widget/` |
| `subprojects/colors/colors/` | `/app/data/colors/` |
| Build-generated `start.lua` | `/app/data/core/start.lua` |
| `resources/web/user/` | `/user/` |
| `resources/web/project/` | `/playground/` |

The source `data/core/start.lua` is a template. It is explicitly excluded from
the bulk preload and replaced by the configured build output. Preloading both
at the same destination previously selected the template and broke startup.

`resources/web/pre.js` sets `HOME=/user`, `PRAGTICAL_USERDIR=/user`, and
`PRAGTICAL_SCALE` from `window.devicePixelRatio`, then changes directory to
`/playground`. Its `window` guard is essential because pthread worker realms
do not have a DOM.

The demo profile, `resources/web/user/init.lua`, uses One Dark, a borderless
window, 60 FPS with automatic FPS disabled, transitions, audio visualization,
and word wrapping. It opens the README on a deferred editor task and replaces
`{{THREADING_MODE}}` with the active mode before opening it. On narrow windows
it hides TreeView. IPC, workspace, welcome, update checking, LSP, SCM, and the
external audio plugin are disabled; the built-in audio player remains usable.
The updated workspace module is bundled but is not enabled by this profile.

The sample project contains `README.md`, `hello.lua`, `pragtical.svg`, and
`sample-audio.wav`. The SVG is the actual Pragtical logo. The audio is an
original deterministic eight-second stereo chime, 22050 Hz, 16-bit PCM:

```sh
node ../prag/resources/web/generate-audio.mjs
```

Rebuild both variants after regenerating media or updating bundled plugins.
For example, the workspace module was synchronized from
`../pragtical/data/plugins/workspace.lua` into the browser port before
repacking both bundles. Review such upstream changes rather than replacing
the entire browser-port data tree, which contains web-specific changes.

No persistent browser filesystem is mounted. Save writes to memory only;
reset, reload, and leaving the page discard files and settings. Use the
website's download action to retain work.

## Browser-Port Source Changes

The cross file alone is insufficient. These source changes are part of the
working port and must be preserved when updating `../prag`:

- `src/main.c`: keeps SDL callbacks nonblocking and driven by browser animation
  frames, uses `/app/pragtical` as the virtual executable, exposes file-open,
  active-document-export, and resize functions, and notifies the host on exit.
- `src/api/renwindow.c`: sizes the initial window from the iframe viewport.
- `src/api/api.c`: sets `WEB_THREADS` in each web Lua state, including workers.
- `src/api/web.c`: substitutes unsupported process/shared-memory entry points
  for the native OS implementations. These return an error, not working
  subprocess or OS shared-memory support.
- `src/fallbackfont_web.c`: disables desktop font discovery. Bundled fonts
  still work; the browser cannot inspect host font files through Fontconfig.
- `src/api/audio.c`: uses main-loop voice cleanup in the single-threaded build
  and restores the actual audio-reaper thread in the pthread build.
- `data/plugins/findfile.lua`: uses cooperative indexing in the fallback and
  real background indexing when `WEB_THREADS` is true.
- `data/core/init.lua`: updates views at an inclusive frame deadline. A strict
  comparison could consume a redraw without advancing a transition when the
  clock equaled the deadline, freezing it until another input event. The core
  regression uses exact deadlines rather than adding an artificial epsilon.

The export bridge includes final newlines and preserves CRLF line endings.
It does not expose an arbitrary Lua evaluator to the website.

Threading does not enable native Git, external LSP servers, terminals, build
tools, dynamic native plugins, IPC, or desktop dialogs. Lua runs without JIT.
Clipboard access and audio playback depend on browser permissions and user
gestures; mobile keyboards and touch editing remain experimental.

## Website Integration and Isolation

`src/pages/try-it.js` renders the toolbar and an iframe containing
`static/try/editor.html`. `static/try/host.js` loads the runtime, handles
same-origin parent/frame messages, imports text files up to 2 MiB, downloads
the active document, resizes the editor, and reports startup errors.

The host chooses `threaded/pragtical.js` only when `crossOriginIsolated` is
true and `SharedArrayBuffer` exists. Otherwise it chooses `pragtical.js`.
Do not set `mainScriptUrlOrBlob` without also configuring the SDK's incoming
module API: it was not supported by the current default API and broke startup.

On a host supporting custom headers, return these for the Try It document,
iframe, and runtime resources:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

GitHub Pages does not provide arbitrary response-header configuration. The
website therefore uses `src/utils/webIsolation.mjs` to register
`static/try-isolation.js` with scope `/try`, without a trailing slash. That
narrow scope covers `/try-it` and `/try/`, not the entire website. Base URL
prefixes are preserved. The worker adds COOP/COEP and same-origin CORP headers
only to matching same-origin GET responses and does not cache them.

Startup waits for worker activation and performs one guarded ordinary
navigation before starting the editor. A hard refresh may bypass the worker;
an activated registration can handle the next navigation even if the current
document never receives a controller. The same approach handles SPA entry
from outside the worker scope.

The retry guard is a temporary `__pragtical_isolation` URL parameter, removed
on arrival without losing other query parameters or fragments. Do not replace
it with a session-storage flag: COOP browsing-context changes restored a stale
renderer snapshot of that flag after hard refresh and incorrectly selected
the fallback. If the retry still cannot isolate, startup falls back without
a reload loop. HTTPS or localhost is required for service workers.

Leaving Try It uses full-document navigation. Docusaurus SPA navigation alone
would retain COEP on unrelated pages and could block their external media.
Keep runtime resources on the website origin. Downloading release assets at
deployment time is different from loading scripts and pthread workers directly
from another origin in the browser.

## Validation and Troubleshooting

Run these from the website repository:

```sh
npm run build
git diff --check
git -C ../prag diff --check
```

Automated suites, including Playwright, color, isolation, and release-installer
tests, are kept local and are not committed. Their dependencies and npm
scripts are not part of the website package. Deployment does not run tests;
the fetch script still validates the downloaded archive before installing it.

For interactive checks, reuse a preview at `http://localhost:3000/` when one is
running. Do not stop the maintainer's preview process. If another server is
needed and that port is occupied, explicitly select a different port. Use an
isolated browser profile for automated local checks rather than the
maintainer's profile. Local test configuration and outputs are ignored by Git.

Verify eight real workers, visible canvas pixels, README mode, editing, undo,
imports, final newlines in downloads, reset, resizing, project-search results
and worker reuse, Settings tabs, SVG viewing, and audio playback through its
end. Transitions must animate and settle without additional mouse movement.
Also test first entry through the site menu, hard-refresh recovery, leaving
the isolated page, and the single-thread fallback with service workers blocked.
Fullscreen and mobile layouts need manual or dedicated browser checks too.

The current SDK can warn about `-pthread` with `ALLOW_MEMORY_GROWTH`; this is a
potential JavaScript performance cost, not a failed build. Growth is retained
to avoid a hard heap limit. Debug-enabled Emscripten also warns when joining
completed SDL threads on the main thread: the collector checks
`SDL_THREAD_COMPLETE` before joining. Do not interpret that as permission to
wait for unfinished workers from the UI. SDL's WebAudio backend can emit a
ScriptProcessor deprecation warning; check actual playback rather than
treating the warning alone as a playback failure.

For stale plugins, inspect `.data`, not only `.wasm`: Lua and media are packed
in the data file. For startup API mismatches, check Widget and the configured
`start.lua`. For a pool unexpectedly limited to four workers, inspect Meson's
threads dependency and final linker flags. For freezes after enabling
transitions, verify the inclusive deadline fix is present in the packaged core.

## Packaging and Publishing

See [gh-release-wasm-readme.md](gh-release-wasm-readme.md) for the exact
six-file archive layout, `wasm-demo` release creation, replacement uploads,
and deployment requirements. Neither building nor packaging authorizes an
upload, commit, or push. The CI workflow now fetches the release and deploys a
Pages artifact rather than committing build output to `gh-pages`. Both local
runtime variants and the release archive are ignored by Git. Do not commit
temporary profiles, test output, dependency trees, or build directories.
