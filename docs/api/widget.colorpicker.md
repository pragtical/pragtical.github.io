---
sidebar_position: 68
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.colorpicker

```lua
local colorpicker = require "widget.colorpicker"
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

## alpha

```lua
(field) alpha: number
```

---

## alpha_color

```lua
(field) alpha_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## alpha_mouse_down

```lua
(field) alpha_mouse_down: boolean
```

---

## alpha_pos

```lua
(field) alpha_pos: number
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

## brightness_color

```lua
(field) brightness_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## brightness_mouse_down

```lua
(field) brightness_mouse_down: boolean
```

---

## brightness_pos

```lua
(field) brightness_pos: number
```

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

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## html_notation

```lua
(field) html_notation: widget.textbox
```

---

## html_updating

```lua
(field) html_updating: boolean
```

---

## hue_color

```lua
(field) hue_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## hue_mouse_down

```lua
(field) hue_mouse_down: boolean
```

---

## hue_pos

```lua
(field) hue_pos: number
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

## rgba_notation

```lua
(field) rgba_notation: widget.textbox
```

---

## rgba_updating

```lua
(field) rgba_updating: boolean
```

---

## saturation_color

```lua
(field) saturation_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## saturation_mouse_down

```lua
(field) saturation_mouse_down: boolean
```

---

## saturation_pos

```lua
(field) saturation_pos: number
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

## selector

```lua
(field) selector: table
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

## widget.colorpicker.colorrange

## color_from_string

```lua
function widget.colorpicker.color_from_string(color: string)
  -> color: (renderer.color)?
```

Converts a css format color string into a renderer.color if possible,
if conversion fails returns nil. Adapted from colorpreview plugin.

---

## color_in_between

```lua
function widget.colorpicker.color_in_between(from_color: renderer.color, to_color: renderer.color, percent: number)
  -> color: renderer.color
```

Gets a color between two given colors on the position
defined by the given percent.

---

## hsl_to_rgb

```lua
function widget.colorpicker.hsl_to_rgb(h: number, s: number, l: number, a: number)
  -> rgba: renderer.color
```

Converts an HSL color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes h, s, and l are contained in the set \[0, 1\] and
returns r, g, and b in the set \[0, 255\].

@*param* `h` — The hue

@*param* `s` — The saturation

@*param* `l` — The lightness

@*param* `a` — The alpha

---

## hsv_to_rgb

```lua
function widget.colorpicker.hsv_to_rgb(h: number, s: number, v: number, a: number)
  -> rgba: renderer.color
```

Converts an HSV color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes h, s, and v are contained in the set \[0, 1\] and
returns r, g, and b in the set \[0, 255\].

@*param* `h` — The hue

@*param* `s` — The saturation

@*param* `v` — The brightness

@*param* `a` — The alpha

@*return* `rgba` — The RGB representation

---

## override_rootview

```lua
function widget.override_rootview()
```

Called when initializing a floating widget to generate RootView overrides,
this function will only override the events once.

---

## rgb_to_hsl

```lua
function widget.colorpicker.rgb_to_hsl(rgba: renderer.color)
  -> hsla: table
```

Converts an RGB color value to HSL. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes r, g, and b are contained in the set \[0, 255\] and
returns h, s, and l in the set \[0, 1\].

---

## rgb_to_hsv

```lua
function widget.colorpicker.rgb_to_hsv(rgba: renderer.color)
  -> hsva: table
```

Converts an RGB color value to HSV. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes r, g, and b are contained in the set \[0, 255\] and
returns h, s, and v in the set \[0, 1\].

@*return* `hsva` — The HSV representation

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
(method) widget.colorpicker:draw()
  -> boolean
```

---

## draw_alpha

```lua
(method) widget.colorpicker:draw_alpha(x: number, y: number, w: number, h: number)
```

Draw a transparency color bar at given location and size.

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

## draw_brightness

```lua
(method) widget.colorpicker:draw_brightness(x: number, y: number, w: number, h: number)
```

Draw a brightness color bar at given location and size.

---

## draw_hue

```lua
(method) widget.colorpicker:draw_hue(x: number, y: number, w: number, h: number)
```

Draw a hue color bar at given location and size.

---

## draw_saturation

```lua
(method) widget.colorpicker:draw_saturation(x: number, y: number, w: number, h: number)
```

Draw a saturation color bar at given location and size.

---

## draw_scrollbar

```lua
(method) widget:draw_scrollbar()
```

---

## draw_selector

```lua
(method) widget.colorpicker:draw_selector(x: any, y: any, h: any, color: any)
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

## get_alpha_color

```lua
(method) widget.colorpicker:get_alpha_color()
  -> renderer.color
```

Gets the currently selected color on the transparency bar.

---

## get_bottom

```lua
(method) widget:get_bottom()
  -> number
```

Get the bottom y coordinate relative to parent

---

## get_brightness_color

```lua
(method) widget.colorpicker:get_brightness_color()
  -> renderer.color
```

Gets the currently selected color on the brightness bar.

---

## get_color

```lua
(method) widget.colorpicker:get_color()
  -> renderer.color
```

Gets the currently selected rgba color.

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

## get_hue_color

```lua
(method) widget.colorpicker:get_hue_color()
  -> renderer.color
```

Gets the currently selected color on the hue bar.

---

## get_name

```lua
(method) widget.colorpicker:get_name()
  -> string
```

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

## get_saturation_color

```lua
(method) widget.colorpicker:get_saturation_color()
  -> renderer.color
```

Gets the currently selected color on the saturation bar.

---

## get_scrollable_size

```lua
(method) widget:get_scrollable_size()
  -> number
```

Calculates the y scrollable size taking into account the bottom most
widget or the size of the widget it self if greater.

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
(method) widget.colorpicker:new(parent: widget, color?: string|renderer.color)
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
(method) widget:on_click(button: "left"|"right", x: number, y: number)
```

Click event emitted on a succesful on_mouse_pressed
and on_mouse_released events combo.

```lua
button:
    | "left"
    | "right"
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
(method) widget:on_mouse_enter(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse hovers the widget.

---

## on_mouse_leave

```lua
(method) widget:on_mouse_leave(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse leaves the widget.

---

## on_mouse_left

```lua
(method) widget:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) widget.colorpicker:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean
```

---

## on_mouse_pressed

```lua
(method) widget.colorpicker:on_mouse_pressed(button: "left"|"right", x: number, y: number, clicks: integer)
  -> boolean
```

---

## on_mouse_released

```lua
(method) widget.colorpicker:on_mouse_released(button: "left"|"right", x: number, y: number)
  -> boolean
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

## set_alpha

```lua
(method) widget.colorpicker:set_alpha(alpha: number)
```

Set the transparency level, the lower the given alpha the more transparent.

@*param* `alpha` — A value from 0 to 255

---

## set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

## set_color

```lua
(method) widget.colorpicker:set_color(color: string|renderer.color, skip_html: any, skip_rgba: any)
```

Set current color from rgba source which can also
be a css string representation.

---

## set_label

```lua
(method) widget:set_label(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>)
```

A text label for the widget, not all widgets support this.

---

## set_position

```lua
(method) widget:set_position(x?: integer, y?: integer)
```

Set the position of the widget and updates the child absolute coordinates

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
(method) widget.colorpicker:update()
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
(method) widget.colorpicker:update_size_position()
```

---

