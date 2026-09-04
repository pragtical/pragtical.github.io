---
sidebar_position: 52
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.tokenizer

Functionality to tokenize source code using syntax definitions.

This module can switch between the Lua tokenizer implementation and the
native tokenizer implementation at runtime.

```lua
local tokenizer = require "core.tokenizer"
```

## clear_native_cache

```lua
function core.tokenizer.clear_native_cache(root_syntax?: core.syntax.syntax)
```

Clear cached native syntax userdata for known syntaxes.

This should be called when switching tokenizer backends so syntax tables are
reimported by the native tokenizer on their next use.

@*param* `root_syntax?`: [`core.syntax.syntax`](/docs/api/core.syntax#coresyntaxsyntax) — Optional syntax table to clear before clearing the global syntax registries.

---

## each_token

```lua
function core.tokenizer.each_token(t: string[], scol?: integer)
  -> iterator: fun(state: any, idx: any):integer, string, string
  2. state: table
  3. idx: integer
```

Iterator for a sequence of tokens in the form \{type, token, ...\},
returning each pair of token type and token string.

@*param* `t`: `string[]` — List of tokens in the form \{type, token, ...\}

@*param* `scol?`: `integer` — The starting offset of all combined tokens.

@*return* `iterator`: `fun(state: any, idx: any):integer, string, string`

@*return* `state`: `table`

@*return* `idx`: `integer`

---

## extract_subsyntaxes

```lua
function core.tokenizer.extract_subsyntaxes(base_syntax: core.syntax.syntax, state: string)
  -> syntaxes: core.syntax.syntax[]
```

Return the list of syntaxes active for a tokenizer state.

@*param* `base_syntax`: [`core.syntax.syntax`](/docs/api/core.syntax#coresyntaxsyntax) — The base syntax of the document.

@*param* `state`: `string` — Tokenizer state previously returned by `tokenize`.

@*return* `syntaxes`: [`core.syntax.syntax`](/docs/api/core.syntax#coresyntaxsyntax)`[]` — Array of syntaxes starting from the innermost one.

---

## get_syntax_stats

```lua
function core.tokenizer.get_syntax_stats(syntax: core.syntax.syntax)
  -> table?
```

Return native tokenizer compilation and runtime counters for a syntax.

The pure Lua backend has no compiled representation, so this returns nil
unless the native backend is active.

@*param* `syntax`: [`core.syntax.syntax`](/docs/api/core.syntax#coresyntaxsyntax) — A language syntax definition used by syntax plugins and tokenizers.

---

## is_using_native

```lua
function core.tokenizer.is_using_native()
  -> enabled: boolean
```

Check whether tokenization is currently using the native backend.

@*return* `enabled`: `boolean` — True when the native tokenizer is active.

---

## set_use_native

```lua
function core.tokenizer.set_use_native(enabled: boolean)
  -> enabled: boolean
```

Enable or disable the native tokenizer backend.

When enabled, tokenization is delegated to the native module. When disabled,
the pure Lua implementation in this file is used instead.

@*return* `enabled`: `boolean` — True when the native backend is active after the call.

---

## tokenize

```lua
function core.tokenizer.tokenize(incoming_syntax: core.syntax.syntax, text: string, state?: string, resume?: table)
  -> tokens: string[]
  2. state: string
  3. resume: table?
```

Tokenize a single line of text for the given syntax and state.

Returns tokens in the form `\{ type, text, ... \}`. When the tokenizer runs
out of time, a third return value is included with resume information that
can be passed back into this function to continue tokenizing the same line.

@*param* `incoming_syntax`: [`core.syntax.syntax`](/docs/api/core.syntax#coresyntaxsyntax) — The syntax to tokenize against.

@*param* `text`: `string` — The line text to tokenize.

@*param* `state?`: `string` — Current tokenizer state.

@*param* `resume?`: `table` — Resume information returned by a previous incomplete call.

@*return* `tokens`: `string[]` — Tokens in the form `\{ type, text, ... \}`.

@*return* `state`: `string` — Updated tokenizer state.

@*return* `resume`: `table?` — Resume data when tokenization yields before finishing.

---

