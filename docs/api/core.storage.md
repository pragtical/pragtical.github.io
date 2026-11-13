---
sidebar_position: 51
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.storage

```lua
local storage = require "core.storage"
```

## storage

Provides persistent storage between restarts of the application.
Without a project, files live in USERDIR/storage/module/key. A project
object uses project.path/.pragtical/module/key; a string is the storage
base directory itself. Project/explicit-directory files contain serialized
data only, not executable Lua. Keys are filenames; extensions are not added.
Project loads validate serialized data, with one million literals and nesting
of 128. There is no file-size limit.

### clear

```lua
function storage.clear(module: string, key?: string, project?: string|core.project)
```

Clears data for a particular module and optionally key.

@*param* `module`: `string` — The module under which the data is stored.

@*param* `key?`: `string` — The key under which the data is stored. If omitted, will clear the entire store for this module.

@*param* `project?`: `string|`[`core.project`](/docs/api/core.project) — Project object, or an explicit storage directory.

---

### keys

```lua
function storage.keys(module: string, project?: string|core.project)
  -> A: table
```

Gets the list of keys saved under a module.

@*param* `module`: `string` — The module under which the data is stored.

@*param* `project?`: `string|`[`core.project`](/docs/api/core.project) — Project object, or an explicit storage directory.

@*return* `A`: `table` — table of keys under which data is stored for this module.

---

### load

```lua
function storage.load(module: string, key: string, project?: string|core.project)
  -> data: boolean|string|number|table|nil
  2. error: string?
```

Loads data from a persistent storage file.

@*param* `module`: `string` — The module under which the data is stored.

@*param* `key`: `string` — The key under which the data is stored.

@*param* `project?`: `string|`[`core.project`](/docs/api/core.project) — Project object, or an explicit storage directory.

@*return* `data`: `boolean|string|number|table|nil` — The stored data present for this module, at this key.

@*return* `error`: `string?` — An error loading an existing file; nil when no file exists.

---

### save

```lua
function storage.save(module: string, key: string, value: boolean|string|number|table|nil, project?: string|core.project)
  -> saved: boolean
```

Saves data to a persistent storage file.

@*param* `module`: `string` — The module under which the data is stored.

@*param* `key`: `string` — The key under which the data is stored.

@*param* `value`: `boolean|string|number|table|nil` — The value to store.

@*param* `project?`: `string|`[`core.project`](/docs/api/core.project) — Project object, or an explicit storage directory.

@*return* `saved`: `boolean` — Whether the file was written and closed successfully.

---

