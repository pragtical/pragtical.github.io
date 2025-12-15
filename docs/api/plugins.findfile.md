---
sidebar_position: 53
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.findfile

```lua
local findfile = require "plugins.findfile"
```

## config.plugins.findfile

Configuration options for `findfile` plugin.

### cache_expiration

```lua
(field) cache_expiration: number
```

Amount of minutes before having to re-index project files.

---

### enable_cache

```lua
(field) enable_cache: boolean
```

Enable a cache of indexed project files for faster core:find-file invocation.

---

### show_recent

```lua
(field) show_recent: boolean
```

Show the latest visited files.

---

