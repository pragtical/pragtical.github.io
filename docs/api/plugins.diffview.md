---
sidebar_position: 51
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.diffview

Functionality to view the textual differences of two elements.

```lua
local diffview = require "plugins.diffview"
```

## config.plugins.diffview

Configuration options for `diffview` plugin.

### log_times

```lua
(field) log_times: boolean
```

Logs the amount of time taken to recompute differences.

---

### plain_text

```lua
(field) plain_text: boolean
```

Disable syntax coloring on changed lines to improve visibility.

---

### plain_text_color

```lua
(field) plain_text_color: renderer.color
```

The color used on changed lines when plain text is enabled.

---

## plugins.diffview.view

### __index

```lua
(field) __index: core.object
```

---

### a_changes

```lua
(field) a_changes: diff.changes[]
```

---

### a_gaps

```lua
(field) a_gaps: table<integer, table<integer, integer>>
```

---

### b_changes

```lua
(field) b_changes: diff.changes[]
```

---

### b_gaps

```lua
(field) b_gaps: table<integer, table<integer, integer>>
```

---

### compare_type

```lua
(field) compare_type: plugins.diffview.view.type
```

---

### context

```lua
(field) context: 'application'|'session'
```

---

### current_scale

```lua
(field) current_scale: number
```

---

### cursor

```lua
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizev'
```

---

### doc_view_a

```lua
(field) doc_view_a: core.docview
```

---

### doc_view_b

```lua
(field) doc_view_b: core.docview
```

---

### h_scrollbar

```lua
(field) h_scrollbar: core.scrollbar
```

Scrollbar
Use Scrollbar:set_size to set the bounding box of the view the scrollbar belongs to.
Use Scrollbar:update to update the scrollbar animations.
Use Scrollbar:draw to draw the scrollbar.
Use Scrollbar:on_mouse_pressed, Scrollbar:on_mouse_released,
Scrollbar:on_mouse_moved and Scrollbar:on_mouse_left to react to mouse movements;
the scrollbar won't update automatically.
Use Scrollbar:set_percent to set the scrollbar location externally.

To manage all the orientations, the scrollbar changes the coordinates system
accordingly. The "normal" coordinate system adapts the scrollbar coordinates
as if it's always a vertical scrollbar, positioned at the end of the bounding box.

---

### hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

### hovered_sync

```lua
(field) hovered_sync: (plugins.diffview.view.hovered_sync)?
```

Represents the active sync indicator.

---

### position

```lua
(field) position: core.view.position
```

---

### scroll

```lua
(field) scroll: core.view.scroll
```

---

### scrollable

```lua
(field) scrollable: boolean
```

---

### size

```lua
(field) size: core.view.position
```

---

### skip_update_diff

```lua
(field) skip_update_diff: boolean
```

---

### super

```lua
(field) super: core.view
```

Base view.

---

### type

```lua
(field) type: enum plugins.diffview.view.type
```

---

### updater_idx

```lua
(field) updater_idx: integer
```

---

### v_scrollbar

```lua
(field) v_scrollbar: core.scrollbar
```

Scrollbar
Use Scrollbar:set_size to set the bounding box of the view the scrollbar belongs to.
Use Scrollbar:update to update the scrollbar animations.
Use Scrollbar:draw to draw the scrollbar.
Use Scrollbar:on_mouse_pressed, Scrollbar:on_mouse_released,
Scrollbar:on_mouse_moved and Scrollbar:on_mouse_left to react to mouse movements;
the scrollbar won't update automatically.
Use Scrollbar:set_percent to set the scrollbar location externally.

To manage all the orientations, the scrollbar changes the coordinates system
accordingly. The "normal" coordinate system adapts the scrollbar coordinates
as if it's always a vertical scrollbar, positioned at the end of the bounding box.

---

### views_patched

```lua
(field) views_patched: boolean
```

---

### __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

### __tostring

```lua
(method) core.view:__tostring()
  -> string
```

---

### clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

### draw

```lua
(method) plugins.diffview.view:draw()
```

---

### draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

### draw_scrollbar

```lua
(method) plugins.diffview.view:draw_scrollbar()
```

---

### extend

```lua
(method) core.object:extend()
  -> core.object
```

---

### extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

### get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> number
  2. number
  3. number
  4. number
```

---

### get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

---

### get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> number
```

---

### get_name

```lua
(method) plugins.diffview.view:get_name()
  -> string
```

---

### get_scrollable_size

```lua
(method) plugins.diffview.view:get_scrollable_size()
  -> number
```

---

### is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

### move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

### new

```lua
(method) plugins.diffview.view:new(a: string, b: string, compare_type?: plugins.diffview.view.type, names?: plugins.diffview.view.string_names)
```

Constructor

---

### on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> boolean
```

---

### on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: any, start: any, length: any)
```

---

### on_mouse_left

```lua
(method) plugins.diffview.view:on_mouse_left()
```

---

### on_mouse_moved

```lua
(method) plugins.diffview.view:on_mouse_moved(...any)
  -> boolean
```

---

### on_mouse_pressed

```lua
(method) plugins.diffview.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

---

### on_mouse_released

```lua
(method) plugins.diffview.view:on_mouse_released(...any)
```

---

### on_mouse_wheel

```lua
(method) plugins.diffview.view:on_mouse_wheel(y: number, x: number)
```

---

### on_scale_change

```lua
(method) plugins.diffview.view:on_scale_change(...any)
```

---

### on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

---

### on_touch_moved

```lua
(method) plugins.diffview.view:on_touch_moved(...any)
```

---

### patch_views

```lua
(method) plugins.diffview.view:patch_views()
```

---

### scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> boolean
```

---

### scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> boolean
```

---

### scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> boolean
```

---

### supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

---

### sync

```lua
(method) plugins.diffview.view:sync(line: any, target_line: any, is_a: any)
```

---

### sync_selected

```lua
(method) plugins.diffview.view:sync_selected()
```

---

### try_close

```lua
(method) core.view:try_close(do_close: any)
```

---

### update

```lua
(method) plugins.diffview.view:update()
```

---

### update_diff

```lua
(method) plugins.diffview.view:update_diff()
```

Updates the registered differences between current side A and B.

---

### update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

## plugins.diffview.view.hovered_sync

Represents the active sync indicator.

### is_a

```lua
(field) is_a: boolean
```

---

### line

```lua
(field) line: integer
```

---

### target_line

```lua
(field) target_line: integer
```

---

## plugins.diffview.view.string_names

Names used when a or b are not files.

### a

```lua
(field) a: string?
```

---

### b

```lua
(field) b: string?
```

---

## plugins.diffview.view.type

```lua
\{
    STRING_FILE: integer = 1,
    FILE_STRING: integer = 2,
    FILE_FILE: integer = 3,
    STRING_STRING: integer = 4,
\}
```

## file_to_file

```lua
function plugins.diffview.file_to_file(a: string, b: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a file to file diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

## file_to_string

```lua
function plugins.diffview.file_to_string(a: string, b: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a file to string diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

## string_to_file

```lua
function plugins.diffview.string_to_file(a: string, b: string, a_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to file diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

## string_to_string

```lua
function plugins.diffview.string_to_string(a: string, b: string, a_name?: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to string diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

