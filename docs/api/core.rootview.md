---
sidebar_position: 48
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.rootview

Top-level view managing the entire UI layout.
Coordinates the node tree, handles drag & drop, routes events to child views.

```lua
local rootview = require "core.rootview"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)
```

---

## defer_open_docs

```lua
(field) defer_open_docs: table[]
```

---

## deferred_draws

```lua
(field) deferred_draws: table[]
```

---

## drag_overlay

```lua
(field) drag_overlay: core.rootview.overlay
```

---

## drag_overlay_tab

```lua
(field) drag_overlay_tab: core.rootview.overlay
```

---

## dragged_divider

```lua
(field) dragged_divider: core.node
```

Represents a container in the UI layout tree.
Nodes can be either "leaf" (contains views/tabs) or split (contains two child nodes).
The root node forms a binary tree structure that defines the editor's layout.

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

---

## first_update_done

```lua
(field) first_update_done: boolean
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

## floating_views

```lua
(field) floating_views: core.view[]
```

Shown views in drawing order

---

## floating_visible

```lua
(field) floating_visible: boolean?
```

Whether the view is registered, including closing slides

---

## grab

```lua
(field) grab: (core.rootview.mousegrab)?
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

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## overlapping_view

```lua
(field) overlapping_view: (core.view)?
```

Base view.

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

Represents a container in the UI layout tree.
Nodes can be either "leaf" (contains views/tabs) or split (contains two child nodes).
The root node forms a binary tree structure that defines the editor's layout.

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
(field) touched_view: (core.view)?
```

Base view.

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

## core.rootview.mousegrab

### button

```lua
(field) button: 'left'|'right'
```

---

### view

```lua
(field) view: core.view
```

Base view.

---

## core.rootview.overlay

### base_color

```lua
(field) base_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

### color

```lua
(field) color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

### h

```lua
(field) h: number
```

---

### opacity

```lua
(field) opacity: number
```

---

### to

```lua
(field) to: core.rootview.overlay.to
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

### y

```lua
(field) y: number
```

---

## core.rootview.overlay.to

### h

```lua
(field) h: number
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

### y

```lua
(field) y: number
```

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

## on_view_mouse_pressed

```lua
function core.rootview.on_view_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
```

Hook function called before mouse pressed events reach the active view.
Override this to intercept or modify mouse press behavior globally.
Default implementation does nothing.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Number of clicks

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
(method) core.rootview:__tostring()
  -> string
```

---

## add_floating_view

```lua
(method) core.rootview:add_floating_view(view: core.view)
```

Register or raise a shown floating view in drawing order.
Its owned popups remain above it and retain their relative order.
Use View:show_floating() to also initialize visibility, placement, and focus.

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating view to register or raise

---

## begin_floating_gesture

```lua
(method) core.rootview:begin_floating_gesture(view: core.view, button: 'left'|'right', x: number, y: number, resize_only?: boolean)
  -> started: boolean
```

Start dragging or resizing a floating view and capture its left-button input.
Resizing takes precedence over dragging; a successful gesture clears the anchor.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating pointer target

@*param* `button`: `'left'|'right'` — Pressed button

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `resize_only?`: `boolean` — Only start a resize, allowing content to handle other presses

@*return* `started`: `boolean` — Whether a gesture started and the mouse was captured

---

## bring_to_front

```lua
(method) core.view:bring_to_front()
  -> view: core.view
```

Raise a shown floating view and its owned popups above the other floating views.

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## can_focus_view

```lua
(method) core.rootview:can_focus_view(view: core.view)
  -> allowed: boolean
```

Check whether the current modal popup permits a focus change.
Only the modal view, its descendants, and its direct owner may receive focus.

@*param* `view`: [`core.view`](/docs/api/core.view) — Proposed focus target

@*return* `allowed`: `boolean` — Whether the view may receive focus

---

## cancel_floating_input

```lua
(method) core.rootview:cancel_floating_input(view: core.view)
```

Stop a popup's input, close its descendants, and restore focus when it owns focus.
Called when hiding starts, including before a closing slide finishes.

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating view whose input and owned popups should be cleared

---

## cancel_mouse_capture

```lua
(method) core.rootview:cancel_mouse_capture()
```

Cancel mouse capture, divider dragging, and tab dragging without emitting a click.
Notifies the captured view through on_mouse_capture_lost() and clears drag overlays.

---

## clamp_floating_bounds

```lua
(method) core.rootview:clamp_floating_bounds(x: number, y: number, w: number, h: number)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Fit an outer popup rectangle inside the editor viewport, reducing its size if needed.
Returns the supplied rectangle unchanged while the viewport has no positive size.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `w`: `number` — Outer width in pixels

@*param* `h`: `number` — Outer height in pixels

@*return* `x`: `number` — Clamped screen x coordinate

@*return* `y`: `number` — Clamped screen y coordinate

@*return* `w`: `number` — Width limited to the viewport

@*return* `h`: `number` — Height limited to the viewport

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## close_all_docviews

```lua
(method) core.rootview:close_all_docviews(keep_active: boolean)
```

Close docked document views and remove session-scoped floating views.
Used when closing a project or switching workspaces.

@*param* `keep_active`: `boolean` — Keep the currently active view open

---

## close_view

```lua
(method) core.rootview:close_view(view: core.view, on_close?: fun(view: core.view))
  -> requested: boolean
```

Close a docked or shown floating view through its unsaved-changes guard.
Rechecks placement after confirmation, since the view may have moved meanwhile.

@*param* `view`: [`core.view`](/docs/api/core.view) — View to close

@*param* `on_close?`: `fun(view: `[`core.view`](/docs/api/core.view)`)` — Called only after the view has closed

@*return* `requested`: `boolean` — Whether the view had a placement to close

---

## defer_draw

```lua
(method) core.rootview:defer_draw(fn: function, ...any)
```

Queue a drawing operation to execute after main scene is rendered.
Useful for overlays, tooltips, or drag indicators that should draw on top.

@*param* `fn`: `function` — Function to call for drawing

@*param*: `any` — Arguments to pass to the function

---

## dismiss_floating_outside

```lua
(method) core.rootview:dismiss_floating_outside(event: "press"|"release", button: 'left'|'right', x: number, y: number)
  -> consumed: boolean?
```

Dismiss the topmost popup configured for this outside-click event.
Owned popups count as inside; the owner does too unless dismiss_on_owner_click is set.

```lua
event:
    | "press"
    | "release"

button:
    | 'left'
    | 'right'
```

@*param* `event`: `"press"|"release"` — Mouse event phase

@*param* `button`: `'left'|'right'` — Mouse button; only left and right dismiss

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `consumed`: `boolean?` — Whether the outside click should stop propagating

---

## draw

```lua
(method) core.rootview:draw()
```

Render the entire UI each frame.
Draw the node tree, deferred content, floating views, and drag overlays.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

## draw_drag_overlay

```lua
(method) core.rootview:draw_drag_overlay(ov: core.rootview.overlay)
```

Draw a drag overlay rectangle with current opacity.
Shows where tab/split will land when dropped.

@*param* `ov`: [`core.rootview.overlay`](/docs/api/core.rootview#corerootviewoverlay) — The overlay to draw

---

## draw_grabbed_tab

```lua
(method) core.rootview:draw_grabbed_tab()
```

Draw the currently dragged tab floating under the cursor.
Visual feedback during tab drag operations.

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

## floating_snapshot

```lua
(method) core.rootview:floating_snapshot()
  -> views: core.view[]
```

Copy the floating registry so callbacks can safely show or hide views while iterating.

@*return* `views`: [`core.view`](/docs/api/core.view)`[]` — Shown views in drawing order, including closing views

---

## get_active_node

```lua
(method) core.rootview:get_active_node()
  -> node: core.node
```

Get the node containing the currently active view.
Falls back to primary node if active view not found.

@*return* `node`: [`core.node`](/docs/api/core.node) — Node containing active view or primary node

---

## get_active_node_default

```lua
(method) core.rootview:get_active_node_default()
  -> node: core.node
```

Get the active node, ensuring it's not locked.
If active node is locked, switches to primary node instead.
Use this when adding new views to ensure they go to an editable node.

@*return* `node`: [`core.node`](/docs/api/core.node) — Unlocked node suitable for adding views

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

## get_floating_cursor

```lua
(method) core.rootview:get_floating_cursor(view: core.view, x: number, y: number)
  -> cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)
```

Get a resize cursor for a popup edge or use the view's ordinary cursor.
During a gesture, keeps the cursor associated with the originally grabbed edges.

```lua
cursor:
    | 'arrow'
    | 'ibeam'
    | 'sizeh'
    | 'sizev'
    | 'sizenwse'
    | 'sizenesw'
    | 'hand'
```

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating pointer target

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `cursor`: `'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)` — Cursor to display

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

## get_floating_view_at

```lua
(method) core.rootview:get_floating_view_at(x: number, y: number)
  -> view: (core.view)?
```

Find the topmost interactive popup at a screen point, respecting modal ownership.
A modal popup receives points outside its bounds; points outside RootView return nil.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?` — Input target, or nil when no floating view receives the point

---

## get_floating_view_for_view

```lua
(method) core.rootview:get_floating_view_for_view(target?: core.view)
  -> view: (core.view)?
```

Find the topmost shown floating view containing a keyboard focus target.
Includes container descendants; excludes popups whose closing slide has started.

@*param* `target?`: [`core.view`](/docs/api/core.view) — Focused view or one of its container descendants

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?` — Floating container, or nil for a docked target

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

## get_modal_view

```lua
(method) core.rootview:get_modal_view()
  -> view: (core.view)?
```

Find the topmost shown modal popup that is not closing.

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?` — Modal popup, or nil when input is unrestricted

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

## get_overlay_base_color

```lua
(method) core.rootview:get_overlay_base_color(overlay: core.rootview.overlay)
  -> color: renderer.color
```

Get the base color for a drag overlay.
Internal helper to fetch color from style based on overlay type.

@*param* `overlay`: [`core.rootview.overlay`](/docs/api/core.rootview#corerootviewoverlay) — The overlay to get color for

@*return* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — The base color from style

---

## get_primary_node

```lua
(method) core.rootview:get_primary_node()
  -> node: core.node
```

Get the primary node (main document editing area).
Primary node is where documents are opened by default.

@*return* `node`: [`core.node`](/docs/api/core.node) — The primary node

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

## grab_mouse

```lua
(method) core.rootview:grab_mouse(button: 'left'|'right', view: core.view)
```

Capture mouse input for a specific view.
All mouse events for the specified button will be routed to this view,
even when the mouse moves outside the view's bounds.
Only one grab can be active per button at a time.
Common use: drag operations, scrollbar dragging, text selection.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Button to grab

@*param* `view`: [`core.view`](/docs/api/core.view) — View that should receive mouse events

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

## interpolate_drag_overlay

```lua
(method) core.rootview:interpolate_drag_overlay(overlay: core.rootview.overlay)
```

Animate drag overlay position and opacity smoothly.
Internal helper for tab/split drag visual feedback.

@*param* `overlay`: [`core.rootview.overlay`](/docs/api/core.rootview#corerootviewoverlay) — The overlay to animate

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

## move_floating_gesture

```lua
(method) core.rootview:move_floating_gesture(view: core.view, x: number, y: number)
  -> handled: boolean
```

Advance a captured floating drag or resize using its initial bounds and pointer offset.
Resizing honors min_size; the resulting bounds are clamped to the viewport.

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating view with an active gesture

@*param* `x`: `number` — Current screen x coordinate

@*param* `y`: `number` — Current screen y coordinate

@*return* `handled`: `boolean` — Whether the view had a gesture to update

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
(method) core.rootview:new()
```

Constructor - initializes the root node tree and UI state.
Called automatically by core at startup.

---

## on_file_dropped

```lua
(method) core.rootview:on_file_dropped(filename: string, x: number, y: number)
  -> handled: boolean
```

Handle file/folder drop events from OS.
Supports: opening files, adding projects, showing dialogs.
Files are deferred if nagview is visible to avoid locked node errors.

@*param* `filename`: `string` — Absolute path to dropped file/folder

@*param* `x`: `number` — Screen x where dropped

@*param* `y`: `number` — Screen y where dropped

@*return* `handled`: `boolean` — True if event was handled

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

## on_focus_lost

```lua
(method) core.rootview:on_focus_lost(...any)
```

Cancel capture and hover, then dismiss popups configured for outside-click dismissal.
Requests a redraw so document cursors disappear while the window is inactive.

@*param*: `any` — Window focus event arguments, unused

---

## on_ime_text_editing

```lua
(method) core.rootview:on_ime_text_editing(...any)
  -> consumed: boolean?
```

Forward IME composition to the active view unless an open popup captures text.

@*param*: `any` — Composition text, start offset, and selection length

@*return* `consumed`: `boolean?` — True when a popup blocks composition beneath it

---

## on_key_pressed

```lua
(method) core.rootview:on_key_pressed(stroke: string, ...any)
  -> consumed: boolean
```

Route a normalized key binding to interactive floating views before commands run.
Tries views from top to bottom, restricts modal input, and handles Escape dismissal.

@*param* `stroke`: `string` — Normalized binding, such as "ctrl+return"

@*param*: `any` — Additional keyboard event arguments

@*return* `consumed`: `boolean` — Whether a popup handled the binding or was dismissed

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
(method) core.rootview:on_mouse_left()
```

Called when mouse leaves the root view area.
Notifies the currently overlapping view to clear hover states.

---

## on_mouse_moved

```lua
(method) core.rootview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean|nil
```

Handle mouse movement events and route appropriately.
Manages: grabbed view routing, divider dragging, tab drag start, cursor changes.
Updates overlapping_view for hover state tracking.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `dx`: `number` — Delta x since last move

@*param* `dy`: `number` — Delta y since last move

---

## on_mouse_pressed

```lua
(method) core.rootview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> handled: boolean
```

Handle mouse press events and route to appropriate targets.
Manages: divider dragging, tab clicking/dragging, view activation, event routing.
Overrides base View implementation to handle complex UI interactions.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Number of clicks

@*return* `handled`: `boolean` — True if event was handled

---

## on_mouse_released

```lua
(method) core.rootview:on_mouse_released(button: 'left'|'right', x: number, y: number, ...any)
```

Handle mouse button release events.
Manages: mouse grab release, divider drag completion, tab drop/rearrange.
Handles complex tab drag-and-drop logic (split, move, reorder).

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
(method) core.rootview:on_mouse_wheel(...any)
  -> boolean
```

Forward mouse wheel events to the view under the mouse.

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
(method) core.rootview:on_text_input(...string)
  -> consumed: boolean?
```

Offer typed text to an explicit popup capture, then the active view exactly once.
Focused popup descendants receive text directly, without container forwarding.

@*param*: `string` — Typed text forwarded to the target handler

@*return* `consumed`: `boolean?` — True when a floating handler consumes the text

---

## on_touch_moved

```lua
(method) core.rootview:on_touch_moved(x: number, y: number, dx: number, dy: number, ...any)
```

Handle touch movement events (swipe gestures, etc.).
Routes to touched view or handles divider/tab dragging.

---

## on_touch_pressed

```lua
(method) core.rootview:on_touch_pressed(x: any, y: any, ...any)
```

Handle touch press events (touchscreen/trackpad).
Tracks which view is being touched for subsequent touch events.

---

## on_touch_released

```lua
(method) core.rootview:on_touch_released(x: any, y: any, ...any)
```

Handle touch release events.
Clears the touched view tracking.

---

## open_doc

```lua
(method) core.rootview:open_doc(doc: core.doc)
  -> view: core.docview
```

Open a document in the active node.
If document is already open, switches to that view instead.
Creates a new DocView and adds it as a tab in the active node.

@*param* `doc`: [`core.doc`](/docs/api/core.doc) — Document to open

@*return* `view`: [`core.docview`](/docs/api/core.docview) — The view displaying the document

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

## place_floating_view

```lua
(method) core.rootview:place_floating_view(view: core.view)
```

Apply a popup's anchor and clamp its outer bounds to the viewport.
Flips the anchor side when necessary; leaves active slides and pointer gestures alone.

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating view to position

---

## process_defer_open_docs

```lua
(method) core.rootview:process_defer_open_docs()
```

Process deferred file drops (files dropped while nagview was active).
Called during update() to safely open files when nagview is dismissed.

---

## remove_floating_view

```lua
(method) core.rootview:remove_floating_view(view: core.view)
```

Remove a view from the floating registry without changing its visibility or focus.
Use View:hide_floating() to perform the complete closing lifecycle.

@*param* `view`: [`core.view`](/docs/api/core.view) — Floating view to remove

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

## select_next_primary_node

```lua
(method) core.rootview:select_next_primary_node()
  -> node: core.node
```

Select a new primary node from available unlocked nodes.
Used when closing the current primary node.

@*return* `node`: [`core.node`](/docs/api/core.node) — Next available unlocked node to be primary

---

## set_drag_overlay

```lua
(method) core.rootview:set_drag_overlay(overlay: core.rootview.overlay, x: number, y: number, w: number, h: number, immediate?: boolean)
```

Set drag overlay target position and size.
If immediate is true, jumps to position instantly instead of animating.

@*param* `overlay`: [`core.rootview.overlay`](/docs/api/core.rootview#corerootviewoverlay) — The overlay to position

@*param* `x`: `number` — Target x coordinate

@*param* `y`: `number` — Target y coordinate

@*param* `w`: `number` — Target width

@*param* `h`: `number` — Target height

@*param* `immediate?`: `boolean` — If true, jump to position without animation

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

## set_hovered_view

```lua
(method) core.rootview:set_hovered_view(view?: core.view)
```

Change the hovered view and notify the previous view when the pointer leaves it.

@*param* `view?`: [`core.view`](/docs/api/core.view) — New hover target, or nil to clear hover

---

## set_show_overlay

```lua
(method) core.rootview:set_show_overlay(overlay: core.rootview.overlay, status: boolean)
```

Show or hide a drag overlay with color reset.
Internal helper for managing drag visual feedback state.

@*param* `overlay`: [`core.rootview.overlay`](/docs/api/core.rootview#corerootviewoverlay) — The overlay to show/hide

@*param* `status`: `boolean` — True to show, false to hide

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

## try_close

```lua
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close`: `function` — Call this function to actually close the view

---

## ungrab_mouse

```lua
(method) core.rootview:ungrab_mouse(button: 'left'|'right')
```

Release mouse grab for the specified button.
Button must match the button that was grabbed.
After release, normal mouse event routing resumes.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Button to release (must match grabbed button)

---

## update

```lua
(method) core.rootview:update()
```

Update node layout, drag overlays, deferred file drops, and floating views.
Hides popups with unavailable owners, then places and updates the remaining popups.

---

## update_drag_overlay

```lua
(method) core.rootview:update_drag_overlay()
```

Update drag overlay position during tab drag.
Shows visual feedback for where tab will land (split or reorder).
Called during update() when dragging tabs.

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

