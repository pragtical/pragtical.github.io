---
sidebar_position: 17
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.commandview

```lua
local commandview = require "core.commandview"
```

## __index

```lua
(field) __index: core.object
```

---

## cache_font

```lua
(field) cache_font: unknown
```

---

## cache_font_size

```lua
(field) cache_font_size: unknown
```

---

## cache_indent_size

```lua
(field) cache_indent_size: unknown
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
(field) doc: any
```

---

## font

```lua
(field) font: string
```

---

## gutter_text_brightness

```lua
(field) gutter_text_brightness: integer
```

---

## gutter_width

```lua
(field) gutter_width: integer
```

---

## h_scrollbar

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
(field) ime_selection: table
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

---

## last_change_id

```lua
(field) last_change_id: integer
```

---

## last_col1

```lua
(field) last_col1: unknown
```

---

## last_col2

```lua
(field) last_col2: unknown
```

---

## last_line1

```lua
(field) last_line1: unknown
```

---

## last_line2

```lua
(field) last_line2: unknown
```

---

## last_text

```lua
(field) last_text: any
```

---

## last_x_offset

```lua
(field) last_x_offset: table
```

---

## mouse_position

```lua
(field) mouse_position: table
```

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## save_suggestion

```lua
(field) save_suggestion: unknown
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

## selection_offset

```lua
(field) selection_offset: integer
```

---

## size

```lua
(field) size: core.view.position
```

---

## suggestion_idx

```lua
(field) suggestion_idx: number|unknown
```

---

## suggestions

```lua
(field) suggestions: table
```

---

## suggestions_first

```lua
(field) suggestions_first: integer
```

---

## suggestions_height

```lua
(field) suggestions_height: integer
```

---

## suggestions_last

```lua
(field) suggestions_last: integer
```

---

## suggestions_offset

```lua
(field) suggestions_offset: integer
```

---

## super

```lua
(field) super: core.docview
```

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

## core.commandview.input

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

### convert

```lua
(field) convert: boolean
```

---

### crlf

```lua
(field) crlf: boolean
```

---

### encoding

```lua
(field) encoding: string
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
(method) core.object:__tostring()
  -> string
```

Metamethod to get a string representation of an object.

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
(method) core.doc:get_indent_string()
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
(method) core.doc:get_text(line1: any, col1: any, line2: any, col2: any)
  -> string
```

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
(method) core.commandview.input:insert(line: any, col: any, text: any)
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

### select_text

```lua
(field) select_text: boolean
```

---

### show_suggestions

```lua
(field) show_suggestions: boolean
```

---

### text

```lua
(field) text: string
```

---

### typeahead

```lua
(field) typeahead: boolean
```

---

### wrap

```lua
(field) wrap: boolean
```

---

### cancel

```lua
function
```

---

### submit

```lua
function
```

---

### suggest

```lua
function
```

---

### validate

```lua
function
```

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
(method) core.object:__tostring()
  -> string
```

Metamethod to get a string representation of an object.

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

---

## complete

```lua
(method) core.commandview:complete()
```

---

## draw

```lua
(method) core.commandview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

---

## draw_caret

```lua
(method) core.docview:draw_caret(x: any, y: any, line: any, col: any)
```

---

## draw_ime_decoration

```lua
(method) core.docview:draw_ime_decoration(line1: any, col1: any, line2: any, col2: any)
```

---

## draw_line_body

```lua
(method) core.docview:draw_line_body(line: any, x: any, y: any)
  -> integer
```

---

## draw_line_gutter

```lua
(method) core.commandview:draw_line_gutter(idx: any, x: any, y: any)
  -> integer
```

---

## draw_line_highlight

```lua
(method) core.commandview:draw_line_highlight()
```

---

## draw_line_text

```lua
(method) core.docview:draw_line_text(line: any, x: any, y: any)
  -> integer
```

---

## draw_overlay

```lua
(method) core.docview:draw_overlay()
```

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

---

## enter

```lua
(method) core.commandview:enter(label: string, ...any)
```

---

## exit

```lua
(method) core.commandview:exit(submitted: any, inexplicit: any)
```

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

## get_col_x_offset

```lua
(method) core.docview:get_col_x_offset(line: any, col: any)
  -> integer|unknown
```

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

## get_filename

```lua
(method) core.docview:get_filename()
  -> string|unknown
```

---

## get_font

```lua
(method) core.docview:get_font()
  -> unknown
```

---

## get_gutter_width

```lua
(method) core.commandview:get_gutter_width()
  -> integer
```

---

## get_h_scrollable_size

```lua
(method) core.commandview:get_h_scrollable_size()
  -> integer
```

---

## get_line_height

```lua
(method) core.commandview:get_line_height()
  -> integer
```

---

## get_line_screen_position

```lua
(method) core.commandview:get_line_screen_position(line: any, col: any)
  -> unknown
  2. number
```

---

## get_line_text_y_offset

```lua
(method) core.docview:get_line_text_y_offset()
  -> unknown
```

---

## get_name

```lua
(method) core.commandview:get_name()
  -> string
```

---

## get_scrollable_size

```lua
(method) core.commandview:get_scrollable_size()
  -> integer
```

---

## get_suggestion_line_height

```lua
(method) core.commandview:get_suggestion_line_height()
  -> unknown
```

---

## get_text

```lua
(method) core.commandview:get_text()
```

---

## get_visible_line_range

```lua
(method) core.docview:get_visible_line_range()
  -> integer
  2. integer
```

---

## get_x_offset_col

```lua
(method) core.docview:get_x_offset_col(line: any, x: any)
  -> integer
```

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

## is_mouse_on_suggestions

```lua
(method) core.commandview:is_mouse_on_suggestions()
  -> mouse_on_top: boolean
```

Check if the mouse is hovering the suggestions box.

---

## mouse_selection

```lua
(method) core.docview:mouse_selection(doc: any, snap_type: any, line1: any, col1: any, line2: any, col2: any)
  -> unknown
  2. integer|unknown
  3. unknown
  4. integer|unknown
```

---

## move_suggestion_idx

```lua
(method) core.commandview:move_suggestion_idx(dir: any)
```

---

## move_towards

```lua
(method) core.view:move_towards(t: any, k: any, dest: any, rate: any, name: any)
```

---

## new

```lua
(method) core.commandview:new()
```

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> boolean
```

---

## on_ime_text_editing

```lua
(method) core.docview:on_ime_text_editing(text: any, start: any, length: any)
```

---

## on_mouse_left

```lua
(method) core.view:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.commandview:on_mouse_moved(x: number, y: number, ...any)
  -> boolean
```

---

## on_mouse_pressed

```lua
(method) core.commandview:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> boolean
```

---

## on_mouse_released

```lua
(method) core.commandview:on_mouse_released(...any)
  -> boolean
```

---

## on_mouse_wheel

```lua
(method) core.commandview:on_mouse_wheel(y: number, ...any)
  -> boolean
```

---

## on_scale_change

```lua
(method) core.view:on_scale_change(new_scale: number, prev_scale: number)
```

Can be overriden to listen for scale change events to apply
any neccesary changes in sizes, padding, etc...

---

## on_text_input

```lua
(method) core.docview:on_text_input(text: string)
```

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

---

## resolve_screen_position

```lua
(method) core.docview:resolve_screen_position(x: any, y: any)
  -> number
  2. integer
```

---

## scroll_to_line

```lua
(method) core.docview:scroll_to_line(line: any, ignore_if_visible: any, instant: any)
```

---

## scroll_to_make_visible

```lua
(method) core.commandview:scroll_to_make_visible()
```

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

## set_hidden_suggestions

```lua
(method) core.commandview:set_hidden_suggestions()
```

---

## set_text

```lua
(method) core.commandview:set_text(text: any, select: any)
```

---

## submit

```lua
(method) core.commandview:submit()
```

---

## supports_text_input

```lua
(method) core.commandview:supports_text_input()
  -> boolean
```

---

## try_close

```lua
(method) core.docview:try_close(do_close: any)
```

---

## update

```lua
(method) core.commandview:update()
```

---

## update_ime_location

```lua
(method) core.docview:update_ime_location()
```

Update the composition bounding box that the system IME
will consider when drawing its interface

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

---

## update_suggestions

```lua
(method) core.commandview:update_suggestions()
```

---

