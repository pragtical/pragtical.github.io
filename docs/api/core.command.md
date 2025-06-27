---
sidebar_position: 17
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.command

Functions to register and handle commands.

```lua
local command = require "core.command"
```

## map

```lua
(field) map: { [string]: core.command.command }
```

---

## core.command.command

The predicate and its associated function.

### perform

```lua
(field) perform: fun(...any)
```

---

### predicate

```lua
(field) predicate: fun(...any):boolean, ...unknown
```

A predicate function accepts arguments from `command.perform()` and evaluates to a boolean. 
If the function returns true, then the function associated with the command is executed.

The predicate function can also return other values after the boolean, which will
be passed into the function associated with the command.

---

## add

```lua
function core.command.add(predicate: string|core.object|fun(...any):boolean, ...unknown, map: { [string]: fun(...any) })
```

Adds commands to the map.

The function accepts a table containing a list of commands
and their functions. 
If a command already exists, it will be replaced.
See:
  * \[core.command.predicate\](file:///usr/share/pragtical/core/command.lua#28#10)
  * \[core.command.command_name\](file:///usr/share/pragtical/core/command.lua#35#10)

---

## add_defaults

```lua
function core.command.add_defaults()
```

Inserts the default commands for Pragtical into the map.

---

## generate_predicate

```lua
function core.command.generate_predicate(predicate: string|core.object|fun(...any):boolean, ...unknown|nil)
  -> fun(...any):boolean, ...unknown
```

This function takes in a predicate and produces a predicate function
that is internally used to dispatch and execute commands.

This function should not be called manually.

@*param* `predicate` — If nil, the predicate always evaluates to true.

See: \[core.command.predicate\](file:///usr/share/pragtical/core/command.lua#28#10)

---

## get_all_valid

```lua
function core.command.get_all_valid()
  -> string[]
```

Returns all the commands that can be executed (their predicates evaluate to true).

---

## is_valid

```lua
function core.command.is_valid(name: string, ...any)
  -> boolean
```

Checks whether a command can be executed (its predicate evaluates to true).

---

## perform

```lua
function core.command.perform(name: string, ...any)
  -> boolean
```

Performs a command.

The arguments passed into this function are forwarded to the predicate function. 
If the predicate function returns more than 1 value, the other values are passed
to the command.

Otherwise, the arguments passed into this function are passed directly
to the command.

@*return* — true if the command is performed successfully.

See:
  * \[core.command.predicate\](file:///usr/share/pragtical/core/command.lua#28#10)
  * \[core.command.predicate_function\](file:///usr/share/pragtical/core/command.lua#12#10)

---

## prettify_name

```lua
function core.command.prettify_name(name: string)
  -> string
```

Prettifies the command name.

This function adds a space between the colon and the command name,
replaces dashes with spaces and capitalizes the command appropriately.
See: \[core.command.command_name\](file:///usr/share/pragtical/core/command.lua#35#10)

---

