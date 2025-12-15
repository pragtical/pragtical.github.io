---
sidebar_position: 76
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.fonts.info

```lua
local info = require "widget.fonts.info"
```

## __index

```lua
(field) __index: core.object
```

---

## data

```lua
(field) data: widget.fonts.data[]
```

Holds the metadata for each of the embedded fonts

---

## last_error

```lua
(field) last_error: string
```

---

## path

```lua
(field) path: string
```

Path of the font file

---

## reader

```lua
(field) reader: widget.fonts.reader
```

---

## super

```lua
(field) super: core.object
```

---

## widget.fonts.cdata

### __index

```lua
(field) __index: core.object
```

---

### data

```lua
(field) data: string
```

---

### position

```lua
(field) position: integer
```

---

### super

```lua
(field) super: core.object
```

---

### __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

### __tostring

```lua
(method) widget.fonts.cdata:__tostring()
  -> string
```

---

### extend

```lua
(method) core.object:extend()
  -> core.object
```

---

### extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

### is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

### new

```lua
(method) widget.fonts.cdata:new(data: any)
```

-----------------------------------------------------------------------------
 FontCDATA Implementation
-----------------------------------------------------------------------------

---

### pos

```lua
(method) widget.fonts.cdata:pos(p: any)
  -> integer|widget.fonts.cdata
```

---

### setstr

```lua
(method) widget.fonts.cdata:setstr(s: any)
  -> widget.fonts.cdata
```

---

### setulong

```lua
(method) widget.fonts.cdata:setulong(v: any)
  -> widget.fonts.cdata
```

---

### setunum

```lua
(method) widget.fonts.cdata:setunum(b: any, v: any)
  -> widget.fonts.cdata
```

---

### str

```lua
(method) widget.fonts.cdata:str(b: any)
  -> string
```

---

### ulong

```lua
(method) widget.fonts.cdata:ulong()
  -> unknown
```

---

### ulongs

```lua
(method) widget.fonts.cdata:ulongs(num: any)
  -> table
```

---

### unum

```lua
(method) widget.fonts.cdata:unum(b: any)
  -> unknown
```

---

### ushort

```lua
(method) widget.fonts.cdata:ushort()
  -> unknown
```

---

## widget.fonts.data

### copyright

```lua
(field) copyright: string
```

---

### family

```lua
(field) family: string
```

---

### fullname

```lua
(field) fullname: string
```

---

### id

```lua
(field) id: number
```

Numerical id of the font

---

### license

```lua
(field) license: string
```

---

### monospace

```lua
(field) monospace: boolean
```

---

### path

```lua
(field) path: string
```

---

### psname

```lua
(field) psname: string
```

---

### subfamily

```lua
(field) subfamily: "Bold Italic"|"Bold"|"Italic"|"Regular"
```

---

### tfamily

```lua
(field) tfamily: string
```

---

### tsubfamily

```lua
(field) tsubfamily: "Bold Italic"|"Bold"|"Italic"|"Regular"
```

---

### type

```lua
(field) type: "otf"|"ttc"|"ttf"
```

---

### url

```lua
(field) url: string
```

---

### version

```lua
(field) version: string
```

---

### wwsfamily

```lua
(field) wwsfamily: string
```

---

### wwssubfamily

```lua
(field) wwssubfamily: string
```

---

## widget.fonts.reader

### __index

```lua
(field) __index: core.object
```

---

### file

```lua
(field) file: file*
```

\[View documents\](command:extension.lua.doc?\["en-us/54/manual.html/pdf-file"\])

---

### path

```lua
(field) path: string
```

---

### super

```lua
(field) super: core.object
```

---

### __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

### __gc

```lua
(method) widget.fonts.reader:__gc()
```

---

### __tostring

```lua
(method) widget.fonts.reader:__tostring()
  -> string
```

---

### cdata

```lua
(method) widget.fonts.reader:cdata(offset: integer, len: integer)
  -> (widget.fonts.cdata)?
  2. errmsg: string|nil
```

---

### close

```lua
(method) widget.fonts.reader:close()
```

---

### extend

```lua
(method) core.object:extend()
  -> core.object
```

---

### extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

### is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

### new

```lua
(method) widget.fonts.reader:new(font_path: any)
```

-----------------------------------------------------------------------------
 FontReader Implementation
-----------------------------------------------------------------------------

---

### read

```lua
(method) widget.fonts.reader:read(offset: any, len: any)
  -> unknown|nil
  2. string|nil
```

---

## widget.fonts.style

```lua
widget.fonts.style:
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

## check_is_monospace

```lua
function widget.fonts.info.check_is_monospace(font_data: widget.fonts.data)
  -> checked: boolean
  2. errmsg: string?
```

Helper function to check and update a font monospace attribute.

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

## embedded_fonts_count

```lua
(method) widget.fonts.info:embedded_fonts_count()
  -> integer
```

Get the amount of collections on the font file.

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

## get_data

```lua
(method) widget.fonts.info:get_data(idx?: integer)
  -> (widget.fonts.data)?
  2. errmsg: string|nil
```

Get the metadata of a previously read font file without
copyright and license information which can be long.

@*param* `idx` — Optional position of the embedded font

---

## is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

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

## new

```lua
(method) widget.fonts.info:new(font_path?: string)
```

Constructor

---

## read

```lua
(method) widget.fonts.info:read(font_path: string)
  -> (widget.fonts.info)?
  2. errmsg: string|nil
```

Open a font file and read its metadata.

---

