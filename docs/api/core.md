---
sidebar_position: 18
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core

Core functionality.

```lua
local core = require "core"
```

## active_file_dialogs

```lua
(field) active_file_dialogs: table
```

---

## active_view

```lua
(field) active_view: any
```

---

## background_threads

```lua
(field) background_threads: integer
```

---

## blink_start

```lua
(field) blink_start: number|unknown
```

---

## blink_timer

```lua
(field) blink_timer: number|unknown
```

---

## clip_rect_stack

```lua
(field) clip_rect_stack: table
```

---

## co_max_time

```lua
(field) co_max_time: number
```

The maximum time coroutines have to run on a per frame iteration basis.
This value is automatically updated on each core.step().

---

## collect_garbage

```lua
(field) collect_garbage: boolean
```

---

## command_view

```lua
(field) command_view: core.commandview
```

Command palette and input prompt view.
Provides autocomplete, suggestions, and command execution interface.

---

## cursor_change_req

```lua
(field) cursor_change_req: any
```

---

## cursor_clipboard

```lua
(field) cursor_clipboard: table
```

---

## cursor_clipboard_whole_line

```lua
(field) cursor_clipboard_whole_line: table
```

---

## docs

```lua
(field) docs: table
```

---

## fps

```lua
(field) fps: number
```

The actual maximum frames per second that can be rendered.

---

## frame_start

```lua
(field) frame_start: number|unknown
```

---

## init_working_dir

```lua
(field) init_working_dir: string
```

---

## last_active_view

```lua
(field) last_active_view: any
```

---

## log_items

```lua
(field) log_items: table
```

log functions depend on config so initialize after loading config

---

## nag_view

```lua
(field) nag_view: core.nagview
```

Modal dialog view for confirmations and alerts.
Displays a message with buttons, dims the background, and captures focus.
Multiple dialogs queue automatically.

---

## next_active_view

```lua
(field) next_active_view: any
```

---

## plugin_list

```lua
(field) plugin_list: table
```

---

## prev_window_mode

```lua
(field) prev_window_mode: any
```

---

## previous_find

```lua
(field) previous_find: table
```

---

## previous_replace

```lua
(field) previous_replace: table
```

---

## project_module_loaded

```lua
(field) project_module_loaded: boolean
```

---

## projects

```lua
(field) projects: table
```

---

## quit_request

```lua
(field) quit_request: boolean
```

---

## recent_projects

```lua
(field) recent_projects: table
```

---

## redraw

```lua
(field) redraw: boolean
```

---

## restart_request

```lua
(field) restart_request: boolean
```

---

## root_view

```lua
(field) root_view: core.rootview
```

We load core views before plugins that may need them.

---

## status_view

```lua
(field) status_view: core.statusview
```

Status bar with customizable items displaying document info and system status.
Access the global instance via `core.status_view`.

---

## threads

```lua
(field) threads: table
```

---

## title_view

```lua
(field) title_view: core.titleview
```

---

## visited_files

```lua
(field) visited_files: table
```

---

## window

```lua
(field) window: number
```

---

## window_mode

```lua
(field) window_mode: any
```

---

## window_size

```lua
(field) window_size: table
```

---

## window_title

```lua
(field) window_title: string
```

---

## core.ignore_file_rule

A pre-processed config.ignore_files entry.

### match_dir

```lua
(field) match_dir: boolean
```

Match directories only.

---

### pattern

```lua
(field) pattern: string
```

A lua pattern.

---

### use_path

```lua
(field) use_path: boolean
```

Match a full path including path separators, otherwise match filename only.

---

## add_background_thread

```lua
function core.add_background_thread(f: any, weak_ref: any, ...any)
  -> unknown
```

---

## add_plugins

```lua
function core.add_plugins(plugins: any)
```

Can be called from within plugins; don't insert things lower than your own priority.

---

## add_project

```lua
function core.add_project(project: any)
  -> unknown
```

---

## add_thread

```lua
function core.add_thread(f: any, weak_ref: any, ...any)
  -> unknown
```

---

## blink_reset

```lua
function core.blink_reset()
```

---

## compose_window_title

```lua
function core.compose_window_title(title: any)
  -> string
```

---

## configure_borderless_window

```lua
function core.configure_borderless_window()
```

---

## confirm_close_docs

```lua
function core.confirm_close_docs(docs: any, close_fn: any, ...any)
```

---

## current_project

```lua
function core.current_project(filename?: string)
  -> project: (core.project)?
  2. is_open: boolean
  3. belongs: boolean
```

Get project for currently opened DocView or given filename path.
If the given path does not belongs to any of the opened projects a new
project object will be created and returned using the directory of the
given filename path.

@*return* `project`

@*return* `is_open` — The returned project is open

@*return* `belongs` — The file belongs to the returned project

---

## custom_log

```lua
function core.custom_log(level: any, show: any, backtrace: any, fmt: any, ...any)
  -> table
```

---

## delete_temp_files

```lua
function core.delete_temp_files(dir: any)
```

---

## deprecation_log

```lua
function core.deprecation_log(kind: string)
```

Show deprecation notice once per `kind`.

---

## ensure_user_directory

```lua
function core.ensure_user_directory()
  -> boolean
  2. unknown
```

---

## error

```lua
function core.error(...any)
  -> table
```

---

## exit

```lua
function core.exit(quit_fn: any, force: any)
```

---

## get_ignore_file_rules

```lua
function core.get_ignore_file_rules()
  -> core.ignore_file_rule[]
```

Gets a list of pre-processed config.ignore_files patterns for usage in
combination of common.match_ignore_rule()

---

## get_log

```lua
function core.get_log(i: any)
  -> string
```

---

## get_plugin_details

```lua
function core.get_plugin_details(path: any)
  -> boolean|table|nil
```

---

## get_view_title

```lua
function core.get_view_title(view: any)
  -> string
```

---

## get_views_referencing_doc

```lua
function core.get_views_referencing_doc(doc: any)
  -> table
```

---

## init

```lua
function core.init()
```

---

## load_plugins

```lua
function core.load_plugins()
  -> boolean
  2. table
```

---

## log

```lua
function core.log(...any)
  -> table
```

---

## log_quiet

```lua
function core.log_quiet(...any)
  -> table
```

---

## normalize_to_project_dir

```lua
function core.normalize_to_project_dir(path: any)
```

---

## on_error

```lua
function core.on_error(err: any)
```

---

## on_event

```lua
function core.on_event(type: any, ...any)
  -> boolean
```

---

## open_directory_dialog

```lua
function core.open_directory_dialog(window: renwindow, callback: fun(status: "accept"|"cancel"|"error"|"unknown", result: string|string[]|nil), options?: system.dialogoptions.opendirectory)
```

Open the system directory picker.

Returns immediately.
The callback will be called with the result.

---

## open_doc

```lua
function core.open_doc(filename: any)
  -> unknown
```

---

## open_file

```lua
function core.open_file(filename: string)
  -> core.docview|core.imageview
```

Opens the given file path in the root view.
If the given file is a supported image, it will open it in the image viewer;
otherwise, it will open it as a normal text file.

@*param* `filename` — Path to the file to open

---

## open_file_dialog

```lua
function core.open_file_dialog(window: renwindow, callback: fun(status: "accept"|"cancel"|"error"|"unknown", result: string|string[]|nil), options?: system.dialogoptions.openfile)
```

Open the system file picker.

Returns immediately.
The callback will be called with the result.

---

## open_image

```lua
function core.open_image(filename: string)
  -> image_view: (core.imageview)?
```

---

## open_project

```lua
function core.open_project(project: any)
```

---

## parse_plugin_details

```lua
function core.parse_plugin_details(path: any, file: any, mod_version_regex: any, priority_regex: any)
  -> boolean|table
```

---

## pop_clip_rect

```lua
function core.pop_clip_rect()
```

---

## project_absolute_path

```lua
function core.project_absolute_path(path: any)
```

---

## push_clip_rect

```lua
function core.push_clip_rect(x: any, y: any, w: any, h: any)
```

---

## quit

```lua
function core.quit(force: any)
```

---

## reload_absolute_module

```lua
function core.reload_absolute_module(filename: any)
  -> boolean
  2. unknown|nil
```

---

## reload_module

```lua
function core.reload_module(name: any)
```

---

## remove_project

```lua
function core.remove_project(project: any, force: any)
  -> boolean|unknown
```

---

## request_cursor

```lua
function core.request_cursor(value: any)
```

---

## restart

```lua
function core.restart()
```

---

## root_project

```lua
function core.root_project()
  -> unknown
```

legacy interface

---

## run

```lua
function core.run()
```

---

## save_file_dialog

```lua
function core.save_file_dialog(window: renwindow, callback: fun(status: "accept"|"cancel"|"error"|"unknown", result: string|string[]|nil), options?: system.dialogoptions.savefile)
```

Open the system save file picker.

Returns immediately.
The callback will be called with the result.

---

## set_active_view

```lua
function core.set_active_view(view: any)
```

---

## set_project

```lua
function core.set_project(project: any)
  -> unknown
```

---

## set_visited

```lua
function core.set_visited(filename: any)
```

---

## show_title_bar

```lua
function core.show_title_bar(show: any)
```

---

## step

```lua
function core.step(next_frame_time: any)
  -> boolean
```

---

## temp_filename

```lua
function core.temp_filename(ext: any, dir: any)
  -> unknown
```

---

## try

```lua
function core.try(fn: any, ...any)
  -> boolean
  2. unknown
```

---

## warn

```lua
function core.warn(...any)
  -> table
```

---

## write_init_project_module

```lua
function core.write_init_project_module(init_filename: any)
```

---

