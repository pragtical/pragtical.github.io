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

## Install via package managers

Pragtical is available on some package managers.
A complete list is available at [Repology][2].

:::note These packages are maintained by the community.
:::

### Arch Linux (via AUR)

Packages for Arch Linux are available as 3 AUR repositories: [`pragtical`][3] and [`pragtical-git`][4].

To install, you can clone the [git repository][5] to a working directory and run `makepkg`:

```bash
git clone https://aur.archlinux.org/pragtical.git
cd pragtical
makepkg -si
```

Alternatively, install it via an AUR helper such as [yay][6].

### Fedora

Pragtical stable and nightly releases can be installed on Fedora using Copr.
To install it, enable the [`sentry/pragtical` Copr][7] and install the appropriate
package, for example:

```bash
dnf copr enable sentry/pragtical
dnf install pragtical-nightly
```

## 32-bit support

Unfortunately, Pragtical does not provide binary packages for 32-bit systems.
You may want to compile Pragtical yourself.

:::caution 32-bit version of Pragtical are not actively tested for bugs.
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
