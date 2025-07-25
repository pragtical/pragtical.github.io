---
sidebar_position: 15
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# thread

Provides threading capabilities.

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

---

### supply

```lua
(method) thread.Channel:supply(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list and waits for thread to read it.

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

---

## thread.Channel.supply

```lua
(method) thread.Channel:supply(element: boolean|string|number|table|nil)
  -> boolean|nil
  2. errorMessage: string
```

Add a new element to the end of a channel list and waits for thread to read it.

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

---

## thread.create

```lua
function thread.create(name: string, callback: function, ...boolean|string|number|table|nil)
  -> thread.Thread|nil
  2. errorMessage: string
```

Create a new thread and starts it.

@*param* `...` — Optional arguments passed to callback

---

## thread.get_channel

```lua
function thread.get_channel(name: string)
  -> thread.Channel|nil
  2. errorMessage: string
```

Creates a new channel or retrieve existing one.

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

