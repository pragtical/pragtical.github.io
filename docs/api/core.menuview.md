---
sidebar_position: 41
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.menuview

Responsive menu bar with an instance-owned registry and optional explicit bounds.

```lua
local menuview = require "core.menuview"
```

## DIVIDER

```lua
(field) DIVIDER: table
```

Separator sentinel shared with ContextMenu for plugin registrations.

---

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## active_menu

```lua
(field) active_menu: integer?
```

Open top-level group index, or 0 for the combined menu

---

## application_menu

```lua
(field) application_menu: boolean
```

Whether application defaults and visibility settings are used

---

## bounds

```lua
(field) bounds: { x: number, y: number, w: number, h: number }?
```

Available explicit rectangle; nil uses node layout

---

## capture_text_input

```lua
(field) capture_text_input: boolean?
```

Receive text input while floating without taking focus

---

## compact

```lua
(field) compact: boolean?
```

Whether the bar uses one Menu label because groups do not fit

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
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)
```

---

## defaults

```lua
(field) defaults: (core.menuview.registration)?
```

Core command registration

---

## entries_revision

```lua
(field) entries_revision: integer?
```

Registry revision used by the visibility cache

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

## h_scrollbar

```lua
(field) h_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

## hovered

```lua
(field) hovered: integer?
```

Hovered label index, or 0 for the compact label

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## inline_width

```lua
(field) inline_width: number
```

Animated width occupied inside the explicit rectangle

---

## items

```lua
(field) items: core.contextmenu.item[]
```

Menu registrations

---

## menu

```lua
(field) menu: core.contextmenu
```

Popup used to display the active menu group

---

## menu_entries

```lua
(field) menu_entries: core.contextmenu.item[]?
```

Cached visible top-level entries

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## move_data_inline_width

```lua
(field) move_data_inline_width: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## registrations

```lua
(field) registrations: table<string, core.menuview.registration>
```

Named plugin registrations

---

## registry_revision

```lua
(field) registry_revision: integer?
```

Registry revision last applied to the bar layout

---

## revision

```lua
(field) revision: integer
```

Registration revision for cache invalidation

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
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

Requested bar visibility; application menus synchronize with config.show_menubar

---

## core.menuview.label_layout

Measurements shared by layout, drawing, and pointer input.

### compact_width

```lua
(field) compact_width: number
```

Padded width of the compact Menu label

---

### entries

```lua
(field) entries: core.contextmenu.item[]
```

Measured top-level entries

---

### font

```lua
(field) font: renderer.font
```

Measured font

---

### font_size

```lua
(field) font_size: number
```

Measured font size

---

### padding

```lua
(field) padding: number
```

Horizontal label padding

---

### width

```lua
(field) width: number
```

Total group width

---

### widths

```lua
(field) widths: number[]
```

Padded group widths

---

## core.menuview.registration

Handle for the exact entries contributed by an application-menu registration.

### entries

```lua
(field) entries: core.contextmenu.item[]
```

Inserted entries, including owned divider objects

---

### name

```lua
(field) name: string?
```

Plugin name used to replace a previous contribution

---

### removed

```lua
(field) removed: boolean?
```

Whether unregister() has already removed the entries

---

### target

```lua
(field) target: core.contextmenu.item[]
```

Parent array receiving the entries

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
(method) core.view:__tostring()
  -> string
```

---

## add_defaults

```lua
(method) core.menuview:add_defaults()
```

Install core-owned application entries once for this menu instance.
Bundled and external plugins register their own entries after their commands load.

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

## draw

```lua
(method) core.menuview:draw()
```

Draw labels within the standalone row or the host's animated inline bounds.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## each_label

```lua
(method) core.menuview:each_label()
  -> iterator: fun():integer, string, number, number
```

Iterate bar labels with their screen x coordinates and padded widths.

@*return* `iterator`: `fun():integer, string, number, number` — Yields index, label, x, width; compact index is 0

---

## entries

```lua
(method) core.menuview:entries(refresh?: boolean)
  -> entries: core.contextmenu.item[]
```

Get visible top-level groups, cached until registration changes or opening refreshes.
Dynamic visibility callbacks are evaluated only when refreshing this cache.

@*param* `refresh?`: `boolean` — Force reevaluation for a new menu opening

@*return* `entries`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Visible groups in registry order

---

## entry

```lua
(method) core.menuview:entry(id: string, text: string, name: string|fun(), checked?: boolean|fun():boolean)
  -> item: core.contextmenu.item
```

Create a command or direct action entry with an optional dynamic checkmark.

@*param* `id`: `string` — Stable entry ID

@*param* `text`: `string` — Display label

@*param* `name`: `string|fun()` — Command name or direct action

@*param* `checked?`: `boolean|fun():boolean` — Checked state evaluated by ContextMenu

@*return* `item`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem) — Entry definition

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

## get_bounds

```lua
(method) core.menuview:get_bounds()
  -> x: number
  2. y: number
  3. width: number
  4. height: number
```

Get the displayed menu rectangle using explicit bounds or node layout.
Its occupied width may be smaller than set_bounds() allows, including during animation.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

@*return* `width`: `number` — Visible width, clipped during a width transition

@*return* `height`: `number` — Visible height

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
(method) core.menuview:get_focus_target()
  -> target: nil
```

Keep the editor's keyboard focus when clicking the menu bar.

@*return* `target`: `nil` — The bar never takes focus

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

## group

```lua
(method) core.menuview:group(id: string, text: string, items: core.contextmenu.item[]|fun():core.contextmenu.item[])
  -> item: core.contextmenu.item
```

Create a submenu group containing command entries or further submenus.

@*param* `id`: `string` — Stable group ID

@*param* `text`: `string` — Display label

@*param* `items`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]|fun():`[`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Child entries or a provider evaluated when opened

@*return* `item`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem) — Group definition

---

## hide

```lua
(method) core.menuview:hide()
```

Close the popup and slide the bar away, updating application settings if used.

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

## hit_test

```lua
(method) core.menuview:hit_test(x: number, y: number)
  -> inside: boolean
```

Test the displayed bar rectangle, including explicit bounds and visibility.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `inside`: `boolean` — Whether the point lies in the visible bar

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
(method) core.menuview:is_floating_owner_visible()
  -> visible: boolean
```

Keep explicitly opened popups available while the bar itself is hidden.

@*return* `visible`: `boolean` — Always true

---

## label_at

```lua
(method) core.menuview:label_at(x: number, y: number)
  -> index: integer?
```

Find the visible bar label under a screen point.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `index`: `integer?` — Label index, 0 for the compact label, or nil outside the bar

---

## measure_labels

```lua
(method) core.menuview:measure_labels()
  -> layout: core.menuview.label_layout
```

Measure labels only when their entries, font, or padding changes.

@*return* `layout`: [`core.menuview.label_layout`](/docs/api/core.menuview#coremenuviewlabel_layout) — Cached padded widths

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
(method) core.menuview:new(items?: core.contextmenu.item[])
```

Create an application menu, or an independent menu when an item array is supplied.
Independent menus start visible; pass an empty array to register entries later.
Entries use the same stable IDs and validation as register().

@*param* `items?`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Independent entries; omit for application defaults and settings

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
(method) core.menuview:on_mouse_left()
```

Clear the hovered label while retaining the active popup.

---

## on_mouse_moved

```lua
(method) core.menuview:on_mouse_moved(x: number, y: number)
```

Update label hover and switch groups while an application popup is already open.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

---

## on_mouse_pressed

```lua
(method) core.menuview:on_mouse_pressed(button: 'left'|'right', x: number, y: number)
  -> consumed: boolean
```

Open a clicked label, or close its popup when clicking the same label again.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Pressed button

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `consumed`: `boolean` — Always true for input routed to the bar

---

## on_mouse_released

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

## on_mouse_wheel

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

## open

```lua
(method) core.menuview:open(index?: integer)
```

Open a group with no selected row, preserving editor focus and refreshing visibility.
The hidden or compact bar defaults to a combined popup containing every group.

@*param* `index?`: `integer` — Visible group index, or 0 for the combined menu

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

## register

```lua
(method) core.menuview:register(path: string[], entries: core.contextmenu.item[], name?: string)
  -> handle: core.menuview.registration
```

Register application entries under stable IDs, independent of display labels.
Validates before replacing a named contribution and preserves its position on reload.
A submenu's items may be a function returning a fresh snapshot on opening.

@*param* `path`: `string[]` — Empty to register top-level menus.

@*param* `entries`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]`

@*param* `name?`: `string` — Replace this plugin's previous registration when reloading.

@*return* `handle`: [`core.menuview.registration`](/docs/api/core.menuview#coremenuviewregistration) — Pass to unregister to remove these entries

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

## set_bounds

```lua
(method) core.menuview:set_bounds(x?: number, y?: number, width?: number, height?: number)
```

Set the menu's available rectangle in screen coordinates.
Omit all arguments to resume automatic node layout. Zero sizes retain explicit bounds.
The host forwards pointer events and hides the menu when hiding or removing it.
Update the menu once per frame, through its node or the host, and draw it in the
host. Refresh bounds before drawing if node layout moved or resized the host.
Bounds changes do not advance animation or refresh menu callbacks.
Example inside a host view using an independent menu:
```lua
function MyView:new()
  MyView.super.new(self)
  self.menu = MenuView(\{ \{ id = "tools", text = "Tools", items = \{\} \} \})
end
function MyView:update()
  self.menu:set_bounds(self.position.x, self.position.y, self.size.x, 30 * SCALE)
  self.menu:update()
end
function MyView:draw()
  self.menu:set_bounds(self.position.x, self.position.y, self.size.x, 30 * SCALE)
  self.menu:draw()
end
function MyView:on_mouse_pressed(button, x, y, clicks)
  if self.menu:hit_test(x, y) then return self.menu:on_mouse_pressed(button, x, y, clicks) end
  return MyView.super.on_mouse_pressed(self, button, x, y, clicks)
end
function MyView:on_mouse_moved(...) self.menu:on_mouse_moved(...) end
function MyView:on_mouse_left() self.menu:on_mouse_left() end
 -- Call self.menu:hide() when hiding or removing MyView.
```

@*param* `x?`: `number` — Left edge; omit to resume automatic node layout

@*param* `y?`: `number` — Top edge, required when x is supplied

@*param* `width?`: `number` — Available width, required when x is supplied

@*param* `height?`: `number` — Available height, required when x is supplied

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
(method) core.menuview:show()
```

Show the bar using its slide animation and update application settings if used.

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
(method) core.menuview:toggle()
```

Toggle this bar's visibility.

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

## unregister

```lua
(method) core.menuview:unregister(handle?: core.menuview.registration)
```

Remove the entries contributed by a registration.
Repeated removal is harmless; invalidates the top-level visibility cache.

@*param* `handle?`: [`core.menuview.registration`](/docs/api/core.menuview#coremenuviewregistration) — Handle returned by register()

---

## update

```lua
(method) core.menuview:update()
```

Animate visibility and select compact layout when groups exceed available width.
Closes stale popups after registry or layout changes without rebuilding rows.

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

