---
sidebar_position: 5
description: Learn to extend the cli to add your own commands.
---

# CLI Interface

Pragtical includes a flexible and extensible command-line interface that
allows users to interact with the editor or invoke tools programmatically.
As a plugin developer you can extend the CLI to provide custom commands related
to the plugin you are developing.

This guide explains how to:

* Register new commands
* Add flags and arguments
* Implement command logic

## Registering Custom Commands

To register a custom command, call `cli.register(command: core.cli.command)`
with the command table.

### Basic Template

```lua
local cli = require "core.cli"

cli.register {
  command = "mycmd",
  description = "What this command does",
  usage = "<arg1> [arg2]",
  min_arguments = 1,
  max_arguments = 2,
  flags = {
    {
      name = "force",
      short_name = "f",
      description = "Force action",
      type = "boolean"
    },
    {
      name = "tags",
      short_name = "t",
      description = "Comma-separated tags",
      type = "list"
    }
  },
  arguments = {
    arg1 = "First argument description",
    arg2 = "Optional second argument"
  },
  execute = function(flags, args)
    -- Process logic
    print("Custom command executed!")
  end
}
```

### Command Table Fields

| Field              | Type                        | Description                                            |
| ------------------ | --------------------------- | ------------------------------------------------------ |
| `command`          | `string`                    | The subcommand name                                    |
| `description`      | `string`                    | Short description shown in help/list                   |
| `long_description` | `string?`                   | Optional multiline help section                        |
| `usage`            | `string?`                   | Usage string shown in help                             |
| `min_arguments`    | `integer?`                  | Minimum number of arguments                            |
| `max_arguments`    | `integer`                   | Max number of arguments (`-1` for unlimited)           |
| `flags`            | `core.cli.flag[]?`          | Array of supported flags                               |
| `arguments`        | `table<string,string>?`     | Argument names and their descriptions                  |
| `execute`          | `function(flags, args)`     | Function to call when invoked                          |
| `exit_editor`      | `boolean` (default: `true`) | Whether to exit the editor after executing the command |

### Flags

| Field         | Type           | Description                                                    |
| ------------- | -------------- | -------------------------------------------------------------- |
| `name`        | `string`       | Long flag name (e.g. `verbose` for `--verbose`)                |
| `short_name`  | `string`       | Short name (e.g. `v` for `-v`)                                 |
| `description` | `string`       | Description shown in help                                      |
| `type`        | `"empty"`\|... | Type: `"empty"`, `"string"`, `"number"`, `"boolean"`, `"list"` |
| `value`       | any            | Assigned value (populated during parsing)                      |

## Subcommands

Commands can have nested subcommands using the subcommands field. Each
subcommand is itself a `core.cli.command`.

```lua
cli.register {
  command = "tool",
  description = "Main tool command",
  subcommands = {
    {
      command = "clean",
      description = "Cleans stuff",
      execute = function() print("Cleaning") end
    },
    {
      command = "build",
      description = "Builds stuff",
      execute = function() print("Building") end
    }
  }
}
```

Usage:

```sh
pragtical tool clean
pragtical tool build
```

## Setting the Default Command

The default command runs when no subcommand is given, while not advised
you even have the ability to override or extend it:

```lua
--- Modify the core one
table.insert(cli.commands.default.flags, {
  name = "myflag",
  short_name = "m",
  description = "Some custom flag"
})

local old_execute = cli.commands.default.execute
cli.commands.default.execute = function(flags, args)
    -- do something custom here
    old_execute(flags, args) -- call into original execute
end

--- Replaces it entirely
cli.set_default {
  flags = {
    {
      name = "debug",
      short_name = "d",
      description = "Enable debug mode",
      type = "boolean"
    }
  },
  execute = function(flags, args)
    print("Running default logic")
  end
}
```

### Unregistering a Command

```lua
cli.unregister("mycmd")
```

## API Documentation

More details about the CLI interface can be seen on the
[core.cli](/docs/api/core.cli) API page.
