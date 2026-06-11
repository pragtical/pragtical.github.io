---
sidebar_position: 5
description: Build Pragtical from source code.
---

# Build

Pragtical is built with Meson. You can either build directly with Meson or use
the helper scripts in `scripts/` that mirror the commands used by CI and release
automation.

Meson 0.63 or newer is required.

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
- FreeType
- HarfBuzz
- PCRE2
- uchardet

Networking support is enabled by default and also needs:

- SDL3_net
- mbedtls

If dependencies are missing, use `--wrap-mode=forcefallback` so Meson downloads
and builds the bundled subprojects.

:::note LuaJIT is preferred by default
Pragtical uses the LuaJIT Meson subproject by default when `-Djit=true`, which
is the default. This keeps runtime behavior consistent across distributions.

To disable LuaJIT and use standard Lua instead, configure with `-Djit=false`.
To prefer a compatible system Lua over the Lua Meson subproject, also pass
`-Duse_system_lua=true`.
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

### `scripts/package.sh`

`scripts/package.sh` installs a configured build and creates release-style
packages:

```bash
bash scripts/package.sh --builddir build --binary --release \
  --version v3.12.1
```

It can also create source archives, AppImages, DMGs, and Windows InnoSetup
packages when the platform supports them.

### `scripts/appimage.sh`

Linux AppImages can be built directly with:

```bash
bash scripts/appimage.sh --static --release --version v3.12.1
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

Pragtical builds all renderer backends into the same binary. The default backend
is selected at configure time:

```bash
meson setup -Drenderer_backend=surface build
meson setup -Drenderer_backend=sdlrenderer build
meson setup -Drenderer_backend=sdlgpu build
```

At runtime, users and developers can override the backend with:

```bash
PRAGTICAL_RENDERER=surface pragtical
PRAGTICAL_RENDERER=sdlrenderer pragtical
PRAGTICAL_RENDERER=sdlgpu pragtical
```

The surface renderer is the conservative default. SDL renderer and SDL GPU are
available for testing and development.

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
| `renderer` | boolean | `false` | Legacy SDL renderer option |
| `renderer_backend` | combo | `surface` | Default renderer backend: `surface`, `sdlrenderer`, or `sdlgpu` |
| `dirmonitor_backends` | array | `[]` | Directory monitor backends: `inotify`, `fsevents`, `kqueue`, `inodewatcher`, `win32`, `dummy` |
| `arch_tuple` | string | `''` | Custom architecture tuple |
| `use_system_lua` | boolean | `false` | Prefer system Lua over the Lua Meson subproject when LuaJIT is disabled or unavailable |
| `extra_colors` | boolean | `true` | Include additional color themes |
| `extra_languages` | boolean | `true` | Include additional language plugins |
| `ppm` | boolean | `true` | Include the plugin manager |
| `jit` | boolean | `true` | Use LuaJIT |
| `export_all_symbols` | boolean | `false` | Export all executable symbols for LuaJIT FFI access on Linux |
| `repl_history` | boolean | `true` | Enable history and completion support in the REPL |
| `net` | boolean | `true` | Enable networking support through SDL3_net and mbedtls |

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
  libsdl3-net-dev \
  libuchardet-dev \
  libmbedtls-dev
```

On older Debian or Ubuntu releases, some SDL3 packages may be unavailable. In
that case, use `--wrap-mode=forcefallback`.

### macOS

On macOS, install dependencies with [Homebrew](https://brew.sh/):

```bash
brew install meson ninja pkg-config freetype harfbuzz luajit pcre2 sdl3 \
  sdl3_image sdl3_net uchardet mbedtls
```

You can also skip system dependencies and use `--wrap-mode=forcefallback`.

### Windows MSYS2

The supported Windows build environment is [MSYS2][2].

- Open a `MinGW 64-bit` or `MinGW 32-bit` shell from the start menu.
- Update MSYS2 with `pacman -Syu`.
- Restart the shell.
- Install the build tools and dependencies:

```bash
pacman -S \
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

[1]: https://github.com/pragtical/pragtical/blob/master/meson_options.txt
[2]: https://www.msys2.org/
