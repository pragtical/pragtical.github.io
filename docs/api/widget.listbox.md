---
sidebar_position: 72
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.listbox

```lua
local listbox = require "widget.listbox"
```

## COLEND

```lua
(field) COLEND: integer
```

Indicates on a widget.listbox.row that the end
of a column was reached.

---

## NEWLINE

```lua
(field) NEWLINE: integer
```

Indicates on a widget.listbox.row that a new line
follows while still rendering the same column.

---

## __index

```lua
(field) __index: core.object
```

---

## animations

```lua
(field) animations: widget.animation[]
```

---

## background_color

```lua
(field) background_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## border

```lua
(field) border: widget.border
```

Represents the border of a widget.

---

## captured_widget

```lua
(field) captured_widget: widget
```

Widget that captured mouse events

---

## child_active

```lua
(field) child_active: widget|nil
```

A base widget

---

## childs

```lua
(field) childs: table<integer, widget>
```

---

## clickable

```lua
(field) clickable: boolean
```

---

## columns

```lua
(field) columns: widget.listbox.column[]
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

## defer_draw

```lua
(field) defer_draw: boolean
```

---

## draggable

```lua
(field) draggable: boolean
```

---

## dragged

```lua
(field) dragged: boolean
```

---

## expand

```lua
(field) expand: boolean
```

---

## explicit_update

```lua
(field) explicit_update: boolean
```

---

## font

```lua
(field) font: string|renderer.font|widget.fontreference
```

Represents a reference to a font stored elsewhere.

---

## force_events

```lua
(field) force_events: table
```

---

## foreground_color

```lua
(field) foreground_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## h_scrollbar

```lua
(field) h_scrollbar: widget.scrollbar
```

---

## has_focus

```lua
(field) has_focus: boolean
```

---

## hovered_row

```lua
(field) hovered_row: integer
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## input_text

```lua
(field) input_text: boolean
```

---

## is_scrolling

```lua
(field) is_scrolling: boolean
```

---

## label

```lua
(field) label: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>
```

---

## largest_row

```lua
(field) largest_row: integer
```

---

## last_offset

```lua
(field) last_offset: integer
```

---

## mouse

```lua
(field) mouse: widget.position
```

Represents the position of a widget.

---

## mouse_is_hovering

```lua
(field) mouse_is_hovering: boolean
```

---

## mouse_is_pressed

```lua
(field) mouse_is_pressed: boolean
```

---

## mouse_pressed_outside

```lua
(field) mouse_pressed_outside: boolean
```

---

## name

```lua
(field) name: string
```

---

## next_zindex

```lua
(field) next_zindex: integer
```

---

## parent

```lua
(field) parent: widget|nil
```

A base widget

---

## perform_update_size_position

```lua
(field) perform_update_size_position: boolean
```

---

## position

```lua
(field) position: widget.position
```

Represents the position of a widget.

---

## positions

```lua
(field) positions: table<integer, integer>[]
```

---

## prev_height

```lua
(field) prev_height: number?
```

---

## prev_size

```lua
(field) prev_size: widget.position
```

Represents the position of a widget.

---

## prev_view

```lua
(field) prev_view: unknown
```

---

## prev_width

```lua
(field) prev_width: number?
```

---

## render_background

```lua
(field) render_background: boolean
```

---

## row_data

```lua
(field) row_data: any
```

---

## row_data_original

```lua
(field) row_data_original: any
```

---

## rows

```lua
(field) rows: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>[]
```

---

## rows_idx_original

```lua
(field) rows_idx_original: table
```

---

## rows_original

```lua
(field) rows_original: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>[]
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

## selected_row

```lua
(field) selected_row: integer
```

---

## set_focus

```lua
(field) set_focus: any
```

---

## size

```lua
(field) size: widget.position
```

Modifying this property directly is not advised, use set_size() instead.

---

## skip_scroll_ctrl

```lua
(field) skip_scroll_ctrl: boolean
```

By default is set to true to allow ctrl+wheel or cmd+wheel on mac to scale
the interface, you can set it to false on your parent widget to allow
manually intercepting ctrl+wheel.

---

## super

```lua
(field) super: widget
```

A base widget

---

## textview

```lua
(field) textview: widget
```

A base widget

---

## tooltip

```lua
(field) tooltip: (string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)?
```

---

## tooltip_command

```lua
(field) tooltip_command: string?
```

---

## type_name

```lua
(field) type_name: string
```

---

## v_scrollbar

```lua
(field) v_scrollbar: widget.scrollbar
```

---

## visible

```lua
(field) visible: boolean
```

---

## visible_rendered

```lua
(field) visible_rendered: boolean
```

---

## visible_rows

```lua
(field) visible_rows: table<integer, integer>
```

---

## zindex

```lua
(field) zindex: integer
```

---

## widget.listbox.column

### expand

```lua
(field) expand: boolean
```

---

### longest

```lua
(field) longest: integer
```

---

### name

```lua
(field) name: string
```

---

### width

```lua
(field) width: string
```

---

## override_rootview

```lua
function widget.override_rootview()
```

Called when initializing a floating widget to generate RootView overrides,
this function will only override the events once.

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
(method) widget:__tostring()
  -> string
```

Useful for debugging.

---

## activate

```lua
(method) widget:activate()
```

Emitted to input_text widgets when clicked.

---

## add_child

```lua
(method) widget:add_child(child: widget)
```

Add a child widget, automatically assign a zindex if non set and sorts
them in reverse order for better events matching.

---

## add_column

```lua
(method) widget.listbox:add_column(name: string, width?: number, expand?: boolean)
```

If no width is given column will be set to automatically
expand depending on the longest element

---

## add_row

```lua
(method) widget.listbox:add_row(row: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>, data: any)
```

You can give it a table a la statusview style where you pass elements
like fonts, colors, ListBox.COLEND, ListBox.NEWLINE and multiline strings.

@*param* `data` — Associated with the row and given to on_row_click()

---

## animate

```lua
(method) widget:animate(target?: table, properties: table<string, number>, options?: widget.animation.options)
```

Registers a new animation to be ran on the update cycle.

@*param* `target` — If nil assumes properties belong to widget it self.

---

## calc_row_size_pos

```lua
(method) widget.listbox:calc_row_size_pos(ridx: integer)
```

Calculate a row position and size and store it on the row it
self on the fields x, y, w, h

---

## capture_mouse

```lua
(method) widget:capture_mouse(scrolling?: boolean)
```

All mouse events will be directly sent to the widget even if mouse moves
outside the widget region.

@*param* `scrolling` — Capture for scrolling

---

## centered

```lua
(method) widget:centered()
```

Center the widget horizontally and vertically to the screen or parent widget.

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## clear

```lua
(method) widget.listbox:clear()
```

Remove all the rows from the listbox.

---

## deactivate

```lua
(method) widget:deactivate()
```

Emitted to input_text widgets on lost focus.

---

## destroy

```lua
(method) widget:destroy()
```

If floating, remove the widget from the floating widgets list
to allow proper garbage collection.

---

## destroy_childs

```lua
(method) widget:destroy_childs()
```

Recursively destroy all childs from the widget.

---

## drag

```lua
(method) widget:drag(x: number, y: number)
```

Used internally when dragging is activated.

---

## draw

```lua
(method) widget.listbox:draw()
  -> boolean
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_border

```lua
(method) widget:draw_border(x?: number, y?: number, w?: number, h?: number)
```

Draw the widget configured border or custom one.

---

## draw_header

```lua
(method) widget.listbox:draw_header(w: integer, h: integer, ox: number)
```

Draw the column headers of the list if available

@*param* `ox` — Horizontal offset

---

## draw_row

```lua
(method) widget.listbox:draw_row(row: integer, x: integer, y: integer, only_calc?: boolean)
  -> width: integer
  2. height: integer
```

Draw or calculate the dimensions of the given row position and stores
the size and position on the row it self.

---

## draw_row_range

```lua
(method) widget.listbox:draw_row_range(ridx: integer, row: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>, start_idx: integer, end_idx: integer, x: integer, y: integer, only_calc: boolean)
  -> width: integer
  2. height: integer
```

Render or calculate the size of the specified range of elements in a row.

---

## draw_scrollbar

```lua
(method) widget:draw_scrollbar()
```

---

## draw_styled_text

```lua
(method) widget:draw_styled_text(text: table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, x: integer, y: integer, only_calc?: boolean, start_idx?: integer, end_idx?: integer)
  -> width: integer
  2. height: integer
```

Render or calculate the size of the specified range of elements
in a styled text elemet.

---

## draw_text_multiline

```lua
(method) widget:draw_text_multiline(font: string|renderer.font|widget.fontreference, text: string, x: integer, y: integer, color: renderer.color, only_calc: boolean)
  -> resx: integer
  2. resy: integer
  3. width: integer
  4. height: integer
```

Taken from the logview and modified it a tiny bit.
TODO: something similar should be on pragtical core.

---

## enable_expand

```lua
(method) widget.listbox:enable_expand(expand: any)
```

Enables expanding the element to total size of parent on content updates.

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

## filter

```lua
(method) widget.listbox:filter(match?: string|fun(self: widget.listbox, idx: integer, row: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>, data: any):number?)
```

Set which rows to show using the specified match string or callback,
if nil all rows are restored.

---

## force_event

```lua
(method) widget:force_event(name: "mouse_released", force: boolean)
```

Toggle the forced interception of given event even if all the conditions
for emitting it are not met.

Note: only "mouse_released" is implemented for the moment on floating views
for use in the SelectBox, maybe a better system can be implemented on
the future.

@*param* `force` — If omitted is set to true by default

```lua
name:
    | "mouse_released"
```

---

## get_bottom

```lua
(method) widget:get_bottom()
  -> number
```

Get the bottom y coordinate relative to parent

---

## get_col_positions

```lua
(method) widget.listbox:get_col_positions(row: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>)
  -> table<integer, integer>
```

Get the starting and ending position of columns in a row table.

---

## get_col_width

```lua
(method) widget.listbox:get_col_width(col: integer)
  -> number
```

Calculate the overall width of a column.

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

## get_font

```lua
(method) widget:get_font(font?: string|renderer.font|widget.fontreference)
  -> renderer.font
```

Get the real renderer.font associated with a widget.font.

---

## get_h_scrollable_size

```lua
(method) widget.listbox:get_h_scrollable_size()
  -> number
```

---

## get_height

```lua
(method) widget:get_height()
  -> number
```

Get height including borders.

---

## get_name

```lua
(method) widget:get_name()
  -> string
```

The name that is displayed on pragtical tabs.

---

## get_position

```lua
(method) widget:get_position()
  -> widget.position
```

Get the relative position in relation to parent

---

## get_real_height

```lua
(method) widget:get_real_height()
  -> number
```

Overall height of the widget accounting all visible child widgets.

---

## get_real_width

```lua
(method) widget:get_real_width()
  -> number
```

Overall width of the widget accounting all visible child widgets.

---

## get_right

```lua
(method) widget:get_right()
  -> number
```

Get the right x coordinate relative to parent

---

## get_row_data

```lua
(method) widget.listbox:get_row_data(idx: integer)
  -> any
```

Get the data associated with a row.

---

## get_row_text

```lua
(method) widget.listbox:get_row_text(row: integer|table)
  -> string
```

Get the text only of a styled row.

---

## get_scrollable_size

```lua
(method) widget.listbox:get_scrollable_size()
  -> number
```

Calculates the scrollable size based on the last row of the list.

---

## get_selected

```lua
(method) widget.listbox:get_selected()
  -> integer|nil
```

Get the row that is currently active/selected.

---

## get_size

```lua
(method) widget:get_size()
  -> widget.position
```

---

## get_width

```lua
(method) widget:get_width()
  -> number
```

Get width including borders.

---

## hide

```lua
(method) widget:hide()
```

Hide the widget.

---

## hide_animated

```lua
(method) widget:hide_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated hide.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

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

## is_visible

```lua
(method) widget:is_visible()
  -> boolean
```

Check if the widget is visible also recursing to the parent visibility.

---

## mouse_on_top

```lua
(method) widget:mouse_on_top(x: number, y: number)
  -> boolean
```

Check if the given mouse coordinate is hovering the widget

---

## move_row_down

```lua
(method) widget.listbox:move_row_down(idx: integer)
  -> moved: boolean
```

Move a row one position down if possible.

---

## move_row_to

```lua
(method) widget.listbox:move_row_to(idx: integer, pos: integer)
  -> moved: boolean
```

Move a row to the desired position if possible.

---

## move_row_up

```lua
(method) widget.listbox:move_row_up(idx: integer)
  -> moved: boolean
```

Move a row one position up if possible.

---

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) widget.listbox:new(parent: widget)
```

Constructor

---

## on_change

```lua
(method) widget:on_change(value: any)
```

Event emitted when the value of the widget changes.
If applicable, child widgets should call this method
when its value changes.

---

## on_click

```lua
(method) widget.listbox:on_click(button: "left"|"right", x: number, y: number)
```

---

## on_file_dropped

```lua
(method) widget:on_file_dropped(filename: string, x: number, y: number)
  -> processed: boolean
```

Send file drop event to hovered child.

---

## on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: any, start: any, length: any)
```

---

## on_mouse_enter

```lua
(method) widget:on_mouse_enter(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse hovers the widget.

---

## on_mouse_leave

```lua
(method) widget.listbox:on_mouse_leave(x: any, y: any, dx: any, dy: any)
```

---

## on_mouse_left

```lua
(method) widget:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) widget.listbox:on_mouse_moved(x: number, y: number, dx: number, dy: number)
```

---

## on_mouse_pressed

```lua
(method) widget:on_mouse_pressed(button: "left"|"right", x: number, y: number, clicks: integer)
  -> processed: boolean
```

Send mouse pressed events to hovered child or starts dragging if enabled.

```lua
button:
    | "left"
    | "right"
```

---

## on_mouse_released

```lua
(method) widget:on_mouse_released(button: "left"|"right", x: number, y: number)
  -> processed: boolean
```

Send mouse released events to hovered child, ends dragging if enabled and
emits on click events if applicable.

```lua
button:
    | "left"
    | "right"
```

---

## on_mouse_wheel

```lua
(method) widget:on_mouse_wheel(y: number, x: number)
  -> boolean
```

---

## on_row_click

```lua
(method) widget.listbox:on_row_click(idx: integer, data: any)
```

You can overwrite this to listen to item clicks

@*param* `data` — Data associated with the row

---

## on_scale_change

```lua
(method) widget.listbox:on_scale_change(new_scale: number, prev_scale: number)
```

---

## on_text_input

```lua
(method) widget:on_text_input(text: string)
  -> processed: boolean
```

Redirects any text input to active child with the input_text flag.

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

---

## recalc_all_rows

```lua
(method) widget.listbox:recalc_all_rows()
```

Recalculate all row sizes and positions which should be only required
when pragtical ui scale changes or a row is removed from the list

---

## release_mouse

```lua
(method) widget:release_mouse()
```

Undo capture_mouse()

---

## remove_child

```lua
(method) widget:remove_child(child: widget)
```

Remove a child widget.

---

## remove_row

```lua
(method) widget.listbox:remove_row(ridx: integer)
```

Remove a given row index from the list.

---

## resize_to_parent

```lua
(method) widget.listbox:resize_to_parent()
```

Resizes the listbox to match the parent size

---

## run_animations

```lua
(method) widget:run_animations()
```

Runs all registered animations removing duplicated and finished ones.

---

## schedule_update

```lua
(method) widget:schedule_update()
```

Schedule a core update and redraw. Since widgets try to not fire updates
and draws to child widgets to reduce cpu consumption this function can be
used when a re-update and re-draw is strictly needed.

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

## set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

## set_label

```lua
(method) widget:set_label(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)
```

A text label for the widget, not all widgets support this.

---

## set_position

```lua
(method) widget:set_position(x?: integer, y?: integer)
```

Set the position of the widget and updates the child absolute coordinates

---

## set_row

```lua
(method) widget.listbox:set_row(idx: integer, row: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+1)>)
```

Change the content assigned to a row.

---

## set_row_data

```lua
(method) widget.listbox:set_row_data(idx: integer, data: any)
```

Change the data assigned to a row.

---

## set_selected

```lua
(method) widget.listbox:set_selected(idx?: integer)
```

Set the row that is currently active/selected.

---

## set_size

```lua
(method) widget:set_size(width?: integer, height?: integer)
```

---

## set_target_size

```lua
(method) widget:set_target_size(axis: string|'x'|'y', value: number)
  -> boolean
```

Called by pragtical node system to properly resize the widget.

```lua
axis:
    | 'x'
    | 'y'
```

---

## set_tooltip

```lua
(method) widget:set_tooltip(tooltip?: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, command?: string)
```

Text displayed when the widget is hovered.
If a command name is also given its associated binding will be displayed
as part of the tooltip.

---

## set_visible_rows

```lua
(method) widget.listbox:set_visible_rows()
```

Detects the rows that are visible each time the content is scrolled,
this way the draw function will only process the visible rows.

---

## show

```lua
(method) widget:show()
```

Show the widget.

---

## show_animated

```lua
(method) widget:show_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated show.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

---

## swap_active_child

```lua
(method) widget:swap_active_child(child?: widget)
```

Replaces current active child with a new one and calls the
activate/deactivate events of the child. This is especially
used to send text input events to widgets with input_text support.

@*param* `child` — If nil deactivates current child

---

## toggle_background

```lua
(method) widget:toggle_background(enable?: boolean)
```

When set to false the background rendering is disabled.

---

## toggle_visible

```lua
(method) widget:toggle_visible(animated?: boolean, lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Toggle visibility of widget.

---

## try_close

```lua
(method) core.view:try_close(do_close: any)
```

---

## update

```lua
(method) widget.listbox:update()
  -> boolean
```

---

## update_if_scaled

```lua
(method) widget:update_if_scaled()
```

Explicitly call the widget update procedure when the scale change even if
the widget is not visible.

---

## update_position

```lua
(method) widget:update_position()
```

Called on the update function to be able to scroll the child widgets.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

## update_size_position

```lua
(method) widget:update_size_position()
```

Similar to update, but here you should perform expensive calculations that
will get executed for a predefined period of time when a widget is
initialized, scale has changed or a widget switched from hidden to visible.

---

