---
sidebar_position: 5
description: Learn to use real threads and channels from Pragtical plugins.
---

# Threads and Channels

Pragtical plugins usually run on the main Lua state. Coroutines created with
`core.add_thread()` are useful for splitting work across frames, but they are
still cooperative tasks running on the main thread. If a coroutine performs
heavy CPU work or blocking IO for too long before yielding, the editor can still
stall.

For work that should run outside the main editor thread, Pragtical exposes a
`thread` API. A real thread runs in its own Lua state and communicates with the
main thread through named channels.

For the complete list of methods and signatures, see the
[Thread API reference](/docs/api/thread).

## When to use threads

Use real threads when a plugin needs to:

- scan many files;
- parse or tokenize large inputs;
- do blocking file IO;
- use several CPU cores.

Keep UI work, document mutation, view updates, commands, and renderer calls on
the main thread. Worker threads should send plain data back to the main thread,
then a coroutine can apply those results safely.

## Creating a thread

Use `thread.create(name, callback, ...)` to start a thread.

```lua
local worker = thread.create("my-worker", function(message)
  print(message)
  return 0
end, "hello from another Lua state")

worker:wait()
```

The callback can also be a path to a Lua file. The callback return value is used
as the thread status code returned by `worker:wait()`.

:::warning
The callback runs in a separate Lua state. It does not share local variables,
objects, views, documents, or plugin state with the main thread. Pass simple
arguments into `thread.create()` and use channels to return results.
:::

## Passing data

Thread arguments and channel values can contain strings, booleans, numbers,
tables, and `nil`. Avoid sending functions, userdata, editor objects, documents,
views, or channels inside tables.

When passing tables, prefer tables with actual values. Empty nested tables are
not useful across the thread boundary, so either omit them or make the worker
treat a missing table as an empty list.

```lua
local options = {
  root = core.root_project().path,
  tags = { "TODO", "FIXME" }
}

local worker = thread.create("scan-worker", scan_worker, options)
```

## Channels

Channels are named queues shared across Lua states. Call
`thread.get_channel(name)` from any thread to access the same queue.

Common operations are:

- `channel:push(value)` to enqueue a value;
- `channel:first()` to inspect the next value without removing it;
- `channel:pop()` to remove the next value;
- `channel:wait()` to block until a value is available;
- `channel:clear()` to remove all queued values.

Use unique channel names per task or include an incrementing id in the channel
name. This prevents old work from mixing with new work.

## Example: file scanner

This example scans a list of files in a worker thread. The main thread uses a
coroutine to poll the result channel, update plugin state, and wait for the
worker to finish.

```lua
local core = require "core"

local scan_id = 0

local function scan_worker(id, files)
  local results = thread.get_channel("example_scan_results_" .. id)
  local status = thread.get_channel("example_scan_status_" .. id)
  local stop = thread.get_channel("example_scan_stop_" .. id)

  for _, filename in ipairs(files) do
    if stop:first() == "stop" then
      status:clear()
      status:push("stopped")
      return 1
    end

    local matches = 0
    local fp = io.open(filename)
    if fp then
      for line in fp:lines() do
        if line:find("TODO", 1, true) then
          matches = matches + 1
        end
      end
      fp:close()
    end

    results:push({
      filename = filename,
      matches = matches
    })
  end

  status:clear()
  status:push("finished")
  return 0
end

local function start_scan(files)
  scan_id = scan_id + 1
  local id = scan_id

  local results = thread.get_channel("example_scan_results_" .. id)
  local status = thread.get_channel("example_scan_status_" .. id)
  local stop = thread.get_channel("example_scan_stop_" .. id)

  local worker, err = thread.create("example-scan-" .. id, scan_worker, id, files)
  if not worker then
    core.error("Could not start scan: %s", err or "unknown error")
    return
  end

  local scan = {
    id = id,
    worker = worker,
    results = {}
  }

  core.add_thread(function()
    local state = status:first()

    while state ~= "finished" and state ~= "stopped" do
      local result = results:first()
      while result do
        scan.results[result.filename] = result.matches
        results:pop()
        result = results:first()
      end

      coroutine.yield()
      state = status:first()
    end

    -- Drain any final results before cleaning up.
    local result = results:first()
    while result do
      scan.results[result.filename] = result.matches
      results:pop()
      result = results:first()
    end

    worker:wait()
    results:clear()
    status:clear()
    stop:clear()

    core.log("Scan finished with %d files", #files)
  end)

  return scan
end

local scan = start_scan({
  core.project_absolute_path("init.lua"),
  core.project_absolute_path("config.lua")
})

-- Another coroutine or command can request cancellation.
core.add_thread(function()
  coroutine.yield(1)
  if scan then
    local stop = thread.get_channel("example_scan_stop_" .. scan.id)
    stop:push("stop")
  end
end)
```

The worker does file IO and counting. The coroutine on the main thread drains
the channel, updates Lua tables owned by the plugin, and joins the thread with
`worker:wait()`.

## Practical guidelines

- Always call `Thread:wait()` from a coroutine once the worker is done or
  cancelled.
- Do not clear a stop channel before the worker has observed it and exited.
- Do not use the same weak reference key for multiple poller coroutines that
  each need to join different native threads.
- Use generation ids or unique channel names to ignore stale results from old
  scans.
- Keep thread payloads simple. If an option list is empty, omit it and let the
  worker use `options.list or {}`.
- Report worker startup failures to the user instead of silently dropping work.

## Threads vs coroutines

Use coroutines for scheduling main-thread work over multiple frames. Use real
threads for work that should happen outside the main thread. In many plugins the
best design combines both: real threads perform heavy work, channels move data,
and a `core.add_thread()` coroutine synchronizes results back into the editor.
