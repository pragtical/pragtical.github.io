---
sidebar_position: 54
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.websocket

Coroutine-based WebSocket client for Pragtical Code Editor.
Supports ws/wss connections, subprotocol negotiation, fragmented messages,
automatic pong replies, optional keepalive pings, reconnect backoff,
session restore hooks, and async callbacks.

```lua
local websocket = require "core.websocket"
```

## client

```lua
(field) client: websocket.client
```

---

## websocket.client

### __index

```lua
(field) __index: websocket.client
```

---

### _close_received

```lua
(field) _close_received: boolean
```

---

### _close_request_code

```lua
(field) _close_request_code: unknown
```

---

### _close_request_reason

```lua
(field) _close_request_reason: unknown
```

---

### _close_requested

```lua
(field) _close_requested: table
```

---

### _close_sent

```lua
(field) _close_sent: boolean
```

---

### _conn

```lua
(field) _conn: net.tcp
```

A TCP network connection.

---

### _did_open

```lua
(field) _did_open: boolean
```

---

### _last_ping_time

```lua
(field) _last_ping_time: number|unknown
```

---

### _manual_close

```lua
(field) _manual_close: table
```

---

### _message_opcode

```lua
(field) _message_opcode: unknown
```

---

### _message_parts

```lua
(field) _message_parts: table
```

---

### _recv_buffer

```lua
(field) _recv_buffer: string?
```

---

### _remote_close_code

```lua
(field) _remote_close_code: integer?
```

---

### _remote_close_reason

```lua
(field) _remote_close_reason: string?
```

---

### _send_queue

```lua
(field) _send_queue: table
```

---

### error

```lua
(field) error: string?
```

---

### protocol

```lua
(field) protocol: string?
```

---

### reconnect_attempt

```lua
(field) reconnect_attempt: integer
```

---

### response_info

```lua
(field) response_info: (websocket.response_info)?
```

---

### status

```lua
(field) status: "closed"|"closing"|"connecting"|"open"|"reconnecting"
```

---

### url

```lua
(field) url: string
```

---

### new

```lua
function websocket.client.new(url: any, options: websocket.connect.options)
  -> websocket.client
```

---

### _build_session_info

```lua
(method) websocket.client:_build_session_info(attempt: integer, previous_outcome?: websocket.disconnect_info)
  -> websocket.session_info
```

---

### _drop_stale_control_frames

```lua
(method) websocket.client:_drop_stale_control_frames()
```

---

### _flush_send_queue

```lua
(method) websocket.client:_flush_send_queue(touch: fun(), should_abort: fun():string?)
  -> boolean?
  2. string?
```

---

### _get_reconnect_delay

```lua
(method) websocket.client:_get_reconnect_delay(attempt: integer)
  -> number
```

---

### _handle_frame

```lua
(method) websocket.client:_handle_frame(frame: table)
  -> did_work: boolean
  2. should_stop: boolean
  3. err: string?
```

---

### _pump_incoming

```lua
(method) websocket.client:_pump_incoming(touch: fun())
  -> did_work: boolean
  2. should_stop: boolean
  3. err: string?
```

---

### _reset_session_state

```lua
(method) websocket.client:_reset_session_state()
```

---

### _run

```lua
(method) websocket.client:_run()
```

---

### _run_session

```lua
(method) websocket.client:_run_session(parsed: table, session_info: websocket.session_info)
  -> websocket.disconnect_info
```

---

### _should_reconnect

```lua
(method) websocket.client:_should_reconnect(outcome: websocket.disconnect_info, attempt: integer)
  -> boolean
```

---

### _wait_reconnect

```lua
(method) websocket.client:_wait_reconnect(delay: number)
  -> string?
```

---

### close

```lua
(method) websocket.client:close(code?: integer, reason?: string)
  -> boolean?
  2. string?
```

Close the connection.

---

### get_status

```lua
(method) websocket.client:get_status()
  -> status: "closed"|"closing"|"connecting"|"open"|"reconnecting"
  2. errmsg: string?
```

Get the current connection status.

```lua
status:
    | "connecting"
    | "reconnecting"
    | "open"
    | "closing"
    | "closed"
```

---

### ping

```lua
(method) websocket.client:ping(payload?: string)
  -> boolean?
  2. string?
```

Queue a ping frame for sending.

---

### send

```lua
(method) websocket.client:send(data: string)
  -> boolean?
  2. string?
```

Queue a text message for sending.

---

### send_binary

```lua
(method) websocket.client:send_binary(data: string)
  -> boolean?
  2. string?
```

Queue a binary message for sending.

---

### send_text

```lua
(method) websocket.client:send_text(data: string)
  -> boolean?
  2. string?
```

Queue a text message for sending.

---

## websocket.connect.options

### headers

```lua
(field) headers: table<string, string>?
```

---

### is_cancelled

```lua
(field) is_cancelled: (fun():boolean)?
```

---

### max_reconnect_attempts

```lua
(field) max_reconnect_attempts: integer?
```

Maximum reconnect attempts. Unlimited when nil.

---

### on_close

```lua
(field) on_close: fun(client: websocket.client, code?: integer, reason?: string, was_clean: boolean)?
```

---

### on_connect

```lua
(field) on_connect: fun(client: websocket.client, info: websocket.response_info, session: websocket.session_info)?
```

---

### on_error

```lua
(field) on_error: fun(client: websocket.client, err: string)?
```

---

### on_message

```lua
(field) on_message: fun(client: websocket.client, message: string, is_binary: boolean)?
```

---

### on_ping

```lua
(field) on_ping: fun(client: websocket.client, payload: string)?
```

---

### on_pong

```lua
(field) on_pong: fun(client: websocket.client, payload: string)?
```

---

### on_reconnect

```lua
(field) on_reconnect: fun(client: websocket.client, info: websocket.reconnect_info)?
```

---

### ping_interval

```lua
(field) ping_interval: number?
```

Seconds between automatic ping frames.

---

### ping_payload

```lua
(field) ping_payload: string?
```

Payload used for automatic ping frames.

---

### protocols

```lua
(field) protocols: (string|string[])?
```

---

### reconnect

```lua
(field) reconnect: boolean?
```

Retry automatically after disconnections.

---

### reconnect_backoff

```lua
(field) reconnect_backoff: number?
```

Backoff multiplier. Default: 2

---

### reconnect_delay

```lua
(field) reconnect_delay: number?
```

Initial reconnect delay in seconds. Default: 1

---

### reconnect_delay_max

```lua
(field) reconnect_delay_max: number?
```

Maximum reconnect delay in seconds. Default: 30

---

### reconnect_jitter

```lua
(field) reconnect_jitter: number?
```

Random delay jitter in seconds. Default: 0

---

### restore_session

```lua
(field) restore_session: fun(client: websocket.client, info: websocket.session_info, response: websocket.response_info)?
```

---

### should_reconnect

```lua
(field) should_reconnect: fun(client: websocket.client, info: websocket.disconnect_info):boolean??
```

---

### timeout

```lua
(field) timeout: number?
```

Inactivity timeout in seconds.

---

## websocket.disconnect_info

### attempt

```lua
(field) attempt: integer
```

---

### close_code

```lua
(field) close_code: integer?
```

---

### close_reason

```lua
(field) close_reason: string
```

---

### error

```lua
(field) error: string?
```

---

### opened

```lua
(field) opened: boolean
```

---

### was_clean

```lua
(field) was_clean: boolean
```

---

## websocket.header_value

## websocket.on_close

## websocket.on_connect

## websocket.on_error

## websocket.on_message

## websocket.on_ping

## websocket.on_pong

## websocket.on_reconnect

## websocket.reconnect_info

### attempt

```lua
(field) attempt: integer
```

---

### close_code

```lua
(field) close_code: integer?
```

---

### close_reason

```lua
(field) close_reason: string
```

---

### delay

```lua
(field) delay: number
```

---

### error

```lua
(field) error: string?
```

---

### is_reconnect

```lua
(field) is_reconnect: boolean
```

---

### opened

```lua
(field) opened: boolean
```

---

### previous_close_code

```lua
(field) previous_close_code: integer?
```

---

### previous_close_reason

```lua
(field) previous_close_reason: string?
```

---

### previous_error

```lua
(field) previous_error: string?
```

---

### previous_was_clean

```lua
(field) previous_was_clean: boolean?
```

---

### was_clean

```lua
(field) was_clean: boolean
```

---

## websocket.response_info

### headers

```lua
(field) headers: table<string, string|string[]>
```

---

### protocol

```lua
(field) protocol: string?
```

---

### status

```lua
(field) status: integer
```

---

### url

```lua
(field) url: string
```

---

## websocket.restore_session

## websocket.session_info

### attempt

```lua
(field) attempt: integer
```

---

### is_reconnect

```lua
(field) is_reconnect: boolean
```

---

### previous_close_code

```lua
(field) previous_close_code: integer?
```

---

### previous_close_reason

```lua
(field) previous_close_reason: string?
```

---

### previous_error

```lua
(field) previous_error: string?
```

---

### previous_was_clean

```lua
(field) previous_was_clean: boolean?
```

---

## websocket.should_reconnect

## websocket.status

```lua
websocket.status:
    | "connecting"
    | "reconnecting"
    | "open"
    | "closing"
    | "closed"
```

## connect

```lua
function core.websocket.connect(url: string, options?: websocket.connect.options)
  -> client: websocket.client
```

Open a WebSocket connection asynchronously.

---

