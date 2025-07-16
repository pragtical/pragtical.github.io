---
sidebar_position: 4
description: Learn to utilize coroutines for executing long-running operations in Pragtical.
---

# Coroutines

Pragtical employs [Lua Coroutines] to perform various tasks, such as syntax
highlighting, project search and filesystem monitoring. Pragtical internally
refers to these coroutines as threads but they are not really threads just
co-operative functions executed one after another by a coroutine scheduler.
The scheduler keeps track of the tasks and per-frame rendering time to decide
if running a task is possible. This strategy ensures that the program runs on a
single thread for most of its time.

## Coroutine Types

There are two types of coroutines used on Pragtical:

1. **foreground** - only runs when the editor has user focus
2. **background** - keeps running even if the editor doesn't has focus

To schedule a **foreground** task for execution, you can use `core.add_thread(f, weak_ref, ...)`.
To schedule a **background** task for execution, you can use `core.add_background_thread(f, weak_ref, ...)`.
These functions accept a coroutine function, a weak reference to an object, and
other arguments to pass to the coroutine function.

:::warning
Use background coroutines responsibly, only when strictly necessary, and ensure
that the task will not consume excessive CPU time.
:::

The coroutine function takes any arguments passed into `core.add_thread()` or
`core.add_background_thread()` and it should call `coroutine.yield()` with the
timeout in seconds. If the timeout is 0, the coroutine will be resumed as soon
as possible. If the timeout isn't specified, a timeout will be automatically
assigned by the coroutine scheduler depending on the time the function takes
to run.

## Basic Example

```lua
local core = require "core"

-- Schedule a function for execution later
core.add_thread(function()
    print("Hello world!")
end)

-- Schedule a function to run until the weak reference is destroyed
-- This is used by the syntax highlighter to run the highlighter
-- until the underlying Doc is destroyed/closed.
core.add_thread(function()
    while true do
        coroutine.yield(1)
        print("Doc is still open!")
    end
end, doc)
```

:::warning
Weak references in Lua allow you to reference objects without preventing them
from being garbage collected. However, if weak references form a circular
reference (where two or more objects reference each other) this can create a
situation where the garbage collector is unable to free the memory, as it sees
these objects as still in use. Therefore, it's important to use weak references
carefully to avoid memory leaks and ensure that unused objects can be properly
collected by the garbage collector.
:::

## Example: Managing a child process

This example uses a foreground task to manage a long-running child process.
The task reads from the child process and prints it to stdout after the process
exits.

```lua
local core = require "core"

core.add_thread(function()
    local proc = assert(process.start({ "cat", "/dev/urandom" }, { stdin = process.REDIRECT_PIPE }))

    local buffer = {}
    while true do
        local current_buffer = proc:read()
        if not current_buffer then break end

        table.insert(buffer, current_buffer)
        coroutine.yield(0)
    end

    print(table.concat(buffer))
end)
```

## Example: Defer execution of certain functions

This example shows a lesser-known use case for `core.add_thread()` — deferring
execution until Pragtical is fully loaded. Coroutines scheduled with
`core.add_thread()` will run after the UI and plugins are loaded, so it could
be used to run commands added by plugins.

```lua
local core = require "core"
local command = require "core.command"
local config = require "core.config"

core.add_thread(function()
    -- At this points, plugins are not loaded yet.
    -- We need to defer the execution after the editor is loaded.
    command:perform "my-plugin:show"
end)
```

:::note
Remember the difference between `core.add_thread()` (foreground) and
`core.add_background_thread()` (background). Most of the time you will only
need to use `core.add_thread()`. In some cases like the IPC plugin
`core.add_background_thread()` is useful because the plugin needs to scan if
new messages were received even if the editor window does not has focus.
:::


[Lua Coroutines]: https://www.lua.org/pil/9.html
