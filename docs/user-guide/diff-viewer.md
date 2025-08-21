---
sidebar_position: 9
description: Learn about the Pragtical built-in Diff Viewer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Diff Viewer

The Pragtical code editor includes a **Built-in Diff Viewer** designed to help
developers quickly visualize, navigate, and synchronize differences between
files or strings.

It is ideal for reviewing changes, understanding history, and synchronizing
edits, all without leaving Pragtical!

![Diff Viewer][1]

## Features

Whether you're comparing two strings, reviewing changes in a file, or
inspecting commit history via source control, the diff viewer provides a fast
and intuitive interface to understand code changes.

- **Side-by-Side Diff View**
  Visual comparison of two files, strings or combination of both with
  synchronized scrolling.

- **Effortless Navigation**
  Jump between differences using keyboard shortcuts or mouse navigation.

- **Line-Level and Inline Diffs**
  Highlights exact changes, whether it's an entire line or a single character.

- **Synchronize Differences**
  Merge changes across views or apply edits manually based on comparison.

- **Source Control Integration**
  Extended functionality when used with the built-in [Source Control Management]
  - Compare the current file to a previous version in your commit history.
  - View unstaged vs. working changes before committing.

- **Compare Any Input**
  Launch diffs between:
  - Project files
  - Snippets of code
  - Any file on your system

## Usage

There are different ways to open the Diff Viewer:

1. **From the Command Palette**:
   Press <kbd>ctrl+shift+p</kbd> and search for
   `diff-view:start-files-comparison` or `diff-view:start-strings-comparison`.

2. **Right-click the File Explorer (TreeView)**:
   In the explorer, right-click a file and select `Select for Compare`. Then
   right click another file and select `Compare with Selected`

3. **Right-click Selected Text**:
   In a document, right-click a text selection and select `Select Text for Compare`.
   Then right click another text selection and select `Compare Text with Selected`

4. **Source Control Manager**:
   With SCM installed, click on any changed file to compare it against the
   previous state, or navigate its commit history, right click any entry and
   select the `Compare with Current` option.

5. **API**:
   Plugins can programmatically launch the diff viewer using Pragtical’s Lua API.

### Example Video

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="https://github.com/user-attachments/assets/f5856c26-be2b-44f4-8d68-73b472fb90e9"/>
</video>

## Available Commands:

| Name                                   | Description
| ----                                   | -----------
| `diff-view:start-files-comparison`     | Start a new files comparison
| `diff-view:start-strings-comparison`   | Start a strings comparison where you can put any string in
| `diff-view:prev-change`                | Navigate to previous change
| `diff-view:next-change`                | Navigate to next change
| `diff-view:sync-change`                | Send changes from active document to the other
| `diff-view:select-file-for-compare`    | Select active document for a comparison
| `diff-view:compare-file-with-selected` | Compare active document with previously selected
| `diff-view:select-text-for-compare`    | Select highlighted text for a comparison
| `diff-view:compare-text-with-selected` | Compare selected text with previous selection

## Keyboard Shortcuts

| Action                    | Shortcut              |
|---------------------------|------------------------|
| Next difference           | <kbd>ctrl+alt+.</kbd>         |
| Previous difference       | <kbd>ctrl+alt+,</kbd> |
| Sync changes              | <kbd>ctrl+return</kbd> |

## Configuration

The following configuration options are available:

<Tabs>
  <TabItem value="user-module" label="User Module" default>

```lua
---Logs the amount of time taken to recompute differences.
---@type boolean
config.plugins.diffview.log_items = false

---Disable syntax coloring on changed lines to improve visibility.
---@type boolean
config.plugins.diffview.plain_text = false

---The color used on changed lines when plain text is enabled.
---@type renderer.color
config.plugins.diffview.plain_text_color = { common.color "#ffffff" }
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

![diff viewer settings panel][2]

  </TabItem>
</Tabs>

## Api Usage Example

You can easily compare any two open files. For example:

```lua
local diffview = require "plugins.diffview"

-- Files
diffview.file_to_file("src/old.ext", "src/new.ext")

-- Strings
diffview.string_to_string("some text", "some more text")

-- String / File
diffview.string_to_file("some text", "src/file.ext")

-- File / String
diffview.file_to_string("src/file.ext", "some text")
```

For additional details check the [diff api docs] which contain the references
to the C backend and [diffviewer api docs].


[1]:                         /img/user-guide/diff-viewer/diff-view.png
[2]:                         /img/user-guide/diff-viewer/settings.png
[diff api docs]:             /docs/api/diff
[diffviewer api docs]:       /docs/api/plugins.diffview
[Source Control Management]: /plugins?plugin=scm
