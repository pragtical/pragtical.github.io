---
sidebar_position: 48
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.settings

```lua
local settings = require "plugins.settings"
```

## config

```lua
(field) config: table
```

---

## core

```lua
(field) core: table
```

---

## default_keybindings

```lua
(field) default_keybindings: table
```

---

## plugin_sections

```lua
(field) plugin_sections: table
```

---

## plugins

```lua
(field) plugins: table
```

---

## sections

```lua
(field) sections: table
```

---

## type

```lua
(field) type: table<string, integer>
```

Enumeration for the different types of settings.

---

## ui

```lua
(field) ui: settings.ui
```

---

## settings.option

Represents a setting to render on a settings pane.

### default

```lua
(field) default: boolean|string|number|table<integer, integer>|table<integer, string>
```

Default value of the option

---

### description

```lua
(field) description: string
```

Description of the option eg: "Modifies the document indentation"

---

### exists

```lua
(field) exists: boolean
```

When FILE or DIRECTORY this flag tells the path should exist.

---

### filters

```lua
(field) filters: table<integer, string>
```

Lua patterns used on FILE or DIRECTORY to filter browser results and
also force the selection to match one of the filters.

---

### font_error

```lua
(field) font_error: boolean
```

Flag set to true when loading user defined fonts fail

---

### fonts_list

```lua
(field) fonts_list: table<string, renderer.font>
```

Optionally used for FONT to store the generated font group.

---

### get_value

```lua
(field) get_value: fun(value: any):any|nil
```

Optional function that is used to manipulate the current value on retrieval.

---

### icon

```lua
(field) icon: string
```

The icon set for a BUTTON

---

### label

```lua
(field) label: string
```

Title displayed to the user eg: "My Option"

---

### max

```lua
(field) max: number
```

Used for NUMBER to indiciate the maximum number allowed

---

### min

```lua
(field) min: number
```

Used for NUMBER to indicate the minimum number allowed

---

### on_apply

```lua
(field) on_apply: fun(value: any)|nil
```

Optional function executed when the option value is applied.

---

### on_click

```lua
(field) on_click: string|fun(button: string, x: integer, y: integer)|nil
```

Command or function executed when a BUTTON is clicked

---

### path

```lua
(field) path: string
```

Config path in the config table, eg: section.myoption, myoption, etc...

---

### set_value

```lua
(field) set_value: fun(value: any):any|nil
```

Optional function that is used to manipulate the saved value on save.

---

### step

```lua
(field) step: number
```

Used for NUMBER to indiciate the increment/decrement amount

---

### type

```lua
(field) type: integer|`settings.type.BUTTON`|`settings.type.COLOR`|`settings.type.DIRECTORY`|`settings.type.FILE`...(+6)
```

Type of option that will be used to render an appropriate control

---

### values

```lua
(field) values: table
```

Used in a SELECTION to provide the list of valid options

---

## settings.ui

### about

```lua
(field) about: widget
```

---

### colors

```lua
(field) colors: widget
```

---

### core

```lua
(field) core: widget
```

---

### core_sections

```lua
(field) core_sections: widget.foldingbook
```

---

### defer_draw

```lua
(field) defer_draw: boolean
```

---

### draggable

```lua
(field) draggable: boolean
```

---

### keybinds

```lua
(field) keybinds: widget
```

---

### name

```lua
(field) name: string
```

---

### notebook

```lua
(field) notebook: widget.notebook
```

---

### plugin_sections

```lua
(field) plugin_sections: widget.foldingbook
```

---

### plugins

```lua
(field) plugins: widget
```

---

### scrollable

```lua
(field) scrollable: boolean
```

---

### disable_plugin

```lua
(method) settings.ui:disable_plugin(plugin: string)
```

Unload a plugin settings from plugins section.

---

### enable_plugin

```lua
(method) settings.ui:enable_plugin(plugin: string)
```

Load plugin and append its settings to the plugins section.

---

### load_color_settings

```lua
(method) settings.ui:load_color_settings()
```

Generate the list of all available colors with preview

---

### load_core_settings

```lua
(method) settings.ui:load_core_settings()
```

Generate all the widgets for core settings.

---

### load_keymap_settings

```lua
(method) settings.ui:load_keymap_settings()
```

Generate the list of all available commands and allow editing their keymaps.

---

### load_plugin_settings

```lua
(method) settings.ui:load_plugin_settings()
```

Generate all the widgets for plugin settings.

---

### new

```lua
(method) settings.ui:new()
```

Constructor

---

### setup_about

```lua
(method) settings.ui:setup_about()
```

---

### update

```lua
(method) settings.ui:update()
```

Reposition and resize core and plugin widgets.

---

## add

```lua
function plugins.settings.add(section: string, options: settings.option[], plugin_name?: string, overwrite?: boolean)
```

Add a new settings section to the settings UI

@*param* `plugin_name` — Optional name of plugin

@*param* `overwrite` — Overwrite previous section options

---

