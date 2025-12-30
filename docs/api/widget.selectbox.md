---
sidebar_position: 91
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.selectbox

```lua
local selectbox = require "widget.selectbox"
```

## NEWLINE

```lua
(field) NEWLINE: integer
```

Indicates on a widget.styledtext that a new line follows.

---

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

## default_width

```lua
(field) default_width: number
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

## hover_text

```lua
(field) hover_text: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

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
(field) label: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>
```

---

## list

```lua
(field) list: widget.listbox
```

---

## list_container

```lua
(field) list_container: widget
```

A base widget

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

## selected

```lua
(field) selected: integer
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
(field) tooltip: (string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>)?
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

## updated

```lua
(field) updated: boolean
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

## zindex

```lua
(field) zindex: integer
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
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

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

## add_option

```lua
(method) widget.selectbox:add_option(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>, data: any)
```

Add selectable option to the selectbox.

---

## animate

```lua
(method) widget:animate(target?: table, properties: table<string, number>, options?: widget.animation.options)
```

Registers a new animation to be ran on the update cycle.

@*param* `target` — If nil assumes properties belong to widget it self.

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

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

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
(method) widget.selectbox:destroy_childs()
```

Overrided to destroy the floating listbox container.

---

## drag

```lua
(method) widget:drag(x: number, y: number)
```

Used internally when dragging is activated.

---

## draw

```lua
(method) widget.selectbox:draw()
  -> boolean
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_border

```lua
(method) widget:draw_border(x?: number, y?: number, w?: number, h?: number)
```

Draw the widget configured border or custom one.

---

## draw_scrollbar

```lua
(method) widget:draw_scrollbar()
```

---

## draw_styled_text

```lua
(method) widget:draw_styled_text(text: table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>, x: integer, y: integer, only_calc?: boolean, start_idx?: integer, end_idx?: integer)
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

## extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

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

## get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> x1: number
  2. y1: number
  3. x2: number
  4. y2: number
```

Get the content bounds in content coordinates (accounting for scroll).

@*return* `x1` — Left edge

@*return* `y1` — Top edge

@*return* `x2` — Right edge

@*return* `y2` — Bottom edge

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

Get the top-left corner of content area in screen coordinates.
Accounts for scroll offset. Use for drawing content at correct position.

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

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
(method) widget:get_h_scrollable_size()
  -> number
```

Calculates the x scrollable size taking into account the right most
widget or the size of the widget it self if greater.

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

## get_scrollable_size

```lua
(method) widget:get_scrollable_size()
  -> number
```

Calculates the y scrollable size taking into account the bottom most
widget or the size of the widget it self if greater.

---

## get_selected

```lua
(method) widget.selectbox:get_selected()
  -> integer
```

Get the currently selected option index.

---

## get_selected_data

```lua
(method) widget.selectbox:get_selected_data()
  -> any
```

Get the currently selected option associated data.

---

## get_selected_text

```lua
(method) widget.selectbox:get_selected_text()
  -> string|nil
```

Get the currently selected option text.

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
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

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

## move_towards

```lua
(method) core.view:move_towards(t: table, k: string|number, dest: number, rate?: number, name?: string)
```

Smoothly animate a value towards a destination.
Use this for animations instead of direct assignment.

@*param* `t` — Table containing the value

@*param* `k` — Key in table

@*param* `dest` — Target value

@*param* `rate` — Animation speed (0-1, default 0.5, higher = faster)

@*param* `name` — Transition name (for config.disabled_transitions)

---

## new

```lua
(method) widget.selectbox:new(parent: widget, label: string)
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
(method) widget.selectbox:on_click(button: "left"|"right", x: number, y: number)
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
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text` — Composition text being edited

@*param* `start` — Start position of selection within composition

@*param* `length` — Length of selection within composition

---

## on_mouse_enter

```lua
(method) widget.selectbox:on_mouse_enter(...any)
```

---

## on_mouse_leave

```lua
(method) widget.selectbox:on_mouse_leave(...any)
```

---

## on_mouse_left

```lua
(method) widget:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) widget:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean
```

Besides the on_mouse_moved this event emits on_mouse_enter
and on_mouse_leave for easy hover effects. Also, if the
widget is scrollable and pressed this will drag it unless
there is an active input_text child active.

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

## on_scale_change

```lua
(method) widget:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden by widgets to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

## on_selected

```lua
(method) widget.selectbox:on_selected(item_idx: integer, item_data: table<integer, string|integer|fun(self: any, row: any, x: any, y: any, font: any, color: any, only_calc: any)|renderer.color|renderer.font...(+2)>)
```

Overwrite to listen to on_selected events.

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

Handle touch move events (touchscreen/trackpad gestures).
Override for touch-specific behavior. Base implementation handles scrolling.

@*param* `x` — Current touch x coordinate

@*param* `y` — Current touch y coordinate

@*param* `dx` — Delta x since last position

@*param* `dy` — Delta y since last position

@*param* `i` — Touch finger/pointer index

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

## reposition_container

```lua
(method) widget.selectbox:reposition_container()
```

Repositions the listbox container according to the selectbox position
and available screensize.

---

## run_animations

```lua
(method) widget:run_animations()
```

Runs all registered animations removing duplicated and finished ones.

---

## schedule_update

```lua
(method) widget:schedule_update(delayed: any)
```

Schedule a core update and redraw. Since widgets try to not fire updates
and draws to child widgets to reduce cpu consumption this function can be
used when a re-update and re-draw is strictly needed.

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> dragging: boolean
```

Check if user is currently dragging either scrollbar.

@*return* `dragging` — True if scrollbar drag is in progress

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering` — True if mouse is over scrollbar

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> overlaps: boolean
```

Check if a screen point overlaps either scrollbar.
Useful for determining cursor style or handling clicks.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `overlaps` — True if point is over vertical or horizontal scrollbar

---

## set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

## set_label

```lua
(method) widget.selectbox:set_label(text: string)
```

Set the text displayed when no item is selected.

---

## set_position

```lua
(method) widget:set_position(x?: integer, y?: integer)
```

Set the position of the widget and updates the child absolute coordinates

---

## set_selected

```lua
(method) widget.selectbox:set_selected(idx: integer)
```

Set the active option index.

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
(method) widget:set_tooltip(tooltip?: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>, command?: string)
```

Text displayed when the widget is hovered.
If a command name is also given its associated binding will be displayed
as part of the tooltip.

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

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

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

## text_overflow

```lua
(method) widget.selectbox:text_overflow(text: string, max_width: number, font: string|renderer.font|widget.fontreference, overflow_chars?: string)
  -> chopped_text: string
  2. overflows: boolean
```

Check if a text is longer than the given maximum width and if larger returns
a chopped version with the overflow_chars appended to it.

@*param* `font` — Default is style.font

@*param* `overflow_chars` — Default is '...'

@*return* `chopped_text`

@*return* `overflows` — True if the text overflows

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
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close` — Call this function to actually close the view

---

## update

```lua
(method) widget.selectbox:update()
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

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

## update_size_position

```lua
(method) widget.selectbox:update_size_position()
```

---

