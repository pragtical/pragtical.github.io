---
sidebar_position: 40
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.repl

An extensible REPL with multi-line and expressions evaluation.

```lua
local repl = require "core.repl"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## commands

```lua
(field) commands: core.repl.command[]
```

List of built-in commands.

---

## completions

```lua
(field) completions: core.repl.completion[]
```

Set of rules to provide input completion.

---

## default_commands_called

```lua
(field) default_commands_called: boolean
```

---

## default_completions_called

```lua
(field) default_completions_called: boolean
```

---

## history_file

```lua
(field) history_file: string
```

Path to the file that will hold the input history.

---

## max_history

```lua
(field) max_history: integer
```

Maximum amount of entries on the history file.

---

## super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## core.repl.command

### description

```lua
(field) description: string
```

Short description of the command.

---

### execute

```lua
(field) execute: fun(cmd: string, args: table)
```

Function executed when the command is requested.

---

### name

```lua
(field) name: string
```

Name of the command that user can inkove.

---

### params

```lua
(field) params: string?
```

List of params displayed on help, eg: "\<param1\> \<param2\>"

---

## core.repl.completion

### execute

```lua
(field) execute: fun(completions: repl.completion, str: string)
```

The function to execute if the completion pattern matches.

---

### pattern

```lua
(field) pattern: string
```

A lua pattern to match against the current user input.

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
(method) core.repl:new()
```

---

## register_command

```lua
(method) core.repl:register_command(command: core.repl.command)
  -> registered: boolean?
  2. errmsg: string?
```

Register a new command provider.

---

## register_completion

```lua
(method) core.repl:register_completion(completion: core.repl.completion)
  -> registered: boolean?
  2. errmsg: string?
```

Register a new completion provider.

---

## register_default_commands

```lua
(method) core.repl:register_default_commands()
```

Register a set of default commands.
This is automatically called from the constructor,
override to add your own commands.

---

## register_default_completions

```lua
(method) core.repl:register_default_completions()
```

Register default completion providers.
This is automatically called from the constructor,
override to add your own completions.

---

## start

```lua
(method) core.repl:start()
```

A basic REPL with multi-line and expression evaluation for the repl command.

---

