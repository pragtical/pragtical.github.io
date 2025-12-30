---
sidebar_position: 46
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.titleview

```lua
local titleview = require "core.titleview"
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
(field) hovered_item: table
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## position

```lua
(field) position: core.view.position
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
(method) core.titleview:__tostring()
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

## configure_hit_test

```lua
(method) core.titleview:configure_hit_test(borderless: any)
```

---

## draw

```lua
(method) core.titleview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## draw_window_controls

```lua
(method) core.titleview:draw_window_controls()
```

---

## draw_window_title

```lua
(method) core.titleview:draw_window_title()
```

---

## each_control_item

```lua
(method) core.titleview:each_control_item()
  -> function
```

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

## get_scrollable_size

```lua
(method) core.view:get_scrollable_size()
  -> height: number
```

Get the total scrollable height of the view's content.
Used by scrollbar to calculate thumb size and position.

@*return* `height` — Height in pixels (default: infinite)

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
(method) core.titleview:new()
```

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> consumed: boolean
```

Handle file drop events (drag and drop from OS).
Override to handle dropped files. Return true to consume event.

@*param* `filename` — Absolute path to dropped file

@*param* `x` — Screen x where file was dropped

@*param* `y` — Screen y where file was dropped

@*return* `consumed` — True to consume event, false to propagate

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

## on_mouse_left

```lua
(method) core.titleview:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.titleview:on_mouse_moved(px: number, py: number, ...any)
```

---

## on_mouse_pressed

```lua
(method) core.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> consumed: boolean?
```

Handle mouse button press events.
Override to handle clicks. Return true to consume event and prevent propagation.
Base implementation handles scrollbar clicks.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `clicks` — Number of consecutive clicks (configurable with config.max_clicks)

@*return* `consumed` — True to consume event, false/nil to propagate

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_released

```lua
(method) core.titleview:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

---

## on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> consumed: boolean?
```

Handle mouse wheel scroll events.
Override for custom scroll behavior. Base implementation does nothing.

@*param* `y` — Vertical scroll delta; positive is "up"

@*param* `x` — Horizontal scroll delta; positive is "left"

@*return* `consumed` — True to consume event

---

## on_scale_change

```lua
(method) core.titleview:on_scale_change()
```

---

## on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

Handle text input events (typing, IME composition).
Override for text editing. Called after IME composition completes.

@*param* `text` — Input text (may be multiple characters)

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

## update

```lua
(method) core.titleview:update()
```

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

