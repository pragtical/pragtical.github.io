---
sidebar_position: 52
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
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizev'
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

### __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

---

### __tostring

```lua
(method) core.view:__tostring()
  -> string
```

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

@*return* `cls` — The new class table

---

### extends

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

### get_content_bounds

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

### get_content_offset

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

### get_h_scrollable_size

```lua
(method) core.view:get_h_scrollable_size()
  -> width: number
```

Get the total scrollable width of the view's content.
Used by horizontal scrollbar.

@*return* `width` — Width in pixels (default: 0, no horizontal scroll)

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
  -> number
```

---

### is

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

### is_class_of

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

### is_extended_by

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

### move_towards

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

### new

```lua
(method) plugins.diffview.view:new(a: string, b: string, compare_type?: plugins.diffview.view.type, names?: plugins.diffview.view.string_names)
```

Constructor

---

### on_file_dropped

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

### on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text` — Composition text being edited

@*param* `start` — Start position of selection within composition

@*param* `length` — Length of selection within composition

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

@*param* `text` — Input text (may be multiple characters)

---

### on_touch_moved

```lua
(method) plugins.diffview.view:on_touch_moved(...any)
```

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

@*return* `dragging` — True if scrollbar drag is in progress

---

### scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering` — True if mouse is over scrollbar

---

### scrollbar_overlaps_point

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

@*param* `do_close` — Call this function to actually close the view

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

@*param* `noshow` — If true doesn't adds to the rootview

---

## file_to_string

```lua
function plugins.diffview.file_to_string(a: string, b: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a file to string diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

## string_to_file

```lua
function plugins.diffview.string_to_file(a: string, b: string, a_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to file diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

## string_to_string

```lua
function plugins.diffview.string_to_string(a: string, b: string, a_name?: string, b_name?: string, noshow?: boolean)
  -> plugins.diffview.view
```

Create a string to string diff viewer.

@*param* `noshow` — If true doesn't adds to the rootview

---

