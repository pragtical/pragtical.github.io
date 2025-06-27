---
sidebar_position: 19
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.common

Utility functions.

```lua
local common = require "core.common"
```

## common.serializeoptions

### escape

```lua
(field) escape: boolean?
```

Uses normal escape characters ("\n") instead of decimal escape sequences ("\10").

---

### indent_str

```lua
(field) indent_str: string?
```

The indentation character to use. Defaults to `"  "`.

---

### initial_indent

```lua
(field) initial_indent: number?
```

The initial indentation level. Defaults to 0.

---

### limit

```lua
(field) limit: number?
```

Limits the depth when serializing nested tables. Defaults to `math.huge`.

---

### pretty

```lua
(field) pretty: boolean?
```

Enables pretty printing.

---

### sort

```lua
(field) sort: boolean?
```

Sorts the output if it is a sortable table.

---

## basename

```lua
function core.common.basename(path: string)
  -> string
```

Returns the last portion of a path.

---

## bench

```lua
function core.common.bench(name: string, fn: fun(...any):any, ...any)
  -> any
```

Prints the execution time of a function.

The execution time and percentage of frame time
for the function is printed to standard output. 
The frame rate is always assumed to be 60 FPS, thus
a value of 100% would mean that the benchmark took
1/60 of a second to execute.

@*return* — The result returned by the function

---

## blend_colors

```lua
function core.common.blend_colors(dst: renderer.color, src: renderer.color)
  -> blended_color: renderer.color
```

Combine two colors to create a new color based on their transparency.

---

## clamp

```lua
function core.common.clamp(n: number, lo: number, hi: number)
  -> number
```

Clamps the number n between lo and hi.

---

## color

```lua
function core.common.color(str: string)
  -> r: number
  2. g: number
  3. b: number
  4. a: number
```

Parses a CSS color string.

Only these formats are supported:
* `rgb(r, g, b)`
* `rgba(r, g, b, a)`
* `#rrggbbaa`
* `#rrggbb`

---

## darken_color

```lua
function core.common.darken_color(rgba: renderer.color, percent: integer)
  -> renderer.color
```

Makes a color darker by the given percentage.

---

## dir_list_suggest

```lua
function core.common.dir_list_suggest(text: string, dir_list: string[])
  -> string[]
```

Filters a list of paths to find those that are related to the input path.

@*param* `text` — The input path.

@*param* `dir_list` — A list of paths to filter.

---

## dir_path_suggest

```lua
function core.common.dir_path_suggest(text: string, root: string)
  -> string[]
```

Returns a list of directories that are related to a path.

@*param* `text` — The input path.

@*param* `root` — The path to relate to.

---

## dirname

```lua
function core.common.dirname(path: string)
  -> string|nil
```

Returns the directory name of a path.
If the path doesn't have a directory, this function may return nil.

---

## distance

```lua
function core.common.distance(x1: number, y1: number, x2: number, y2: number)
  -> number
```

Returns the euclidean distance between two points.

---

## draw_text

```lua
function core.common.draw_text(font: renderer.font, color: renderer.color, text: string, align: string|"center"|"left"|"right", x: number, y: number, w: number, h: number)
  -> x_advance: number
  2. y_advance: number
  3. x: number
  4. y: number
```

Draws text onto the window.
The function returns the X and Y coordinates of the bottom-right
corner of the text.

```lua
align:
    | "left" -- Align text to the left of the bounding box
    | "right" -- Align text to the right of the bounding box
    | "center" -- Center text in the bounding box
```

---

## find_index

```lua
function core.common.find_index(tbl: table, prop: any)
  -> number|nil
```

Returns the first index where a subtable in tbl has prop set.
If none is found, nil is returned.

---

## fuzzy_match

```lua
function core.common.fuzzy_match(haystack: string, needle: string, files: boolean)
  -> number
```

Performs fuzzy matching.

If the haystack is a string, a score ranging from 0 to 1 is returned. 
If the haystack is a table, a table containing the haystack sorted in ascending
order of similarity is returned.

@*param* `files` — If true, the matching process will be performed in reverse to better match paths.

---

## fuzzy_match_with_recents

```lua
function core.common.fuzzy_match_with_recents(haystack: string[], recents: string[], needle: string)
  -> string[]
```

Performs fuzzy matching and returns recently used strings if needed.

If the needle is empty, then a list of recently used strings
are added to the result, followed by strings from the haystack.

---

## home_encode

```lua
function core.common.home_encode(text: string)
  -> string
```

Returns a path where the user's home directory is replaced by `"~"`.

---

## home_encode_list

```lua
function core.common.home_encode_list(paths: string[])
  -> string[]
```

Returns a list of paths where the user's home directory is replaced by `"~"`.

@*param* `paths` — A list of paths to encode

---

## home_expand

```lua
function core.common.home_expand(text: string)
  -> string
```

Expands the `"~"` prefix in a path into the user's home directory.
This function is not guaranteed to return an absolute path.

---

## hsv_to_rgb

```lua
function core.common.hsv_to_rgb(h: number, s: number, v: number, a: number)
  -> rgba: renderer.color
```

Converts an HSV color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes h, s, and v are contained in the set \[0, 1\] and
returns r, g, and b in the set \[0, 255\].

@*param* `h` — The hue

@*param* `s` — The saturation

@*param* `v` — The brightness

@*param* `a` — The alpha

@*return* `rgba` — The RGB representation

---

## is_absolute_path

```lua
function core.common.is_absolute_path(path: string)
  -> boolean
```

Checks whether a path is absolute or relative.

---

## is_utf8_cont

```lua
function core.common.is_utf8_cont(s: string, offset?: integer)
  -> boolean
```

Checks if the byte at offset is a UTF-8 continuation byte.

UTF-8 encodes code points in 1 to 4 bytes.
For a multi-byte sequence, each byte following the start byte is a continuation byte.

@*param* `offset` — The offset of the string to start searching. Defaults to 1.

---

## lerp

```lua
function core.common.lerp(a: number, b: number, t: number)
  -> number
```

Returns a value between a and b on a linear scale, based on the
interpolation point t.

If a and b are tables, a table containing the result for all the
elements in a and b is returned.

---

## lighten_color

```lua
function core.common.lighten_color(rgba: renderer.color, percent: integer)
  -> renderer.color
```

Makes a color brighter by the given percentage.

---

## match_ignore_rule

```lua
function core.common.match_ignore_rule(path: string, info: system.fileinfo, ignore_rules: core.ignore_file_rule[])
  -> boolean
```

Checks if a path matches one of the given ignore rules.

---

## match_pattern

```lua
function core.common.match_pattern(text: string, pattern: string|string[], ...any)
  -> start_index: boolean|number
  2. end_index: number|nil
```

Matches a string against a list of patterns.

If a match was found, its start and end index is returned.
Otherwise, false is returned.

@*param* `...` — Other options for string.find().

---

## merge

```lua
function core.common.merge(a: table|nil, b?: table)
  -> table
```

Returns a new table containing the contents of b merged into a.

---

## mkdirp

```lua
function core.common.mkdirp(path: string)
  -> success: boolean
  2. error: string|nil
  3. path: string|nil
```

Creates a directory recursively if necessary.

@*return* `success`

@*return* `error`

@*return* `path` — The path where an error occured.

---

## normalize_path

```lua
function core.common.normalize_path(filename: string|nil)
  -> string|nil
```

Normalizes a path into the same format across platforms.

On Windows, all drive letters are converted to uppercase.
UNC paths with drive letters are converted back to ordinary Windows paths.
All path separators (`"/"`, `"\\"`) are converted to platform-specific ones.

---

## normalize_volume

```lua
function core.common.normalize_volume(filename: string|nil)
  -> string|nil
```

Normalizes the drive letter in a Windows path to uppercase.
This function expects an absolute path, e.g. a path from `system.absolute_path`.

This function is needed because the path returned by `system.absolute_path`
may contain drive letters in upper or lowercase.

@*param* `filename` — The input path.

---

## path_belongs_to

```lua
function core.common.path_belongs_to(filename: string, path: string)
  -> boolean
```

Checks whether a path belongs to a parent directory.

@*param* `filename` — The path to check.

@*param* `path` — The parent path.

---

## path_suggest

```lua
function core.common.path_suggest(text: string, root?: string)
  -> string[]
```

Returns a list of paths that are relative to the input path.

If a root directory is specified, the function returns paths
that are relative to the root directory.

@*param* `text` — The input path.

@*param* `root` — The root directory.

---

## relative_path

```lua
function core.common.relative_path(ref_dir: string, dir: string)
  -> string
```

Makes a path relative to the given reference directory when possible.

@*param* `ref_dir` — The path to check against.

@*param* `dir` — The input path.

---

## rgb_to_hsv

```lua
function core.common.rgb_to_hsv(rgba: renderer.color)
  -> hsva: table
```

Converts an RGB color value to HSV. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes r, g, and b are contained in the set \[0, 255\] and
returns h, s, and v in the set \[0, 1\].

@*return* `hsva` — The HSV representation

---

## rm

```lua
function core.common.rm(path: string, recursively: boolean)
  -> success: boolean
  2. error: string|nil
  3. path: string|nil
```

Removes a path.

@*param* `recursively` — If true, the function will attempt to remove everything in the specified path.

@*return* `success`

@*return* `error`

@*return* `path` — The path where the error occured.

---

## round

```lua
function core.common.round(n: number)
  -> number
```

Returns the value of a number rounded to the nearest integer.

---

## serialize

```lua
function core.common.serialize(val: any, opts?: common.serializeoptions)
  -> string
```

Serializes a value into a Lua string that is loadable with load().

Only these basic types are supported:
* nil
* boolean
* number (except very large numbers and special constants, e.g. `math.huge`, `inf` and `nan`)
* integer
* string
* table

---

## splice

```lua
function core.common.splice(t: any[], at: number, remove: number, insert?: any[])
```

Splices a numerically indexed table.
This function mutates the original table.

@*param* `at` — Index at which to start splicing.

@*param* `remove` — Number of elements to remove.

@*param* `insert` — A table containing elements to insert after splicing.

---

## utf8_chars

```lua
function core.common.utf8_chars(text: string)
  -> fun():string
```

Returns an iterator that yields a UTF-8 character on each iteration.

---

