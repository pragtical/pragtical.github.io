---
sidebar_position: 6
description: Learn using the Pragtical CLI.
---

# Command Line Interface

The CLI provides an interface for interacting with Pragtical from the terminal,
allowing you to execute commands, manage plugins, and even extend it with
plugins to add new functionality not provided out of the box.

![Command Line Interface][1]

## Usage

Using the CLI consist of invoking the editor binary from your terminal followed
by an option, command or arguments:

```sh
pragtical [option|command] [command_option] [arguments]
```

## Options

The following global options are available:

* `-h`, `--help`: Display help text for the CLI and its commands.
* `-v`, `--version`: Display the current version of the Pragtical application.
* `-f`, `--fork`: Fork the editor to run in the background, allowing you to continue using the terminal.
* `--`: Treat the following argument as a command, even if a file or directory exists with the same name. For example: pragtical -- help.

**Example:**

```sh
pragtical --fork /path/to/project
```

## Available Commands

* `list`: Display a list of available commands within the Pragtical CLI.
* `help`: Display help information for the application or a specific command.
* `pm`: Access the plugin manager to install, update, or manage plugins for Pragtical.

If available, you can view more detailed usage of a specific command by running:

```sh
pragtical help [command_name]
```

[1]: /img/user-guide/cli.png
