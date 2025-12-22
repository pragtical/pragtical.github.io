---
sidebar_position: 2
description: An introduction about Pragtical's concepts
              and how they tie in to plugin development.
---

# Core UI Architecture

## Overview

Pragtical's UI is built on four core components that work together:

1. **Object** - OOP foundation
2. **View** - UI component base class
3. **Node** - Layout and container management
4. **RootView** - Top-level coordinator

## Object System

**File:** `data/core/object.lua`

Provides class-based inheritance for Lua.

### Usage

```lua
local Object = require "core.object"
local MyClass = Object:extend()

function MyClass:new(param) 
  -- IMPORTANT: Call super constructor first, use . instead of : and pass
  -- self explicitly, forgetting this call is a common mistake
  -- that can lead to uninitialized state and unexpected behavior
  MyClass.super.new(self)
  self.value = param
end

function MyClass:method()
  return self.value
end
```

### Key Methods

- `Object:extend()` - Create a subclass
- `Object:new(...)` - Constructor (override this)
- `Object:is(Type)` - Check exact type
- `Object:extends(Type)` - Check inheritance

## View System

**File:** `data/core/view.lua`

Base class for all UI components. Handles position, size, scrolling, events, and drawing.

### Key Properties

```lua
{
  position = { x, y },
  size = { x, y },
  scroll = { x, y, to = { x, y } },
  scrollable = boolean,
  cursor = "arrow" | "ibeam" | "sizeh" | "sizev" | "hand",
  context = "application" | "session"
}
```

### Lifecycle Methods

- `View:new()` - Constructor
- `View:update()` - Called every frame
- `View:draw()` - Render the view
- `View:try_close(do_close)` - Handle close request

### Event Handlers

- `View:on_mouse_pressed(button, x, y, clicks)`
- `View:on_mouse_released(button, x, y)`
- `View:on_mouse_moved(x, y, dx, dy)`
- `View:on_mouse_wheel(y, x)`
- `View:on_text_input(text)`
- `View:on_file_dropped(filename, x, y)`

### Animation

```lua
-- Smoothly animate values
self:move_towards(self.scroll, "y", target_y, 0.3)
```

### Creating a Custom View

```lua
local View = require "core.view"
local MyView = View:extend()

function MyView:new()
  MyView.super.new(self)
  self.scrollable = true
end

function MyView:draw()
  self:draw_background(style.background)
  -- Custom drawing here
  self:draw_scrollbar()
end

function MyView:on_mouse_pressed(button, x, y, clicks)
  -- Handle input
  return true  -- Consume event
end
```

## Node System

**File:** `data/core/node.lua`

Manages layout using a tree structure. Nodes can contain views (tabs) or split into child nodes.

### Node Types

- `"leaf"` - Contains views as tabs
- `"hsplit"` - Horizontal split (left/right)
- `"vsplit"` - Vertical split (top/bottom)

### Key Properties

```lua
{
  type = "leaf" | "hsplit" | "vsplit",
  views = {},           -- Array of views (leaf nodes)
  active_view = View,   -- Currently active tab
  divider = 0.5,        -- Split ratio (0-1)
  a, b = Node, Node,    -- Child nodes (splits)
  locked = {x, y},      -- Fixed dimensions
  resizable = boolean
}
```

### Key Methods

- `Node:split(direction, view)` - Split node and add view
  - Direction: `"left"`, `"right"`, `"up"`, `"down"`
- `Node:add_view(view, idx)` - Add view as tab
- `Node:remove_view(root, view)` - Remove view
- `Node:set_active_view(view)` - Switch active tab
- `Node:get_node_for_view(view)` - Find containing node

### Usage

```lua
-- Get active node
local node = core.root_view:get_active_node()

-- Add view as tab
node:add_view(MyView())

-- Split and add view
node:split("right", MyView())
```

## RootView

**File:** `data/core/rootview.lua`

Top-level view that manages the entire UI. Routes events and handles global operations.

### Key Methods

- `RootView:get_active_node()` - Node with focus
- `RootView:get_primary_node()` - Main document area
- `RootView:open_doc(doc)` - Open document
- `RootView:grab_mouse(button, view)` - Capture mouse input
- `RootView:ungrab_mouse(button)` - Release capture

### Event Flow

```
OS Event
  → RootView (routes to node/view under mouse)
    → Node (delegates to active view)
      → View (handles or returns false)
```

## DocView

**File:** `data/core/docview.lua`

The text editor view. Most complex view implementation.

### Features

- Syntax highlighting
- Multiple cursors
- Line numbers gutter
- Horizontal and vertical scrolling
- IME support

### Key Methods

- `DocView:get_line_screen_position(line, col)` - Doc to screen coords
- `DocView:resolve_screen_position(x, y)` - Screen to doc coords
- `DocView:scroll_to_line(line)` - Scroll to line
- `DocView:scroll_to_make_visible(line, col)` - Ensure visible

## Common View Implementations

- `EmptyView` (`data/core/emptyview.lua`) - Welcome screen
- `StatusView` (`data/core/statusview.lua`) - Status bar
- `CommandView` (`data/core/commandview.lua`) - Command palette
- `LogView` (`data/core/logview.lua`) - Log viewer
- `NagView` (`data/core/nagview.lua`) - Dialogs/modals
- `TitleView` (`data/core/titleview.lua`) - Title bar
- `TreeView` (`data/plugins/treeview.lua`) - File tree sidebar

## Architecture Diagram

```
Object (OOP base)
  │
  └─ View (UI component)
      ├─ RootView (coordinator)
      ├─ DocView (text editor)
      ├─ StatusView
      ├─ EmptyView
      └─ ...

Node Tree (layout):
  RootView.root_node
    ├─ Node (hsplit)
    │   ├─ Node (leaf) → [View1, View2]  # Tabs
    │   └─ Node (vsplit)
    │       ├─ Node (leaf) → [View3]
    │       └─ Node (leaf) → [View4]
```

## Update/Draw Cycle

Every frame (typically 60 FPS):

```
1. Update Phase:
   RootView:update()
     └─ Node:update() (recursive)
         └─ View:update()

2. Draw Phase:
   RootView:draw()
     └─ Node:draw() (recursive)
         └─ View:draw()
```

## Context System

Views have a `context` property:

- `"application"` - Persists across sessions (toolbar, status bar)
- `"session"` - Tied to project (document views, tree view)

When closing a project, only `"session"` context views are closed.

## Mouse Grab Pattern

For drag operations, views can capture mouse input:

```lua
function MyView:on_mouse_pressed(button, x, y, clicks)
  core.root_view:grab_mouse("left", self)
  return true
end

function MyView:on_mouse_released(button, x, y)
  core.root_view:ungrab_mouse("left")
  return true
end

-- While grabbed, all mouse events go to this view
```

## Best Practices

1. **Always call super methods** when overriding
   ```lua
   function MyView:update()
     MyView.super.update(self)
     -- Your update logic
   end
   ```

2. **Use move_towards for animations** instead of direct assignment
   ```lua
   self:move_towards(self.scroll, "y", target, 0.3)
   ```

3. **Return true from event handlers** to consume events
   ```lua
   function MyView:on_mouse_pressed(...)
     -- Handle event
     return true  -- Prevent event propagation
   end
   ```

4. **Draw background and scrollbar** in custom views
   ```lua
   function MyView:draw()
     self:draw_background(style.background)
     -- Content
     self:draw_scrollbar()
   end
   ```

5. **Set scrollable property** if view needs scrolling
   ```lua
   function MyView:new()
     MyView.super.new(self)
     self.scrollable = true
   end
   ```
