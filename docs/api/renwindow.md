---
sidebar_position: 8
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# renwindow

Functionality to create and manage windows.

## create

```lua
function renwindow.create(x?: integer, y?: integer, width?: integer, height?: integer)
  -> renwindow
```

Create a new window

@*param* `x` — if nil will be undefined

@*param* `y` — if nil will be undefined

@*param* `width` — if nil or less than 1 will be calculated from display

@*param* `height` — if nil or less than 1 will be calculated from display

---

## get_size

```lua
function renwindow.get_size(window: renwindow)
  -> width: number
  2. height: number
```

Get width and height of a window

---

