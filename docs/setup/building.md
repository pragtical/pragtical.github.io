---
sidebar_position: 5
description: Build Pragtical from source code.
---

# Build

Pragtical is built with Meson. You can either build directly with Meson or use
the helper scripts in `scripts/` that mirror the commands used by CI and release
automation.

Use a current Meson release, Ninja, a C/C++ compiler, and pkg-config. CMake is
also needed for the bundled SDL3 build. Although the top-level project declares
Meson 0.63, its compiler-standard fallback list needs Meson 1.3 or newer;
dependency subprojects can have additional requirements. See
[Meson's compiler options](https://mesonbuild.com/Builtin-options.html#compiler-options).

The recommended local build uses Meson subproject fallbacks so the editor is
built against the dependency versions tested by the project:

```bash
meson setup --wrap-mode=forcefallback -Dportable=true build
meson compile -C build
meson install -C build --destdir ../pragtical
```

This creates a relocatable install tree in `../pragtical`.

## Dependencies

The following libraries are required when not using Meson fallbacks:

- LuaJIT or Lua 5.4
- SDL3
- SDL3_image
- SDL3_mixer 3.2.4 or newer (audio API and player)
- FreeType
- HarfBuzz
- PCRE2
- uchardet

Networking support is enabled by default and also needs:

- SDL3_net
- mbedtls

If dependencies are missing, use `--wrap-mode=forcefallback` so Meson downloads
and builds the bundled subprojects.
The project defaults to `--wrap-mode=nofallback`, so dependency fallbacks are
not automatic unless you change that option. Use `--wrap-mode=default` to
allow fallbacks when a compatible system dependency is missing, or
`--wrap-mode=forcefallback` for the bundled dependency set.
SDL3 itself is an exception: this project's CMake-based SDL3 subproject is
selected only with `forcefallback`; other wrap modes require system SDL3.

:::note LuaJIT is preferred by default
Pragtical uses the LuaJIT Meson subproject by default when `-Djit=true`, which
is the default. This keeps runtime behavior consistent across distributions.

To disable LuaJIT and use standard Lua instead, configure with `-Djit=false`.
To prefer system LuaJIT, use `-Djit=true -Duse_system_lua=true`. To prefer
standard system Lua instead, use `-Djit=false -Duse_system_lua=true`.
:::

## Building with Meson

For a normal release-style build:

```bash
meson setup --buildtype=release --wrap-mode=forcefallback \
  -Dportable=true build
meson compile -C build
meson install -C build --destdir ../pragtical
```

For a system install on Linux, use a Unix-style prefix and keep portable mode
disabled:

```bash
meson setup --buildtype=release --prefix /usr build
meson compile -C build
sudo meson install -C build
```

For macOS bundles:

```bash
meson setup --buildtype=release --wrap-mode=forcefallback \
  -Dbundle=true --prefix /Pragtical.app build
meson compile -C build
meson install -C build --destdir .
```

Windows builds are normally portable automatically, so the prefix does not need
to be specified.

## Running from a Build Tree

Use `scripts/run-local` to run the editor or tests from an isolated `.run/`
directory. On Unix-like systems this sets `PRAGTICAL_USERDIR` so local runs do
not reuse your normal profile.

```bash
./scripts/run-local build run
```

Headless Lua tests can be run with:

```bash
SDL_VIDEO_DRIVER=dummy ./scripts/run-local build test scripts/lua/tests
```

To execute a Lua script inside the Pragtical runtime:

```bash
SDL_VIDEO_DRIVER=dummy ./scripts/run-local build run -n path/to/script.lua
```

The `-n` flag keeps the editor process open after the script starts, which is
useful for scripts that schedule work with `core.add_thread` or
`core.add_background_thread`.

## Helper Scripts

The project provides helper scripts for the common build and packaging flows.
Run each script with `--help` to see all options.

### `scripts/build.sh`

`scripts/build.sh` creates a fresh Meson build directory and compiles it. It is
the main scripted build entry point used by CI.

```bash
bash scripts/build.sh --forcefallback --portable --release --lto --pgo
```

Useful options include:

- `--forcefallback` to build bundled dependencies statically.
- `--portable` to configure a relocatable install layout.
- `--bundle` to configure a macOS `.app` bundle.
- `--release` to use Meson's release build type.
- `--lto` to enable link-time optimization.
- `--pgo` to build with profile-guided optimization.
- `--cross-platform`, `--cross-arch`, or `--cross-file` for cross builds.

The helper does not forward arbitrary `-D` options. Use Meson directly for
custom settings such as `renderer_backend`, or reconfigure the helper's build
directory with `meson configure` and compile it again. Do not rerun the helper
just to change an option: it recreates the build directory.

### `scripts/package.sh`

`scripts/package.sh` installs a configured build and creates release-style
packages:

```bash
bash scripts/package.sh --builddir build --binary --release \
  --version v3.13.0
```

It can also create source archives, AppImages, DMGs, and Windows InnoSetup
packages when the platform supports them.

### `scripts/appimage.sh`

Linux AppImages can be built directly with:

```bash
bash scripts/appimage.sh --static --release --version v3.13.0
```

The script downloads the AppImage tools it needs, builds Pragtical, installs it
into `Pragtical.AppDir`, and generates the final `.AppImage`.

## Portable Mode

When running `meson setup`, pass `-Dportable=true` to install Pragtical as a
portable application.

Pragtical needs the `data` directory to run properly. When portable mode is
enabled, Pragtical uses the `data` directory placed next to the executable.
Otherwise, Pragtical uses Unix-like locations: `$prefix/share/pragtical` for
runtime data and `$prefix/bin` for the executable.

The user directory does not depend on the portable option. If no explicit user
directory is configured, Pragtical falls back to `$HOME/.config/pragtical` on
Unix-like systems and `%USERPROFILE%\.config\pragtical` on Windows.

## Renderer Selection

Pragtical builds Surface, SDLRenderer, and SDL GPU into the same binary.
`renderer_backend` selects the **startup default**, not which backends are
compiled. Choose one of these values for a new build:

```bash
meson setup --wrap-mode=forcefallback -Drenderer_backend=surface build
# Or use -Drenderer_backend=sdlrenderer or -Drenderer_backend=sdlgpu.
meson compile -C build
```

To change the default in an existing build:

```bash
meson configure build -Drenderer_backend=sdlgpu
meson compile -C build
```

Reinstall or run the rebuilt executable to use the change. The Meson default
is `surface`. The legacy boolean `-Drenderer=true` is still accepted but is no
longer used by the build; use `renderer_backend` instead.

At runtime, `PRAGTICAL_RENDERER` takes precedence over **Settings > Core >
Graphics > Renderer**, which takes precedence over this build default. Select
**Default** in Settings and unset the environment override when testing the
compiled default. Runtime changes require closing and reopening Pragtical.
See the [Renderer Backends guide] for screenshots, platform-specific launch
commands, GPU selection, and diagnostic environment variables.

Bundled SDL3 builds enable both the 2D renderer and GPU support regardless of
this default. They enable Metal on macOS and Vulkan on other platforms, with
DirectX support on Windows. System SDL3 builds need the corresponding support
and working runtime graphics drivers. Shader binaries are included in the
sources; selecting a different default does not require regenerating them.

## Audio Support

The native audio API and built-in player require SDL3_mixer 3.2.4 or newer.
Audio is part of the normal build: there is no `-Daudio` toggle and `-Dnet=false`
does not disable it. The bundled mixer requires SDL3 3.4.0 or newer.

The fallback includes WAV, AIFF, AU, VOC, FLAC, MP3, Vorbis, and Opus decoding.
Opus uses static opusfile, Opus, and Ogg dependencies; the other decoders are
included in SDL_mixer. System SDL3_mixer builds use that library's decoder set.
There are no project-level Meson switches for individual codecs.

To use the bundled mixer while keeping compatible system dependencies elsewhere:

```bash
meson setup --wrap-mode=default --force-fallback-for=sdl3_mixer \
  -Dppm=false build-system-sdl
meson compile -C build-system-sdl
```

For an entirely bundled dependency build, use `--wrap-mode=forcefallback`.
The optional playback patch discussed in the
[SDL3_mixer build notes] is disabled by default and is not a Meson option.

## Networking Support

Networking is enabled by default:

```bash
meson setup -Dnet=true build
```

Disable it with:

```bash
meson setup -Dnet=false build
```

When networking is disabled, the build does not install the network API docs or
the `core.http` and `core.websocket` Lua modules. Runtime features that depend
on networking, such as remote Markdown images, are disabled when `_G["net"]` is
not available.

## LuaJIT FFI Symbol Exports

On Linux, Pragtical exports only the executable symbols needed by
`data/core/jitsetup.lua` for LuaJIT FFI access. This avoids exporting every
symbol from statically bundled dependencies in force-fallback builds.

If you need the older broad export behavior for local experiments, enable it
explicitly:

```bash
meson setup -Dexport_all_symbols=true build
```

This option only affects Linux builds.

## Meson Build Flags

To see all available build flags, consult the [meson_options.txt][1] file. The
current project options can be passed to `meson setup` with
`-D<flag_name>=<value>`:

| Flag | Type | Default | Description |
| --- | --- | --- | --- |
| `bundle` | boolean | `false` | Build a macOS application bundle |
| `source-only` | boolean | `false` | Configure source files only without dependency checks |
| `portable` | boolean | `false` | Use the portable install layout |
| `renderer` | boolean | `false` | Legacy option, currently unused; use `renderer_backend` |
| `renderer_backend` | combo | `surface` | Default renderer backend: `surface`, `sdlrenderer`, or `sdlgpu` |
| `dirmonitor_backends` | array | `[]` | Directory monitor backends: `inotify`, `fsevents`, `kqueue`, `inodewatcher`, `win32`, `dummy` |
| `arch_tuple` | string | `''` | Custom architecture tuple |
| `use_system_lua` | boolean | `false` | Prefer system LuaJIT when `jit=true`, or system Lua when LuaJIT is disabled or unavailable |
| `extra_colors` | boolean | `true` | Include additional color themes |
| `extra_languages` | boolean | `true` | Include additional language plugins |
| `ppm` | boolean | `true` | Include the plugin manager |
| `jit` | boolean | `true` | Use LuaJIT |
| `export_all_symbols` | boolean | `false` | Export all executable symbols for LuaJIT FFI access on Linux |
| `repl_history` | boolean | `true` | Enable history and completion support in the REPL |
| `net` | boolean | `true` | Enable networking support through SDL3_net and mbedtls |

These are all current project-defined options. For an existing build, inspect
its effective values (including available dependency and compiler options) with:

```bash
meson configure build
```

### Common Meson Options

These are Meson options, separate from Pragtical's project flags. The
[Meson built-in option reference] lists platform and compiler restrictions.

| Option | Use |
| ------ | --- |
| `--buildtype=release` | Optimize a release build; `debugoptimized` retains debug information. |
| `--prefix=/usr` | Choose an installation prefix, for example for a Linux system install. |
| `--wrap-mode=default` | Allow dependency fallbacks. Pragtical's project default is `nofallback`. |
| `--wrap-mode=forcefallback` | Prefer the bundled dependency builds. |
| `--force-fallback-for=sdl3_mixer` | Force the named fallback without forcing every dependency. |
| `-Db_lto=true` | Enable link-time optimization when supported by the toolchain. |
| `-Db_pgo=generate` / `-Db_pgo=use` | Instrument a build or consume its collected profile; the helper's `--pgo` manages the multi-stage workflow. |
| `--cross-file=path/to/file.ini` | Use a cross-compilation toolchain definition. |

For example, a release build with SDL GPU as the default and without the
bundled plugin manager:

```bash
meson setup --buildtype=release --wrap-mode=forcefallback \
  -Db_lto=true -Dportable=true -Dppm=false -Drenderer_backend=sdlgpu build
meson compile -C build
```

## Environment Setup

These commands are useful when building against system packages instead of
using `--wrap-mode=forcefallback`. Package names can vary between distribution
versions, especially for SDL3, so use Meson fallbacks if a dependency is not
available from your package manager.

### Linux

On Debian-based systems with SDL3 packages available:

```bash
sudo apt install \
  build-essential \
  cmake \
  meson \
  ninja-build \
  pkg-config \
  libfreetype6-dev \
  libharfbuzz-dev \
  liblua5.4-dev \
  libluajit-5.1-dev \
  libpcre2-dev \
  libsdl3-dev \
  libsdl3-image-dev \
  libsdl3-mixer-dev \
  libsdl3-net-dev \
  libuchardet-dev \
  libmbedtls-dev
```

The [SDL3_mixer development package] must meet the version requirement above.
On older Debian or Ubuntu releases, some SDL3 packages may be unavailable or
too old. In that case, use `--wrap-mode=forcefallback`.

### macOS

On macOS, install dependencies with [Homebrew](https://brew.sh/):

```bash
brew install cmake meson ninja pkg-config freetype harfbuzz luajit pcre2 sdl3 \
  sdl3_image sdl3_mixer sdl3_net uchardet mbedtls
```

Homebrew provides [sdl3_mixer]. You can also skip system library dependencies
and use `--wrap-mode=forcefallback`, keeping the build tools installed.

### Windows MSYS2

The supported Windows build environment is [MSYS2][2].

- Open a `MinGW 64-bit` or `MinGW 32-bit` shell from the start menu.
- Update MSYS2 with `pacman -Syu`.
- Restart the shell.
- Install the build tools and dependencies:

```bash
pacman -S \
  ${MINGW_PACKAGE_PREFIX}-cmake \
  ${MINGW_PACKAGE_PREFIX}-freetype \
  ${MINGW_PACKAGE_PREFIX}-gcc \
  ${MINGW_PACKAGE_PREFIX}-harfbuzz \
  ${MINGW_PACKAGE_PREFIX}-luajit \
  ${MINGW_PACKAGE_PREFIX}-mbedtls \
  ${MINGW_PACKAGE_PREFIX}-meson \
  ${MINGW_PACKAGE_PREFIX}-ninja \
  ${MINGW_PACKAGE_PREFIX}-pcre2 \
  ${MINGW_PACKAGE_PREFIX}-pkg-config \
  ${MINGW_PACKAGE_PREFIX}-sdl3 \
  ${MINGW_PACKAGE_PREFIX}-sdl3_image \
  ${MINGW_PACKAGE_PREFIX}-sdl3_net \
  ${MINGW_PACKAGE_PREFIX}-uchardet
```

`${MINGW_PACKAGE_PREFIX}` expands to the package prefix for the current MSYS2
shell, such as `mingw-w64-x86_64` or `mingw-w64-i686`.

You also need SDL3_mixer 3.2.4 or newer. If your MSYS2 repository does not
provide it, use the mixer fallback shown under [Audio Support](#audio-support),
or use `--wrap-mode=forcefallback` for the release-style bundled build.

[1]: https://github.com/pragtical/pragtical/blob/master/meson_options.txt
[2]: https://www.msys2.org/
[Renderer Backends guide]: /docs/user-guide/renderer-backends
[SDL3_mixer build notes]: https://github.com/pragtical/pragtical/blob/master/subprojects/packagefiles/sdl3_mixer/README.pragtical.md
[Meson built-in option reference]: https://mesonbuild.com/Builtin-options.html
[SDL3_mixer development package]: https://packages.debian.org/sid/libsdl3-mixer-dev
[sdl3_mixer]: https://formulae.brew.sh/formula/sdl3_mixer
