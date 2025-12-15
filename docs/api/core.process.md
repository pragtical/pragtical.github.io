---
sidebar_position: 37
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
```

Closes the stream and its underlying resources.

---

### read

```lua
(method) process.stream:read(bytes: integer|`"L"`|`"all"`|`"line"`, options?: process.stream.readoption)
  -> data: string|nil
```

Reads data from the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occassionally to avoid blocking the editor. 
If the function is not called inside the coroutine, the function returns immediately
without waiting for more data.

@*param* `bytes` — The format or number of bytes to read.

@*param* `options` — Options for reading from the stream.

@*return* `data` — The string read from the stream, or nil if no data could be read.

```lua
bytes:
    | `"line"` -- Reads a single line
    | `"all"` -- Reads the entire stream
    | `"L"` -- Reads a single line, keeping the trailing newline character.
```

---

### write

```lua
(method) process.stream:write(bytes: string, options?: process.stream.writeoption)
  -> num_bytes: integer
```

Writes data into the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occassionally to avoid blocking the editor. 
If the function is not called inside the coroutine,
the function writes as much data as possible before returning.

@*param* `bytes` — The bytes to write into the stream.

@*param* `options` — Options for writing to the stream.

@*return* `num_bytes` — The number of bytes written to the stream.

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
function process.start(command: any, options: any)
  -> table
```

---

## process.stream.close

```lua
(method) process.stream:close()
```

Closes the stream and its underlying resources.

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
```

Reads data from the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occassionally to avoid blocking the editor. 
If the function is not called inside the coroutine, the function returns immediately
without waiting for more data.

@*param* `bytes` — The format or number of bytes to read.

@*param* `options` — Options for reading from the stream.

@*return* `data` — The string read from the stream, or nil if no data could be read.

```lua
bytes:
    | `"line"` -- Reads a single line
    | `"all"` -- Reads the entire stream
    | `"L"` -- Reads a single line, keeping the trailing newline character.
```

---

## process.stream.write

```lua
(method) process.stream:write(bytes: string, options?: process.stream.writeoption)
  -> num_bytes: integer
```

Writes data into the stream.

When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occassionally to avoid blocking the editor. 
If the function is not called inside the coroutine,
the function writes as much data as possible before returning.

@*param* `bytes` — The bytes to write into the stream.

@*param* `options` — Options for writing to the stream.

@*return* `num_bytes` — The number of bytes written to the stream.

---

## process.wait

```lua
(method) process:wait(timeout?: number, scan?: number)
  -> exit_code: integer|nil
```

Waits for the process to exit.
When called inside a coroutine such as `core.add_thread()`,
the function yields to the main thread occassionally to avoid blocking the editor. 
Otherwise, the function blocks the editor until the process exited or the timeout has expired.

@*param* `timeout` — The amount of seconds to wait. If omitted, the function will wait indefinitely.

@*param* `scan` — The amount of seconds to yield while scanning. If omittted, the scan rate will be the FPS.

@*return* `exit_code` — The exit code for this process, or nil if the wait timed out.

---

