---
sidebar_position: 28
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.contextmenu

Floating command menu with predicate filtering, scrolling, and nested submenus.

```lua
local contextmenu = require "core.contextmenu"
```

## DIVIDER

```lua
(field) DIVIDER: table
```

Separator sentinel accepted in registration and explicit menu item arrays.

---

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## application_menu

```lua
(field) application_menu: boolean?
```

Keep unavailable entries and refresh visited rows

---

## capture_text_input

```lua
(field) capture_text_input: boolean
```

---

## child_item

```lua
(field) child_item: (core.contextmenu.item[]|fun():core.contextmenu.item[])?
```

Definitions used by the open submenu

---

## child_menu

```lua
(field) child_menu: (core.contextmenu)?
```

Open submenu

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

## height

```lua
(field) height: integer
```

---

## hover_since

```lua
(field) hover_since: number?
```

Time when hover changed, for delayed submenu opening

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## items_font

```lua
(field) items_font: (renderer.font)?
```

Font used to measure the current snapshot

---

## itemset

```lua
(field) itemset: table
```

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## parent_menu

```lua
(field) parent_menu: (core.contextmenu)?
```

Immediate parent when this is a submenu

---

## position

```lua
(field) position: core.view.position
```

---

## pressed_row

```lua
(field) pressed_row: integer?
```

Application-menu row pressed for release validation

---

## root_menu

```lua
(field) root_menu: (core.contextmenu)?
```

Menu that dispatches submenu leaf actions

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

Selected row index, or -1 when no row is selected

---

## show_context_menu

```lua
(field) show_context_menu: boolean
```

Whether a menu opening is active

---

## size

```lua
(field) size: core.view.position
```

---

## source_items

```lua
(field) source_items: (core.contextmenu.item[]|fun():core.contextmenu.item[])?
```

Original entry definitions or provider

---

## source_view

```lua
(field) source_view: (core.view)?
```

Active view when the menu opened

---

## super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## switch_top_menu

```lua
(field) switch_top_menu: fun(step: integer)?
```

Application-bar navigation callback

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

## core.contextmenu.item

Menu entry or submenu definition; use ContextMenu.DIVIDER for separators.

### checked

```lua
(field) checked: (boolean|fun():boolean)?
```

Checked state evaluated when opening or navigating

---

### checked_value

```lua
(field) checked_value: boolean?
```

Checked state cached on an opened entry

---

### command

```lua
(field) command: (string|fun())?
```

Command name or action to run when selected

---

### divider

```lua
(field) divider: boolean?
```

Separator stored by application-menu registrations

---

### enabled

```lua
(field) enabled: boolean?
```

Command availability cached on an opened entry

---

### id

```lua
(field) id: string?
```

Stable application-menu registration ID, independent of text

---

### info

```lua
(field) info: string?
```

Right-aligned hint; a command's assigned binding takes precedence

---

### items

```lua
(field) items: (core.contextmenu.item[]|fun():core.contextmenu.item[])?
```

Submenu entries or a provider called once on opening, mutually exclusive with command

---

### text

```lua
(field) text: string
```

Display label

---

### visible

```lua
(field) visible: (boolean|fun():boolean)?
```

Visibility evaluated when the menu opens

---

## core.contextmenu.items

Measured snapshot of entries for a single menu opening.

### height

```lua
(field) height: number
```

Total row height before viewport clipping

---

### width

```lua
(field) width: number
```

Measured width including horizontal padding

---

## core.contextmenu.show_options

Input policy and placement supplied when opening an explicit menu tree.

### anchor

```lua
(field) anchor: (core.view.floating_anchor)?
```

Position to follow while open

---

### child

```lua
(field) child: boolean?
```

Submenu whose outside-click dismissal belongs to its root

---

### disabled

```lua
(field) disabled: boolean?
```

Keep unavailable entries disabled instead of filtering them

---

### owner

```lua
(field) owner: (core.view)?
```

Popup lifetime owner; defaults to the active view

---

## core.contextmenu.source

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
(method) core.contextmenu:__tostring()
  -> string
```

---

## bring_to_front

```lua
(method) core.view:bring_to_front()
  -> view: core.view
```

Raise a shown floating view and its owned popups above the other floating views.

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## build_items

```lua
(method) core.contextmenu:build_items(source: core.contextmenu.item[]|fun():core.contextmenu.item[], disabled?: boolean)
  -> items: core.contextmenu.items
```

Snapshot visible entries, availability, checked states, and current command bindings.
Evaluates callbacks once for this opening and removes redundant separators.

@*param* `source`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]|fun():`[`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Entry definitions or an opening-time provider

@*param* `disabled?`: `boolean` — Keep unavailable commands as disabled rows

@*return* `items`: [`core.contextmenu.items`](/docs/api/core.contextmenu#corecontextmenuitems) — Measured entries for the opening

---

## call_selected_item

```lua
(method) core.contextmenu:call_selected_item(selected?: core.contextmenu.item)
```

Activate a selected entry, opening its submenu or hiding the root before dispatch.
Rechecks application-entry availability immediately before activation.

@*param* `selected?`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem) — Submenu leaf to dispatch through its root

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
(method) core.contextmenu:draw()
```

Draw the menu through RootView's floating layer.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

## draw_context_menu

```lua
(method) core.contextmenu:draw_context_menu()
```

Draw the animated menu viewport, cached row states, checkmarks, and scrollbar.

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## each_item

```lua
(method) core.contextmenu:each_item()
  -> iterator: fun():integer, core.contextmenu.item, number, number, number, number
```

Iterate rows in display order with their scrolled screen rectangles.

@*return* `iterator`: `fun():integer, `[`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`, number, number, number, number` — Yields index, entry, x, y, width, height

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

## focus_next

```lua
(method) core.contextmenu:focus_next()
```

Select the next enabled row, wrapping at the end.

---

## focus_previous

```lua
(method) core.contextmenu:focus_previous()
```

Select the previous enabled row, wrapping at the start.

---

## focus_step

```lua
(method) core.contextmenu:focus_step(step: integer)
```

Move selection with wrapping, skipping dividers and unavailable commands.
Rechecks visited application entries and scrolls the selected row into view.

@*param* `step`: `integer` — Direction: -1 for previous, 1 for next

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
(method) core.contextmenu:get_floating_bounds()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get outer screen bounds including the menu border.

@*return* `x`: `number` — Outer screen x coordinate

@*return* `y`: `number` — Outer screen y coordinate

@*return* `w`: `number` — Outer width

@*return* `h`: `number` — Outer height

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

## get_item_selected

```lua
(method) core.contextmenu:get_item_selected()
  -> item: (core.contextmenu.item)?
```

Get the current row, which may be a divider or unavailable application entry.

@*return* `item`: `(`[`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`)?` — Selected entry, or nil when unselected

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
(method) core.contextmenu:get_scrollable_size()
  -> height: number
```

Get the full height of the current opening before viewport clipping.

@*return* `height`: `number` — Total row height, or zero when closed

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
(method) core.contextmenu:hide()
```

Hide this menu and its submenus, clearing the snapshot and selection.

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
(method) core.contextmenu:new()
```

Initialize a hidden, scrollable floating menu that preserves the editor's focus.

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
(method) core.contextmenu:on_floating_dismiss(reason: "escape"|"focuslost"|"outside")
```

Dismiss the whole menu tree when RootView requests dismissal of a popup.

```lua
reason:
    | "escape"
    | "outside"
    | "focuslost"
```

@*param* `reason`: `"escape"|"focuslost"|"outside"` — Dismissal event

---

## on_floating_visibility_changed

```lua
(method) core.contextmenu:on_floating_visibility_changed(visible: boolean)
```

Clear menu state when RootView removes the popup, including owner-driven removal.

@*param* `visible`: `boolean` — Whether the popup remains shown

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
(method) core.contextmenu:on_key_pressed(stroke: string)
  -> consumed: boolean
```

Navigate rows, submenus, and application-menu groups without moving editor focus.
The configured application-menu opener closes a shown menu without reopening it.
Unrecognized modified bindings close the menu and continue to command dispatch.

@*param* `stroke`: `string` — Normalized key binding

@*return* `consumed`: `boolean` — Whether menu navigation consumed the binding

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
(method) core.contextmenu:on_mouse_left()
```

Clear scrollbar hover and cancel pending hover-driven submenu opening.

---

## on_mouse_moved

```lua
(method) core.contextmenu:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> handled: boolean
```

Update scrollbar dragging and row hover, starting the submenu delay on row changes.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `dx`: `number` — Pointer x movement

@*param* `dy`: `number` — Pointer y movement

@*return* `handled`: `boolean` — Whether the pointer is within the shown menu

---

## on_mouse_pressed

```lua
(method) core.contextmenu:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> consumed: boolean
```

Open on an unmodified right-click, or handle scrollbar and row presses when shown.
Context actions run on press; application actions wait for a matching release.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Pressed button

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Consecutive click count

@*return* `consumed`: `boolean` — Whether the menu handled the press

---

## on_mouse_released

```lua
(method) core.contextmenu:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

Release scrollbar dragging and activate an application row matching the pressed row.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Released button

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

---

## on_mouse_wheel

```lua
(method) core.contextmenu:on_mouse_wheel(y: number, x: number)
  -> consumed: boolean
```

Scroll the menu vertically without activating a row.

@*param* `y`: `number` — Vertical wheel delta

@*param* `x`: `number` — Horizontal wheel delta, unused

@*return* `consumed`: `boolean` — Always true

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

## on_selected

```lua
(method) core.contextmenu:on_selected(item: core.contextmenu.item)
```

Run an enabled entry's command or protected callback after menu dismissal.
Override to customize action dispatch while retaining call_selected_item() behavior.

@*param* `item`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem) — Selected leaf entry

---

## on_text_input

```lua
(method) core.contextmenu:on_text_input()
  -> consumed: boolean
```

Consume typed text so an open menu cannot edit the underlying document.

@*return* `consumed`: `boolean` — Always true

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

## open_submenu

```lua
(method) core.contextmenu:open_submenu()
```

Open the selected enabled submenu, anchored to its parent row.
Reuses an already open matching submenu and dispatches its leaves through the root.

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

## refresh_item

```lua
(method) core.contextmenu:refresh_item(item?: core.contextmenu.item)
```

Refresh a visited application-menu row's availability and checked state.
Context menus keep their opening snapshot; this does not reevaluate visibility.

@*param* `item?`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem) — Entry to refresh

---

## register

```lua
(method) core.contextmenu:register(predicate: string|core.object|fun(...any):boolean, ...unknown|nil, items: core.contextmenu.item[])
```

Register contextual entries selected by a command-style predicate when opening.

@*param* `predicate`: `string|`[`core.object`](/docs/api/core.object)`|fun(...any):boolean, ...unknown|nil` — Predicate receiving the opening coordinates

@*param* `items`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Entries to contribute when the predicate succeeds

---

## row_at

```lua
(method) core.contextmenu:row_at(x: number, y: number)
  -> index: integer
```

Find the displayed row under a point within the popup bounds.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `index`: `integer` — Row index, or -1 outside a row

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
(method) core.contextmenu:set_floating_bounds(x: number, y: number, w: number, h: number)
```

Apply outer bounds, keeping the content inset by the menu border.

@*param* `x`: `number` — Outer screen x coordinate

@*param* `y`: `number` — Outer screen y coordinate

@*param* `w`: `number` — Outer width

@*param* `h`: `number` — Outer height

---

## show

```lua
(method) core.contextmenu:show(x: number, y: number)
  -> shown: boolean
```

Open registered contextual entries whose predicates match the current target.

@*param* `x`: `number` — Screen x coordinate, also passed to registration predicates

@*param* `y`: `number` — Screen y coordinate, also passed to registration predicates

@*return* `shown`: `boolean` — Whether a nonempty menu was opened

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
(method) core.contextmenu:show_items(source: core.contextmenu.item[]|fun():core.contextmenu.item[], x: number, y: number, options?: core.contextmenu.show_options)
  -> shown: boolean
```

Show an explicit menu tree. Context registrations retain predicate filtering.
Builds a new snapshot for this opening and leaves the rows unselected.

@*param* `source`: [`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]|fun():`[`core.contextmenu.item`](/docs/api/core.contextmenu#corecontextmenuitem)`[]` — Entry definitions or an opening-time provider

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `options?`: [`core.contextmenu.show_options`](/docs/api/core.contextmenu#corecontextmenushow_options) — Placement and unavailable-entry policy

@*return* `shown`: `boolean` — Whether at least one entry was available to show

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

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
(method) core.contextmenu:update()
```

Update scrolling, opening animation, and delayed submenu navigation.
Font or scale changes remeasure the snapshot without rebuilding entries or predicates.

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

