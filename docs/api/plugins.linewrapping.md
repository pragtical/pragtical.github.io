---
sidebar_position: 46
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.linewrapping

```lua
local linewrapping = require "plugins.linewrapping"
```

## config.plugins.linewrapping

Configuration options for `linewrapping` plugin.

### enable_by_default

```lua
(field) enable_by_default: boolean
```

Whether or not to enable wrapping by default when opening files.

---

### guide

```lua
(field) guide: boolean
```

Whether or not to draw a guide

---

### indent

```lua
(field) indent: boolean
```

Whether or not we should indent ourselves like the first line of a wrapped block.

---

### mode

```lua
(field) mode: "letter"|"word"
```

The type of wrapping to perform. Can be "letter" or "word".

---

### require_tokenization

```lua
(field) require_tokenization: boolean
```

Requires tokenization

---

### width_override

```lua
(field) width_override: (number|function)?
```

():number

---

## compute_line_breaks

```lua
function plugins.linewrapping.compute_line_breaks(doc: any, default_font: any, line: any, width: any, mode: any)
  -> table
  2. integer
```

Computes the breaks for a given line, width and mode. Returns a list of columns
 at which the line should be broken.

---

## draw_guide

```lua
function plugins.linewrapping.draw_guide(docview: any)
```

Draws a guide if applicable to show where wrapping is occurring.

---

## reconstruct_breaks

```lua
function plugins.linewrapping.reconstruct_breaks(docview: any, default_font: any, width: any, line_offset: any)
```

breaks are held in a single table that contains n*2 elements, where n is the amount of line breaks.
 each element represents line and column of the break. line_offset will check from the specified line
 if the first line has not changed breaks, it will stop there.

---

## update_breaks

```lua
function plugins.linewrapping.update_breaks(docview: any, old_line1: any, old_line2: any, net_lines: any)
```

When we have an insertion or deletion, we have four sections of text.
 1. The unaffected section, located prior to the cursor. This is completely ignored.
 2. The beginning of the affected line prior to the insertion or deletion. Begins on column 1 of the selection.
 3. The removed/pasted lines.
 4. Every line after the modification, begins one line after the selection in the initial document.

---

## update_docview_breaks

```lua
function plugins.linewrapping.update_docview_breaks(docview: any)
```

---

