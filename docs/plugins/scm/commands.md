---
sidebar_position: 11
description: Reference for SCM commands, keyboard shortcuts, and contextual actions.
---

# Command Reference

Open the command palette with <kbd>ctrl+shift+p</kbd> and search for **Scm**.
Command names below are the Lua/keymap identifiers; the palette displays their
prettified names. Availability depends on the current repository, document,
backend, and selected row.

Left-clicking the SCM status item opens a fresh palette filtered to **Scm:**,
without restoring a previous query or selected result. Right-clicking that
item opens the project diff.

## Repository Commands

| Command | Action |
| ------- | ------ |
| `scm:workbench` | Open or focus the repository workbench |
| `scm:repository-tools` | Open backend-specific repository tools |
| `scm:initialize-repository` | Initialize a non-repository directory |
| `scm:project-status` | Open the backend's text status report |
| `scm:global-diff` | Open the current project diff |
| `scm:commits-history` | Open history for the active path or project |
| `scm:new-commit` | Check for committable changes and open the message editor |
| `scm:amend-current-commit` | Open the current commit for amend |
| `scm:push` | Push using the backend's configured defaults |
| `scm:manage-remotes` | Open the Remotes tool |
| `scm:merge-branches` | Choose source, target, and merge strategy |
| `scm:view-branches` | Open the standalone branches table |
| `scm:create-branch` | Create a branch from a selected base |
| `scm:view-tags` | Open the standalone tags table |
| `scm:create-tag` | Create a tag at a selected commit |

Fetch and pull are available through the workbench, and fetch also through
**Refresh From Remote** in branch/tag lists. There are no corresponding global
`scm:fetch` or `scm:pull` commands. Lua helpers with those names are a different
interface from palette commands.

## Document Commands

| Command | Action |
| ------- | ------ |
| `scm:file-add` | Add the current untracked file to source control |
| `scm:file-remove` | Remove the path from source-control tracking using the backend |
| `scm:file-revert` | Confirm restoring the tracked working file |
| `scm:staging-add` | Stage the current Git file |
| `scm:staging-remove` | Unstage the current Git file |
| `scm:file-diff` | Open the current file's patch |
| `scm:compare-with-head` | Compare the current file with its committed contents |
| `scm:goto-previous-change` | Move to the previous changed region |
| `scm:goto-next-change` | Move to the next changed region |
| `scm:toggle-blame` | Toggle current-line blame details |
| `scm:view-blame-diff` | Open the commit diff associated with the current line |

The Git remove-from-tracking operation uses the index and keeps the working
file. It is not an action for discarding that file's edits. Read confirmations
and backend errors when using tracking or restore operations.

## Default Shortcuts

| Action | Shortcut |
| ------ | -------- |
| Open the workbench | <kbd>ctrl+shift+g</kbd> |
| Previous document change | <kbd>ctrl+alt+[</kbd> |
| Next document change | <kbd>ctrl+alt+]</kbd> |
| Toggle blame | <kbd>ctrl+alt+b</kbd> |
| View current-line blame diff | <kbd>alt+b</kbd> |
| Refresh the active workbench | <kbd>f5</kbd> |
| Next workbench list item | <kbd>alt+down</kbd> |
| Previous workbench list item | <kbd>alt+up</kbd> |
| Save a commit message and request confirmation | <kbd>ctrl+s</kbd> |

These are plugin defaults. Your keymap and platform configuration can override
them. Use **Settings > Keybindings** to inspect the active bindings.

## Workbench Commands

These apply while the workbench is active:

| Command | Action |
| ------- | ------ |
| `scm-workbench:refresh` | Reload local repository state |
| `scm-workbench:next-item` | Select the next list row and preview it |
| `scm-workbench:previous-item` | Select the previous row and preview it |

File/hunk/line actions, Viewed marks, conflict recovery, and remote operations
are controls in the workbench. **View Diff** and a history-row double-click
open the configured full viewer; a single click only changes the preview.

## Standalone History Actions

| Command | Context-menu action |
| ------- | ------------------- |
| `scm-history:view-diff` | **View Diff** |
| `scm-history:copy-commit-hash` | **Copy Commit Hash** |
| `scm-history:amend-current-commit` | **Amend Current Commit**, for the checkout commit |
| `scm-history:cherry-pick` | **Cherry Pick Commit**, for another commit |
| `scm-history:compare-with-current` | **Compare With Current**, for file history |
| `scm-history:refresh` | **Refresh** the same history query |

Double-clicking a commit opens its diff. A selected row is needed for
commit-specific operations.

## Standalone Branch Actions

| Command | Context-menu action |
| ------- | ------------------- |
| `scm-branches:view-diff` | **View Changes Diff** |
| `scm-branches:view-history` | **View Branch History** |
| `scm-branches:view-range-history` | **View Commits Not On Current Branch** |
| `scm-branches:copy-commit-hash` | **Copy Commit Hash** |
| `scm-branches:checkout` | **Checkout Branch**, also invoked by double-click |
| `scm-branches:rebase` | **Rebase Branch...**, for a supported local branch |
| `scm-branches:create` | **Create Branch** |
| `scm-branches:delete` | **Delete Branch** |
| `scm-branches:force-delete` | **Force Delete Branch** |
| `scm-branches:refresh` | **Refresh** local refs |
| `scm-branches:refresh-from-remote` | **Refresh From Remote** |
| `scm-branches:push-remote` | **Push branch...**, on Git |
| `scm-branches:delete-remote` | **Delete remote branch...**, on Git |
| `scm-branches:merge` | **Merge Branch...**, when supported |

## Standalone Tag Actions

| Command | Context-menu action |
| ------- | ------------------- |
| `scm-tags:view-diff` | **View Changes Diff** |
| `scm-tags:view-history` | **View Tag History** |
| `scm-tags:copy-commit-hash` | **Copy Commit Hash** |
| `scm-tags:checkout` | **Checkout Tag** |
| `scm-tags:create` | **Create Tag** |
| `scm-tags:edit` | **Edit Tag** |
| `scm-tags:delete` | **Delete Tag** |
| `scm-tags:refresh` | **Refresh** local tags |
| `scm-tags:refresh-from-remote` | **Refresh From Remote** |
| `scm-tags:push-remote` | **Push tag...**, on Git |
| `scm-tags:delete-remote` | **Delete remote tag...**, on Git |

Creation and refresh do not require a selected item. Item-specific actions do,
and capability checks can further restrict their availability. Tree context
menus provide project/path entry points to the same underlying SCM helpers.

## Customize a Binding

For example, add this to your user module to bind the branches list:

```lua
local keymap = require "core.keymap"

keymap.add {
  ["ctrl+shift+b"] = "scm:view-branches",
}
```

Check for existing bindings before assigning a shortcut. See
[Managing Keyboard Shortcuts](../../developer-guide/commands-and-shortcuts/managing-keyboard-shortcuts.md)
for the keymap API and command predicates.
