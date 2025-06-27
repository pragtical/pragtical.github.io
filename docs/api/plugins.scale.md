---
sidebar_position: 48
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.scale

```lua
local scale = require "plugins.scale"
```

## config.plugins.scale

Configuration options for `scale` plugin.

### autodetect

```lua
(field) autodetect: boolean
```

Toggle auto detection of system scale.

---

### config_spec

```lua
(field) config_spec: table
```

The config specification used by gui generators

---

### default_scale

```lua
(field) default_scale: number
```

Default scale applied at startup.

---

### use_mousewheel

```lua
(field) use_mousewheel: boolean
```

Allow using CTRL + MouseWheel for changing the scale.

---

## decrease

```lua
function plugins.scale.decrease()
```

---

## decrease_code

```lua
function plugins.scale.decrease_code()
```

---

## get

```lua
function plugins.scale.get()
  -> number
```

---

## get_code

```lua
function plugins.scale.get_code()
  -> number
```

---

## increase

```lua
function plugins.scale.increase()
```

---

## increase_code

```lua
function plugins.scale.increase_code()
```

---

## reset

```lua
function plugins.scale.reset()
```

---

## reset_code

```lua
function plugins.scale.reset_code()
```

---

## set

```lua
function plugins.scale.set(scale: any)
```

---

## set_code

```lua
function plugins.scale.set_code(scale: any)
```

---

