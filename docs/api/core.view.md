---
sidebar_position: 39
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.view

Base view.

```lua
local view = require "core.view"
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
(field) super: core.object
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

## core.view.position

### x

```lua
(field) x: number
```

---

### y

```lua
(field) y: number
```

---

## core.view.scroll

### to

```lua
(field) to: core.view.position
```

---

### x

```lua
(field) x: number
```

---

### y

```lua
(field) y: number
```

---

## core.view.scrollbar

### h

```lua
(field) h: core.view.thumbtrack
```

---

### w

```lua
(field) w: core.view.thumbtrackwidth
```

---

### x

```lua
(field) x: core.view.thumbtrack
```

---

### y

```lua
(field) y: core.view.thumbtrack
```

---

## core.view.thumbtrack

### thumb

```lua
(field) thumb: number
```

---

### track

```lua
(field) track: number
```

---

## core.view.thumbtrackwidth

### thumb

```lua
(field) thumb: number
```

---

### to

```lua
(field) to: core.view.thumbtrack
```

---

### track

```lua
(field) track: number
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
(method) core.view:__tostring()
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
(method) core.view:draw()
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

## get_name

```lua
(method) core.view:get_name()
  -> string
```

---

## get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> number
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
(method) core.view:new()
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
(method) core.view:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean|nil
```

---

## on_mouse_pressed

```lua
(method) core.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

return boolean

```lua
button:
    | 'left'
    | 'right'
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
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

## on_text_input

```lua
(method) core.view:on_text_input(text: string)
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
(method) core.view:update()
```

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

