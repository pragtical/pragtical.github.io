# Pragtical Browser Demo

The `/try-it` page embeds the real editor from the sibling `../prag` checkout.
It has separate pthread and single-threaded WebAssembly builds, using SDL3's
Emscripten video backend, Lua 5.4, and an in-memory filesystem.
The opening `/playground/README.md` documents the browser build's limitations.

## Rebuild

Install Emscripten, Meson, Ninja, CMake, and the editor's source dependencies.
Then, from the website repository:

```sh
bash scripts/build-web-preview.sh single
bash scripts/build-web-preview.sh threaded
npm run build
```

`PRAGTICAL_SOURCE`, `PRAGTICAL_WEB_BUILD`, and `JOBS` can override the source
checkout, build directory, and compilation parallelism. Each variant must use
a separate build directory. The helper uses `resources/cross/unknown-wasm32.ini`
plus `wasm32-threads.ini` for pthreads and verifies the compiler flags and build
mode. It copies the single-thread files here and the pthread files into
`threaded/`. The generated JavaScript, WASM and data must stay together. The HTML
and `host.js` are website-owned; the editor build must not overwrite them.

The helper verifies Widget's checkout matches `subprojects/widget.wrap` before
building and reapplies its Meson overlay. An old existing subproject is only a
warning in Meson; ignoring that warning can ship runtime API mismatches such
as Settings calling a missing `Label:wrap_text()`. Review that subproject's
status before updating it with `meson subprojects update widget`.

The bundle includes the original Pragtical logo SVG and an original stereo
chime WAV. The deterministic sample generator is
`../prag/resources/web/generate-audio.mjs`; run it with Node to regenerate the
audio. The helper forces the executable's pack/link step to include refreshed
Lua modules, widget sources and media, without recompiling unchanged libraries.

Keep website and editor source changes separate when committing. The deploy
workflow downloads the browser artifacts from the website repository's
`wasm-demo` release; it does not rebuild the sibling editor checkout or commit
generated output to `gh-pages`. Runtime files are ignored by Git. Use
`python3 scripts/fetch-web-preview.py` from the website checkout to fetch the
same public release locally, or use `--archive /path/to/archive.tar.gz` to
validate and install a local archive. Match each bundle's JavaScript, `.wasm`,
and `.data` from the same build. The root-level `gh-release-wasm-readme.md`
documents packaging, upload, Pages settings, and manual redeployment.

## Validate

Serve through Docusaurus, not `file://`. Verify README startup, visible canvas
pixels, typing, undo, menus, file import, download of unsaved edits, reset,
resizing, fullscreen, and desktop/mobile layout. Check console errors and test
with and without cross-origin isolation. Reloading intentionally discards the workspace.
Download/import messages are accepted only from the same-origin parent/frame.

Transitions are enabled. Browser frame callbacks can land exactly on a frame
deadline, so the editor must update views when `now >= next_frame_time`, not
only when strictly later. Otherwise a transition can lose its next update and
remain paused until another input event. The editor's core scheduler test uses
exact deadlines; browser tests sample tree-view motion without sending events.

The editor bridge exports only file-open, active-document-export, and resize functions,
not a generic JavaScript-to-Lua evaluator. Imported files remain under
`/playground`; they are not installed as plugins or executed automatically.

## Threading and Hosting

`host.js` selects `threaded/pragtical.js` only when `crossOriginIsolated` and
`SharedArrayBuffer` are available. The pthread cross file passes `-pthread`
to every C/C++ dependency and the executable, and preallocates eight workers.
The demo uses three search workers plus their coordinator, leaving capacity
for indexing, directory monitors and audio cleanup. Do not let Meson's cached
`threads` dependency inject a different `PTHREAD_POOL_SIZE` after those flags;
the editor's explicit dependency override keeps the cross file authoritative.

Threaded mode restores native Lua workers, background indexing, project search
and the audio reaper. Processes, native modules, Git/SCM and external LSP servers
remain unavailable. Both variants identify themselves in the opening README.

On configurable hosts, return these headers for the Try It document, its iframe,
and runtime scripts:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

For static hosting without custom headers, `src/utils/webIsolation.mjs`
registers `/try-isolation.js` with scope `/try` (not `/`). This covers both
`/try-it` and `/try/`. The worker adds the headers only to those routes, does
not cache responses, and waits for activation before one guarded reload. The
parent and iframe can then share isolated memory. HTTPS or localhost is
required. Base URL prefixes are preserved.

A hard refresh can bypass the worker for the initial document. Startup waits
for the installed registration and performs an ordinary reload to restore the
headers before loading either runtime. It does not wait for a controller on
the bypassed document; that document may never receive one. This also handles
SPA navigation from a page outside the worker's scope.
The one-retry guard uses a temporary URL parameter, removed on arrival. Do not
replace it with a session-storage flag: COOP context changes can restore an old
renderer snapshot of that flag during a hard refresh and incorrectly select
the fallback.

If service workers are blocked or isolation is unavailable, the page falls
back to the single-threaded bundle without a reload loop. Never remove that
bundle unless the UI also stops offering this fallback. Leaving the isolated
page uses a full document navigation, so COEP does not persist into unrelated
documentation pages and block their external media.

Run `npm run build` and inspect the production preview. Automated suites and
Playwright configuration are maintained locally, excluded from Git, and are
not dependencies of deployment. CI fetches and validates the release archive,
builds the website, and publishes it without running tests. Local browser
checks must not reuse the maintainer's profile or service-worker registrations.

The current debug-enabled SDK warns when joining completed SDL threads on the
main thread, even though the collector checks `SDL_THREAD_COMPLETE` before
joining. Emscripten also warns about potential JS overhead from pthread memory
growth; the demo retains growth to avoid a hard heap limit. Neither warning
should be mistaken for permission to wait on unfinished workers from the UI.
