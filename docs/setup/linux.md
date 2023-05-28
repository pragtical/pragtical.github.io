---
sidebar_position: 3
description: Linux-specific instructions for setting up Pragtical.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux

## Install

The easiest way to run Pragtical on Linux is to download and run the [Pragtical AppImage][1].
Most recent Linux systems supports AppImage, but you may need to install `fuse`.

Alternatively, we provide [`tar.gz` archive][2] that can be downloaded and extracted
to a directory.

## Install via package managers

Pragtical is available on most common package managers.
A complete list is available at [Repology][3].

:::note These packages are maintained by the community.
:::

### Alpine Linux

You need to enable the `testing` repository by uncommenting the relevant line in `/etc/apk/repositories`:

```bash
#/media/cdrom/apks
http://dl-cdn.alpinelinux.org/alpine/v3.16/main
#http://dl-cdn.alpinelinux.org/alpine/v3.16/community
#http://dl-cdn.alpinelinux.org/alpine/edge/main
#http://dl-cdn.alpinelinux.org/alpine/edge/community
http://dl-cdn.alpinelinux.org/alpine/edge/testing
```

Afterwards, update the package database and install Pragtical:

```bash
apk update
apk add pragtical
```

### Arch Linux (via AUR)

Packages for Arch Linux are available as 3 AUR repositories: [`pragtical`][4], [`pragtical-git`][5] and [`pragtical-bin`][6].

To install, you can clone the [git repository][7] to a working directory and run `makepkg`:

```bash
git clone https://aur.archlinux.org/pragtical.git
cd pragtical
makepkg -si
```

Alternatively, install it via an AUR helper such as [yay][8].

### Fedora

Pragtical can be installed on Fedora 37 with the command:

```bash
dnf install pragtical
```

A Copr also provides nightly releases.
To install it, enable the [`sentry/pragtical` Copr][9] and install the appropriate package.

```bash
dnf copr enable sentry/pragtical
dnf install pragtical-nightly
```

### GNU Guix

Pragtical can be installed via [Guix][10] with the command:

```bash
guix install pragtical
```

### Debian-based (via MPR)

[makedeb][11] provides an AUR-like experience to install Pragtical.

First, install [makedeb][11]:

```bash
bash -ci "$(wget -qO - 'https://shlink.makedeb.org/install')"
```

Then, clone the [git repository][12] into a working directory and run `makedeb`:

```bash
git clone https://mpr.makedeb.org/pragtical.git
cd pragtical
makedeb -s
```

### Nix

Pragtical can be installed on Nix via `nix-env`.

```bash
nix-env -i pragtical
```

### openSUSE Tumbleweed

Pragtical can be installed on openSUSE Tumbleweed via `zypper`:

```bash
zypper install pragtical
```

### Void Linux

Pragtical can be installed on Void Linux with the following command:

```bash
xbps-install pragtical
```

## 32-bit support

Unfortunately, Pragtical does not provide binary packages for 32-bit systems.
You may want to compile Pragtical yourself.

:::caution 32-bit version of Pragtical is not actively tested for bugs.
Due to a lack of testers, we've only been able to test whether the code can
compile on a 32-bit system. This does not mean that Pragtical may run correctly.
:::

## Portable packages

Since v2.1.0, only portable packages are provided.
These packages do not follow the UNIX Filesystem Hierarchy Standard (FHS).

```
pragtical/
  \- data/
  \- doc/
  \- pragtical
```

To install the portable package according to the FHS, do the following:

1. Move `data/` to `/usr/share/pragtical`.
2. Move `doc/` to `/usr/share/doc/pragtical`
3. Move `pragtical` to `/usr/bin/pragtical`

## Client-side decorations

Certain Wayland desktops does not provide server-side decorations.
By default, Pragtical (SDL under the hood) will use `libdecor` to draw client-side decorations.

To work around this, set `config.borderless` to `true`.
Pragtical will draw a client-side decoration.

<Tabs>
  <TabItem value="user-module" label="User Module" default>

```lua
local config = require "core.config"
config.borderless = true
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Toggle the "Borderless" checkbox under _Core_ > _User Interface_.
![screenshot indicating the borderless checkbox][13]

  </TabItem>
</Tabs>


[1]: https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-x86_64.AppImage
[2]: https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-linux-x86_64-portable.tar.gz
[3]: https://repology.org/project/pragtical/versions
[4]: https://aur.archlinux.org/packages/pragtical
[5]: https://aur.archlinux.org/packages/pragtical-git
[6]: https://aur.archlinux.org/packages/pragtical-bin
[7]: https://aur.archlinux.org/pragtical.git
[8]: https://github.com/Jguer/yay
[9]: https://copr.fedorainfracloud.org/coprs/sentry/pragtical/
[10]: https://packages.guix.gnu.org/packages/pragticall/
[11]: https://www.makedeb.org/
[12]: https://mpr.makedeb.org/pragtical.git
[13]: /img/user-guide/settings/borderless.png
