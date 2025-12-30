---
sidebar_position: 92
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.textbox

```lua
local textbox = require "widget.textbox"
```

## NEWLINE

```lua
(field) NEWLINE: integer
```

Indicates on a widget.styledtext that a new line follows.

---

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## active

```lua
(field) active: boolean
```

---

## animations

```lua
(field) animations: widget.animation[]
```

---

## background_color

```lua
(field) background_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## border

```lua
(field) border: widget.border
```

Represents the border of a widget.

---

## captured_widget

```lua
(field) captured_widget: widget
```

Widget that captured mouse events

---

## child_active

```lua
(field) child_active: widget|nil
```

A base widget

---

## childs

```lua
(field) childs: table<integer, widget>
```

---

## clickable

```lua
(field) clickable: boolean
```

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
(field) cursor: string
```

---

## defer_draw

```lua
(field) defer_draw: boolean
```

---

## drag_select

```lua
(field) drag_select: boolean|table
```

---

## draggable

```lua
(field) draggable: boolean
```

---

## dragged

```lua
(field) dragged: boolean
```

---

## explicit_update

```lua
(field) explicit_update: boolean
```

---

## font

```lua
(field) font: string|renderer.font|widget.fontreference
```

Represents a reference to a font stored elsewhere.

---

## force_events

```lua
(field) force_events: table
```

---

## foreground_color

```lua
(field) foreground_color: renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

## h_scrollbar

```lua
(field) h_scrollbar: widget.scrollbar
```

---

## has_focus

```lua
(field) has_focus: boolean
```

---

## hover_border

```lua
(field) hover_border: unknown
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## input_text

```lua
(field) input_text: boolean
```

this widget is for text input

---

## is_scrolling

```lua
(field) is_scrolling: boolean
```

---

## label

```lua
(field) label: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>
```

---

## mouse

```lua
(field) mouse: widget.position
```

Represents the position of a widget.

---

## mouse_is_hovering

```lua
(field) mouse_is_hovering: boolean
```

---

## mouse_is_pressed

```lua
(field) mouse_is_pressed: boolean
```

---

## mouse_pressed_outside

```lua
(field) mouse_pressed_outside: boolean
```

---

## name

```lua
(field) name: string
```

---

## next_zindex

```lua
(field) next_zindex: integer
```

---

## parent

```lua
(field) parent: widget|nil
```

A base widget

---

## perform_update_size_position

```lua
(field) perform_update_size_position: boolean
```

---

## placeholder

```lua
(field) placeholder: string
```

---

## position

```lua
(field) position: widget.position
```

Represents the position of a widget.

---

## prev_height

```lua
(field) prev_height: number?
```

---

## prev_size

```lua
(field) prev_size: widget.position
```

Represents the position of a widget.

---

## prev_view

```lua
(field) prev_view: unknown
```

---

## prev_width

```lua
(field) prev_width: number?
```

---

## render_background

```lua
(field) render_background: boolean
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

## set_focus

```lua
(field) set_focus: any
```

---

## size

```lua
(field) size: widget.position
```

Modifying this property directly is not advised, use set_size() instead.

---

## skip_scroll_ctrl

```lua
(field) skip_scroll_ctrl: boolean
```

By default is set to true to allow ctrl+wheel or cmd+wheel on mac to scale
the interface, you can set it to false on your parent widget to allow
manually intercepting ctrl+wheel.

---

## super

```lua
(field) super: widget
```

A base widget

---

## textview

```lua
(field) textview: widget.textbox.TextView
```

---

## tooltip

```lua
(field) tooltip: (string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>)?
```

---

## tooltip_command

```lua
(field) tooltip_command: string?
```

---

## type_name

```lua
(field) type_name: string
```

---

## updated

```lua
(field) updated: boolean
```

---

## v_scrollbar

```lua
(field) v_scrollbar: widget.scrollbar
```

---

## visible

```lua
(field) visible: boolean
```

---

## zindex

```lua
(field) zindex: integer
```

---

## widget.textbox.SingleLineDoc

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
(field) highlighter: unknown
```

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
(method) core.doc:__tostring()
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
(method) widget.textbox.SingleLineDoc:insert(line: any, col: any, text: any)
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
(method) widget.textbox.SingleLineDoc:reset()
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

## widget.textbox.SingleLineHighlighter

Customized Highlighter to disable the coroutine.

### get_line

```lua
(method) widget.textbox.SingleLineHighlighter:get_line(idx: any)
  -> table
```

---

### start

```lua
(method) widget.textbox.SingleLineHighlighter:start()
```

---

## widget.textbox.TextView

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### cache_font

```lua
(field) cache_font: renderer.font
```

---

### cache_font_size

```lua
(field) cache_font_size: number
```

---

### cache_indent_size

```lua
(field) cache_indent_size: integer
```

---

### context

```lua
(field) context: string
```

---

### current_scale

```lua
(field) current_scale: number
```

---

### cursor

```lua
(field) cursor: string
```

---

### doc

```lua
(field) doc: core.doc
```

---

### font

```lua
(field) font: string
```

---

### gutter_text_brightness

```lua
(field) gutter_text_brightness: integer
```

---

### gutter_width

```lua
(field) gutter_width: integer
```

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

### hide_lines_gutter

```lua
(field) hide_lines_gutter: boolean
```

---

### hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

### hovering_gutter

```lua
(field) hovering_gutter: boolean
```

---

### ime_selection

```lua
(field) ime_selection: core.docview.ime_selection
```

---

### ime_status

```lua
(field) ime_status: boolean
```

---

### label

```lua
(field) label: string
```

---

### last_col1

```lua
(field) last_col1: integer
```

---

### last_col2

```lua
(field) last_col2: integer
```

---

### last_line1

```lua
(field) last_line1: integer
```

---

### last_line2

```lua
(field) last_line2: integer
```

---

### last_x_offset

```lua
(field) last_x_offset: core.docview.position
```

---

### mouse_selecting

```lua
(field) mouse_selecting: table?
```

---

### name

```lua
(field) name: string
```

---

### parent

```lua
(field) parent: core.doc
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

### subparent

```lua
(field) subparent: any
```

---

### super

```lua
(field) super: core.docview
```

View for editing documents with syntax highlighting and text editing.
Extends View to provide text editing capabilities including selection,
scrolling, IME support, and rendering with syntax highlighting.

---

### translate

```lua
(field) translate: table
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
(method) core.docview:__tostring()
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
(method) widget.textbox.TextView:draw()
```

Overwrite this function just to disable the core.push_clip_rect

---

### draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

### draw_caret

```lua
(method) core.docview:draw_caret(x: number, y: number, line: integer, col: integer)
```

Draw the caret at a position.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `line` — Line number (for overwrite mode char width)

@*param* `col` — Column number (for overwrite mode char width)

---

### draw_ime_decoration

```lua
(method) core.docview:draw_ime_decoration(line1: integer, col1: integer, line2: integer, col2: integer)
```

Draw IME composition decoration (underline and selection).

@*param* `line1` — Start line

@*param* `col1` — Start column

@*param* `line2` — End line

@*param* `col2` — End column

---

### draw_line_body

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

### draw_line_gutter

```lua
(method) widget.textbox.TextView:draw_line_gutter(idx: integer, x: number, y: number)
```

---

### draw_line_highlight

```lua
(method) widget.textbox.TextView:draw_line_highlight()
```

---

### draw_line_text

```lua
(method) widget.textbox.TextView:draw_line_text(line: integer, x: number, y: number)
```

---

### draw_overlay

```lua
(method) core.docview:draw_overlay()
```

Draw overlay elements (carets, IME decoration).
Called after main text to draw on top.

---

### draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

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

### get_col_x_offset

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

### get_filename

```lua
(method) core.docview:get_filename()
  -> filename: string
```

Get the full filename path for display (with home directory encoded).

@*return* `filename` — Full path or name with asterisk if modified

---

### get_font

```lua
(method) core.docview:get_font()
  -> font: renderer.font
```

Get the font used for rendering text.

@*return* `font` — The code font

---

### get_gutter_width

```lua
(method) widget.textbox.TextView:get_gutter_width()
  -> integer
```

---

### get_h_scrollable_size

```lua
(method) core.docview:get_h_scrollable_size()
  -> width: number
```

Get the scrollable width (infinite for horizontal scrolling).

@*return* `width` — Always returns math.huge

---

### get_line_height

```lua
(method) widget.textbox.TextView:get_line_height()
  -> integer
```

---

### get_line_screen_position

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

### get_line_text_y_offset

```lua
(method) core.docview:get_line_text_y_offset()
  -> offset: number
```

Get the vertical offset for centering text within a line.

@*return* `offset` — Y offset to center text in line height

---

### get_name

```lua
(method) widget.textbox.TextView:get_name()
  -> string
```

---

### get_scrollable_size

```lua
(method) widget.textbox.TextView:get_scrollable_size()
  -> integer
```

---

### get_text

```lua
(method) widget.textbox.TextView:get_text()
  -> string
```

---

### get_visible_cols_range

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

### get_visible_line_range

```lua
(method) core.docview:get_visible_line_range()
  -> minline: integer
  2. maxline: integer
```

Get the range of visible lines in the current viewport.

@*return* `minline` — First visible line

@*return* `maxline` — Last visible line

---

### get_x_offset_col

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

### mouse_selection

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
(method) widget.textbox.TextView:new(parent: core.doc, subparent: any)
```

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
(method) core.docview:on_ime_text_editing(text: string, start: integer, length: integer)
```

Handle IME text composition events.
Updates IME decoration and scrolls to keep composition visible.

@*param* `text` — Composition text

@*param* `start` — Selection start within composition

@*param* `length` — Selection length within composition

---

### on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

Called when mouse leaves the view's area.
Override to clear hover states. Base implementation notifies scrollbars.

---

### on_mouse_moved

```lua
(method) core.docview:on_mouse_moved(x: number, y: number, ...any)
```

Handle mouse movement for cursor changes and text selection.
Updates cursor icon, gutter hover state, and extends selection if dragging.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

---

### on_mouse_pressed

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

### on_mouse_released

```lua
(method) core.docview:on_mouse_released(...any)
```

Handle mouse release to end text selection.

---

### on_mouse_wheel

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

### on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Called when DPI scale changes (display moved, zoom changed, etc.).
Override to adjust sizes, padding, or other scale-dependent values.

@*param* `new_scale` — New scale factor (e.g., 1.0, 1.5, 2.0)

@*param* `prev_scale` — Previous scale factor

---

### on_text_input

```lua
(method) core.docview:on_text_input(text: string)
```

Handle text input from keyboard.

@*param* `text` — Input text

---

### on_touch_moved

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

### resolve_screen_position

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

### scroll_to_line

```lua
(method) core.docview:scroll_to_line(line: integer, ignore_if_visible?: boolean, instant?: boolean)
```

Scroll to center a line in the viewport.

@*param* `line` — Line number to scroll to

@*param* `ignore_if_visible` — Don't scroll if line already visible

@*param* `instant` — Jump immediately without animation

---

### scroll_to_make_visible

```lua
(method) core.docview:scroll_to_make_visible(line: integer, col: integer, instant?: boolean)
```

Scroll to make a position visible with context padding.
Ensures the position is visible with surrounding context lines.

@*param* `line` — Line number

@*param* `col` — Column number

@*param* `instant` — Jump immediately without animation

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

### set_text

```lua
(method) widget.textbox.TextView:set_text(text: any, select: any)
```

---

### supports_text_input

```lua
(method) core.docview:supports_text_input()
  -> accepts: boolean
```

Check if this view accepts text input.

@*return* `accepts` — Always returns true for DocView

---

### try_close

```lua
(method) core.docview:try_close(do_close: function)
```

Attempt to close the view, prompting to save if document is dirty.
Shows "Unsaved Changes" dialog if this is the last view of a dirty document.

@*param* `do_close` — Callback to execute when close is confirmed

---

### update

```lua
(method) core.docview:update()
```

Update the view state each frame.
Handles cache invalidation, auto-scrolling to caret, and blink timing.

---

### update_ime_location

```lua
(method) core.docview:update_ime_location()
```

Update IME composition window location.
Sets the bounding box for the system IME composition window.

---

### update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

## override_rootview

```lua
function widget.override_rootview()
```

Called when initializing a floating widget to generate RootView overrides,
this function will only override the events once.

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
(method) widget:__tostring()
  -> string
```

Useful for debugging.

---

## activate

```lua
(method) widget.textbox:activate()
```

---

## add_child

```lua
(method) widget:add_child(child: widget)
```

Add a child widget, automatically assign a zindex if non set and sorts
them in reverse order for better events matching.

---

## animate

```lua
(method) widget:animate(target?: table, properties: table<string, number>, options?: widget.animation.options)
```

Registers a new animation to be ran on the update cycle.

@*param* `target` — If nil assumes properties belong to widget it self.

---

## capture_mouse

```lua
(method) widget:capture_mouse(scrolling?: boolean)
```

All mouse events will be directly sent to the widget even if mouse moves
outside the widget region.

@*param* `scrolling` — Capture for scrolling

---

## centered

```lua
(method) widget:centered()
```

Center the widget horizontally and vertically to the screen or parent widget.

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## deactivate

```lua
(method) widget.textbox:deactivate()
```

---

## destroy

```lua
(method) widget:destroy()
```

If floating, remove the widget from the floating widgets list
to allow proper garbage collection.

---

## destroy_childs

```lua
(method) widget:destroy_childs()
```

Recursively destroy all childs from the widget.

---

## drag

```lua
(method) widget:drag(x: number, y: number)
```

Used internally when dragging is activated.

---

## draw

```lua
(method) widget.textbox:draw()
  -> boolean
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_border

```lua
(method) widget:draw_border(x?: number, y?: number, w?: number, h?: number)
```

Draw the widget configured border or custom one.

---

## draw_scrollbar

```lua
(method) widget:draw_scrollbar()
```

---

## draw_styled_text

```lua
(method) widget:draw_styled_text(text: table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>, x: integer, y: integer, only_calc?: boolean, start_idx?: integer, end_idx?: integer)
  -> width: integer
  2. height: integer
```

Render or calculate the size of the specified range of elements
in a styled text elemet.

---

## draw_text_multiline

```lua
(method) widget:draw_text_multiline(font: string|renderer.font|widget.fontreference, text: string, x: integer, y: integer, color: renderer.color, only_calc: boolean)
  -> resx: integer
  2. resy: integer
  3. width: integer
  4. height: integer
```

Taken from the logview and modified it a tiny bit.
TODO: something similar should be on pragtical core.

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

## force_event

```lua
(method) widget:force_event(name: "mouse_released", force: boolean)
```

Toggle the forced interception of given event even if all the conditions
for emitting it are not met.

Note: only "mouse_released" is implemented for the moment on floating views
for use in the SelectBox, maybe a better system can be implemented on
the future.

@*param* `force` — If omitted is set to true by default

```lua
name:
    | "mouse_released"
```

---

## get_bottom

```lua
(method) widget:get_bottom()
  -> number
```

Get the bottom y coordinate relative to parent

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

## get_font

```lua
(method) widget:get_font(font?: string|renderer.font|widget.fontreference)
  -> renderer.font
```

Get the real renderer.font associated with a widget.font.

---

## get_h_scrollable_size

```lua
(method) widget:get_h_scrollable_size()
  -> number
```

Calculates the x scrollable size taking into account the right most
widget or the size of the widget it self if greater.

---

## get_height

```lua
(method) widget:get_height()
  -> number
```

Get height including borders.

---

## get_name

```lua
(method) widget:get_name()
  -> string
```

The name that is displayed on pragtical tabs.

---

## get_position

```lua
(method) widget:get_position()
  -> widget.position
```

Get the relative position in relation to parent

---

## get_real_height

```lua
(method) widget:get_real_height()
  -> number
```

Overall height of the widget accounting all visible child widgets.

---

## get_real_width

```lua
(method) widget:get_real_width()
  -> number
```

Overall width of the widget accounting all visible child widgets.

---

## get_right

```lua
(method) widget:get_right()
  -> number
```

Get the right x coordinate relative to parent

---

## get_scrollable_size

```lua
(method) widget:get_scrollable_size()
  -> number
```

Calculates the y scrollable size taking into account the bottom most
widget or the size of the widget it self if greater.

---

## get_size

```lua
(method) widget:get_size()
  -> widget.position
```

---

## get_text

```lua
(method) widget.textbox:get_text()
  -> string
```

Get the text displayed on the textbox.

---

## get_width

```lua
(method) widget:get_width()
  -> number
```

Get width including borders.

---

## hide

```lua
(method) widget:hide()
```

Hide the widget.

---

## hide_animated

```lua
(method) widget:hide_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated hide.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

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

## is_visible

```lua
(method) widget:is_visible()
  -> boolean
```

Check if the widget is visible also recursing to the parent visibility.

---

## mouse_on_top

```lua
(method) widget:mouse_on_top(x: number, y: number)
  -> boolean
```

Check if the given mouse coordinate is hovering the widget

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
(method) widget.textbox:new(parent: widget, text: boolean, placeholder: any)
```

---

## on_change

```lua
(method) widget:on_change(value: any)
```

Event emitted when the value of the widget changes.
If applicable, child widgets should call this method
when its value changes.

---

## on_click

```lua
(method) widget:on_click(button: "left"|"right", x: number, y: number)
```

Click event emitted on a succesful on_mouse_pressed
and on_mouse_released events combo.

```lua
button:
    | "left"
    | "right"
```

---

## on_file_dropped

```lua
(method) widget:on_file_dropped(filename: string, x: number, y: number)
  -> processed: boolean
```

Send file drop event to hovered child.

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

## on_mouse_enter

```lua
(method) widget:on_mouse_enter(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse hovers the widget.

---

## on_mouse_leave

```lua
(method) widget:on_mouse_leave(x: any, y: any, dx: any, dy: any)
```

Emitted once when the mouse leaves the widget.

---

## on_mouse_left

```lua
(method) widget:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) widget.textbox:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean
```

---

## on_mouse_pressed

```lua
(method) widget.textbox:on_mouse_pressed(button: "left"|"right", x: number, y: number, clicks: integer)
  -> boolean
```

---

## on_mouse_released

```lua
(method) widget.textbox:on_mouse_released(button: "left"|"right", x: number, y: number)
  -> boolean
```

---

## on_mouse_wheel

```lua
(method) widget:on_mouse_wheel(y: number, x: number)
  -> boolean
```

---

## on_scale_change

```lua
(method) widget:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden by widgets to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

## on_text_change

```lua
(method) widget.textbox:on_text_change(action: string, ...any)
```

Event fired on any text change event.

@*param* `action` — Can be "insert" or "remove",

insert arguments (see Doc:raw_insert):
  line, col, text, undo_stack, time
remove arguments (see Doc:raw_remove):
  line1, col1, line2, col2, undo_stack, time

---

## on_text_input

```lua
(method) widget.textbox:on_text_input(text: string)
```

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

## release_mouse

```lua
(method) widget:release_mouse()
```

Undo capture_mouse()

---

## remove_child

```lua
(method) widget:remove_child(child: widget)
```

Remove a child widget.

---

## run_animations

```lua
(method) widget:run_animations()
```

Runs all registered animations removing duplicated and finished ones.

---

## schedule_update

```lua
(method) widget:schedule_update(delayed: any)
```

Schedule a core update and redraw. Since widgets try to not fire updates
and draws to child widgets to reduce cpu consumption this function can be
used when a re-update and re-draw is strictly needed.

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

## set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

## set_label

```lua
(method) widget:set_label(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>)
```

A text label for the widget, not all widgets support this.

---

## set_position

```lua
(method) widget:set_position(x?: integer, y?: integer)
```

Set the position of the widget and updates the child absolute coordinates

---

## set_size

```lua
(method) widget.textbox:set_size(width: integer)
```

---

## set_target_size

```lua
(method) widget:set_target_size(axis: string|'x'|'y', value: number)
  -> boolean
```

Called by pragtical node system to properly resize the widget.

```lua
axis:
    | 'x'
    | 'y'
```

---

## set_text

```lua
(method) widget.textbox:set_text(text: string, select?: boolean)
```

Set the text displayed on the textbox.

---

## set_tooltip

```lua
(method) widget:set_tooltip(tooltip?: string|table<integer, string|integer|renderer.color|renderer.font|widget.colorreference...(+1)>, command?: string)
```

Text displayed when the widget is hovered.
If a command name is also given its associated binding will be displayed
as part of the tooltip.

---

## show

```lua
(method) widget:show()
```

Show the widget.

---

## show_animated

```lua
(method) widget:show_animated(lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Perform an animated show.

@*param* `lock_x` — Do not resize width while animating

@*param* `lock_y` — Do not resize height while animating

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

---

## swap_active_child

```lua
(method) widget:swap_active_child(child?: widget)
```

Replaces current active child with a new one and calls the
activate/deactivate events of the child. This is especially
used to send text input events to widgets with input_text support.

@*param* `child` — If nil deactivates current child

---

## toggle_background

```lua
(method) widget:toggle_background(enable?: boolean)
```

When set to false the background rendering is disabled.

---

## toggle_visible

```lua
(method) widget:toggle_visible(animated?: boolean, lock_x?: boolean, lock_y?: boolean, options?: widget.animation.options)
```

Toggle visibility of widget.

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
(method) widget.textbox:update()
  -> boolean
```

---

## update_if_scaled

```lua
(method) widget:update_if_scaled()
```

Explicitly call the widget update procedure when the scale change even if
the widget is not visible.

---

## update_position

```lua
(method) widget:update_position()
```

Called on the update function to be able to scroll the child widgets.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

## update_size_position

```lua
(method) widget:update_size_position()
```

Similar to update, but here you should perform expensive calculations that
will get executed for a predefined period of time when a widget is
initialized, scale has changed or a widget switched from hidden to visible.

---
