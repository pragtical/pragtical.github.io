---
sidebar_position: 41
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

## on_view_mouse_pressed

```lua
function core.rootview.on_view_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
```

Hook function called before mouse pressed events reach the active view.
Override this to intercept or modify mouse press behavior globally.
Default implementation does nothing.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `clicks` — Number of clicks

```lua
button:
    | 'left'
    | 'right'
```

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
(method) core.rootview:__tostring()
  -> string
```

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

Close all document views in the node tree.
Used when closing a project or switching workspaces.

@*param* `keep_active` — If true, keeps the currently active view open

---

## defer_draw

```lua
(method) core.rootview:defer_draw(fn: function, ...any)
```

Queue a drawing operation to execute after main scene is rendered.
Useful for overlays, tooltips, or drag indicators that should draw on top.

@*param* `fn` — Function to call for drawing

@*param* `...` — Arguments to pass to the function

---

## draw

```lua
(method) core.rootview:draw()
```

Render the entire UI each frame.
Draw order: 1) node tree, 2) deferred draws, 3) drag overlays, 4) cursor update

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_drag_overlay

```lua
(method) core.rootview:draw_drag_overlay(ov: core.rootview.overlay)
```

Draw a drag overlay rectangle with current opacity.
Shows where tab/split will land when dropped.

@*param* `ov` — The overlay to draw

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

## get_active_node

```lua
(method) core.rootview:get_active_node()
  -> node: core.node
```

Get the node containing the currently active view.
Falls back to primary node if active view not found.

@*return* `node` — Node containing active view or primary node

---

## get_active_node_default

```lua
(method) core.rootview:get_active_node_default()
  -> node: core.node
```

Get the active node, ensuring it's not locked.
If active node is locked, switches to primary node instead.
Use this when adding new views to ensure they go to an editable node.

@*return* `node` — Unlocked node suitable for adding views

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

## get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> width: number
```

Get the total scrollable width of the view's content.
Used by horizontal scrollbar.

@*return* `width` — Width in pixels (default: 0, no horizontal scroll)

---

## get_name

```lua
(method) core.view:get_name()
  -> name: string
```

Get the name displayed in the view's tab.
Override to show document name, file path, etc.

---

## get_overlay_base_color

```lua
(method) core.rootview:get_overlay_base_color(overlay: core.rootview.overlay)
  -> color: renderer.color
```

Get the base color for a drag overlay.
Internal helper to fetch color from style based on overlay type.

@*param* `overlay` — The overlay to get color for

@*return* `color` — The base color from style

---

## get_primary_node

```lua
(method) core.rootview:get_primary_node()
  -> node: core.node
```

Get the primary node (main document editing area).
Primary node is where documents are opened by default.

@*return* `node` — The primary node

---

## get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> height: number
```

Get the total scrollable height of the view's content.
Used by scrollbar to calculate thumb size and position.

@*return* `height` — Height in pixels (default: infinite)

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

@*param* `button` — Button to grab

@*param* `view` — View that should receive mouse events

```lua
button:
    | 'left'
    | 'right'
```

---

## interpolate_drag_overlay

```lua
(method) core.rootview:interpolate_drag_overlay(overlay: core.rootview.overlay)
```

Animate drag overlay position and opacity smoothly.
Internal helper for tab/split drag visual feedback.

@*param* `overlay` — The overlay to animate

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

@*param* `filename` — Absolute path to dropped file/folder

@*param* `x` — Screen x where dropped

@*param* `y` — Screen y where dropped

@*return* `handled` — True if event was handled

---

## on_focus_lost

```lua
(method) core.rootview:on_focus_lost(...any)
```

Handle window focus lost events.
Forces redraw so cursors can be hidden when window is inactive.

---

## on_ime_text_editing

```lua
(method) core.rootview:on_ime_text_editing(...any)
```

Forward IME text editing events to the active view.
Called during IME composition for text input.

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
```

Handle mouse movement events and route appropriately.
Manages: grabbed view routing, divider dragging, tab drag start, cursor changes.
Updates overlapping_view for hover state tracking.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `dx` — Delta x since last move

@*param* `dy` — Delta y since last move

---

## on_mouse_pressed

```lua
(method) core.rootview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> handled: boolean
```

Handle mouse press events and route to appropriate targets.
Manages: divider dragging, tab clicking/dragging, view activation, event routing.
Overrides base View implementation to handle complex UI interactions.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `clicks` — Number of clicks

@*return* `handled` — True if event was handled

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_released

```lua
(method) core.rootview:on_mouse_released(button: 'left'|'right', x: number, y: number, ...any)
```

Handle mouse button release events.
Manages: mouse grab release, divider drag completion, tab drop/rearrange.
Handles complex tab drag-and-drop logic (split, move, reorder).

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_wheel

```lua
(method) core.rootview:on_mouse_wheel(...any)
```

Forward mouse wheel events to the view under the mouse.

---

## on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Called when DPI scale changes (display moved, zoom changed, etc.).
Override to adjust sizes, padding, or other scale-dependent values.

@*param* `new_scale` — New scale factor (e.g., 1.0, 1.5, 2.0)

@*param* `prev_scale` — Previous scale factor

---

## on_text_input

```lua
(method) core.rootview:on_text_input(...any)
```

Forward text input events to the currently active view.

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

@*param* `doc` — Document to open

@*return* `view` — The view displaying the document

---

## process_defer_open_docs

```lua
(method) core.rootview:process_defer_open_docs()
```

Process deferred file drops (files dropped while nagview was active).
Called during update() to safely open files when nagview is dismissed.

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

## select_next_primary_node

```lua
(method) core.rootview:select_next_primary_node()
  -> node: core.node
```

Select a new primary node from available unlocked nodes.
Used when closing the current primary node.

@*return* `node` — Next available unlocked node to be primary

---

## set_drag_overlay

```lua
(method) core.rootview:set_drag_overlay(overlay: core.rootview.overlay, x: number, y: number, w: number, h: number, immediate?: boolean)
```

Set drag overlay target position and size.
If immediate is true, jumps to position instantly instead of animating.

@*param* `overlay` — The overlay to position

@*param* `x` — Target x coordinate

@*param* `y` — Target y coordinate

@*param* `w` — Target width

@*param* `h` — Target height

@*param* `immediate` — If true, jump to position without animation

---

## set_show_overlay

```lua
(method) core.rootview:set_show_overlay(overlay: core.rootview.overlay, status: boolean)
```

Show or hide a drag overlay with color reset.
Internal helper for managing drag visual feedback state.

@*param* `overlay` — The overlay to show/hide

@*param* `status` — True to show, false to hide

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

@*param* `do_close` — Call this function to actually close the view

---

## ungrab_mouse

```lua
(method) core.rootview:ungrab_mouse(button: 'left'|'right')
```

Release mouse grab for the specified button.
Button must match the button that was grabbed.
After release, normal mouse event routing resumes.

@*param* `button` — Button to release (must match grabbed button)

```lua
button:
    | 'left'
    | 'right'
```

---

## update

```lua
(method) core.rootview:update()
```

Update the entire UI tree each frame.
Manages: node layout, drag overlays, deferred file drops.
Called automatically by core every frame.

---

## update_drag_overlay

```lua
(method) core.rootview:update_drag_overlay()
```

Update drag overlay position during tab drag.
Shows visual feedback for where tab will land (split or reorder).
Called during update() when dragging tabs.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

