---
sidebar_position: 50
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.settings

```lua
local settings = require "plugins.settings"
```

## config

```lua
(field) config: table
```

---

## core

```lua
(field) core: table
```

---

## default_keybindings

```lua
(field) default_keybindings: table
```

---

## plugin_sections

```lua
(field) plugin_sections: table
```

---

## plugins

```lua
(field) plugins: table
```

---

## sections

```lua
(field) sections: table
```

---

## type

```lua
(field) type: table<string, integer>
```

Enumeration for the different types of settings.

---

## ui

```lua
(field) ui: settings.ui
```

---

## settings.option

Represents a setting to render on a settings pane.

### default

```lua
(field) default: boolean|string|number|table<integer, integer>|table<integer, string>
```

Default value of the option

---

### description

```lua
(field) description: string
```

Description of the option eg: "Modifies the document indentation"

---

### exists

```lua
(field) exists: boolean
```

---

### filters

```lua
(field) filters: table<integer, string>
```

Lua patterns used on FILE or DIRECTORY to filter browser results and
also force the selection to match one of the filters.

---

### font_error

```lua
(field) font_error: boolean
```

Flag set to true when loading user defined fonts fail

---

### fonts_list

```lua
(field) fonts_list: table<string, renderer.font>
```

Optionally used for FONT to store the generated font group.

---

### get_value

```lua
(field) get_value: fun(value: any):any|nil
```

Optional function that is used to manipulate the current value on retrieval.

---

### icon

```lua
(field) icon: string
```

The icon set for a BUTTON

---

### label

```lua
(field) label: string
```

Title displayed to the user eg: "My Option"

---

### max

```lua
(field) max: number
```

Used for NUMBER to indiciate the maximum number allowed

---

### min

```lua
(field) min: number
```

Used for NUMBER to indicate the minimum number allowed

---

### on_apply

```lua
(field) on_apply: fun(value: any)|nil
```

---

### on_click

```lua
(field) on_click: string|fun(button: string, x: integer, y: integer)|nil
```

Command or function executed when a BUTTON is clicked

---

### path

```lua
(field) path: string
```

Config path in the config table, eg: section.myoption, myoption, etc...

---

### set_value

```lua
(field) set_value: fun(value: any):any|nil
```

Optional function that is used to manipulate the saved value on save.

---

### step

```lua
(field) step: number
```

Used for NUMBER to indiciate the increment/decrement amount

---

### type

```lua
(field) type: integer|`settings.type.BUTTON`|`settings.type.COLOR`|`settings.type.DIRECTORY`|`settings.type.FILE`...(+6)
```

Type of option that will be used to render an appropriate control

---

### values

```lua
(field) values: table
```

Used in a SELECTION to provide the list of valid options

---

## settings.ui

### NEWLINE

```lua
(field) NEWLINE: integer
```

Indicates on a widget.styledtext that a new line follows.

---

### __index

```lua
(field) __index: core.object
```

---

### about

```lua
(field) about: widget
```

A base widget

---

### animations

```lua
(field) animations: widget.animation[]
```

---

### background_color

```lua
(field) background_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

### border

```lua
(field) border: widget.border
```

Represents the border of a widget.

---

### captured_widget

```lua
(field) captured_widget: widget
```

Widget that captured mouse events

---

### child_active

```lua
(field) child_active: widget|nil
```

A base widget

---

### childs

```lua
(field) childs: table<integer, widget>
```

---

### clickable

```lua
(field) clickable: boolean
```

---

### colors

```lua
(field) colors: widget
```

A base widget

---

### context

```lua
(field) context: 'application'|'session'
```

---

### core

```lua
(field) core: widget
```

A base widget

---

### core_sections

```lua
(field) core_sections: widget.foldingbook
```

---

### current_scale

```lua
(field) current_scale: number
```

---

### cursor

```lua
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizev'
```

---

### defer_draw

```lua
(field) defer_draw: boolean
```

---

### draggable

```lua
(field) draggable: boolean
```

---

### dragged

```lua
(field) dragged: boolean
```

---

### explicit_update

```lua
(field) explicit_update: boolean
```

---

### font

```lua
(field) font: string|renderer.font|widget.fontreference
```

Represents a reference to a font stored elsewhere.

---

### force_events

```lua
(field) force_events: table
```

---

### foreground_color

```lua
(field) foreground_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

### h_scrollbar

```lua
(field) h_scrollbar: widget.scrollbar
```

---

### has_focus

```lua
(field) has_focus: boolean
```

---

### hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

### input_text

```lua
(field) input_text: boolean
```

---

### is_scrolling

```lua
(field) is_scrolling: boolean
```

---

### keybinds

```lua
(field) keybinds: widget
```

A base widget

---

### label

```lua
(field) label: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>
```

---

### mouse

```lua
(field) mouse: widget.position
```

Represents the position of a widget.

---

### mouse_is_hovering

```lua
(field) mouse_is_hovering: boolean
```

---

### mouse_is_pressed

```lua
(field) mouse_is_pressed: boolean
```

---

### mouse_pressed_outside

```lua
(field) mouse_pressed_outside: boolean
```

---

### name

```lua
(field) name: string
```

---

### next_zindex

```lua
(field) next_zindex: integer
```

---

### notebook

```lua
(field) notebook: widget.notebook
```

---

### parent

```lua
(field) parent: widget|nil
```

A base widget

---

### perform_update_size_position

```lua
(field) perform_update_size_position: boolean
```

---

### plugin_sections

```lua
(field) plugin_sections: widget.foldingbook
```

---

### plugins

```lua
(field) plugins: widget
```

A base widget

---

### position

```lua
(field) position: widget.position
```

Represents the position of a widget.

---

### prev_height

```lua
(field) prev_height: number?
```

---

### prev_size

```lua
(field) prev_size: widget.position
```

Represents the position of a widget.

---

### prev_view

```lua
(field) prev_view: unknown
```

---

### prev_width

```lua
(field) prev_width: number?
```

---

### render_background

```lua
(field) render_background: boolean
```

---

### scroll

```lua
(field) scroll: core.view.scroll
```

---

### scrollable

```lua
(field) scrollable: boolean
```

---

### set_focus

```lua
(field) set_focus: any
```

---

### size

```lua
(field) size: widget.position
```

Modifying this property directly is not advised, use set_size() instead.

---

### skip_scroll_ctrl

```lua
(field) skip_scroll_ctrl: boolean
```

By default is set to true to allow ctrl+wheel or cmd+wheel on mac to scale
the interface, you can set it to false on your parent widget to allow
manually intercepting ctrl+wheel.

---

### super

```lua
(field) super: widget
```

A base widget

---

### textview

```lua
(field) textview: widget
```

A base widget

---

### tooltip

```lua
(field) tooltip: (string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)?
```

---

### tooltip_command

```lua
(field) tooltip_command: string?
```

---

### type_name

```lua
(field) type_name: string
```

---

### v_scrollbar

```lua
(field) v_scrollbar: widget.scrollbar
```

---

### visible

```lua
(field) visible: boolean
```

---

### zindex

```lua
(field) zindex: integer
```

---

### override_rootview

```lua
function widget.override_rootview()
```

Called when initializing a floating widget to generate RootView overrides,
this function will only override the events once.

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
(method) widget:__tostring()
  -> string
```

Useful for debugging.

---

### activate

```lua
(method) widget:activate()
```

Emitted to input_text widgets when clicked.

---

### add_child

```lua
(method) widget:add_child(child: widget)
```

Add a child widget, automatically assign a zindex if non set and sorts
them in reverse order for better events matching.

---

### animate

```lua
(method) widget:animate(target?: table, properties: table<string, number>, options?: widget.animation.options)
```

Registers a new animation to be ran on the update cycle.

@*param* `target` — If nil assumes properties belong to widget it self.

---

### capture_mouse

```lua
(method) widget:capture_mouse(scrolling?: boolean)
```

All mouse events will be directly sent to the widget even if mouse moves
outside the widget region.

@*param* `scrolling` — Capture for scrolling

---

### centered

```lua
(method) widget:centered()
```

Center the widget horizontally and vertically to the screen or parent widget.

---

### clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

### deactivate

```lua
(method) widget:deactivate()
```

Emitted to input_text widgets on lost focus.

---

### destroy

```lua
(method) widget:destroy()
```

If floating, remove the widget from the floating widgets list
to allow proper garbage collection.

---

### destroy_childs

```lua
(method) widget:destroy_childs()
```

Recursively destroy all childs from the widget.

---

### disable_plugin

```lua
(method) settings.ui:disable_plugin(plugin: string)
```

Unload a plugin settings from plugins section.

---

### drag

```lua
(method) widget:drag(x: number, y: number)
```

Used internally when dragging is activated.

---

### draw

```lua
(method) widget:draw()
  -> boolean
```

If visible draw the widget and returns true.

---

### draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

### draw_border

```lua
(method) widget:draw_border(x?: number, y?: number, w?: number, h?: number)
```

Draw the widget configured border or custom one.

---

### draw_scrollbar

```lua
(method) widget:draw_scrollbar()
```

---

### draw_styled_text

```lua
(method) widget:draw_styled_text(text: table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, x: integer, y: integer, only_calc?: boolean, start_idx?: integer, end_idx?: integer)
  -> width: integer
  2. height: integer
```

Render or calculate the size of the specified range of elements
in a styled text elemet.

---

### draw_text_multiline

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

### enable_plugin

```lua
(method) settings.ui:enable_plugin(plugin: string)
```

Load plugin and append its settings to the plugins section.

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

### force_event

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

### get_bottom

```lua
(method) widget:get_bottom()
  -> number
```

Get the bottom y coordinate relative to parent

---

### get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> number
  2. number
  3. number
  4. number
```

---

### get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

---

### get_font

```lua
(method) widget:get_font(font?: string|renderer.font|widget.fontreference)
  -> renderer.font
```

Get the real renderer.font associated with a widget.font.

---

### get_h_scrollable_size

```lua
(method) widget:get_h_scrollable_size()
  -> number
```

Calculates the x scrollable size taking into account the right most
widget or the size of the widget it self if greater.

---

### get_height

```lua
(method) widget:get_height()
  -> number
```

Get height including borders.

---

### get_name

```lua
(method) widget:get_name()
  -> string
```

The name that is displayed on pragtical tabs.

---

### get_position

```lua
(method) widget:get_position()
  -> widget.position
```

Get the relative position in relation to parent

---

### get_real_height

```lua
(method) widget:get_real_height()
  -> number
```

Overall height of the widget accounting all visible child widgets.

---

### get_real_width

```lua
(method) widget:get_real_width()
  -> number
```

Overall width of the widget accounting all visible child widgets.

---

### get_right

```lua
(method) widget:get_right()
  -> number
```

Get the right x coordinate relative to parent

---

### get_scrollable_size

```lua
(method) widget:get_scrollable_size()
  -> number
```

Calculates the y scrollable size taking into account the bottom most
widget or the size of the widget it self if greater.

---

### get_size

```lua
(method) widget:get_size()
  -> widget.position
```

---

### get_width

```lua
(method) widget:get_width()
  -> number
```

Get width including borders.

---

### hide

```lua
(method) widget:hide()
```

Hide the widget.

---

### hide_animated

```lua
(method) widget:hide_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated hide.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

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

### is_visible

```lua
(method) widget:is_visible()
  -> boolean
```

Check if the widget is visible also recursing to the parent visibility.

---

### load_color_settings

```lua
(method) settings.ui:load_color_settings()
```

Generate the list of all available colors with preview

---

### load_core_settings

```lua
(method) settings.ui:load_core_settings()
```

Generate all the widgets for core settings.

---

### load_keymap_settings

```lua
(method) settings.ui:load_keymap_settings()
```

Generate the list of all available commands and allow editing their keymaps.

---

### load_plugin_settings

```lua
(method) settings.ui:load_plugin_settings()
```

Generate all the widgets for plugin settings.

---

### mouse_on_top

```lua
(method) widget:mouse_on_top(x: number, y: number)
  -> boolean
```

Check if the given mouse coordinate is hovering the widget

---

### move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

### new

```lua
(method) settings.ui:new()
```

Constructor

---

### on_change

```lua
(method) widget:on_change(value: any)
```

Event emitted when the value of the widget changes.
If applicable, child widgets should call this method
when its value changes.

---

### on_click

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

### on_file_dropped

```lua
(method) widget:on_file_dropped(filename: string, x: number, y: number)
  -> processed: boolean
```

Send file drop event to hovered child.

---

### on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: any, start: any, length: any)
```

---

### on_mouse_enter

```lua
(method) widget:on_mouse_enter(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse hovers the widget.

---

### on_mouse_leave

```lua
(method) widget:on_mouse_leave(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse leaves the widget.

---

### on_mouse_left

```lua
(method) widget:on_mouse_left()
```

---

### on_mouse_moved

```lua
(method) widget:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean
```

Besides the on_mouse_moved this event emits on_mouse_enter
and on_mouse_leave for easy hover effects. Also, if the
widget is scrollable and pressed this will drag it unless
there is an active input_text child active.

---

### on_mouse_pressed

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

### on_mouse_released

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

### on_mouse_wheel

```lua
(method) widget:on_mouse_wheel(y: number, x: number)
  -> boolean
```

---

### on_scale_change

```lua
(method) widget:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden by widgets to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

### on_text_input

```lua
(method) widget:on_text_input(text: string)
  -> processed: boolean
```

Redirects any text input to active child with the input_text flag.

---

### on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

---

### release_mouse

```lua
(method) widget:release_mouse()
```

Undo capture_mouse()

---

### remove_child

```lua
(method) widget:remove_child(child: widget)
```

Remove a child widget.

---

### run_animations

```lua
(method) widget:run_animations()
```

Runs all registered animations removing duplicated and finished ones.

---

### schedule_update

```lua
(method) widget:schedule_update()
```

Schedule a core update and redraw. Since widgets try to not fire updates
and draws to child widgets to reduce cpu consumption this function can be
used when a re-update and re-draw is strictly needed.

---

### scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> boolean
```

---

### scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> boolean
```

---

### scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> boolean
```

---

### set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

### set_label

```lua
(method) widget:set_label(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)
```

A text label for the widget, not all widgets support this.

---

### set_position

```lua
(method) widget:set_position(x?: integer, y?: integer)
```

Set the position of the widget and updates the child absolute coordinates

---

### set_size

```lua
(method) widget:set_size(width?: integer, height?: integer)
```

---

### set_target_size

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

### set_tooltip

```lua
(method) widget:set_tooltip(tooltip?: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, command?: string)
```

Text displayed when the widget is hovered.
If a command name is also given its associated binding will be displayed
as part of the tooltip.

---

### setup_about

```lua
(method) settings.ui:setup_about()
```

---

### show

```lua
(method) widget:show()
```

Show the widget.

---

### show_animated

```lua
(method) widget:show_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated show.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

---

### supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

---

### swap_active_child

```lua
(method) widget:swap_active_child(child?: widget)
```

Replaces current active child with a new one and calls the
activate/deactivate events of the child. This is especially
used to send text input events to widgets with input_text support.

@*param* `child` — If nil deactivates current child

---

### toggle_background

```lua
(method) widget:toggle_background(enable?: boolean)
```

When set to false the background rendering is disabled.

---

### toggle_visible

```lua
(method) widget:toggle_visible(animated?: boolean, lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Toggle visibility of widget.

---

### try_close

```lua
(method) core.view:try_close(do_close: any)
```

---

### update

```lua
(method) settings.ui:update()
```

Reposition and resize core and plugin widgets.

---

### update_if_scaled

```lua
(method) widget:update_if_scaled()
```

Explicitly call the widget update procedure when the scale change even if
the widget is not visible.

---

### update_position

```lua
(method) widget:update_position()
```

Called on the update function to be able to scroll the child widgets.

---

### update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

### update_size_position

```lua
(method) widget:update_size_position()
```

Similar to update, but here you should perform expensive calculations that
will get executed for a predefined period of time when a widget is
initialized, scale has changed or a widget switched from hidden to visible.

---

## add

```lua
function plugins.settings.add(section: string, options: settings.option[], plugin_name?: string, overwrite?: boolean)
```

Add a new settings section to the settings UI

@*param* `plugin_name` — Optional name of plugin

@*param* `overwrite` — Overwrite previous section options

---

