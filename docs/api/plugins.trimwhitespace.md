---
sidebar_position: 71
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

@*param* `doc`: [`core.doc`](/docs/api/core.doc)

---

## enable

```lua
function plugins.trimwhitespace.enable(doc: core.doc)
```

Re-enable whitespace trimming if previously disabled.

@*param* `doc`: [`core.doc`](/docs/api/core.doc)

---

## trim

```lua
function plugins.trimwhitespace.trim(doc: core.doc)
```

Perform whitespace trimming in all lines of a document except the
line where the caret is currently positioned.

@*param* `doc`: [`core.doc`](/docs/api/core.doc)

---

## trim_empty_end_lines

```lua
function plugins.trimwhitespace.trim_empty_end_lines(doc: core.doc, raw_remove?: boolean)
```

Removes all empty new lines at the end of the document.

@*param* `doc`: [`core.doc`](/docs/api/core.doc)

@*param* `raw_remove?`: `boolean` — Perform the removal not registering to undo stack

---

