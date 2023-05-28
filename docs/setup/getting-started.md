---
sidebar_position: 1
description: Install Pragtical and configure it for your use.
---

# Getting Started

Setting up Pragtical is easy.
Pragtical comes in `.zip` or `.tar.gz` packages and installers
depending on the platform.

Pragtical packages marked with `addons` provide extra plugins
that improve the out-of-the-box experience.

## Install

Installing Pragtical is usually as simple as downloading the package and extracting it.
However, here are some platform-specific installation instructions.

- [Windows]
- [Linux]
- [macOS]

## Portable application

Pragtical stores user configuration in the OS-specific configuration directory.
This directory is also known as `USERDIR`.

These paths are checked to determine `USERDIR`:

1. `<directory_to_pragtical_binary>/user`
2. `$PRAGTICAL_USERDIR`
3. `$XDG_CONFIG_HOME/pragtical`
4. `$HOME/.config/pragtical` or `$USERPROFILE/.config/pragtical` on Windows

In order to create a portable installation of Pragtical,
you can create a `user` directory where the executable resides.
Pragtical will then store configuration data in that directory.

## Plugins

Pragtical can be extended via plugins written in Lua.
In fact, most of Pragtical's features comes from plugins;
the core is kept simple and features are added via plugins
if possible.

Pragtical comes with a set of plugins and users can install more on their own.
Here are common plugins that most users install:


| Plugin               | Use case
| ------               | --------
| [align_carets]       | Align text on multiple carets and selections
| [autoinsert]         | Automatically insert closing brackets and quotes
| [autosave]           | Automatically saves the file when it is modified
| [bracketmatch]       | Highlight matching brackets
| [editorconfig]       | EditorConfig support for Pragtical
| [ephemeral_tabs]     | Ephemeral tabs (previewing files without creating multiple tabs)
| [gitdiff_highlight]  | Git diff gutter
| [indentguide]        | Indent guides
| [lint+]              | Linter support
| [litepresence]       | Discord rich presence
| [lsp]                | Language Server support for Pragtical
| [minimap]            | Minimap
| [selectionhighlight] | Highlight code that matches the selection
| [scm]                | All in one source control management


## Further reading

You may be interested on these topics:

- [Introduction] — A introduction to various Pragtical features and concepts.
- [Configuration] — A guide on how to configure Pragtical.
- [Plugins] — An introduction to plugin management.

These are advanced topics that are useful for power users or plugin developers:

- [Creating Themes] — A tutorial on how to write themes for Pragtical.
- [Creating Syntaxes] — A guide on how to add support for new languages.
- [Simple plugin] — A tutorial on writing a simple plugin.
- [Regular expressions] — A guide on how to use regular expressions in Pragtical.
- [Child processes] — A guide on how to start and manage child processes.



[Windows]:              windows.md
[Linux]:                linux.md
[macOS]:                macos.md
[align_carets]:         https://github.com/pragtical/plugins/blob/master/plugins/align_carets.lua?raw=1
[autoinsert]:           https://github.com/pragtical/plugins/blob/master/plugins/autoinsert.lua?raw=1
[autosave]:             https://github.com/pragtical/plugins/blob/master/plugins/autosave.lua?raw=1
[bracketmatch]:         https://github.com/pragtical/plugins/blob/master/plugins/bracketmatch.lua?raw=1
[editorconfig]:         https://github.com/pragtical/plugins/blob/master/plugins/editorconfig
[ephemeral_tabs]:       https://github.com/pragtical/plugins/blob/master/plugins/ephemeral_tabs.lua?raw=1
[gitdiff_highlight]:    https://github.com/vincens2005/pragtical-gitdiff-highlight
[indentguide]:          https://github.com/pragtical/plugins/blob/master/plugins/indentguide.lua?raw=1
[lint+]:                https://github.com/liquid600pgm/lintplus
[litepresence]:         https://github.com/TorchedSammy/Litepresence
[lsp]:                  https://github.com/pragtical/lsp
[lspkind]:              https://github.com/TorchedSammy/pragtical-lspkind
[minimap]:              https://github.com/pragtical/plugins/blob/master/plugins/minimap.lua?raw=1
[selectionhighlight]:   https://github.com/pragtical/plugins/blob/master/plugins/selectionhighlight.lua?raw=1
[scm]:                  https://github.com/pragtical/scm
[Introduction]:         ../user-guide/introduction.md
[Configuration]:        ../user-guide/configuration.md
[Plugins]:              ../user-guide/plugins.md
[Creating Themes]:      /docs/developer-guide/syntaxes-and-themes/creating-themes
[Creating Syntaxes]:    /docs/developer-guide/syntaxes-and-themes/creating-syntaxes
[Simple plugin]:        ../developer-guide/simple-plugin.md
[Regular expressions]:  ../developer-guide/using-regular-expressions.md
[Child processes]:      ../developer-guide/child-processes.md
