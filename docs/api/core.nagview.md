---
sidebar_position: 42
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.nagview

Modal dialog view for confirmations and alerts.
Displays a message with buttons, dims the background, and captures focus.
Multiple dialogs queue automatically.

```lua
local nagview = require "core.nagview"
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

## dim_alpha

```lua
(field) dim_alpha: number
```

Alpha for background dimming \[0-1\]

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

## force_focus

```lua
(field) force_focus: boolean
```

Whether to force focus on this view

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

## hovered_item

```lua
(field) hovered_item: integer?
```

Index of currently hovered button

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## message

```lua
(field) message: string?
```

Current dialog message

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## on_selected

```lua
(field) on_selected: function?
```

Current dialog selection callback

---

## options

```lua
(field) options: core.nagview.option[]?
```

Current dialog options

---

## overlay

```lua
(field) overlay: core.view
```

Modal floating companion

---

## position

```lua
(field) position: core.view.position
```

---

## queue

```lua
(field) queue: core.nagview.queue_item[]
```

Queued dialogs waiting to show

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

## show_height

```lua
(field) show_height: number
```

Animated height for slide-in effect

---

## size

```lua
(field) size: core.view.position
```

View size

---

## super

```lua
(field) super: core.view
```

Base view.

---

## target_height

```lua
(field) target_height: number
```

Target height for current message

---

## title

```lua
(field) title: string?
```

Current dialog title

---

## underline_progress

```lua
(field) underline_progress: number
```

Animation progress for hover underline \[0-1\]

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

Whether dialog is currently visible

---

## core.nagview.option

### default_yes

```lua
(field) default_yes: boolean?
```

True if this is the default "yes" option

---

### text

```lua
(field) text: string
```

Button text

---

## core.nagview.queue_item

### message

```lua
(field) message: string
```

Dialog message text

---

### on_selected

```lua
(field) on_selected: fun(option: core.nagview.option)?
```

Callback when option selected

---

### options

```lua
(field) options: core.nagview.option[]
```

Available button options

---

### title

```lua
(field) title: string
```

Dialog title

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
(method) core.nagview:__tostring()
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

## change_hovered

```lua
(method) core.nagview:change_hovered(i?: integer)
```

Change which button is currently hovered.
Resets underline animation when hover changes.

@*param* `i?`: `integer` — Button index to hover (nil to clear)

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## dim_window_content

```lua
(method) core.nagview:dim_window_content()
```

Draw semi-transparent overlay to dim content behind the dialog.

---

## draw

```lua
(method) core.view:draw()
```

Called every frame to render the view.
Override to draw custom content. Typical pattern:
1. Call self:draw_background(color)
2. Draw your content
3. Call self:draw_scrollbar()

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

## each_option

```lua
(method) core.nagview:each_option()
  -> iterator: fun():integer, core.nagview.option, number, number, number, number
```

Iterate over dialog option buttons with their positions.
Buttons are yielded right-to-left.

@*return* `iterator`: `fun():integer, `[`core.nagview.option`](/docs/api/core.nagview#corenagviewoption)`, number, number, number, number` — Iterator yielding: index, option, x, y, width, height

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

## get_buttons_height

```lua
(method) core.nagview:get_buttons_height()
  -> height: number
```

Get button area height (excluding top/bottom view padding).
Includes internal button padding and borders.

@*return* `height`: `number` — Button height in pixels

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

## get_line_height

```lua
(method) core.nagview:get_line_height()
  -> height: integer
```

Get line height for text rendering.
Duplicated from DocView for independence.

@*return* `height`: `integer` — Line height in pixels

---

## get_line_text_y_offset

```lua
(method) core.nagview:get_line_text_y_offset()
  -> offset: number
```

Get vertical offset to center text within line height.
Duplicated from DocView for independence.

@*return* `offset`: `number` — Y offset in pixels

---

## get_message_height

```lua
(method) core.nagview:get_message_height()
  -> height: number
```

Calculate height needed to display the message text.

@*return* `height`: `number` — Message height in pixels

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
(method) core.nagview:get_scrollable_size()
  -> height: number
```

Get scrollable size when message is taller than window.
Adjusts view size and enables scrolling if needed.

@*return* `height`: `number` — Scrollable height (0 if not scrollable)

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

## get_target_height

```lua
(method) core.nagview:get_target_height()
  -> height: number
```

Get target height for the nagview content (including top/bottom padding).

@*return* `height`: `number` — Total target height in pixels

---

## get_title

```lua
(method) core.nagview:get_title()
  -> title: string?
```

Get the current dialog title.

@*return* `title`: `string?` — Current title or nil if no dialog active

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
(method) core.nagview:new()
```

Constructor - initializes the modal dialog view.

---

## next

```lua
(method) core.nagview:next()
```

Show the next dialog from the queue.
Dequeues and displays the next waiting dialog, or hides if queue is empty.

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
(method) core.view:on_mouse_left()
```

Called when mouse leaves the view's area.
Override to clear hover states. Base implementation notifies scrollbars.

---

## on_mouse_moved

```lua
(method) core.nagview:on_mouse_moved(mx: number, my: number, ...any)
```

Handle mouse movement to update button hover states.

@*param* `mx`: `number` — Screen x coordinate

@*param* `my`: `number` — Screen y coordinate

---

## on_mouse_pressed

```lua
(method) core.nagview:on_mouse_pressed(button: 'left'|'right', mx: number, my: number, clicks: integer)
  -> consumed: boolean
```

Handle modal presses on dialog buttons or the message scrollbar.
Consumes clicks elsewhere in the modal layer while the dialog is visible.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `button`: `'left'|'right'` — Pressed button

@*param* `mx`: `number` — Screen x coordinate

@*param* `my`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Consecutive click count

@*return* `consumed`: `boolean` — Whether the visible dialog handled the press

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
(method) core.nagview:on_scale_change(new_scale: number, old_scale: number)
```

Handle DPI scale changes.
Updates border widths and recalculates target height.

@*param* `new_scale`: `number` — New DPI scale

@*param* `old_scale`: `number` — Previous DPI scale

---

## on_text_input

```lua
(method) core.nagview:on_text_input(text: string)
  -> consumed: boolean?
```

Handle the dialog's Y/N shortcuts without editing the underlying document.

@*param* `text`: `string` — Typed text

@*return* `consumed`: `boolean?` — True while the dialog is visible

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
(method) core.nagview:show(title: string, message: string, options: core.nagview.option[], on_select?: fun(option: core.nagview.option))
```

Queue and optionally show a dialog.
If no dialog is currently showing, displays immediately. Otherwise queues it.

@*param* `title`: `string` — Dialog title

@*param* `message`: `string` — Dialog message text

@*param* `options`: [`core.nagview.option`](/docs/api/core.nagview#corenagviewoption)`[]` — Button options

@*param* `on_select?`: `fun(option: `[`core.nagview.option`](/docs/api/core.nagview#corenagviewoption)`)` — Callback when button is clicked

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

## update

```lua
(method) core.nagview:update()
```

Handles animations for show/hide, dimming, and button hover underline.

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

