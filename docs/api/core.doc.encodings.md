---
sidebar_position: 25
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.doc.encodings

Helper functions to change a document encoding.

```lua
local encodings = require "core.doc.encodings"
```

## groups

```lua
(field) groups: table<integer, string>
```

List of encoding regions.

---

## list

```lua
(field) list: table<integer, encodings.encoding[]>
```

Supported iconv encodings grouped by region.

---

## encodings.encoding

### charset

```lua
(field) charset: string
```

---

### name

```lua
(field) name: string
```

---

## get_all

```lua
function core.doc.encodings.get_all()
  -> encodings.encoding[]|nil
```

Get a list of all encodings.

---

## get_group

```lua
function core.doc.encodings.get_group(label: string)
  -> encodings.encoding[]|nil
```

Get the list of encodings associated to a region.

---

## select_encoding

```lua
function core.doc.encodings.select_encoding(title_label: string, callback: fun(charset: string))
```

Open a commandview to select a charset and executes the given callback,

@*param* `title_label` — Title displayed on the commandview

---

