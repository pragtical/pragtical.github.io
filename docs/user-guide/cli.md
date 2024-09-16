---
sidebar_position: 6
description: Learn using the Pragtical CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

## Opening Files

To open a file from the command line terminal just invoke the edtior followed
by the file or directory you want to open:

```sh
pragtical /path/to/[file|directory]
```

To keep using the terminal use the `-f` flag to fork the editor into the
background:

```sh
pragtical -f /path/to/[file|directory]
```

### Using Already Opened Instance

Pragtical has an integrated IPC (Inter-process communication) module that
allows communication between currently opened editor instances. The functionality
is enabled by default, meaning that launching a file from terminal will open it
on currently opened instance.

Configuration of IPC is available from the graphical settings or user module.

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module">

```lua
local config = require "core.config"

config.plugins.ipc.single_instance = true|false
config.plugins.ipc.dirs_instance = "new|add|change"
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI" default>

To change the IPC settings, navigate to the "Plugins" tab
and expand the "Inter-process communication" section.

![IPC Settings][2]

  </TabItem>
</Tabs>

:::note Window Focus
When opening a file in the existing editor instance, the window should be
raised and gain focus. However, in some environments (Linux + Wayland), the
window may not be automatically raised due to a missing focus protocol or other
discrepancies.
:::


[1]: /img/user-guide/cli.png
[2]: /img/user-guide/settings/plugins/ipc.png
