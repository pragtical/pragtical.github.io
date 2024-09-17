---
sidebar_position: 7
description: Configuring Language Servers for Intellisense in Pragtical.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Language Server Support

Many text editors come equipped with "Intellisense" features such as error
reporting, smart autocompletion, formatting, and linting—thanks to a language
server client. The [Language Server Protocol] (LSP), developed by Microsoft,
enables the creation of tools that operate independently from editors,
in contrast to traditional IDEs where tools are tightly integrated.

While Pragtical does not include a built-in language server client, you can
access this functionality through the [LSP] plugin. In this article, we will
guide you through the process of setting up language servers for use with
the plugin.

## Installation

The LSP plugin can be installed like any other plugin.

The LSP plugin optionally depends on [lint+] for inline diagnostics and
[lsp_snippets] for autocompletion snippets support. When installing the plugin
manually, you may also install these plugins as well.

<Tabs groupId="package-manager">
  <TabItem value="ppm" label="ppm" default>

To install PPM via the command line, run:
```sh
$ ppm plugin install lsp
# or
$ pragtical pm plugin install lsp
```

  </TabItem>
  <TabItem value="miq" label="Miq">

To install LSP via Miq, add `pragtical/lsp` into your `config.plugins.miq.plugins`:

```lua
local config = require "core.config"
config.plugins.miq.plugins = {
-- this allows Miq to manage itself
'TorchedSammy/Miq',

-- install lsp
'pragtical/lsp',
}
```

Afterwards, run the command `miq:install` to begin installation.

  </TabItem>
  <TabItem value="manual" label="Manual Installation">

To install the LSP plugin manually, run these commands:

```sh
$ cd ~/.config/pragtical/
$ git clone https://github.com/pragtical/lsp plugins/lsp
$ git clone https://github.com/liquidev/lintplus plugins/lintplus
$ wget https://raw.githubusercontent.com/vqns/lite-xl-snippets/main/snippets.lua \
    -O plugins/snippets.lua
$ wget https://raw.githubusercontent.com/vqns/lite-xl-snippets/main/lsp_snippets.lua \
    -O plugins/lsp_snippets.lua
```

They install the plugin with all its dependencies.

  </TabItem>
</Tabs>

## Installing Language Servers

The LSP plugin requires language servers to be installed on the system to function.
Some editors such as [Visual Studio Code] and [Neovim] tends to have this process
abstracted by plugins. Luckily, some commonly-used language servers are provided
as plugins as well, prefixed with `lsp_`.

| Plugin            | Language(s)         | Server          | Platforms
| ------            | -----------         | ------          | ---------
| [lsp_c]           | C, C++, Objective-C | [clangd]        | Linux, macOS, Windows
| [lsp_lua]         | Lua                 | [LuaLS]         | Linux, macOS, Windows
| [lsp_python]      | Python              | [Pyright]       | Linux, macOS, Windows
| [lsp_quicklintjs] | JavaScript          | [quick-lint-js] | Linux, macOS, Windows
| [lsp_rust]        | Rust                | [rust-analyzer] | Linux, macOS, Windows
| [lsp_tex]         | TeX                 | [texlab]        | Linux, macOS, Windows
| [lsp_zig]         | Zig                 | [zls]           | Linux, macOS, Windows

### Manual Installation

The LSP plugin expects language servers to be accessible in `PATH`. If you have
installed the language server from package managers such as `npm` and `pip`,
please ensure that **their local installation directory is in `PATH`**.

:::info
Extra attention is required for users of Node.js version managers like [nvm],
as the npm prefix can change when switching between Node.js versions. Always
ensure you **launch Pragtical after sourcing nvm**. This applies to all of
Pragtical's desktop entries as well.
:::

## Set Up

:::note
If you installed the language servers via plugins, then you should skip this step.
:::

The LSP plugin offers default configurations for most language servers
(inspired by [nvim-lspconfig]). You can access these configurations by requiring
`plugins.lsp.config` in your user module. For instance, to configure the
[typescript-language-server], you can do the following:


```lua
local lspconfig = require "plugins.lsp.config"

-- set up typescript-language-server with default configuration (enough for most people)
lspconfig.tsserver.setup()

-- override the default configuration
lspconfig.tsserver.setup {
    verbose = false
}
```

## Features

Once you have configured your language server, you should see a log message
formatted as `[LSP] starting (language server name)`, followed by
`[(language server name)] Initialized` when you open a file supported by that
language server. These messages confirm that the language server is correctly
set up and actively running for the document.

### Enhanced Autocomplete

One of the most prominent features of a language server is to provide
autocomplete suggestions. The LSP plugin integrates with the [autocomplete]
plugin to provide this functionality.

![lsp-autocomplete]

### Symbols Tree

A handy feature of the LSP plugin is the symbols tree, which allows for quick
navigation within a file while reducing the cognitive load needed to comprehend
the structure of the source code.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/symbols-tree.mp4"/>
</video>

### Snippets

When installed with [lsp_snippets], the LSP plugin is able to provide snippets
from language servers. The snippets are also integrated with the [autocomplete]
plugin.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/snippets.mp4"/>
</video>

### Inline Diagnostics

When installed with [lint+], the LSP plugin will show diagnostics on the
affected lines. You can disable this with `lsp:toggle-diagnostics`
(<kbd>shift+alt+e</kbd>).

![lsp-inline-diagnostics]

### Symbol Search

To view all symbols in a file, you can use `lsp:view-document-symbols`
(<kbd>alt+s</kbd>). You can use `lsp:find-workspace-symbol`
(<kbd>shift+alt+s</kbd>) to find a symbol in the current workspace.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/view-symbol.mp4"/>
</video>

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/search-symbol.mp4"/>
</video>

### Tooltips

You can hover on symbols to check their types and descriptions.

![lsp-hover]

Tooltips will also appear when entering function arguments.

![lsp-args]

### Symbol Renaming

Select the symbol to refactor, press <kbd>alt+r</kbd> to enter new name,
confirm changes and apply.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/rename.mp4"/>
</video>

### Go to Definition

Press <kbd>alt+d</kbd> to jump to definition.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/goto-definitions.mp4"/>
</video>

### Find References

Press <kbd>alt+f</kbd> to find references to a symbol.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/find-references.mp4"/>
</video>

### Document Formatting

Press <kbd>alt+shift+f</kbd> to format the current document.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/format.mp4"/>
</video>

### Diagnostics

Press <kbd>alt+e</kbd> to view diagnostics messages for the current document.
Press <kbd>ctrl+alt+e</kbd> to view diagnostics messages for the workspace.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/view-doc-diagnostics.mp4"/>
</video>

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/lsp/view-all-diagnostics.mp4"/>
</video>

## Troubleshooting

We are constantly updating the LSP plugin to fix bugs, add features and improve
performance. If you encounter any issues, you should
**always update to the latest version** before trying other steps.

### Enable Debug Logging

If you encounter an error message such as
`[LSP] (language server name) was shutdown, revise your configuration`,
you should try to enable debug logging to see what is happening when the
language server is run.

This is very useful on Windows as the plugin runs the language server with
`cmd.exe` (to work around wrappers like those provided by npm) and this can
cause errors to never propagate back to the plugin.

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

In your user module, add:

```lua
config.plugins.lsp.log_server_stderr = true
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Navigate to the "Plugins" tab. Under the "Language Server Protocol" section,
enable "Log Standard Error".

![lsp-debug-logging]

  </TabItem>
</Tabs>

### Language Servers not starting

There are many reasons why a language server will not launch, the most common
being the plugin cannot find the language server in `PATH`.

On Windows, this often manifests as
`(language server name) is not recognized as an internal or external command, operable program or batch file.`.
The LSP plugin uses `cmd.exe` on Windows to launch the language server in order
to work around different file extensions such as `.cmd`, `.bat` and `.exe`.

To solve this issue, make sure that the language server is on `PATH`.
For non-native language servers (e.g. typescript-language-server), make sure
their installation path with respect to the package managers are on `PATH` as
well. For npm, this is usually `AppData\Roaming\npm` on Windows.

### jdt.ls launches Microsoft Store

If you've installed [jdt.ls] from their website, you might run into issues where
Microsoft Store is launched instead of running the language server properly.

jdt.ls seems to expect users to have Python installed, and Windows has app
execution aliases built in to redirect `python.exe` and `python3.exe` to
Microsoft Store.

![win-execution-alias]

To fix this, install [Python]. Alternatively, you can follow the
[instructions from jdt.ls][jdtls-cmdline] to run the language server without
Python at all.


[Language Server Protocol]:   https://microsoft.github.io/language-server-protocol/
[LSP]:                        https://github.com/pragtical/lsp
[lint+]:                      https://github.com/liquid600pgm/lintplus
[lsp_snippets]:               https://github.com/vqns/lite-xl-snippets
[Visual Studio Code]:         https://code.visualstudio.com/
[Neovim]:                     https://neovim.io/
[lsp_c]:                      https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_c.lua?raw=1
[clangd]:                     https://clangd.llvm.org/
[lsp_lua]:                    https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_lua.lua?raw=1
[LuaLS]:                      https://luals.github.io/
[lsp_python]:                 https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_python.lua?raw=1
[Pyright]:                    https://github.com/Microsoft/pyright
[lsp_quicklintjs]:            https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_quicklintjs.lua?raw=1
[quick-lint-js]:              https://quick-lint-js.com/
[lsp_rust]:                   https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_rust.lua?raw=1
[rust-analyzer]:              https://github.com/rust-lang/rust-analyzer
[lsp_tex]:                    https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_tex.lua?raw=1
[texlab]:                     https://github.com/latex-lsp/texlab
[lsp_zig]:                    https://github.com/adamharrison/lite-xl-lsp-servers/blob/master/plugins/lsp_zig.lua?raw=1
[zls]:                        https://install.zigtools.org/
[nvm]:                        https://github.com/nvm-sh/nvm
[nvim-lspconfig]:             https://github.com/neovim/nvim-lspconfig
[typescript-language-server]: https://github.com/typescript-language-server/typescript-language-server
[autocomplete]:               https://github.com/pragtical/pragtical/blob/master/data/plugins/autocomplete.lua
[lsp-autocomplete]:           /img/user-guide/lsp/autocomplete.png
[lsp-symbolstree]:            /img/user-guide/lsp/symbols-tree.png
[lsp-snippets]:               /img/user-guide/lsp/snippets.gif
[lsp-inline-diagnostics]:     /img/user-guide/lsp/inline-diagnostics.png
[lsp-hover]:                  /img/user-guide/lsp/hover.png
[lsp-args]:                   /img/user-guide/lsp/args.png
[lsp-view-symbol]:            /img/user-guide/lsp/view-symbol.gif
[lsp-search-symbol]:          /img/user-guide/lsp/search-symbol.gif
[lsp-goto-definition]:        /img/user-guide/lsp/goto-definitions.gif
[lsp-find-references]:        /img/user-guide/lsp/find-references.gif
[lsp-format]:                 /img/user-guide/lsp/format.gif
[lsp-view-doc-diagnostics]:   /img/user-guide/lsp/view-doc-diagnostics.gif
[lsp-view-all-diagnostics]:   /img/user-guide/lsp/view-all-diagnostics.gif
[lsp-debug-logging]:          /img/user-guide/lsp/debug-logging.png
[jdt.ls]:                     https://github.com/eclipse-jdtls/eclipse.jdt.ls
[win-execution-alias]:        /img/user-guide/win-execution-alias.png
[Python]:                     https://www.python.org/
[jdtls-cmdline]:              https://github.com/eclipse-jdtls/eclipse.jdt.ls?tab=readme-ov-file#running-from-the-command-line
