---
sidebar_position: 42
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.process

```lua
local process = require "core.process"
```

## process.stream

```lua
(field) process.stream: process.stream
```

An abstraction over the standard input and outputs of a process
that allows you to read and write data easily.

---

## process.stream.__index

```lua
(field) process.stream.__index: process.stream
```

An abstraction over the standard input and outputs of a process
that allows you to read and write data easily.

---

## process.stream.buf

```lua
(field) process.stream.buf: string[]
```

---

## process.stream.len

```lua
(field) process.stream.len: number
```

---

## process.stream

An abstraction over the standard input and outputs of a process
that allows you to read and write data easily.

### __index

```lua
(field) __index: process.stream
```

An abstraction over the standard input and outputs of a process
that allows you to read and write data easily.

---

### buf

```lua
(field) buf: string[]
```

---

### fd

```lua
(field) fd: `process.STREAM_STDERR`|`process.STREAM_STDIN`|`process.STREAM_STDOUT`
```

---

### len

```lua
(field) len: number
```

---

### process

```lua
(field) process: process
```

Functionality that allows you to launch subprocesses and read
or write to them in a non-blocking fashion.

---

### new

```lua
function process.stream.new(proc: process, fd: `process.STREAM_STDERR`|`process.STREAM_STDIN`|`process.STREAM_STDOUT`)
  -> process.stream
```

Creates a stream from a process.

@*param* `proc` — The process to wrap.

@*param* `fd` — The standard stream of the process to wrap.

```lua
fd:
    | `process.STREAM_STDIN`
    | `process.STREAM_STDOUT`
    | `process.STREAM_STDERR`
```

---

### close

```lua
(method) process.stream:close()
  -> success: boolean|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Closes the stream and its underlying resources.

@*return* `success` — True when closed, or nil on error.

@*return* `errmsg` — The error message when closing fails.

@*return* `errcode` — The error code when closing fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

### read

```lua
(method) process.stream:read(bytes: integer|`"L"`|`"all"`|`"line"`, options?: process.stream.readoption)
  -> data: string|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Reads data from the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occasionally to avoid blocking the editor.
If the function is not called inside the coroutine, the function returns immediately
without waiting for more data.

@*param* `bytes` — The format or number of bytes to read.

@*param* `options` — Options for reading from the stream.

@*return* `data` — The string read from the stream, nil if no data could be read or an error occurred.

@*return* `errmsg` — The error message when reading fails.

@*return* `errcode` — The error code when reading fails.

```lua
bytes:
    | `"line"` -- Reads a single line
    | `"all"` -- Reads the entire stream
    | `"L"` -- Reads a single line, keeping the trailing newline character.

errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

### write

```lua
(method) process.stream:write(bytes: string, options?: process.stream.writeoption)
  -> num_bytes: integer|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Writes data into the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occasionally to avoid blocking the editor.
If the function is not called inside the coroutine,
the function writes as much data as possible before returning.

@*param* `bytes` — The bytes to write into the stream.

@*param* `options` — Options for writing to the stream.

@*return* `num_bytes` — The number of bytes written to the stream, or nil on error.

@*return* `errmsg` — The error message when writing fails.

@*return* `errcode` — The error code when writing fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## process.stream.readoption

Options that can be passed to stream.read().

### scan

```lua
(field) scan: number
```

The number of seconds to yield in a coroutine. Defaults to `1/config.fps`.

---

### timeout

```lua
(field) timeout: number
```

The number of seconds to wait before the function throws an error. Reads do not time out by default.

---

## process.stream.readtype

```lua
process.stream.readtype:
    | `"line"` -- Reads a single line
    | `"all"` -- Reads the entire stream
    | `"L"` -- Reads a single line, keeping the trailing newline character.
```

## process.stream.writeoption

Options that can be passed into stream.write().

### scan

```lua
(field) scan: number
```

The number of seconds to yield in a coroutine. Defaults to `1/config.fps`.

---

## process.__index

```lua
(method) process:__index(k: any)
  -> function|unknown
```

---

## process.start

```lua
function process.start(command: string|table, options?: process.options)
  -> proc: process|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Create and start a new process, wrapping the native process with stream helpers.

When `options.env` is a table, values are merged over the system environment.
On Windows, environment keys are compared case-insensitively and sorted for
the environment block passed to the native process API.

@*param* `command` — First index is the command to execute and subsequent elements are parameters.

@*return* `proc` — The wrapped process, or nil on error.

@*return* `errmsg` — The error message when process creation fails.

@*return* `errcode` — The error code when process creation fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## process.stream.close

```lua
(method) process.stream:close()
  -> success: boolean|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Closes the stream and its underlying resources.

@*return* `success` — True when closed, or nil on error.

@*return* `errmsg` — The error message when closing fails.

@*return* `errcode` — The error code when closing fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## process.stream.new

```lua
function process.stream.new(proc: process, fd: `process.STREAM_STDERR`|`process.STREAM_STDIN`|`process.STREAM_STDOUT`)
  -> process.stream
```

Creates a stream from a process.

@*param* `proc` — The process to wrap.

@*param* `fd` — The standard stream of the process to wrap.

```lua
fd:
    | `process.STREAM_STDIN`
    | `process.STREAM_STDOUT`
    | `process.STREAM_STDERR`
```

---

## process.stream.read

```lua
(method) process.stream:read(bytes: integer|`"L"`|`"all"`|`"line"`, options?: process.stream.readoption)
  -> data: string|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Reads data from the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occasionally to avoid blocking the editor.
If the function is not called inside the coroutine, the function returns immediately
without waiting for more data.

@*param* `bytes` — The format or number of bytes to read.

@*param* `options` — Options for reading from the stream.

@*return* `data` — The string read from the stream, nil if no data could be read or an error occurred.

@*return* `errmsg` — The error message when reading fails.

@*return* `errcode` — The error code when reading fails.

```lua
bytes:
    | `"line"` -- Reads a single line
    | `"all"` -- Reads the entire stream
    | `"L"` -- Reads a single line, keeping the trailing newline character.

errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## process.stream.write

```lua
(method) process.stream:write(bytes: string, options?: process.stream.writeoption)
  -> num_bytes: integer|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Writes data into the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occasionally to avoid blocking the editor.
If the function is not called inside the coroutine,
the function writes as much data as possible before returning.

@*param* `bytes` — The bytes to write into the stream.

@*param* `options` — Options for writing to the stream.

@*return* `num_bytes` — The number of bytes written to the stream, or nil on error.

@*return* `errmsg` — The error message when writing fails.

@*return* `errcode` — The error code when writing fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## process.wait

```lua
(method) process:wait(timeout?: number, scan?: number)
  -> exit_code: integer|nil
  2. errmsg: string?
  3. errcode: (integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1))?
```

Waits for the process to exit.
When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occasionally to avoid blocking the editor.
Otherwise, the function blocks the editor until the process exited or the timeout has expired.

@*param* `timeout` — The amount of milliseconds to wait. If omitted, the function will wait indefinitely.

@*param* `scan` — The amount of seconds to yield while scanning. If omitted, the scan rate will be the FPS.

@*return* `exit_code` — The exit code for this process, or nil if the wait timed out or an error occurred.

@*return* `errmsg` — The error message when the native wait fails.

@*return* `errcode` — The error code when the native wait fails.

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

