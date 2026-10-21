---
sidebar_position: 63
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.diffview

Functionality to view the textual differences of two elements.

```lua
local diffview = require "plugins.diffview"
```

## config.plugins.diffview

Configuration options for `diffview` plugin.

### log_times

```lua
(field) log_times: boolean
```

Logs the amount of time taken to recompute differences.

---

### plain_text

```lua
(field) plain_text: boolean
```

Disable syntax coloring on changed lines to improve visibility.

---

### plain_text_color

```lua
(field) plain_text_color: renderer.color
```

The color used on changed lines when plain text is enabled.

---

## plugins.diffview.view

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### a_changes

```lua
(field) a_changes: diff.changes[]
```

---

### a_gaps

```lua
(field) a_gaps: table<integer, table<integer, integer>>
```

---

### aligned_layout

```lua
(field) aligned_layout: table
```

---

### b_changes

```lua
(field) b_changes: diff.changes[]
```

---

### b_gaps

```lua
(field) b_gaps: table<integer, table<integer, integer>>
```

---

### capture_text_input

```lua
(field) capture_text_input: boolean?
```

Receive text input while floating without taking focus

---

### compare_type

```lua
(field) compare_type: plugins.diffview.view.type
```

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

### diff_layout_generation

```lua
(field) diff_layout_generation: integer
```

---

### doc_view_a

```lua
(field) doc_view_a: core.docview
```

View for editing documents with syntax highlighting and text editing.
Extends View to provide text editing capabilities including selection,
scrolling, IME support, and rendering with syntax highlighting.

---

### doc_view_b

```lua
(field) doc_view_b: core.docview
```

View for editing documents with syntax highlighting and text editing.
Extends View to provide text editing capabilities including selection,
scrolling, IME support, and rendering with syntax highlighting.

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

### hovered_sync

```lua
(field) hovered_sync: (plugins.diffview.view.hovered_sync)?
```

Represents the active sync indicator.

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

### skip_update_diff

```lua
(field) skip_update_diff: boolean
```

---

### super

```lua
(field) super: core.view
```

Base view.

---

### type

```lua
(field) type: enum plugins.diffview.view.type
```

---

### updater_idx

```lua
(field) updater_idx: integer
```

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

### views_patched

```lua
(field) views_patched: boolean
```

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
(method) plugins.diffview.view:draw()
```

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
(method) plugins.diffview.view:draw_scrollbar()
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

### get_aligned_layout

```lua
(method) plugins.diffview.view:get_aligned_layout()
  -> layout: table
```

Return the cached shared visual-row layout for both comparison panes.

@*return* `layout`: `table`

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
(method) plugins.diffview.view:get_name()
  -> string
```

---

### get_scrollable_size

```lua
(method) plugins.diffview.view:get_scrollable_size()
  -> unknown
```

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
(method) plugins.diffview.view:new(a: string, b: string, compare_type?: plugins.diffview.view.type, names?: plugins.diffview.view.string_names)
```

Constructor

@*param* `compare_type?`: [`plugins.diffview.view.type`](/docs/api/plugins.diffview#pluginsdiffviewviewtype)

@*param* `names?`: [`plugins.diffview.view.string_names`](/docs/api/plugins.diffview#pluginsdiffviewviewstring_names) — Names used when a or b are not files.

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
(method) plugins.diffview.view:on_mouse_left()
```

---

### on_mouse_moved

```lua
(method) plugins.diffview.view:on_mouse_moved(...any)
  -> boolean
```

---

### on_mouse_pressed

```lua
(method) plugins.diffview.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

---

### on_mouse_released

```lua
(method) plugins.diffview.view:on_mouse_released(...any)
```

---

### on_mouse_wheel

```lua
(method) plugins.diffview.view:on_mouse_wheel(y: number, x: number)
```

---

### on_scale_change

```lua
(method) plugins.diffview.view:on_scale_change(...any)
```

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
(method) plugins.diffview.view:on_touch_moved(...any)
```

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

### patch_views

```lua
(method) plugins.diffview.view:patch_views()
```

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

### sync

```lua
(method) plugins.diffview.view:sync(line: any, target_line: any, is_a: any)
```

---

### sync_selected

```lua
(method) plugins.diffview.view:sync_selected()
```

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
(method) plugins.diffview.view:update()
```

---

### update_diff

```lua
(method) plugins.diffview.view:update_diff()
```

Updates the registered differences between current side A and B.

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

## plugins.diffview.view.hovered_sync

Represents the active sync indicator.

### is_a

```lua
(field) is_a: boolean
```

---

### line

```lua
(field) line: integer
```

---

### target_line

```lua
(field) target_line: integer
```

---

## plugins.diffview.view.string_names

Names used when a or b are not files.

### a

```lua
(field) a: string?
```

---

### b

```lua
(field) b: string?
```

---

## plugins.diffview.view.type

```lua
\{
    STRING_FILE: integer = 1,
    FILE_STRING: integer = 2,
    FILE_FILE: integer = 3,
    STRING_STRING: integer = 4,
\}
```

## file_to_file

```lua
function plugins.diffview.file_to_file(a: string, b: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a file to file diff viewer.

@*param* `noshow?`: `boolean` — If true doesn't adds to the rootview

@*return*: [`plugins.diffview.view`](/docs/api/plugins.diffview#pluginsdiffviewview)

---

## file_to_string

```lua
function plugins.diffview.file_to_string(a: string, b: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a file to string diff viewer.

@*param* `noshow?`: `boolean` — If true doesn't adds to the rootview

@*return*: [`plugins.diffview.view`](/docs/api/plugins.diffview#pluginsdiffviewview)

---

## string_to_file

```lua
function plugins.diffview.string_to_file(a: string, b: string, a_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to file diff viewer.

@*param* `noshow?`: `boolean` — If true doesn't adds to the rootview

@*return*: [`plugins.diffview.view`](/docs/api/plugins.diffview#pluginsdiffviewview)

---

## string_to_string

```lua
function plugins.diffview.string_to_string(a: string, b: string, a_name?: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to string diff viewer.

@*param* `noshow?`: `boolean` — If true doesn't adds to the rootview

@*return*: [`plugins.diffview.view`](/docs/api/plugins.diffview#pluginsdiffviewview)

---

