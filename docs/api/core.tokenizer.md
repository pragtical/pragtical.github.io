---
sidebar_position: 47
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.tokenizer

Functionality to tokenize source code using syntax definitions.

```lua
local tokenizer = require "core.tokenizer"
```

## each_token

```lua
function core.tokenizer.each_token(t: string[], scol?: integer)
  -> iterator: fun(state: any, idx: any):integer, string, string
  2. state: table
  3. idx: integer
```

Iterator for a sequence of tokens in the form \{type, token, ...\},
returning each pair of token type and token string.

@*param* `t` — List of tokens in the form \{type, token, ...\}

@*param* `scol` — The starting offset of all combined tokens.

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
  2. string|unknown
  3. table|nil
```

---

