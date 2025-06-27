---
sidebar_position: 38
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.tokenizer

Functionality to tokenize source code using syntax definitions.

```lua
local tokenizer = require "core.tokenizer"
```

## each_token

```lua
function core.tokenizer.each_token(t: any, scol: any)
  -> fun(...any):...unknown
```

---

## extract_subsyntaxes

```lua
function core.tokenizer.extract_subsyntaxes(base_syntax: table, state: string)
  -> table
```

Return the list of syntaxes used in the specified state.

@*param* `base_syntax` — The initial base syntax (the syntax of the file)

@*param* `state` — The state of the tokenizer to extract from

@*return* — Array of syntaxes starting from the innermost one

---

## tokenize

```lua
function core.tokenizer.tokenize(incoming_syntax: table, text: string, state: string, resume: any)
  -> table|unknown
  2. string
  3. table|nil
```

---

