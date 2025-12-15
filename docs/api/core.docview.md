---
sidebar_position: 29
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.docview

```lua
local docview = require "core.docview"
```

## __index

```lua
(field) __index: core.object
```

---

## cache_font

```lua
(field) cache_font: unknown
```

---

## cache_font_size

```lua
(field) cache_font_size: unknown
```

---

## cache_indent_size

```lua
(field) cache_indent_size: unknown
```

---

## context

```lua
(field) context: string
```

---

## current_scale

```lua
(field) current_scale: number
```

---

## cursor

```lua
(field) cursor: string
```

---

## doc

```lua
(field) doc: any
```

---

## font

```lua
(field) font: string
```

---

## h_scrollbar

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

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## hovering_gutter

```lua
(field) hovering_gutter: boolean
```

---

## ime_selection

```lua
(field) ime_selection: table
```

---

## ime_status

```lua
(field) ime_status: boolean
```

---

## last_col1

```lua
(field) last_col1: unknown
```

---

## last_col2

```lua
(field) last_col2: unknown
```

---

## last_line1

```lua
(field) last_line1: unknown
```

---

## last_line2

```lua
(field) last_line2: unknown
```

---

## last_x_offset

```lua
(field) last_x_offset: table
```

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## scroll

```lua
(field) scroll: core.view.scroll
```

---

## scrollable

```lua
(field) scrollable: boolean
```

---

## size

```lua
(field) size: core.view.position
```

---

## super

```lua
(field) super: core.view
```

Base view.

---

## translate

```lua
(field) translate: table
```

---

## v_scrollbar

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

## __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

## __tostring

```lua
(method) core.docview:__tostring()
  -> string
```

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## draw

```lua
(method) core.docview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_caret

```lua
(method) core.docview:draw_caret(x: any, y: any, line: any, col: any)
```

---

## draw_ime_decoration

```lua
(method) core.docview:draw_ime_decoration(line1: any, col1: any, line2: any, col2: any)
```

---

## draw_line_body

```lua
(method) core.docview:draw_line_body(line: any, x: any, y: any)
  -> integer
```

---

## draw_line_gutter

```lua
(method) core.docview:draw_line_gutter(line: any, x: any, y: any, width: any)
  -> integer
```

---

## draw_line_highlight

```lua
(method) core.docview:draw_line_highlight(x: any, y: any)
```

---

## draw_line_text

```lua
(method) core.docview:draw_line_text(line: any, x: any, y: any)
  -> integer
```

---

## draw_overlay

```lua
(method) core.docview:draw_overlay()
```

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

---

## extend

```lua
(method) core.object:extend()
  -> core.object
```

---

## extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

## get_col_x_offset

```lua
(method) core.docview:get_col_x_offset(line: any, col: any)
  -> integer|unknown
```

---

## get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> number
  2. number
  3. number
  4. number
```

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

---

## get_filename

```lua
(method) core.docview:get_filename()
  -> string|unknown
```

---

## get_font

```lua
(method) core.docview:get_font()
  -> unknown
```

---

## get_gutter_width

```lua
(method) core.docview:get_gutter_width()
  -> number|unknown
  2. number
```

---

## get_h_scrollable_size

```lua
(method) core.docview:get_h_scrollable_size()
  -> number
```

---

## get_line_height

```lua
(method) core.docview:get_line_height()
  -> integer
```

---

## get_line_screen_position

```lua
(method) core.docview:get_line_screen_position(line: any, col: any)
  -> number
  2. unknown
```

---

## get_line_text_y_offset

```lua
(method) core.docview:get_line_text_y_offset()
  -> unknown
```

---

## get_name

```lua
(method) core.docview:get_name()
  -> unknown
```

---

## get_scrollable_size

```lua
(method) core.docview:get_scrollable_size()
  -> number
```

---

## get_visible_cols_range

```lua
(method) core.docview:get_visible_cols_range(line: integer, extra_cols?: integer)
  -> col1: integer
  2. col2: integer
  3. ucol1: integer
  4. ucol2: integer
```

Get an estimated range of visible columns. It is an estimate because fonts
and their fallbacks may not be monospaced or may differ in size. This
function provides a way of optimization on really long lines for plugins
that perform drawing operations on them.

It is good practice to set the `extra_cols` parameter to a value that leaves
room for the differences in font sizes.

@*param* `extra_cols` — Amount of columns to deduce on col1 and include on col2 (default: 100)

---

## get_visible_line_range

```lua
(method) core.docview:get_visible_line_range()
  -> integer
  2. integer
```

---

## get_x_offset_col

```lua
(method) core.docview:get_x_offset_col(line: any, x: any)
  -> integer
```

---

## is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

## mouse_selection

```lua
(method) core.docview:mouse_selection(doc: any, snap_type: any, line1: any, col1: any, line2: any, col2: any)
  -> unknown
  2. integer|unknown
  3. unknown
  4. integer|unknown
```

---

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) core.docview:new(doc: any)
```

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> boolean
```

---

## on_ime_text_editing

```lua
(method) core.docview:on_ime_text_editing(text: any, start: any, length: any)
```

---

## on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.docview:on_mouse_moved(x: number, y: number, ...any)
```

---

## on_mouse_pressed

```lua
(method) core.docview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

---

## on_mouse_released

```lua
(method) core.docview:on_mouse_released(...any)
```

---

## on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> boolean
```

@*param* `y` — Vertical scroll delta; positive is "up"

@*param* `x` — Horizontal scroll delta; positive is "left"

@*return* — Capture event

---

## on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

## on_text_input

```lua
(method) core.docview:on_text_input(text: string)
```

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

---

## resolve_screen_position

```lua
(method) core.docview:resolve_screen_position(x: any, y: any)
  -> number
  2. integer
```

---

## scroll_to_line

```lua
(method) core.docview:scroll_to_line(line: any, ignore_if_visible: any, instant: any)
```

---

## scroll_to_make_visible

```lua
(method) core.docview:scroll_to_make_visible(line: any, col: any, instant: any)
```

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> boolean
```

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> boolean
```

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> boolean
```

---

## supports_text_input

```lua
(method) core.docview:supports_text_input()
  -> boolean
```

---

## try_close

```lua
(method) core.docview:try_close(do_close: any)
```

---

## update

```lua
(method) core.docview:update()
```

---

## update_ime_location

```lua
(method) core.docview:update_ime_location()
```

Update the composition bounding box that the system IME
will consider when drawing its interface

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

