---
sidebar_position: 31
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.rootview

```lua
local rootview = require "core.rootview"
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

## deferred_draws

```lua
(field) deferred_draws: table
```

---

## drag_overlay

```lua
(field) drag_overlay: table
```

---

## drag_overlay_tab

```lua
(field) drag_overlay_tab: table
```

---

## dragged_divider

```lua
(field) dragged_divider: core.node|unknown
```

---

## dragged_node

```lua
(field) dragged_node: table
```

---

## first_dnd_processed

```lua
(field) first_dnd_processed: boolean
```

set this to true because at this point there are no dnd requests
 that are caused by the initial dnd into dock user action

---

## grab

```lua
(field) grab: table
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

## mouse

```lua
(field) mouse: core.view.position
```

---

## overlapping_view

```lua
(field) overlapping_view: any
```

---

## position

```lua
(field) position: core.view.position
```

---

## root_node

```lua
(field) root_node: core.node
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

## touched_view

```lua
(field) touched_view: any
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

## on_view_mouse_pressed

```lua
function core.rootview.on_view_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
```

Function to intercept mouse pressed events on the active view.
Do nothing by default.

```lua
button:
    | 'left'
    | 'right'
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

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## close_all_docviews

```lua
(method) core.rootview:close_all_docviews(keep_active: boolean)
```

---

## defer_draw

```lua
(method) core.rootview:defer_draw(fn: any, ...any)
```

---

## draw

```lua
(method) core.rootview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_drag_overlay

```lua
(method) core.rootview:draw_drag_overlay(ov: any)
```

---

## draw_grabbed_tab

```lua
(method) core.rootview:draw_grabbed_tab()
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

## get_active_node

```lua
(method) core.rootview:get_active_node()
  -> core.node
```

---

## get_active_node_default

```lua
(method) core.rootview:get_active_node_default()
  -> core.node
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

## get_overlay_base_color

```lua
(method) core.rootview:get_overlay_base_color(overlay: any)
  -> unknown
```

---

## get_primary_node

```lua
(method) core.rootview:get_primary_node()
  -> core.node
```

---

## get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> number
```

---

## grab_mouse

```lua
(method) core.rootview:grab_mouse(button: 'left'|'right', view: core.view)
```

Obtain mouse grab.

This means that mouse movements will be sent to the specified view, even when
those occur outside of it.
There can't be multiple mouse grabs, even for different buttons.

```lua
button:
    | 'left'
    | 'right'
```
See: ~RootView~ ungrab_mouse

---

## interpolate_drag_overlay

```lua
(method) core.rootview:interpolate_drag_overlay(overlay: any)
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
(method) core.rootview:new()
```

---

## on_file_dropped

```lua
(method) core.rootview:on_file_dropped(filename: string, x: number, y: number)
  -> boolean
```

---

## on_focus_lost

```lua
(method) core.rootview:on_focus_lost(...any)
```

---

## on_ime_text_editing

```lua
(method) core.rootview:on_ime_text_editing(...any)
```

---

## on_mouse_left

```lua
(method) core.rootview:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.rootview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
```

---

## on_mouse_pressed

```lua
(method) core.rootview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean
```

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_released

```lua
(method) core.rootview:on_mouse_released(button: 'left'|'right', x: number, y: number, ...any)
```

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_wheel

```lua
(method) core.rootview:on_mouse_wheel(...any)
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
(method) core.rootview:on_text_input(...any)
```

---

## on_touch_moved

```lua
(method) core.rootview:on_touch_moved(x: number, y: number, dx: number, dy: number, ...any)
```

---

## on_touch_pressed

```lua
(method) core.rootview:on_touch_pressed(x: any, y: any, ...any)
```

---

## on_touch_released

```lua
(method) core.rootview:on_touch_released(x: any, y: any, ...any)
```

---

## open_doc

```lua
(method) core.rootview:open_doc(doc: core.doc)
  -> core.docview
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

## select_next_primary_node

```lua
(method) core.rootview:select_next_primary_node()
  -> core.node
```

---

## set_drag_overlay

```lua
(method) core.rootview:set_drag_overlay(overlay: any, x: any, y: any, w: any, h: any, immediate: any)
```

---

## set_show_overlay

```lua
(method) core.rootview:set_show_overlay(overlay: any, status: any)
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

## ungrab_mouse

```lua
(method) core.rootview:ungrab_mouse(button: 'left'|'right')
```

Release mouse grab.

The specified button *must* be the last button that grabbed the mouse.

```lua
button:
    | 'left'
    | 'right'
```
See: ~RootView~ grab_mouse

---

## update

```lua
(method) core.rootview:update()
```

---

## update_drag_overlay

```lua
(method) core.rootview:update_drag_overlay()
```

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

