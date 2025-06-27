---
sidebar_position: 80
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
(field) label: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>
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

## placeholder_active

```lua
(field) placeholder_active: boolean
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
(field) tooltip: (string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)?
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
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

### __tostring

```lua
(method) core.doc:__tostring()
  -> string
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
  -> core.object
```

---

### extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

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

See: \[core.doc.sanitize_position\](file:///usr/share/pragtical/core/doc/init.lua#401#9)

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
  -> boolean
```

Check if the object is strictly of the given type.

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

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
  -> boolean
```

Check if the parameter inherits from the object.

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

---

### cache_font

```lua
(field) cache_font: unknown
```

---

### cache_font_size

```lua
(field) cache_font_size: unknown
```

---

### cache_indent_size

```lua
(field) cache_indent_size: unknown
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
(field) doc: any
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

Scrollbar
Use Scrollbar:set_size to set the bounding box of the view the scrollbar belongs to.
Use Scrollbar:update to update the scrollbar animations.
Use Scrollbar:draw to draw the scrollbar.
Use Scrollbar:on_mouse_pressed, Scrollbar:on_mouse_released,
Scrollbar:on_mouse_moved and Scrollbar:on_mouse_left to react to mouse movements;
the scrollbar won't update automatically.
Use Scrollbar:set_percent to set the scrollbar location externally.

To manage all the orientations, the scrollbar changes the coordinates system
accordingly. The "normal" coordinate system adapts the scrollbar coordinates
as if it's always a vertical scrollbar, positioned at the end of the bounding box.

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
(field) ime_selection: table
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
(field) last_col1: unknown
```

---

### last_col2

```lua
(field) last_col2: unknown
```

---

### last_line1

```lua
(field) last_line1: unknown
```

---

### last_line2

```lua
(field) last_line2: unknown
```

---

### last_x_offset

```lua
(field) last_x_offset: table
```

---

### mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

### name

```lua
(field) name: string
```

---

### parent

```lua
(field) parent: any
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

### super

```lua
(field) super: core.docview
```

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

Scrollbar
Use Scrollbar:set_size to set the bounding box of the view the scrollbar belongs to.
Use Scrollbar:update to update the scrollbar animations.
Use Scrollbar:draw to draw the scrollbar.
Use Scrollbar:on_mouse_pressed, Scrollbar:on_mouse_released,
Scrollbar:on_mouse_moved and Scrollbar:on_mouse_left to react to mouse movements;
the scrollbar won't update automatically.
Use Scrollbar:set_percent to set the scrollbar location externally.

To manage all the orientations, the scrollbar changes the coordinates system
accordingly. The "normal" coordinate system adapts the scrollbar coordinates
as if it's always a vertical scrollbar, positioned at the end of the bounding box.

---

### __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

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

---

### draw_caret

```lua
(method) core.docview:draw_caret(x: any, y: any, line: any, col: any)
```

---

### draw_ime_decoration

```lua
(method) core.docview:draw_ime_decoration(line1: any, col1: any, line2: any, col2: any)
```

---

### draw_line_body

```lua
(method) core.docview:draw_line_body(line: any, x: any, y: any)
  -> integer
```

---

### draw_line_gutter

```lua
(method) widget.textbox.TextView:draw_line_gutter(idx: any, x: any, y: any)
```

---

### draw_line_highlight

```lua
(method) widget.textbox.TextView:draw_line_highlight()
```

---

### draw_line_text

```lua
(method) core.docview:draw_line_text(line: any, x: any, y: any)
  -> integer
```

---

### draw_overlay

```lua
(method) core.docview:draw_overlay()
```

---

### draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

---

### extend

```lua
(method) core.object:extend()
  -> core.object
```

---

### extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

### get_col_x_offset

```lua
(method) core.docview:get_col_x_offset(line: any, col: any)
  -> integer|unknown
```

---

### get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> number
  2. number
  3. number
  4. number
```

---

### get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

---

### get_filename

```lua
(method) core.docview:get_filename()
  -> string|unknown
```

---

### get_font

```lua
(method) core.docview:get_font()
  -> unknown
```

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
  -> number
```

---

### get_line_height

```lua
(method) widget.textbox.TextView:get_line_height()
  -> integer
```

---

### get_line_screen_position

```lua
(method) core.docview:get_line_screen_position(line: any, col: any)
  -> unknown
  2. unknown
```

---

### get_line_text_y_offset

```lua
(method) core.docview:get_line_text_y_offset()
  -> unknown
```

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
```

---

### get_visible_line_range

```lua
(method) core.docview:get_visible_line_range()
  -> integer
  2. integer
```

---

### get_x_offset_col

```lua
(method) core.docview:get_x_offset_col(line: any, x: any)
  -> integer
```

---

### is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

### mouse_selection

```lua
(method) core.docview:mouse_selection(doc: any, snap_type: any, line1: any, col1: any, line2: any, col2: any)
  -> unknown
  2. integer|unknown
  3. unknown
  4. integer|unknown
```

---

### move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

### new

```lua
(method) widget.textbox.TextView:new(parent: any)
```

---

### on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> boolean
```

---

### on_ime_text_editing

```lua
(method) core.docview:on_ime_text_editing(text: any, start: any, length: any)
```

---

### on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

---

### on_mouse_moved

```lua
(method) core.docview:on_mouse_moved(x: number, y: number, ...any)
```

---

### on_mouse_pressed

```lua
(method) core.docview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean|nil
```

---

### on_mouse_released

```lua
(method) core.docview:on_mouse_released(...any)
```

---

### on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> boolean
```

@*param* `y` — Vertical scroll delta; positive is "up"

@*param* `x` — Horizontal scroll delta; positive is "left"

@*return* — Capture event

---

### on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

### on_text_input

```lua
(method) core.docview:on_text_input(text: string)
```

---

### on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

---

### resolve_screen_position

```lua
(method) core.docview:resolve_screen_position(x: any, y: any)
  -> number
  2. integer
```

---

### scroll_to_line

```lua
(method) core.docview:scroll_to_line(line: any, ignore_if_visible: any, instant: any)
```

---

### scroll_to_make_visible

```lua
(method) core.docview:scroll_to_make_visible(line: any, col: any)
```

---

### scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> boolean
```

---

### scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> boolean
```

---

### scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> boolean
```

---

### set_text

```lua
(method) widget.textbox.TextView:set_text(text: any, select: any)
```

---

### supports_text_input

```lua
(method) core.docview:supports_text_input()
  -> boolean
```

---

### try_close

```lua
(method) core.docview:try_close(do_close: any)
```

---

### update

```lua
(method) core.docview:update()
```

---

### update_ime_location

```lua
(method) core.docview:update_ime_location()
```

Update the composition bounding box that the system IME
will consider when drawing its interface

---

### update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

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
  -> core.object
```

Metamethod to allow using the object call as a constructor.

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
(method) widget:draw_styled_text(text: table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, x: integer, y: integer, only_calc?: boolean, start_idx?: integer, end_idx?: integer)
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
  -> core.object
```

---

## extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

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
  -> number
  2. number
  3. number
  4. number
```

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

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
  -> boolean
```

Check if the object is strictly of the given type.

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

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
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

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
(method) core.view:on_ime_text_editing(text: any, start: any, length: any)
```

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
(method) widget:schedule_update()
```

Schedule a core update and redraw. Since widgets try to not fire updates
and draws to child widgets to reduce cpu consumption this function can be
used when a re-update and re-draw is strictly needed.

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> boolean
```

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> boolean
```

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> boolean
```

---

## set_border_width

```lua
(method) widget:set_border_width(width: integer)
```

Set the widget border size and appropriately re-set the widget size.

---

## set_label

```lua
(method) widget:set_label(text: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>)
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
(method) widget:set_tooltip(tooltip?: string|table<integer, string|integer|renderer.color|renderer.font|widget.fontreference>, command?: string)
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
(method) core.view:try_close(do_close: any)
```

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

---

## update_size_position

```lua
(method) widget:update_size_position()
```

Similar to update, but here you should perform expensive calculations that
will get executed for a predefined period of time when a widget is
initialized, scale has changed or a widget switched from hidden to visible.

---

