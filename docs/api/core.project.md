---
sidebar_position: 38
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

