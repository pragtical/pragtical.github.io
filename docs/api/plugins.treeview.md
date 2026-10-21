---
sidebar_position: 74
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.treeview

```lua
local treeview = require "plugins.treeview"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## cache

```lua
(field) cache: table
```

---

## capture_text_input

```lua
(field) capture_text_input: boolean?
```

Receive text input while floating without taking focus

---

## context

```lua
(field) context: 'application'|'session'
```

---

## context_command_item

```lua
(field) context_command_item: (plugins.treeview.item)?
```

Target retained through command dispatch

---

## context_item

```lua
(field) context_item: (plugins.treeview.item)?
```

Clicked target while its context menu is open

---

## contextmenu

```lua
(field) contextmenu: (core.contextmenu)?
```

Tree context menu

---

## count_lines

```lua
(field) count_lines: integer
```

---

## current_scale

```lua
(field) current_scale: number
```

---

## cursor

```lua
(field) cursor: 'arrow'|'hand'|'ibeam'|'sizeh'|'sizenesw'...(+2)
```

---

## default_size

```lua
(field) default_size: number
```

Scaled configured width used to detect manual resizing

---

## expanded

```lua
(field) expanded: table
```

---

## floating

```lua
(field) floating: boolean
```

Whether the view uses floating placement

---

## floating_closing

```lua
(field) floating_closing: boolean?
```

Whether input is disabled while a closing slide runs

---

## floating_destination

```lua
(field) floating_destination: (core.view.position)?
```

Settled position retained during a slide

---

## floating_gesture

```lua
(field) floating_gesture: (core.view.floating_gesture)?
```

Active pointer drag or resize

---

## floating_options

```lua
(field) floating_options: (core.view.floating_options)?
```

Placement ownership and input policy

---

## floating_position

```lua
(field) floating_position: (core.view.position)?
```

Persistent interpolation state for a slide

---

## floating_previous_focus

```lua
(field) floating_previous_focus: (core.view)?
```

Focus target to restore when hiding

---

## floating_transition

```lua
(field) floating_transition: (core.view.floating_transition)?
```

Active slide and callback

---

## floating_visible

```lua
(field) floating_visible: boolean?
```

Whether the view is registered, including closing slides

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

## hovered_item

```lua
(field) hovered_item: unknown
```

---

## hovered_scrollbar

```lua
(field) hovered_scrollbar: boolean
```

---

## init_size

```lua
(field) init_size: boolean
```

---

## item_icon_width

```lua
(field) item_icon_width: number
```

---

## item_text_spacing

```lua
(field) item_text_spacing: number
```

---

## last_active_view

```lua
(field) last_active_view: unknown
```

---

## last_scroll_y

```lua
(field) last_scroll_y: number
```

---

## mouse_selecting

```lua
(field) mouse_selecting: unknown
```

---

## node

```lua
(field) node: unknown
```

---

## position

```lua
(field) position: core.view.position
```

---

## scroll

```lua
(field) scroll: core.view.scroll
```

---

## scroll_width

```lua
(field) scroll_width: number
```

Width of the currently drawn rows in content coordinates

---

## scrollable

```lua
(field) scrollable: boolean
```

---

## selected_item

```lua
(field) selected_item: any
```

---

## show_hidden

```lua
(field) show_hidden: boolean
```

---

## show_ignored

```lua
(field) show_ignored: boolean
```

---

## size

```lua
(field) size: core.view.position
```

---

## super

```lua
(field) super: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## target_size

```lua
(field) target_size: any
```

---

## toolbar

```lua
(field) toolbar: (plugins.toolbarview)?
```

Attached toolbar

---

## toolbar_position

```lua
(field) toolbar_position: "bottom"|"left"|"right"|"top"
```

Docking position owned by TreeView

---

## tooltip

```lua
(field) tooltip: table
```

---

## tooltip_view

```lua
(field) tooltip_view: (core.view)?
```

Floating path-tooltip companion

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

## visible

```lua
(field) visible: boolean
```

---

## watches

```lua
(field) watches: table
```

---

## config.plugins.treeview

Configuration options for `treeview` plugin.

### animate_scroll_to_focused_file

```lua
(field) animate_scroll_to_focused_file: boolean
```

Smoothly scroll to focused file.

---

### config_spec

```lua
(field) config_spec: table
```

The config specification used by gui generators

---

### expand_dirs_to_focused_file

```lua
(field) expand_dirs_to_focused_file: boolean
```

Automatically expands directories to select focused file.

---

### highlight_focused_file

```lua
(field) highlight_focused_file: boolean
```

Selects the file you are editing on the treeview.

---

### scroll_to_focused_file

```lua
(field) scroll_to_focused_file: boolean
```

Automatically scrolls the treeview to focused file.

---

### show_hidden

```lua
(field) show_hidden: boolean
```

Show hidden files and directories.

---

### show_ignored

```lua
(field) show_ignored: boolean
```

Show ignored files and directories.

---

### size

```lua
(field) size: number
```

Default treeview width.

---

### toolbar_position

```lua
(field) toolbar_position: "bottom"|"left"|"right"|"top"
```

Placement of the treeview toolbar; defaults to right at the editor's far-right edge.

---

## plugins.treeview.item

File or directory cached by TreeView and retained as a context-command target.

### abs_filename

```lua
(field) abs_filename: string
```

Absolute path

---

### depth

```lua
(field) depth: integer
```

Path depth relative to the project

---

### expanded

```lua
(field) expanded: boolean
```

Whether children are expanded

---

### filename

```lua
(field) filename: string
```

File or directory basename

---

### files

```lua
(field) files: system.fileinfo[]?
```

Cached directory children

---

### name

```lua
(field) name: string
```

Display name

---

### project

```lua
(field) project: core.project
```

Owning project

---

### symlink

```lua
(field) symlink: boolean?
```

Whether this is a directory symlink

---

### type

```lua
(field) type: "dir"|"file"
```

Entry kind

---

## plugins.treeview.toolbar_layout

Nodes owned by TreeView for placing its toolbar around the tree/document split.

### documents

```lua
(field) documents: core.node
```

Document branch retained when its child splits collapse

---

### group

```lua
(field) group: (core.node)?
```

Intermediate split rebuilt for the current docking position

---

### node

```lua
(field) node: core.node
```

Outer split retained across docking changes

---

### root

```lua
(field) root: core.rootview
```

Root that owns these layout nodes

---

### toolbar_node

```lua
(field) toolbar_node: core.node
```

Leaf containing the toolbar

---

## from_state

```lua
function core.view.from_state(state: table)
  -> view: (core.view)?
```

Create and initialize a new view instance from a previously saved state.

This function is called when restoring workspace/session state.
Implementations are responsible for:
  * creating the view instance
  * applying any persisted state

If loading the instance failed nil will be returned.

@*return* `view`: `(`[`core.view`](/docs/api/core.view)`)?`

---

## __call

```lua
(method) core.object:__call(...any)
  -> obj: core.object
```

Metamethod allowing class to be called like a constructor.
Enables syntax: `local obj = MyClass(args)` instead of `MyClass:new(args)`
Automatically creates instance and calls new() with provided arguments.

@*return* `obj`: [`core.object`](/docs/api/core.object) — The new instance of the class

---

## __tostring

```lua
(method) plugins.treeview:__tostring()
  -> string
```

---

## attach_toolbar

```lua
(method) plugins.treeview:attach_toolbar(toolbar: plugins.toolbarview)
```

Attach a toolbar to this docked tree and apply its current placement preference.
Owns toolbar docking and effective visibility while preserving requested visibility.

@*param* `toolbar`: [`plugins.toolbarview`](/docs/api/plugins.toolbarview) — Toolbar to place and orient around the tree

---

## bring_to_front

```lua
(method) core.view:bring_to_front()
  -> view: core.view
```

Raise a shown floating view and its owned popups above the other floating views.

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## clamp_scroll_position

```lua
(method) core.view:clamp_scroll_position()
```

Clamp scroll position to valid range (0 to max scrollable size).
Called automatically by update(). Override get_scrollable_size() to customize.

---

## draw

```lua
(method) plugins.treeview:draw()
```

---

## draw_background

```lua
(method) core.view:draw_background(color: renderer.color)
```

Draw a solid background color for the entire view.
Commonly called at the start of draw() methods.

@*param* `color`: [`renderer.color`](/docs/api/renderer#renderercolor) — Array of bytes that represents a color used by the rendering functions.

---

## draw_item

```lua
(method) plugins.treeview:draw_item(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
```

---

## draw_item_background

```lua
(method) plugins.treeview:draw_item_background(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
```

---

## draw_item_body

```lua
(method) plugins.treeview:draw_item_body(item: plugins.treeview.item, active: boolean, hovered: boolean, x: number, y: number, w: number, h: number)
  -> endpoint: number
```

Draw the scrollable icon and name, preserving get_item_icon/get_item_text hooks.
Return the intrinsic text endpoint even when the supplied viewport clips it.

@*param* `item`: [`plugins.treeview.item`](/docs/api/plugins.treeview#pluginstreeviewitem) — File or directory cached by TreeView and retained as a context-command target.

@*param* `x`: `number` — Scrolled content x coordinate after indentation and chevron

@*param* `y`: `number` — Row top in screen coordinates

@*param* `w`: `number` — Available body width

@*param* `h`: `number` — Row height

@*return* `endpoint`: `number` — Unclipped screen x coordinate after the text

---

## draw_item_chevron

```lua
(method) plugins.treeview:draw_item_chevron(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
```

---

## draw_item_gutter

```lua
(method) plugins.treeview:draw_item_gutter(item: plugins.treeview.item, active: boolean, hovered: boolean, x: number, y: number, w: number, h: number)
```

Draw optional markers inside the fixed left gutter. Empty by default.
Example: override get_gutter_width() to return 20 * SCALE, then draw an icon
here using common.draw_text(style.icon_font, style.dim, "!", "center", x, y, w, h).

@*param* `item`: [`plugins.treeview.item`](/docs/api/plugins.treeview#pluginstreeviewitem) — File or directory cached by TreeView and retained as a context-command target.

@*param* `x`: `number` — Fixed gutter left edge in screen coordinates

@*param* `y`: `number` — Row top in screen coordinates

@*param* `w`: `number` — Clipped gutter width

@*param* `h`: `number` — Row height

---

## draw_item_icon

```lua
(method) plugins.treeview:draw_item_icon(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
```

---

## draw_item_info

```lua
(method) plugins.treeview:draw_item_info(item: plugins.treeview.item, active: boolean, hovered: boolean, x: number, y: number, w: number, h: number)
  -> width: number
```

Draw right-aligned row information once and return the horizontal space it used.
TreeView clips this hook to the available row area, then clips the body before
the returned width. Return zero when empty; include all drawn content in the width.
The default does not draw any information.
Example: draw a cached label at x + w - label_width, then return label_width.

@*param* `item`: [`plugins.treeview.item`](/docs/api/plugins.treeview#pluginstreeviewitem) — File or directory cached by TreeView and retained as a context-command target.

@*param* `x`: `number` — Available area left edge in screen coordinates

@*param* `y`: `number` — Row top in screen coordinates

@*param* `w`: `number` — Available width, ending before the scrollbar and right padding

@*param* `h`: `number` — Row height

@*return* `width`: `number` — Occupied width, anchored at x + w

---

## draw_item_text

```lua
(method) plugins.treeview:draw_item_text(item: any, active: any, hovered: any, x: any, y: any, w: any, h: any)
  -> number
  2. number
  3. number
  4. number
```

---

## draw_scrollbar

```lua
(method) core.view:draw_scrollbar()
```

Draw the view's scrollbars.
Commonly called at the end of draw() methods.

---

## draw_tooltip

```lua
(method) plugins.treeview:draw_tooltip()
```

---

## each_item

```lua
(method) plugins.treeview:each_item()
  -> fun(...any):...unknown
```

---

## extend

```lua
(method) core.object:extend()
  -> cls: core.object
```

Create a new class that inherits from this one.
Returns a new class with this class as its parent.
Example: `local MyClass = Object:extend()`

@*return* `cls`: [`core.object`](/docs/api/core.object) — The new class table

---

## extends

```lua
(method) core.object:extends(T: any)
  -> extends: boolean
```

Check if object inherits from the given type (inheritance-aware).
Use this to check class hierarchy.
Example: `view:extends(View)` returns true for View and all subclasses

@*param* `T`: `any` — Class to check inheritance from

@*return* `extends`: `boolean` — True if object is T or inherits from T

---

## get_cached

```lua
(method) plugins.treeview:get_cached(project: any, path: any)
  -> table|unknown|nil
```

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

@*return* `x1`: `number` — Left edge

@*return* `y1`: `number` — Top edge

@*return* `x2`: `number` — Right edge

@*return* `y2`: `number` — Bottom edge

---

## get_content_offset

```lua
(method) core.view:get_content_offset()
  -> x: number
  2. y: number
```

Get the top-left corner of content area in screen coordinates.
Accounts for scroll offset. Use for drawing content at correct position.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

---

## get_context_item

```lua
(method) plugins.treeview:get_context_item()
  -> item: (plugins.treeview.item)?
```

Get the clicked menu target while opening or dispatching a contextual action.
Otherwise falls back to the hovered or selected item.

@*return* `item`: `(`[`plugins.treeview.item`](/docs/api/plugins.treeview#pluginstreeviewitem)`)?` — File or directory targeted by the action

---

## get_floating_bounds

```lua
(method) core.view:get_floating_bounds()
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Get the popup's outer rectangle in screen coordinates, including borders.
Override together with set_floating_bounds() for composite views.

@*return* `x`: `number` — Screen x coordinate

@*return* `y`: `number` — Screen y coordinate

@*return* `w`: `number` — Outer width in pixels

@*return* `h`: `number` — Outer height in pixels

---

## get_floating_drag_region

```lua
(method) core.view:get_floating_drag_region()
  -> x: number?
  2. y: number?
  3. w: number?
  4. h: number?
```

Get the screen rectangle where a floating view can be dragged.
Override to restrict dragging to a header; defaults to the full popup bounds.

@*return* `x`: `number?` — Screen x coordinate, or nil to disable dragging

@*return* `y`: `number?` — Screen y coordinate

@*return* `w`: `number?` — Region width

@*return* `h`: `number?` — Region height

---

## get_focus_target

```lua
(method) core.view:get_focus_target()
  -> target: (core.view)?
```

Get the view that should receive focus when this view is shown or clicked.
Override for composites whose keyboard focus belongs to a descendant.

@*return* `target`: `(`[`core.view`](/docs/api/core.view)`)?` — View to focus, or nil to preserve the current focus

---

## get_gutter_width

```lua
(method) plugins.treeview:get_gutter_width()
  -> width: number
```

Get the fixed left gutter width, shared by every row and unaffected by scrolling.
Override alongside draw_item_gutter() when markers need more room.

@*return* `width`: `number` — Gutter width in screen pixels, including its spacing

---

## get_h_scrollable_size

```lua
(method) plugins.treeview:get_h_scrollable_size()
  -> number
```

---

## get_item

```lua
(method) plugins.treeview:get_item(item: any, where: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_item_height

```lua
(method) plugins.treeview:get_item_height()
  -> number
```

---

## get_item_icon

```lua
(method) plugins.treeview:get_item_icon(item: any, active: any, hovered: any)
  -> string
  2. renderer.font
  3. unknown
```

@*return*: [`renderer.font`](/docs/api/renderer#rendererfont)

---

## get_item_text

```lua
(method) plugins.treeview:get_item_text(item: any, active: any, hovered: any)
  -> unknown
  2. renderer.font
  3. unknown
```

@*return*: [`renderer.font`](/docs/api/renderer#rendererfont)

---

## get_items

```lua
(method) plugins.treeview:get_items(project: any, path: any, x: any, y: any, w: any, h: any)
  -> integer
```

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

@*return* `path`: `string?`

---

## get_name

```lua
(method) plugins.treeview:get_name()
  -> nil
```

---

## get_next

```lua
(method) plugins.treeview:get_next(item: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_parent

```lua
(method) plugins.treeview:get_parent(item: any)
  -> unknown|nil
  2. unknown|nil
```

---

## get_previous

```lua
(method) plugins.treeview:get_previous(item: any)
  -> unknown
  2. unknown
  3. unknown
  4. unknown
  5. unknown
```

---

## get_scrollable_size

```lua
(method) plugins.treeview:get_scrollable_size()
  -> number
```

---

## get_state

```lua
(method) core.view:get_state()
  -> state: table?
```

Serialize this view into a persistable state table.

This method is called when the editor is saving workspace/session state.
The returned table must contain only plain Lua data (no functions,
userdata, metatables, or cyclic references).

Returning `nil` indicates that this view should NOT be restored when
reloading the workspace.

@*return* `state`: `table?`

---

## get_text_bounding_box

```lua
(method) plugins.treeview:get_text_bounding_box(item: any, x: any, y: any, w: any, h: any)
  -> unknown
  2. unknown
  3. number
  4. unknown
```

---

## hide_floating

```lua
(method) core.view:hide_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Hide the floating view, close owned popups, cancel input, and restore focus.
A closing slide delays removal while the view immediately stops receiving input.
Disabled transitions remove the view and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional closing slide (to) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## hide_tooltip

```lua
(method) plugins.treeview:hide_tooltip()
```

Cancel pending or shown path tooltips and hide their floating companion.

---

## hit_test

```lua
(method) core.view:hit_test(x: number, y: number)
  -> inside: boolean
```

Check whether a screen point lies inside the view's outer rectangle.
Override for custom shapes or composites with additional hit regions.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `inside`: `boolean` — Whether the view contains the point

---

## invalidate_cache

```lua
(method) plugins.treeview:invalidate_cache(project?: core.project, path?: string)
```

Invalidate one directory after a filesystem change, or reset all cached rows.

@*param* `project?`: [`core.project`](/docs/api/core.project) — Project owning the changed directory

@*param* `path?`: `string` — Absolute changed directory; omit both arguments for a full reset

---

## is

```lua
(method) core.object:is(T: any)
  -> is_exact: boolean
```

Check if object is exactly of the given type (no inheritance check).
Use this for strict type matching.
Example: `view:is(DocView)` returns true only if view is a DocView, not a subclass

@*param* `T`: `any` — Class to check against

@*return* `is_exact`: `boolean` — True if object is exactly type T

---

## is_class_of

```lua
(method) core.object:is_class_of(T: any)
  -> is_instance: boolean
```

Check if the given object is exactly an instance of this class.
Inverse of is() - checks if T is an instance of self.
Example: `DocView:is_class_of(obj)` checks if obj is exactly a DocView

@*param* `T`: `any` — Object to check

@*return* `is_instance`: `boolean` — True if T is exactly an instance of this class

---

## is_extended_by

```lua
(method) core.object:is_extended_by(T: any)
  -> is_extended: boolean
```

Check if the given object/class inherits from this class.
Inverse of extends() - checks if T is a subclass of self.
Example: `View:is_extended_by(DocView)` checks if DocView inherits from View

@*param* `T`: `any` — Object or class to check

@*return* `is_extended`: `boolean` — True if T inherits from this class

---

## is_floating_owner_visible

```lua
(method) core.view:is_floating_owner_visible()
  -> visible: boolean?
```

Check whether floating popups owned by this view should remain visible.
Docked owners must be active in their node; container children follow their parent.
Override for composites with their own visibility rules.

@*return* `visible`: `boolean?` — Falsy when the owner is hidden or its tab is inactive

---

## move_towards

```lua
(method) core.view:move_towards(t: table, k: string|number, dest: number, rate?: number, name?: string)
```

Smoothly animate a value towards a destination.
Use this for animations instead of direct assignment.

@*param* `t`: `table` — Table containing the value

@*param* `k`: `string|number` — Key in table

@*param* `dest`: `number` — Target value

@*param* `rate?`: `number` — Animation speed (0-1, default 0.5, higher = faster)

@*param* `name?`: `string` — Transition name (for config.disabled_transitions)

---

## new

```lua
(method) plugins.treeview:new()
```

---

## on_file_dropped

```lua
(method) core.view:on_file_dropped(filename: string, x: number, y: number)
  -> consumed: boolean
```

Handle file drop events (drag and drop from OS).
Override to handle dropped files. Return true to consume event.

@*param* `filename`: `string` — Absolute path to dropped file

@*param* `x`: `number` — Screen x where file was dropped

@*param* `y`: `number` — Screen y where file was dropped

@*return* `consumed`: `boolean` — True to consume event, false to propagate

---

## on_floating_dismiss

```lua
(method) core.view:on_floating_dismiss(reason: "escape"|"focuslost"|"outside")
```

Handle a dismissal requested by Escape, an outside click, or window focus loss.
The default implementation hides the view immediately; override for custom handling.

```lua
reason:
    | "escape"
    | "outside"
    | "focuslost"
```

@*param* `reason`: `"escape"|"focuslost"|"outside"` — Event that requested dismissal

---

## on_floating_visibility_changed

```lua
(method) core.view:on_floating_visibility_changed(visible: boolean)
```

Called when showing a floating view or completing its removal.
Override to synchronize widget visibility or clear popup controller state.

@*param* `visible`: `boolean` — True on show, false when removal completes

---

## on_ime_text_editing

```lua
(method) core.view:on_ime_text_editing(text: string, start: number, length: number)
```

Handle IME (Input Method Editor) text composition events.
Override for IME support in text editors. Called during composition.

@*param* `text`: `string` — Composition text being edited

@*param* `start`: `number` — Start position of selection within composition

@*param* `length`: `number` — Length of selection within composition

---

## on_key_pressed

```lua
(method) core.view:on_key_pressed(stroke: string, ...any)
  -> consumed: boolean?
```

Handle a floating view's keyboard input before command dispatch.
Override and return true to consume the normalized key binding.

@*param* `stroke`: `string` — Normalized key binding, such as "ctrl+return"

@*param*: `any` — Additional arguments forwarded by the keyboard handler

@*return* `consumed`: `boolean?` — Whether the event was handled

---

## on_mouse_capture_lost

```lua
(method) core.view:on_mouse_capture_lost()
```

Cancel pointer gestures when RootView releases mouse capture without a click.
Clears floating dragging, text selection, scrollbar dragging, and hover state.
Override to clear any additional subclass gesture state.

---

## on_mouse_left

```lua
(method) plugins.treeview:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) plugins.treeview:on_mouse_moved(px: number, py: number, ...any)
```

---

## on_mouse_pressed

```lua
(method) core.view:on_mouse_pressed(button: 'left'|'right', x: number, y: number, clicks: integer)
  -> consumed: boolean?
```

Handle mouse button press events.
Override to handle clicks. Return true to consume event and prevent propagation.
Base implementation handles scrollbar clicks.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `clicks`: `integer` — Number of consecutive clicks (configurable with config.max_clicks)

@*return* `consumed`: `boolean?` — True to consume event, false/nil to propagate

---

## on_mouse_released

```lua
(method) core.view:on_mouse_released(button: 'left'|'right', x: number, y: number)
```

Handle mouse button release events.
Override to handle click completion. Base implementation handles scrollbar.

```lua
button:
    | 'left'
    | 'right'
```

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

---

## on_mouse_wheel

```lua
(method) core.view:on_mouse_wheel(y: number, x: number)
  -> consumed: boolean?
```

Handle mouse wheel scroll events.
Override for custom scroll behavior. Base implementation does nothing.

@*param* `y`: `number` — Vertical scroll delta; positive is "up"

@*param* `x`: `number` — Horizontal scroll delta; positive is "left"

@*return* `consumed`: `boolean?` — True to consume event

---

## on_scale_change

```lua
(method) plugins.treeview:on_scale_change(new_scale: number, prev_scale: number)
```

---

## on_text_input

```lua
(method) core.view:on_text_input(text: string)
```

Handle text input events (typing, IME composition).
Override for text editing. Called after IME composition completes.

@*param* `text`: `string` — Input text (may be multiple characters)

---

## on_touch_moved

```lua
(method) core.view:on_touch_moved(x: number, y: number, dx: number, dy: number, i: number)
```

Handle touch move events (touchscreen/trackpad gestures).
Override for touch-specific behavior. Base implementation handles scrolling.

@*param* `x`: `number` — Current touch x coordinate

@*param* `y`: `number` — Current touch y coordinate

@*param* `dx`: `number` — Delta x since last position

@*param* `dy`: `number` — Delta y since last position

@*param* `i`: `number` — Touch finger/pointer index

---

## open_doc

```lua
(method) plugins.treeview:open_doc(filename: any)
```

---

## owns_view

```lua
(method) core.view:owns_view(view?: core.view)
  -> owned: boolean
```

Check whether a view is this view or belongs to it through a container or owner.
Follows parent, subparent, and floating owner links while guarding against cycles.

@*param* `view?`: [`core.view`](/docs/api/core.view) — Candidate view

@*return* `owned`: `boolean` — Whether the candidate belongs to this view

---

## scrollbar_dragging

```lua
(method) core.view:scrollbar_dragging()
  -> dragging: boolean
```

Check if user is currently dragging either scrollbar.

@*return* `dragging`: `boolean` — True if scrollbar drag is in progress

---

## scrollbar_hovering

```lua
(method) core.view:scrollbar_hovering()
  -> hovering: boolean
```

Check if mouse is hovering over either scrollbar track.

@*return* `hovering`: `boolean` — True if mouse is over scrollbar

---

## scrollbar_overlaps_point

```lua
(method) core.view:scrollbar_overlaps_point(x: number, y: number)
  -> overlaps: boolean
```

Check if a screen point overlaps either scrollbar.
Useful for determining cursor style or handling clicks.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*return* `overlaps`: `boolean` — True if point is over vertical or horizontal scrollbar

---

## set_floating

```lua
(method) core.view:set_floating(enabled: boolean, options?: core.view.floating_options)
  -> view: core.view
```

Enable or disable floating placement and configure popup input and ownership.
Call show_floating() to show the view after enabling this mode.
Detach it from its node or parent container before showing. Disabling hides it.

@*param* `enabled`: `boolean` — Whether the view should use floating placement

@*param* `options?`: [`core.view.floating_options`](/docs/api/core.view#coreviewfloating_options) — Options merged with existing ones when enabling

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## set_floating_bounds

```lua
(method) core.view:set_floating_bounds(x: number, y: number, w: number, h: number)
```

Set the popup's outer rectangle when RootView places, drags, or resizes it.
Override for composites that need to update child layout or account for borders.

@*param* `x`: `number` — Screen x coordinate

@*param* `y`: `number` — Screen y coordinate

@*param* `w`: `number` — Outer width in pixels

@*param* `h`: `number` — Outer height in pixels

---

## set_selection

```lua
(method) plugins.treeview:set_selection(selection: any, selection_y: any, center: any, instant: any)
```

---

## set_selection_to_path

```lua
(method) plugins.treeview:set_selection_to_path(path: string, expand: boolean, scroll_to: boolean, instant: boolean)
  -> table?
```

Sets the selection to the file with the specified path.

@*param* `path`: `string` — Absolute path of item to select

@*param* `expand`: `boolean` — Expand dirs leading to the item

@*param* `scroll_to`: `boolean` — Scroll to make the item visible

@*param* `instant`: `boolean` — Don't animate the scroll

@*return*: `table?` — The selected item

---

## set_target_size

```lua
(method) plugins.treeview:set_target_size(axis: any, value: any)
  -> boolean
```

---

## set_toolbar_position

```lua
(method) plugins.treeview:set_toolbar_position(position: "bottom"|"left"|"right"|"top")
```

Set toolbar docking and update TreeView's placement setting.
Left and right use vertical icons; right places the toolbar beyond all document panes.
Top and bottom use horizontal icons above or below the tree.
May be called before attachment; changing placement preserves document and tree state.
Settings saves this preference to disk when its position selector is used.

```lua
position:
    | "left"
    | "bottom"
    | "top"
    | "right"
```

@*param* `position`: `"bottom"|"left"|"right"|"top"` — Tree docking or the editor's far-right edge

---

## show_floating

```lua
(method) core.view:show_floating(options?: core.view.floating_transition)
  -> view: core.view
```

Show or raise the view in RootView's floating layer and apply its focus policy.
Requires a view detached from its node and parent container.
Reopening cancels a pending close and its completion callback.
Disabled transitions apply placement and run the completion callback immediately.

@*param* `options?`: [`core.view.floating_transition`](/docs/api/core.view#coreviewfloating_transition) — Optional opening slide (from) and callback

@*return* `view`: [`core.view`](/docs/api/core.view) — This view, for chaining

---

## supports_text_input

```lua
(method) core.view:supports_text_input()
  -> boolean
```

Whether this view accepts text input (enables IME).
Override and return true for text editors and input fields.

---

## toggle_expand

```lua
(method) plugins.treeview:toggle_expand(toggle: any, item: any)
```

---

## try_close

```lua
(method) core.view:try_close(do_close: function)
```

Called when view is requested to close (e.g., tab close button).
Override to show confirmation dialogs for unsaved changes.
Example: `core.command_view:enter("Save?", \{submit = do_close\})`

@*param* `do_close`: `function` — Call this function to actually close the view

---

## update

```lua
(method) plugins.treeview:update()
```

---

## update_floating

```lua
(method) core.view:update_floating()
```

Update anchor placement or advance an opening or closing slide.
RootView calls this before update() for each shown floating view.
Completes removal and invokes the transition callback when a slide finishes.

---

## update_scrollbar

```lua
(method) core.view:update_scrollbar()
```

Update scrollbar positions and sizes.
Called automatically by update(). Rarely needs to be called manually.

---

