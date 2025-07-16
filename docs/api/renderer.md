---
sidebar_position: 8
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# renderer

Core functionality to render or draw elements into the screen.

## renderer.color

Array of bytes that represents a color used by the rendering functions.

### [1]

```lua
(field) [1]: number
```

Red

---

### [2]

```lua
(field) [2]: number
```

Green

---

### [3]

```lua
(field) [3]: number
```

Blue

---

### [4]

```lua
(field) [4]: number
```

Alpha

---

## renderer.font

### get_metadata

```lua
function renderer.font.get_metadata(font_or_path: string|renderer.font)
  -> renderer.font.metadata|renderer.font.metadata[]|nil
  2. errmsg: string?
```

Get a font file metadata. In case of a font group it will return an array
of metadata results for each font on the group.

---

### group

```lua
function renderer.font.group(fonts: renderer.font[])
  -> renderer.font
```

Combines an array of fonts into a single one for broader charset support,
the order of the list determines the fonts precedence when retrieving
a symbol from it.

---

### load

```lua
function renderer.font.load(path: string, size: number, options?: renderer.fontoptions)
  -> renderer.font
```

Create a new font object.

---

### copy

```lua
(method) renderer.font:copy(size?: number, options?: renderer.fontoptions)
  -> renderer.font
```

Clones a font object into a new one.

@*param* `size` — Optional new size for cloned font.

---

### get_height

```lua
(method) renderer.font:get_height()
  -> number
```

Get the height in pixels that occupies a single character
when rendered with this font.

---

### get_path

```lua
(method) renderer.font:get_path()
  -> string|table<integer, string>
```

Get the current path of the font as a string if a single font or as an
array of strings if a group font.

---

### get_size

```lua
(method) renderer.font:get_size()
  -> number
```

Get the current size of the font.

---

### get_width

```lua
(method) renderer.font:get_width(text: string)
  -> number
```

Get the width in pixels of the given text when
rendered with this font.

---

### set_size

```lua
(method) renderer.font:set_size(size: number)
```

Set a new size for the font.

---

### set_tab_size

```lua
(method) renderer.font:set_tab_size(chars: integer)
```

Set the amount of characters that represent a tab.

@*param* `chars` — Also known as tab width.

---

## renderer.font.metadata

Representation of a font metadata.

### family

```lua
(field) family: string?
```

---

### fullname

```lua
(field) fullname: string?
```

---

### id

```lua
(field) id: string?
```

---

### monospace

```lua
(field) monospace: boolean
```

Some monospace fonts do not set it to true, do not rely on it too much.

---

### psname

```lua
(field) psname: string?
```

---

### sampletext

```lua
(field) sampletext: string?
```

---

### subfamily

```lua
(field) subfamily: string?
```

---

### tfamily

```lua
(field) tfamily: string?
```

---

### tsubfamily

```lua
(field) tsubfamily: string?
```

---

### version

```lua
(field) version: string?
```

---

### wwsfamily

```lua
(field) wwsfamily: string?
```

---

### wwssubfamily

```lua
(field) wwssubfamily: string?
```

---

## renderer.fontoptions

Represent options that affect a font's rendering.

### antialiasing

```lua
(field) antialiasing: "grayscale"|"none"|"subpixel"
```

---

### bold

```lua
(field) bold: boolean
```

---

### hinting

```lua
(field) hinting: "full"|"none"|"slight"
```

---

### italic

```lua
(field) italic: boolean
```

---

### smoothing

```lua
(field) smoothing: boolean
```

---

### strikethrough

```lua
(field) strikethrough: boolean
```

---

### underline

```lua
(field) underline: boolean
```

---

## begin_frame

```lua
function renderer.begin_frame(window: renwindow)
```

Tell the rendering system that we want to build a new frame to render.

---

## begin_frame_lua

```lua
function
```

---

## draw_rect

```lua
function renderer.draw_rect(x: number, y: number, width: number, height: number, color: renderer.color)
```

Draw a rectangle.

---

## draw_rect_lua

```lua
function
```

---

## draw_text

```lua
function renderer.draw_text(font: renderer.font, text: string, x: number, y: number, color: renderer.color)
  -> x: number
```

Draw text and return the x coordinate where the text finished drawing.

---

## draw_text_lua

```lua
function
```

---

## end_frame

```lua
function renderer.end_frame()
```

Tell the rendering system that we finished building the frame.

---

## end_frame_lua

```lua
function
```

---

## get_size

```lua
function renderer.get_size()
  -> width: number
  2. height: number
```

Get the size of the screen area been rendered.

---

## set_clip_rect

```lua
function renderer.set_clip_rect(x: number, y: number, width: number, height: number)
```

Set the region of the screen where draw operations will take effect.

---

## set_clip_rect_lua

```lua
function
```

---

## show_debug

```lua
function renderer.show_debug(enable: boolean)
```

Toggles drawing debugging rectangles on the currently rendered sections
of the window to help troubleshoot the renderer.

---

