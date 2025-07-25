---
sidebar_position: 36
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

