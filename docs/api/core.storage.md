---
sidebar_position: 44
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.storage

```lua
local storage = require "core.storage"
```

## storage

Provides persistent storage between restarts of the application.

### clear

```lua
function storage.clear(module: string, key?: string)
```

Clears data for a particular module and optionally key.

@*param* `module` — The module under which the data is stored.

@*param* `key` — The key under which the data is stored. If omitted, will clear the entire store for this module.

---

### keys

```lua
function storage.keys(module: string)
  -> A: table
```

Gets the list of keys saved under a module.

@*param* `module` — The module under which the data is stored.

@*return* `A` — table of keys under which data is stored for this module.

---

### load

```lua
function storage.load(module: string, key: string)
  -> data: (string|number|table)?
```

Loads data from a persistent storage file.

@*param* `module` — The module under which the data is stored.

@*param* `key` — The key under which the data is stored.

@*return* `data` — The stored data present for this module, at this key.

---

### save

```lua
function storage.save(module: string, key: string, value: string|number|table)
```

Saves data to a persistent storage file.

@*param* `module` — The module under which the data is stored.

@*param* `key` — The key under which the data is stored.

@*param* `value` — The value to store.

---

