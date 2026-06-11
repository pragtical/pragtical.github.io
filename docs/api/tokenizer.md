---
sidebar_position: 18
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# tokenizer

Native tokenizer module.

This module provides the native tokenizer backend used by
`core.tokenizer` when native tokenization is enabled.

## tokenizer.pattern_stats

Per-pattern native tokenizer compilation and runtime counters.

### close_code

```lua
(field) close_code: string?
```

Closer pattern code used by the native tokenizer.

---

### close_fast_kind

```lua
(field) close_fast_kind: integer
```

Native fast-path kind used by the closer pattern.

---

### code

```lua
(field) code: string?
```

Opener pattern code used by the native tokenizer.

---

### fallback_match_calls

```lua
(field) fallback_match_calls: integer
```

Number of fallback matcher calls for this pattern.

---

### fast_kind

```lua
(field) fast_kind: integer
```

Native fast-path kind used by the opener pattern.

---

### pattern

```lua
(field) pattern: string?
```

Display pattern from the syntax definition.

---

### skipped_by_starter

```lua
(field) skipped_by_starter: integer
```

Number of matches skipped by starter filtering.

---

### unknown_starter

```lua
(field) unknown_starter: boolean
```

True when the opener pattern has unknown start bytes.

---

## tokenizer.resume

Resume information returned by `tokenizer.tokenize()` when tokenization
does not finish within the current frame budget.

### i

```lua
(field) i: integer
```

Next character position to continue tokenizing from.

---

### res

```lua
(field) res: string[]
```

Accumulated tokens in the form `\{ type, text, ... \}`.

---

### state

```lua
(field) state: string
```

Tokenizer state that should be reused on resume.

---

## tokenizer.syntax_stats

Native tokenizer compilation and runtime counters for a syntax.

### compiled_patterns

```lua
(field) compiled_patterns: integer
```

Number of patterns with a native fast path.

---

### fallback_match_calls

```lua
(field) fallback_match_calls: integer
```

Number of fallback matcher calls for this syntax.

---

### fallback_patterns

```lua
(field) fallback_patterns: integer
```

Number of patterns using the fallback matcher.

---

### has_unknown_starters

```lua
(field) has_unknown_starters: boolean
```

True when any pattern has unknown start bytes.

---

### normal_run_skips

```lua
(field) normal_run_skips: integer
```

Number of normal text runs skipped by starter filtering.

---

### pattern_stats

```lua
(field) pattern_stats: tokenizer.pattern_stats[]
```

Per-pattern counters.

---

### patterns

```lua
(field) patterns: integer
```

Number of patterns imported from the syntax.

---

### skipped_by_starter

```lua
(field) skipped_by_starter: integer
```

Number of matches skipped by starter filtering.

---

## extract_subsyntaxes

```lua
function tokenizer.extract_subsyntaxes(base_syntax: core.syntax.syntax, state: string)
  -> syntaxes: core.syntax.syntax[]
```

Return the list of syntaxes active for the given tokenizer state.

@*param* `base_syntax` — The base syntax of the document.

@*param* `state` — Tokenizer state previously returned by `tokenize`.


@*return* `syntaxes` — Array of syntaxes starting from the innermost one.

---

## get_syntax_stats

```lua
function tokenizer.get_syntax_stats(syntax: core.syntax.syntax)
  -> stats: tokenizer.syntax_stats
```

Return native tokenizer compilation and runtime counters for a syntax.

@*param* `syntax` — The syntax to inspect.


@*return* `stats` — Native compilation and runtime counters.

---

## tokenize

```lua
function tokenizer.tokenize(incoming_syntax: core.syntax.syntax, text: string, state?: string, resume?: tokenizer.resume)
  -> tokens: string[]
  2. state: string
  3. resume: (tokenizer.resume)?
```

Tokenize a single line of text using the given syntax and state.

Returns tokens in the form `\{ type, text, ... \}`.
If the tokenizer runs out of time, it returns a third value containing the
resume data to continue tokenizing the same line later.

@*param* `incoming_syntax` — The syntax to tokenize against.

@*param* `text` — The line text to tokenize.

@*param* `state` — Current tokenizer state.

@*param* `resume` — Resume data from a previous incomplete call.


@*return* `tokens` — Tokens in the form `\{ type, text, ... \}`.

@*return* `state` — Updated tokenizer state.

@*return* `resume` — Resume data when tokenization yields before finishing.

---

