---
sidebar_position: 44
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.autocomplete

```lua
local autocomplete = require "plugins.autocomplete"
```

## icons

```lua
(field) icons: table<string, plugins.autocomplete.icon>
```

---

## map_manually

```lua
(field) map_manually: table<string, plugins.autocomplete.map>
```

---

## on_close

```lua
(field) on_close: fun(doc: core.doc, item: plugins.autocomplete.symbolinfo)|nil
```

---

## config.plugins.autocomplete

Configuration options for `autocomplete` plugin.

### desc_font_size

```lua
(field) desc_font_size: number
```

Font size of the description box

---

### hide_icons

```lua
(field) hide_icons: boolean
```

Do not show the icons associated to the suggestions

---

### hide_info

```lua
(field) hide_info: boolean
```

Do not show the additional information related to a suggestion

---

### icon_position

```lua
(field) icon_position: "left"|"right"
```

Position where icons will be displayed on the suggestions list

---

### max_height

```lua
(field) max_height: integer
```

The max amount of visible items

---

### max_suggestions

```lua
(field) max_suggestions: integer
```

The max amount of scrollable items

---

### max_symbols

```lua
(field) max_symbols: integer
```

Maximum amount of symbols to cache per document

---

### min_len

```lua
(field) min_len: integer
```

Amount of characters that need to be written for autocomplete

---

### suggestions_scope

```lua
(field) suggestions_scope: "global"|"local"|"none"|"related"
```

Which symbols to show on the suggestions list: global, local, related, none

---

## plugins.autocomplete.cachedata

### last_change_id

```lua
(field) last_change_id: number
```

---

### symbols

```lua
(field) symbols: table<string, boolean>
```

---

## plugins.autocomplete.icon

### char

```lua
(field) char: string
```

---

### color

```lua
(field) color: string|renderer.color
```

Array of bytes that represents a color used by the rendering functions.

---

### font

```lua
(field) font: renderer.font
```

---

## plugins.autocomplete.map

### files

```lua
(field) files: string|table<integer, string>
```

Lua patterns which match the files where the symbols are valid.

---

### items

```lua
(field) items: table<string, plugins.autocomplete.symbolinfo>
```

List of symbols that belong to this symbols table.

---

## plugins.autocomplete.symbolinfo

### data

```lua
(field) data: any
```

Optional data that can be used for onhover and onselect callbacks.

---

### desc

```lua
(field) desc: string?
```

Description shown when the symbol is hovered on the autocomplete box.

---

### icon

```lua
(field) icon: string?
```

Name of a registered icon.

---

### info

```lua
(field) info: string?
```

Additional information displayed on autocomplete box, eg: item type.

---

### onhover

```lua
(field) onhover: fun(idx: integer, item: plugins.autocomplete.symbolinfo)?
```

An optional callback called once when the symbol is hovered.

---

### onselect

```lua
(field) onselect: (fun(idx: integer, item: plugins.autocomplete.symbolinfo):boolean)?
```

---

### text

```lua
(field) text: string
```

Text value of the symbol displayed on the autocomplete box.

---

## plugins.autocomplete.symbols

### files

```lua
(field) files: string|table<integer, string>
```

Lua patterns which match the files where the symbols are valid.

---

### items

```lua
(field) items: table<string, string|plugins.autocomplete.symbolinfo|false|nil>
```

List of symbols that belong to this symbols table.

---

### name

```lua
(field) name: string
```

Name of the symbols table.

---

## add

```lua
function plugins.autocomplete.add(t: plugins.autocomplete.symbols, manually_triggered?: boolean)
```

Register a symbols table used for autocompletion.

---

## add_icon

```lua
function plugins.autocomplete.add_icon(name: string, character: string, font?: renderer.font, color?: string|renderer.color)
```

Register a font icon that can be assigned to completion items.

@*param* `color` — A style.syntax\[\] name or specific color

---

## can_complete

```lua
function plugins.autocomplete.can_complete()
  -> boolean
```

Check if autocomplete can be triggered by checking if current
partial symbol meets the required minimum autocompletion len.

---

## close

```lua
function plugins.autocomplete.close()
```

Manually close the completions list.

---

## complete

```lua
function plugins.autocomplete.complete(completions: plugins.autocomplete.symbols, on_close?: fun(doc: core.doc, item: plugins.autocomplete.symbolinfo))
```

Manually invoke the completion list using the provided symbols.

---

## get_partial_symbol

```lua
function plugins.autocomplete.get_partial_symbol()
  -> partial: string
  2. line1: integer
  3. col1: integer
  4. line2: integer
  5. col2: integer
```

Retrieve the current document partial symbol.

---

## is_open

```lua
function plugins.autocomplete.is_open()
  -> boolean
```

Check if the completion lists is visible.

---

## open

```lua
function plugins.autocomplete.open(on_close?: fun(doc: core.doc, item: plugins.autocomplete.symbolinfo))
```

Manually invoke the completion list using already registered symbols.

---

