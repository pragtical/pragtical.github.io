---
sidebar_position: 55
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.ipc

```lua
local ipc = require "plugins.ipc"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## coroutine_key

```lua
(field) coroutine_key: unknown
```

---

## file

```lua
(field) file: string
```

---

## id

```lua
(field) id: string
```

---

## last_output

```lua
(field) last_output: string
```

---

## listeners

```lua
(field) listeners: table<string, table<integer, fun(message: plugins.ipc.message, reply: plugins.ipc.reply)|nil>>
```

---

## messages

```lua
(field) messages: plugins.ipc.message[]
```

---

## method_definitions

```lua
(field) method_definitions: table<integer, string>
```

---

## methods

```lua
(field) methods: table<string, integer>
```

---

## next_update

```lua
(field) next_update: integer
```

---

## position

```lua
(field) position: integer
```

---

## primary

```lua
(field) primary: boolean
```

---

## replies

```lua
(field) replies: plugins.ipc.reply[]
```

---

## running

```lua
(field) running: boolean
```

---

## shmem

```lua
(field) shmem: shmem?
```

Functionality that allows to share data between processes.

---

## signal_definitions

```lua
(field) signal_definitions: table<integer, string>
```

---

## signals

```lua
(field) signals: table<string, integer>
```

---

## super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## user_dir

```lua
(field) user_dir: string
```

---

## config.plugins.ipc

Configuration options for `ipc` plugin.

### dirs_instance

```lua
(field) dirs_instance: "add"|"change"|"new"
```

Control how to open directories in single instance mode.

---

### single_instance

```lua
(field) single_instance: boolean
```

Run a single instance of pragtical.

---

## plugins.ipc.function

## plugins.ipc.instance

### id

```lua
(field) id: string
```

Process id of the instance.

---

### last_update

```lua
(field) last_update: integer
```

Indicates the last time this instance updated its session file.

---

### messages

```lua
(field) messages: plugins.ipc.message[]
```

The messages been broadcasted.

---

### position

```lua
(field) position: integer
```

The position in which the instance was launched.

---

### primary

```lua
(field) primary: boolean
```

Flag that indicates if this instance was the first started.

---

### properties

```lua
(field) properties: table
```

Table of properties associated with the instance. (NOT IMPLEMENTED)

---

### replies

```lua
(field) replies: plugins.ipc.reply[]
```

The replies been broadcasted.

---

## plugins.ipc.message

### data

```lua
(field) data: table<string, any>
```

A list of named values sent to receivers.

---

### destinations

```lua
(field) destinations: table<integer, string>
```

List with id of the instance that should receive the message.

---

### id

```lua
(field) id: string
```

Id of the message

---

### name

```lua
(field) name: string
```

Name of the message

---

### on_read

```lua
(field) on_read: fun(message: plugins.ipc.message)|nil
```

Optional callback executed by the receiver when the message is read.

---

### on_reply

```lua
(field) on_reply: fun(reply: plugins.ipc.reply)|nil
```

Optional callback executed when a reply to the message is received.

---

### replies

```lua
(field) replies: plugins.ipc.reply[]
```

The received replies for the message.

---

### sender

```lua
(field) sender: string
```

The id of process that sent the message

---

### timestamp

```lua
(field) timestamp: number
```

Time in seconds when the message was sent for automatic expiration purposes.

---

### type

```lua
(field) type: string|"message"|"method"|"signal"
```

Type of message.

---

## plugins.ipc.messagetype

```lua
plugins.ipc.messagetype:
    | "message"
    | "method"
    | "signal"
```

## plugins.ipc.onmessage

## plugins.ipc.onmessageread

## plugins.ipc.onreply

## plugins.ipc.onreplyread

## plugins.ipc.reply

### data

```lua
(field) data: table<string, any>
```

A list of named values sent back to sender.

---

### id

```lua
(field) id: string
```

Id of the message

---

### on_read

```lua
(field) on_read: fun(reply: plugins.ipc.reply)|nil
```

Optional callback executed by the sender when the reply is read.

---

### replier

```lua
(field) replier: string
```

The id of the replier

---

### sender

```lua
(field) sender: string
```

The id of process that sent the message

---

### timestamp

```lua
(field) timestamp: number
```

Time in seconds when the reply was sent for automatic expiration purposes.

---

## plugins.ipc.sendmessageoptions

### data

```lua
(field) data: table<string, any>
```

Optional data given to the receiver.

---

### destinations

```lua
(field) destinations: string|table<integer, string>|nil
```

Id of the running instances to receive the message, if not set all running instances will receive the message.

---

### on_read

```lua
(field) on_read: fun(message: plugins.ipc.message, reply: plugins.ipc.reply)|nil
```

Function executed by the message receiver.

---

### on_reply

```lua
(field) on_reply: fun(reply: plugins.ipc.reply)|nil
```

Callback that allows monitoring all the replies received for this message.

---

## plugins.ipc.vardecl

### name

```lua
(field) name: string
```

---

### optional

```lua
(field) optional: boolean
```

---

### type

```lua
(field) type: string
```

---

## current

```lua
function plugins.ipc.current()
  -> plugins.ipc
```

Get the IPC session for the running pragtical instance.

---

## force_draw

```lua
function plugins.ipc.force_draw()
```

Tell the core to force a full redraw. Should be used when receiving signals
that execute draw operations while the window could be unfocused.

---

## __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

---

## __tostring

```lua
(method) core.object:__tostring()
  -> str: string
```

Get string representation of the object (for debugging/logging).
Override in subclasses to provide meaningful names.
Example: `function MyClass:__tostring() return "MyClass" end`

@*return* `str` — String representation (default: "Object")

---

## call

```lua
(method) plugins.ipc:call(destinations: string|table<integer, string>|nil, name: string, ...any)
  -> return_of_called_method: any
```

Call a method on another instance and wait for reply.

---

## call_async

```lua
(method) plugins.ipc:call_async(destinations: string|table<integer, string>|nil, name: string, callback: fun(id: string, ret: table)|nil, ...any)
  -> message_id: string|nil
```

Call a method on another instance asynchronously waiting for the replies.

@*param* `callback` — Called with the returned values

---

## extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

---

## get_instances

```lua
(method) plugins.ipc:get_instances()
  -> plugins.ipc.instance[]
```

Get a list of running pragtical instances.

---

## get_message

```lua
(method) plugins.ipc:get_message(message_id: string)
  -> plugins.ipc.message|nil
```

Get a queued message.

---

## get_primary_instance

```lua
(method) plugins.ipc:get_primary_instance()
  -> string|nil
```

Retrieve the id of the primary instance if found.

---

## get_reply

```lua
(method) plugins.ipc:get_reply(message_id: string)
  -> plugins.ipc.reply|nil
```

Get the reply sent to a specific message.

---

## is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

---

## listen_message

```lua
(method) plugins.ipc:listen_message(name: string, callback: fun(message: plugins.ipc.message, reply: plugins.ipc.reply)|nil, message_type?: "message"|"method"|"signal")
  -> listener_position: integer
```

Add a listener for a given type of message.

```lua
message_type:
    | "message"
    | "method"
    | "signal"
```

---

## listen_signal

```lua
(method) plugins.ipc:listen_signal(name: string, callback: fun(...any))
  -> listener_position: integer
```

Listen for a given signal.

---

## new

```lua
(method) plugins.ipc:new(id?: string)
```

Constructor

@*param* `id` — Defaults to current pragtical process id.

---

## read_messages

```lua
(method) plugins.ipc:read_messages()
```

Verify all the messages sent by running instances, read those directed
to the currently running instance and reply to them.

---

## read_replies

```lua
(method) plugins.ipc:read_replies()
  -> plugins.ipc.reply[]|nil
```

Reads replies directed to messages sent by the currently running instance
and if any returns them.

---

## register_method

```lua
(method) plugins.ipc:register_method(name: string, method: fun(...any), params?: plugins.ipc.vardecl[], returns?: plugins.ipc.vardecl[])
```

Add a new method that can be invoked from other instances.

@*param* `name` — A unique name for the method.

@*param* `method` — Function invoked when the method is called.

@*param* `params` — Parameters that are going to be passed into method.

@*param* `returns` — Return values of the method.

---

## register_signal

```lua
(method) plugins.ipc:register_signal(name: string, params?: plugins.ipc.vardecl[])
```

Add a new signal that can be sent to other instances.

@*param* `name` — A unique name for the signal.

@*param* `params` — Parameters that are going to be passed into callback.

---

## remove_message

```lua
(method) plugins.ipc:remove_message(message_id: string)
```

Remove a message from the queue.

---

## send_message

```lua
(method) plugins.ipc:send_message(name: string, options?: plugins.ipc.sendmessageoptions, message_type?: "message"|"method"|"signal")
  -> message_id: string|nil
```

Queue a new message to be sent to other pragtical instances.

```lua
message_type:
    | "message"
    | "method"
    | "signal"
```

---

## signal

```lua
(method) plugins.ipc:signal(destinations: string|table<integer, string>|nil, name: string, ...any)
```

Broadcast a signal to running instances.

---

## start

```lua
(method) plugins.ipc:start()
```

Starts and registers the ipc session and monitoring.

---

## stop

```lua
(method) plugins.ipc:stop()
```

Stop and unregister the ipc session and monitoring.

---

## update_status

```lua
(method) plugins.ipc:update_status()
```

Updates the session status of an IPC object.

---

## wait_for_messages

```lua
(method) plugins.ipc:wait_for_messages()
```

Blocks execution of current instance to wait for all messages to
be replied to.

---

## wait_for_replies

```lua
(method) plugins.ipc:wait_for_replies(message_id: string)
  -> plugins.ipc.reply[]|nil
```

Blocks execution of current instance to wait for all replies by the
specified message and when finished returns them.

---

