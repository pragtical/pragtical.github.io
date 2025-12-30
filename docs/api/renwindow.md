---
sidebar_position: 11
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# renwindow

Functionality to create and manage windows.

## _restore

```lua
function renwindow._restore()
  -> number
```

Restore Window

---

## create

```lua
function renwindow.create(title: string, width?: integer, height?: integer)
  -> renwindow
```

Create a new window

@*param* `title` — the title given to the newly created window

@*param* `width` — if nil or less than 1 will be calculated from display

@*param* `height` — if nil or less than 1 will be calculated from display

---

## get_color

```lua
function renwindow.get_color(window: renwindow, x: number, y: number)
  -> color: (renderer.color)?
```

Gets the window pixel color of the specified position.

---

## get_refresh_rate

```lua
function renwindow.get_refresh_rate(window: renwindow)
  -> refresh_rate: number?
```

Gets the display refresh rate of a window.
Returns nil if it cannot be determined.

---

## get_size

```lua
function renwindow.get_size(window: renwindow)
  -> width: number
  2. height: number
```

Get width and height of a window

---

