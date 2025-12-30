---
sidebar_position: 76
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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

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

