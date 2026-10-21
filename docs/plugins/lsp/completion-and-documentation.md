---
sidebar_position: 4
description: Use language-aware completion, snippets, hover documentation, and signature help.
---

# Completion and Documentation

Once a language server is initialized for a file, LSP can provide suggestions
and documentation based on that file's language and project.

## Completion

Press <kbd>ctrl+space</kbd> or run `lsp:complete` at the caret.
Servers can also advertise characters that trigger completion while typing.
The plugin integrates with Pragtical's bundled Autocomplete plugin.

![Language-server completion suggestions for a Lua module][completion]

Use <kbd>up</kbd>/<kbd>down</kbd> to select a suggestion and <kbd>tab</kbd>
to insert it. You can scroll the results with
the mouse wheel and choose an item with the mouse.
Use <kbd>escape</kbd> to dismiss the list.

Manual completion falls back to the editor's ordinary autocomplete when there
is no usable LSP result. A selection also uses that fallback rather than
requesting a server completion at a range.

### Snippets and Additional Edits

Some suggestions contain snippet placeholders. Install Snippets and LSP Snippets,
and leave **Snippets** enabled in LSP settings to expand them.
Without that integration, do not expect placeholder navigation.

Completion can also add imports or includes through additional text edits.
**Apply Additional Completion Edits** is enabled by default. Turn it off in
[configuration](configuration.md) if you want to handle those edits yourself.

## Symbol Information

Rest the pointer over a symbol, or place the caret on it and press
<kbd>alt+a</kbd>. The plugin displays the server's Markdown or plain-text
documentation in a popup.

![Hover documentation for a Lua function with typed parameters and a return value][hover]

Move the pointer into mouse-opened documentation to read or scroll it. The
popup follows the lifetime of its source view and dismisses when its context
is no longer valid. Use <kbd>escape</kbd> to close it.

To keep the information in a document pane, press <kbd>alt+shift+a</kbd>
or run `lsp:show-symbol-info-in-tab`. This opens a Markdown help view in a
bottom split; later help requests can add tabs there.

Mouse hover defaults to enabled after a 300 ms delay. Keyboard requests still
work when **Mouse Hover** is disabled. See
[Configuration](configuration.md#completion-and-hover).

## Signature Help

Inside a function call, press <kbd>ctrl+shift+space</kbd> to request the
function signature and parameter information. Servers may also request this
interaction through their advertised trigger characters.

![Lua function signature help at a call site][signature]

The server controls which overloads and active parameter are reported.
Documentation may be absent if it has no information for that location.

[completion]: /img/plugins/lsp/completion.png
[hover]: /img/plugins/lsp/hover.png
[signature]: /img/plugins/lsp/signature.png
