---
sidebar_position: 64
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.fonts.cache

```lua
local cache = require "widget.fonts.cache"
```

## __index

```lua
(field) __index: core.object
```

---

## building

```lua
(field) building: boolean
```

---

## fontdirs

```lua
(field) fontdirs: table<integer, string>
```

---

## fontinfo

```lua
(field) fontinfo: widget.fonts.info
```

---

## fonts

```lua
(field) fonts: widget.fonts.data[]
```

---

## found

```lua
(field) found: integer
```

---

## found_monospaced

```lua
(field) found_monospaced: integer
```

---

## loaded_fonts

```lua
(field) loaded_fonts: table
```

---

## monospaced

```lua
(field) monospaced: boolean
```

---

## monosppaced

```lua
(field) monosppaced: boolean
```

---

## searching_monospaced

```lua
(field) searching_monospaced: boolean
```

---

## super

```lua
(field) super: core.object
```

---

## __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

## __tostring

```lua
(method) core.object:__tostring()
  -> string
```

Metamethod to get a string representation of an object.

---

## build

```lua
(method) widget.fonts.cache:build()
  -> started: boolean
```

Build the font cache and save it.

@*return* `started` — False if cache is already been built

---

## extend

```lua
(method) core.object:extend()
  -> core.object
```

---

## extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

## is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

## is_building

```lua
(method) widget.fonts.cache:is_building()
  -> building: boolean
```

Check if the cache is already building.

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

## load_cache

```lua
(method) widget.fonts.cache:load_cache()
  -> boolean
```

Load font cache from persistent file for faster startup time.

---

## new

```lua
(method) widget.fonts.cache:new()
```

Constructor

---

## rebuild

```lua
(method) widget.fonts.cache:rebuild()
  -> started: boolean
```

Clear current font cache and rebuild it.

@*return* `started` — False if cache is already been built

---

## save_cache

```lua
(method) widget.fonts.cache:save_cache()
```

Store current font cache to persistent file.

---

## scan_dir

```lua
(method) widget.fonts.cache:scan_dir(path: string, run_count?: integer)
```

Scan a directory for valid font files and load them into the cache.

---

## search

```lua
(method) widget.fonts.cache:search(name: string, style?: "Extra bold italic"|"black"|"bold condensed"|"bold italic"|"bold oblique"...(+9), monospaced?: boolean)
  -> font_data: (widget.fonts.data)?
  2. errmsg: string?
```

Search for a font and return the best match.

```lua
style:
   -\> "regular"
    | "bold"
    | "italic"
    | "bold italic"
    | "thin"
    | "medium"
    | "light"
    | "black"
    | "condensed"
    | "oblique"
    | "bold oblique"
    | "extra nold"
    | "Extra bold italic"
    | "bold condensed"
```

---

## verify_monospaced

```lua
(method) widget.fonts.cache:verify_monospaced()
```

Search and mark monospaced fonts on currently loaded cache and save it.

---

