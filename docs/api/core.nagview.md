---
sidebar_position: 26
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.nagview

```lua
local nagview = require "core.nagview"
```

## __index

```lua
(field) __index: core.object
```

---

## context

```lua
(field) context: 'application'|'session'
```

---

## current_scale

```lua
(field) current_scale: number
```

---

## cursor

```lua
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizev'
```

---

## dim_alpha

```lua
(field) dim_alpha: integer
```

---

## force_focus

```lua
(field) force_focus: boolean
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

## hovered_item

```lua
(field) hovered_item: any
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## message

```lua
(field) message: unknown
```

---

## on_mouse_pressed_root

```lua
(field) on_mouse_pressed_root: unknown
```

---

## on_selected

```lua
(field) on_selected: unknown
```

---

## options

```lua
(field) options: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## queue

```lua
(field) queue: table
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

## show_height

```lua
(field) show_height: integer
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

## target_height

```lua
(field) target_height: integer|unknown
```

self.target_height is the nagview height needed to display the message and
 the buttons, excluding the top and bottom padding space.

---

## title

```lua
(field) title: unknown
```

---

## underline_progress

```lua
(field) underline_progress: integer
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

## visible

```lua
(field) visible: boolean
```

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
(method) core.object:__tostring()
  -> string
```

Metamethod to get a string representation of an object.

---

## change_hovered

```lua
(method) core.nagview:change_hovered(i: any)
```

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## dim_window_content

```lua
(method) core.nagview:dim_window_content()
```

---

## draw

```lua
(method) core.nagview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

---

## each_option

```lua
(method) core.nagview:each_option()
  -> fun(...any):...unknown
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

## get_buttons_height

```lua
(method) core.nagview:get_buttons_height()
  -> unknown
```

Buttons height without padding

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

## get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> number
```

---

## get_line_height

```lua
(method) core.nagview:get_line_height()
  -> integer
```

The two methods below are duplicated from DocView

---

## get_line_text_y_offset

```lua
(method) core.nagview:get_line_text_y_offset()
  -> unknown
```

---

## get_message_height

```lua
(method) core.nagview:get_message_height()
  -> unknown
```

---

## get_name

```lua
(method) core.view:get_name()
  -> string
```

---

## get_scrollable_size

```lua
(method) core.nagview:get_scrollable_size()
  -> number
```

---

## get_target_height

```lua
(method) core.nagview:get_target_height()
  -> number
```

---

## get_title

```lua
(method) core.nagview:get_title()
  -> unknown
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

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) core.nagview:new()
```

---

## next

```lua
(method) core.nagview:next()
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
(method) core.view:on_ime_text_editing(text: any, start: any, length: any)
```

---

## on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.nagview:on_mouse_moved(mx: number, my: number, ...any)
```

---

## on_mouse_pressed

```lua
(method) core.nagview:on_mouse_pressed(button: 'left'|'right', mx: number, my: number, clicks: integer)
  -> boolean
```

---

## on_mouse_released

```lua
(method) core.view:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

```lua
button:
    | 'left'
    | 'right'
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
(method) core.nagview:on_scale_change(new_scale: number, old_scale: number)
```

---

## on_text_input

```lua
(method) core.nagview:on_text_input(text: string)
```

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
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

## show

```lua
(method) core.nagview:show(title: any, message: any, options: any, on_select: any)
```

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

---

## try_close

```lua
(method) core.view:try_close(do_close: any)
```

---

## update

```lua
(method) core.nagview:update()
```

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

