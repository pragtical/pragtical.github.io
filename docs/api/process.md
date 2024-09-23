---
sidebar_position: 5
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# process

Functionality that allows you to launch subprocesses and read
or write to them in a non-blocking fashion.

## ERROR_INVAL

```lua
(field) ERROR_INVAL: integer
```

Error triggered when trying to terminate or kill a non running process,
its value is platform dependent, so the value declared on this
interface does not represents the real one.

---

## ERROR_NOMEM

```lua
(field) ERROR_NOMEM: integer
```

Error triggered when no memory is available to allocate the process,
its value is platform dependent, so the value declared on this
interface does not represents the real one.

---

## ERROR_PIPE

```lua
(field) ERROR_PIPE: integer
```

Error triggered when the stdout, stderr or stdin fails while reading
or writing, its value is platform dependent, so the value declared on this
interface does not represents the real one.

---

## ERROR_TIMEDOUT

```lua
(field) ERROR_TIMEDOUT: integer
```

Error triggered when a process takes more time than that specified
by the deadline parameter given on process:start(),
its value is platform dependent, so the value declared on this
interface does not represents the real one.

---

## ERROR_WOULDBLOCK

```lua
(field) ERROR_WOULDBLOCK: integer
```

Error triggered when a read or write action is blocking,
its value is platform dependent, so the value declared on this
interface does not represents the real one.

---

## REDIRECT_DEFAULT

```lua
(field) REDIRECT_DEFAULT: integer
```

Default behavior for redirecting streams.
This flag is deprecated and for backwards compatibility with reproc only.
The behavior of this flag may change in future versions of Pragtical.

---

## REDIRECT_DISCARD

```lua
(field) REDIRECT_DISCARD: integer
```

Discard this stream (piping it to /dev/null)

---

## REDIRECT_PARENT

```lua
(field) REDIRECT_PARENT: integer
```

Redirect this stream to the parent.

---

## REDIRECT_PIPE

```lua
(field) REDIRECT_PIPE: integer
```

Allow Process API to read this stream via process:read functions.

---

## REDIRECT_STDOUT

```lua
(field) REDIRECT_STDOUT: integer
```

Redirect this stream to stdout.
This flag can only be used on process.options.stderr.

---

## STREAM_STDERR

```lua
(field) STREAM_STDERR: integer
```

Used for the process:close_stream() method to close stderr.

---

## STREAM_STDIN

```lua
(field) STREAM_STDIN: integer
```

Used for the process:close_stream() method to close stdin.

---

## STREAM_STDOUT

```lua
(field) STREAM_STDOUT: integer
```

Used for the process:close_stream() method to close stdout.

---

## WAIT_DEADLINE

```lua
(field) WAIT_DEADLINE: integer
```

Instruct process:wait() to wait until the deadline given on process:start()

---

## WAIT_INFINITE

```lua
(field) WAIT_INFINITE: integer
```

Instruct process:wait() to wait until the process ends.

---

## process.options

Options that can be passed to process.start()

### cwd

```lua
(field) cwd: string
```

---

### env

```lua
(field) env: table<string, string>
```

---

### stderr

```lua
(field) stderr: `process.REDIRECT_DEFAULT`|`process.REDIRECT_DISCARD`|`process.REDIRECT_PARENT`|`process.REDIRECT_PIPE`|`process.REDIRECT_STDOUT`
```

---

### stdin

```lua
(field) stdin: `process.REDIRECT_DEFAULT`|`process.REDIRECT_DISCARD`|`process.REDIRECT_PARENT`|`process.REDIRECT_PIPE`|`process.REDIRECT_STDOUT`
```

---

### stdout

```lua
(field) stdout: `process.REDIRECT_DEFAULT`|`process.REDIRECT_DISCARD`|`process.REDIRECT_PARENT`|`process.REDIRECT_PIPE`|`process.REDIRECT_STDOUT`
```

---

### timeout

```lua
(field) timeout: number
```

---

## start

```lua
function process.start(command_and_params: table, options: process.options)
  -> process|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Create and start a new process

@*param* `command_and_params` — First index is the command to execute

and subsequente elements are parameters for the command.


```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## strerror

```lua
function process.strerror(code: integer)
  -> string|nil
```

Translates an error code into a useful text message

---

## close_stream

```lua
(method) process:close_stream(stream: `process.STREAM_STDERR`|`process.STREAM_STDIN`|`process.STREAM_STDOUT`)
  -> integer|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Allows you to close a stream pipe that you will not be using.



```lua
stream:
    | `process.STREAM_STDIN`
    | `process.STREAM_STDOUT`
    | `process.STREAM_STDERR`

errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## kill

```lua
(method) process:kill()
  -> boolean|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Sends SIGKILL to the process


```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## pid

```lua
(method) process:pid()
  -> id: integer
```

Get the process id.

@*return* `id` — Process id or 0 if not running.

---

## read

```lua
(method) process:read(stream: `process.STREAM_STDERR`|`process.STREAM_STDIN`|`process.STREAM_STDOUT`, len?: integer)
  -> string|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Read from the given stream type, if the process fails with a ERROR_PIPE it is
automatically destroyed returning nil along error message and code.

@*param* `len` — Amount of bytes to read, defaults to 2048.



```lua
stream:
    | `process.STREAM_STDIN`
    | `process.STREAM_STDOUT`
    | `process.STREAM_STDERR`

errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## read_stderr

```lua
(method) process:read_stderr(len?: integer)
  -> string|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Read from stderr, if the process fails with a ERROR_PIPE it is
automatically destroyed returning nil along error message and code.

@*param* `len` — Amount of bytes to read, defaults to 2048.



```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## read_stdout

```lua
(method) process:read_stdout(len?: integer)
  -> string|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Read from stdout, if the process fails with a ERROR_PIPE it is
automatically destroyed returning nil along error message and code.

@*param* `len` — Amount of bytes to read, defaults to 2048.



```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## returncode

```lua
(method) process:returncode()
  -> number|nil
```

Get the exit code of the process or nil if still running.

---

## running

```lua
(method) process:running()
  -> boolean
```

Check if the process is running

---

## terminate

```lua
(method) process:terminate()
  -> boolean|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Sends SIGTERM to the process


```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## wait

```lua
(method) process:wait(timeout: integer|`process.WAIT_DEADLINE`|`process.WAIT_INFINITE`)
  -> exit_status: integer|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Wait the specified amount of time for the process to exit.

@*param* `timeout` — Time to wait in milliseconds,

if 0, the function will only check if process is running without waiting.

@*return* `exit_status` — The process exit status or nil on error

@*return* `errmsg`

@*return* `errcode`

```lua
timeout:
    | `process.WAIT_INFINITE`
    | `process.WAIT_DEADLINE`

errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

## write

```lua
(method) process:write(data: string)
  -> bytes: integer|nil
  2. errmsg: string
  3. errcode: integer|`process.ERROR_INVAL`|`process.ERROR_NOMEM`|`process.ERROR_PIPE`|`process.ERROR_TIMEDOUT`...(+1)
```

Write to the stdin, if the process fails with a ERROR_PIPE it is
automatically destroyed returning nil along error message and code.


@*return* `bytes` — The amount of bytes written or nil if error

@*return* `errmsg`

@*return* `errcode`

```lua
errcode:
    | `process.ERROR_PIPE`
    | `process.ERROR_WOULDBLOCK`
    | `process.ERROR_TIMEDOUT`
    | `process.ERROR_INVAL`
    | `process.ERROR_NOMEM`
```

---

