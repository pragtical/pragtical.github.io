---
sidebar_position: 2
description: Learn how to interact with the OS, such
              as reading and writing to the clipboard,
              setting window properties and getting
              high-resolution time.
---

# Interacting with the OS

This is where Pragtical's Lua code interact with its underlying C engine.

## Using the System API

There are many functions that belong to this API; not all are necessary for
plugin development.
As such, we'll ignore them here and only document the useful ones.

### Clipboard

`system.set_clipboard(text)` offers plain text, and `system.get_clipboard()`
reads text or returns `nil` when none is available:

```lua
system.set_clipboard("Copied from Pragtical")
local text = system.get_clipboard()
```

For other formats, inspect `system.get_clipboard_mime_types()` and pass a MIME
type to `get_clipboard`. Raw reads preserve binary bytes and their length.
`set_clipboard(data, mime_type)` offers data under one type; a table of MIME
types offers the same payload under each type. Arbitrary format support depends
on the operating system and SDL clipboard backend.

```lua
for _, mime in ipairs(system.get_clipboard_mime_types() or {}) do
  print(mime)
end

system.set_clipboard('{"kind":"example"}', "application/json")
local data = system.get_clipboard("application/json")
```

The API transfers bytes; it does not encode an image or convert file formats
for you. For `text/uri-list`, use `common.uri_list_to_paths()` rather than
splitting or percent-decoding the payload by hand. The matching helpers
`common.path_to_uri()` and `common.uri_to_path()` convert individual paths and
file URIs. Plain document paste uses URI-list paths when no text payload is
available; this is not a universal native file-list API.

See the [System API](/docs/api/system#get_clipboard) and
[Common API](/docs/api/core.common#uri_list_to_paths) for format details.

### File / Directory operations

These functions deal with files, directories and paths.

```lua
-- Returns a list of files and directories in a directory.
function system.list_dir(path: string): {string}, string end
-- Creates a new directory.
function system.mkdir(path: string): boolean, string end
-- Removes a directory.
function system.rmdir(path: string): boolean string end
-- Changes the current working directory (equivalent to the `cd` command)
function system.chdir(path: string): () end
-- Resolves the input path (removing all '.' and '..') into an absolute path.
function system.absolute_path(path: string): () end

-- Types of paths
local enum FileType
  "file"
  "dir"
end

-- The information for a path
local record FileInfo
  modified: number
  size: number
  type: FileType
  symlink: boolean
end

-- Returns information for a file or a directory.
function system.get_file_info(path: string): FileInfo, string end
```

`system.get_file_info()` returns a table with the following properties:

- `modified`: Modification time in seconds (UNIX timestamp).
- `size`: Size of the file in bytes.
- `type`: Type of the path (Can be `file` or `dir`).
- `symlink`: The directory is a symlink (Only set on Linux and on directories).

All the functions listed above except `system.chdir()` will return `nil`
followed by an error message when an error occurred.
`system.chdir()` will throw an error if an error occurred.

**Examples:**

```lua
-- DO NOT RUN THIS CODE!
-- the code and its outputs are purely for demonstration only,
-- and will not reflect your actual usage.
local dir = "../pragtical"
local dir_resolved = system.absolute_path(dir)
-- prints:
-- /home/user/gh/pragtical
print(dir_resolved)

-- prints:
-- .git => dir
-- docs => dir
-- .editorconfig => file
-- LICENSE => file
-- ...
-- pragtical => file
for i, d in ipairs(system.list_dir(dir_resolved)) do
  local info = system.get_file_info(dir_resolved .. "/" .. d)
  print(d .. " => " .. info.type)
end

-- create some directories
-- this will not work because system.mkdir() doesn't create directories
-- recursively, just like `mkdir` command without the `-p` option.
-- prints:
-- false   No such file or directory
print(system.mkdir(dir_resolved .. "/1/2"))

-- these will work
-- prints:
-- true
print(system.mkdir(dir_resolved .. "/1"))
-- prints:
-- true
print(system.mkdir(dir_resolved .. "/1/2"))

-- system.rmdir() does not support removing non-empty dirs, so
-- this will not work and print an error
-- prints:
-- false   Directory not empty
print(system.rmdir(dir_resolved .. "/1"))

-- instead, you should try to remove them recursively, making sure that each
-- directory is empty
-- prints:
-- true
print(system.rmdir(dir_resolved .. "/1/2"))
-- prints:
-- true
print(system.rmdir(dir_resolved .. "/1"))
```

### Timing

`system.get_time()` returns time in seconds since Pragtical started.
It is a high-precision alternative to `os.time()`.

```lua
function system.get_time(): number end
```

**Examples:**

```lua
-- prints:
-- 30148.079763237
print(system.get_time())
```

## Window manipulation

Window helpers take a `renwindow` as their first argument. Use `core.window`
for the editor window; do not omit it or pass a width in its place.

```lua
local core = require "core"
system.set_window_mode(core.window, "normal")
system.set_window_size(core.window, 1280, 800, 80, 80)
local width, height, x, y = system.get_window_size(core.window)
local focused = system.window_has_focus(core.window)
```

Modes are `"normal"`, `"maximized"`, `"minimized"`, and `"fullscreen"`.
`get_window_size` returns logical width, height, x and y as separate results.
For renderer-pixel dimensions, use `core.window:get_size()`. This distinction
matters on scaled displays and when capturing a window with `renderer.to_canvas`.

`system.set_window_opacity(core.window, opacity)` accepts a value from 0 to 1
and returns whether the platform accepted it. `set_window_title` and
`set_window_bordered` also take the target window first. The editor manages
its own title and borderless decorations, so normal plugins should leave
those policies to core and configuration.

`system.set_window_hit_test(window, title_height, controls_width, resize_border,
interactive_rect)` defines custom decoration regions in renderer coordinates.
The optional `{ x, y, w, h }` rectangle keeps interactive title-bar contents
out of the drag region. Resize regions are inactive while maximized or
fullscreen. Calling it with only the window disables custom hit testing.

See the [System API](/docs/api/system) and [Window API](/docs/api/renwindow)
for complete signatures, native file dialogs, and renderer information.

## Miscellaneous

`system.exec()` runs a command in the background.
It is useful if you just want to run a program and doesn't care about its
output and exit code.
If you want more features, consider using the [Process API][1].

`system.fuzzy_match()` generates a score for sorting text based on relevance.

```lua
function system.exec(command: string): () end
function system.fuzzy_match(haystack: string,
                            needle:   string,
                            file:     boolean): number
end
```

`system.exec()` accepts a string containing a command to run.
This command will be run as `system("<command> &")` on POSIX platforms and
`cmd /c "<command>"` on Windows, so make sure that the command is escaped
properly.

`system.fuzzy_match()` takes in a `haystack` (a possible match) and a `needle`
(the string to search) to generate a similarity score.
If the score is 1, both strings are identical.
When the third argument is `true`, the matching will be done backwards as this
is more suitable for matching paths.


[1]: child-processes.md
