---
sidebar_position: 17
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# thread

Provides threading capabilities.
Workers have independent Lua states, but belong to the editor session that
created them, including workers created by other workers. Completed worker
states are closed even while their Thread handles are retained.

Restart and normal exit request shutdown and wait for all workers to finish
before closing the editor state. Channel operations interrupt workers during
shutdown. Computation and native I/O must finish or reach a channel operation;
a worker that never does so can prevent restart. Cancellation is not a forced
termination of native code.

## thread.Channel

```lua
(field) thread.Channel: thread.Channel
```

A channel object.

---

## thread.Thread

```lua
(field) thread.Thread: thread.Thread
```

A thread object.

---

## thread.Channel

A channel object.

### __tostring

```lua
(method) thread.Channel:__tostring()
  -> string
```

Metamethod that automatically converts a channel to a string representation.

---

### clear

```lua
(method) thread.Channel:clear()
```

Remove all elements from the channel.

---

### first

```lua
(method) thread.Channel:first()
  -> boolean|string|number|table|nil
```

Get the first element of the list in the channel.

---

### last

```lua
(method) thread.Channel:last()
  -> boolean|string|number|table|nil
```

Get the last element of the list in the channel.

---

### pop

```lua
(method) thread.Channel:pop()
```

Remove the first element of a channel.

---

### push

```lua
(method) thread.Channel:push(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list.

@*return* `errorMessage`: `string`

---

### supply

```lua
(method) thread.Channel:supply(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list and waits for thread to read it.

@*return* `errorMessage`: `string`

---

### wait

```lua
(method) thread.Channel:wait()
  -> boolean|string|number|table|nil
```

Wait until the channel has one element and return it.

---

## thread.Thread

A thread object.

### __eq

```lua
(method) thread.Thread:__eq(thread1: thread.Thread, thread2: thread.Thread)
  -> boolean
```

Metamethod to automatically compare two threads.

@*param* `thread1`: [`thread.Thread`](/docs/api/thread#threadthread) — A thread object.

@*param* `thread2`: [`thread.Thread`](/docs/api/thread#threadthread) — A thread object.

---

### __tostring

```lua
(method) thread.Thread:__tostring()
  -> string
```

Metamethod that automatically converts a thread to a string representation.

---

### get_id

```lua
(method) thread.Thread:get_id()
  -> integer
```

Get the id of a thread.

---

### get_name

```lua
(method) thread.Thread:get_name()
  -> string
```

Get the name assigned to a thread.

---

### wait

```lua
(method) thread.Thread:wait()
  -> integer
```

Wait for a thread to finish and get the return code.
Also waits for the worker's Lua state to close. Repeated calls return the
same status. Dropping a Thread handle does not cancel a running worker;
the session retains ownership and reclaims its native resources on completion.

---

## thread.Channel.__tostring

```lua
(method) thread.Channel:__tostring()
  -> string
```

Metamethod that automatically converts a channel to a string representation.

---

## thread.Channel.clear

```lua
(method) thread.Channel:clear()
```

Remove all elements from the channel.

---

## thread.Channel.first

```lua
(method) thread.Channel:first()
  -> boolean|string|number|table|nil
```

Get the first element of the list in the channel.

---

## thread.Channel.last

```lua
(method) thread.Channel:last()
  -> boolean|string|number|table|nil
```

Get the last element of the list in the channel.

---

## thread.Channel.pop

```lua
(method) thread.Channel:pop()
```

Remove the first element of a channel.

---

## thread.Channel.push

```lua
(method) thread.Channel:push(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list.

@*return* `errorMessage`: `string`

---

## thread.Channel.supply

```lua
(method) thread.Channel:supply(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list and waits for thread to read it.

@*return* `errorMessage`: `string`

---

## thread.Channel.wait

```lua
(method) thread.Channel:wait()
  -> boolean|string|number|table|nil
```

Wait until the channel has one element and return it.

---

## thread.Thread.__eq

```lua
(method) thread.Thread:__eq(thread1: thread.Thread, thread2: thread.Thread)
  -> boolean
```

Metamethod to automatically compare two threads.

@*param* `thread1`: [`thread.Thread`](/docs/api/thread#threadthread) — A thread object.

@*param* `thread2`: [`thread.Thread`](/docs/api/thread#threadthread) — A thread object.

---

## thread.Thread.__tostring

```lua
(method) thread.Thread:__tostring()
  -> string
```

Metamethod that automatically converts a thread to a string representation.

---

## thread.Thread.get_id

```lua
(method) thread.Thread:get_id()
  -> integer
```

Get the id of a thread.

---

## thread.Thread.get_name

```lua
(method) thread.Thread:get_name()
  -> string
```

Get the name assigned to a thread.

---

## thread.Thread.wait

```lua
(method) thread.Thread:wait()
  -> integer
```

Wait for a thread to finish and get the return code.
Also waits for the worker's Lua state to close. Repeated calls return the
same status. Dropping a Thread handle does not cancel a running worker;
the session retains ownership and reclaims its native resources on completion.

---

## thread.create

```lua
function thread.create(name: string, callback: function, ...boolean|string|number|table|nil)
  -> thread.Thread|nil
  2. errorMessage: string
```

Create a new thread and starts it.

@*param*: `boolean|string|number|table|nil` — Optional arguments passed to callback

@*return*: [`thread.Thread`](/docs/api/thread#threadthread)`|nil`

@*return* `errorMessage`: `string`

---

## thread.get_channel

```lua
function thread.get_channel(name: string)
  -> thread.Channel|nil
  2. errorMessage: string
```

Creates a new channel or retrieve existing one.
Names are shared within an editor session and its descendant workers, not
across restarts. Keep a channel handle while sending or receiving: queued
values are discarded when the last handle is collected.
Channel operations raise a cancellation error when the session shuts down,
including blocked wait() and supply() calls. Workers should not suppress it.

@*return*: [`thread.Channel`](/docs/api/thread#threadchannel)`|nil`

@*return* `errorMessage`: `string`

---

## thread.get_cpu_count

```lua
function thread.get_cpu_count()
  -> number
```

Get the number of CPU cores available.

Returns the total number of logical CPU cores. On CPUs that include
technologies such as hyperthreading, the number of logical cores may be
more than the number of physical cores.

---

