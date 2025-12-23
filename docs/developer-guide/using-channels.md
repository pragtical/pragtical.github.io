---
sidebar_position: 11
description: Using channels for thread communication in plugins
---

# Using Channels for Thread Communication

Channels provide a simple way to pass data between threads in your plugins. They work like message queues that multiple threads can read from and write to safely.

## Quick Start

```lua
local thread = require "thread"

-- Get or create a channel by name
local channel = thread.get_channel("my_messages")

-- Push data (non-blocking)
channel:push("Hello from main thread!")

-- Create a worker thread
local worker = thread.create("worker", function()
  local channel = thread.get_channel("my_messages")
  
  -- Wait for data (blocks until available)
  local message = channel:wait()
  channel:pop()  -- Remove it from queue
  
  print("Worker received:", message)
end)

worker:wait()  -- Wait for worker to finish
```

## Core Concepts

### Named Channels

Channels are identified by string names. Multiple threads can access the same channel by using the same name:

```lua
-- Main thread
local output = thread.get_channel("results")

-- Worker thread (inside thread function)
local output = thread.get_channel("results")
output:push({ status = "done" })
```

### Supported Data Types

You can send these types through channels:
- `nil`
- `boolean`
- `number`
- `string` (including strings with embedded `\0`)
- `table` (recursively serialized)

**Not supported:** functions, userdata, metatables

### Push vs Supply

**`push(value)`** - Send and continue (non-blocking)
```lua
channel:push(data)
-- Code continues immediately
```

**`supply(value)`** - Send and wait for receipt (blocking)
```lua
channel:supply(data)
-- Blocks until another thread calls wait()
print("Data was received!")
```

### Wait vs First

**`wait()`** - Block until data available, **returns but doesn't remove**
```lua
local value = channel:wait()  -- Blocks here
channel:pop()                 -- Must remove it
```

**`first()`** - Peek at first value without blocking
```lua
local value = channel:first()  -- Returns nil if empty
if value then
  channel:pop()  -- Remove it
end
```

## Common Patterns

### Worker Pool Pattern

Distribute work across multiple threads:

```lua
local files = { "file1.txt", "file2.txt", "file3.txt" }
local num_workers = 3

-- Worker function
local function worker(worker_id)
  local input = thread.get_channel("tasks")
  local output = thread.get_channel("results")
  
  while true do
    local task = input:wait()
    input:pop()
    
    if task == "STOP" then break end
    
    -- Process task
    local result = process_file(task)
    output:push(result)
  end
end

-- Create workers
local workers = {}
for i = 1, num_workers do
  workers[i] = thread.create("worker" .. i, worker, i)
end

-- Send tasks
local input = thread.get_channel("tasks")
for _, file in ipairs(files) do
  input:push(file)
end

-- Send stop signal
for i = 1, num_workers do
  input:push("STOP")
end

-- Collect results
local output = thread.get_channel("results")
local results = {}
for i = 1, #files do
  local result = output:wait()
  output:pop()
  table.insert(results, result)
end

-- Wait for cleanup
for _, worker in ipairs(workers) do
  worker:wait()
end
```

### Progress Reporting

Report progress from worker thread to UI:

```lua
-- Main thread
local status = thread.get_channel("status")
local worker = thread.create("processor", function()
  local status = thread.get_channel("status")
  
  for i = 1, 100 do
    -- Do work
    process_item(i)
    
    -- Report progress
    status:clear()  -- Clear old messages
    status:push(i)
  end
  
  status:push("done")
end)

-- Check progress (in update loop)
function MyView:update()
  local status = thread.get_channel("status")
  local progress = status:first()
  
  if progress == "done" then
    worker:wait()
    self.processing = false
  elseif type(progress) == "number" then
    self.progress = progress
  end
end
```

### Request-Response Pattern

Send work and wait for result:

```lua
-- Main thread
local function compute_async(value)
  local request = thread.get_channel("requests")
  local response = thread.get_channel("responses")
  
  request:push({ id = os.time(), value = value })
  
  local result = response:wait()
  response:pop()
  
  return result
end

-- Worker thread
thread.create("computer", function()
  local request = thread.get_channel("requests")
  local response = thread.get_channel("responses")
  
  while true do
    local req = request:wait()
    request:pop()
    
    if req.value == "STOP" then break end
    
    local result = expensive_computation(req.value)
    response:push({ id = req.id, result = result })
  end
end)
```

## Real-World Example: Project Search

Here's a simplified version of how `projectsearch.lua` uses channels:

```lua
-- Worker function that searches files
local function search_worker(worker_id, search_id, pattern)
  local files = thread.get_channel("search_files" .. search_id)
  local results = thread.get_channel("search_results" .. search_id)
  local stop = thread.get_channel("search_stop" .. search_id)
  
  while true do
    -- Check if we should stop
    if stop:first() == "stop" then break end
    
    -- Get next file to search
    local filename = files:wait()
    files:pop()
    
    if filename == "DONE" then break end
    
    -- Search file
    local matches = search_file(filename, pattern)
    
    -- Send results
    if #matches > 0 then
      results:push({ file = filename, matches = matches })
    else
      results:push(true)  -- Signal "processed, no matches"
    end
  end
end

-- Main thread
function begin_search(pattern, file_list)
  local search_id = get_unique_id()
  local num_workers = 4
  
  -- Create channels
  local files = thread.get_channel("search_files" .. search_id)
  local results = thread.get_channel("search_results" .. search_id)
  local stop = thread.get_channel("search_stop" .. search_id)
  
  -- Start workers
  local workers = {}
  for i = 1, num_workers do
    workers[i] = thread.create(
      "searcher" .. i,
      search_worker,
      i, search_id, pattern
    )
  end
  
  -- Send files to workers
  for _, file in ipairs(file_list) do
    files:push(file)
  end
  
  -- Signal completion
  for i = 1, num_workers do
    files:push("DONE")
  end
  
  return {
    results = results,
    stop = stop,
    workers = workers,
    id = search_id
  }
end

-- Collect results (called from coroutine/update loop)
function collect_results(search)
  local result = search.results:first()
  
  if result then
    search.results:pop()
    
    if type(result) == "table" then
      -- Process matches
      add_to_results_view(result)
    end
  end
  
  -- Check if all workers finished
  local all_done = true
  for _, worker in ipairs(search.workers) do
    if not worker:is_done() then
      all_done = false
      break
    end
  end
  
  return all_done
end
```

## Best Practices

### 1. Use Unique Channel Names

When running multiple operations, use unique IDs in channel names:

```lua
local operation_id = os.time()  -- or counter
local channel = thread.get_channel("results_" .. operation_id)
```

### 2. Always Pair `wait()` with `pop()`

```lua
-- ✓ Good
local value = channel:wait()
channel:pop()

-- ✗ Bad - value stays in queue
local value = channel:wait()
```

### 3. Use `clear()` for Status Channels

When only the latest value matters:

```lua
-- Update progress
status_channel:clear()  -- Remove old progress values
status_channel:push(current_progress)
```

### 4. Signal Completion with Special Values

Use sentinel values to indicate "done":

```lua
-- Worker
files_channel:push("STOP")

-- Main
if file == "STOP" then
  break
end
```

### 5. Clean Up Threads

Always wait for threads to finish:

```lua
for _, worker in ipairs(workers) do
  worker:wait()
end
```

### 6. Handle Stop Signals

Allow users to cancel long-running operations:

```lua
-- Worker checks stop channel
if stop_channel:first() == "stop" then
  break
end

-- Main thread can stop workers
function cancel_operation()
  stop_channel:push("stop")
end
```

## Common Pitfalls

### Race Condition with `first()`

```lua
-- ✗ Bad - another thread might pop() between first() and pop()
if channel:first() then
  local value = channel:wait()  -- Might block unexpectedly!
  channel:pop()
end

-- ✓ Good - use wait() directly or handle nil
local value = channel:wait()
channel:pop()
```

### Forgetting to `pop()`

```lua
-- ✗ Bad - queue grows forever
while true do
  local value = channel:wait()
  process(value)
  -- Forgot to pop()!
end

-- ✓ Good
while true do
  local value = channel:wait()
  channel:pop()  -- Remove it
  process(value)
end
```

### Deadlock with `supply()`

```lua
-- ✗ Bad - deadlock if no thread calls wait()
channel:supply(data)  -- Blocks forever

-- ✓ Good - use push() for fire-and-forget
channel:push(data)
```

### Not Handling Empty Channels

```lua
-- ✗ Bad - first() returns nil when empty
local value = channel:first()
process(value.data)  -- Crash if value is nil!

-- ✓ Good
local value = channel:first()
if value then
  channel:pop()
  process(value.data)
end
```

## Performance Tips

1. **Batch messages** - Send arrays instead of individual items:
   ```lua
   -- Instead of 100 pushes
   local batch = {}
   for i = 1, 100 do
     table.insert(batch, item[i])
   end
   channel:push(batch)
   ```

2. **Avoid large tables** - Keep messages small; all data is copied

3. **Reuse channels** - Getting channels is fast, but reuse when possible

4. **Don't spam status updates** - Limit update frequency:
   ```lua
   local last_update = 0
   local current_time = os.time()
   if current_time - last_update > 0.1 then
     status:clear()
     status:push(progress)
     last_update = current_time
   end
   ```

## See Also

- [Using Threads](using-libraries/threads.md) - Creating and managing threads
- [Channels API Implementation](channels-api.md) - Technical details of the C implementation
- `data/plugins/projectsearch.lua` - Real-world example
- `data/plugins/findfile.lua` - Another practical example
