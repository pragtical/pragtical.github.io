---
sidebar_position: 12
description: Extend SCM with an asynchronous backend that integrates with its existing views.
---

# Extending SCM

SCM separates repository operations from editor integration. A backend extends
`plugins.scm.backend`; the main plugin connects its results to document
indicators, the status bar, tree colors, commands, and widget-based views.
Read the bundled Git and Fossil implementations alongside the base class's
Lua annotations when building another backend.

## Register a Backend

A backend class starts with the shared process wrapper:

```lua
local scm = require "plugins.scm"
local Backend = require "plugins.scm.backend"
local MyBackend = Backend:extend()

function MyBackend:new()
  self.super.new(self, "My SCM", "my-scm")
end

-- Implement detection, queries, and the operations your SCM supports.
scm.register_backend(MyBackend())
```

This is a class outline, not a complete backend. In particular, `detect`
must recognize a controlled directory before SCM can associate it with a
project. `scm.unregister_backend(name)` removes a registered backend.

## Implement Queries and Operations

The useful baseline is detection, current branch, branches/tags, changes,
file status, project/file diffs, and line statistics. History and commit
operations provide the data needed by the richer views.

Return data following the annotations in `backend/init.lua`:

| Result | Important fields |
| ------ | ---------------- |
| File change | `path`, `status`, and `new_path` for a rename |
| Statistics | `inserts`, `modified`, `deletes`, all line counts |
| Branch | `name`, `commit`, and optional `remote`, `remote_only`, `date`, `message` |
| Tag | `name`, `commit`, and optional `date`, `message`, `annotated` |
| Commit | `hash`, `author`, `date`, `summary`, and optional `message` body |

Use absolute normalized paths for change maps where practical. Recognized
statuses are `added`, `edited`, `deleted`, `renamed`, `unchanged`, and
`untracked`. For renames, retain both source and destination paths.
Keep the commit subject in `summary` and the remaining body in `message`;
the shared details widget handles the compact/expanded presentation.

Follow each method's callback signature. Mutation callbacks usually receive
`success, errmsg`; diff callbacks use `diff, cached, errmsg`. A failed change
query must not masquerade as a successful empty list: an empty list means the
repository is clean and allows old status indicators to be cleared.

## Keep Commands Asynchronous

Use `Backend:execute(callback, directory, ...)` rather than starting processes
directly or using `io.popen`. The base implementation handles command lookup,
working directories, coroutine scheduling, and process cleanup.

Inside its callback:

1. Read stdout and stderr through `get_process_output`, or use
   `get_process_lines` for line iteration.
2. Handle a missing process: execution can fail before a process is started,
   and the callback still needs to complete.
3. Read/drain command output before relying on the final return code.
4. For mutations, report success only for return code zero. Prefer stderr
   for the error, falling back to stdout.
5. Yield cooperatively in long parsing loops, typically every 50 to 100 rows.

The wrapper drains both output pipes to avoid a child blocking on a full
stderr stream. Prefer its helpers over ad hoc polling loops. `self:yield()`
respects the backend's blocking mode; UI paths should normally stay async.

If a call site temporarily uses `set_blocking_mode(true)`, restore it to
`false` afterward, including failure paths. For per-command environment
overrides, copy the options returned by `get_process_options` and pass them
to `execute_with_options`; do not replace a shared backend method temporarily.

See Pragtical's [Process API](../../api/process.md),
[coroutine guide](../../developer-guide/writing-plugins/coroutines.md), and
[child-process guide](../../developer-guide/using-libraries/child-processes.md).

## Advertise Capabilities Truthfully

Implement the base capability methods and `get_capabilities()` for supported
workflows. For example, `has_staging`, `supports_rebase_branch`,
`supports_stashes`, and `supports_fetch_prune` control applicable actions.
The capabilities map enables tools such as remotes, merge, worktrees,
submodules, LFS, initialization, and history rewriting.

Do not advertise Git-shaped operations that have no sound equivalent in the
new SCM. Fossil is an example: it supports merge and artifact synchronization,
but not Git's index, remote-tracking branch model, or branch rebase workflow.
Return errors through callbacks; log or show dialogs at the SCM helper/UI
boundary instead of coupling backend code to a particular view.

Use metadata watching only where needed, and release it in `unwatch_project`.
Do not add whole-tree watches or background polling as a shortcut for status
integration. Reuse existing editor/backend notifications and SCM's refresh
coordination.

## Reuse the UI and Public Helpers

Main helpers such as `scm.open_commit_diff`, `scm.open_commit_history`,
`scm.open_branches_list`, and `scm.open_workbench` keep selection, project
context, and viewer preference at the editor boundary. UI code should call
these helpers rather than branching on backend names.

The standalone history, branch, and tag lists use the
[widget library](../../api/widget.md). Prefer extending their data contracts
and capability checks over adding a backend-specific replacement view.
Use [path helpers](../../api/core.common.md) for normalization and relative
command arguments, and preserve Git's existing nested-repository handling.

## Test a Backend Change

From the SCM plugin directory, use the globally installed Pragtical binary:

```sh
SDL_VIDEO_DRIVER=dummy pragtical test tests
```

Tests that start repository commands should use disposable repositories with
an existing working directory. Yield while waiting for async callbacks; a
busy loop can stall the editor and prevent the callback from running.
Anchor test-source paths to `core.init_working_dir` or load by module name,
since editor activity can change the process working directory.

Test startup failures, nonzero exits, stderr, empty successful results, and
stale async responses. Diff changes need additions, deletions, replacements,
multiple hunks, and metadata-only cases. Exercise the real backend's output
format and affected UI before publishing, not only mocked command strings.
