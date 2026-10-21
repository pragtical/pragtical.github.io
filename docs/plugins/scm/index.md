---
sidebar_position: 1
sidebar_label: Overview
slug: /plugins/scm
description: Manage Git and Fossil repositories from Pragtical with the SCM plugin.
---

# Source Control Management

The **Source Control Management** plugin, or **SCM**, integrates Git and Fossil
with Pragtical. Review changes, prepare commits, inspect history, and manage
branches and tags without leaving the editor. Repository operations run
asynchronously so you can continue working while commands complete.

![SCM workbench showing changed files and a Lua diff in One Dark][workbench]

## Start Here

New to the plugin? Follow [Getting Started](getting-started.md), then open the
[Repository Workbench](workbench.md) with <kbd>ctrl+shift+g</kbd>.

For a typical Git change:

1. Save your files and review **Changes** in the workbench.
2. Stage the files, hunks, or lines that belong in the commit.
3. Inspect **Staged**, choose **Commit...**, and write a message.
4. Save the message, confirm **Commit**, then push when ready.

For Fossil, add new files and review tracked changes before committing. There
is no separate staging area. See the [backend differences](#git-and-fossil)
below before applying a Git workflow to a Fossil checkout.

## In This Manual

| Guide | What you will learn |
| ----- | ------------------- |
| [Getting Started](getting-started.md) | Installation, repository detection, and initialization |
| [Repository Workbench](workbench.md) | Changes, staging, filters, and editor integration |
| [Diffs and Review](diffs-and-review.md) | Unified and split diffs, changed files, and Viewed marks |
| [Commits and History](commits-and-history.md) | Commit messages, amend, history, cherry-pick, and blame |
| [Branches and Tags](branches-and-tags.md) | Create, check out, compare, edit, rebase, and delete refs |
| [Remotes and Synchronization](remotes-and-sync.md) | Remotes, fetch, pull strategies, push, and authentication |
| [Conflicts and Recovery](conflicts-and-recovery.md) | Resolve conflicts and continue or abort operations |
| [Repository Tools](repository-tools.md) | Stashes, search, worktrees, submodules, LFS, and rewriting |
| [Configuration and Troubleshooting](configuration.md) | Settings, executable paths, and common problems |
| [Command Reference](commands.md) | Commands, shortcuts, and context-sensitive actions |
| [Extending SCM](extending-scm.md) | Backend interfaces and asynchronous integration |

## Git and Fossil

SCM follows each tool's model. An unavailable operation is not necessarily a
missing executable or a broken menu: it may not apply to that backend.

| Workflow | Git | Fossil |
| -------- | --- | ------ |
| Review changes and commit history | Supported | Supported |
| Stage files, hunks, or lines | Git index | No staging area |
| Create and check out branches or tags | Supported | Supported |
| Delete a branch | Delete a local branch ref | Close the branch; history remains |
| Amend through the commit editor | Replace the current commit, including staged changes | Change the current check-in's comment |
| Rebase a branch | Supported | Not offered |
| Merge branches | Merge or fast-forward, with conflict preferences | Normal or integrate merge; commit afterward |
| Stash tracked work | Supported | Supported |
| Include untracked files in a stash | Optional | Not offered |
| Incoming and outgoing commit counts | Relative to the configured upstream | No Git-style tracking-ref comparison |
| Manage remote URLs | Named remotes and separate push URLs | Named remotes and sync default |
| Push or delete individual remote refs | Supported | Not offered |
| Worktrees, submodules, LFS, local rewrite plans | Git-specific tools | Not offered |

:::caution Repository actions affect real files and history

Review confirmation dialogs before discarding changes, deleting refs, applying
stashes, or rewriting history. Keep a separate backup of important uncommitted
work. A diff view or Viewed mark is not a backup.

:::

[workbench]: /img/plugins/scm/workbench.png
