---
sidebar_position: 29
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.docview

View for editing documents with syntax highlighting and text editing.
Extends View to provide text editing capabilities including selection,
scrolling, IME support, and rendering with syntax highlighting.

```lua
local docview = require "core.docview"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## cache_font

```lua
(field) cache_font: renderer.font
```

---

## cache_font_size

```lua
(field) cache_font_size: number
```

---

## cache_indent_size

```lua
(field) cache_indent_size: integer
```

---

## context

```lua
(field) context: string
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

## doc

```lua
(field) doc: core.doc
```

---

## font

```lua
(field) font: string
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

## hovering_gutter

```lua
(field) hovering_gutter: boolean
```

---

## ime_status

```lua
(field) ime_status: boolean
```

---

## last_col1

```lua
(field) last_col1: integer
```

---

## last_col2

```lua
(field) last_col2: integer
```

---

## last_line1

```lua
(field) last_line1: integer
```

---

## last_line2

```lua
(field) last_line2: integer
```

---

## last_x_offset

```lua
(field) last_x_offset: core.docview.position
```

---

## mouse_selecting

```lua
(field) mouse_selecting: table?
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

## translate

```lua
(field) translate: table
```

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

## core.docview.ime_selection

### from

```lua
(field) from: integer
```

---

### size

```lua
(field) size: integer
```

---

## core.docview.position

### col

```lua
(field) col: integer
```

---

### line

```lua
(field) line: integer
```

---

### offset

```lua
(field) offset: number
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
(method) core.docview:__tostring()
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

## draw

```lua
(method) core.docview:draw()
```

Draw the entire document view.
Renders background, gutters, text, selections, carets, and scrollbars.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_caret

```lua
(method) core.docview:draw_caret(x: number, y: number, line: integer, col: integer)
```

Draw the caret at a position.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `line` — Line number (for overwrite mode char width)

@*param* `col` — Column number (for overwrite mode char width)

---

## draw_ime_decoration

```lua
(method) core.docview:draw_ime_decoration(line1: integer, col1: integer, line2: integer, col2: integer)
```

Draw IME composition decoration (underline and selection).

@*param* `line1` — Start line

@*param* `col1` — Start column

@*param* `line2` — End line

@*param* `col2` — End column

---

## draw_line_body

```lua
(method) core.docview:draw_line_body(line: integer, x: number, y: number)
  -> height: integer
```

Draw a complete line including highlight and selections.

@*param* `line` — Line number

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `height` — Line height

---

## draw_line_gutter

```lua
(method) core.docview:draw_line_gutter(line: integer, x: number, y: number, width: number)
  -> height: integer
```

Draw the gutter with line numbers.

@*param* `line` — Line number

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `width` — Gutter width

@*return* `height` — Line height

---

## draw_line_highlight

```lua
(method) core.docview:draw_line_highlight(x: number, y: number)
```

Draw the current line highlight bar.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

---

## draw_line_text

```lua
(method) core.docview:draw_line_text(line: integer, x: number, y: number)
  -> height: integer
```

Draw the text content of a line with syntax highlighting.

@*param* `line` — Line number

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `height` — Line height

---

## draw_overlay

```lua
(method) core.docview:draw_overlay()
```

Draw overlay elements (carets, IME decoration).
Called after main text to draw on top.

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

## get_col_x_offset

```lua
(method) core.docview:get_col_x_offset(line: integer, col: integer)
  -> offset: number
```

Get the horizontal pixel offset for a column position.
Accounts for tabs, syntax highlighting fonts, and caches long lines.

@*param* `line` — Line number

@*param* `col` — Column number (byte offset)

@*return* `offset` — Horizontal pixel offset

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

## get_filename

```lua
(method) core.docview:get_filename()
  -> filename: string
```

Get the full filename path for display (with home directory encoded).

@*return* `filename` — Full path or name with asterisk if modified

---

## get_font

```lua
(method) core.docview:get_font()
  -> font: renderer.font
```

Get the font used for rendering text.

@*return* `font` — The code font

---

## get_gutter_width

```lua
(method) core.docview:get_gutter_width()
  -> width: number
  2. padding: number
```

Get the gutter width (line numbers area).

@*return* `width` — Total gutter width

@*return* `padding` — Padding within gutter

---

## get_h_scrollable_size

```lua
(method) core.docview:get_h_scrollable_size()
  -> width: number
```

Get the scrollable width (infinite for horizontal scrolling).

@*return* `width` — Always returns math.huge

---

## get_line_height

```lua
(method) core.docview:get_line_height()
  -> height: integer
```

Get the line height in pixels.

@*return* `height` — Line height including line spacing

---

## get_line_screen_position

```lua
(method) core.docview:get_line_screen_position(line: integer, col?: integer)
  -> x: number
  2. y: number
```

Get the screen position of a line (and optionally column).

@*param* `line` — Line number

@*param* `col` — Optional column number

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

---

## get_line_text_y_offset

```lua
(method) core.docview:get_line_text_y_offset()
  -> offset: number
```

Get the vertical offset for centering text within a line.

@*return* `offset` — Y offset to center text in line height

---

## get_name

```lua
(method) core.docview:get_name()
  -> name: string
```

Get the display name for the tab (filename with * if dirty).

@*return* `name` — Document name with asterisk if modified

---

## get_scrollable_size

```lua
(method) core.docview:get_scrollable_size()
  -> height: number
```

Get the total scrollable height of the document.

@*return* `height` — Total height in pixels

---

## get_visible_cols_range

```lua
(method) core.docview:get_visible_cols_range(line: integer, extra_cols?: integer)
  -> col1: integer
  2. col2: integer
  3. ucol1: integer
  4. ucol2: integer
```

Get an estimated range of visible columns. It is an estimate because fonts
and their fallbacks may not be monospaced or may differ in size. This
function provides a way of optimization on really long lines for plugins
that perform drawing operations on them.

It is good practice to set the `extra_cols` parameter to a value that leaves
room for the differences in font sizes.

@*param* `extra_cols` — Amount of columns to deduce on col1 and include on col2 (default: 100)

---

## get_visible_line_range

```lua
(method) core.docview:get_visible_line_range()
  -> minline: integer
  2. maxline: integer
```

Get the range of visible lines in the current viewport.

@*return* `minline` — First visible line

@*return* `maxline` — Last visible line

---

## get_x_offset_col

```lua
(method) core.docview:get_x_offset_col(line: integer, x: number)
  -> col: integer
```

Get the column at a horizontal pixel offset.
Inverse of get_col_x_offset. Accounts for variable-width fonts.

@*param* `line` — Line number

@*param* `x` — Horizontal pixel offset

@*return* `col` — Column number (byte offset)

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

## mouse_selection

```lua
(method) core.docview:mouse_selection(doc: core.doc, snap_type: string, line1: integer, col1: integer, line2: integer, col2: integer)
  -> line1: integer
  2. col1: integer
  3. line2: integer
  4. col2: integer
```

Adjust selection based on snap type (word, line).

@*param* `doc` — Document

@*param* `snap_type` — Snap type: "word" or "lines"

@*param* `line1` — Start line

@*param* `col1` — Start column

@*param* `line2` — End line

@*param* `col2` — End column

@*return* `line1` — Adjusted start line

@*return* `col1` — Adjusted start column

@*return* `line2` — Adjusted end line

@*return* `col2` — Adjusted end column

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
(method) core.docview:new(doc: core.doc)
```

Constructor - initializes a document view.

@*param* `doc` — Document to display

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
(method) core.docview:on_ime_text_editing(text: string, start: integer, length: integer)
```

Handle IME text composition events.
Updates IME decoration and scrolls to keep composition visible.

@*param* `text` — Composition text

@*param* `start` — Selection start within composition

@*param* `length` — Selection length within composition

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
(method) core.docview:on_mouse_moved(x: number, y: number, ...any)
```

Handle mouse movement for cursor changes and text selection.
Updates cursor icon, gutter hover state, and extends selection if dragging.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

---

## on_mouse_pressed

```lua
(method) core.docview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> handled: boolean?
```

Handle mouse press for text selection and gutter clicks.
Supports single/double click, shift-selection, and gutter line selection.

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
(method) core.docview:on_mouse_released(...any)
```

Handle mouse release to end text selection.

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
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Called when DPI scale changes (display moved, zoom changed, etc.).
Override to adjust sizes, padding, or other scale-dependent values.

@*param* `new_scale` — New scale factor (e.g., 1.0, 1.5, 2.0)

@*param* `prev_scale` — Previous scale factor

---

## on_text_input

```lua
(method) core.docview:on_text_input(text: string)
```

Handle text input from keyboard.

@*param* `text` — Input text

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

## resolve_screen_position

```lua
(method) core.docview:resolve_screen_position(x: number, y: number)
  -> line: integer
  2. col: integer
```

Convert screen coordinates to document line/column.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `line` — Line number

@*return* `col` — Column number

---

## scroll_to_line

```lua
(method) core.docview:scroll_to_line(line: integer, ignore_if_visible?: boolean, instant?: boolean)
```

Scroll to center a line in the viewport.

@*param* `line` — Line number to scroll to

@*param* `ignore_if_visible` — Don't scroll if line already visible

@*param* `instant` — Jump immediately without animation

---

## scroll_to_make_visible

```lua
(method) core.docview:scroll_to_make_visible(line: integer, col: integer, instant?: boolean)
```

Scroll to make a position visible with context padding.
Ensures the position is visible with surrounding context lines.

@*param* `line` — Line number

@*param* `col` — Column number

@*param* `instant` — Jump immediately without animation

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
(method) core.docview:supports_text_input()
  -> accepts: boolean
```

Check if this view accepts text input.

@*return* `accepts` — Always returns true for DocView

---

## try_close

```lua
(method) core.docview:try_close(do_close: function)
```

Attempt to close the view, prompting to save if document is dirty.
Shows "Unsaved Changes" dialog if this is the last view of a dirty document.

@*param* `do_close` — Callback to execute when close is confirmed

---

## update

```lua
(method) core.docview:update()
```

Update the view state each frame.
Handles cache invalidation, auto-scrolling to caret, and blink timing.

---

## update_ime_location

```lua
(method) core.docview:update_ime_location()
```

Update IME composition window location.
Sets the bounding box for the system IME composition window.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

