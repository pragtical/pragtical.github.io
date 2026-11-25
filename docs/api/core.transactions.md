---
sidebar_position: 56
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.transactions

```lua
local transactions = require "core.transactions"
```

## core.transactions.context

The runner passes a fresh context to each handler. Plugins do not construct it.

### __index

```lua
(field) __index: core.transactions.context
```

The runner passes a fresh context to each handler. Plugins do not construct it.

---

### detail

```lua
(field) detail: string?
```

---

### fraction

```lua
(field) fraction: number?
```

---

### last_message

```lua
(field) last_message: string?
```

---

### log

```lua
(field) log: fun(message: string)
```

---

### phase

```lua
(field) phase: "startup"
```

Phase in which this handler is running.

---

### previous_failure

```lua
(field) previous_failure: (core.transactions.failure)?
```

Saved reason from the previous attempt, if any.

---

### progress

```lua
(method) core.transactions.context:progress(message: string, fraction?: number, detail?: string)
```

Report an activity and yield so the runner can redraw. Repeating the same
message updates the progress indicator without adding another log entry.

@*param* `fraction?`: `number` — Fraction complete (0 to 1). Omit if the total is unknown.

@*param* `detail?`: `string` — Transient status, such as the number of bytes downloaded.

---

### yield

```lua
(method) core.transactions.context:yield()
```

Give the runner a chance to redraw without changing the current progress.

---

## core.transactions.failure

Second return value from a transaction handler when its first return value is nil.

### message

```lua
(field) message: string
```

Explanation shown to the user.

---

### recovery_required

```lua
(field) recovery_required: boolean?
```

Leave the request in progress for manual recovery, even if retry is set.

---

### retry

```lua
(field) retry: boolean?
```

Try again on the next full launch instead of marking the request failed.

---

## core.transactions.handler

Return `true` on success, or `nil, failure` on failure.
Return `nil, \{ message = "...", retry = true \}` to retry on the next full startup.

## core.transactions.key

### id

```lua
(field) id: string?
```

Optional qualifier for multiple requests for the same script.

---

### phase

```lua
(field) phase: "startup"?
```

Defaults to "startup".

---

## core.transactions.options

### id

```lua
(field) id: string?
```

Optional qualifier for multiple requests for the same script.

---

### payload

```lua
(field) payload: (boolean|string|number|table)?
```

Plain serialized data.

---

### phase

```lua
(field) phase: "startup"?
```

Defaults to "startup".

---

### title

```lua
(field) title: string?
```

---

## core.transactions.payload

## core.transactions.phase

```lua
core.transactions.phase:
    | "startup" -- Before editor initialization on a full launch; skipped on soft restart.
```

## core.transactions.record

### id

```lua
(field) id: string?
```

---

### last_failure

```lua
(field) last_failure: (core.transactions.failure)?
```

Second return value from a transaction handler when its first return value is nil.

---

### payload

```lua
(field) payload: (boolean|string|number|table)?
```

---

### phase

```lua
(field) phase: "startup"
```

---

### script

```lua
(field) script: string
```

---

### state

```lua
(field) state: "failed"|"in_progress"|"ready"
```

---

### title

```lua
(field) title: string
```

---

## get

```lua
function core.transactions.get(script: string, key?: core.transactions.key)
  -> record: (core.transactions.record)?
  2. err: string?
```

Return a detached snapshot, including a running or failed request.

@*param* `key?`: [`core.transactions.key`](/docs/api/core.transactions#coretransactionskey)

@*return* `record`: `(`[`core.transactions.record`](/docs/api/core.transactions#coretransactionsrecord)`)?`

@*return* `err`: `string?`

---

## register

```lua
function core.transactions.register(script: string, options?: core.transactions.options)
  -> ok: boolean?
  2. err: string?
```

Queue an installed handler. Does not overwrite an existing request.
At execution time, `plugins.my_plugin.apply` resolves to
`plugins/my_plugin/apply.lua` under `USERDIR` first, then `DATADIR`.
The file must return a function:
```lua
 ---@type core.transactions.handler
local function apply(id, payload, ctx)
  if system.get_file_info(payload.busy_marker) then
    return nil, \{ message = "Close the app using the file, then relaunch Pragtical.", retry = true \}
  end
  ctx:progress("Moving staged file")
  local ok, err = os.rename(payload.staged, payload.destination)
  if not ok then return nil, \{ message = err \} end
  return true
end
return apply
```
`id` is `options.id` or the dotted script name; `payload` is `options.payload`
or nil. See `core.transactions.context` for progress reporting and retry information.

To retry, the handler must return two values: `nil` (not `false`) and a
failure table with a `message` and `retry = true`. Do not register it again.
The runner leaves this request and later requests queued. On the next full
launch it calls the handler from the beginning with the same payload and
the failure in `ctx.previous_failure`. Only request a retry if replay is safe.
Without `retry`, the failure is marked failed; `true` completes the request.
Use `recovery_required = true` when manual recovery is needed; it overrides retry.

@*param* `script`: `string` — Dotted handler path starting with `plugins.`, without the `.lua` extension.

@*param* `options?`: [`core.transactions.options`](/docs/api/core.transactions#coretransactionsoptions)

@*return* `ok`: `boolean?`

@*return* `err`: `string?`

---

## remove

```lua
function core.transactions.remove(script: string, key?: core.transactions.key)
  -> ok: boolean?
  2. err: string?
```

Remove a pending or failed request, but never one claimed by a runner.

@*param* `key?`: [`core.transactions.key`](/docs/api/core.transactions#coretransactionskey)

@*return* `ok`: `boolean?`

@*return* `err`: `string?`

---

## run

```lua
function core.transactions.run(phase?: "startup")
  -> ok: boolean?
  2. err: string?
```

Run pending handlers before editor initialization. A handler may return
nil, \{ message = "...", retry = true \} when it is safe to start the editor
and retry on the next launch. This also leaves later requests queued.
An interrupted claim or recovery_required failure is never silently replayed.

```lua
phase:
    | "startup" -- Before editor initialization on a full launch; skipped on soft restart.
```

@*return* `ok`: `boolean?`

@*return* `err`: `string?`

---
