---
sidebar_position: 3
description: Configure server presets, custom commands, workspace settings, and TCP connections.
---

# Language Servers

Server definitions describe which files a server handles, how to launch or
connect to it, and which settings to send. They are separate from
[plugin preferences](configuration.md).

## Presets

Require `plugins.lsp.config` in your user module and call a preset's `setup()`.
Options passed to setup override the preset.

| Preset | Default executable |
| ------ | ------------------ |
| `sumneko_lua` | `lua-language-server` |
| `clangd` | `clangd --background-index` |
| `gopls` | `gopls` |
| `pyright` | `pyright-langserver --stdio` |
| `basedpyright` | `basedpyright-langserver --stdio` |
| `rust_analyzer` | `rust-analyzer` |
| `tsserver` | `typescript-language-server --stdio` |

This is a selection of the presets in the plugin's `config.lua`, not a list of
installed programs. Preset availability does not guarantee that a server has
been tested on your platform.

```lua
local lspconfig = require "plugins.lsp.config"
lspconfig.sumneko_lua.setup {
  command = { "/usr/bin/lua-language-server" },
  settings = {
    Lua = {
      diagnostics = { enable = true }
    }
  }
}
```

`get_options()` returns a preset's defaults. `on_setup(options)` can adjust
merged options before registration. Registration is keyed by server name.
Change definitions at startup and restart the server to use a new command or
initialization options.

## Custom Servers

Use `lsp.add_server()` when there is no suitable preset:

```lua
local lsp = require "plugins.lsp"
lsp.add_server {
  name = "my-language-server",
  language = "mylanguage",
  file_patterns = { "%.my$" },
  command = { "/path/to/my-language-server", "--stdio" },
  settings = {},
  init_options = {},
  verbose = false
}
```

`file_patterns` are Lua patterns, not shell globs. Escape a literal period
with `%.` and use `$` to match the end of a filename.
Arguments are separate array elements; an executable path containing spaces
still belongs in one element.

| Option | Purpose |
| ------ | ------- |
| `name` | Registration name, required and unique for each definition. |
| `language` | Protocol language ID, or ordered `{ id, pattern }` records for multiple languages. |
| `file_patterns` | Required array of filename patterns that activate this definition. |
| `command` | Executable and arguments; required for the default stdio transport. |
| `settings` | Server configuration, merged with user/workspace LSP settings. |
| `init_options` | Server-specific initialization options. |
| `env` | Environment variables for the launched process. |
| `quit_timeout` | Idle shutdown timeout in seconds for this server. |
| `windows_skip_cmd` | Skip the Windows shell wrapper when appropriate for your command. |
| `custom_capabilities` | Merge additional client capabilities; use only for features the client can handle. |
| `on_start(server)` | Callback when the server starts. |
| `requests_per_second` | Request processing limit; default 16. |
| `incremental_changes` | Force incremental synchronization for a server that supports it but does not advertise it. |
| `verbose` | Enable per-server protocol logging. |

An empty language-match table or a match table with no matching pattern falls
back to the file extension for the protocol language ID.

## Workspace Settings

The plugin reads `.pragtical_lsp.lua` or `.pragtical_lsp.json` from the user
directory and server workspace. It merges settings in this order:

1. User-directory LSP settings.
2. The server definition's `settings`.
3. Workspace LSP settings.

Later values override earlier values. In each directory the Lua file takes
precedence over JSON. A Lua file must return a table; JSON contains the same
server-specific settings object. For example, `.pragtical_lsp.json` for Lua:

```json
{
  "Lua": {
    "diagnostics": {
      "globals": ["SCALE"]
    }
  }
}
```

These are language-server settings, not `config.plugins.lsp` preferences.
The Lua variant is executed by the plugin. Use JSON when you only need data.
Settings lookups are cached for five seconds; restart the server after changing
configuration if it has not picked up the new values.

## TCP Connections

Stdio is the default. TCP requires Pragtical's networking API, a host, and a
port. To connect a preset to an already-running TCP server:

```lua
local lspconfig = require "plugins.lsp.config"
lspconfig.clangd.setup {
  transport = "tcp",
  host = "127.0.0.1",
  port = 7658,
  command = false
}
```

`command = false` clears the preset's stdio command. The endpoint must already
speak LSP over TCP; ordinary clangd uses stdio, so this example needs a suitable
bridge. The plugin does not create that bridge implicitly.

You can also supply a `command` that starts a TCP server or helper. In that
case the transport owns both the socket and launched process and stops them
together. With no command it only owns the connection, not the external server.

## Multiple Projects and Servers

The plugin can register multiple definitions and match more than one server
to a file, but feature requests do not combine every server's results.
Several commands stop at the first applicable server. Running-server entries
are keyed by name, and live workspace-folder updates are not implemented.
Restart servers when changing project roots rather than assuming independent
per-project instances of the same definition.
