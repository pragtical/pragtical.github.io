---
sidebar_position: 36
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.node

Represents a container in the UI layout tree.
Nodes can be either "leaf" (contains views/tabs) or split (contains two child nodes).
The root node forms a binary tree structure that defines the editor's layout.

```lua
local node = require "core.node"
```

## __index

```lua
(field) __index: core.object
```

Base class providing OOP functionality for Lua.
All classes in Pragtical inherit from Object.

---

## a

```lua
(field) a: (core.node)?
```

Represents a container in the UI layout tree.
Nodes can be either "leaf" (contains views/tabs) or split (contains two child nodes).
The root node forms a binary tree structure that defines the editor's layout.

---

## active_view

```lua
(field) active_view: core.view
```

Base view.

---

## b

```lua
(field) b: (core.node)?
```

Represents a container in the UI layout tree.
Nodes can be either "leaf" (contains views/tabs) or split (contains two child nodes).
The root node forms a binary tree structure that defines the editor's layout.

---

## divider

```lua
(field) divider: number
```

---

## hovered_close

```lua
(field) hovered_close: integer
```

---

## hovered_scroll_button

```lua
(field) hovered_scroll_button: integer
```

---

## hovered_tab

```lua
(field) hovered_tab: integer?
```

---

## is_primary_node

```lua
(field) is_primary_node: boolean?
```

---

## locked

```lua
(field) locked: (core.node.lock)?
```

---

## position

```lua
(field) position: core.view.position
```

---

## resizable

```lua
(field) resizable: boolean?
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

## tab_offset

```lua
(field) tab_offset: integer
```

---

## tab_shift

```lua
(field) tab_shift: number
```

---

## tab_width

```lua
(field) tab_width: number
```

---

## views

```lua
(field) views: core.view[]
```

---

## core.node.lock

### x

```lua
(field) x: boolean
```

---

### y

```lua
(field) y: boolean
```

---

## core.node.type

```lua
core.node.type:
    | "leaf"
    | "hsplit"
    | "vsplit"
```

## copy_position_and_size

```lua
function core.node.copy_position_and_size(dst: core.node, src: core.node)
```

Copy position and size from one node to another.

@*param* `dst` — Destination node

@*param* `src` — Source node

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
(method) core.node:__tostring()
  -> string
```

---

## add_view

```lua
(method) core.node:add_view(view: core.view, idx?: integer)
```

Add a view to this leaf node as a new tab.
Automatically removes EmptyView if present.
Sets the new view as active.

@*param* `view` — View to add

@*param* `idx` — Optional position to insert (default: end)

---

## close_active_view

```lua
(method) core.node:close_active_view(root: core.node)
```

Close the currently active view in this node.

@*param* `root` — The root node of the tree

---

## close_all_docviews

```lua
(method) core.node:close_all_docviews(keep_active: boolean)
```

Close all document views (views with context="session").
Used when closing a project. May collapse empty nodes.

@*param* `keep_active` — If true, keep the active view open

---

## close_view

```lua
(method) core.node:close_view(root: core.node, view: core.view)
```

Close a view with confirmation.
Calls view:try_close() which may show save dialogs before removing.

@*param* `root` — The root node of the tree

@*param* `view` — View to close

---

## consume

```lua
(method) core.node:consume(node: core.node)
```

Replace this node's contents with another node's contents.
Transfers all properties from source node to this node.
Used during split/merge operations to restructure the tree.

@*param* `node` — Source node to consume

---

## draw

```lua
(method) core.node:draw()
```

Draw this node and its children.
For leaf nodes: draws tabs (if shown) and active view.
For split nodes: draws divider and recursively draws children.

---

## draw_tab

```lua
(method) core.node:draw_tab(view: core.view, is_active: boolean, is_hovered: boolean, is_close_hovered: boolean, x: number, y: number, w: number, h: number, standalone: boolean)
```

Draw a complete tab (borders, title, close button).

@*param* `view` — View for this tab

@*param* `is_active` — Whether this is the active tab

@*param* `is_hovered` — Whether mouse is over this tab

@*param* `is_close_hovered` — Whether mouse is over close button

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `w` — Width

@*param* `h` — Height

@*param* `standalone` — If true, draw standalone tab (during drag)

---

## draw_tab_borders

```lua
(method) core.node:draw_tab_borders(view: core.view, is_active: boolean, is_hovered: boolean, x: number, y: number, w: number, h: number, standalone: boolean)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
```

Draw tab borders and background.

@*param* `view` — View for this tab

@*param* `is_active` — Whether this is the active tab

@*param* `is_hovered` — Whether mouse is over this tab

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `w` — Width

@*param* `h` — Height

@*param* `standalone` — If true, draw standalone tab (during drag)

@*return* `x` — Adjusted x for content area

@*return* `y` — Adjusted y for content area

@*return* `w` — Adjusted width for content area

@*return* `h` — Adjusted height for content area

---

## draw_tab_title

```lua
(method) core.node:draw_tab_title(view: core.view, font: renderer.font, is_active: boolean, is_hovered: boolean, x: number, y: number, w: number, h: number)
```

Draw a tab's title text with ellipsis if needed.

@*param* `view` — View whose name to display

@*param* `font` — Font to use

@*param* `is_active` — Whether this is the active tab

@*param* `is_hovered` — Whether mouse is over this tab

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `w` — Width

@*param* `h` — Height

---

## draw_tabs

```lua
(method) core.node:draw_tabs()
```

Draw the entire tab bar including all visible tabs and scroll buttons.

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

## get_child_overlapping_point

```lua
(method) core.node:get_child_overlapping_point(x: number, y: number)
  -> node: core.node
```

Find the deepest leaf node at a screen point.
Recursively traverses split nodes to find the leaf under the point.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `node` — The leaf node at this point

---

## get_children

```lua
(method) core.node:get_children(t?: table)
  -> views: table
```

Collect all views from this node and its children.
Recursively gathers views from the entire subtree.

@*param* `t` — Optional table to append results to

@*return* `views` — List of all views in this subtree

---

## get_divider_overlapping_point

```lua
(method) core.node:get_divider_overlapping_point(px: number, py: number)
  -> node: (core.node)?
```

Check if a point overlaps any resizable divider in the tree.
Recursively searches for dividers that can be dragged.

@*param* `px` — Screen x coordinate

@*param* `py` — Screen y coordinate

@*return* `node` — The node whose divider is under the point, or nil

---

## get_divider_rect

```lua
(method) core.node:get_divider_rect()
  -> x: number?
  2. y: number?
  3. w: number?
  4. h: number?
```

Get the rectangle for this node's divider (for split nodes).

@*return* `x` — Screen x coordinate, or nil for leaf nodes

@*return* `y` — Screen y coordinate, or nil for leaf nodes

@*return* `w` — Width, or nil for leaf nodes

@*return* `h` — Height, or nil for leaf nodes

---

## get_drag_overlay_tab_position

```lua
(method) core.node:get_drag_overlay_tab_position(x: number, y: number, dragged_node: core.node, dragged_index: integer)
  -> tab_index: integer
  2. tab_x: number
  3. tab_y: number
  4. tab_w: number
  5. tab_h: number
```

Calculate where a dragged tab would be inserted.
Returns the tab index and overlay position for visual feedback.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*param* `dragged_node` — Node being dragged from

@*param* `dragged_index` — Index of tab being dragged

@*return* `tab_index` — Index where tab would be inserted

@*return* `tab_x` — Overlay x position

@*return* `tab_y` — Overlay y position

@*return* `tab_w` — Overlay width

@*return* `tab_h` — Overlay height

---

## get_locked_size

```lua
(method) core.node:get_locked_size()
  -> sx: number?
  2. sy: number?
```

Get the locked size of this node.
Returns fixed sizes for locked nodes, nil for proportionally-sized nodes.
For split nodes, combines child locked sizes.

@*return* `sx` — Locked width, or nil if not locked on x-axis

@*return* `sy` — Locked height, or nil if not locked on y-axis

---

## get_node_for_view

```lua
(method) core.node:get_node_for_view(view: core.view)
  -> node: (core.node)?
```

Find the node containing a specific view.
Recursively searches this node and its children.

@*param* `view` — View to search for

@*return* `node` — The node containing the view, or nil if not found

---

## get_parent_node

```lua
(method) core.node:get_parent_node(root: core.node)
  -> parent: (core.node)?
```

Find the parent node of this node in the tree.

@*param* `root` — Root node to search from

@*return* `parent` — The parent node, or nil if this is root or not found

---

## get_scroll_button_index

```lua
(method) core.node:get_scroll_button_index(px: number, py: number)
  -> idx: integer?
```

Get which scroll button (left/right) is under a point.

@*param* `px` — Screen x coordinate

@*param* `py` — Screen y coordinate

@*return* `idx` — Button index (1=left, 2=right), or nil

---

## get_scroll_button_rect

```lua
(method) core.node:get_scroll_button_rect(index: integer)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
  5. pad: number
```

Get the rectangle for a scroll button.

@*param* `index` — Button index (1=left, 2=right)

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

@*return* `w` — Width

@*return* `h` — Height

@*return* `pad` — Padding amount

---

## get_split_type

```lua
(method) core.node:get_split_type(mouse_x: number, mouse_y: number)
  -> split_type: string
```

Determine where a point falls for drag-to-split operations.
Divides the node into regions: tab, left, right, up, down, middle.

@*param* `mouse_x` — Screen x coordinate

@*param* `mouse_y` — Screen y coordinate

@*return* `split_type` — One of: "tab", "left", "right", "up", "down", "middle"

---

## get_tab_overlapping_point

```lua
(method) core.node:get_tab_overlapping_point(px: number, py: number)
  -> idx: integer?
```

Get the index of the tab under a screen point.

@*param* `px` — Screen x coordinate

@*param* `py` — Screen y coordinate

@*return* `idx` — Tab index, or nil if not over any tab

---

## get_tab_rect

```lua
(method) core.node:get_tab_rect(idx: integer)
  -> x: number
  2. y: number
  3. w: number
  4. h: number
  5. margin_y: number
```

Get the rectangle for a tab.

@*param* `idx` — Tab index

@*return* `x` — Screen x coordinate

@*return* `y` — Screen y coordinate

@*return* `w` — Width

@*return* `h` — Height

@*return* `margin_y` — Top margin

---

## get_view_idx

```lua
(method) core.node:get_view_idx(view: core.view)
  -> idx: integer?
```

Get the index of a view in this node's view list.

@*param* `view` — View to find

@*return* `idx` — Index of the view, or nil if not found

---

## get_visible_tabs_number

```lua
(method) core.node:get_visible_tabs_number()
  -> count: integer
```

Get the number of tabs currently visible (not scrolled out of view).

@*return* `count` — Number of visible tabs

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

## is_empty

```lua
(method) core.node:is_empty()
  -> empty: boolean
```

Check if this node is empty (no views or only EmptyView).

@*return* `empty` — True if node contains no real content

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

## is_in_tab_area

```lua
(method) core.node:is_in_tab_area(x: number, y: number)
  -> in_tabs: boolean
```

Check if a point is in the tab bar area.

@*param* `x` — Screen x coordinate

@*param* `y` — Screen y coordinate

@*return* `in_tabs` — True if point is over the tab bar

---

## is_locked_resizable

```lua
(method) core.node:is_locked_resizable(axis: string)
  -> resizable: boolean
```

Check if this is a locked node that can be resized by the user.

@*param* `axis` — Axis to check: "x" or "y"

@*return* `resizable` — True if locked and resizable on this axis

---

## is_resizable

```lua
(method) core.node:is_resizable(axis: string)
  -> resizable: boolean
```

Check if this node can be resized along an axis.
Returns true for proportional nodes or locked resizable nodes.

@*param* `axis` — Axis to check: "x" or "y"

@*return* `resizable` — True if node accepts resize on this axis

---

## move_towards

```lua
function
```

---

## new

```lua
(method) core.node:new(type?: string)
```

Constructor - creates a new node.

@*param* `type` — Node type: "leaf" (contains views), "hsplit", or "vsplit"

---

## on_mouse_left

```lua
(method) core.node:on_mouse_left()
```

---

## on_mouse_moved

```lua
(method) core.node:on_mouse_moved(x: any, y: any, ...any)
```

---

## on_mouse_released

```lua
(method) core.node:on_mouse_released(...any)
```

---

## on_touch_moved

```lua
(method) core.node:on_touch_moved(...any)
```

---

## propagate

```lua
(method) core.node:propagate(fn: string, ...any)
```

Call a method on both child nodes (for split nodes only).

@*param* `fn` — Method name to call on children

@*param* `...` — Arguments to pass to the method

---

## remove_view

```lua
(method) core.node:remove_view(root: core.node, view: core.view)
```

Remove a view from this node.
If this is the last view, may collapse the node or replace with EmptyView.
Handles primary node logic and tree restructuring.

@*param* `root` — The root node of the tree

@*param* `view` — View to remove

---

## resize

```lua
(method) core.node:resize(axis: string, value: number)
```

Resize this node to a target size.
For locked nodes, calls view:set_target_size().
For proportional nodes, adjusts divider position.

@*param* `axis` — Axis to resize: "x" or "y"

@*param* `value` — Target size in pixels

---

## scroll_tabs

```lua
(method) core.node:scroll_tabs(dir: integer)
```

Scroll the tab bar left or right.
Used when clicking scroll buttons.

@*param* `dir` — Direction: 1=left, 2=right

---

## scroll_tabs_to_visible

```lua
(method) core.node:scroll_tabs_to_visible()
```

Ensure the active view's tab is visible (not scrolled out of view).
Adjusts tab_offset if needed to bring active tab into view.

---

## set_active_view

```lua
(method) core.node:set_active_view(view: core.view)
```

Set the active view in this leaf node.
Updates global active view and notifies the previously active view.

@*param* `view` — View to make active

---

## should_show_tabs

```lua
(method) core.node:should_show_tabs()
  -> show: boolean
```

Determine if tabs should be shown for this node.
Based on config settings, number of views, and drag state.

@*return* `show` — True if tabs should be displayed

---

## split

```lua
(method) core.node:split(dir: string, view?: core.view, locked?: table, resizable?: boolean)
  -> new_node: core.node
```

Split this leaf node in a direction, creating two child nodes.
Converts this node from "leaf" to "hsplit" or "vsplit" containing two children.
The original content stays in one child, new view (if provided) goes in the other.

@*param* `dir` — Direction to split: "up", "down", "left", or "right"

@*param* `view` — Optional view to add to the new split

@*param* `locked` — Optional \{x=boolean, y=boolean\} to lock the new node's size

@*param* `resizable` — If true, locked node can be resized by user (needs set_target_size)

@*return* `new_node` — The newly created child node

---

## tab_hovered_update

```lua
(method) core.node:tab_hovered_update(px: number, py: number)
```

Update hover state for tabs, close buttons, and scroll buttons.
Sets hovered_tab, hovered_close, and hovered_scroll_button fields.

@*param* `px` — Screen x coordinate

@*param* `py` — Screen y coordinate

---

## target_tab_width

```lua
(method) core.node:target_tab_width()
  -> width: number
```

Calculate the target width for tabs.
Adjusts based on number of visible tabs and available space.

@*return* `width` — Target tab width in pixels

---

## update

```lua
(method) core.node:update()
```

Update this node and its children.
For leaf nodes: updates active view, tab hover state, and tab animations.
For split nodes: recursively updates both children.

---

## update_layout

```lua
(method) core.node:update_layout()
```

Update position and size of this node and its children.
Recursively calculates layout for the entire subtree.
Accounts for tabs, locked sizes, and divider positions.

---

