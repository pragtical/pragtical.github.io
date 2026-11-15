---
sidebar_position: 77
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.workspace

```lua
local workspace = require "plugins.workspace"
```

## plugins.workspace.session

### active

```lua
(field) active: boolean
```

Whether this is the current session

---

### key

```lua
(field) key: string
```

Filename within this project's storage directory

---

### name

```lua
(field) name: string
```

Display name derived from the filename

---

### saved_at

```lua
(field) saved_at: integer?
```

File modification timestamp

---

## clear_sessions

```lua
function plugins.workspace.clear_sessions()
  -> integer
```

Clear this project's saved sessions and recovery file, preserving open tabs.

---

## get_sessions

```lua
function plugins.workspace.get_sessions()
  -> table
```

List only this project's filenames and timestamps, without loading buffers.

---

## load_session

```lua
function plugins.workspace.load_session(key: string)
  -> loaded: boolean
```

Replace the current document layout with a saved session and back up the outgoing one.
Subsequent saves and checkpoints belong to the selected session.
A failed backup or restore leaves the current layout and selected session intact.

@*param* `key`: `string` — Original key from get_sessions()

@*return* `loaded`: `boolean` — Whether the requested session was restored

---

## remove_session

```lua
function plugins.workspace.remove_session(key: any)
  -> boolean
```

Remove one saved session, returning to main if it was active.

---

## save_session

```lua
function plugins.workspace.save_session(name?: string)
  -> key: string?
```

Save the current workspace. A name saves and activates an additional session.

@*param* `name?`: `string` — Label for a new saved session; omit to update the active session.

@*return* `key`: `string?` — Storage key, or nil if saving is pending or failed.

---

