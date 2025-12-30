---
sidebar_position: 42
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.scrollbar

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

```lua
local scrollbar = require "core.scrollbar"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## alignment

```lua
(field) alignment: "e"|"s"
```

Start or end position (left/top vs right/bottom)

---

## contracted_margin

```lua
(field) contracted_margin: number?
```

Override for style.contracted_scrollbar_margin

---

## contracted_size

```lua
(field) contracted_size: number?
```

Override for style.scrollbar_size

---

## direction

```lua
(field) direction: "h"|"v"
```

Vertical or horizontal orientation

---

## drag_start_offset

```lua
(field) drag_start_offset: number
```

Offset from thumb top when drag started

---

## dragging

```lua
(field) dragging: boolean
```

True when user is dragging the thumb

---

## expand_percent

```lua
(field) expand_percent: number
```

Animation state \[0-1\] for hover expansion

---

## expanded_margin

```lua
(field) expanded_margin: number?
```

Override for style.expanded_scrollbar_margin

---

## expanded_size

```lua
(field) expanded_size: number?
```

Override for style.expanded_scrollbar_size

---

## force_status

```lua
(field) force_status: ("contracted"|"expanded"|false)?
```

Forced display state

---

## minimum_thumb_size

```lua
(field) minimum_thumb_size: number?
```

Override for style.minimum_thumb_size

---

## percent

```lua
(field) percent: number
```

Scroll position \[0-1\]

---

## super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## core.scrollbar.hovering

### thumb

```lua
(field) thumb: boolean
```

True if mouse is over thumb

---

### track

```lua
(field) track: boolean
```

True if mouse is over track

---

## core.scrollbar.normal_rect

### across

```lua
(field) across: number
```

Position perpendicular to scroll direction

---

### across_size

```lua
(field) across_size: number
```

Size perpendicular to scroll direction

---

### along

```lua
(field) along: number
```

Position parallel to scroll direction

---

### along_size

```lua
(field) along_size: number
```

Size parallel to scroll direction

---

### scrollable

```lua
(field) scrollable: number
```

Total scrollable size

---

## core.scrollbar.options

Configuration options for creating a scrollbar.

### alignment

```lua
(field) alignment: ("e"|"s")?
```

Start or End - left/top vs right/bottom (default: "e")

---

### contracted_margin

```lua
(field) contracted_margin: number?
```

Override style.contracted_scrollbar_margin

---

### contracted_size

```lua
(field) contracted_size: number?
```

Override style.scrollbar_size

---

### direction

```lua
(field) direction: ("h"|"v")?
```

Vertical or Horizontal (default: "v")

---

### expanded_margin

```lua
(field) expanded_margin: number?
```

Override style.expanded_scrollbar_margin

---

### expanded_size

```lua
(field) expanded_size: number?
```

Override style.expanded_scrollbar_size

---

### force_status

```lua
(field) force_status: ("contracted"|"expanded"|false)?
```

Force display state

---

### minimum_thumb_size

```lua
(field) minimum_thumb_size: number?
```

Override style.minimum_thumb_size

---

## core.scrollbar.rect

### h

```lua
(field) h: number
```

---

### scrollable

```lua
(field) scrollable: number
```

Total scrollable size

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
(method) core.scrollbar:__tostring()
  -> string
```

---

## _get_thumb_rect_normal

```lua
(method) core.scrollbar:_get_thumb_rect_normal()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get thumb rectangle in normalized coordinates.
Internal helper - use get_thumb_rect() for real coordinates.

@*return* `x` — Normalized x coordinate

@*return* `y` — Normalized y coordinate

@*return* `w` — Normalized width

@*return* `h` — Normalized height

---

## _get_track_rect_normal

```lua
(method) core.scrollbar:_get_track_rect_normal()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get track rectangle in normalized coordinates.
Internal helper - use get_track_rect() for real coordinates.

@*return* `x` — Normalized x coordinate

@*return* `y` — Normalized y coordinate

@*return* `w` — Normalized width

@*return* `h` — Normalized height

---

## _on_mouse_moved_normal

```lua
(method) core.scrollbar:_on_mouse_moved_normal(x: number, y: number, dx: number, dy: number)
  -> result: boolean|number
```

Handle mouse movement in normalized coordinates.
Internal helper - use on_mouse_moved() for real coordinates.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*param* `dx` — Normalized delta x

@*param* `dy` — Normalized delta y

@*return* `result` — True if hovering, 0-1 percent if dragging, falsy otherwise

---

## _on_mouse_pressed_normal

```lua
(method) core.scrollbar:_on_mouse_pressed_normal(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> result: boolean|number
```

Handle mouse press in normalized coordinates.
Internal helper - use on_mouse_pressed() for real coordinates.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*param* `clicks` — Number of clicks

@*return* `result` — True if thumb clicked, 0-1 percent if track clicked, falsy otherwise

```lua
button:
    | 'left'
    | 'right'
```

---

## _on_mouse_released_normal

```lua
(method) core.scrollbar:_on_mouse_released_normal(button: 'left'|'right', x: number, y: number)
  -> hovering: boolean
```

Handle mouse release in normalized coordinates.
Internal helper - use on_mouse_released() for real coordinates.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*return* `hovering` — True if hovering track or thumb

```lua
button:
    | 'left'
    | 'right'
```

---

## _overlaps_normal

```lua
(method) core.scrollbar:_overlaps_normal(x: number, y: number)
  -> part: "thumb"|"track"|nil
```

Check what part of scrollbar overlaps a point in normalized coordinates.
Internal helper - use overlaps() for real coordinates.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*return* `part` — What was hit, or nil if nothing

```lua
part:
    | "thumb"
    | "track"
```

---

## _update_hover_status_normal

```lua
(method) core.scrollbar:_update_hover_status_normal(x: number, y: number)
  -> hovering: boolean
```

Update hover status in normalized coordinates.
Internal helper called by other mouse methods.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*return* `hovering` — True if hovering track or thumb

---

## draw

```lua
(method) core.scrollbar:draw()
```

Draw the complete scrollbar (track and thumb).
Call this from the owning view's draw() method.

---

## draw_thumb

```lua
(method) core.scrollbar:draw_thumb()
```

Draw the scrollbar thumb (draggable indicator).
Highlights when hovered or being dragged.

---

## draw_track

```lua
(method) core.scrollbar:draw_track()
```

Draw the scrollbar track (background).
Only draws when hovered/dragging or expanded.
Fades in based on expand_percent animation.

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

## get_thumb_rect

```lua
(method) core.scrollbar:get_thumb_rect()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get the thumb rectangle (the draggable part of the scrollbar).

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

@*return* `w` — Width in pixels

@*return* `h` — Height in pixels

---

## get_track_rect

```lua
(method) core.scrollbar:get_track_rect()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get the track rectangle (the background of the scrollbar).

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

@*return* `w` — Width in pixels

@*return* `h` — Height in pixels

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

## new

```lua
(method) core.scrollbar:new(options: core.scrollbar.options)
```

Constructor - initializes a scrollbar with specified orientation and style.

@*param* `options` — Configuration options

---

## normal_to_real

```lua
(method) core.scrollbar:normal_to_real(x?: number, y?: number, w?: number, h?: number)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Transform normalized coordinates back to real coordinate system.
Internal helper for orientation/alignment handling.

@*param* `x` — Normalized x coordinate

@*param* `y` — Normalized y coordinate

@*param* `w` — Normalized width

@*param* `h` — Normalized height

@*return* `x` — Real x

@*return* `y` — Real y

@*return* `w` — Real width

@*return* `h` — Real height

---

## on_mouse_left

```lua
(method) core.scrollbar:on_mouse_left()
```

Handle mouse leaving the scrollbar area.
Clears all hover states.

---

## on_mouse_moved

```lua
(method) core.scrollbar:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> result: (boolean|number)?
```

Handle mouse movement events on the scrollbar.
Updates hover status and returns drag position if dragging.
Does NOT automatically update scroll position - caller must use set_percent().

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `dx` — Delta x since last move

@*param* `dy` — Delta y since last move

@*return* `result` — True if hovering, 0-1 percent if dragging, falsy otherwise

---

## on_mouse_pressed

```lua
(method) core.scrollbar:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> result: (boolean|number)?
```

Handle mouse press events on the scrollbar.
Sets dragging state if thumb is clicked.
Does NOT automatically update scroll position - caller must use set_percent().

@*param* `button` — Mouse button

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `clicks` — Number of clicks

@*return* `result` — True if thumb clicked, 0-1 percent if track clicked, falsy otherwise

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_released

```lua
(method) core.scrollbar:on_mouse_released(button: 'left'|'right', x: number, y: number)
  -> hovering: boolean?
```

Handle mouse release events on the scrollbar.
Clears dragging state and updates hover status.

@*param* `button` — Mouse button

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `hovering` — True if hovering track or thumb

```lua
button:
    | 'left'
    | 'right'
```

---

## overlaps

```lua
(method) core.scrollbar:overlaps(x: number, y: number)
  -> part: "thumb"|"track"|nil
```

Check what part of the scrollbar overlaps a screen point.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `part` — What was hit, or nil if nothing

```lua
part:
    | "thumb"
    | "track"
```

---

## real_to_normal

```lua
(method) core.scrollbar:real_to_normal(x?: number, y?: number, w?: number, h?: number)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Transform real coordinates to normalized coordinate system.
Internal helper for orientation/alignment handling.

@*param* `x` — Real x coordinate

@*param* `y` — Real y coordinate

@*param* `w` — Real width

@*param* `h` — Real height

@*return* `x` — Normalized x

@*return* `y` — Normalized y

@*return* `w` — Normalized width

@*return* `h` — Normalized height

---

## set_forced_status

```lua
(method) core.scrollbar:set_forced_status(status: "contracted"|"expanded"|false)
```

Set the forced display status of the scrollbar.
When forced, the scrollbar won't animate based on hover state.

@*param* `status` — Status to force (false to allow auto-animation)

```lua
status:
    | "expanded"
    | "contracted"
    | false
```

---

## set_percent

```lua
(method) core.scrollbar:set_percent(percent: number)
```

Set the scrollbar thumb position.

@*param* `percent` — Position from 0-1 (0 = top/left, 1 = bottom/right)

---

## set_size

```lua
(method) core.scrollbar:set_size(x: number, y: number, w: number, h: number, scrollable: number)
```

Set the bounding box of the view this scrollbar belongs to.
Must be called when view size or scrollable area changes.

@*param* `x` — View x position

@*param* `y` — View y position

@*param* `w` — View width

@*param* `h` — View height

@*param* `scrollable` — Total scrollable size (height for vertical, width for horizontal)

---

## update

```lua
(method) core.scrollbar:update()
```

Update scrollbar animations (hover expansion).
Call this every frame to animate the scrollbar width on hover.

---

