---
sidebar_position: 10
description: Quick answers to common "How do I..." questions
---

# How To Do X?

Quick cookbook-style answers to common tasks in Pragtical.

## Files & Navigation

### Open a file quickly
Press `Ctrl+P` (or `Cmd+P` on macOS) to open the fuzzy file finder. Start typing the filename and press Enter.

### Find files in my project
Open command palette with `Ctrl+Shift+P`, type "Find File", then press Enter to search for files in your project

### Switch between open files
- `Ctrl+Tab` - Cycle through recent files
- `Alt+1` through `Alt+9` - Jump to specific tab
- Middle-click on a tab to close it

### Open the file tree
Press `Ctrl+\` to toggle the file tree sidebar.

---

## Search & Replace

### Search in current file
`Ctrl+F` - Find text, `Ctrl+R` - Find and replace

### Search across entire project
`Ctrl+Shift+F` - Opens project search with results in a new view

### Use regex in search
In the search dialog, click the regex button (or open command palette with `Ctrl+Shift+P`, type "Toggle Regex", then press Enter)

### Find next/previous match
`F3` - Find next
`Shift+F3` - Find previous

---

## Editing

### Multiple cursors
- Hold `Ctrl` and click to add cursors
- `Ctrl+D` - Select next occurrence of current word
- `Ctrl+Shift+L` - Select all occurrences
- `Ctrl+Shift+Up/Down` - Add cursor above/below

### Comment/uncomment lines
`Ctrl+/` - Toggle line comments on selected lines

### Indent/unindent
- `Tab` - Indent
- `Shift+Tab` - Unindent

### Duplicate line
`Ctrl+Shift+D` - Duplicate current line

### Delete line
`Ctrl+Shift+K` - Delete current line

### Move lines up/down
`Ctrl+Up/Down` - Move selected lines


### Align columns
Select lines, then open command palette with `Ctrl+Shift+P`, type "Tabularize", press Enter, and specify delimiter (e.g., `=` or `,`)

**Example:**
```
name=John         →    name  = John
age=30            →    age   = 30
city=New York     →    city  = New York
```

---

## Macros

### Record a macro
1. Press `Ctrl+Shift+;` to start recording
2. Perform your actions (typing, navigation, etc.)
3. Press `Ctrl+Shift+;` again to stop

### Play a macro
Press `Ctrl+;` to replay the last recorded macro

**Example:** Record typing `console.log()` and placing cursor inside, then replay on multiple lines.

---

## View & Layout

### Split view
Right-click a tab → "Split Right/Left/Up/Down" or drag a tab to screen edge

### Zoom in/out
- `Ctrl+=` - Zoom in
- `Ctrl+-` - Zoom out  
- `Ctrl+0` - Reset zoom

### Toggle fullscreen
`F11` - Toggle fullscreen mode

### View whitespace
Open command palette with `Ctrl+Shift+P`, type "Draw Whitespace: Toggle", then press Enter

### Show line guide
Open command palette with `Ctrl+Shift+P`, navigate to Settings → Plugins → Line Guide → Enable

---

## Command Palette

### Open command palette
`Ctrl+Shift+P` - Shows all available commands with fuzzy search

**Tip:** You can type partial command names. For example, "tof" finds "Toggle Fullscreen".

---

## Settings & Customization

### Change theme
Settings → Colors tab → Select theme

### Change font
Settings → Core → Editor → Code Font

### Adjust font size
Settings → Core → Editor → Font Size

### Disable a plugin
Add to your `init.lua`:
```lua
config.plugins.plugin_name = false
```

### Change indentation
Open command palette with `Ctrl+Shift+P`, navigate to Settings → Core → Editor
- Set "Indent Size" (default: 2)
- Set "Indentation Type" (default: space)

### Change key bindings
Settings → Keybindings → Find command → Add/change binding

---

## Keybindings

### Bind a key to a command
Add to your `init.lua`:
```lua
local keymap = require "core.keymap"
keymap.add {
  ["ctrl+k"] = "doc:delete-to-end-of-line",
  ["f5"] = "core:reload-module"
}
```

### Bind multiple commands to one key
Commands will execute in order:
```lua
keymap.add {
  ["ctrl+d"] = {
    "doc:select-word",
    "find-replace:select-next"
  }
}
```

### Unbind a key
```lua
local keymap = require "core.keymap"
keymap.unbind("ctrl+d", "doc:select-word")
```

Or unbind all commands from a key:
```lua
keymap.unbind("ctrl+d")  -- Removes all commands
```

### Override a keybinding completely
Pass `true` as second parameter to replace instead of adding:
```lua
keymap.add({
  ["ctrl+s"] = "my-plugin:custom-save"
}, true)  -- Replaces existing binding
```

### Find what a key does
Open command palette (`Ctrl+Shift+P`) and look for the keybinding shown on the right, or check Settings → Keybindings.

---

## Workspace & Sessions

### Save workspace
Your workspace (open files, layout) saves automatically per project.

### Open recent project
Open command palette with `Ctrl+Shift+P`, type "Open Recent Project", then press Enter

### Add folder to current project
Open command palette with `Ctrl+Shift+P`, type "Core: Add Directory", then press Enter

### Change project directory
Open command palette with `Ctrl+Shift+P`, type "Core: Change Project Folder", then press Enter

---

## Advanced

### Jump to line
`Ctrl+G` - Opens "Go to Line" dialog

### Toggle case
Select text → open command palette with `Ctrl+Shift+P`, type "Uppercase/Lowercase", then press Enter

### Trim trailing whitespace
Disabled by default. To configure: Settings → Plugins → Trim Whitespace

### Wrap long lines
Settings → Plugins → Line Wrapping → Enable

### Diff view
Open command palette with `Ctrl+Shift+P`, type "Diff View: Start Files Comparison", then press Enter to compare two files side-by-side

---

## Getting Help

### View all keybindings
Settings -> Keybindings

### Check logs
Open command palette with `Ctrl+Shift+P`, type "Core: Open Log", then press Enter

---

## Tips & Tricks

### Fuzzy matching works everywhere
When searching files, commands, or autocomplete, you don't need to type the full name. "prse" matches "project_search".

### Fuzzy matching in current doc
`Ctrl+G` (go to line) also works to fuzzy match lines in the current doc.

### Drag and drop
Drag files from your file manager into Pragtical to open them.

### Multiple projects
Add multiple folders to work on several projects simultaneously: open command palette with `Ctrl+Shift+P`, type "Core: Add Directory", then press Enter

### Pattern exclusions
Configure ignored files/folders in Settings or `init.lua`:
```lua
-- additions to the default ignored files and folders
local config = require "core.config"
table.insert(config.ignore_files, "^%.git/")
table.insert(config.ignore_files, "^node_modules/")
```

### Quick color picker
Place cursor on a color code (like `#FF0000`) → open command palette with `Ctrl+Shift+P`, type "Pick Color", then press Enter

---

## Can't Find What You Need?

**Remember: Commands are the heart of Pragtical.** Almost every action in the editor has an associated command. If you're looking for a feature, it probably exists as a command!

**How to discover commands:**
- Open command palette (`Ctrl+Shift+P`) and browse or search - you'll find hundreds of available commands
- Commands show their current keybindings (if any) on the right side
- Many features don't have default keybindings but are available as commands
- Plugin commands are prefixed with the plugin name (e.g., `treeview:open`)

**Still stuck?**
- Ask in Discord!
- Check the [User Guide](./configuration.md) for detailed configuration
- See [Developer Guide](../developer-guide/quick-start.md) for plugin development
- Browse built-in plugins at `data/plugins/` for examples
- Visit the GitHub issues page for questions and feature requests
