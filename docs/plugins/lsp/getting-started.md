---
sidebar_position: 2
description: Install LSP, enable a language server, and verify that it is serving your files.
---

# Getting Started

LSP needs both the editor plugin and a language server executable.
Installing the client alone does not install or enable every language server.

## Install the Plugin

Open Pragtical's Plugin Manager, search for **Language Server Protocol**, and
install **LSP**. Alternatively:

```sh
pragtical pm plugin install lsp
```

The plugin manifest includes Lint+, Snippets, and LSP Snippets dependencies.
For manual installations, put the repository in `USERDIR/plugins/lsp/` with
`init.lua` directly inside that folder. Install the optional integrations
separately if you want inline diagnostics and snippet expansion.

See [Managing Plugins](../../user-guide/plugins.md) for plugin locations and
installation methods. The [LSP plugin browser entry](/plugins?plugin=lsp)
links to its source repository. Restart after installing plugins.

## Install and Enable a Server

Server packages such as `lsp_lua` and `lsp_c` can install and register their
associated server. Search for the language in Plugin Manager. Follow the
package's requirements; do not also register the same server manually.

If the executable is already installed, enable a preset from your
[user module](../../user-guide/configuration.md#user-module). For Lua:

```lua
local lspconfig = require "plugins.lsp.config"
lspconfig.sumneko_lua.setup()
```

The preset name remains `sumneko_lua`; the executable is
`lua-language-server`. For C/C++:

```lua
local lspconfig = require "plugins.lsp.config"
lspconfig.clangd.setup()
```

These calls register servers; they do not download executables. The editor
must be able to find the command in its `PATH`, or you must supply an absolute
path through the preset's `command` option.

## Open a Project

Open the project's root directory, then a saved source file matching the
server's file patterns. Servers start on demand by default.
Inspect the editor log for the server's startup and initialization messages.
Initialization and workspace indexing can take time.

Keep project-specific configuration where the server expects it. For example,
clangd uses compiler flags, commonly supplied through `compile_commands.json`.
An open C++ file alone does not tell the server how the project is built.

## Verify the Connection

1. Place the caret in a source file and press <kbd>ctrl+space</kbd>.
2. Move onto a known function and press <kbd>alt+a</kbd>.
3. Open document symbols with <kbd>alt+s</kbd>.
4. Try Go to Definition with <kbd>alt+d</kbd>.

An unsupported feature can produce no result even when initialization worked.
Use [Language Servers](language-servers.md) for custom startup settings, or
[Troubleshooting](configuration.md#troubleshooting) if no features respond.

Server controls are available under **Tools > Language Server > Servers** or
as `lsp:start-servers`, `lsp:stop-servers`, and `lsp:restart-servers`.
