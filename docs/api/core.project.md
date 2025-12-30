---
sidebar_position: 39
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.project

Core projects class.

```lua
local project = require "core.project"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## compiled

```lua
(field) compiled: table
```

---

## name

```lua
(field) name: string
```

---

## path

```lua
(field) path: string
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

## absolute_path

```lua
(method) core.project:absolute_path(filename: string)
  -> string|nil
```

The method works like system.absolute_path except it doesn't fail if the
file does not exist. We consider that the current dir is core.project_dir
so relative filename are considered to be in core.project_dir.

Please note that .. or . in the filename are not taken into account.
This function should get only filenames normalized using
common.normalize_path function.

---

## compile_ignore_files

```lua
(method) core.project:compile_ignore_files()
```

Inspect config.ignore_files patterns and prepare ready to use entries.

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

## files

```lua
(method) core.project:files()
  -> fun():core.project, string
```

Returns iterator of all project files.

---

## get_file_info

```lua
(method) core.project:get_file_info(path: string)
  -> system.fileinfo|false
```

Compute a file's info entry completed with "filename" to be used
in project scan or false if it shouldn't appear in the list.

```lua
-- 
return #1:
    | false
```

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
(method) core.project:new(path: any)
```

Constructor

---

## normalize_path

```lua
(method) core.project:normalize_path(filename: string|nil)
  -> string|nil
```

Same as common.normalize_path() with the addition of making the filename
relative when it belongs to the project.

---

## path_belongs_to

```lua
(method) core.project:path_belongs_to(path: string)
  -> boolean
```

Checks if the given path belongs to the project.

---

