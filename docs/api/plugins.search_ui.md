---
sidebar_position: 47
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.search_ui

```lua
local search_ui = require "plugins.search_ui"
```

## config.plugins.search_ui

Configuration options for `search_ui` plugin.

### position

```lua
(field) position: "bottom"|"right"|"top"
```

Location of search interface.

---

### replace_core_find

```lua
(field) replace_core_find: boolean
```

Replaces the core find view when using the find shortcut.

---

## plugins.search_ui.result

-----------------------------------------------------------------------------
 Helper class to keep track on amount of matches and display on status label
-----------------------------------------------------------------------------

### col

```lua
(field) col: integer
```

---

### line

```lua
(field) line: integer
```

---

## plugins.search_ui.results

### doc

```lua
(field) doc: (core.doc)?
```

---

### matches

```lua
(field) matches: plugins.search_ui.result[]
```

---

### prev_search_id

```lua
(field) prev_search_id: integer
```

---

### text

```lua
(field) text: string
```

---

### clear

```lua
(method) plugins.search_ui.results:clear()
```

---

### current

```lua
(method) plugins.search_ui.results:current()
  -> integer
```

---

### find

```lua
(method) plugins.search_ui.results:find(text: string, doc: core.doc, force: any)
```

---

### set_status

```lua
(method) plugins.search_ui.results:set_status()
```

---

### update

```lua
(method) plugins.search_ui.results:update()
```

---

## plugins.search_ui.ui

The main user interface container.

### init_size

```lua
(field) init_size: boolean
```

---

### name

```lua
(field) name: string
```

---

### prev_view

```lua
(field) prev_view: (core.docview)?
```

---

### scrollable

```lua
(field) scrollable: boolean
```

---

### on_scale_change

```lua
(method) plugins.search_ui.ui:on_scale_change(...any)
```

---

### update

```lua
(method) plugins.search_ui.ui:update()
```

---

### update_bottom_positioning

```lua
(method) plugins.search_ui.ui:update_bottom_positioning()
```

---

### update_right_positioning

```lua
(method) plugins.search_ui.ui:update_right_positioning()
```

---

### update_size

```lua
(method) plugins.search_ui.ui:update_size()
```

---

