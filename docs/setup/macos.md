---
sidebar_position: 4
description: macOS-specific instructions for setting up Pragtical.
---

# macOS

Installing Pragtical on macOS is simple: just download the [DMG file], open it
and drag the program into your Applications folder.

Since Pragtical is not signed you will need to clear the App attributes in
order to be able to launch it. To do so open the terminal and run

```bash
xattr -cr /Applications/Pragtical.app
```

Afterwards, you should be able to launch Pragtical normally.


[DMG file]: https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-macos-universal.dmg
