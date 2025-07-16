---
sidebar_position: 81
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.scrollbar

```lua
local scrollbar = require "widget.scrollbar"
```

## __index

```lua
(field) __index: core.object
```

---

## alignment

```lua
(field) alignment: "e"|"s"
```

Start or End (left to right, top to bottom)

---

## contracted_margin

```lua
(field) contracted_margin: number?
```

Override the default value specified by `style.contracted_scrollbar_margin`

---

## contracted_size

```lua
(field) contracted_size: number?
```

Override the default value specified by `style.scrollbar_size`

---

## direction

```lua
(field) direction: "h"|"v"
```

Vertical or Horizontal

---

## drag_start_offset

```lua
(field) drag_start_offset: integer
```

Private. Used to offset the start of the drag from the top of the thumb

---

## dragging

```lua
(field) dragging: boolean
```

Scrollbar dragging status

---

## expand_percent

```lua
(field) expand_percent: number
```

Private. Used to keep track of animations

---

## expanded_margin

```lua
(field) expanded_margin: number?
```

Override the default value specified by `style.expanded_scrollbar_margin`

---

## expanded_size

```lua
(field) expanded_size: number?
```

Override the default value specified by `style.expanded_scrollbar_size`

---

## force_status

```lua
(field) force_status: "contracted"|"expanded"|false
```

Force the scrollbar status

---

## hovering

```lua
(field) hovering: table
```

What is currently being hovered. `thumb` implies` track`

---

## minimum_thumb_size

```lua
(field) minimum_thumb_size: number?
```

Override the default value specified by `style.minimum_thumb_size`

---

## normal_rect

```lua
(field) normal_rect: table
```

---

## percent

```lua
(field) percent: integer
```

Position in percent \[0-1\]

---

## rect

```lua
(field) rect: table
```

Position information of the owner

---

## super

```lua
(field) super: widget.scrollbar
```

---

## widget_parent

```lua
(field) widget_parent: widget
```

A base widget

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
(method) core.scrollbar:__tostring()
  -> string
```

---

## _get_thumb_rect_normal

```lua
(method) core.scrollbar:_get_thumb_rect_normal()
  -> number
  2. number
  3. number
  4. number
```

---

## _get_track_rect_normal

```lua
(method) core.scrollbar:_get_track_rect_normal()
  -> number
  2. integer
  3. number
  4. integer
```

---

## _on_mouse_moved_normal

```lua
(method) core.scrollbar:_on_mouse_moved_normal(x: any, y: any, dx: any, dy: any)
  -> boolean|number
```

---

## _on_mouse_pressed_normal

```lua
(method) core.scrollbar:_on_mouse_pressed_normal(button: any, x: any, y: any, clicks: any)
  -> boolean|number
```

---

## _on_mouse_released_normal

```lua
(method) core.scrollbar:_on_mouse_released_normal(button: any, x: any, y: any)
  -> boolean
```

---

## _overlaps_normal

```lua
(method) core.scrollbar:_overlaps_normal(x: any, y: any)
  -> string|unknown
```

---

## _update_hover_status_normal

```lua
(method) core.scrollbar:_update_hover_status_normal(x: any, y: any)
  -> boolean
```

Updates the scrollbar hover status.
This gets called by other functions and shouldn't be called manually

---

## draw

```lua
(method) core.scrollbar:draw()
```

Draw both the scrollbar track and thumb

---

## draw_thumb

```lua
(method) core.scrollbar:draw_thumb()
```

Draw the scrollbar thumb

---

## draw_track

```lua
(method) core.scrollbar:draw_track()
```

Draw the scrollbar track

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

## get_thumb_rect

```lua
(method) core.scrollbar:get_thumb_rect()
  -> integer
  2. integer
  3. integer
  4. integer
```

Get the thumb rect (the part of the scrollbar that can be dragged)

@*return* — x, y, w, h

---

## get_track_rect

```lua
(method) core.scrollbar:get_track_rect()
  -> number
  2. number
  3. number
  4. number
```

Get the track rect (the "background" of the scrollbar)

@*return* — x, y, w, h

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

## new

```lua
(method) widget.scrollbar:new(parent: ScrollbarOptions, options: any)
```

---

## normal_to_real

```lua
(method) core.scrollbar:normal_to_real(x: any, y: any, w: any, h: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
```

---

## on_mouse_left

```lua
(method) core.scrollbar:on_mouse_left()
```

Updates the scrollbar hovering status

---

## on_mouse_moved

```lua
(method) core.scrollbar:on_mouse_moved(x: any, y: any, dx: any, dy: any)
  -> boolean|number
```

Updates the scrollbar with mouse moved info.
Won't update the scrollbar position automatically.
Use Scrollbar:set_percent to update it.

This updates the hovering status.

Returns a falsy value if the event happened outside the scrollbar.
Returns `true` if the scrollbar is hovered.
If the scrollbar was being dragged, this returns a value between 0 and 1
representing the percent of the position.

---

## on_mouse_pressed

```lua
(method) core.scrollbar:on_mouse_pressed(button: any, x: any, y: any, clicks: any)
  -> boolean|number
```

Updates the scrollbar with mouse pressed info.
Won't update the scrollbar position automatically.
Use Scrollbar:set_percent to update it.

This sets the dragging status if needed.

Returns a falsy value if the event happened outside the scrollbar.
Returns `true` if the thumb was pressed.
If the track was pressed this returns a value between 0 and 1
representing the percent of the position.

---

## on_mouse_released

```lua
(method) core.scrollbar:on_mouse_released(button: any, x: any, y: any)
  -> boolean|nil
```

Updates the scrollbar dragging status

---

## overlaps

```lua
(method) core.scrollbar:overlaps(x: any, y: any)
  -> "thumb"|"track"|nil
```

Get what part of the scrollbar the coordinates overlap

```lua
return #1:
    | "thumb"
    | "track"
```

---

## real_to_normal

```lua
(method) core.scrollbar:real_to_normal(x: any, y: any, w: any, h: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
```

---

## set_forced_status

```lua
(method) widget.scrollbar:set_forced_status(status: "contracted"|"expanded"|false)
```

---

## set_percent

```lua
(method) core.scrollbar:set_percent(percent: number)
```

Updates the scrollbar location

@*param* `percent` — number between 0 and 1 where 0 means thumb at the top and 1 at the bottom

---

## set_size

```lua
(method) core.scrollbar:set_size(x: number, y: number, w: number, h: number, scrollable: number)
```

Updates the bounding box of the view the scrollbar belongs to.

@*param* `scrollable` — size of the scrollable area

---

## update

```lua
(method) core.scrollbar:update()
```

Updates the scrollbar animations

---

