---
sidebar_position: 2.5
description: Show the application menu bar and navigate editor and plugin actions.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Application Menus

The application menu provides mouse and keyboard access to editor actions,
organized under **File**, **Edit**, **Search**, **View**, **Tools**, and **Help**.
Plugins can add their own actions and submenus.

![The View menu in the One Dark theme, showing navigation submenus and checked visibility options](/img/user-guide/application-menus/view-menu.png)

## Show the menu bar

The menu bar is hidden by default. Press
<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> to show or hide it.
The treeview toolbar's menu button toggles the same setting.
You can open the popup with <kbd>Alt</kbd>+<kbd>M</kbd> even when the bar is hidden.
On macOS, use <kbd>Option</kbd> instead of <kbd>Alt</kbd>.

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

Open your [user module](configuration.md#user-module) and enable the bar:

```lua
local config = require "core.config"
config.show_menubar = true
```

Set it to `false` to hide the bar.

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Open Settings with the `ui:settings` command, then enable
**Core > User Interface > Show Menu Bar**.
The visibility change applies immediately and saved preferences override the
default on later starts.

  </TabItem>
</Tabs>

When the labels cannot all fit, the bar displays a single **Menu** button
containing the same groups.

## Navigate and run actions

Click a group to open it. Move the pointer to another group to switch menus,
or click the active group again to close it. Submenus expand from entries
marked with an arrow.

Opening the menu keeps the document's selection and focus available for
editing actions. Unavailable actions remain visible but disabled. Checkmarks
show enabled options, and assigned keyboard shortcuts appear beside actions.
Available plugin actions depend on which plugins are enabled.

| Key | Action |
| --- | --- |
| <kbd>Left</kbd>/<kbd>Right</kbd> | Switch top-level groups when no submenu entry is selected. |
| <kbd>Down</kbd> | Select the first entry after opening a group. |
| <kbd>Up</kbd>/<kbd>Down</kbd> | Move through entries. |
| <kbd>Right</kbd> | Open the selected submenu. |
| <kbd>Left</kbd> | Return from a submenu to its parent. |
| <kbd>Enter</kbd> | Run the selected action or open its submenu. |
| <kbd>Escape</kbd> | Close one submenu at a time, then the main popup. |

Click outside the popup to dismiss it. Opening or switching a top-level group
leaves its entries unselected until you move into them.

## Menu groups

| Group | Common actions |
| --- | --- |
| File | Create, open, save, reload, rename, and close files; manage project folders. |
| Edit | Undo/redo, clipboard operations, line and selection editing, case conversion, line endings, and encodings. |
| Search | Find and replace, previous/next matches, and Go to Line. |
| View | Split panes, switch focus and tabs, toggle interface elements, and preview Markdown. |
| Tools | Open the command palette, log, user/project configuration, and enabled plugin tools. |
| Help | Open documentation, project links, and About. |

## Animations

Showing and hiding the bar follows the editor's animation settings.
To disable just this height animation, add this to your user module:

```lua
local config = require "core.config"
config.disabled_transitions.menubar = true
```

You can also enable **Menu Bar** under
**Core > Graphics > Disable Transitions** in Settings.

## Commands and shortcuts

| Command | Default shortcut | Action |
| --- | --- | --- |
| `menu-bar:open` | <kbd>Alt</kbd>+<kbd>M</kbd> | Open or close the popup, including when the bar is hidden. |
| `menu-bar:toggle` | <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> | Toggle bar visibility. |
| `menu-bar:show` | None | Show the bar. |
| `menu-bar:hide` | None | Hide the bar. |

See [Command Palette](command-palette.md) for searching actions by name.
Plugin authors can extend menus using the
[Application Menus developer guide](../developer-guide/application-menus.md).
