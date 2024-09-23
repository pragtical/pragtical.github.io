---
sidebar_position: 11
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# system

Utilites for managing current window, files and more.

## system.fileinfo

### modified

```lua
(field) modified: number
```

A timestamp in seconds.

---

### size

```lua
(field) size: number
```

Size in bytes.

---

### symlink

```lua
(field) symlink: boolean
```

The directory is a symlink. This field is only set on Linux and on directories.

---

### type

```lua
(field) type: "dir"|"file"
```

Type of file

---

## absolute_path

```lua
function system.absolute_path(path: string)
  -> abspath: string?
```

Converts a relative path from current directory to the absolute one.

---

## chdir

```lua
function system.chdir(path: string)
```

Change the current directory path which affects relative file operations.
This function raises an error if the path doesn't exists.

---

## clear_ime

```lua
function system.clear_ime()
```

Clears any ongoing composition on the IME

---

## exec

```lua
function system.exec(command: string)
```

Similar to os.execute() but does not return the exit status of the
executed command and executes the process in a non blocking way by
forking it to the background.
Note: Do not use this function, use the Process API instead.

@*param* `command` — The command to execute.

---

## ftruncate

```lua
function system.ftruncate(file: file*, length?: integer)
  -> success: boolean
  2. message: string?
```

Truncates a file to a set length.

@*param* `file` — A file handle returned by io.open().

@*param* `length` — Number of bytes to truncate to. Defaults to 0.

@*return* `success` — True if the operation suceeded, false otherwise

@*return* `message` — An error message if the operation failed.

---

## fuzzy_match

```lua
function system.fuzzy_match(haystack: string, needle: string, file: boolean)
  -> score: integer
```

Generates a matching score depending on how well the value of the
given needle compares to that of the value in the haystack.

@*param* `file` — Reverse the algorithm to prioritize the end

of the haystack, eg: with a haystack "/my/path/to/file" and a needle
"file", will get better score than with this option not set to true.

---

## get_clipboard

```lua
function system.get_clipboard()
  -> string
```

Retrieve the text currently stored on the clipboard.

---

## get_file_info

```lua
function system.get_file_info(path: string)
  -> info: system.fileinfo|nil
  2. message: string?
```

Get details about a given file or path.

@*param* `path` — Can be a file or a directory path


@*return* `info` — Path details or nil if empty or error.

@*return* `message` — Error message in case of error.

---

## get_fs_type

```lua
function system.get_fs_type(path: string)
  -> "ext2/ext3"|"fuse"|"nfs"|"ntfs"|"ramfs"...(+4)
```

Gets the filesystem type of a path.
Note: This only works on Linux.

@*param* `path` — Can be path to a directory or a file



```lua
return #1:
    | "ext2/ext3"
    | "nfs"
    | "fuse"
    | "smb"
    | "smb2"
    | "reiserfs"
    | "tmpfs"
    | "ramfs"
    | "ntfs"
```

---

## get_primary_selection

```lua
function system.get_primary_selection()
  -> string
```

Retrieve the text currently stored in the primary selection.

---

## get_process_id

```lua
function system.get_process_id()
  -> integer
```

Get the process id of pragtical itself.

---

## get_scale

```lua
function system.get_scale(window: renwindow)
  -> scale: number
```

Retrieve current system scale for the given window. When the SDL renderer
is enabled this function always returns 1 since scaling is peformed internally.

---

## get_time

```lua
function system.get_time()
  -> number
```

Get amount of iterations since the application was launched
also known as SDL_GetPerformanceCounter() / SDL_GetPerformanceFrequency()

---

## get_window_mode

```lua
function system.get_window_mode(window: renwindow)
  -> mode: "fullscreen"|"maximized"|"minimized"|"normal"
```

Retrieve the window mode.



```lua
mode:
    | "normal"
    | "minimized"
    | "maximized"
    | "fullscreen"
```

---

## get_window_size

```lua
function system.get_window_size(window: renwindow)
  -> width: number
  2. height: number
  3. x: number
  4. y: number
```

Get the size and coordinates of the window.

---

## getcwd

```lua
function system.getcwd()
  -> directory: string
```

Get the current working directory.

@*return* `directory` — Current working directgory.

---

## list_dir

```lua
function system.list_dir(path: string)
  -> list: table|nil
  2. message: string?
```

Gets a list of files and directories for a given path.


@*return* `list` — List of directories or nil if empty or error.

@*return* `message` — Error message in case of error.

---

## load_native_plugin

```lua
function system.load_native_plugin(name: string, path: string)
  -> nargs: number
```

Loads a lua native module using the default Lua API or pragtical native plugin API.
Note: Never use this function directly.

@*param* `name` — the name of the module

@*param* `path` — the path to the shared library file

@*return* `nargs` — the return value of the entrypoint

---

## mkdir

```lua
function system.mkdir(directory_path: string)
  -> created: boolean
  2. message: string?
```

Create a new directory, note that this function doesn't recursively
creates the directories on the given path.


@*return* `created` — True on success or false on failure.

@*return* `message` — The error message if the operation failed.

---

## path_compare

```lua
function system.path_compare(path1: string, type1: "dir"|"file", path2: string, type2: "dir"|"file")
  -> compare_result: boolean
```

Compares two paths in the order used by TreeView.

@*return* `compare_result` — True if path1 \< path2

```lua
type1:
    | "file" -- It is a file.
    | "dir" -- It is a directory.

type2:
    | "file" -- It is a file.
    | "dir" -- It is a directory.
```

---

## poll_event

```lua
function system.poll_event()
  -> type: string
  2. arg1: any
  3. arg2: any
  4. arg3: any
  5. arg4: any
```

Core function used to retrieve the current event been triggered by SDL.

The following is a list of event types emitted by this function and
the arguments for each of them if applicable.

Window events:
 * "quit"
 * "displaychanged" -\> idx
 * "moved" -\> x, y
 * "resized" -\> width, height (in points)
 * "exposed"
 * "minimized"
 * "maximized"
 * "restored"
 * "focuslost"

File events:
 * "filedropped" -\> filename, x, y

Keyboard events:
 * "keypressed" -\> key_name
 * "keyreleased" -\> key_name
 * "textinput" -\> text
 * "textediting" -\> text, start, length

Mouse events:
 * "mousepressed" -\> button_name, x, y, amount_of_clicks
 * "mousereleased" -\> button_name, x, y
 * "mousemoved" -\> x, y, relative_x, relative_y
 * "mousewheel" -\> y, x

Touch events:
 * "touchpressed" -\> x, y, finger_id
 * "touchreleased" -\> x, y, finger_id
 * "touchmoved" -\> x, y, distance_x, distance_y, finger_id

---

## raise_window

```lua
function system.raise_window(window: renwindow)
```

Raise the main window and give it input focus.
Note: may not always be obeyed by the users window manager.

---

## rmdir

```lua
function system.rmdir(path: string)
  -> success: boolean
  2. message: string?
```

Deletes an empty directory.

@*return* `success` — True if the operation suceeded, false otherwise

@*return* `message` — An error message if the operation failed

---

## set_clipboard

```lua
function system.set_clipboard(text: string)
```

Set the content of the clipboard.

---

## set_cursor

```lua
function system.set_cursor(type: string|"arrow"|"hand"|"ibeam"|"sizeh"...(+1))
```

Change the cursor type displayed on screen.


```lua
type:
    | "arrow"
    | "ibeam"
    | "sizeh"
    | "sizev"
    | "hand"
```

---

## set_primary_selection

```lua
function system.set_primary_selection(text: string)
```

Set the content of the primary selection.

---

## set_text_input_rect

```lua
function system.set_text_input_rect(x: number, y: number, width: number, height: number)
```

Sets the position of the IME composition window.

---

## set_window_bordered

```lua
function system.set_window_bordered(bordered: boolean)
```

Toggle between bordered and borderless.

---

## set_window_hit_test

```lua
function system.set_window_hit_test(title_height?: number, controls_width?: number, resize_border?: number)
```

When then window is run borderless (without system decorations), this
function allows to set the size of the different regions that allow
for custom window management.
To disable custom window management, call this function without any
arguments

@*param* `title_height` — Height of the window decoration

@*param* `controls_width` — Width of window controls (maximize,minimize and close buttons, etc).

@*param* `resize_border` — The amount of pixels reserved for resizing

---

## set_window_mode

```lua
function system.set_window_mode(window: renwindow, mode: "fullscreen"|"maximized"|"minimized"|"normal")
```

Change the window mode.


```lua
mode:
    | "normal"
    | "minimized"
    | "maximized"
    | "fullscreen"
```

---

## set_window_opacity

```lua
function system.set_window_opacity(window: renwindow, opacity: number)
  -> success: boolean
```

Change the opacity (also known as transparency) of the window.

@*param* `opacity` — A value from 0.0 to 1.0, the lower the value

the less visible the window will be.

@*return* `success` — True if the operation suceeded.

---

## set_window_size

```lua
function system.set_window_size(window: renwindow, width: number, height: number, x: number, y: number)
```

Sets the size and coordinates of the window.

---

## set_window_title

```lua
function system.set_window_title(window: renwindow, title: string)
```

Change the window title.

---

## setenv

```lua
function system.setenv(key: string, val: string)
  -> ok: boolean
```

Sets an environment variable.
The converse of os.getenv.

@*return* `ok` — True if call succeeded

---

## show_fatal_error

```lua
function system.show_fatal_error(title: string, message: string)
```

Opens a message box to display an error message.

---

## sleep

```lua
function system.sleep(seconds: number)
```

Sleep for the given amount of seconds.

@*param* `seconds` — Also supports fractions of a second, eg: 0.01

---

## wait_event

```lua
function system.wait_event(timeout?: number)
  -> status: boolean
```

Wait until an event is triggered.

@*param* `timeout` — Amount of seconds, also supports fractions

of a second, eg: 0.01. If not provided, waits forever.

@*return* `status` — True on success or false if there was an error or if no event was received.

---

## window_has_focus

```lua
function system.window_has_focus(window: renwindow)
  -> boolean
```

Check if the window currently has focus.

---

