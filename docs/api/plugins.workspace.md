---
sidebar_position: 77
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.workspace

```lua
local workspace = require "plugins.workspace"
```

## plugins.workspace.session

### count

```lua
(field) count: integer
```

Number of saved tabs

---

### id

```lua
(field) id: integer
```

Numeric suffix shared by projects with the same basename

---

### key

```lua
(field) key: string
```

Original storage key, used to load or remove the session

---

### name

```lua
(field) name: string
```

User name or automatically assigned session label

---

### saved_at

```lua
(field) saved_at: integer?
```

Unix time at which the snapshot was saved

---

## clear_sessions

```lua
function plugins.workspace.clear_sessions()
  -> count: integer
```

Remove every saved session for the current project, preserving other projects.
The active workspace remains open and is still saved normally on exit.

@*return* `count`: `integer` — Number of saved sessions removed

---

## get_sessions

```lua
function plugins.workspace.get_sessions()
  -> sessions: plugins.workspace.session[]
```

List saved sessions for the current root project's full path.
Read storage once per request; callers can filter the returned metadata in memory.

@*return* `sessions`: [`plugins.workspace.session`](/docs/api/plugins.workspace#pluginsworkspacesession)`[]` — In numeric session order

---

## load_session

```lua
function plugins.workspace.load_session(key: string)
  -> loaded: boolean
```

Replace the current document layout with a saved session and back up the outgoing one.
Consume the selected file only after restoration succeeds, as automatic restore does.
A failed backup or restore leaves the current layout and selected session intact.

@*param* `key`: `string` — Original key from get_sessions()

@*return* `loaded`: `boolean` — Whether the requested session was restored

---

## remove_session

```lua
function plugins.workspace.remove_session(key: string)
  -> removed: boolean
```

Remove one saved session belonging to the current project.
This does not close any tabs or modify sessions belonging to another project.

@*param* `key`: `string` — Original key from get_sessions()

@*return* `removed`: `boolean` — Whether a matching session was found and removed

---

## save_session

```lua
function plugins.workspace.save_session()
  -> key: string?
```

Save the current workspace, including unsaved buffers, to a new session file.

@*return* `key`: `string?` — New storage key, or nil if saving is pending or failed

---

