---
sidebar_position: 24
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.dirwatch

A wrapper around `dirmonitor` for filesystem monitoring that automatically
takes care of the native backend differences and provides some ease of use.

It can be used to watch changes in files and directories.
The user repeatedly calls DirWatch:check() with a callback inside a coroutine.
If a file or directory had changed, the callback is called with the corresponding file.

```lua
local dirwatch = require "core.dirwatch"
```

## last_modified

```lua
(field) last_modified: table
```

---

## monitor

```lua
(field) monitor: dirmonitor
```

The dirmonitor instance associated with this watcher.

---

## reverse_watched

```lua
(field) reverse_watched: table<number, string>
```

Stores the paths mapped by their unique fd.

---

## scanned

```lua
(field) scanned: table<string, number>
```

Stores the last modified time of paths.

---

## single_watch_count

```lua
(field) single_watch_count: number
```

Number of files that are being watched.

---

## single_watch_top

```lua
(field) single_watch_top: string
```

The first file that is being watched.

---

## watched

```lua
(field) watched: table<string, boolean|number>
```

Stores the paths that are being watched, and their unique fd.

---

## check

```lua
(method) core.dirwatch:check(change_callback: fun(path: string), scan_time?: number, wait_time?: number)
  -> boolean
```

Checks each watched paths for changes.
This function must be called in a coroutine, e.g. inside a thread created with `core.add_thread()`.

@*param* `scan_time` — Maximum amount of time, in seconds, before the function yields execution.

@*param* `wait_time` — The duration to yield execution (in seconds).

@*return* — If true, a path had changed.

---

## new

```lua
(method) core.dirwatch:new()
```

Constructor.

---

## scan

```lua
(method) core.dirwatch:scan(path: string, unwatch?: boolean)
```

Similar to `DirWatch:watch` but not using the native `dirmonitor` backends
and instead relying on continuous file timestamps monitoring which is slower,
should not be used unless necessary.

Adding a directory using this function will not report child changes.

@*param* `unwatch` — If true, remove this directory from the watch list.

---

## unwatch

```lua
(method) core.dirwatch:unwatch(path: string)
```

Removes a path from the watch or scan list.

@*param* `path` — The path to remove. This should be an absolute path.

---

## watch

```lua
(method) core.dirwatch:watch(path: string, unwatch?: boolean)
```

Watches a path.

It is recommended to call this function on every subdirectory if the given path
points to a directory. This is not required for Windows, but should be done to ensure
cross-platform compatibility.

Using this function on individual files is possible, but discouraged as it can cause
system resource exhaustion.

@*param* `path` — The path to watch. This should be an absolute path.

@*param* `unwatch` — If true, the path is removed from the watch list.

---

