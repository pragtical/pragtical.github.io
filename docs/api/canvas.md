---
sidebar_position: 3
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# canvas

Core functionality that allows rendering into a separate surface.

## canvas.scale_mode

```lua
canvas.scale_mode:
    | "linear"
    | "nearest"
```

## load_image

```lua
function canvas.load_image(path: string)
  -> canvas: canvas?
  2. errmsg: string?
```

Loads an image into a new canvas.

---

## load_svg_image

```lua
function canvas.load_svg_image(path: string, width: integer, height: integer)
  -> canvas: canvas?
  2. errmsg: string?
```

Loads an svg image with the specified width and height.

---

## new

```lua
function canvas.new(width: integer, height: integer, color: renderer.color, transparent?: boolean)
  -> canvas
```

Creates a new canvas.

@*param* `color` — Background color to initialize the Canvas with

@*param* `transparent` — Make the canvas transparent

---

## clear

```lua
(method) canvas:clear(color?: renderer.color)
```

Clean the canvas, content will be replaced with transparent pixels,
or a full opaque color if the canvas is not transparent.

@*param* `color` — Optional color used to fill the surface.

---

## copy

```lua
(method) canvas:copy(x?: integer, y?: integer, width?: integer, height?: integer, new_width?: integer, new_height?: integer, scale_mode?: "linear"|"nearest")
  -> copied_canvas: canvas
```

Copies (a part of) the Canvas in a new Canvas.

If no arguments are passed, the Canvas is duplicated as-is.

`new_width` and `new_height` specify the new size of the copied region.

@*return* `copied_canvas` — A copy of the Canvas

```lua
scale_mode:
    | "linear"
    | "nearest"
```

---

## draw_canvas

```lua
(method) canvas:draw_canvas(canvas: canvas, x: integer, y: integer, blend: boolean)
```

Draw a Canvas.

@*param* `blend` — Whether to blend the Canvas, or replace the pixels

---

## draw_poly

```lua
(method) canvas:draw_poly(poly: integer[][], color: renderer.color)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Draws a filled polygon, consisting of curves and points.
The polygon is filled using the non-zero winding rule in clockwise direction.

The function returns the control box of the polygon,
which is greater than or equal to the dimensions of the rendered polygon.
It is not guaranteed to the exact dimension of the rendered polygon.

@*param* `poly` — the lines or curves to draw, up to 65535 points.


@*return* `x` — the X coordinate of top left corner of the control box.

@*return* `y` — the Y coordinate of the top left corner of the control box.

@*return* `w` — the width of the control box.

@*return* `h` — the height of the control box.

---

## draw_rect

```lua
(method) canvas:draw_rect(x: integer, y: integer, width: integer, height: integer, color: renderer.color, replace: boolean)
```

Draw a rectangle.

@*param* `replace` — Overwrite the content with the specified color. Useful when dealing with alpha.

---

## draw_text

```lua
(method) canvas:draw_text(font: renderer.font, text: string, x: number, y: integer, color: renderer.color, tab_data?: renderer.tab_data)
  -> x: number
```

Draw text and return the x coordinate where the text finished drawing.

---

## get_pixels

```lua
(method) canvas:get_pixels(pixels: any, x?: integer, y?: integer, width?: integer, height?: integer)
  -> pixels: string
```

Returns the pixels of the specified portion of the Canvas.

If the coordinates are not specified, the whole Canvas is considered.
The pixel format is RGBA32.

---

## get_size

```lua
(method) canvas:get_size()
  -> w: integer
  2. h: integer
```

Returns the Canvas size.

---

## render

```lua
(method) canvas:render()
```

Explicitly render all the draw commands sent to the canvas so far
without having to render the canvas into a window first.

---

## save_image

```lua
(method) canvas:save_image(filename: string, type?: "avif"|"jpg"|"png", quality?: integer)
  -> saved: boolean
  2. errmsg: string?
```

Save the current canvas as an image.

@*param* `type` — Defaults to "png"

@*param* `quality` — A number from 1 to 100 used for jpg and avif. Defaults to 100



```lua
type:
    | "png"
    | "jpg"
    | "avif"
```

---

## scaled

```lua
(method) canvas:scaled(new_width: integer, new_height: integer, scale_mode: "linear"|"nearest")
  -> scaled_canvas: canvas
```

Returns a scaled copy of the Canvas.

@*return* `scaled_canvas` — A scaled copy of the Canvas

```lua
scale_mode:
    | "linear"
    | "nearest"
```

---

## set_clip_rect

```lua
(method) canvas:set_clip_rect(x: integer, y: integer, width: integer, height: integer)
```

Set the region of the Canvas where draw operations will take effect.

---

## set_pixels

```lua
(method) canvas:set_pixels(pixels: string, x: integer, y: integer, width: integer, height: integer)
```

Overwrites the pixels of the Canvas with the specified ones.

The pixel format *must be* RGBA32.

---

