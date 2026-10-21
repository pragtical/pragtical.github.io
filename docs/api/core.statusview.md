---
sidebar_position: 50
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.statusview

Status bar with customizable items displaying document info and system status.
Access the global instance via `core.status_view`.

```lua
local statusview = require "core.statusview"
```

## Item

```lua
(field) Item: core.statusview.item
```

Individual status bar item with custom rendering and interaction.

---

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## active_items

```lua
(field) active_items: core.statusview.item[]
```

Currently visible items that pass predicates

---

## capture_text_input

```lua
(field) capture_text_input: boolean?
```

Receive text input while floating without taking focus

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

Panel being dragged ("left", "right", or "")

---

## floating

```lua
(field) floating: boolean
```

Whether the view uses floating placement

---

## floating_closing

```lua
(field) floating_closing: boolean?
```

Whether input is disabled while a closing slide runs

---

## floating_destination

```lua
(field) floating_destination: (core.view.position)?
```

Settled position retained during a slide

---

## floating_gesture

```lua
(field) floating_gesture: (core.view.floating_gesture)?
```

Active pointer drag or resize

---

## floating_options

```lua
(field) floating_options: (core.view.floating_options)?
```

Placement ownership and input policy

---

## floating_position

```lua
(field) floating_position: (core.view.position)?
```

Persistent interpolation state for a slide

---

## floating_previous_focus

```lua
(field) floating_previous_focus: (core.view)?
```

Focus target to restore when hiding

---

## floating_transition

```lua
(field) floating_transition: (core.view.floating_transition)?
```

Active slide and callback

---

## floating_visible

```lua
(field) floating_visible: boolean?
```

Whether the view is registered, including closing slides

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

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

## hide_messages

```lua
(field) hide_messages: boolean
```

Whether to suppress status messages

---

## hovered_item

```lua
(field) hovered_item: core.statusview.item
```

Item currently under mouse cursor

---

## hovered_panel

```lua
(field) hovered_panel: ""|"left"|"right"
```

Panel under cursor ("left", "right", or "")

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

All registered items

---

## left_width

```lua
(field) left_width: number
```

Visible width of left panel

---

## left_xoffset

```lua
(field) left_xoffset: number
```

Horizontal pan offset for left panel

---

## message

```lua
(field) message: table<integer, string|renderer.color|renderer.font>
```

Current temporary message content

---

## message_timeout

```lua
(field) message_timeout: number
```

Timestamp when current message expires

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## pointer

```lua
(field) pointer: table
```

---

## r_left_width

```lua
(field) r_left_width: number
```

Real (total) width of left panel content

---

## r_right_width

```lua
(field) r_right_width: number
```

Real (total) width of right panel content

---

## right_width

```lua
(field) right_width: number
```

Visible width of right panel

---

## right_xoffset

```lua
(field) right_xoffset: number
```

Horizontal pan offset for right panel

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

Persistent tooltip content

---

## tooltip_mode

```lua
(field) tooltip_mode: boolean
```

Whether persistent tooltip is active

---

## v_scrollbar

```lua
(field) v_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

## visible

```lua
(field) visible: boolean
```

---

## core.statusview.item

Individual status bar item with custom rendering and interaction.

### LEFT

```lua
(field) LEFT: integer
```

Align item on left side of status bar.

---

### RIGHT

```lua
(field) RIGHT: integer
```

Align item on right side of status bar.

---

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### active

```lua
(field) active: boolean
```

Whether item passes predicate check

---

### alignment

```lua
(field) alignment: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`
```

Left or right side placement

---

### background_color

```lua
(field) background_color: renderer.color|nil
```

Normal background color

---

### background_color_hover

```lua
(field) background_color_hover: renderer.color|nil
```

Hover background color

---

### cached_item

```lua
(field) cached_item: table<integer, string|renderer.color|renderer.font>
```

Cached rendered content

---

### command

```lua
(field) command: string|nil
```

Command name to execute on click

---

### name

```lua
(field) name: string
```

Unique identifier for the item

---

### on_click

```lua
(field) on_click: fun(button: string, x: number, y: number)|nil
```

Click handler function

---

### on_draw

```lua
(field) on_draw: fun(x: any, y: any, h: any, hovered: boolean, calc_only?: boolean):number|nil
```

Custom drawing function

---

### predicate

```lua
(field) predicate: fun():boolean
```

Condition to display item

---

### separator

```lua
(field) separator: `StatusView.separator2`|`StatusView.separator`
```

Separator style

---

### super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### tooltip

```lua
(field) tooltip: string
```

Text shown on mouse hover

---

### visible

```lua
(field) visible: boolean
```

Whether item is shown

---

### w

```lua
(field) w: number
```

Width in pixels (calculated)

---

### x

```lua
(field) x: number
```

Horizontal position (calculated)

---

### get_item

```lua
fun(self: core.statusview.item):table<integer, string|renderer.color|renderer.font>?, table<integer, string|renderer.color|renderer.font>?
```

---

### __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj`: [`core.object`](/docs/api/core.object) — The new instance of the class

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
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls`: [`core.object`](/docs/api/core.object) — The new class table

---

### extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T`: `any` — Class to check inheritance from

@*return* `extends`: `boolean` — True if object is T or inherits from T

---

### get_item

```lua
(method) core.statusview.item:get_item()
  -> table<integer, string|renderer.color|renderer.font>
```

Generate the styled text for this item.
Override this method or pass `get_item` in options.
Ignored if `on_draw` is set.

@*return*: `table<integer, string|`[`renderer.color`](/docs/api/renderer#renderercolor)`|`[`renderer.font`](/docs/api/renderer#rendererfont)`>`

---

### hide

```lua
(method) core.statusview.item:hide()
```

Hide the item from the status bar.

---

### is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T`: `any` — Class to check against

@*return* `is_exact`: `boolean` — True if object is exactly type T

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T`: `any` — Object to check

@*return* `is_instance`: `boolean` — True if T is exactly an instance of this class

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T`: `any` — Object or class to check

@*return* `is_extended`: `boolean` — True if T inherits from this class

---

### new

```lua
(method) core.statusview.item:new(options: core.statusview.item.options)
```

Create a new status bar item.

@*param* `options`: [`core.statusview.item.options`](/docs/api/core.statusview#corestatusviewitemoptions) — Options for creating a status bar item.

---

### set_predicate

```lua
(method) core.statusview.item:set_predicate(predicate: string|table|fun():boolean)
```

Set the condition to evaluate whether this item should be displayed.
String: treated as module name (e.g. "core.docview"), checked against active view.
Table: treated as class, checked against active view with `is()`.
Function: called each update, should return boolean.
Nil: always displays the item.

---

### show

```lua
(method) core.statusview.item:show()
```

Show the item on the status bar.

---

## core.statusview.item.alignment

```lua
core.statusview.item.alignment:
   -\> `StatusView.Item.LEFT`
    | `StatusView.Item.RIGHT`
```

## core.statusview.item.get_item

## core.statusview.item.onclick

## core.statusview.item.ondraw

## core.statusview.item.options

Options for creating a status bar item.

### alignment

```lua
(field) alignment: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`
```

Left or right side placement

---

### command

```lua
(field) command: string|fun(button: string, x: number, y: number)|nil
```

Command name or click callback

---

### get_item

```lua
(field) get_item: fun(self: core.statusview.item):table<integer, string|renderer.color|renderer.font>?, table<integer, string|renderer.color|renderer.font>?
```

Function returning styled text (can return empty table)

---

### name

```lua
(field) name: string
```

Unique identifier for the item

---

### position

```lua
(field) position: integer?
```

Insertion position (-1=end, 1=beginning)

---

### predicate

```lua
(field) predicate: string|table|fun():boolean
```

Condition for display (string=module, table=class, function=custom, nil=always)

---

### separator

```lua
(field) separator: (`StatusView.separator2`|`StatusView.separator`)?
```

Separator style (space or pipe)

---

### tooltip

```lua
(field) tooltip: string?
```

Text displayed on mouse hover

---

### visible

```lua
(field) visible: boolean?
```

Initial visibility state

---

## core.statusview.item.predicate

## core.statusview.item.separator

```lua
core.statusview.item.separator:
   -\> `StatusView.separator`
    | `StatusView.separator2`
```

## core.statusview.position

Left or right alignment identifier.

## core.statusview.styledtext

Styled text array containing fonts, colors, and strings.

## core.statusview.tooltip_view

Floating status-item tooltip with a mutable current item.

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### capture_text_input

```lua
(field) capture_text_input: boolean?
```

Receive text input while floating without taking focus

---

### context

```lua
(field) context: 'application'|'session'
```

---

### current_scale

```lua
(field) current_scale: number
```

---

### cursor

```lua
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)
```

---

### floating

```lua
(field) floating: boolean
```

Whether the view uses floating placement

---

### floating_closing

```lua
(field) floating_closing: boolean?
```

Whether input is disabled while a closing slide runs

---

### floating_destination

```lua
(field) floating_destination: (core.view.position)?
```

Settled position retained during a slide

---

### floating_gesture

```lua
(field) floating_gesture: (core.view.floating_gesture)?
```

Active pointer drag or resize

---

### floating_options

```lua
(field) floating_options: (core.view.floating_options)?
```

Placement ownership and input policy

---

### floating_position

```lua
(field) floating_position: (core.view.position)?
```

Persistent interpolation state for a slide

---

### floating_previous_focus

```lua
(field) floating_previous_focus: (core.view)?
```

Focus target to restore when hiding

---

### floating_transition

```lua
(field) floating_transition: (core.view.floating_transition)?
```

Active slide and callback

---

### floating_visible

```lua
(field) floating_visible: boolean?
```

Whether the view is registered, including closing slides

---

### h_scrollbar

```lua
(field) h_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

### hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

### item

```lua
(field) item: core.statusview.item
```

Current tooltip item read by stable drawing callbacks

---

### mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

### position

```lua
(field) position: core.view.position
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

### size

```lua
(field) size: core.view.position
```

---

### super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### v_scrollbar

```lua
(field) v_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

### from_state

```lua
function core.view.from_state(state: table)
  -> view: (core.view)?
```

Create and initialize a new view instance from a previously saved state.

This function is called when restoring workspace/session state.
Implementations are responsible for:
  * creating the view instance
  * applying any persisted state

If loading the instance failed nil will be returned.

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?`

---

### __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj`: [`core.object`](/docs/api/core.object) — The new instance of the class

---

### __tostring

```lua
(method) core.view:__tostring()
  -> string
```

---

### bring_to_front

```lua
(method) core.view:bring_to_front()
  -> view: core.view
```

Raise a shown floating view and its owned popups above the other floating views.

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

### clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

### draw

```lua
(method) core.view:draw()
```

Called every frame to render the view.
Override to draw custom content. Typical pattern:
1. Call self:draw_background(color)
2. Draw your content
3. Call self:draw_scrollbar()

---

### draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

### draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

### extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls`: [`core.object`](/docs/api/core.object) — The new class table

---

### extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T`: `any` — Class to check inheritance from

@*return* `extends`: `boolean` — True if object is T or inherits from T

---

### get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> x1: number
  2. y1: number
  3. x2: number
  4. y2: number
```

Get the content bounds in content coordinates (accounting for scroll).

@*return* `x1`: `number` — Left edge

@*return* `y1`: `number` — Top edge

@*return* `x2`: `number` — Right edge

@*return* `y2`: `number` — Bottom edge

---

### get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

Get the top-left corner of content area in screen coordinates.
Accounts for scroll offset. Use for drawing content at correct position.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

---

### get_floating_bounds

```lua
(method) core.view:get_floating_bounds()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get the popup's outer rectangle in screen coordinates, including borders.
Override together with set_floating_bounds() for composite views.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

@*return* `w`: `number` — Outer width in pixels

@*return* `h`: `number` — Outer height in pixels

---

### get_floating_drag_region

```lua
(method) core.view:get_floating_drag_region()
  -> x: number?
  2. y: number?
  3. w: number?
  4. h: number?
```

Get the screen rectangle where a floating view can be dragged.
Override to restrict dragging to a header; defaults to the full popup bounds.

@*return* `x`: `number?` — Screen x coordinate, or nil to disable dragging

@*return* `y`: `number?` — Screen y coordinate

@*return* `w`: `number?` — Region width

@*return* `h`: `number?` — Region height

---

### get_focus_target

```lua
(method) core.view:get_focus_target()
  -> target: (core.view)?
```

Get the view that should receive focus when this view is shown or clicked.
Override for composites whose keyboard focus belongs to a descendant.

@*return* `target`: `(`[`core.view`](/docs/api/core.view)`)?` — View to focus, or nil to preserve the current focus

---

### get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> width: number
```

Get the total scrollable width of the view's content.
Used by horizontal scrollbar.

@*return* `width`: `number` — Width in pixels (default: 0, no horizontal scroll)

---

### get_module

```lua
(method) core.view:get_module()
  -> path: string?
```

Returns the module path of this view.

This method resolves the Lua module name that loaded the concrete view
class (for example `"core.view"`).

If the view class cannot be associated with any loaded module, `nil`
is returned.

@*return* `path`: `string?`

---

### get_name

```lua
(method) core.view:get_name()
  -> name: string
```

Get the name displayed in the view's tab.
Override to show document name, file path, etc.

@*return* `name`: `string`

---

### get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> height: number
```

Get the total scrollable height of the view's content.
Used by scrollbar to calculate thumb size and position.

@*return* `height`: `number` — Height in pixels (default: infinite)

---

### get_state

```lua
(method) core.view:get_state()
  -> state: table?
```

Serialize this view into a persistable state table.

This method is called when the editor is saving workspace/session state.
The returned table must contain only plain Lua data (no functions,
userdata, metatables, or cyclic references).

Returning `nil` indicates that this view should NOT be restored when
reloading the workspace.

@*return* `state`: `table?`

---

### hide_floating

```lua
(method) core.view:hide_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Hide the floating view, close owned popups, cancel input, and restore focus.
A closing slide delays removal while the view immediately stops receiving input.
Disabled transitions remove the view and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional closing slide (to) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

### hit_test

```lua
(method) core.view:hit_test(x: number, y: number)
  -> inside: boolean
```

Check whether a screen point lies inside the view's outer rectangle.
Override for custom shapes or composites with additional hit regions.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `inside`: `boolean` — Whether the view contains the point

---

### is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T`: `any` — Class to check against

@*return* `is_exact`: `boolean` — True if object is exactly type T

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T`: `any` — Object to check

@*return* `is_instance`: `boolean` — True if T is exactly an instance of this class

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T`: `any` — Object or class to check

@*return* `is_extended`: `boolean` — True if T inherits from this class

---

### is_floating_owner_visible

```lua
(method) core.view:is_floating_owner_visible()
  -> visible: boolean?
```

Check whether floating popups owned by this view should remain visible.
Docked owners must be active in their node; container children follow their parent.
Override for composites with their own visibility rules.

@*return* `visible`: `boolean?` — Falsy when the owner is hidden or its tab is inactive

---

### move_towards

```lua
(method) core.view:move_towards(t: table, k: string|number, dest: number, rate?: number, name?: string)
```

Smoothly animate a value towards a destination.
Use this for animations instead of direct assignment.

@*param* `t`: `table` — Table containing the value

@*param* `k`: `string|number` — Key in table

@*param* `dest`: `number` — Target value

@*param* `rate?`: `number` — Animation speed (0-1, default 0.5, higher = faster)

@*param* `name?`: `string` — Transition name (for config.disabled_transitions)

---

### new

```lua
(method) core.view:new()
```

Constructor - initializes a new view instance.
Override this in subclasses and always call super constructor first:
`MyView.super.new(self)`

---

### on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> consumed: boolean
```

Handle file drop events (drag and drop from OS).
Override to handle dropped files. Return true to consume event.

@*param* `filename`: `string` — Absolute path to dropped file

@*param* `x`: `number` — Screen x where file was dropped

@*param* `y`: `number` — Screen y where file was dropped

@*return* `consumed`: `boolean` — True to consume event, false to propagate

---

### on_floating_dismiss

```lua
(method) core.view:on_floating_dismiss(reason: "escape"|"focuslost"|"outside")
```

Handle a dismissal requested by Escape, an outside click, or window focus loss.
The default implementation hides the view immediately; override for custom handling.

```lua
reason:
    | "escape"
    | "outside"
    | "focuslost"
```

@*param* `reason`: `"escape"|"focuslost"|"outside"` — Event that requested dismissal

---

### on_floating_visibility_changed

```lua
(method) core.view:on_floating_visibility_changed(visible: boolean)
```

Called when showing a floating view or completing its removal.
Override to synchronize widget visibility or clear popup controller state.

@*param* `visible`: `boolean` — True on show, false when removal completes

---

### on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text`: `string` — Composition text being edited

@*param* `start`: `number` — Start position of selection within composition

@*param* `length`: `number` — Length of selection within composition

---

### on_key_pressed

```lua
(method) core.view:on_key_pressed(stroke: string, ...any)
  -> consumed: boolean?
```

Handle a floating view's keyboard input before command dispatch.
Override and return true to consume the normalized key binding.

@*param* `stroke`: `string` — Normalized key binding, such as "ctrl+return"

@*param*: `any` — Additional arguments forwarded by the keyboard handler

@*return* `consumed`: `boolean?` — Whether the event was handled

---

### on_mouse_capture_lost

```lua
(method) core.view:on_mouse_capture_lost()
```

Cancel pointer gestures when RootView releases mouse capture without a click.
Clears floating dragging, text selection, scrollbar dragging, and hover state.
Override to clear any additional subclass gesture state.

---

### on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

Called when mouse leaves the view's area.
Override to clear hover states. Base implementation notifies scrollbars.

---

### on_mouse_moved

```lua
(method) core.view:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean|nil
```

Handle mouse movement events.
Override for hover effects, drag operations, etc.
Base implementation handles scrollbar dragging.

@*param* `x`: `number` — Current screen x coordinate

@*param* `y`: `number` — Current screen y coordinate

@*param* `dx`: `number` — Delta x since last move

@*param* `dy`: `number` — Delta y since last move

---

### on_mouse_pressed

```lua
(method) core.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> consumed: boolean?
```

Handle mouse button press events.
Override to handle clicks. Return true to consume event and prevent propagation.
Base implementation handles scrollbar clicks.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Number of consecutive clicks (configurable with config.max_clicks)

@*return* `consumed`: `boolean?` — True to consume event, false/nil to propagate

---

### on_mouse_released

```lua
(method) core.view:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

Handle mouse button release events.
Override to handle click completion. Base implementation handles scrollbar.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

---

### on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> consumed: boolean?
```

Handle mouse wheel scroll events.
Override for custom scroll behavior. Base implementation does nothing.

@*param* `y`: `number` — Vertical scroll delta; positive is "up"

@*param* `x`: `number` — Horizontal scroll delta; positive is "left"

@*return* `consumed`: `boolean?` — True to consume event

---

### on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Called when DPI scale changes (display moved, zoom changed, etc.).
Override to adjust sizes, padding, or other scale-dependent values.

@*param* `new_scale`: `number` — New scale factor (e.g., 1.0, 1.5, 2.0)

@*param* `prev_scale`: `number` — Previous scale factor

---

### on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

Handle text input events (typing, IME composition).
Override for text editing. Called after IME composition completes.

@*param* `text`: `string` — Input text (may be multiple characters)

---

### on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

Handle touch move events (touchscreen/trackpad gestures).
Override for touch-specific behavior. Base implementation handles scrolling.

@*param* `x`: `number` — Current touch x coordinate

@*param* `y`: `number` — Current touch y coordinate

@*param* `dx`: `number` — Delta x since last position

@*param* `dy`: `number` — Delta y since last position

@*param* `i`: `number` — Touch finger/pointer index

---

### owns_view

```lua
(method) core.view:owns_view(view?: core.view)
  -> owned: boolean
```

Check whether a view is this view or belongs to it through a container or owner.
Follows parent, subparent, and floating owner links while guarding against cycles.

@*param* `view?`: [`core.view`](/docs/api/core.view) — Candidate view

@*return* `owned`: `boolean` — Whether the candidate belongs to this view

---

### scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> dragging: boolean
```

Check if user is currently dragging either scrollbar.

@*return* `dragging`: `boolean` — True if scrollbar drag is in progress

---

### scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering`: `boolean` — True if mouse is over scrollbar

---

### scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> overlaps: boolean
```

Check if a screen point overlaps either scrollbar.
Useful for determining cursor style or handling clicks.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `overlaps`: `boolean` — True if point is over vertical or horizontal scrollbar

---

### set_floating

```lua
(method) core.view:set_floating(enabled: boolean, options?: core.view.floating_options)
  -> view: core.view
```

Enable or disable floating placement and configure popup input and ownership.
Call show_floating() to show the view after enabling this mode.
Detach it from its node or parent container before showing. Disabling hides it.

@*param* `enabled`: `boolean` — Whether the view should use floating placement

@*param* `options?`: [`core.view.floating_options`](/docs/api/core.view#coreviewfloating_options) — Options merged with existing ones when enabling

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

### set_floating_bounds

```lua
(method) core.view:set_floating_bounds(x: number, y: number, w: number, h: number)
```

Set the popup's outer rectangle when RootView places, drags, or resizes it.
Override for composites that need to update child layout or account for borders.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `w`: `number` — Outer width in pixels

@*param* `h`: `number` — Outer height in pixels

---

### show_floating

```lua
(method) core.view:show_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Show or raise the view in RootView's floating layer and apply its focus policy.
Requires a view detached from its node and parent container.
Reopening cancels a pending close and its completion callback.
Disabled transitions apply placement and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional opening slide (from) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

### supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

---

### try_close

```lua
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close`: `function` — Call this function to actually close the view

---

### update

```lua
(method) core.view:update()
```

Called every frame to update view state.
Override to add custom update logic. Always call super.update(self) first.
Handles: scale changes, scroll animation, scrollbar updates.

---

### update_floating

```lua
(method) core.view:update_floating()
```

Update anchor placement or advance an opening or closing slide.
RootView calls this before update() for each shown floating view.
Completes removal and invokes the transition callback when a slide finishes.

---

### update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

## from_state

```lua
function core.view.from_state(state: table)
  -> view: (core.view)?
```

Create and initialize a new view instance from a previously saved state.

This function is called when restoring workspace/session state.
Implementations are responsible for:
  * creating the view instance
  * applying any persisted state

If loading the instance failed nil will be returned.

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?`

---

## __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj`: [`core.object`](/docs/api/core.object) — The new instance of the class

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
  -> item: core.statusview.item
```

Add a new item to the status bar.

@*param* `options`: [`core.statusview.item.options`](/docs/api/core.statusview#corestatusviewitemoptions) — Options for creating a status bar item.

@*return* `item`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem) — The created item

---

## bring_to_front

```lua
(method) core.view:bring_to_front()
  -> view: core.view
```

Raise a shown floating view and its owned popups above the other floating views.

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## display_messages

```lua
(method) core.statusview:display_messages(enable: boolean)
```

Enable or disable system messages on the status bar.

@*param* `enable`: `boolean` — True to show messages, false to hide them

---

## drag_panel

```lua
(method) core.statusview:drag_panel(panel: "left"|"right", dx: number)
```

Pan a status bar panel horizontally when content overflows.

```lua
-- Left or right alignment identifier.
panel:
    | "left"
    | "right"
```

@*param* `panel`: `"left"|"right"` — Panel to drag ("left" or "right")

@*param* `dx`: `number` — Horizontal drag distance in pixels

---

## draw

```lua
(method) core.statusview:draw()
```

Render the status bar with all active items, messages, and tooltips.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

## draw_item_tooltip

```lua
(method) core.statusview:draw_item_tooltip(item: core.statusview.item)
```

Draw a tooltip box above the status bar for an item.

@*param* `item`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem) — Item with tooltip text

---

## draw_items

```lua
(method) core.statusview:draw_items(items: table<integer, string|renderer.color|renderer.font>, right_align?: boolean, xoffset?: number, yoffset?: number)
```

Draw styled text on the status bar with optional alignment.

@*param* `items`: `table<integer, string|`[`renderer.color`](/docs/api/renderer#renderercolor)`|`[`renderer.font`](/docs/api/renderer#rendererfont)`>` — Styled text to render

@*param* `right_align?`: `boolean` — True to right-align, false for left-align

@*param* `xoffset?`: `number` — Horizontal offset in pixels

@*param* `yoffset?`: `number` — Vertical offset in pixels

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls`: [`core.object`](/docs/api/core.object) — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T`: `any` — Class to check inheritance from

@*return* `extends`: `boolean` — True if object is T or inherits from T

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

@*return* `x1`: `number` — Left edge

@*return* `y1`: `number` — Top edge

@*return* `x2`: `number` — Right edge

@*return* `y2`: `number` — Bottom edge

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

Get the top-left corner of content area in screen coordinates.
Accounts for scroll offset. Use for drawing content at correct position.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

---

## get_floating_bounds

```lua
(method) core.view:get_floating_bounds()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get the popup's outer rectangle in screen coordinates, including borders.
Override together with set_floating_bounds() for composite views.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

@*return* `w`: `number` — Outer width in pixels

@*return* `h`: `number` — Outer height in pixels

---

## get_floating_drag_region

```lua
(method) core.view:get_floating_drag_region()
  -> x: number?
  2. y: number?
  3. w: number?
  4. h: number?
```

Get the screen rectangle where a floating view can be dragged.
Override to restrict dragging to a header; defaults to the full popup bounds.

@*return* `x`: `number?` — Screen x coordinate, or nil to disable dragging

@*return* `y`: `number?` — Screen y coordinate

@*return* `w`: `number?` — Region width

@*return* `h`: `number?` — Region height

---

## get_focus_target

```lua
(method) core.view:get_focus_target()
  -> target: (core.view)?
```

Get the view that should receive focus when this view is shown or clicked.
Override for composites whose keyboard focus belongs to a descendant.

@*return* `target`: `(`[`core.view`](/docs/api/core.view)`)?` — View to focus, or nil to preserve the current focus

---

## get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> width: number
```

Get the total scrollable width of the view's content.
Used by horizontal scrollbar.

@*return* `width`: `number` — Width in pixels (default: 0, no horizontal scroll)

---

## get_hovered_panel

```lua
(method) core.statusview:get_hovered_panel(x: number, y: number)
  -> panel: string
```

Determine which panel (left or right) is under the cursor.

@*param* `x`: `number` — Mouse x coordinate

@*param* `y`: `number` — Mouse y coordinate

@*return* `panel`: `string` — "left", "right", or "" if none

---

## get_item

```lua
(method) core.statusview:get_item(name: string)
  -> item: core.statusview.item|nil
```

Get a status bar item by name.

@*param* `name`: `string` — Unique item name

@*return* `item`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem)`|nil` — The item or nil if not found

---

## get_item_visible_area

```lua
(method) core.statusview:get_item_visible_area(item: core.statusview.item)
  -> x: number
  2. w: number
```

Calculate the visible portion of an item considering panel overflow.

@*param* `item`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem) — Item to check

@*return* `x`: `number` — Visible x coordinate (0 if fully clipped)

@*return* `w`: `number` — Visible width (0 if fully clipped)

---

## get_items

```lua
(method) core.statusview:get_items(nowarn: boolean)
  -> left: table
  2. right: table
```

Legacy method for retrieving status bar items.

@*param* `nowarn`: `boolean` — Suppress deprecation warning if true

@*return* `left`: `table` — Left-aligned items

@*return* `right`: `table` — Right-aligned items

---

## get_items_list

```lua
(method) core.statusview:get_items_list(alignment?: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`)
  -> items: core.statusview.item[]
```

Get all items or items filtered by alignment.

```lua
alignment:
   -\> `StatusView.Item.LEFT`
    | `StatusView.Item.RIGHT`
```

@*param* `alignment?`: ```StatusView.Item.LEFT`|`StatusView.Item.RIGHT``` — Filter by left or right alignment

@*return* `items`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem)`[]` — List of items

---

## get_module

```lua
(method) core.view:get_module()
  -> path: string?
```

Returns the module path of this view.

This method resolves the Lua module name that loaded the concrete view
class (for example `"core.view"`).

If the view class cannot be associated with any loaded module, `nil`
is returned.

@*return* `path`: `string?`

---

## get_name

```lua
(method) core.view:get_name()
  -> name: string
```

Get the name displayed in the view's tab.
Override to show document name, file path, etc.

@*return* `name`: `string`

---

## get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> height: number
```

Get the total scrollable height of the view's content.
Used by scrollbar to calculate thumb size and position.

@*return* `height`: `number` — Height in pixels (default: infinite)

---

## get_state

```lua
(method) core.view:get_state()
  -> state: table?
```

Serialize this view into a persistable state table.

This method is called when the editor is saving workspace/session state.
The returned table must contain only plain Lua data (no functions,
userdata, metatables, or cyclic references).

Returning `nil` indicates that this view should NOT be restored when
reloading the workspace.

@*return* `state`: `table?`

---

## hide

```lua
(method) core.statusview:hide()
```

Hide the status bar.

---

## hide_floating

```lua
(method) core.view:hide_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Hide the floating view, close owned popups, cancel input, and restore focus.
A closing slide delays removal while the view immediately stops receiving input.
Disabled transitions remove the view and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional closing slide (to) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## hide_items

```lua
(method) core.statusview:hide_items(names?: string|table<integer, string>)
```

Hide specific items or all items if no names provided.

@*param* `names?`: `string|table<integer, string>` — Single name or list of item names

---

## hit_test

```lua
(method) core.view:hit_test(x: number, y: number)
  -> inside: boolean
```

Check whether a screen point lies inside the view's outer rectangle.
Override for custom shapes or composites with additional hit regions.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `inside`: `boolean` — Whether the view contains the point

---

## is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T`: `any` — Class to check against

@*return* `is_exact`: `boolean` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T`: `any` — Object to check

@*return* `is_instance`: `boolean` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T`: `any` — Object or class to check

@*return* `is_extended`: `boolean` — True if T inherits from this class

---

## is_floating_owner_visible

```lua
(method) core.view:is_floating_owner_visible()
  -> visible: boolean?
```

Check whether floating popups owned by this view should remain visible.
Docked owners must be active in their node; container children follow their parent.
Override for composites with their own visibility rules.

@*return* `visible`: `boolean?` — Falsy when the owner is hidden or its tab is inactive

---

## move_item

```lua
(method) core.statusview:move_item(name: string, position: integer, alignment?: `StatusView.Item.LEFT`|`StatusView.Item.RIGHT`)
  -> moved: boolean
```

Move an item to a different position.

```lua
alignment:
   -\> `StatusView.Item.LEFT`
    | `StatusView.Item.RIGHT`
```

@*param* `name`: `string` — Item name to move

@*param* `position`: `integer` — New position (negative for reverse order)

@*param* `alignment?`: ```StatusView.Item.LEFT`|`StatusView.Item.RIGHT``` — Optional new alignment

@*return* `moved`: `boolean` — True if item was found and moved

---

## move_towards

```lua
(method) core.view:move_towards(t: table, k: string|number, dest: number, rate?: number, name?: string)
```

Smoothly animate a value towards a destination.
Use this for animations instead of direct assignment.

@*param* `t`: `table` — Table containing the value

@*param* `k`: `string|number` — Key in table

@*param* `dest`: `number` — Target value

@*param* `rate?`: `number` — Animation speed (0-1, default 0.5, higher = faster)

@*param* `name?`: `string` — Transition name (for config.disabled_transitions)

---

## new

```lua
(method) core.statusview:new()
```

Create a new status bar and register default items.

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> consumed: boolean
```

Handle file drop events (drag and drop from OS).
Override to handle dropped files. Return true to consume event.

@*param* `filename`: `string` — Absolute path to dropped file

@*param* `x`: `number` — Screen x where file was dropped

@*param* `y`: `number` — Screen y where file was dropped

@*return* `consumed`: `boolean` — True to consume event, false to propagate

---

## on_floating_dismiss

```lua
(method) core.view:on_floating_dismiss(reason: "escape"|"focuslost"|"outside")
```

Handle a dismissal requested by Escape, an outside click, or window focus loss.
The default implementation hides the view immediately; override for custom handling.

```lua
reason:
    | "escape"
    | "outside"
    | "focuslost"
```

@*param* `reason`: `"escape"|"focuslost"|"outside"` — Event that requested dismissal

---

## on_floating_visibility_changed

```lua
(method) core.view:on_floating_visibility_changed(visible: boolean)
```

Called when showing a floating view or completing its removal.
Override to synchronize widget visibility or clear popup controller state.

@*param* `visible`: `boolean` — True on show, false when removal completes

---

## on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text`: `string` — Composition text being edited

@*param* `start`: `number` — Start position of selection within composition

@*param* `length`: `number` — Length of selection within composition

---

## on_key_pressed

```lua
(method) core.view:on_key_pressed(stroke: string, ...any)
  -> consumed: boolean?
```

Handle a floating view's keyboard input before command dispatch.
Override and return true to consume the normalized key binding.

@*param* `stroke`: `string` — Normalized key binding, such as "ctrl+return"

@*param*: `any` — Additional arguments forwarded by the keyboard handler

@*return* `consumed`: `boolean?` — Whether the event was handled

---

## on_mouse_capture_lost

```lua
(method) core.view:on_mouse_capture_lost()
```

Cancel pointer gestures when RootView releases mouse capture without a click.
Clears floating dragging, text selection, scrollbar dragging, and hover state.
Override to clear any additional subclass gesture state.

---

## on_mouse_left

```lua
(method) core.statusview:on_mouse_left()
```

Handle mouse leaving the status bar area.

---

## on_mouse_moved

```lua
(method) core.statusview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
```

Handle mouse movement over the status bar.
Updates hovered item, cursor, and handles panel dragging.

@*param* `x`: `number` — Mouse x coordinate

@*param* `y`: `number` — Mouse y coordinate

@*param* `dx`: `number` — Delta x movement

@*param* `dy`: `number` — Delta y movement

---

## on_mouse_pressed

```lua
(method) core.statusview:on_mouse_pressed(button: string, x: number, y: number, clicks: number)
  -> boolean
```

Handle mouse button press events.
Clicking on active message opens log view. Left-click enables panel dragging when content overflows.

@*param* `button`: `string` — Mouse button identifier

@*param* `x`: `number` — Mouse x coordinate

@*param* `y`: `number` — Mouse y coordinate

@*param* `clicks`: `number` — Number of clicks

---

## on_mouse_released

```lua
(method) core.statusview:on_mouse_released(button: string, x: number, y: number)
```

Handle mouse button release events.
Executes item command or callback if clicked on an item.

@*param* `button`: `string` — Mouse button identifier

@*param* `x`: `number` — Mouse x coordinate

@*param* `y`: `number` — Mouse y coordinate

---

## on_mouse_wheel

```lua
(method) core.statusview:on_mouse_wheel(y: number, x: number)
```

Handle mouse wheel scrolling to pan overflowing panels.

@*param* `y`: `number` — Vertical scroll amount

@*param* `x`: `number` — Horizontal scroll amount

---

## on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Called when DPI scale changes (display moved, zoom changed, etc.).
Override to adjust sizes, padding, or other scale-dependent values.

@*param* `new_scale`: `number` — New scale factor (e.g., 1.0, 1.5, 2.0)

@*param* `prev_scale`: `number` — Previous scale factor

---

## on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

Handle text input events (typing, IME composition).
Override for text editing. Called after IME composition completes.

@*param* `text`: `string` — Input text (may be multiple characters)

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

Handle touch move events (touchscreen/trackpad gestures).
Override for touch-specific behavior. Base implementation handles scrolling.

@*param* `x`: `number` — Current touch x coordinate

@*param* `y`: `number` — Current touch y coordinate

@*param* `dx`: `number` — Delta x since last position

@*param* `dy`: `number` — Delta y since last position

@*param* `i`: `number` — Touch finger/pointer index

---

## order_items

```lua
(method) core.statusview:order_items(names: table<integer, string>)
```

Reorder items by the given name list.
Items are placed at the beginning in the order specified.

@*param* `names`: `table<integer, string>` — List of item names in desired order

---

## owns_view

```lua
(method) core.view:owns_view(view?: core.view)
  -> owned: boolean
```

Check whether a view is this view or belongs to it through a container or owner.
Follows parent, subparent, and floating owner links while guarding against cycles.

@*param* `view?`: [`core.view`](/docs/api/core.view) — Candidate view

@*return* `owned`: `boolean` — Whether the candidate belongs to this view

---

## register_command_items

```lua
(method) core.statusview:register_command_items()
```

Register default status bar items for command views.
Shows file count icon.

---

## register_docview_items

```lua
(method) core.statusview:register_docview_items()
```

Register default status bar items for document views.
Shows file, position, selections, indentation, encoding, line ending, etc.

---

## register_imageview_items

```lua
(method) core.statusview:register_imageview_items()
```

Register default status bar items for image views.
Shows image filename, dimensions, and zoom level.

---

## remove_item

```lua
(method) core.statusview:remove_item(name: string)
  -> removed_item: core.statusview.item|nil
```

Remove an item from the status bar.

@*param* `name`: `string` — Item name to remove

@*return* `removed_item`: [`core.statusview.item`](/docs/api/core.statusview#corestatusviewitem)`|nil` — The removed item or nil

---

## remove_tooltip

```lua
(method) core.statusview:remove_tooltip()
```

Hide the persistent tooltip and restore normal status bar items.

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> dragging: boolean
```

Check if user is currently dragging either scrollbar.

@*return* `dragging`: `boolean` — True if scrollbar drag is in progress

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering`: `boolean` — True if mouse is over scrollbar

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> overlaps: boolean
```

Check if a screen point overlaps either scrollbar.
Useful for determining cursor style or handling clicks.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `overlaps`: `boolean` — True if point is over vertical or horizontal scrollbar

---

## set_floating

```lua
(method) core.view:set_floating(enabled: boolean, options?: core.view.floating_options)
  -> view: core.view
```

Enable or disable floating placement and configure popup input and ownership.
Call show_floating() to show the view after enabling this mode.
Detach it from its node or parent container before showing. Disabling hides it.

@*param* `enabled`: `boolean` — Whether the view should use floating placement

@*param* `options?`: [`core.view.floating_options`](/docs/api/core.view#coreviewfloating_options) — Options merged with existing ones when enabling

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## set_floating_bounds

```lua
(method) core.view:set_floating_bounds(x: number, y: number, w: number, h: number)
```

Set the popup's outer rectangle when RootView places, drags, or resizes it.
Override for composites that need to update child layout or account for borders.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `w`: `number` — Outer width in pixels

@*param* `h`: `number` — Outer height in pixels

---

## show

```lua
(method) core.statusview:show()
```

Show the status bar.

---

## show_floating

```lua
(method) core.view:show_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Show or raise the view in RootView's floating layer and apply its focus policy.
Requires a view detached from its node and parent container.
Reopening cancels a pending close and its completion callback.
Disabled transitions apply placement and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional opening slide (from) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## show_items

```lua
(method) core.statusview:show_items(names?: string|table<integer, string>)
```

Show specific items or all items if no names provided.

@*param* `names?`: `string|table<integer, string>` — Single name or list of item names

---

## show_message

```lua
(method) core.statusview:show_message(icon: string, icon_color: renderer.color, text: string)
```

Display a temporary message in the status bar.
Message duration is controlled by `config.message_timeout`.

@*param* `icon`: `string` — Icon character to display

@*param* `icon_color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Icon color

@*param* `text`: `string` — Message text

---

## show_tooltip

```lua
(method) core.statusview:show_tooltip(text: string|table<integer, string|renderer.color|renderer.font>)
```

Show a persistent tooltip replacing all status bar content.
Remains visible until `remove_tooltip()` is called.

@*param* `text`: `string|table<integer, string|`[`renderer.color`](/docs/api/renderer#renderercolor)`|`[`renderer.font`](/docs/api/renderer#rendererfont)`>` — Plain text or styled text array

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

---

## toggle

```lua
(method) core.statusview:toggle()
```

Toggle status bar visibility.

---

## try_close

```lua
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close`: `function` — Call this function to actually close the view

---

## update

```lua
(method) core.statusview:update()
```

Update status bar height, message scroll, and active items.

---

## update_active_items

```lua
(method) core.statusview:update_active_items()
```

Rebuild the active items list by evaluating predicates and calculating positions.
Updates item visibility, positions, and handles panel overflow.

---

## update_floating

```lua
(method) core.view:update_floating()
```

Update anchor placement or advance an opening or closing slide.
RootView calls this before update() for each shown floating view.
Completes removal and invokes the transition callback when a slide finishes.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

