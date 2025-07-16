---
sidebar_position: 67
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# widget.fonts

```lua
local fonts = require "widget.fonts"
```

## cache_is_building

```lua
function widget.fonts.cache_is_building()
  -> building: boolean
```

Check if the font cache is been built.

---

## clean_cache

```lua
function widget.fonts.clean_cache()
  -> started: boolean
```

Remove current fonts cache file and regenerates a fresh one.

@*return* `started` — False if cache is already been built

---

## show_picker

```lua
function widget.fonts.show_picker(callback: fun(name: string, path: string), monospaced: boolean)
```

Launch the commandview and let the user select a font.

---

## show_picker_ask_monospace

```lua
function widget.fonts.show_picker_ask_monospace(callback: fun(name: string, path: string))
```

Same as `show_picker()` but asks the user if he wants a monospaced font.

---

