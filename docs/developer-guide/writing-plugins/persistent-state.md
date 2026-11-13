---
sidebar_position: 5.1
description: Persist plugin data in user storage, a project, or an explicit directory.
---

# Persistent State

Use `core.storage` for plugin state that must survive editor restarts. It
serializes values to files and provides matching load, enumeration and removal
operations. Configuration options belong in `core.config`; cached results,
history and saved plugin state can use storage.

## User Storage

Without a scope argument, files live under `USERDIR/storage/<module>/<key>`:

```lua
local storage = require "core.storage"
local state = storage.load("my_plugin", "history") or { recent = {} }
state.recent[#state.recent + 1] = "example"
local saved = storage.save("my_plugin", "history", state)
```

`save` returns whether writing and closing the file succeeded. Check that
result before depending on a backup. Keys are filenames; no extension is added.

## Project Storage

Pass a `core.project` as the final argument to store data under that project's
`.pragtical/<module>/<key>` directory:

```lua
local core = require "core"
local storage = require "core.storage"
local project = core.root_project()

storage.save("my_plugin", "state", { expanded = { "src" } }, project)
local state, err = storage.load("my_plugin", "state", project)
local keys = storage.keys("my_plugin", project)
```

Capture the project object before scheduling asynchronous work or a prompt;
the active project can change before its callback runs. Project-local state
may be shared by version control, so avoid putting credentials or private
user history there.

An explicit directory string is also accepted as the scope. It is the storage
base itself: passing `/path/to/cache` stores module/key below that directory,
without appending another `.pragtical` or `storage` component.

## Loading and Removing Data

Project and explicit-directory files are parsed as serialized data, not as
arbitrary Lua programs. Their loader accepts supported literals and table
constructors, with bounded nesting and literal count. It rejects executable
expressions and bytecode. There is no separate file-size limit.

`load` returns `nil` for a missing file. An invalid existing file also returns
an error as its second result and is reported in the editor log. An empty
table, `false`, and a missing value are different states; do not use an `or`
default if your plugin needs to preserve a stored `false`.

```lua
storage.clear("my_plugin", "state", project) -- One key.
storage.clear("my_plugin", nil, project)     -- This module's project data.
```

Use a module namespace belonging to your plugin. Clearing a project scope
requires a module name; it cannot clear the whole project storage base.
See the [Storage API](/docs/api/core.storage) for the full signatures.
