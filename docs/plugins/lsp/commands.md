---
sidebar_position: 9
description: LSP command identifiers, default keyboard shortcuts, and context-specific controls.
---

# Command Reference

Open the command palette with <kbd>ctrl+shift+p</kbd> and search for **Lsp**,
or use **Tools > Language Server**.
Most document commands require an active document opened by a running server.
An enabled command can still have no result if the server lacks that capability.

Bindings below use the plugin's portable keymap names. On macOS, Pragtical
translates `ctrl` to Command and `alt` to Option.
Change bindings in Settings or your [user module](../../user-guide/configuration.md#keyboard-shortcuts).

## Completion and Documentation

| Command | Default shortcut | Action |
| ------- | ---------------- | ------ |
| `lsp:complete` | <kbd>ctrl+space</kbd> | Request completion, with ordinary autocomplete fallback. |
| `lsp:show-signature` | <kbd>ctrl+shift+space</kbd> | Show function signature help. |
| `lsp:show-symbol-info` | <kbd>alt+a</kbd> | Show symbol documentation in a popup. |
| `lsp:show-symbol-info-in-tab` | <kbd>alt+shift+a</kbd> | Open documentation in a help pane. |

LSP also wraps `autocomplete:open`, retaining its completion fallback.
Autocomplete uses <kbd>tab</kbd> to accept a suggestion. For LSP's own list
popups, `listbox:select` also uses <kbd>tab</kbd>, and
`listbox:cancel` uses <kbd>escape</kbd>.

## Navigation

| Command | Default shortcut | Action |
| ------- | ---------------- | ------ |
| `lsp:goto-definition` | <kbd>alt+d</kbd> | Navigate to a symbol definition. |
| `lsp:goto-implementation` | <kbd>alt+shift+d</kbd> | Navigate to an implementation. |
| `lsp:goto-definition-under-cursor` | <kbd>alt+shift+left click</kbd> | Definition at the pointer location. |
| `lsp:goto-implementation-under-cursor` | <kbd>ctrl+alt+shift+left click</kbd> | Implementation at the pointer location. |
| `lsp:find-references` | <kbd>alt+f</kbd> | Open the reference picker. |
| `lsp:view-document-symbols` | <kbd>alt+s</kbd> | Open the current document's symbol picker. |
| `lsp:find-workspace-symbol` | <kbd>alt+shift+s</kbd> | Submit a workspace symbol query. |
| `lsp:toggle-symbols-tree` | <kbd>alt+shift+backslash</kbd> | Toggle the tree and disable auto-hide. |
| `lsp:enable-symbols-tree-auto-hide` | None | Restore automatic tree visibility. |
| `lsp:view-call-hierarchy` | <kbd>alt+shift+c</kbd> | Prepare a call-hierarchy request; no results browser yet. |

The workspace-symbol command is globally registered, but its request still
needs a supported active source document.

## Editing and Diagnostics

| Command | Default shortcut | Action |
| ------- | ---------------- | ------ |
| `lsp:code-action` | <kbd>alt+c</kbd> | Request actions at the caret or selection. |
| `lsp:rename-symbol` | <kbd>alt+r</kbd> | Rename the selected symbol through a preview. |
| `lsp:format-document` | <kbd>alt+shift+f</kbd> | Request whole-document formatting. |
| `lsp:view-document-diagnostics` | <kbd>alt+e</kbd> | List messages for the current document. |
| `lsp:view-all-diagnostics` | <kbd>ctrl+alt+e</kbd> | List files with stored diagnostics. |
| `lsp:toggle-diagnostics` | <kbd>alt+shift+e</kbd> | Toggle inline diagnostics through Lint+. |

## Server Controls

These commands have no default shortcuts. They also appear in the
**Servers** submenu.

| Command | Action |
| ------- | ------ |
| `lsp:start-servers` | Start applicable servers for open files. |
| `lsp:stop-servers` | Stop currently running servers. |
| `lsp:restart-servers` | Stop servers and start the applicable definitions again. |

## View-Specific Controls

In the Symbols Tree, <kbd>up</kbd>/<kbd>down</kbd> select items,
<kbd>left</kbd>/<kbd>right</kbd> toggle expansion, and <kbd>enter</kbd>
jumps to the selected symbol. The corresponding commands are
`lsp-symbols-tree:select-previous`, `select-next`, `toggle-expand`,
and `open-selected`, with that same prefix.

In Symbol Rename, the `lsp-symbol-rename:` commands provide
`select-previous`, `select-next`, `toggle-expand`,
`toggle-checkbox`, and `open-selected`. Their bindings are
<kbd>up</kbd>, <kbd>down</kbd>, <kbd>left</kbd>/<kbd>right</kbd>,
<kbd>space</kbd>, and <kbd>enter</kbd>.
Page Up/Down scroll the preview; Ctrl+Home/End jump to its start/end.

These controls are contextual: their view must hold focus. A normal document's
arrow keys still move its caret.
