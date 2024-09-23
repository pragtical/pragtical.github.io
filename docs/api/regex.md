---
sidebar_position: 6
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# regex

Provides the base functionality for regular expressions matching.

## ANCHORED

```lua
(field) ANCHORED: integer
```

Instruct regex:cmatch() to match only at the first position.

---

## ENDANCHORED

```lua
(field) ENDANCHORED: integer
```

Tell regex:cmatch() that the pattern can match only at end of subject.

---

## NOTBOL

```lua
(field) NOTBOL: integer
```

Tell regex:cmatch() that subject string is not the beginning of a line.

---

## NOTEMPTY

```lua
(field) NOTEMPTY: integer
```

Tell regex:cmatch() that an empty string is not a valid match.

---

## NOTEMPTY_ATSTART

```lua
(field) NOTEMPTY_ATSTART: integer
```

Tell regex:cmatch() that an empty string at the start of the
subject is not a valid match.

---

## NOTEOL

```lua
(field) NOTEOL: integer
```

Tell regex:cmatch() that subject string is not the end of a line.

---

## cmatch

```lua
function regex.cmatch(pattern: string|regex, subject: string, offset?: integer, options?: integer)
  -> ...integer?
```

Search a string for valid matches and returns a list of matching offsets.

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

@*param* `subject` — The string to search for valid matches.

@*param* `offset` — The position on the subject to start searching.

@*param* `options` — A bit field of matching options, eg:

regex.NOTBOL | regex.NOTEMPTY

@*return* `...` — List of offsets where a match was found.

---

## compile

```lua
function regex.compile(pattern: string, options?: "i"|"m"|"s")
  -> regex: regex?
  2. error: string?
```

Compiles a regular expression pattern that can be used to search in strings.

@*param* `options` — A string of one or more pattern modifiers.


@*return* `regex` — Ready to use regular expression object or nil on error.

@*return* `error` — The error message if compiling the pattern failed.

```lua
options:
    | "i" -- Case insesitive matching
    | "m" -- Multiline matching
    | "s" -- Match all characters with dot (.) metacharacter even new lines
```

---

## find

```lua
function regex.find(pattern: string|regex, subject: string, offset?: integer, options?: integer)
  -> start: integer?
  2. end: integer?
  3. ...(string|integer)?
```

Behaves like `string.find`.
Looks for the first match of `pattern` in the string `str`.
If it finds a match, it returns the indices of `str` where this occurrence
starts and ends; otherwise, it returns `nil`.
If the pattern has captures, the captured strings are returned,
after the two indexes ones.
If a capture is empty, its offset is returned instead.

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

@*param* `subject` — The string to search for valid matches.

@*param* `offset` — The position on the subject to start searching.

@*param* `options` — A bit field of matching options, eg:

regex.NOTBOL | regex.NOTEMPTY

@*return* `start` — Offset where the first match was found; `nil` if no match.

@*return* `end` — Offset where the first match ends; `nil` if no match.

@*return* `...` — List of captured matches; if the match is empty, its offset is returned instead.

---

## find_offsets

```lua
function regex.find_offsets(pattern: string|regex, subject: string, offset?: integer, options?: integer)
  -> start: integer?
  2. end: integer?
  3. ...integer?
```

Looks for the first match of `pattern` in the string `subject`.
If it finds a match, it returns the indices of `subject` where this occurrence
starts and ends; otherwise, it returns `nil`.
If the pattern has captures, the captured start and end indexes are returned,
after the two initial ones.

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

@*param* `subject` — The string to search for valid matches.

@*param* `offset` — The position on the subject to start searching.

@*param* `options` — A bit field of matching options, eg:

regex.NOTBOL | regex.NOTEMPTY

@*return* `start` — Offset where the first match was found; `nil` if no match.

@*return* `end` — Offset where the first match ends; `nil` if no match.

@*return* `...` — Captured matches offsets.

---

## gmatch

```lua
function regex.gmatch(pattern: string|regex, subject: string, offset?: integer)
  -> fun():string, ...unknown
```

Returns an iterator function that, each time it is called, returns the
next captures from `pattern` over the string subject.

Example:
```lua
    s = "hello world hello world"
    for hello, world in regex.gmatch("(hello)\\s+(world)", s) do
        print(hello .. " " .. world)
    end
```

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

---

## gsub

```lua
function regex.gsub(pattern: string|regex, subject: string, replacement: string, limit?: integer)
  -> replaced_subject: string?
  2. total_replacements: integer?
```

Replaces the matched pattern globally on the subject with the given
replacement, supports named captures ((?'name'\<pattern\>), $\{name\}) and
$\[1-9\]\[0-9\]* substitutions. Raises an error when failing to compile the
pattern or by a substitution mistake.

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

@*param* `limit` — Limits the number of substitutions that will be done.

---

## match

```lua
function regex.match(pattern: string|regex, subject: string, offset?: integer, options?: integer)
  -> ...(string|integer)?
```

Behaves like `string.match`.
Looks for the first match of `pattern` in the string `subject`.
If it finds a match, it returns the matched string; otherwise, it returns `nil`.
If the pattern has captures, only the captured strings are returned.
If a capture is empty, its offset is returned instead.

@*param* `pattern` — The regex pattern to use, either as a simple string or precompiled.

@*param* `subject` — The string to search for valid matches.

@*param* `offset` — The position on the subject to start searching.

@*param* `options` — A bit field of matching options, eg:

regex.NOTBOL | regex.NOTEMPTY

@*return* `...` — List of captured matches; the entire match if no matches were specified; if the match is empty, its offset is returned instead.

---

