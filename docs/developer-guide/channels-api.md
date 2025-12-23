---
sidebar_position: 10
description: Understanding the Channels API implementation for thread communication
---

# Channels API

The Channels API provides thread-safe message passing between threads. It's implemented in C and exposed to Lua through the `thread` module.

## Overview

Channels are named FIFO queues that allow threads to communicate by passing data. They handle synchronization automatically using SDL mutexes and condition variables.

**Key features:**
- Thread-safe message passing
- Named channels (retrieved by string name)
- Reference counted (automatically cleaned up)
- Supports basic Lua types: `nil`, `boolean`, `number`, `string`, `table`

## Architecture

```
┌─────────────────┐
│  Lua Thread 1   │──┐
└─────────────────┘  │
                     ├──> ┌──────────────┐
┌─────────────────┐  │    │   Channel    │
│  Lua Thread 2   │──┼───>│  "messages"  │
└─────────────────┘  │    │  [FIFO Queue]│
                     │    └──────────────┘
┌─────────────────┐  │
│  Lua Thread 3   │──┘
└─────────────────┘
```

## Core Components

### Channel Structure

Each channel maintains:
- **Name**: Unique string identifier
- **Queue**: FIFO list of values
- **Mutex**: Protects queue access
- **Condition Variable**: Signals waiting threads
- **Reference Count**: Tracks active references
- **Counters**: Tracks sent/received messages

### Value Storage

Values are stored in `ChannelValue` structures that preserve types:
- Primitives are copied by value
- Strings are deep-copied (including embedded `\0`)
- Tables are recursively serialized (keys and values)
- Functions and userdata are **not supported**

## API Functions

### Getting a Channel

```c
int f_channel_get(lua_State *L)
```

**Lua:** `thread.get_channel(name) -> Channel`

Creates or retrieves a named channel. Channels are globally registered and reference counted.

**Thread-safe:** Yes (uses global `ChannelsListMutex`)

### Channel Methods

#### first()
```c
int m_channel_first(lua_State *L)
```

**Lua:** `channel:first() -> value|nil`

Returns the first queued value without removing it. Non-blocking.

**Use case:** Peek at next message without consuming it

---

#### last()
```c
int m_channel_last(lua_State *L)
```

**Lua:** `channel:last() -> value|nil`

Returns the last queued value without removing it. Non-blocking.

**Use case:** Check most recent message in queue

---

#### push()
```c
int m_channel_push(lua_State *L)
```

**Lua:** `channel:push(value) -> boolean, error`

Adds value to end of queue. Non-blocking.

**Use case:** Send messages without waiting for receipt

**Example:**
```lua
local channel = thread.get_channel("work")
channel:push({ task = "process", file = "data.txt" })
```

---

#### supply()
```c
int m_channel_supply(lua_State *L)
```

**Lua:** `channel:supply(value) -> boolean, error`

Adds value to queue and **blocks until a thread reads it**. Ensures delivery.

**Use case:** Synchronous handoff where you need confirmation

**Example:**
```lua
-- This will block until worker thread calls wait()
channel:supply({ urgent = true, data = "critical" })
print("Worker received the message")
```

---

#### pop()
```c
int m_channel_pop(lua_State *L)
```

**Lua:** `channel:pop()`

Removes first value from queue. Non-blocking.

**Use case:** Discard messages after reading with `first()`

---

#### wait()
```c
int m_channel_wait(lua_State *L)
```

**Lua:** `channel:wait() -> value`

Blocks until a value is available, then returns it **without removing** it.

**Use case:** Wait for incoming messages in worker threads

**Example:**
```lua
while true do
  local msg = channel:wait()  -- Blocks here
  channel:pop()               -- Remove it
  if msg.type == "quit" then break end
  process(msg)
end
```

---

#### clear()
```c
int m_channel_clear(lua_State *L)
```

**Lua:** `channel:clear()`

Removes all queued values and wakes waiting threads.

**Use case:** Reset channel state, cancel pending messages

## Synchronization Details

### Mutex Hierarchy

1. **Global List Mutex** (`ChannelsListMutex`): Protects channel creation/lookup
2. **Per-Channel Mutex**: Protects individual channel queues

**Important:** Never hold both locks simultaneously to avoid deadlocks.

### Condition Variables

Condition variables wake threads when:
- A value is pushed (wakes `wait()` and `supply()`)
- A value is popped (wakes `supply()`)
- Queue is cleared (wakes all)

### Reference Counting

Channels use atomic reference counting:
- Incremented when `get_channel()` returns
- Decremented when Lua garbage collects the channel object
- Channel freed when refcount reaches zero

## Memory Management

### Value Serialization

When pushing a table:
```lua
channel:push({ x = 10, nested = { y = 20 } })
```

The implementation:
1. Recursively walks the table structure
2. Deep-copies all keys and values
3. Preserves key order (insertion order)
4. Allocates separate memory for strings

**Limitation:** Circular references will cause infinite recursion.

### Cleanup

Channels are automatically freed when:
- No Lua objects reference them (refcount = 0)
- Automatically removed from global list
- Queue contents freed recursively
- SDL primitives (mutex, condition) destroyed

## Usage Patterns

### Producer-Consumer

```lua
-- Producer thread
local channel = thread.get_channel("tasks")
for i = 1, 100 do
  channel:push({ id = i, work = generate_work() })
end
channel:push({ type = "done" })

-- Consumer thread
local channel = thread.get_channel("tasks")
while true do
  local task = channel:wait()
  channel:pop()
  if task.type == "done" then break end
  process_task(task)
end
```

### Request-Response

```lua
-- Main thread
local request = thread.get_channel("requests")
local response = thread.get_channel("responses")

request:push({ action = "compute", value = 42 })
local result = response:wait()
response:pop()

-- Worker thread
local request = thread.get_channel("requests")
local response = thread.get_channel("responses")

while true do
  local req = request:wait()
  request:pop()
  local result = do_work(req)
  response:push(result)
end
```

### Synchronized Handoff

```lua
-- Use supply() when you need confirmation
local channel = thread.get_channel("sync")

-- This blocks until worker calls wait()
channel:supply({ critical = "data" })
print("Worker has received the data")
```

## Performance Considerations

- **Lock contention**: Each operation locks the channel mutex briefly
- **Value copying**: All data is deep-copied; avoid large tables
- **String allocation**: Each string push allocates new memory
- **Blocking operations**: `wait()` and `supply()` block the calling thread

**Best practices:**
- Keep messages small and simple
- Use separate channels for different data streams
- Consider batching small messages into arrays
- Don't send large binary data through channels

## Thread Safety

All channel operations are thread-safe, but:

**Safe:**
```lua
-- Multiple threads can push simultaneously
channel:push(data)
```

**Unsafe (race condition):**
```lua
-- Don't do this from multiple threads
if channel:first() then
  local val = channel:wait()
  channel:pop()
end
```

**Safe pattern:**
```lua
-- Always pair wait() with pop()
local val = channel:wait()
channel:pop()
process(val)
```

## Debugging Tips

1. **Enable channel name logging:**
   ```lua
   print(tostring(channel))  -- "channel messages"
   ```

2. **Check for deadlocks:**
   - `supply()` blocks if no thread calls `wait()`
   - `wait()` blocks if no thread calls `push()`

3. **Memory leaks:**
   - Ensure threads don't hold channel references indefinitely
   - Use `clear()` to free queued messages

4. **Lost messages:**
   - Remember `wait()` doesn't remove values; call `pop()` after
   - Multiple `wait()` calls return the same value until `pop()`

## Limitations

- **No function passing**: Functions and userdata cannot be serialized
- **No circular tables**: Will cause infinite recursion/crashes
- **No metatables**: Table metatables are not preserved
- **String copying**: All strings are copied, not shared
- **Global namespace**: Channel names are global across all threads

## Implementation Notes

Based on the [luasdl2 channel implementation](https://github.com/Tangent128/luasdl2) with modifications for Pragtical's threading model.

**Key differences from other message passing systems:**
- `wait()` peeks instead of consuming (must call `pop()` separately)
- `supply()` provides synchronous handoff semantics
- Reference counting prevents premature cleanup
- Supports table serialization out of the box
