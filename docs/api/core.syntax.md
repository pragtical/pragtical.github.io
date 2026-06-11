---
sidebar_position: 49
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.syntax

Functions to add and get syntax definitions.

```lua
local syntax = require "core.syntax"
```

## items

```lua
(field) items: core.syntax.syntax[]
```

---

## plain_text_syntax

```lua
(field) plain_text_syntax: core.syntax.syntax
```

A language syntax definition used by syntax plugins and tokenizers.

---

## core.syntax.matcher

## core.syntax.pattern

A single tokenization rule in a syntax definition.

Exactly one of `pattern` or `regex` should be set. A string matcher is used
for a single token; a table matcher is used as `\{ opener, closer, escape? \}`
for a multi-token region that may optionally enter a nested syntax.

### disabled

```lua
(field) disabled: boolean?
```

True when the rule should be ignored by tokenizers.

---

### pattern

```lua
(field) pattern: (string|string[])?
```

Lua pattern matcher.

---

### regex

```lua
(field) regex: (string|string[])?
```

Regex matcher.

---

### syntax

```lua
(field) syntax: (string|core.syntax.syntax)?
```

Nested syntax table or syntax lookup key.

---

### type

```lua
(field) type: (string|string[])?
```

Token type, or capture token types.

---

## core.syntax.syntax

A language syntax definition used by syntax plugins and tokenizers.

### block_comment

```lua
(field) block_comment: string[]?
```

Pair of block comment delimiters.

---

### comment

```lua
(field) comment: string?
```

Single-line comment marker.

---

### files

```lua
(field) files: (string|string[])?
```

Lua patterns matched against file paths.

---

### headers

```lua
(field) headers: (string|string[])?
```

Lua patterns matched against file headers.

---

### name

```lua
(field) name: string?
```

Display name of the syntax.

---

### patterns

```lua
(field) patterns: core.syntax.pattern[]
```

Tokenization rules.

---

### space_handling

```lua
(field) space_handling: boolean?
```

Whether `syntax.add` should append whitespace optimization rules.

---

### symbol_pattern

```lua
(field) symbol_pattern: string?
```

Lua pattern used for document symbols.

---

### symbols

```lua
(field) symbols: table<string, string>
```

Token type overrides for exact symbol text.

---

## core.syntax.token_type

## add

```lua
function core.syntax.add(t: core.syntax.syntax)
```

Register a syntax definition.

The syntax is appended to the syntax registry and later entries take
precedence when file or header patterns have the same match length. Syntax
patterns are validated before registration; malformed token patterns are
disabled and reported with `core.warn`.

@*param* `t` — Syntax definition to register.

---

## get

```lua
function core.syntax.get(filename?: string, header?: string)
  -> syntax: core.syntax.syntax
```

Return the best syntax for a file path or header.

File path patterns are checked first, followed by header patterns. When no
registered syntax matches, this returns `syntax.plain_text_syntax`.

@*param* `filename` — File path or name used for `files` pattern matching.

@*param* `header` — Initial file contents used for `headers` pattern matching.

@*return* `syntax` — Best matching syntax, or plain text.

---

