---
sidebar_position: 2.4
description: Run commands and choose where command prompts appear in the editor.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Command Palette

The command palette lets you search for editor and plugin actions by name.
Command prompts can appear at the bottom, top, or center of the window,
including prompts for opening files and entering text.

![The centered command palette in the One Dark theme, showing commands and their keyboard shortcuts](/img/user-guide/command-palette/command-palette.png)

## Run a command

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to open the palette.
On macOS, use <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>.
Type part of an action's name to narrow the results, then use
<kbd>Up</kbd>/<kbd>Down</kbd> to select an action and <kbd>Enter</kbd> to run it.
Clicking a result also runs the action. Press <kbd>Escape</kbd> to cancel.
Assigned keyboard shortcuts appear beside the command names.

When there are more results than fit, scroll with the mouse wheel or scrollbar.
Keyboard navigation keeps the selected result visible.

## Palette position

| Position | Placement |
| --- | --- |
| Bottom (default) | Full-width input above the status bar, with results above it. |
| Top | Full-width input below the title/menu bar, with results below it. |
| Center | A bordered panel over the document, without resizing editor panes. |

The centered panel adjusts to the window size and UI scale. A position change
applies to the next prompt you open, including file pickers and text prompts.

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

Open your [user module](configuration.md#user-module) and set the position:

```lua
local config = require "core.config"
config.commandview_position = "center" -- "bottom", "top", or "center"
config.max_visible_commands = 10
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Open Settings with the `ui:settings` command. Under
**Core > User Interface**, choose **Command Palette Position**.
Adjust **Maximum Palette Items** to change how many results fit at once;
the default is 10.

  </TabItem>
</Tabs>

## Animations

Opening and closing use the editor's animation settings in every position.
To disable just the palette animation, add this to your user module:

```lua
local config = require "core.config"
config.disabled_transitions.commandview = true
```

You can also enable **Command View** under
**Core > Graphics > Disable Transitions** in Settings.
Disabling all transitions also disables this animation.

## Commands and shortcuts

| Command | Default shortcut | Action |
| --- | --- | --- |
| `core:find-command` | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | Open the command palette. |
| `command:submit` | <kbd>Enter</kbd> | Submit the current prompt or selected result. |
| `command:escape` | <kbd>Escape</kbd> | Cancel the current prompt. |

For mouse-accessible actions, see [Application Menus](application-menus.md).
Plugin authors can read about palette placement and custom result rendering
in [Floating Views](../developer-guide/floating-views.md).
