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

Since v3.7.0, 32-bit builds of the editor where dropped from the CI due to
lack of feedback, no known usage and decreased installation base of Windows 32-bit.

## Third-party Installation Methods

### Scoop

[Scoop][4] is a command-line installer for Windows. To install using scoop:

```sh
# First, enable the extras bucket if not done yet:
scoop bucket add extras

# Afterwards you should be able to install pragtical:
scoop install pragtical
```

:::note Issues when installing plugins using ppm and pragtical installed from scoop?
Make sure to check the [plugins -> troubleshooting] section for an
explanation and solution to this issue.
:::

### MSYS2

[MSYS2][5] provides [Pragtical packages][6] for the UCRT64, CLANG64, and
CLANGARM64 environments.

For x86_64 Windows, open the **MSYS2 UCRT64** terminal and install Pragtical:

```sh
pacman -S mingw-w64-ucrt-x86_64-pragtical
```

Launch it by running `pragtical` from the same terminal. If you use CLANG64 or
CLANGARM64 instead, choose the corresponding package from the package listing;
each package page includes its installation command.

[plugins -> troubleshooting]: /docs/user-guide/plugins#ppm-installed-from-scoop-fails-to-install-plugins
[1]: https://github.com/pragtical/pragtical/releases
[2]: https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-x86_64-setup.exe
[3]: https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-windows-x86_64.zip
[4]: https://scoop.sh/
[5]: https://www.msys2.org/
[6]: https://packages.msys2.org/base/mingw-w64-pragtical
