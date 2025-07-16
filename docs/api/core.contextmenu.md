---
sidebar_position: 22
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.contextmenu

A context menu.

```lua
local contextmenu = require "core.contextmenu"
```

## DIVIDER

```lua
(field) DIVIDER: table
```

A unique value representing the divider in a context menu.

---

## __index

```lua
(field) __index: core.object
```

---

## current_scale

```lua
(field) current_scale: number
```

---

## height

```lua
(field) height: integer
```

---

## items

```lua
(field) items: table
```

---

## move_towards

```lua
(field) move_towards: fun(self: table, k: string, dest: number, rate?: number, name?: string)
```

---

## position

```lua
(field) position: core.view.position
```

---

## selected

```lua
(field) selected: number
```

---

## show_context_menu

```lua
(field) show_context_menu: boolean
```

---

## super

```lua
(field) super: core.object
```

---

## core.contextmenu.item

An item in the context menu.

### command

```lua
(field) command: string|fun()
```

---

### info

```lua
(field) info: string|nil
```

If provided, this text is displayed on the right side of the menu.

---

### text

```lua
(field) text: string
```

---

## core.contextmenu.itemset

A list of items with the same predicate.

### items

```lua
(field) items: core.contextmenu.item[]
```

---

### predicate

```lua
(field) predicate: string|core.object|fun(...any):boolean, ...unknown
```

A predicate is a string, an Object or a function, that is used to determine
whether a command should be executed.

If the predicate is a string, it is resolved into an `Object` via `require()`
and checked against the active view with `Object:extends()`. 
For example, `"core.docview"` will match any view that inherits from `DocView`. 
A `!` can be appended to the predicate to strictly match the current view via `Object:is()`,
instead of matching any view that inherits the predicate.

If the predicate is a table, it is checked against the active view with `Object:extends()`.
Strict matching via `Object:is()` is not available.

If the predicate is a function, it must behave like a predicate function.

---

## __call

```lua
(method) core.object:__call(...any)
  -> core.object
```

Metamethod to allow using the object call as a constructor.

---

## __tostring

```lua
(method) core.contextmenu:__tostring()
  -> string
```

---

## call_selected_item

```lua
(method) core.contextmenu:call_selected_item()
```

Hides the context menu and performs the command if an item is selected.

---

## draw

```lua
(method) core.contextmenu:draw()
```

Draws the context menu.

This wraps `ContextMenu:draw_context_menu()`.
See: \[core.contextmenu.draw_context_menu\](file:///usr/share/pragtical/core/contextmenu.lua#270#9)

---

## draw_context_menu

```lua
(method) core.contextmenu:draw_context_menu()
```

Draws the context menu.

---

## each_item

```lua
(method) core.contextmenu:each_item()
  -> fun():number, core.contextmenu.item, number, number, number, number
```

Returns an iterator that iterates over each context menu item and their dimensions.

---

## extend

```lua
(method) core.object:extend()
  -> core.object
```

---

## extends

```lua
(method) core.object:extends(T: any)
  -> boolean
```

Check if the object inherits from the given type.

---

## focus_next

```lua
(method) core.contextmenu:focus_next()
```

Selects the next item.

---

## focus_previous

```lua
(method) core.contextmenu:focus_previous()
```

Selects the the previous item.

---

## get_item_selected

```lua
(method) core.contextmenu:get_item_selected()
  -> core.contextmenu.item|nil
```

Gets the currently selected item.

---

## hide

```lua
(method) core.contextmenu:hide()
```

Hides the context menu.

---

## is

```lua
(method) core.object:is(T: any)
  -> boolean
```

Check if the object is strictly of the given type.

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> boolean
```

Check if the parameter is strictly of the object type.

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> boolean
```

Check if the parameter inherits from the object.

---

## new

```lua
(method) core.contextmenu:new()
```

Creates a new context menu.

---

## on_mouse_moved

```lua
(method) core.contextmenu:on_mouse_moved(px: any, py: any)
  -> boolean
```

Event handler for mouse movements.

@*return* — true if the event is caught.

---

## on_mouse_pressed

```lua
(method) core.contextmenu:on_mouse_pressed(button: 'left'|'right', px: number, py: number, clicks: number)
  -> boolean
```

Event handler for mouse press.

@*return* — true if the event is caught.

```lua
button:
    | 'left'
    | 'right'
```

---

## on_selected

```lua
(method) core.contextmenu:on_selected(item: core.contextmenu.item)
```

Event handler for when the selection is confirmed.

---

## register

```lua
(method) core.contextmenu:register(predicate: string|core.object|fun(...any):boolean, ...unknown, items: core.contextmenu.item[])
```

Registers a list of items into the context menu with a predicate.

---

## show

```lua
(method) core.contextmenu:show(x: number, y: number)
  -> boolean
```

Shows the context menu.

@*return* — If true, the context menu is shown.

---

## update

```lua
(method) core.contextmenu:update()
```

Event handler for content update.

---

