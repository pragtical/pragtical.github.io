---
sidebar_position: 5
description: Build Pragtical from source code.
---

# Build

Once you have downloaded the source code, you can build Pragtical using Meson.
In addition, the `build-packages.sh` script can be used to compile Pragtical and
create an OS-specific package for Linux, Windows or macOS.

## Dependencies

The following libraries are required:

- LuaJIT or Lua 5.4
- SDL2
- freetype2
- pcre2
- uchardet

If they are not installed on your system you can force meson to download and
build them for you by using the following flag `--wrap-mode=forcefallback`.
Otherwise, if they are present, they will be used to compile Pragtical.

:::note Lua Meson subproject is preferred over currently installed system Lua.
Due to the discrepancies of the Lua version shipped by the various Linux
distributions, we adapted the build system to make use of the Meson Lua
subproject by default to prevent incompatibility issues.

If you are sure the Lua version installed on your system is compatible
use the setup flag: `-Duse_system_lua=true`
:::

## Building with Meson

To build Pragtical with Meson the commands below can be used:

```bash
meson setup --buildtype=release --prefix <prefix> build
meson compile -C build
meson install -C build --skip-subprojects="freetype2,pcre2" --dest-dir ../pragtical
```

where `<prefix>` depends on the OS you are using:
- on Linux is `/usr`
- on macOS application bundle can be `"/Pragtical.app"`
- on Windows you don't need to use this flag

If you are using a version of Meson below 0.54
you need to use different commands to compile and install:

```bash
meson setup --buildtype=release build
ninja -C build
ninja -C build install
```

## Building with Helper Script

The `build-packages.sh` automates some of the steps required to setup your
environment, for usage instructions execute:

```bash
bash build-packages.sh -h
```

The script will run Meson and create an archive with the application.
Pragtical can be easily installed by unpacking the archive in any directory
of your choice.

On Windows two packages will be created, one called "portable" using the "data"
folder next to the executable and the other one using a Unix-like file layout.
The portable version conforms to the directory structure of normal Windows
programs while the Unix-like file layout is meant for a Unix-like environment.

Pragtical does not hard-code any directories and instead relies on environment
variables. This allows the package to be run in any directory.

## Portable Mode

When running `meson setup` you may specify `-Dportable=true` to install Pragtical
as a portable application.

Pragtical needs the `data` directory to run properly. When `portable` is
enabled, Pragtical will use the `data` directory placed next to the executable.
Otherwise, Pragtical will use Unix-like directory locations. It will use
`$prefix/share/pragtical` for `data` and the executable will be located in
`$prefix/bin`. `$prefix` is determined when the application starts such that
`$prefix/bin` corresponds to the location of the executable.

The `user` directory does not depend on the `portable` option and will always be
`$HOME/.config/pragtical`. On Windows, `$USERPROFILE` will be used instead of `$HOME`.

## Meson Build Flags

To know all the available build flags please consult the [meson_options.txt][1]
file. For reference here are the available ones at time of writing that you
can define at the setup stage with `-D<flag_name>=<value>`:

| Flag               | Type    | Default          | Description                                                                              |
| ------------------ | ------- | ---------------- | ---------------------------------------------------------------------------------------- |
| bundle             | boolean | false            | Build a macOS bundle                                                                     |
| source-only        | boolean | false            | Configure source files only, doesn't checks for dependencies                             |
| portable           | boolean | false            | Portable install                                                                         |
| renderer           | boolean | false            | Use SDL renderer                                                                         |
| dirmonitor_backend | combo   | '' (auto-detect) | Define what dirmonitor backend to use: 'inotify', 'fsevents', 'kqueue', 'win32', 'dummy' |
| arch_tuple         | string  | ''               | Specify a custom architecture tuple                                                      |
| use_system_lua     | boolean | false            | Prefer System Lua over the meson wrap                                                    |
| extra_colors       | boolean | true             | Include additional colors                                                                |
| extra_languages    | boolean | true             | Include additional language plugins                                                      |
| ppm                | boolean | true             | Include the plugin manager                                                               |
| jit                | boolean | true             | Use luajit                                                                               |

## Environment Setup

Some of the steps that may be required depending on your Operating System if
you decide against using the `--wrap-mode=forcefallback` flag.

### Linux

On Debian-based systems the required libraries and Meson can be installed
using the following commands:

```bash
# To install the required libraries:
sudo apt install libfreetype6-dev libsdl2-dev libpcre2-dev libuchardet-dev

# To install Meson:
sudo apt install meson
# or pip3 install --user meson
```

### macOS

On macOS you can install a package manager such as [brew](https://brew.sh/) to
install all the required dependencies.

```bash
brew intall meson freetype sdl2 pcre2 uchardet
```

Otherwise you can skip this and just use the already mentioned 
`--wrap-mode=forcefallback` flag.

### Windows MSYS2

The build environment chosen for Pragtical on Windows is [MSYS2][2].
Follow the installation instructions in the link.

- Open `MinGW 64-bit` or `MinGW 32-bit` shell from the start menu.
- Update the MSYS2 installation with `pacman -Syu`
- Restart the shell
- Install the dependencies:

```bash
pacman -S \
  ${MINGW_PACKAGE_PREFIX}-freetype \
  ${MINGW_PACKAGE_PREFIX}-gcc \
  ${MINGW_PACKAGE_PREFIX}-ninja \
  ${MINGW_PACKAGE_PREFIX}-pcre2 \
  ${MINGW_PACKAGE_PREFIX}-pkg-config \
  ${MINGW_PACKAGE_PREFIX}-python-pip \
  ${MINGW_PACKAGE_PREFIX}-SDL2 \
  ${MINGW_PACKAGE_PREFIX}-uchardet \
pip3 install meson
```

`${MINGW_PACKAGE_PREFIX}` expands either to `mingw-w64-i686` or `mingw-w64-x86_64`
depending on the current MSYS2 shell used.

[1]: https://github.com/pragtical/pragtical/blob/master/meson_options.txt
[2]: https://www.msys2.org/
