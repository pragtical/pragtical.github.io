---
sidebar_position: 8
description: Set up Pragtical as your integrated development environment.
---

# Setup Pragtical as an IDE

Pragtical can be configured to be a proper IDE for most programming languages.
The following is a brief overview of the plugins that, when used together,
provide the experience of a minimal and modern IDE.

## Bells and Whistles

The following plugins are meant to enrich Pragtical with handy features that
improve the coding experience:

- `autoinsert` and `lfautoinsert` add automatic bracket/quote insertion and
  text-wrapping.
- `autosave` allows automatic file saving after every change.
- `bracketmatch` underlines brackets matching pairs under the caret.
- `colorpreview` underlays color values (e.g. `#ff00ff` or `rgb(255, 0, 255)`)
  with their respective color.
- `indentguide` adds indent guides to make it easier to see function boundaries.
- `rainbowparen` applies rainbow colors to nesting parentheses to make it easier
  to distinguish them.
- `scalestatus` displays current scale (zoom) in the status view (it depends on
  the `scale` plugin).
- `selectionhighlight` highlights regions of code that match the current selection,
  to preview for search/replace actions.
- `sticky_scroll` keeps track of the current scope at the top of the view.
- `minimap` adds VSCode's minimap.
- `devicons` provides fancy icons in the project treeview for many file types.

## Intellisense

`lsp` is a plugin that provides support for Intellisense (code completion,
goto-definition, document symbols, function signatures and so on) through the
LSP protocol, while `lintplus` provides support for info/warning/error diagnostics.

There is also `lsp_snippets`, which adds snippets support from `lsp` to the
`snippets` plugin.

`lsp` can be configured manually by following the [this guide][3], or it
can interface with the `lsp-servers` repository that allows the
installation of bundled LSP servers, which don't require manual configuration.

An example of installing bundled LSP servers is `ppm install lsp_rust` which
installs the binary files required to run `rust-analyzer`.

## Code Snippets

`snippets` adds support for code snippets.

Snippets can easily be added by following the [official guide][4].

## Code Formatters

`formatter` provides file-specific formatting for several programming languages.

## Integrated Terminal

[Ghostty Terminal](/plugins?plugin=ghostty) is preferred over the older
[terminal plugin](/plugins?plugin=terminal) for better compatibility with terminal
applications. Powered by libghostty-vt, it provides terminal tabs and a bottom
drawer that follow the editor's color theme.

Install `ghostty` from **Tools > Plugin Manager**, or use the bundled command-line
plugin manager:

```sh
pragtical pm install ghostty
```

Restart Pragtical after installation. Press <kbd>Alt</kbd>+<kbd>T</kbd> to show or
hide the drawer, or run **Ghostty: Open Tab** from the command palette to open a
terminal tab. New sessions start in the current project directory; hiding the
drawer keeps its shell running.

Open **Settings > Plugins > Ghostty Terminal** to choose your shell and configure
the drawer, scrollback, and other options.

Ghostty requires Pragtical built with LuaJIT and SDL3. See the
[plugin documentation](https://github.com/pragtical/ghostty#readme) for supported
platforms, additional shortcuts, and configuration options.

## Version Control

`scm` provides source code control integration to Pragtical.

`gitblame` can be added to show git commit information of the line where the cursor rests.

## TODO Treeview

`todotreeview` is a plugin that adds a custom treeview with the goal of keeping
track of flagged comments (TODO, WIP, FIX, ...) for better workflow organization.

## Build Integration

The `build` plugin from [Pragtical IDE][1] provides build targets, captured output,
and clickable compiler diagnostics. It supports Make, CMake, Meson, Gradle
wrappers, direct commands, shell scripts, and an internal GCC/Clang backend.

## Debug Integration

The `debugger` plugin from [Pragtical IDE][1] provides GDB MI and DAP backends,
with source breakpoints, stepping, stack navigation, and watch expressions.
Install GDB separately; DAP mode requires GDB built with DAP support.

## Automatic Setup

[Pragtical IDE][1] provides metapackages that install a collection of plugins
for common language toolchains. Install `ide` for the common editor tooling, or
choose a language metapackage such as `ide_c`, `ide_java`, `ide_python`, or
`ide_web`.

For example, install the C/C++ package with the bundled plugin manager:

```sh
pragtical pm install ide_c --no-install-optional
```

This includes the build plugin, debugger, and C/C++ language server setup.
Restart Pragtical after installation. Build and debugger can also be installed
separately. See the [repository's documentation][1] for the full metapackage list
and configuration instructions.

:::warning
The build and debugger plugins remain experimental. They have been tested on
Linux; native compiler and debugger execution on Windows and macOS remains
unverified.
:::

[1]: https://github.com/pragtical/ide
[3]: /docs/user-guide/lsp
[4]: https://github.com/vqns/lite-xl-snippets?tab=readme-ov-file#usage
