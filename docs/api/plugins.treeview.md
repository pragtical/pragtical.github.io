---
sidebar_position: 55
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.treeview

```lua
local treeview = require "plugins.treeview"
```

## cache

```lua
(field) cache: table
```

---

## count_lines

```lua
(field) count_lines: integer
```

---

## expanded

```lua
(field) expanded: table
```

---

## hovered_item

```lua
(field) hovered_item: unknown
```

---

## init_size

```lua
(field) init_size: boolean
```

---

## item_icon_width

```lua
(field) item_icon_width: number
```

---

## item_text_spacing

```lua
(field) item_text_spacing: number
```

---

## last_active_view

```lua
(field) last_active_view: unknown
```

---

## last_scroll_y

```lua
(field) last_scroll_y: integer
```

---

## scroll_width

```lua
(field) scroll_width: integer
```

---

## scrollable

```lua
(field) scrollable: boolean
```

---

## selected_item

```lua
(field) selected_item: any
```

---

## show_hidden

```lua
(field) show_hidden: boolean
```

---

## show_ignored

```lua
(field) show_ignored: boolean
```

---

## target_size

```lua
(field) target_size: any
```

---

## tooltip

```lua
(field) tooltip: table
```

---

## visible

```lua
(field) visible: boolean
```

---

## watches

```lua
(field) watches: table
```

---

## config.plugins.treeview

Configuration options for `treeview` plugin.

### animate_scroll_to_focused_file

```lua
(field) animate_scroll_to_focused_file: boolean
```

Smoothly scroll to focused file.

---

### config_spec

```lua
(field) config_spec: table
```

The config specification used by gui generators

---

### expand_dirs_to_focused_file

```lua
(field) expand_dirs_to_focused_file: boolean
```

Automatically expands directories to select focused file.

---

### highlight_focused_file

```lua
(field) highlight_focused_file: boolean
```

Selects the file you are editing on the treeview.

---

### scroll_to_focused_file

```lua
(field) scroll_to_focused_file: boolean
```

Automatically scrolls the treeview to focused file.

---

### show_hidden

```lua
(field) show_hidden: boolean
```

Show hidden files and directories.

---

### show_ignored

```lua
(field) show_ignored: boolean
```

Show ignored files and directories.

---

### size

```lua
(field) size: number
```

Default treeview width.

---

## __tostring

```lua
(method) plugins.treeview:__tostring()
  -> string
```

---

## draw

```lua
(method) plugins.treeview:draw()
```

---

## draw_item

```lua
(method) plugins.treeview:draw_item(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
  2. number
  3. number
  4. number
```

---

## draw_item_background

```lua
(method) plugins.treeview:draw_item_background(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
```

---

## draw_item_body

```lua
(method) plugins.treeview:draw_item_body(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
  2. number
  3. number
  4. number
```

---

## draw_item_chevron

```lua
(method) plugins.treeview:draw_item_chevron(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
```

---

## draw_item_icon

```lua
(method) plugins.treeview:draw_item_icon(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
```

---

## draw_item_text

```lua
(method) plugins.treeview:draw_item_text(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
  2. number
  3. number
  4. number
```

---

## draw_tooltip

```lua
(method) plugins.treeview:draw_tooltip()
```

---

## each_item

```lua
(method) plugins.treeview:each_item()
  -> fun(...any):...unknown
```

---

## get_cached

```lua
(method) plugins.treeview:get_cached(project: any, path: any)
  -> table|unknown|nil
```

---

## get_h_scrollable_size

```lua
(method) plugins.treeview:get_h_scrollable_size()
  -> number
```

---

## get_item

```lua
(method) plugins.treeview:get_item(item: any, where: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_item_height

```lua
(method) plugins.treeview:get_item_height()
  -> number
```

---

## get_item_icon

```lua
(method) plugins.treeview:get_item_icon(item: any, active: any, hovered: any)
  -> string
  2. renderer.font
  3. unknown
```

---

## get_item_text

```lua
(method) plugins.treeview:get_item_text(item: any, active: any, hovered: any)
  -> unknown
  2. renderer.font
  3. unknown
```

---

## get_items

```lua
(method) plugins.treeview:get_items(project: any, path: any, x: any, y: any, w: any, h: any)
  -> integer
```

---

## get_name

```lua
(method) plugins.treeview:get_name()
  -> nil
```

---

## get_next

```lua
(method) plugins.treeview:get_next(item: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_parent

```lua
(method) plugins.treeview:get_parent(item: any)
  -> unknown|nil
  2. unknown|nil
```

---

## get_previous

```lua
(method) plugins.treeview:get_previous(item: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_scrollable_size

```lua
(method) plugins.treeview:get_scrollable_size()
  -> number
```

---

## get_text_bounding_box

```lua
(method) plugins.treeview:get_text_bounding_box(item: any, x: any, y: any, w: any, h: any)
  -> unknown
  2. unknown
  3. number
  4. unknown
```

---

## new

```lua
(method) plugins.treeview:new()
```

---

## on_mouse_left

```lua
(method) plugins.treeview:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) plugins.treeview:on_mouse_moved(px: any, py: any, ...any)
```

---

## on_scale_change

```lua
(method) plugins.treeview:on_scale_change(new_scale: any, prev_scale: any)
```

---

## open_doc

```lua
(method) plugins.treeview:open_doc(filename: any)
```

---

## set_selection

```lua
(method) plugins.treeview:set_selection(selection: any, selection_y: any, center: any, instant: any)
```

---

## set_selection_to_path

```lua
(method) plugins.treeview:set_selection_to_path(path: string, expand: boolean, scroll_to: boolean, instant: boolean)
  -> table?
```

Sets the selection to the file with the specified path.

@*param* `path` — Absolute path of item to select

@*param* `expand` — Expand dirs leading to the item

@*param* `scroll_to` — Scroll to make the item visible

@*param* `instant` — Don't animate the scroll

@*return* — The selected item

---

## set_target_size

```lua
(method) plugins.treeview:set_target_size(axis: any, value: any)
  -> boolean
```

---

## toggle_expand

```lua
(method) plugins.treeview:toggle_expand(toggle: any, item: any)
```

---

## update

```lua
(method) plugins.treeview:update()
```

---

