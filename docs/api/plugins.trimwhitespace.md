---
sidebar_position: 56
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.trimwhitespace

```lua
local trimwhitespace = require "plugins.trimwhitespace"
```

## config.plugins.trimwhitespace

Configuration options for `trimwhitespace` plugin.

### enabled

```lua
(field) enabled: boolean
```

Disable or enable the trimming of white spaces by default.

---

### trim_empty_end_lines

```lua
(field) trim_empty_end_lines: boolean
```

Remove any empty new lines at the end of documents.

---

## disable

```lua
function plugins.trimwhitespace.disable(doc: core.doc)
```

Disable whitespace trimming for a specific document.

---

## enable

```lua
function plugins.trimwhitespace.enable(doc: core.doc)
```

Re-enable whitespace trimming if previously disabled.

---

## trim

```lua
function plugins.trimwhitespace.trim(doc: core.doc)
```

Perform whitespace trimming in all lines of a document except the
line where the caret is currently positioned.

---

## trim_empty_end_lines

```lua
function plugins.trimwhitespace.trim_empty_end_lines(doc: core.doc, raw_remove?: boolean)
```

Removes all empty new lines at the end of the document.

@*param* `raw_remove` — Perform the removal not registering to undo stack

---

