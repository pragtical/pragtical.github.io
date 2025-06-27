---
sidebar_position: 29
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.node

```lua
local node = require "core.node"
```

## __index

```lua
(field) __index: core.object
```

---

## a

```lua
(field) a: unknown
```

---

## active_view

```lua
(field) active_view: any
```

---

## b

```lua
(field) b: unknown
```

---

## divider

```lua
(field) divider: number
```

---

## hovered_close

```lua
(field) hovered_close: number
```

---

## hovered_scroll_button

```lua
(field) hovered_scroll_button: integer
```

---

## hovered_tab

```lua
(field) hovered_tab: number|nil
```

---

## position

```lua
(field) position: table
```

---

## size

```lua
(field) size: table
```

---

## super

```lua
(field) super: core.object
```

---

## tab_offset

```lua
(field) tab_offset: number
```

---

## tab_shift

```lua
(field) tab_shift: integer
```

---

## tab_width

```lua
(field) tab_width: number
```

---

## type

```lua
(field) type: any
```

---

## views

```lua
(field) views: table
```

---

## copy_position_and_size

```lua
function core.node.copy_position_and_size(dst: any, src: any)
```

---

## move_towards

```lua
function
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
(method) core.node:__tostring()
  -> string
```

---

## add_view

```lua
(method) core.node:add_view(view: any, idx: any)
```

---

## close_active_view

```lua
(method) core.node:close_active_view(root: any)
```

---

## close_all_docviews

```lua
(method) core.node:close_all_docviews(keep_active: any)
```

---

## close_view

```lua
(method) core.node:close_view(root: any, view: any)
```

---

## consume

```lua
(method) core.node:consume(node: any)
```

---

## draw

```lua
(method) core.node:draw()
```

---

## draw_tab

```lua
(method) core.node:draw_tab(view: any, is_active: any, is_hovered: any, is_close_hovered: any, x: any, y: any, w: any, h: any, standalone: any)
```

---

## draw_tab_borders

```lua
(method) core.node:draw_tab_borders(view: any, is_active: any, is_hovered: any, x: any, y: any, w: any, h: any, standalone: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
```

---

## draw_tab_title

```lua
(method) core.node:draw_tab_title(view: any, font: any, is_active: any, is_hovered: any, x: any, y: any, w: any, h: any)
```

---

## draw_tabs

```lua
(method) core.node:draw_tabs()
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

## get_child_overlapping_point

```lua
(method) core.node:get_child_overlapping_point(x: any, y: any)
  -> core.node|unknown
```

---

## get_children

```lua
(method) core.node:get_children(t: any)
  -> unknown
```

---

## get_divider_overlapping_point

```lua
(method) core.node:get_divider_overlapping_point(px: any, py: any)
  -> core.node|unknown
```

---

## get_divider_rect

```lua
(method) core.node:get_divider_rect()
  -> integer|unknown
  2. integer|unknown
  3. number
  4. number
```

---

## get_drag_overlay_tab_position

```lua
(method) core.node:get_drag_overlay_tab_position(x: any, y: any, dragged_node: any, dragged_index: any)
  -> number
  2. number
  3. number
  4. number
  5. number
```

---

## get_locked_size

```lua
(method) core.node:get_locked_size()
  -> unknown
  2. unknown
```

Return two values for x and y axis and each of them is either falsy or a number.
 A falsy value indicate no fixed size along the corresponding direction.

---

## get_node_for_view

```lua
(method) core.node:get_node_for_view(view: any)
  -> core.node|unknown
```

---

## get_parent_node

```lua
(method) core.node:get_parent_node(root: any)
  -> unknown
```

---

## get_scroll_button_index

```lua
(method) core.node:get_scroll_button_index(px: any, py: any)
  -> integer|nil
```

---

## get_scroll_button_rect

```lua
(method) core.node:get_scroll_button_rect(index: any)
  -> number
  2. integer
  3. number
  4. number
  5. number
```

---

## get_split_type

```lua
(method) core.node:get_split_type(mouse_x: any, mouse_y: any)
  -> string
```

---

## get_tab_overlapping_point

```lua
(method) core.node:get_tab_overlapping_point(px: any, py: any)
  -> number|nil
```

---

## get_tab_rect

```lua
(method) core.node:get_tab_rect(idx: any)
  -> number
  2. integer
  3. number
  4. number
  5. number
```

---

## get_view_idx

```lua
(method) core.node:get_view_idx(view: any)
  -> integer
```

---

## get_visible_tabs_number

```lua
(method) core.node:get_visible_tabs_number()
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

## is_empty

```lua
(method) core.node:is_empty()
  -> unknown|true|false
```

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

## is_in_tab_area

```lua
(method) core.node:is_in_tab_area(x: any, y: any)
  -> boolean
```

---

## is_locked_resizable

```lua
(method) core.node:is_locked_resizable(axis: any)
  -> unknown
```

Return true iff it is a locked pane along the rezise axis and is
 declared "resizable".

---

## is_resizable

```lua
(method) core.node:is_resizable(axis: any)
  -> true
```

Returns true for nodes that accept either "proportional" resizes (based on the
 node.divider) or "locked" resizable nodes (along the resize axis).

---

## new

```lua
(method) core.node:new(type: any)
```

---

## on_mouse_left

```lua
(method) core.node:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.node:on_mouse_moved(x: any, y: any, ...any)
```

---

## on_mouse_released

```lua
(method) core.node:on_mouse_released(...any)
```

---

## on_touch_moved

```lua
(method) core.node:on_touch_moved(...any)
```

---

## propagate

```lua
(method) core.node:propagate(fn: any, ...any)
```

---

## remove_view

```lua
(method) core.node:remove_view(root: any, view: any)
```

---

## resize

```lua
(method) core.node:resize(axis: any, value: any)
```

---

## scroll_tabs

```lua
(method) core.node:scroll_tabs(dir: any)
```

---

## scroll_tabs_to_visible

```lua
(method) core.node:scroll_tabs_to_visible()
```

---

## set_active_view

```lua
(method) core.node:set_active_view(view: any)
```

---

## should_show_tabs

```lua
(method) core.node:should_show_tabs()
  -> boolean
```

---

## split

```lua
(method) core.node:split(dir: any, view: any, locked: any, resizable: any)
  -> unknown
```

The "locked" argument below should be in the form \{x = \<boolean\>, y = \<boolean\>\}
 and it indicates if the node want to have a fixed size along the axis where the
 boolean is true. If not it will be expanded to take all the available space.
 The "resizable" flag indicates if, along the "locked" axis the node can be resized
 by the user. If the node is marked as resizable their view should provide a
 set_target_size method.

---

## tab_hovered_update

```lua
(method) core.node:tab_hovered_update(px: any, py: any)
```

---

## target_tab_width

```lua
(method) core.node:target_tab_width()
  -> number
```

---

## update

```lua
(method) core.node:update()
```

---

## update_layout

```lua
(method) core.node:update_layout()
```

---

