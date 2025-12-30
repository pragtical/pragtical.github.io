---
sidebar_position: 21
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.commandview

Command palette and input prompt view.
Provides autocomplete, suggestions, and command execution interface.

```lua
local commandview = require "core.commandview"
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

Font name to use

---

## gutter_text_brightness

```lua
(field) gutter_text_brightness: number
```

Label brightness animation value

---

## gutter_width

```lua
(field) gutter_width: number
```

Width of label gutter

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

## ime_selection

```lua
(field) ime_selection: core.docview.ime_selection
```

---

## ime_status

```lua
(field) ime_status: boolean
```

---

## label

```lua
(field) label: string
```

Label text displayed in gutter

---

## last_change_id

```lua
(field) last_change_id: integer
```

Last document change ID (for detecting updates)

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

## last_text

```lua
(field) last_text: string
```

Last input text (for typeahead)

---

## last_x_offset

```lua
(field) last_x_offset: core.docview.position
```

---

## mouse_position

```lua
(field) mouse_position: table
```

Mouse coordinates \{x, y\}

---

## mouse_selecting

```lua
(field) mouse_selecting: table?
```

---

## position

```lua
(field) position: core.view.position
```

---

## save_suggestion

```lua
(field) save_suggestion: string?
```

Saved suggestion for cycling

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

## selection_offset

```lua
(field) selection_offset: number
```

Animated cursor position in suggestions

---

## size

```lua
(field) size: core.view.position
```

---

## suggestion_idx

```lua
(field) suggestion_idx: integer
```

Currently selected suggestion index

---

## suggestions

```lua
(field) suggestions: table[]
```

List of suggestion items

---

## suggestions_first

```lua
(field) suggestions_first: integer
```

First visible suggestion index

---

## suggestions_height

```lua
(field) suggestions_height: number
```

Animated height of suggestions box

---

## suggestions_last

```lua
(field) suggestions_last: integer
```

Last visible suggestion index

---

## suggestions_offset

```lua
(field) suggestions_offset: number
```

Scroll offset for suggestions list

---

## super

```lua
(field) super: core.docview
```

View for editing documents with syntax highlighting and text editing.
Extends View to provide text editing capabilities including selection,
scrolling, IME support, and rendering with syntax highlighting.

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

## core.commandview.input

Single-line document that prevents newline insertion.
Used internally by CommandView for single-line input.

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### abs_filename

```lua
(field) abs_filename: any
```

---

### binary

```lua
(field) binary: boolean
```

---

### bom

```lua
(field) bom: string?
```

---

### cache

```lua
(field) cache: table
```

---

### clean_change_id

```lua
(field) clean_change_id: integer
```

---

### clean_lines

```lua
(field) clean_lines: table
```

---

### crlf

```lua
(field) crlf: boolean
```

---

### encoding

```lua
(field) encoding: string?
```

---

### filename

```lua
(field) filename: any
```

---

### highlighter

```lua
(field) highlighter: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### last_selection

```lua
(field) last_selection: number
```

---

### lines

```lua
(field) lines: table
```

---

### new_file

```lua
(field) new_file: any
```

---

### overwrite

```lua
(field) overwrite: boolean
```

---

### redo_stack

```lua
(field) redo_stack: table
```

---

### search_selections

```lua
(field) search_selections: table
```

---

### selections

```lua
(field) selections: table
```

---

### super

```lua
(field) super: core.doc
```

---

### syntax

```lua
(field) syntax: table|unknown
```

---

### undo_stack

```lua
(field) undo_stack: table
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
(method) core.commandview.input:__tostring()
  -> string
```

---

### add_search_selection

```lua
(method) core.doc:add_search_selection(line1: any, col1: any, line2: any, col2: any)
```

---

### add_selection

```lua
(method) core.doc:add_selection(line1: any, col1: any, line2: any, col2: any, swap: any)
```

---

### clean

```lua
(method) core.doc:clean()
```

---

### clear_cache

```lua
(method) core.doc:clear_cache(l: any, n: any)
```

---

### clear_search_selections

```lua
(method) core.doc:clear_search_selections()
```

---

### clear_undo_redo

```lua
(method) core.doc:clear_undo_redo()
```

---

### delete_to

```lua
(method) core.doc:delete_to(...any)
```

---

### delete_to_cursor

```lua
(method) core.doc:delete_to_cursor(idx: any, ...any)
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

### get_change_id

```lua
(method) core.doc:get_change_id()
  -> integer
```

---

### get_char

```lua
(method) core.doc:get_char(line: any, col: any)
  -> string
```

---

### get_indent_info

```lua
(method) core.doc:get_indent_info()
  -> "hard"|"soft"
  2. number
  3. boolean
```

---

### get_indent_string

```lua
(method) core.doc:get_indent_string(col: any)
  -> string
  2. string
```

---

### get_line_indent

```lua
(method) core.doc:get_line_indent(line: any, rnd_up: any)
  -> unknown
  2. string
  3. integer|nil
```

returns the size of the original indent, and the indent
 in your config format, rounded either up or down

---

### get_name

```lua
(method) core.doc:get_name()
  -> unknown
```

---

### get_non_word_chars

```lua
(method) core.doc:get_non_word_chars(symbol: boolean)
  -> string
```

Get a string of characters not belonging to a word taking into account
current subsyntax.

Note: when setting `symbol` param to true the characters property
`symbol_non_word_chars` will be searched, if false `non_word_chars`. In both
cases will fallback to `config.non_word_chars` when not found.

@*param* `symbol` — Indicates if non word characters are for a symbol

---

### get_selection

```lua
(method) core.doc:get_selection(sort: any)
  -> integer
  2. integer
  3. integer
  4. integer
  5. boolean
```

Cursor section. Cursor indices are *only* valid during a get_selections() call.
 Cursors will always be iterated in order from top to bottom. Through normal operation
 curors can never swap positions; only merge or split, or change their position in cursor
 order.

---

### get_selection_idx

```lua
(method) core.doc:get_selection_idx(idx: integer, sort?: boolean)
  -> integer
  2. integer
  3. integer
  4. integer
  5. boolean?
```

Get the selection specified by `idx`

@*param* `idx` — the index of the selection to retrieve

@*param* `sort` — whether to sort the selection returned

@*return* — line1, col1, line2, col2, was the selection sorted

---

### get_selection_text

```lua
(method) core.doc:get_selection_text(limit: any)
  -> string
```

---

### get_selections

```lua
(method) core.doc:get_selections(sort_intra: any, idx_reverse: any)
  -> function
  2. table
  3. number
```

If idx_reverse is true, it'll reverse iterate. If nil, or false, regular iterate.
 If a number, runs for exactly that iteration.

---

### get_symbol_pattern

```lua
(method) core.doc:get_symbol_pattern()
  -> string
```

Get the lua pattern used to match symbols taking into account current subsyntax.

---

### get_text

```lua
(method) core.doc:get_text(line1: integer, col1: integer, line2: integer, col2: integer, inclusive?: boolean)
  -> string
```

Returns the content of the doc between two positions.
The positions will be sanitized and sorted.
The character at the "end" position is not included by default.

@*param* `inclusive` — Whether or not to return the character at the last position

---

### get_utf8_line

```lua
(method) core.doc:get_utf8_line(idx: integer)
  -> string
```

Always returns a valid utf8 line even if the file contains binary data.

---

### has_any_selection

```lua
(method) core.doc:has_any_selection()
  -> boolean
```

---

### has_selection

```lua
(method) core.doc:has_selection()
  -> boolean
```

---

### ime_text_editing

```lua
(method) core.doc:ime_text_editing(text: any, start: any, length: any, idx: any)
```

---

### indent_text

```lua
(method) core.doc:indent_text(unindent: any, line1: any, col1: any, line2: any, col2: any)
  -> unknown
  2. integer|unknown
  3. unknown
  4. integer|unknown
```

un/indents text; behaviour varies based on selection and un/indent.
 * if there's a selection, it will stay static around the
   text for both indenting and unindenting.
 * if you are in the beginning whitespace of a line, and are indenting, the
   cursor will insert the exactly appropriate amount of spaces, and jump the
   cursor to the beginning of first non whitespace characters
 * if you are not in the beginning whitespace of a line, and you indent, it
   inserts the appropriate whitespace, as if you typed them normally.
 * if you are unindenting, the cursor will jump to the start of the line,
   and remove the appropriate amount of spaces (or a tab).

---

### insert

```lua
(method) core.commandview.input:insert(line: integer, col: integer, text: string)
```

Insert text, stripping any newlines to maintain single-line constraint.

@*param* `line` — Line number

@*param* `col` — Column number

@*param* `text` — Text to insert (newlines will be removed)

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

### is_dirty

```lua
(method) core.doc:is_dirty()
  -> boolean
```

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

### is_search_selection

```lua
(method) core.doc:is_search_selection(line1: any, col1: any, line2: any, col2: any)
  -> boolean
```

---

### load

```lua
(method) core.doc:load(filename: any)
```

---

### merge_cursors

```lua
(method) core.doc:merge_cursors(idx: any)
```

---

### move_to

```lua
(method) core.doc:move_to(...any)
```

---

### move_to_cursor

```lua
(method) core.doc:move_to_cursor(idx: any, ...any)
```

---

### needs_encoding_conversion

```lua
(method) core.doc:needs_encoding_conversion()
  -> boolean
```

---

### new

```lua
(method) core.doc:new(filename: any, abs_filename: any, new_file: any)
```

---

### on_close

```lua
(method) core.doc:on_close()
```

For plugins to get notified when a document is closed

---

### on_text_change

```lua
(method) core.doc:on_text_change(type: any)
```

For plugins to add custom actions of document change

---

### position_offset

```lua
(method) core.doc:position_offset(line: any, col: any, ...any)
```

---

### raw_insert

```lua
(method) core.doc:raw_insert(line: any, col: any, text: any, undo_stack: any, time: any)
```

---

### raw_remove

```lua
(method) core.doc:raw_remove(line1: any, col1: any, line2: any, col2: any, undo_stack: any, time: any)
```

---

### redo

```lua
(method) core.doc:redo()
```

---

### reload

```lua
(method) core.doc:reload()
```

---

### remove

```lua
(method) core.doc:remove(line1: any, col1: any, line2: any, col2: any)
```

---

### remove_selection

```lua
(method) core.doc:remove_selection(idx: any)
```

---

### replace

```lua
(method) core.doc:replace(fn: any)
  -> table
```

---

### replace_cursor

```lua
(method) core.doc:replace_cursor(idx: any, line1: any, col1: any, line2: any, col2: any, fn: any)
  -> unknown
```

---

### reset

```lua
(method) core.doc:reset()
```

---

### reset_syntax

```lua
(method) core.doc:reset_syntax()
```

---

### sanitize_position

```lua
(method) core.doc:sanitize_position(line: any, col: any)
  -> integer
  2. number
```

---

### sanitize_selection

```lua
(method) core.doc:sanitize_selection()
```

---

### save

```lua
(method) core.doc:save(filename: any, abs_filename: any)
```

---

### select_to

```lua
(method) core.doc:select_to(...any)
```

---

### select_to_cursor

```lua
(method) core.doc:select_to_cursor(idx: any, ...any)
```

---

### set_filename

```lua
(method) core.doc:set_filename(filename: any, abs_filename: any)
```

---

### set_selection

```lua
(method) core.doc:set_selection(line1: any, col1: any, line2: any, col2: any, swap: any)
```

---

### set_selections

```lua
(method) core.doc:set_selections(idx: any, line1: any, col1: any, line2: any, col2: any, swap: any, rm: any)
```

---

### text_input

```lua
(method) core.doc:text_input(text: any, idx: any)
```

---

### undo

```lua
(method) core.doc:undo()
```

---

## core.commandview.state

Configuration state for a command prompt session.

### cancel

```lua
(field) cancel: fun(explicit: boolean)
```

Callback when command is cancelled

---

### draw_text

```lua
(field) draw_text: fun(item: table, font: renderer.font, color: renderer.color, x: number, y: number, w: number, h: number)?
```

Custom suggestion renderer

---

### select_text

```lua
(field) select_text: boolean
```

Whether to select initial text

---

### show_suggestions

```lua
(field) show_suggestions: boolean
```

Whether to show suggestions box

---

### submit

```lua
(field) submit: fun(text: string, suggestion?: table)
```

Callback when command is submitted

---

### suggest

```lua
(field) suggest: fun(text: string):table[]?
```

Function returning suggestion list

---

### text

```lua
(field) text: string
```

Initial text to display

---

### typeahead

```lua
(field) typeahead: boolean
```

Whether to enable typeahead completion

---

### validate

```lua
(field) validate: fun(text: string, suggestion?: table):boolean
```

Validate before submission

---

### wrap

```lua
(field) wrap: boolean
```

Whether suggestion cycling wraps around

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
(method) core.commandview:__tostring()
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

## complete

```lua
(method) core.commandview:complete()
```

Complete input with currently selected suggestion.
Sets the input text to the selected suggestion's text.

---

## draw

```lua
(method) core.commandview:draw()
```

Draw the command view.
Renders input text and defers suggestions box drawing.

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
(method) core.commandview:draw_line_gutter(idx: integer, x: number, y: number)
  -> height: integer
```

Draw the label gutter with animated brightness.

@*param* `idx` — Line index (unused)

@*param* `x` — Gutter x position

@*param* `y` — Gutter y position

@*return* `height` — Line height

---

## draw_line_highlight

```lua
(method) core.commandview:draw_line_highlight()
```

Draw line highlight (disabled for command view).

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

## enter

```lua
(method) core.commandview:enter(label: string, ...any)
```

Enter command mode with a prompt.
Activates the command view with specified label and options.

@*param* `label` — Label text to display (": " will be appended)

@*param* `options` — Configuration options for this command session

---

## exit

```lua
(method) core.commandview:exit(submitted?: boolean, inexplicit?: boolean)
```

Exit command mode.
Restores previous view and calls cancel callback if not submitted.

@*param* `submitted` — True if command was submitted, false if cancelled

@*param* `inexplicit` — True if exit was automatic (e.g., focus lost)

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
(method) core.commandview:get_gutter_width()
  -> width: number
```

Get the width of the label gutter area.

@*return* `width` — Gutter width in pixels

---

## get_h_scrollable_size

```lua
(method) core.commandview:get_h_scrollable_size()
  -> size: integer
```

Get horizontal scrollable size (disabled for command view).

@*return* `size` — Always returns 0

---

## get_line_height

```lua
(method) core.commandview:get_line_height()
  -> height: integer
```

Get line height for input text.

@*return* `height` — Line height in pixels

---

## get_line_screen_position

```lua
(method) core.commandview:get_line_screen_position(line: integer, col: integer)
  -> x: number
  2. y: number
```

Get screen position of line and column, vertically centered in view.

@*param* `line` — Line number (always 1 for single-line)

@*param* `col` — Column number

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate (vertically centered)

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
(method) core.commandview:get_name()
  -> name: string
```

Get the view name for display.

@*return* `name` — Returns generic View name

---

## get_scrollable_size

```lua
(method) core.commandview:get_scrollable_size()
  -> size: integer
```

Get scrollable size (disabled for command view).

@*return* `size` — Always returns 0

---

## get_suggestion_line_height

```lua
(method) core.commandview:get_suggestion_line_height()
  -> height: number
```

Get line height for suggestion items.

@*return* `height` — Suggestion line height in pixels

---

## get_text

```lua
(method) core.commandview:get_text()
  -> text: string
```

Get the current input text.

@*return* `text` — The entire input text

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

## is_mouse_on_suggestions

```lua
(method) core.commandview:is_mouse_on_suggestions()
  -> hovering: boolean
```

Check if the mouse is hovering the suggestions box.

@*return* `hovering` — True if mouse is over suggestions box

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

## move_suggestion_idx

```lua
(method) core.commandview:move_suggestion_idx(dir: integer)
```

Move suggestion selection by offset (for arrow keys/wheel).
Handles wrapping, history cycling, and updates the input text.

@*param* `dir` — Direction to move (-1 for up/previous, 1 for down/next)

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
(method) core.commandview:new()
```

Constructor - initializes the command view.

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
(method) core.commandview:on_mouse_moved(x: number, y: number, ...any)
  -> handled: boolean
```

Handle mouse movement over command view and suggestions.
Updates suggestion selection when hovering suggestions box.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `handled` — True if mouse is over suggestions

---

## on_mouse_pressed

```lua
(method) core.commandview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> handled: boolean
```

Handle mouse press on suggestions box.
Submits command if clicking a suggestion with left button.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `clicks` — Number of clicks

@*return* `handled` — True if event was consumed

```lua
button:
    | 'left'
    | 'right'
```

---

## on_mouse_released

```lua
(method) core.commandview:on_mouse_released(...any)
  -> handled: boolean
```

Handle mouse release on suggestions box.
Consumes event to prevent propagation.

@*return* `handled` — True if mouse is over suggestions

---

## on_mouse_wheel

```lua
(method) core.commandview:on_mouse_wheel(y: number, ...any)
  -> handled: boolean
```

Handle mouse wheel over suggestions box.
Scrolls through suggestions when hovering.

@*param* `y` — Scroll delta (negative = down, positive = up)

@*return* `handled` — True if event was consumed

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
(method) core.commandview:scroll_to_make_visible()
```

Scroll to make position visible (no-op for command view).

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

## set_hidden_suggestions

```lua
(method) core.commandview:set_hidden_suggestions()
```

Hide suggestions box.

---

## set_text

```lua
(method) core.commandview:set_text(text: string, select?: boolean)
```

Set the input text and optionally select it.

@*param* `text` — Text to set

@*param* `select` — If true, select all text

---

## submit

```lua
(method) core.commandview:submit()
```

Submit the current command.
Validates input, calls submit callback, and exits command view.

---

## supports_text_input

```lua
(method) core.commandview:supports_text_input()
  -> accepts: boolean
```

Check if this view accepts text input.

@*return* `accepts` — Always returns true

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
(method) core.commandview:update()
```

Update the command view state each frame.
Handles typeahead, animations, and auto-exit on focus loss.

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

## update_suggestions

```lua
(method) core.commandview:update_suggestions()
```

Update suggestions list by calling suggest callback.
Normalizes string suggestions to table format \{text = string\}.

---
