---
sidebar_position: 5
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# dirmonitor

Functionality that allows to monitor a directory or file for changes
using the native facilities provided by the current operating system
for better efficiency and performance.

## dirmonitor.callback

## backends

```lua
function dirmonitor.backends()
  -> table.
```

List all available dirmonitor backends

---

## new

```lua
function dirmonitor.new(backend?: string)
  -> dirmonitor
```

Creates a new dirmonitor object.

@*param* `backend` — Name of the dirmonitor backend to be used

---

## check

```lua
(method) dirmonitor:check(callback: fun(fd_or_path: string|integer), error_callback: fun(error: any):nil)
  -> changes: boolean?
```

Verify if the resources registered for monitoring have changed, should
be called periodically to check for changes.

The callback will be called for each file or directory that was:
edited, removed or added. A file descriptor will be passed to the
callback in "multiple" mode or a path in "single" mode.

If an error occurred during the callback execution, the error callback will be called with the error object.
This callback should not manipulate coroutines to avoid deadlocks.


@*return* `changes` — True when changes were detected.

---

## mode

```lua
(method) dirmonitor:mode()
  -> "multiple"|"single"
```

Get the working mode for the current file system monitoring backend.

"multiple": various file descriptors are needed to recursively monitor a
directory contents, backends: inotify and kqueue.

"single": a single process takes care of monitoring a path recursively
so no individual file descriptors are used, backends: win32 and fsevents.


```lua
return #1:
    | "single"
    | "multiple"
```

---

## unwatch

```lua
(method) dirmonitor:unwatch(fd_or_path: string|integer)
```

Stops monitoring a file descriptor in "multiple" mode
or in "single" mode a directory path.

@*param* `fd_or_path` — A file descriptor or path.

---

## watch

```lua
(method) dirmonitor:watch(path: string)
  -> fd: integer
```

Monitors a directory or file for changes.

In "multiple" mode you will need to call this method more than once to
recursively monitor directories and files.

In "single" mode you will only need to call this method for the parent
directory and every sub directory and files will get automatically monitored.


@*return* `fd` — The file descriptor id assigned to the monitored path when

the mode is "multiple", in "single" mode: 1 for success or -1 on failure.

---

