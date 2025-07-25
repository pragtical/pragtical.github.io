---
sidebar_position: 18
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.cli

Provides the CLI parser functionality.

```lua
local cli = require "core.cli"
```

## app_description

```lua
(field) app_description: string
```

Application description

---

## app_name

```lua
(field) app_name: string
```

Application name

---

## app_version

```lua
(field) app_version: string
```

Application version

---

## commands

```lua
(field) commands: table<string, core.cli.command>
```

List of registered commands

---

## last_command

```lua
(field) last_command: string
```

The command that was executed on last parse.

---

## unhandled_arguments

```lua
(field) unhandled_arguments: table<integer, string>
```

List of arguments that weren't handled on last parse.

---

## core.cli.command

Representation of a command line subcommand.

### arguments

```lua
(field) arguments: table<string, string>?
```

Description of the arguments printed on command help.

---

### command

```lua
(field) command: string
```

Subcommand name invoked with `app mycommand`

---

### description

```lua
(field) description: string
```

Description used for the command when running `app help`

---

### execute

```lua
(field) execute: fun(flags: core.cli.flag[], arguments: string[])?
```

Function called when the command is invoked by the user

---

### exit_editor

```lua
(field) exit_editor: boolean?
```

Flag true by default which causes the editor to not launch when command is executed

---

### flags

```lua
(field) flags: core.cli.flag[]?
```

Optional list of flags that can be used as part of the command

---

### long_description

```lua
(field) long_description: string?
```

Optional more detailed description that shows how to use the command

---

### max_arguments

```lua
(field) max_arguments: integer?
```

The maximum amount of arguments required for the command where -1 is any

---

### min_arguments

```lua
(field) min_arguments: integer?
```

The minimum amount of arguments required for the command

---

### skip_arguments_check

```lua
(field) skip_arguments_check: boolean?
```

Do not perform invalid arguments checking for this command.

---

### subcommands

```lua
(field) subcommands: core.cli.command[]?
```

Optional list of subcommands that belong to the parent subcommand

---

### usage

```lua
(field) usage: string?
```

Single line brief of using the command, eg: \[options\] \[\<argument\>\]

---

## core.cli.flag

Representation of a command line flag.

### description

```lua
(field) description: string
```

Description used for the flag when running `app help mycommand`

---

### name

```lua
(field) name: string
```

Long name of the flag eg: my-flag for --my-flag

---

### short_name

```lua
(field) short_name: string
```

Short name eg: m for -m

---

### type

```lua
(field) type: ("boolean"|"empty"|"list"|"number"|"string")?
```

Data type of the flag if an argument/value can be given to it

---

### value

```lua
(field) value: (boolean|string|number|table)?
```

Value assigned to the flag

---

## core.cli.sortedcommand

### data

```lua
(field) data: core.cli.command
```

Representation of a command line subcommand.

---

### name

```lua
(field) name: string
```

---

## colorize

```lua
function core.cli.colorize(text: string, color: "blue"|"gray"|"green"|"liteblue"|"purple"...(+2))
  -> colorized_text: string
```

Adds color to given text on non windows systems.

```lua
color:
    | "red"
    | "green"
    | "yellow"
    | "purple"
    | "blue"
    | "liteblue"
    | "gray"
```

---

## get_default

```lua
function core.cli.get_default()
  -> (core.cli.command)?
```

Get the default command used by the CLI parser.

---

## parse

```lua
function core.cli.parse(args: string[])
```

Parse the command line arguments and execute the applicable commands.

---

## print_help

```lua
function core.cli.print_help(command?: core.cli.command)
```

Display the generated application help or a specific command help.

---

## register

```lua
function core.cli.register(command: core.cli.command, overwrite?: boolean)
```

Add a new command to the cli parser.

---

## set_default

```lua
function core.cli.set_default(command: core.cli.command)
```

Set the default command used by the CLI parser.

---

## unregister

```lua
function core.cli.unregister(command: string)
```

Removes an existing command from the cli parser.

---

