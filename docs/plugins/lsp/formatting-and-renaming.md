---
sidebar_position: 7
description: Format a document and preview cross-file symbol renames before applying them.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Formatting and Renaming

Formatting and rename behavior depends on the selected server. These operations
use structured language-server edits rather than plain search and replace.

## Format a Document

Press <kbd>alt+shift+f</kbd> or run `lsp:format-document`.
The server must advertise document formatting. The plugin supplies the
document's indentation information and trimming preferences to the request.
Manual formatting updates the buffer; save it when you are ready.

### Format on Save

Automatic formatting is disabled by default.

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

```lua
local config = require "core.config"
config.plugins.lsp.request_format_on_save = true
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

Enable **Request Document Format on Save** under
**Plugins > Language Server Protocol**.

  </TabItem>
</Tabs>

Formatting is asynchronous: the initial save happens first, then the server's
formatting result is applied and saved again. This is not a formatter that
blocks the first disk write. Avoid enabling another format-on-save integration
for the same files unless you intend both to run.

## Rename a Symbol

1. Select the symbol's name on a single line.
2. Press <kbd>alt+r</kbd> or run `lsp:rename-symbol`.
3. Enter the replacement name in **New Symbol Name**.
4. Wait for the **Symbol Rename** view to calculate candidate edits.
5. Inspect the listed files and occurrences, adjusting their checkboxes.
6. Choose **Apply Rename** and confirm the operation.

![Symbol Rename preview with selectable Lua function occurrences][rename]

The command requires a selection; placing the caret inside a word without
selecting it only logs a request to select a symbol. Only one rename preview
can be open at a time.

Use <kbd>up</kbd>/<kbd>down</kbd> to select preview entries,
<kbd>left</kbd>/<kbd>right</kbd> to expand or collapse them,
<kbd>space</kbd> to toggle a checkbox, and <kbd>enter</kbd> to inspect an
occurrence in its document. Closing the preview before applying leaves files
unchanged.

## File Operations and Saving

A server rename response may also contain resource operations. The preview
shows their paths and statuses alongside text changes. A delete operation can
be skipped by double-clicking its row; check dependencies before excluding
operations from a server-provided rename.

Applying a rename writes selected file locations and reloads affected open
documents. Save or otherwise preserve unsaved work before confirming, and
avoid editing files while the rename runs. The confirmation dialog explains
the reload behavior. Check the preview's result counts and editor log for
failures; do not assume all files changed if an operation failed.

For quick fixes that apply immediately instead of opening this preview, see
[Code Actions](diagnostics-and-code-actions.md#code-actions).

[rename]: /img/plugins/lsp/rename.png
