---
sidebar_position: 31
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.imageview

An image view that allows zooming in and out an image.

```lua
local imageview = require "core.imageview"
```

## __index

```lua
(field) __index: core.object
```

---

## background

```lua
(field) background: canvas?
```

Core functionality that allows rendering into a separate surface.

---

## bg_color

```lua
(field) bg_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## bg_mode

```lua
(field) bg_mode: "grid"|"none"|"solid"
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

## errmsg

```lua
(field) errmsg: string?
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

## height

```lua
(field) height: number
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## image

```lua
(field) image: canvas?
```

Core functionality that allows rendering into a separate surface.

---

## image_scaled

```lua
(field) image_scaled: canvas?
```

Core functionality that allows rendering into a separate surface.

---

## mouse_pressed

```lua
(field) mouse_pressed: boolean
```

---

## path

```lua
(field) path: string?
```

---

## position

```lua
(field) position: core.view.position
```

---

## prev_size

```lua
(field) prev_size: table
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

## type

```lua
(field) type: string
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

## width

```lua
(field) width: number
```

---

## zoom_mode

```lua
(field) zoom_mode: "fit"|"fixed"
```

---

## zoom_scale

```lua
(field) zoom_scale: number
```

---

## is_supported

```lua
function core.imageview.is_supported(path: string)
  -> supported: boolean
  2. file_extension: string
```

Check if an image type is supported by its filename extension.

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
(method) core.imageview:__tostring()
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
(method) core.imageview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_image

```lua
(method) core.imageview:draw_image()
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
(method) core.imageview:get_h_scrollable_size()
  -> number
```

---

## get_name

```lua
(method) core.imageview:get_name()
  -> string
```

---

## get_scrollable_size

```lua
(method) core.imageview:get_scrollable_size()
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

## load

```lua
(method) core.imageview:load(path?: string)
  -> loaded: boolean
  2. errmsg: string?
```

Loads the given image into the view.

---

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) core.imageview:new(path?: string)
```

Constructor

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
(method) core.imageview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean
```

---

## on_mouse_pressed

```lua
(method) core.imageview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean
```

---

## on_mouse_released

```lua
(method) core.imageview:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

---

## on_mouse_wheel

```lua
(method) core.imageview:on_mouse_wheel(d: number)
  -> boolean
```

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

## scale_image

```lua
(method) core.imageview:scale_image()
```

Scale the currently loaded image depending on the current
zoom mode and scale factor.

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
(method) core.imageview:update()
```

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

## zoom_in

```lua
(method) core.imageview:zoom_in()
```

Increases the image scale.

---

## zoom_out

```lua
(method) core.imageview:zoom_out()
```

Decreases the image scale.

---

## zoom_reset

```lua
(method) core.imageview:zoom_reset()
```

Sets image size to original.

---

