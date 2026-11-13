---
sidebar_position: 2.3
description: Write and run tests against Pragtical's Lua and native APIs.
---

# Writing and Running Tests

Pragtical includes a built-in [test framework](/docs/api/core.test) and a `test`
command. Tests run inside the editor, with access to core modules, plugins, and
native APIs such as `renderer`, `process`, and `audio`. No separate Lua test
framework is needed.

## Write a Test

Create a Lua file that requires `core.test` and registers test cases. For example,
this suite checks document insertion and undo:

```lua title="tests/doc.lua"
local Doc = require "core.doc"
local test = require "core.test"

test.describe("document editing", function()
  test.before_each(function(context)
    context.doc = Doc()
  end)

  test.after_each(function(context)
    if context.doc then context.doc:on_close() end
  end)

  test.test("inserts text", function(context)
    context.doc:insert(1, 1, "hello")
    test.equal(context.doc.lines[1], "hello\n")
  end)

  test.test("undoes text insertion", function(context)
    context.doc:insert(1, 1, "hello")
    context.doc:undo()
    test.same(context.doc.lines, { "\n" })
  end)
end)
```

`test.describe(name, callback)` groups tests into a suite. It can be nested to
group related behavior. `test.test(name, callback)` registers a test case;
`test.it` is an alias. A case passes when its callback completes without an error.
Assertion failures and other Lua runtime errors are reported with a stack trace,
and the runner continues to the remaining tests.

Register suites, cases, and hooks while the file loads. Put the behavior being
tested inside case callbacks, not at file scope. Test files do not need a plugin
`mod-version` header or a returned table.

## Run Tests

From the directory containing your `tests` folder, run:

```sh
pragtical test tests
```

You can also run one file:

```sh
pragtical test tests/doc.lua
```

Directory discovery is recursive and sorts Lua files by path. Within a file,
cases run in declaration order. Every discovered `.lua` file must register at
least one test. Keep helper-only modules outside the scanned directory, and give
raw Lua fixtures another extension, such as `.lua.txt`.

Results are printed as each case finishes, followed by a summary:

```text
PASS doc.lua > document editing > inserts text
PASS doc.lua > document editing > undoes text insertion

Ran 2 tests in 1 files: 2 passed, 0 failed, 0 skipped (...s)
```

A file that cannot be loaded or does not register tests produces a failed
`<load>` result. For a completed run, the editor exits with status `0` when there
are no failures, or `1` when a test fails. Skipped cases do not make the run fail.

Use `-n` or `--no-quit` to leave the editor open after the tests finish, which is
useful when inspecting a view or its log:

```sh
pragtical test -n tests/doc.lua
```

Leave this flag off in CI so the command exits automatically.

### Windows

Official Windows builds include the console executable `pragtical.com`. With the
default `PATHEXT` ordering, both Command Prompt and PowerShell select it when you
type `pragtical` without an extension. In PowerShell, use `.\`
to run from the installation directory:

```powershell
.\pragtical test C:\src\my-plugin\tests
```

If Pragtical is on `PATH`, omit the `.\` prefix. You can specify
`pragtical.com` explicitly if you have customized extension lookup. See
[Console output on Windows](/docs/developer-guide/introduction#console-output-on-windows).

### From a Source Checkout

The editor's tests live in `scripts/lua/tests/`. After configuring a
[build](/docs/setup/building), run these commands from the editor repository:

```sh
./scripts/run-local build test scripts/lua/tests/doc.lua
./scripts/run-local build test scripts/lua/tests
```

Replace `build` with your configured build directory. `run-local` compiles the
editor, stages its executable and runtime data in `.run/`, and uses a local user
profile instead of your normal configuration. Its default copy step recreates
`.run/`, so do not keep files there that you need to preserve.

For core changes, add tests to `scripts/lua/tests/`, using the module's name for
the test file, such as `doc.lua`, `audio.lua`, or `projectsearch.lua`. External
plugins can keep their own `tests/` directory and run it with the same command.
The plugin under test must be installed or otherwise available to the runtime;
passing a test directory does not add it to Lua's module search path.

### Headless and CI Runs

On Unix-like systems, the following matches the repository's headless CI setup:

```sh
SDL_VIDEO_DRIVER=dummy SDL_AUDIO_DRIVER=dummy \
  ./scripts/run-local build test scripts/lua/tests
```

The dummy video driver avoids opening a desktop window. The dummy audio driver
allows device tests without using speakers or a microphone. Tests that depend on
real GPU drivers, desktop integration, or physical devices still need a suitable
environment; a headless pass does not verify those paths.

For installed builds, use a separate profile through `PRAGTICAL_USERDIR` when
testing configuration-sensitive behavior. A portable installation's adjacent
`user/` directory takes precedence over that variable. Install any required
plugins into the test profile rather than relying on your personal setup.

## Assertions

Assertion arguments put the actual value before the expected value. Most helpers
accept an optional failure message as their final argument.

| Assertion | Checks |
| --- | --- |
| `test.ok(value)` / `test.not_ok(value)` | Truthy / falsy values |
| `test.equal(actual, expected)` | Equality using Lua's `==` operator |
| `test.not_equal(actual, expected)` | Inequality |
| `test.same(actual, expected)` | Recursive table equality |
| `test.is_nil(value)` / `test.not_nil(value)` | Whether a value is `nil` |
| `test.type(value, "string")` | The value's Lua type |
| `test.contains(container, value)` | A literal substring, or a value in a table |
| `test.match(text, pattern)` | A Lua pattern match, not a regular expression |
| `test.near(actual, expected, delta)` | Numbers within a tolerance, defaulting to `1e-6` |
| `test.error(fn, "message")` | An error whose text contains the given literal substring |
| `test.no_error(fn)` | A function that completes without an error |
| `test.fail("message")` | An unconditional failure |

Use `test.same` rather than `test.equal` to compare separate tables by content.
For `test.error`, the expected argument can also be a predicate that receives the
error and returns a truthy value. `test.match` accepts a fourth `plain` argument
when a literal substring is needed: `test.match(text, needle, message, true)`.

## Setup, Cleanup, and Isolation

`test.before_each` and `test.after_each` receive the same fresh context table as
the case callback. It contains `file` and `relative_file`; you can attach resources
such as the document in the first example.

Nested suites inherit their parents' hooks. Setup runs from outer suites to inner
suites, in registration order. Cleanup runs in reverse order, including when a
case or setup hook fails. Guard cleanup for resources that setup may not have
created yet. Cases declared with `test.skip` do not execute hooks.

Tests run sequentially but share the editor's Lua state and loaded modules. The
runner does not reset configuration, views, keybindings, or `package.loaded`
between cases. Keep tests independent:

- Restore any configuration, globals, or functions you replace in cleanup hooks.
- Close documents, views, windows, processes, and audio objects you create.
- Use unique temporary paths and remove fixtures afterward; never overwrite a
  real project file or use personal documents as fixtures.
- Require dependencies explicitly instead of depending on a previous test to
  load them.

When a case passes alone but fails in the full suite, check for shared state or
missing cleanup before adding delays or weakening assertions.

## Asynchronous Tests

Cases and hooks can call `coroutine.yield(seconds)` to let the editor loop run.
This is useful for background tasks, UI layout, filesystem events, and process
output. The test runner uses editor coroutines, not a separate OS thread for each
case.

Wait for an observable condition with a deadline instead of sleeping for an
assumed amount of time:

```lua title="tests/async.lua"
local core = require "core"
local test = require "core.test"

test.test("waits for an editor coroutine", function()
  local completed = false
  core.add_thread(function()
    completed = true
  end)

  local deadline = system.get_time() + 2
  while not completed do
    test.ok(system.get_time() < deadline, "editor task did not finish")
    coroutine.yield(0.01)
  end
  test.ok(completed)
end)
```

Make assertions about asynchronous results in the test callback. An error raised
in an unrelated editor coroutine is not automatically a failure of the waiting
test. Avoid blocking the editor loop with `system.sleep` or an unbounded busy
loop. There is no built-in per-case timeout; add deadlines to waits and use an
external process timeout for potentially blocking integration or stress tests.

## Skipping Tests

Use skips for explicit requirements, not to hide regressions. Include a reason
so the report explains which coverage was unavailable:

```lua title="tests/platform.lua"
local common = require "core.common"
local test = require "core.test"

test.test("recognizes an absolute Windows path", function()
  test.skip_if(PLATFORM ~= "Windows", "Windows path syntax is required")
  test.ok(common.is_absolute_path("C:\\project\\main.lua"))
end)

test.skip("records from a real microphone", "requires a physical test device")
```

`test.skip_if(condition, reason)` skips the current case when the condition is
truthy. `test.skip_now(reason)` skips it unconditionally, including from a setup
hook. Cleanup still runs for these runtime skips. `test.skip(name, reason)`
registers a skipped case without a callback.

## Run Tests From Lua

Plugins and custom scripts can start a run through `test.run(path, options)`.
It returns a runner immediately, or `nil` and an error if it cannot start. The
runner's `status` begins as `"running"` and becomes `"passed"`, `"failed"`, or
`"error"`. Results are available after completion, not immediately after calling
`test.run`.

For example, this script streams results and exits with a summary:

```lua title="run-tests.lua"
local core = require "core"
local test = require "core.test"

local runner, err = test.run(system.absolute_path("tests"), {
  on_result = function(item)
    test.report_item(item)
  end,
  on_complete = function(results, run_err)
    if not results then
      print(run_err)
      core.quit(true, 1)
      return
    end
    test.report(results, {
      show_items = false,
      quit_on_finish = true
    })
  end
})
assert(runner, err)
```

Run this script from the directory containing `tests`:

```sh
pragtical run -n run-tests.lua
```

The `run` command needs `-n` here so it does not quit before the asynchronous
tests finish. The completion callback above handles quitting instead. This is
different from `pragtical test`, which already waits for its run to complete.

`on_result(item, file_results)` receives each completed case and its file's
current totals. `on_complete(results, err, runner)` receives the final state.
Results include `total`, `passed`, `failed`, `skipped`, `duration`, per-file
results, and individual items with names, status, duration, and failure or skip
messages.

See the [core.test API](/docs/api/core.test) for all assertions, callbacks, and
result fields. The repository's
[runner tests](https://github.com/pragtical/pragtical/blob/master/scripts/lua/tests/runner.lua)
and [module tests](https://github.com/pragtical/pragtical/tree/master/scripts/lua/tests)
provide more examples.
