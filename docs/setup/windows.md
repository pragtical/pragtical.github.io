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

## Portable application

The installer provides a "Portable Mode" checkbox which can be used to extract
Pragtical into a directory.
If this mode is enabled, the installer will not allow user to uninstall Pragtical
from the Settings / Control Panel.
Users can just delete the installation folder.

## 32-bit support

We also provide a [32-bit installer for Pragtical][4].
A [zip archive][5] is also available.

:::caution 32-bit version of Pragtical is not actively tested for bugs.
Due to a lack of testers, we've only been able to test whether the code can
compile on a 32-bit system. This does not mean that Pragtical may run correctly.
:::

## Third-party Installation Methods

### Scoop

[Scoop][6] is a command-line installer for Windows. To install using scoop:

```sh
# First, enable the extras bucket if not done yet:
scoop bucket add extras

# Afterwards you should be able to install pragtical:
scoop install pragtical
```

[1]: https://github.com/pragtical/pragtical/releases
[2]: https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-x86_64-setup.exe
[3]: https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-windows-x86_64.zip
[4]: https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-i686-setup.exe
[5]: https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-windows-i686.zip
[6]: https://scoop.sh/
