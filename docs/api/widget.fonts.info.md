---
sidebar_position: 77
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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## widget.fonts.cdata

### __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

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
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

### extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

---

### is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

### __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

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
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

### extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

---

### is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

### is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

### is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

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
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

---

## __tostring

```lua
(method) core.object:__tostring()
  -> str: string
```

Get string representation of the object (for debugging/logging).
Override in subclasses to provide meaningful names.
Example: `function MyClass:__tostring() return "MyClass" end`

@*return* `str` — String representation (default: "Object")

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
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

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
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

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

