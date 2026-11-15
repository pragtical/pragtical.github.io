---
sidebar_position: 3
description: Linux-specific instructions for setting up Pragtical.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux

## Install

The easiest way to run latest Pragtical on Linux is to download and run one of
the pre-built binaries from the [GitHub releases][1] page. These builds
are compatible with `GLIBC >= 2.35` or `Ubuntu >= 22.04`.

**We provide two package types**:

* Pragtical AppImage - most recent Linux systems support AppImage, but you
  may need to install `fuse`.
* `tar.gz` Portable Archive - extract and run from any directory.

## 32-bit support

Official Pragtical releases do not provide binary packages for 32-bit systems.
Distribution package availability can differ. Check your distribution's package
listing or [build from source](building.md).

:::caution 32-bit version of Pragtical are not actively tested for bugs.
Due to a lack of testers, we've only been able to test whether the code can
compile on a 32-bit system. This does not mean that Pragtical may run correctly.
:::

## Install via package managers

Pragtical is packaged in distribution repositories and community package sources.
The options below link to their package listings; [Repology][2] also compares
versions across the repositories it tracks.

:::note Distribution and community packages
These packages follow their maintainers' release schedules and can lag behind
upstream releases. Check the package listing for supported distribution
releases, architectures, and available versions. AUR, Copr, and third-party
Void repositories are separate from those distributions' official repositories.
:::

### Arch Linux (via AUR)

The Arch User Repository provides [`pragtical`][3], [`pragtical-bin`][9], and
[`pragtical-git`][4]. These are community build recipes, not packages in Arch's
official binary repositories.

To build the release package, review the [build files][5], then clone the
repository and run `makepkg` as a regular user:

```bash
git clone https://aur.archlinux.org/pragtical.git
cd pragtical
makepkg -si
```

Alternatively, install it via an AUR helper such as [yay][6].

### Arch Linux (via binary repository)

For Arch Linux and derivative distributions <code>pragtical</code> can be installed directly from [Arch Linux package repository enhancedX11](https://wiki.archlinux.org/title/Unofficial_user_repositories#enhancedX11).

The repository setup instructions are documented in [https://dinosaur.homelinuxserver.org/#chapter2](https://dinosaur.homelinuxserver.org/#chapter2).

### Fedora (via Copr)

The community [`sentry/pragtical` Copr][7] lists release and nightly packages
for the Fedora releases shown on its project page.

:::caution Copr appears unmaintained
The release packages lag behind upstream, and recent automated nightly builds
have been failing. This repository appears unmaintained and should not be
relied on for a working build of the latest Pragtical. Check its
[build history][16] before using it. For current upstream builds, use the
[official Linux downloads][1] instead.
:::

If you still want to use this repository, enable it and install its release
package:

```bash
sudo dnf copr enable sentry/pragtical
sudo dnf install pragtical
```

Use `pragtical-nightly` instead of `pragtical` if you want the development
package. Copr is a third-party package source, not Fedora's default repository.

### NixOS and Nix

[`pragtical` is available in Nixpkgs][10]. The version depends on your selected
channel or pinned Nixpkgs revision.

On NixOS, add it to your existing system package list and rebuild your
configuration as usual:

```nix
environment.systemPackages = with pkgs; [
  pragtical
];
```

For a user-profile installation with Nix's `nix-command` and `flakes` features
enabled, use [`nix profile add`][11]:

```bash
nix profile add nixpkgs#pragtical
```

Nix can also provide this package on other Linux distributions where Nix is
installed.

### ALT Linux (Sisyphus)

ALT Linux includes [`pragtical` in Sisyphus][12]. On a system already configured
to use that repository:

```bash
sudo apt-get install pragtical
```

Availability in stable ALT branches can differ; check the package page for
your branch rather than assuming that every ALT release includes it.

### T2 Linux

T2 includes a [`pragtical` package recipe][13]. From a configured T2 source
tree, its [package installation workflow][14] can build and install the editor
and its dependencies:

```bash
sudo ./t2 install pragtical
```

This uses T2's source-based package system, not Pragtical's portable archive.

### Void Linux (community repository)

[Jipok's Void repository][15] provides a `pragtical` package for **x86_64 glibc**.
This is an independent community repository, not an official Void package.

Review its repository and signing-key instructions before enabling it. Once
you have configured that repository, install the package with:

```bash
sudo xbps-install -S pragtical
```

## Portable packages

The upstream `tar.gz` archives use a portable layout. Distribution packages can
instead install into the normal system directories. The portable layout does
not follow the UNIX Filesystem Hierarchy Standard (FHS):

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
![screenshot indicating the borderless checkbox][8]

  </TabItem>
</Tabs>


[1]: https://github.com/pragtical/pragtical/releases
[2]: https://repology.org/project/pragtical/versions
[3]: https://aur.archlinux.org/packages/pragtical
[4]: https://aur.archlinux.org/packages/pragtical-git
[5]: https://aur.archlinux.org/pragtical.git
[6]: https://github.com/Jguer/yay
[7]: https://copr.fedorainfracloud.org/coprs/sentry/pragtical/
[8]: /img/user-guide/settings/borderless.png
[9]: https://aur.archlinux.org/packages/pragtical-bin
[10]: https://search.nixos.org/packages?channel=unstable&show=pragtical&query=pragtical
[11]: https://nix.dev/manual/nix/2.35/command-ref/new-cli/nix3-profile-add.html
[12]: https://packages.altlinux.org/en/sisyphus/srpms/pragtical/
[13]: https://www.t2linux.com/packages/pragtical
[14]: https://t2linux.com/handbook/html/t2.build.package.single.html
[15]: https://void-repo.jipok.ru/
[16]: https://copr.fedorainfracloud.org/coprs/sentry/pragtical/builds/
