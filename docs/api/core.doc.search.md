---
sidebar_position: 28
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.doc.search

Provides the base in-place search functionality for documents.

```lua
local search = require "core.doc.search"
```

## core.doc.searchoptions

Options used when performing a search.

### no_case

```lua
(field) no_case: boolean?
```

Perform case insensitive matches (ignored with lua patterns).

---

### pattern

```lua
(field) pattern: boolean?
```

The text to find is a Lua pattern.

---

### regex

```lua
(field) regex: boolean?
```

The text to find is a Regular expression.

---

### reverse

```lua
(field) reverse: boolean?
```

Execute the search backward instead of forward.

---

### whole_word

```lua
(field) whole_word: boolean?
```

Only match whole words.

---

### wrap

```lua
(field) wrap: boolean?
```

If the end of document is reached start again from the start.

---

## find

```lua
function core.doc.search.find(doc: core.doc, line: integer, col: integer, text: string, opt: core.doc.searchoptions)
  -> integer
  2. integer|unknown
  3. integer
  4. integer|unknown
```

Perform a search on a document with the given options.

---

