---
sidebar_position: 38
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.markdownview

```lua
local markdownview = require "core.markdownview"
```

## _layout_generation

```lua
(field) _layout_generation: integer
```

---

## _layout_thread_key

```lua
(field) _layout_thread_key: table
```

---

## _parse_generation

```lua
(field) _parse_generation: integer
```

---

## _parse_thread_key

```lua
(field) _parse_thread_key: table
```

---

## _ready_callbacks

```lua
(field) _ready_callbacks: table
```

---

## _text_chunks

```lua
(field) _text_chunks: table
```

---

## _text_length

```lua
(field) _text_length: integer
```

---

## _text_suffix

```lua
(field) _text_suffix: string
```

---

## append_stale_frame

```lua
(field) append_stale_frame: unknown
```

---

## async_layout_threshold

```lua
(field) async_layout_threshold: integer
```

---

## async_parse_threshold

```lua
(field) async_parse_threshold: integer
```

---

## blocks

```lua
(field) blocks: table[]
```

---

## context

```lua
(field) context: string
```

---

## current_scale

```lua
(field) current_scale: number
```

---

## cursor

```lua
(field) cursor: string
```

---

## estimated_block_height

```lua
(field) estimated_block_height: number?
```

---

## font

```lua
(field) font: (renderer.font)?
```

---

## font_cache

```lua
(field) font_cache: table?
```

---

## footnotes

```lua
(field) footnotes: table
```

---

## h_scrollbar

```lua
(field) h_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

## hovered_link_url

```lua
(field) hovered_link_url: string?
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## image_cache

```lua
(field) image_cache: table<string, table>
```

---

## last_doc_change_id

```lua
(field) last_doc_change_id: integer?
```

---

## layout

```lua
(field) layout: table?
```

---

## layouting

```lua
(field) layouting: boolean
```

---

## linked_doc

```lua
(field) linked_doc: (core.doc)?
```

---

## parsing

```lua
(field) parsing: boolean
```

---

## partial_commit_stale_frame

```lua
(field) partial_commit_stale_frame: unknown
```

---

## partial_layout

```lua
(field) partial_layout: table|nil
```

---

## partial_text

```lua
(field) partial_text: string
```

---

## path

```lua
(field) path: string?
```

---

## pending_h_scrollable_size

```lua
(field) pending_h_scrollable_size: unknown
```

---

## pending_layout

```lua
(field) pending_layout: table
```

---

## pending_scrollable_size

```lua
(field) pending_scrollable_size: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## preserved_scroll

```lua
(field) preserved_scroll: unknown
```

---

## references

```lua
(field) references: table<string, string>
```

---

## scroll

```lua
(field) scroll: core.view.scroll
```

---

## scrollable

```lua
(field) scrollable: boolean
```

---

## selecting

```lua
(field) selecting: boolean?
```

---

## selection_anchor

```lua
(field) selection_anchor: integer?
```

---

## selection_cursor

```lua
(field) selection_cursor: integer?
```

---

## size

```lua
(field) size: core.view.position
```

---

## stale_layout

```lua
(field) stale_layout: unknown
```

---

## super

```lua
(field) super: core.view
```

Base view.

---

## text

```lua
(field) text: string
```

---

## title

```lua
(field) title: string?
```

---

## v_scrollbar

```lua
(field) v_scrollbar: core.scrollbar
```

Scrollable viewport indicator with draggable thumb.
Supports both vertical and horizontal orientation with configurable alignment.
Uses a "normal" coordinate system internally that treats all scrollbars as
vertical-end-aligned, then transforms to the actual orientation/alignment.

---

## virtual_block_cache

```lua
(field) virtual_block_cache: table
```

---

## virtual_layout_cache

```lua
(field) virtual_layout_cache: unknown
```

---

## virtual_metrics

```lua
(field) virtual_metrics: unknown
```

---

## virtual_overscan_px

```lua
(field) virtual_overscan_px: number?
```

---

## virtualized

```lua
(field) virtualized: boolean
```

---

## core.markdownview.source

### doc

```lua
(field) doc: (core.doc)?
```

---

### estimated_block_height

```lua
(field) estimated_block_height: number?
```

---

### font

```lua
(field) font: (renderer.font)?
```

---

### linked_doc

```lua
(field) linked_doc: (core.doc)?
```

---

### name

```lua
(field) name: string?
```

---

### path

```lua
(field) path: string?
```

---

### text

```lua
(field) text: string?
```

---

### title

```lua
(field) title: string?
```

---

### virtual_overscan_px

```lua
(field) virtual_overscan_px: number?
```

---

### virtualized

```lua
(field) virtualized: boolean?
```

---

## core.markdownview.state

### path

```lua
(field) path: string
```

---

### scroll

```lua
(field) scroll: { x: number, y: number }
```

---

## __index

```lua
function core.markdownview.__index(self: core.markdownview, key: any)
  -> string|unknown
```

---

## append_markdown

```lua
function
```

---

## from_state

```lua
function core.markdownview.from_state(state: core.markdownview.state)
  -> (core.markdownview)?
```

Restores a file-backed markdown preview from saved state.

---

## is_supported

```lua
function core.markdownview.is_supported(path: string)
  -> boolean
```

Checks whether a file path should be opened by the markdown preview.

---

## parse_blocks

```lua
function core.markdownview.parse_blocks(text: string)
  -> table[]
```

Parses markdown text into the intermediate block structure used by the view.

---

## resolve_color

```lua
function
```

---

## __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj` — The new instance of the class

---

## __tostring

```lua
(method) core.markdownview:__tostring()
  -> string
```

---

## append_text

```lua
(method) core.markdownview:append_text(text?: string)
  -> incremental: boolean
```

Appends markdown to the preview, reparsing only the appended blocks when safe.

Markdown can continue the previous block across a line boundary. When the
existing text and appended text do not meet at a blank block boundary, this
falls back to `set_text` so the rendered document remains equivalent.

@*return* `incremental` — True when only appended blocks were parsed.

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## clear_partial_text

```lua
(method) core.markdownview:clear_partial_text()
```

Clears temporary plain text rendered after the parsed markdown document.

---

## clear_selection

```lua
(method) core.markdownview:clear_selection()
```

Clears the active text selection.

---

## commit_partial_text

```lua
(method) core.markdownview:commit_partial_text(markdown_text?: string)
  -> incremental: boolean
```

Commits the partial text by appending final markdown to the document.

@*return* `incremental` — True when only appended blocks were parsed.

---

## copy_selection

```lua
(method) core.markdownview:copy_selection()
  -> copied: boolean
```

Copies the selected rendered text to the system clipboard.

---

## draw

```lua
(method) core.markdownview:draw()
```

Draws the markdown preview contents and scrollbars.

---

## draw_at

```lua
(method) core.markdownview:draw_at(x: number, y: number, width: number, height: number, background?: renderer.color, show_scrollbars?: boolean)
```

Draws the markdown contents at an arbitrary rectangle.

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## ensure_image_entry

```lua
(method) core.markdownview:ensure_image_entry(block: table)
  -> table
```

Returns an image cache entry for the given markdown image block.

---

## ensure_layout

```lua
(method) core.markdownview:ensure_layout()
  -> table
```

Builds the render command list for the current view width.

---

## ensure_partial_layout

```lua
(method) core.markdownview:ensure_partial_layout()
  -> table?
```

Builds the render command list for temporary partial text.

---

## extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls` — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T` — Class to check inheritance from

@*return* `extends` — True if object is T or inherits from T

---

## get_content_bounds

```lua
(method) core.view:get_content_bounds()
  -> x1: number
  2. y1: number
  3. x2: number
  4. y2: number
```

Get the content bounds in content coordinates (accounting for scroll).

@*return* `x1` — Left edge

@*return* `y1` — Top edge

@*return* `x2` — Right edge

@*return* `y2` — Bottom edge

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

Get the top-left corner of content area in screen coordinates.
Accounts for scroll offset. Use for drawing content at correct position.

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

---

## get_context_target_at

```lua
(method) core.markdownview:get_context_target_at(x: number, y: number)
  -> { link_url: string?, image_url: string? }?
```

Returns a context-copy target under the given mouse position, if any.

---

## get_font_cache

```lua
(method) core.markdownview:get_font_cache()
  -> table
```

Builds and caches the fonts used by the markdown renderer.

---

## get_h_scrollable_size

```lua
(method) core.markdownview:get_h_scrollable_size()
  -> number
```

---

## get_link_at

```lua
(method) core.markdownview:get_link_at(x: number, y: number)
  -> string?
```

Returns the URL under the given mouse position, if any.

---

## get_module

```lua
(method) core.view:get_module()
  -> path: string?
```

Returns the module path of this view.

This method resolves the Lua module name that loaded the concrete view
class (for example `"core.view"`).

If the view class cannot be associated with any loaded module, `nil`
is returned.

---

## get_name

```lua
(method) core.markdownview:get_name()
  -> string
```

---

## get_rendered_size

```lua
(method) core.markdownview:get_rendered_size(width: number)
  -> width: number
  2. height: number
```

Returns the rendered size for the given outer width.

---

## get_scaled_image

```lua
(method) core.markdownview:get_scaled_image(entry: table, max_width: number)
  -> image: canvas?
  2. width: number?
  3. height: number?
```

Returns a scaled canvas for an image entry constrained to the given width.

---

## get_scrollable_size

```lua
(method) core.markdownview:get_scrollable_size()
  -> number
```

---

## get_selected_text

```lua
(method) core.markdownview:get_selected_text()
  -> string
```

Returns the selected rendered text.

---

## get_state

```lua
(method) core.markdownview:get_state()
  -> (core.markdownview.state)?
```

Returns the persisted view state for file-backed previews.

---

## get_text

```lua
(method) core.markdownview:get_text()
  -> text: string
```

Returns the full markdown source text, materializing appended chunks lazily.

---

## get_text_position_at

```lua
(method) core.markdownview:get_text_position_at(x: number, y: number)
  -> integer
```

Returns the selectable text position nearest to the given mouse position.

---

## has_selection

```lua
(method) core.markdownview:has_selection()
  -> boolean
```

Returns whether the preview has selected text.

---

## invalidate_layout

```lua
(method) core.markdownview:invalidate_layout()
```

Invalidates the cached layout so it will be rebuilt on the next draw.

---

## is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T` — Class to check against

@*return* `is_exact` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T` — Object to check

@*return* `is_instance` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T` — Object or class to check

@*return* `is_extended` — True if T inherits from this class

---

## is_ready

```lua
(method) core.markdownview:is_ready()
  -> boolean
```

Returns whether markdown parsing and layout work is currently settled.

---

## load

```lua
(method) core.markdownview:load(path: string)
  -> loaded: boolean
  2. errmsg: string?
```

Loads markdown contents from disk into the view.

---

## load_image_from_path

```lua
(method) core.markdownview:load_image_from_path(entry: table, path: string)
```

Loads an image entry from a local file path.

---

## move_towards

```lua
(method) core.view:move_towards(t: table, k: string|number, dest: number, rate?: number, name?: string)
```

Smoothly animate a value towards a destination.
Use this for animations instead of direct assignment.

@*param* `t` — Table containing the value

@*param* `k` — Key in table

@*param* `dest` — Target value

@*param* `rate` — Animation speed (0-1, default 0.5, higher = faster)

@*param* `name` — Transition name (for config.disabled_transitions)

---

## new

```lua
(method) core.markdownview:new(source?: string|core.markdownview.source, title?: string)
```

Constructor.

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> consumed: boolean
```

Handle file drop events (drag and drop from OS).
Override to handle dropped files. Return true to consume event.

@*param* `filename` — Absolute path to dropped file

@*param* `x` — Screen x where file was dropped

@*param* `y` — Screen y where file was dropped

@*return* `consumed` — True to consume event, false to propagate

---

## on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text` — Composition text being edited

@*param* `start` — Start position of selection within composition

@*param* `length` — Length of selection within composition

---

## on_mouse_left

```lua
(method) core.markdownview:on_mouse_left()
```

Clears hover state when the mouse leaves the preview.

---

## on_mouse_moved

```lua
(method) core.markdownview:on_mouse_moved(x: number, y: number, dx: number, dy: number)
  -> boolean?
```

---

## on_mouse_pressed

```lua
(method) core.markdownview:on_mouse_pressed(button: string, x: number, y: number, clicks: integer)
  -> boolean?
```

---

## on_mouse_released

```lua
(method) core.markdownview:on_mouse_released(button: string, x: number, y: number)
  -> boolean?
```

---

## on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> consumed: boolean?
```

Handle mouse wheel scroll events.
Override for custom scroll behavior. Base implementation does nothing.

@*param* `y` — Vertical scroll delta; positive is "up"

@*param* `x` — Horizontal scroll delta; positive is "left"

@*return* `consumed` — True to consume event

---

## on_scale_change

```lua
(method) core.markdownview:on_scale_change()
```

Clears cached font and layout data after a scale change.

---

## on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

Handle text input events (typing, IME composition).
Override for text editing. Called after IME composition completes.

@*param* `text` — Input text (may be multiple characters)

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

Handle touch move events (touchscreen/trackpad gestures).
Override for touch-specific behavior. Base implementation handles scrolling.

@*param* `x` — Current touch x coordinate

@*param* `y` — Current touch y coordinate

@*param* `dx` — Delta x since last position

@*param* `dy` — Delta y since last position

@*param* `i` — Touch finger/pointer index

---

## open_link

```lua
(method) core.markdownview:open_link(url: string)
```

Opens a markdown link target, handling anchors, local files and external URLs.

---

## refresh_from_doc

```lua
(method) core.markdownview:refresh_from_doc()
```

Refreshes preview contents from the bound document.

---

## resolve_project_link

```lua
(method) core.markdownview:resolve_project_link(url: string)
  -> string?
```

Resolves a markdown link to a project-local absolute path when possible.

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> dragging: boolean
```

Check if user is currently dragging either scrollbar.

@*return* `dragging` — True if scrollbar drag is in progress

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering` — True if mouse is over scrollbar

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> overlaps: boolean
```

Check if a screen point overlaps either scrollbar.
Useful for determining cursor style or handling clicks.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `overlaps` — True if point is over vertical or horizontal scrollbar

---

## set_font

```lua
(method) core.markdownview:set_font(font?: renderer.font)
```

Sets a fixed font object for all rendered markdown fonts.

---

## set_hovered_link

```lua
(method) core.markdownview:set_hovered_link(url?: string)
```

Updates hover state and status-bar tooltip for links.

---

## set_partial_text

```lua
(method) core.markdownview:set_partial_text(text?: string)
```

Sets temporary plain text rendered after the parsed markdown document.

The partial text is intended for streaming output. It is displayed literally
and does not mutate the parsed markdown document until committed.

---

## set_text

```lua
(method) core.markdownview:set_text(text?: string)
```

Replaces the preview text and reparses the markdown document.

---

## start_remote_image_download

```lua
(method) core.markdownview:start_remote_image_download(entry: table)
```

Starts downloading a remote image used by the markdown document.

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

---

## try_close

```lua
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close` — Call this function to actually close the view

---

## update

```lua
(method) core.markdownview:update()
```

Refreshes the preview when the bound document changes.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

## when_ready

```lua
(method) core.markdownview:when_ready(callback: fun(view: core.markdownview))
```

Runs a callback once current asynchronous parsing/layout work has settled.

---

