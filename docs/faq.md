---
sidebar_position: 7
description: A list of frequently-asked questions.
---

# FAQ

#### Can I get smart autocompletion (intellisense/LSP)?

Check out the [lsp] plugin.

#### Where is the integrated terminal?

We recommend [Ghostty Terminal][ghostty] over the older [terminal] plugin for
better compatibility with terminal applications. It uses libghostty-vt and
provides terminal tabs and a bottom drawer. Install `ghostty` from **Tools >
Plugin Manager**, then restart Pragtical.

Ghostty requires Pragtical built with LuaJIT and SDL3. See the
[IDE setup guide](/docs/user-guide/ide-setup#integrated-terminal) for installation
and usage.

#### Tabs and indent size?

In your user config (the cog icon in the file tree):

```lua
config.tab_type = "soft" -- soft for spaces, hard for real tabs (\t)
config.indent_size = 4   -- 4 spaces
```

#### How to enable line wrapping?

You can enable line wrapping by pressing F10, alternatively hard wrapping is
supported via [autowrap] plugin.

#### How to bind commands to keys?

```lua
local keymap = require "core.keymap"
keymap.add { ["ctrl+escape"] = "core:quit" }
```

#### How to unbind commands for certain keys?

```lua
-- the second parameter lets you override commands for certain keys
-- in this case it maps it to nothing
keymap.add({ ["ctrl+escape"] = {} }, true)
```

#### How to get commands for those keybinds?

You can search for commands in the command palette.

For each command, replace the spaces on the right side with dashes.

For example: `Core: Find Command` → `core:find-command`

#### What version of Lua does Pragtical use?

LuaJIT using compat-5.3 for compatbility on the C api and user space
up to Lua 5.3 with the exception of missing bit operators. The editor
should also compile with latest versions of Lua 5.4

#### Vim mode?

You need the [vibe] plugin.


[lsp]:                  https://github.com/pragtical/lsp
[ghostty]:              https://github.com/pragtical/ghostty
[terminal]:             https://github.com/pragtical/terminal
[autowrap]:             https://github.com/pragtical/plugins/blob/master/plugins/autowrap.lua?raw=1
[vibe]:                 https://github.com/pragtical/vibe
