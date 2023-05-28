---
sidebar_position: 2
description: Windows-specific instructions for setting up Pragtical.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Windows

## Install

We provide installers and zip archives for Windows.
You can get them from [GitHub releases][1].

1. Download the [Pragtical installer][2] from the [release page][1].
2. Run the installer and install Pragtical.

Alternatively, you may download the [zip archive][3], extract it and run it directly.

## Install via package managers

Pragtical can be installed with Chocolatey and Scoop.

:::note These packages are maintained by the community.
:::

### Chocolatey

Pragtical can be installed on Chocolatey with the following command:

```bash
choco install pragtical
```

### Scoop

Pragtical can be installed on Scoop by installing the Extras manifest and installing the package:

```bash
scoop bucket add extras
scoop install pragtical
```

## Portable application

The installer provides a "Portable Mode" checkbox which can be used to extract
Pragtical into a directory.
If this mode is enabled, the installer will not allow user to uninstall Pragtical
from the Settings / Control Panel.
Users can just delete the installation folder.

## 32-bit support

We also provide a [32-bit installer for Pragtical][3].
A [zip archive][4] is also available.

:::caution 32-bit version of Pragtical is not actively tested for bugs.
Due to a lack of testers, we've only been able to test whether the code can
compile on a 32-bit system. This does not mean that Pragtical may run correctly.
:::

## Custom title bar

Windows users may notice that the title bar (window decoration) does not follow
device theme.
This is a known [upstream issue][5] related to SDL.

In the meantime, there are a few workarounds:

1. Enable the custom title bar by setting `config.borderless` to `true` in `init.lua`.
   The custom title bar will follow Pragtical's color scheme.
2. Install the [immersive-title][6] plugin.
   This approach will preserve Windows' title bar while having the correct
   appearance on theme change.

The first option can be enabled with the following steps.

<Tabs>
  <TabItem value="user-module" label="User Module" default>

```lua
local config = require "core.config"
config.borderless = true
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Toggle the "Borderless" checkbox under _Core_ > _User Interface_.
![screenshot indicating the borderless checkbox][7]

  </TabItem>
</Tabs>


[1]: https://github.com/pragtical/pragtical/releases
[2]: https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-x86_64-setup.exe
[3]: https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-windows-x86_64.zip
[3]: https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-i686-setup.exe
[4]: https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-windows-i686.zip
[5]: https://github.com/libsdl-org/SDL/issues/4776
[6]: https://github.com/takase1121/lite-xl-immersive-title
[7]: /img/user-guide/settings/borderless.png
