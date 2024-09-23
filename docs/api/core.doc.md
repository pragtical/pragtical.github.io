---
sidebar_position: 22
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.doc

```lua
local doc = require "core.doc"
```

## __index

```lua
(field) __index: core.object
```

---

## abs_filename

```lua
(field) abs_filename: any
```

---

## binary

```lua
(field) binary: boolean
```

---

## cache

```lua
(field) cache: table
```

---

## clean_change_id

```lua
(field) clean_change_id: integer
```

---

## clean_lines

```lua
(field) clean_lines: table
```

---

## convert

```lua
(field) convert: boolean
```

---

## crlf

```lua
(field) crlf: boolean
```

---

## encoding

```lua
(field) encoding: string
```

---

## filename

```lua
(field) filename: any
```

---

## highlighter

```lua
(field) highlighter: unknown
```

---

## last_selection

```lua
(field) last_selection: number
```

---

## lines

```lua
(field) lines: table
```

---

## new_file

```lua
(field) new_file: any
```

---

## overwrite

```lua
(field) overwrite: boolean
```

---

## redo_stack

```lua
(field) redo_stack: table
```

---

## selections

```lua
(field) selections: table
```

---

## super

```lua
(field) super: core.object
```

---

## syntax

```lua
(field) syntax: table|unknown
```

---

## undo_stack

```lua
(field) undo_stack: table
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

## add_selection

```lua
(method) core.doc:add_selection(line1: any, col1: any, line2: any, col2: any, swap: any)
```

---

## clean

```lua
(method) core.doc:clean()
```

---

## clear_cache

```lua
(method) core.doc:clear_cache(l: any, n: any)
```

---

## delete_to

```lua
(method) core.doc:delete_to(...any)
```

---

## delete_to_cursor

```lua
(method) core.doc:delete_to_cursor(idx: any, ...any)
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

## get_change_id

```lua
(method) core.doc:get_change_id()
  -> integer
```

---

## get_char

```lua
(method) core.doc:get_char(line: any, col: any)
  -> string
```

---

## get_indent_info

```lua
(method) core.doc:get_indent_info()
  -> "hard"|"soft"
  2. number
  3. boolean
```

---

## get_indent_string

```lua
(method) core.doc:get_indent_string()
  -> string
```

---

## get_line_indent

```lua
(method) core.doc:get_line_indent(line: any, rnd_up: any)
  -> unknown
  2. string
  3. integer|nil
```

returns the size of the original indent, and the indent
 in your config format, rounded either up or down

---

## get_name

```lua
(method) core.doc:get_name()
  -> unknown
```

---

## get_non_word_chars

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

## get_selection

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

## get_selection_idx

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

## get_selection_text

```lua
(method) core.doc:get_selection_text(limit: any)
  -> string
```

---

## get_selections

```lua
(method) core.doc:get_selections(sort_intra: any, idx_reverse: any)
  -> function
  2. table
  3. number
```

If idx_reverse is true, it'll reverse iterate. If nil, or false, regular iterate.
 If a number, runs for exactly that iteration.

---

## get_symbol_pattern

```lua
(method) core.doc:get_symbol_pattern()
  -> string
```

Get the lua pattern used to match symbols taking into account current subsyntax.

---

## get_text

```lua
(method) core.doc:get_text(line1: any, col1: any, line2: any, col2: any)
  -> string
```

---

## get_utf8_line

```lua
(method) core.doc:get_utf8_line(idx: integer)
  -> string
```

Always returns a valid utf8 line even if the file contains binary data.

---

## has_any_selection

```lua
(method) core.doc:has_any_selection()
  -> boolean
```

---

## has_selection

```lua
(method) core.doc:has_selection()
  -> boolean
```

---

## ime_text_editing

```lua
(method) core.doc:ime_text_editing(text: any, start: any, length: any, idx: any)
```

---

## indent_text

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

## insert

```lua
(method) core.doc:insert(line: any, col: any, text: any)
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

## is_dirty

```lua
(method) core.doc:is_dirty()
  -> boolean
```

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

## load

```lua
(method) core.doc:load(filename: any)
```

---

## merge_cursors

```lua
(method) core.doc:merge_cursors(idx: any)
```

---

## move_to

```lua
(method) core.doc:move_to(...any)
```

---

## move_to_cursor

```lua
(method) core.doc:move_to_cursor(idx: any, ...any)
```

---

## new

```lua
(method) core.doc:new(filename: any, abs_filename: any, new_file: any)
```

---

## on_close

```lua
(method) core.doc:on_close()
```

For plugins to get notified when a document is closed

---

## on_text_change

```lua
(method) core.doc:on_text_change(type: any)
```

For plugins to add custom actions of document change

---

## position_offset

```lua
(method) core.doc:position_offset(line: any, col: any, ...any)
```

---

## raw_insert

```lua
(method) core.doc:raw_insert(line: any, col: any, text: any, undo_stack: any, time: any)
```

---

## raw_remove

```lua
(method) core.doc:raw_remove(line1: any, col1: any, line2: any, col2: any, undo_stack: any, time: any)
```

---

## redo

```lua
(method) core.doc:redo()
```

---

## reload

```lua
(method) core.doc:reload()
```

---

## remove

```lua
(method) core.doc:remove(line1: any, col1: any, line2: any, col2: any)
```

---

## remove_selection

```lua
(method) core.doc:remove_selection(idx: any)
```

---

## replace

```lua
(method) core.doc:replace(fn: any)
  -> table
```

---

## replace_cursor

```lua
(method) core.doc:replace_cursor(idx: any, line1: any, col1: any, line2: any, col2: any, fn: any)
  -> unknown
```

---

## reset

```lua
(method) core.doc:reset()
```

---

## reset_syntax

```lua
(method) core.doc:reset_syntax()
```

---

## sanitize_position

```lua
(method) core.doc:sanitize_position(line: any, col: any)
  -> integer
  2. number
```

---

## sanitize_selection

```lua
(method) core.doc:sanitize_selection()
```

---

## save

```lua
(method) core.doc:save(filename: any, abs_filename: any)
```

---

## select_to

```lua
(method) core.doc:select_to(...any)
```

---

## select_to_cursor

```lua
(method) core.doc:select_to_cursor(idx: any, ...any)
```

---

## set_filename

```lua
(method) core.doc:set_filename(filename: any, abs_filename: any)
```

---

## set_selection

```lua
(method) core.doc:set_selection(line1: any, col1: any, line2: any, col2: any, swap: any)
```

---

## set_selections

```lua
(method) core.doc:set_selections(idx: any, line1: any, col1: any, line2: any, col2: any, swap: any, rm: any)
```

---

## text_input

```lua
(method) core.doc:text_input(text: any, idx: any)
```

---

## undo

```lua
(method) core.doc:undo()
```

---

