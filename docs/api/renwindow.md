---
sidebar_position: 12
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

@*param* `title`: `string` — the title given to the newly created window

@*param* `width?`: `integer` — if nil or less than 1 will be calculated from display

@*param* `height?`: `integer` — if nil or less than 1 will be calculated from display

@*return*: [`renwindow`](/docs/api/renwindow)

---

## get_color

```lua
function renwindow.get_color(window: renwindow, x: number, y: number)
  -> color: (renderer.color)?
```

Gets the window pixel color of the specified position.

@*param* `window`: [`renwindow`](/docs/api/renwindow) — Functionality to create and manage windows.

@*return* `color`: `(`[`renderer.color`](/docs/api/renderer#renderercolor)`)?`

---

## get_refresh_rate

```lua
function renwindow.get_refresh_rate(window: renwindow)
  -> refresh_rate: number?
```

Gets the display refresh rate of a window.
Returns nil if it cannot be determined.

@*param* `window`: [`renwindow`](/docs/api/renwindow) — Functionality to create and manage windows.

@*return* `refresh_rate`: `number?`

---

## get_renderer_info

```lua
function renwindow.get_renderer_info(window: renwindow)
  -> { backend: string|"sdlgpu"|"sdlrenderer"|"surface", power: string, device: string }
```

Gets renderer information for the backend currently attached to the window.
`backend` is always set. `power` and `device` are only set by backends where
the fields apply and the information is available.

@*param* `window`: [`renwindow`](/docs/api/renwindow) — Functionality to create and manage windows.

---

## get_size

```lua
function renwindow.get_size(window: renwindow)
  -> width: number
  2. height: number
```

Get width and height of a window

@*param* `window`: [`renwindow`](/docs/api/renwindow) — Functionality to create and manage windows.

@*return* `width`: `number`

@*return* `height`: `number`

---

## set_vsync

```lua
function renwindow.set_vsync(window: renwindow, enabled: boolean)
```

Enable or disable vertical synchronization for the window swapchain.
When enabled the backend presents tear-free (synced to the display refresh);
when disabled it presents every rendered frame for the lowest latency, which
may tear. No-op on backends without a controllable present mode (software).

@*param* `window`: [`renwindow`](/docs/api/renwindow) — Functionality to create and manage windows.

---

