---
sidebar_position: 38
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.statusview

A status bar implementation, check core.status_view.

```lua
local statusview = require "core.statusview"
```

## Item

```lua
(field) Item: core.statusview.item
```

---

## __index

```lua
(field) __index: core.object
```

---

## active_items

```lua
(field) active_items: core.statusview.item[]
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
(field) cursor: string
```

---

## dragged_panel

```lua
(field) dragged_panel: ""|"left"|"right"
```

---

## get_items_warn

```lua
(field) get_items_warn: boolean
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

## hide_messages

```lua
(field) hide_messages: boolean
```

---

## hovered_item

```lua
(field) hovered_item: core.statusview.item
```

---

## hovered_panel

```lua
(field) hovered_panel: ""|"left"|"right"
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## items

```lua
(field) items: core.statusview.item[]
```

---

## left_width

```lua
(field) left_width: number
```

---

## left_xoffset

```lua
(field) left_xoffset: number
```

---

## message

```lua
(field) message: table<integer, string|renderer.color|renderer.font>
```

---

## message_timeout

```lua
(field) message_timeout: number
```

---

## pointer

```lua
(field) pointer: table
```

---

## position

```lua
(field) position: core.view.position
```

---

## r_left_width

```lua
(field) r_left_width: number
```

---

## r_right_width

```lua
(field) r_right_width: number
```

---

## right_width

```lua
(field) right_width: number
```

---

## right_xoffset

```lua
(field) right_xoffset: number
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

## separator

```lua
(field) separator: string
```

Space separator

---

## separator2

```lua
(field) separator2: string
```

Pipe separator

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

## tooltip

```lua
(field) tooltip: table<integer, string|renderer.color|renderer.font>
```

---

## tooltip_mode

```lua
(field) tooltip_mode: boolean
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

## core.statusview.item

### LEFT

```lua
(field) LEFT: integer
```

Flag to tell the item should be aligned on left side of status bar.

---

### RIGHT

```lua
(field) RIGHT: integer
```

Flag to tell the item should be aligned on right side of status bar.

---

### __index

```lua
(field) __index: core.object
```

---

### active

```lua
(field) active: boolean
```

---

### alignment

```lua
(field) alignment: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`
```

---

### background_color

```lua
(field) background_color: renderer.color|nil
```

Array of bytes that represents a color used by the rendering functions.

---

### background_color_hover

```lua
(field) background_color_hover: renderer.color|nil
```

Array of bytes that represents a color used by the rendering functions.

---

### cached_item

```lua
(field) cached_item: table<integer, string|renderer.color|renderer.font>
```

---

### command

```lua
(field) command: string|nil
```

Command to perform when the item is clicked.

---

### name

```lua
(field) name: string
```

---

### on_click

```lua
(field) on_click: fun(button: string, x: number, y: number)|nil
```

Function called when item is clicked and no command is set.

---

### on_draw

```lua
(field) on_draw: fun(x: any, y: any, h: any, hovered: boolean, calc_only?: boolean):number|nil
```

Custom drawing that when passed calc true should return the needed width for
drawing and when false should draw.

---

### predicate

```lua
(field) predicate: fun():boolean
```

---

### separator

```lua
(field) separator: `StatusView.separator2`|`StatusView.separator`
```

---

### super

```lua
(field) super: core.object
```

---

### tooltip

```lua
(field) tooltip: string
```

---

### visible

```lua
(field) visible: boolean
```

---

### w

```lua
(field) w: number
```

---

### x

```lua
(field) x: number
```

---

### get_item

```lua
fun(self: core.statusview.item):table<integer, string|renderer.color|renderer.font>?, table<integer, string|renderer.color|renderer.font>?
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
(method) core.statusview.item:__tostring()
  -> string
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

### get_item

```lua
(method) core.statusview.item:get_item()
  -> table<integer, string|renderer.color|renderer.font>
```

Called by the status bar each time that the item needs to be rendered,
if on_draw() is set this function is obviated.

---

### hide

```lua
(method) core.statusview.item:hide()
```

Do not show the item on the status bar.

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

### new

```lua
(method) core.statusview.item:new(options: core.statusview.item.options)
```

Constructor

---

### set_predicate

```lua
(method) core.statusview.item:set_predicate(predicate: string|table|fun():boolean)
```

A condition to evaluate if the item should be displayed. If a string
is given it is treated as a require import that should return a valid object
which is checked against the current active view, the sames applies if a
table is given. A function that returns a boolean can be used instead to
perform a custom evaluation, setting to nil means always evaluates to true.

---

### show

```lua
(method) core.statusview.item:show()
```

Show the item on the status bar.

---

## core.statusview.item.options

Available StatusViewItem options.

### alignment

```lua
(field) alignment: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`
```

---

### command

```lua
(field) command: string|fun(button: string, x: number, y: number)|nil
```

The name of a valid registered command or a callback function to execute
when the item is clicked.

---

### get_item

```lua
(field) get_item: fun(self: core.statusview.item):table<integer, string|renderer.color|renderer.font>?, table<integer, string|renderer.color|renderer.font>?
```

A function that should return a core.statusview.styledtext element,
returning an empty table is allowed.

---

### name

```lua
(field) name: string
```

A unique name to identify the item on the status bar.

---

### position

```lua
(field) position: integer?
```

The position in which to insert the given item on the internal table,
a value of -1 inserts the item at the end which is the default. A value
of 1 will insert the item at the beggining.

---

### predicate

```lua
(field) predicate: string|table|fun():boolean
```

A condition to evaluate if the item should be displayed. If a string
is given it is treated as a require import that should return a valid object
which is checked against the current active view, the sames applies if a
table is given. A function that returns a boolean can be used instead to
perform a custom evaluation, setting to nil means always evaluates to true.

---

### separator

```lua
(field) separator: (`StatusView.separator2`|`StatusView.separator`)?
```

The type of separator rendered to the right of the item if another item
follows it.

---

### tooltip

```lua
(field) tooltip: string?
```

Text displayed when mouse hovers the item.

---

### visible

```lua
(field) visible: boolean?
```

Flag to show or hide the item

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
(method) core.statusview:__tostring()
  -> string
```

---

## add_item

```lua
(method) core.statusview:add_item(options: core.statusview.item.options)
  -> core.statusview.item
```

Adds an item to be rendered in the status bar.

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## display_messages

```lua
(method) core.statusview:display_messages(enable: boolean)
```

Enable or disable system wide messages on the status bar.

---

## drag_panel

```lua
(method) core.statusview:drag_panel(panel: "left"|"right", dx: number)
```

Drag the given panel if possible.

```lua
panel:
    | "left"
    | "right"
```

---

## draw

```lua
(method) core.statusview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_item_tooltip

```lua
(method) core.statusview:draw_item_tooltip(item: core.statusview.item)
```

Draw the tooltip of a given status bar item.

---

## draw_items

```lua
(method) core.statusview:draw_items(items: table<integer, string|renderer.color|renderer.font>, right_align?: boolean, xoffset?: number, yoffset?: number)
```

Draws a table of styled text on the status bar starting on the left or right.

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

## get_hovered_panel

```lua
(method) core.statusview:get_hovered_panel(x: number, y: number)
  -> string
```

Return the currently hovered panel or empty string if none.

---

## get_item

```lua
(method) core.statusview:get_item(name: string)
  -> core.statusview.item|nil
```

Get an item object associated to a name or nil if not found.

---

## get_item_visible_area

```lua
(method) core.statusview:get_item_visible_area(item: core.statusview.item)
  -> x: number
  2. w: number
```

---

## get_items

```lua
(method) core.statusview:get_items(nowarn: boolean)
  -> left: table
  2. right: table
```

Older method of retrieving the status bar items and which is now
deprecated in favour of core.status_view:add_item().

---

## get_items_list

```lua
(method) core.statusview:get_items_list(alignment?: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`)
  -> core.statusview.item[]
```

Get a list of items.

```lua
alignment:
   -\> `StatusView.Item.LEFT`
    | `StatusView.Item.RIGHT`
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

## hide

```lua
(method) core.statusview:hide()
```

Hide the status bar

---

## hide_items

```lua
(method) core.statusview:hide_items(names?: string|table<integer, string>)
```

Hides the given items from the status view or all if no names given.

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

## move_item

```lua
(method) core.statusview:move_item(name: string, position: integer, alignment?: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`)
  -> moved: boolean
```

Move an item to a different position.

@*param* `position` — Can be negative value to position in reverse order

```lua
alignment:
   -\> `StatusView.Item.LEFT`
    | `StatusView.Item.RIGHT`
```

---

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) core.statusview:new()
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
(method) core.statusview:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.statusview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
```

---

## on_mouse_pressed

```lua
(method) core.statusview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

---

## on_mouse_released

```lua
(method) core.statusview:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

---

## on_mouse_wheel

```lua
(method) core.statusview:on_mouse_wheel(y: number, x: number)
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

## order_items

```lua
(method) core.statusview:order_items(names: table<integer, string>)
```

Order the items by name

---

## register_command_items

```lua
(method) core.statusview:register_command_items()
```

The predefined status bar items displayed when a command view is active.

---

## register_docview_items

```lua
(method) core.statusview:register_docview_items()
```

The predefined status bar items displayed when a document view is active.

---

## remove_item

```lua
(method) core.statusview:remove_item(name: string)
  -> removed_item: core.statusview.item
```

Remove an item from the status view.

---

## remove_tooltip

```lua
(method) core.statusview:remove_tooltip()
```

Deactivates tooltip mode.

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
(method) core.statusview:show()
```

Show the status bar

---

## show_items

```lua
(method) core.statusview:show_items(names?: string|table<integer, string>)
```

Shows the given items from the status view or all if no names given.

---

## show_message

```lua
(method) core.statusview:show_message(icon: string, icon_color: renderer.color, text: string)
```

Shows a message for a predefined amount of time.

---

## show_tooltip

```lua
(method) core.statusview:show_tooltip(text: string|table<integer, string|renderer.color|renderer.font>)
```

Activates tooltip mode displaying only the given
text until core.statusview:remove_tooltip() is called.

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

---

## toggle

```lua
(method) core.statusview:toggle()
```

Toggle the visibility of the status bar

---

## try_close

```lua
(method) core.view:try_close(do_close: any)
```

---

## update

```lua
(method) core.statusview:update()
```

---

## update_active_items

```lua
(method) core.statusview:update_active_items()
```

Set the active items that will be displayed on the left or right side
of the status bar checking their predicates and performing positioning
calculations for proper functioning of tooltips and clicks.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

