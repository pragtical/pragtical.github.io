---
sidebar_position: 4
description: macOS-specific instructions for setting up Pragtical.
---

# macOS

Installing Pragtical on macOS is simple: just download a DMG file from our
[releases] page, open it and drag the program into your Applications folder.
Make sure to follow the steps explained below.

## Launch the App

Since Pragtical binary builds are not signed you will need to follow these
steps when running it for the first time:

### Method 1

1. Find Pragtical in Finder (do not open it in Launchpad).
2. Control-click Pragtical, then choose `Open` from the shortcut menu.
3. Click `Open` in the popup menu.

The correct steps may vary between macOS versions, so you should refer to
the [macOS User Guide](https://support.apple.com/en-my/guide/mac-help/mh40616/mac).

### Method 2

If **Method 1** doesn't works, an easier and faster way is to clear the App
attributes. To do so open the terminal and run

```bash
xattr -cr /Applications/Pragtical.app
```

Afterwards, you should be able to launch Pragtical normally.


[releases]: https://github.com/pragtical/pragtical/releases
