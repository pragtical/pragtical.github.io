---
sidebar_position: 50
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.test

Utility helpers for declaring, running and reporting tests.

```lua
local test = require "core.test"
```

## core.test.context

Represents the execution context passed to hooks and test callbacks.

### file

```lua
(field) file: string
```

Absolute path of the loaded test file.

---

### relative_file

```lua
(field) relative_file: string
```

Path relative to the root passed to `test.run()`.

---

## core.test.file_result

Represents the aggregated results for a single test file.

### failed

```lua
(field) failed: integer
```

---

### items

```lua
(field) items: core.test.item_result[]
```

---

### passed

```lua
(field) passed: integer
```

---

### path

```lua
(field) path: string
```

Absolute path of the loaded test file.

---

### relative_path

```lua
(field) relative_path: string
```

Path relative to the root passed to `test.run()`.

---

### skipped

```lua
(field) skipped: integer
```

---

### total

```lua
(field) total: integer
```

---

## core.test.item_result

Represents a single reported test result.

### duration

```lua
(field) duration: number
```

Test execution time in seconds.

---

### full_name

```lua
(field) full_name: string
```

Fully qualified test name including parent suites.

---

### message

```lua
(field) message: string?
```

Failure or skip message.

---

### name

```lua
(field) name: string
```

Test case name without parent suite names.

---

### path

```lua
(field) path: string
```

Absolute path of the loaded test file.

---

### relative_path

```lua
(field) relative_path: string
```

Path relative to the root passed to `test.run()`.

---

### status

```lua
(field) status: "failed"|"passed"|"skipped"
```

---

## core.test.report_options

Options used when reporting test results.

### colorize

```lua
(field) colorize: (fun(text: string, color: string):string)?
```

---

### force_quit

```lua
(field) force_quit: boolean?
```

---

### quit

```lua
(field) quit: fun(force: boolean, exit_code?: integer)?
```

---

### quit_on_finish

```lua
(field) quit_on_finish: boolean?
```

---

### show_items

```lua
(field) show_items: boolean?
```

---

### write

```lua
(field) write: fun(message: string)?
```

---

## core.test.results

Represents the aggregated results for a test run.

### duration

```lua
(field) duration: number
```

Total execution time in seconds.

---

### failed

```lua
(field) failed: integer
```

---

### files

```lua
(field) files: core.test.file_result[]
```

---

### items

```lua
(field) items: core.test.item_result[]
```

---

### passed

```lua
(field) passed: integer
```

---

### root

```lua
(field) root: string
```

Root path that was discovered.

---

### skipped

```lua
(field) skipped: integer
```

---

### total

```lua
(field) total: integer
```

---

## core.test.run_options

Options used when running a test suite.

### on_complete

```lua
(field) on_complete: fun(results: core.test.results|nil, err: string|nil, runner: core.test.runner)?
```

---

### on_result

```lua
(field) on_result: fun(item: core.test.item_result, file_results: core.test.file_result)?
```

---

## core.test.runner

Represents an async test run started with `test.run()`.

### error

```lua
(field) error: string?
```

---

### path

```lua
(field) path: string
```

---

### results

```lua
(field) results: (core.test.results)?
```

Represents the aggregated results for a test run.

---

### status

```lua
(field) status: "error"|"failed"|"passed"|"running"
```

---

### thread

```lua
(field) thread: thread
```

Provides threading capabilities.

---

## core.test.status

```lua
core.test.status:
    | "passed"
    | "failed"
    | "skipped"
```

## after_each

```lua
function core.test.after_each(fn: fun(context: core.test.context))
```

Register a hook executed after every test in the current suite.

After hooks execute in reverse registration order.

---

## before_each

```lua
function core.test.before_each(fn: fun(context: core.test.context))
```

Register a hook executed before every test in the current suite.

---

## contains

```lua
function core.test.contains(container: string|table, value: any, message?: string)
```

Assert that a string or table contains a value.

---

## describe

```lua
function core.test.describe(name: string, fn: fun())
  -> suite: table
```

Create a named suite and register all tests declared within its callback.

Nested suites inherit `before_each()` and `after_each()` hooks from their
ancestors and contribute to the reported full test name.

---

## discover

```lua
function core.test.discover(path: string)
  -> files: string[]|nil
  2. errmsg: string?
```

Discover Lua test files inside the given path.

If `path` points to a file, it is returned when it has a `.lua` extension.
Directories are walked recursively and sorted lexicographically.

---

## equal

```lua
function core.test.equal(actual: <T>, expected: <T>, message?: string)
  -> <T>
```

Assert that two values are equal using Lua's `==` operator.

---

## error

```lua
function core.test.error(fn: fun(), expected?: string|fun(err: any):boolean, message?: string)
  -> err: any
```

Assert that a function raises an error.

When `expected` is a string it must be contained in the error text. When it
is a function it is called with the raised error and must return truthy.

---

## fail

```lua
function core.test.fail(message?: string, level?: integer)
```

Fail the current test.

---

## is_nil

```lua
function core.test.is_nil(value: any, message?: string)
```

Assert that a value is `nil`.

---

## it

```lua
function
```

---

## load_file

```lua
function core.test.load_file(path: string)
  -> root: table|nil
  2. errmsg: string?
```

Load a Lua test file and return its registered root suite.

---

## match

```lua
function core.test.match(value: string, pattern: string, message?: string, plain?: boolean)
  -> string
```

Assert that a string matches a pattern.

@*param* `plain` — Treat `pattern` as a plain substring.

---

## near

```lua
function core.test.near(actual: number, expected: number, delta?: number, message?: string)
  -> number
```

Assert that two numbers are within a given delta.

---

## no_error

```lua
function core.test.no_error(fn: fun():<T>, message?: string)
  -> <T>
```

Assert that a function completes without raising an error.

---

## not_equal

```lua
function core.test.not_equal(actual: any, expected: any, message?: string)
```

Assert that two values are not equal using Lua's `==` operator.

---

## not_nil

```lua
function core.test.not_nil(value: <T>, message?: string)
  -> <T>
```

Assert that a value is not `nil`.

---

## not_ok

```lua
function core.test.not_ok(value: any, message?: string)
```

Assert that a value is falsy.

---

## ok

```lua
function core.test.ok(value: <T>, message?: string)
  -> <T>
```

Assert that a value is truthy.

---

## report

```lua
function core.test.report(results: core.test.results, options?: core.test.report_options)
  -> success: boolean
```

Write a formatted report for a full test run.

---

## report_item

```lua
function core.test.report_item(item: core.test.item_result, options?: core.test.report_options)
```

Write a formatted line for a single test result item.

---

## run

```lua
function core.test.run(path: string, options?: core.test.run_options)
  -> runner: core.test.runner|nil
  2. errmsg: string?
```

Run the given test file or directory asynchronously.

The returned runner is updated as the background thread advances and the
optional callbacks in `options` are invoked as items complete.

---

## same

```lua
function core.test.same(actual: <T>, expected: <T>, message?: string)
  -> <T>
```

Assert that two values are deeply equal.

---

## skip

```lua
function core.test.skip(name: string, reason?: string)
  -> case: table
```

Register a skipped test case in the current suite.

---

## skip_if

```lua
function core.test.skip_if(condition: any, reason?: string)
```

Skip the current test when the given condition is truthy.

---

## skip_now

```lua
function core.test.skip_now(reason?: string)
```

Skip the current test immediately.

---

## test

```lua
function core.test.test(name: string, fn: fun(context: core.test.context))
  -> case: table
```

Register a test case in the current suite.

---

## type

```lua
function core.test.type(value: any, expected_type: string, message?: string)
  -> string
```

Assert that a value has the expected Lua type.

---

