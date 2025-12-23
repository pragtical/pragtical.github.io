---
sidebar_position: 1
description: Quick start guide to writing plugins.
---

# Quick Start

## Plugin Basics

A plugin is a Lua file placed in your user plugins directory that extends the editor's functionality.

:::info Plugin Locations
- **User plugins:** `USERDIR/plugins/` - Place your custom plugins here
- **Built-in plugins:** `DATADIR/plugins/` - Plugins that ship with the editor

`USERDIR` and `DATADIR` are global Lua variables available in all plugins. See [Configuration → Location](../user-guide/configuration.md#location) for where Pragtical looks for the user directory.

**Common user plugin directory locations:**
- **Portable install:** `<pragtical_executable_dir>/user/plugins/`
- **Linux/macOS:** `~/.config/pragtical/plugins/`
- **Windows:** `%USERPROFILE%/.config/pragtical/plugins/`
:::

### Minimal Plugin Structure

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"

-- your plugin code here

command.add(nil, {
  ["myplugin:do-something"] = function()
    core.log("Hello from my plugin!")
    -- do plugin specific stuff
  end
})
```

**Key points:**
- First line must be `-- mod-version:3`
- Require the modules you need
- Register commands with `command.add()`
- Plugin file names must be valid Lua identifiers in lowercase (e.g., `myplugin.lua`, `auto_save.lua`) to work with config paths like `config.plugins.plugin_name`

## Example 1: Simple Command Plugin

A plugin that adds a command to insert the current date.

**File:** `user/plugins/insertdate.lua`

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"
local DocView = require "core.docview"

command.add("core.docview", {
  ["insertdate:insert-date"] = function()
    local date = os.date("%Y-%m-%d")
    core.active_view.doc:text_input(date)
  end,
  
  ["insertdate:insert-datetime"] = function()
    local datetime = os.date("%Y-%m-%d %H:%M:%S")
    core.active_view.doc:text_input(datetime)
  end
})
```

**Usage:** Open the command palette (Ctrl+Shift+P) and search for "insert date"

**Explanation:**
- `command.add("core.docview", ...)` - Commands only work in document views
- `core.active_view.doc:text_input()` - Insert text at cursor
- Command names use format: `category:action-name`

## Example 2: Running External Programs

A plugin that launches external programs and adds keyboard shortcuts.

**File:** `user/plugins/runner.lua`

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"
local keymap = require "core.keymap"

command.add(nil, {
  ["run:calculator"] = function()
    local cmd = {"calc"} -- or any other OS program
    process.start(cmd)
  end,

  ["run:build-project"] = function()
    local cwd = core.root_project().path
    local cmd = {"build.bat"} -- build project in the background
    process.start(cmd, {cwd = cwd})
  end,

  ["run:build-project-show-window"] = function()
    local cwd = core.root_project().path
    local cmd = {"cmd", "/c", "start", "build.bat"} -- show cmd window
    process.start(cmd, {cwd = cwd})
  end,
})

-- Add keyboard shortcuts
keymap.add({
  ['ctrl+alt+c'] = "run:calculator",
  ['ctrl+b'] = "run:build-project-show-window",
})
```

**Explanation:**
- `process` - Global API for running external programs (no require needed)
- `process.start(cmd)` - Launch external programs with command as a table
- `process.start(cmd, {cwd = cwd})` - Specify working directory with options table
- `core.root_project().path` - Get current project's root directory
- `keymap.add()` - Register keyboard shortcuts for commands
- Commands run in the background without blocking the editor

## Example 3: Creating a Custom View

A simple view that displays a message.

**File:** `user/plugins/messageview.lua`

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"
local View = require "core.view"
local style = require "core.style"

local MessageView = View:extend()

function MessageView:new()
  MessageView.super.new(self)
  self.message = "Hello, World!"
end

function MessageView:get_name()
  return "Message View"
end

function MessageView:draw()
  self:draw_background(style.background)
  
  local font = style.font
  local text = self.message
  local w = font:get_width(text)
  local h = font:get_height()
  
  -- Center the text
  local x = self.position.x + (self.size.x - w) / 2
  local y = self.position.y + (self.size.y - h) / 2
  
  renderer.draw_text(font, text, x, y, style.text)
end

-- Command to open the view
command.add(nil, {
  ["messageview:open"] = function()
    local node = core.root_view:get_active_node()
    node:add_view(MessageView())
  end
})
```

**Explanation:**
- Extend `View` with `:extend()`
- Call `super.new(self)` in constructor
- Override `get_name()` for tab title
- Override `draw()` to render
- Add to layout with `node:add_view()`

## Example 4: Interactive Custom View

A counter view with mouse interaction.

**File:** `user/plugins/counterview.lua`

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"
local View = require "core.view"
local style = require "core.style"

local CounterView = View:extend()

function CounterView:new()
  CounterView.super.new(self)
  self.count = 0
  self.button_rect = { x = 0, y = 0, w = 100, h = 30 }
end

function CounterView:get_name()
  return "Counter"
end

function CounterView:update_button_position()
  -- Center the button
  self.button_rect.x = self.position.x + (self.size.x - self.button_rect.w) / 2
  self.button_rect.y = self.position.y + self.size.y / 2
end

function CounterView:update()
  CounterView.super.update(self)
  self:update_button_position()
end

function CounterView:draw()
  self:draw_background(style.background)
  
  local font = style.font
  local big_font = style.big_font or font
  
  -- Draw count at top
  local count_text = tostring(self.count)
  local tw = big_font:get_width(count_text)
  local x = self.position.x + (self.size.x - tw) / 2
  local y = self.position.y + 50
  renderer.draw_text(big_font, count_text, x, y, style.text)
  
  -- Draw button
  local btn = self.button_rect
  renderer.draw_rect(btn.x, btn.y, btn.w, btn.h, style.accent)
  
  local btn_text = "Click Me"
  local btw = font:get_width(btn_text)
  local bth = font:get_height()
  local btx = btn.x + (btn.w - btw) / 2
  local bty = btn.y + (btn.h - bth) / 2
  renderer.draw_text(font, btn_text, btx, bty, style.background)
end

function CounterView:on_mouse_pressed(button, x, y, clicks)
  if button == "left" then
    local btn = self.button_rect
    -- Check if click is inside button
    if x >= btn.x and x <= btn.x + btn.w and
       y >= btn.y and y <= btn.y + btn.h then
      self.count = self.count + 1
      return true
    end
  end
  return CounterView.super.on_mouse_pressed(self, button, x, y, clicks)
end

command.add(nil, {
  ["counterview:open"] = function()
    local node = core.root_view:get_active_node()
    node:add_view(CounterView())
  end
})

-- Commands that only work when CounterView is active
command.add(CounterView, {
  ["counterview:increment"] = function(cv)
    cv.count = cv.count + 1
  end,
  
  ["counterview:reset"] = function(cv)
    cv.count = 0
  end
})
```

**Explanation:**
- `on_mouse_pressed()` handles clicks
- Return `true` to consume the event
- Use rectangles for hit testing
- `command.add(CounterView, ...)` - command only works in CounterView
- Predicate function automatically passes the view as first parameter

## Example 5: Plugin with Configuration

A plugin that shows how to add configuration.

**File:** `user/plugins/myconfig.lua`

```lua
-- mod-version:3
local core = require "core"
local config = require "core.config"
local command = require "core.command"
local common = require "core.common"
local style = require "core.style"

-- Initialize config with defaults
config.plugins.myconfig = common.merge({
  enabled = true,
  max_count = 100,
  custom_color = { 100, 150, 200, 255 },
  
  -- Config spec for settings GUI
  config_spec = {
    name = "My Config Plugin",
    {
      label = "Enabled",
      description = "Enable or disable this plugin",
      path = "enabled",
      type = "toggle",
      default = true
    },
    {
      label = "Max Count",
      description = "Maximum counter value",
      path = "max_count",
      type = "number",
      default = 100,
      min = 1,
      max = 1000
    },
    {
      label = "Custom Color",
      description = "Color for highlighting",
      path = "custom_color",
      type = "color",
      default = { 100, 150, 200, 255 }
    }
  }
}, config.plugins.myconfig)

-- Use the config
command.add(nil, {
  ["myconfig:show-settings"] = function()
    core.log("Enabled: %s, Max: %d", 
      tostring(config.plugins.myconfig.enabled),
      config.plugins.myconfig.max_count)
  end
})
```

**Explanation:**
- Use `common.merge()` to merge defaults with user settings
- `config_spec` enables GUI configuration
- Types: `"toggle"`, `"number"`, `"string"`, `"color"`, `"list_strings"`

## Example 6: Using CommandView for User Input

A plugin that presents a list of choices to the user.

**File:** `user/plugins/choices.lua`

```lua
-- mod-version:3
local core = require "core"
local command = require "core.command"

command.add(nil, {
  ["choices:pick-color"] = function()
    -- List of color choices
    local colors = {
      "Red",
      "Green", 
      "Blue",
      "Yellow",
      "Purple",
      "Orange"
    }
    
    core.command_view:enter("Pick a Color", {
      submit = function(text, item)
        -- item is the selected suggestion
        local choice = item and item.text or text
        core.log("You selected: %s", choice)
      end,
      suggest = function(text)
        -- Filter colors based on user input
        local suggestions = {}
        for _, color in ipairs(colors) do
          if color:lower():find(text:lower(), 1, true) then
            table.insert(suggestions, { text = color })
          end
        end
        return suggestions
      end
    })
  end
})
```

**Explanation:**
- `core.command_view:enter()` - Opens the command palette with custom input
- `submit` - Called when user presses Enter (receives text and selected item)
- `suggest` - Returns list of suggestions based on user input
- Suggestions are tables with `text` field
- User can type to filter the list or use arrow keys to select

## Command System

### Command Predicates

Commands can have predicates that determine when they're available:

```lua
-- Always available
command.add(nil, { ... })

-- Only in DocView
command.add("core.docview", { ... })

-- Only in specific view (inheritance check)
command.add(MyView, { ... })

-- Strict type check (exact match)
command.add("core.docview!", { ... })

-- Custom predicate function
command.add(function()
  return core.active_view:is(DocView) 
    and core.active_view.doc:has_selection()
end, {
  ["mycmd:do-something"] = function()
    -- Only runs if predicate returns true
  end
})
```

### Predicate with Extra Parameters

```lua
command.add(function()
  local view = core.active_view
  if view:is(DocView) and view.doc:has_selection() then
    return true, view, view.doc  -- Pass view and doc to command
  end
  return false
end, {
  ["mycmd:process"] = function(view, doc)
    -- Receives view and doc from predicate
    local text = doc:get_text(doc:get_selection())
    core.log("Selected: %s", text)
  end
})
```

## Useful APIs

### Core APIs

```lua
core.log("Message: %s", value)          -- Log to console
core.error("Error: %s", message)        -- Log error
core.active_view                        -- Current view
core.root_view                          -- Root view
core.root_view:get_active_node()        -- Active node
```

### Document APIs

```lua
doc:text_input(text)                              -- Insert text at cursor
doc:get_selection()                               -- Get selection range (line1, col1, line2, col2)
doc:get_text(line1, col1, line2, col2)            -- Get text in range
doc:insert(line, col, text)                       -- Insert text at position
doc:remove(line1, col1, line2, col2)              -- Remove text range
doc:set_selection(line1, col1, line2, col2)       -- Set selection range
doc:has_selection()                               -- Check if text is selected
```

### Renderer APIs

```lua
renderer.draw_rect(x, y, w, h, color)             -- Draw filled rectangle
renderer.draw_text(font, text, x, y, color)       -- Draw text
renderer.set_clip_rect(x, y, w, h)                -- Set clipping region
```

### Style

```lua
style.font                  -- Default font
style.big_font              -- Larger font
style.code_font             -- Monospace font
style.background            -- Background color
style.text                  -- Text color
style.accent                -- Accent color
style.selection             -- Selection color
```

## Plugin Loading

- **User plugins** in `user/plugins/`
- **Built-in plugins** in `data/plugins/`
- You can disable any plugin via `config.plugins.pluginname = false` in your init.lua

## Tips

1. **Always save original functions** when overriding
2. **Call super methods** in constructors and overrides
3. **Use config.plugins.yourname** for configuration
4. **Test predicates** to ensure commands appear correctly
5. **Keep draw() fast** - it's called every frame
6. **Return true from event handlers** to consume events

## Next Steps

- Read the other sections for a deeper understanding of the internals
- Look at built-in plugins in `data/plugins/` for examples
- Check `data/core/commands/` for built-in command implementations
