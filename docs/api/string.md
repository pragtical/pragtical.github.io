---
sidebar_position: 10
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# string

## string.ubyte

```lua
function string.ubyte(s: string, i?: integer, j?: integer)
  -> integer
  2. ...unknown
```

UTF-8 equivalent of string.byte

---

## string.uchar

```lua
function string.uchar(byte: integer, ...integer)
  -> string
  2. ...unknown
```

UTF-8 equivalent of string.char

---

## string.ucharpos

```lua
function string.ucharpos(s: string, charpos?: integer, index?: integer)
  -> charpos: integer
  2. codepoint: integer
```

Equivalent to utf8extra.charpos()

---

## string.uclean

```lua
function string.uclean(s: string, replacement_string?: string, non_consecutive?: boolean)
  -> cleaned_string: string
  2. was_valid: boolean
```

Equivalent to utf8extra.clean()

---

## string.ucodepoint

```lua
function string.ucodepoint(s: string, i?: integer, j?: integer, lax?: boolean)
  -> code: integer
  2. ...unknown
```

Equivalent to utf8.codepoint()

@*param* `lax` — Do not check if string is invalid utf8

---

## string.ucodes

```lua
function string.ucodes(s: string, lax?: boolean)
  -> fun():integer, integer
```

Equivalent to utf8.codes()

@*param* `lax` — Do not check if string is invalid utf8

---

## string.uescape

```lua
function string.uescape(s: string)
  -> utf8_string: string
```

Equivalent to utf8extra.escape()

---

## string.ufind

```lua
function string.ufind(s: string, pattern: string, init?: integer, plain?: boolean)
  -> start: integer
  2. end: integer
  3. ...unknown
```

UTF-8 equivalent of string.find

@*return* `start`

@*return* `end`

@*return* `...` — captured

---

## string.ufold

```lua
function string.ufold(s: string)
  -> new_string: string
```

Equivalent to utf8extra.fold()

---

## string.ugmatch

```lua
function string.ugmatch(s: string, pattern: string, init?: integer)
  -> fun():string, ...unknown
```

UTF-8 equivalent of string.gmatch

---

## string.ugsub

```lua
function string.ugsub(s: string, pattern: string, repl: string|function|table, n: integer)
  -> string
  2. count: integer
```

UTF-8 equivalent of string.gsub

---

## string.uinsert

```lua
function string.uinsert(s: string, idx?: integer, substring: string)
  -> new_string: string
```

Equivalent to utf8extra.insert()

---

## string.uinvalidoffset

```lua
function string.uinvalidoffset(s: string, init?: integer)
  -> offset: integer
```

Equivalent to utf8extra.invalidoffset()

---

## string.uisnfc

```lua
function string.uisnfc(s: string)
  -> boolean
```

Equivalent to utf8extra.isnfc()

---

## string.uisvalid

```lua
function string.uisvalid(s: string)
  -> boolean
```

Equivalent to utf8extra.isvalid()

---

## string.ulen

```lua
function string.ulen(s: string, i?: integer, j?: integer, lax?: boolean)
  -> integer
```

UTF-8 equivalent of string.len

@*param* `lax` — Do not check if string is invalid utf8

---

## string.ulower

```lua
function string.ulower(s: string)
  -> string
```

UTF-8 equivalent of string.lower

---

## string.umatch

```lua
function string.umatch(s: string, pattern: string, init?: integer)
  -> captured: string|number
```

UTF-8 equivalent of string.match

---

## string.uncasecmp

```lua
function string.uncasecmp(a: string, b: string)
  -> result: integer
```

Equivalent to utf8extra.ncasecmp()

---

## string.unext

```lua
function string.unext(s: string, charpos?: integer, index?: integer)
  -> charpos: integer
  2. codepoint: integer
```

Equivalent to utf8extra.next()

---

## string.unormalize_nfc

```lua
function string.unormalize_nfc(s: string)
  -> normal_string: string
  2. was_n: boolean
```

Equivalent to utf8extra.normalize_nfc()

---

## string.uoffset

```lua
function string.uoffset(s: string, n: integer, i?: integer)
  -> position_in_bytes: integer
```

Equivalent to utf8.offset()

---

## string.uremove

```lua
function string.uremove(s: string, start?: integer, stop?: integer)
  -> new_string: string
```

Equivalent to utf8extra.remove()

---

## string.ureverse

```lua
function string.ureverse(s: string, lax?: boolean)
  -> string
```

UTF-8 equivalent of string.reverse

@*param* `lax` — Do not check if string is invalid utf8

---

## string.usub

```lua
function string.usub(s: string, i: integer, j?: integer)
  -> string
```

UTF-8 equivalent of string.sub

---

## string.utitle

```lua
function string.utitle(s: string)
  -> new_string: string
```

Equivalent to utf8extra.title()

---

## string.uupper

```lua
function string.uupper(s: string)
  -> string
```

UTF-8 equivalent of string.upper

---

## string.uwidth

```lua
function string.uwidth(s: string, ambi_is_double?: boolean, default_width?: integer)
  -> width: integer
```

Equivalent to utf8extra.width()

---

## string.uwidthindex

```lua
function string.uwidthindex(s: string, location: integer, ambi_is_double?: boolean, default_width?: integer)
  -> idx: integer
  2. offset: integer
  3. width: integer
```

Equivalent to utf8extra.widthindex()

---

