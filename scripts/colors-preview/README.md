# Editor Color Preview

`static/img/colors/editor.svg` is exported from the real Pragtical renderer,
not a hand-drawn editor mockup. It preserves the captured drawing order,
clipping rectangles, positions, glyph advances, and outlines from the actual
UI, code, and icon fonts. CSS variables replace the captured style colors;
the SVG's fallback values reproduce the One Dark reference capture.

The native reference is `static/img/colors/editor-reference.png`. Browser SVG
and SDL/FreeType rasterization differ slightly at glyph edges, but the geometry
and font outlines are shared. No browser fonts or embedded bitmaps are used.

## Regeneration

Use a fresh temporary user profile, the sibling editor's current build and
`scripts/run-local` workflow, One Dark, a 1920x1080 window, and scale 2. Enable
SCM and LSP in that temporary profile, with a working Lua language server.
Do not change the maintainer's profile or repositories.

Prepare a small temporary Git repository named `catalog-app`, containing
`main.lua`, `catalog.lua`, `README.md`, and `docs`, `src`, and `tests` directories.
Commit the baseline in that temporary repository, then modify a product price
to produce genuine SCM markers. The main file used for the capture is:

```lua
local catalog = require "catalog"

local products = {
  { name = "Notebook", price = 14.50 },
  { name = "Pencil", price = 2.00 },
  { name = "Sketchbook", price = 18.00 },
}
local total = catalog.total(products)

for _, product in ipairs(products) do
  local price = catalog.discount(product.price, 0.15)
  print(string.format("%s: $%.2f", product.name, price))
end
```

`catalog.lua` should export documented functions such as `discount`,
`find_product`, `format_price`, `sort_products`, and `total`, so LuaLS supplies
real completion results. `capture.lua` asserts that both SCM and LuaLS are
active before recording the renderer operations. It temporarily removes
`total(products)` on line 8 to request completions after `catalog.`.

Copy `capture.lua` into that project's `.capture.lua`, set
`PRAGTICAL_PREVIEW_OUTPUT` to a temporary output directory, and launch it with:

```sh
SDL_VIDEO_DRIVER=dummy SDL_AUDIO_DRIVER=dummy \
PRAGTICAL_RENDERER=surface PRAGTICAL_SCALE=2 \
PRAGTICAL_USERDIR=/tmp/preview-profile \
PRAGTICAL_PREVIEW_OUTPUT=/tmp/preview-output \
./scripts/run-local -keep -global build run -n /tmp/catalog-app/.capture.lua
```

Only use `-keep` with an already current `.run` tree. The output contains
`reference.png` and `draw-list.json`. With Python's `fontTools` installed, run
this from the website checkout while the capture's font paths still exist:

```sh
python scripts/colors-preview/export.py /tmp/preview-output/draw-list.json \
  static/img/colors/editor.svg
cp /tmp/preview-output/reference.png static/img/colors/editor-reference.png
```

Inspect the native screenshot and browser-rendered SVG side by side. Verify
light and dark selections on `/colors`, including the SCM colors. Keep the
temporary profile, Git repository, server logs, and draw-list JSON untracked.
