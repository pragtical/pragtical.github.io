---
sidebar_position: 23
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.config

Configuration options.

```lua
local config = require "core.config"
```

## always_show_tabs

```lua
(field) always_show_tabs: boolean
```

Shows/hides the tab bar when there is only one tab open.

The tab bar is always shown by default.

---

## animate_drag_scroll

```lua
(field) animate_drag_scroll: boolean
```

Enables/disables transitions when scrolling with the scrollbar.
When enabled, the scrollbar will have inertia and slowly move towards the cursor.
Otherwise, the scrollbar will immediately follow the cursor.

Defaults to false.

---

## animation_rate

```lua
(field) animation_rate: number
```

The rate of all transitions.

Defaults to 1.

---

## auto_fps

```lua
(field) auto_fps: boolean
```

Keep the maximum FPS locked to current display refresh rate.

Defaults to true.

---

## blink_period

```lua
(field) blink_period: number
```

The caret's blinking period, in seconds.

Defaults to 1.2.

---

## borderless

```lua
(field) borderless: boolean
```

Disables system-drawn window borders.

When set to true, Pragtical draws its own window decorations,
which can be useful for certain setups.

Defaults to false.

---

## dirmonitor_backend

```lua
(field) dirmonitor_backend: unknown
```

Specifies the dirmonitor backend to be used or nil
to use the first available one.

Defaults to nil

---

## disable_blink

```lua
(field) disable_blink: boolean
```

Disables caret blinking.

Defaults to false.

---

## disabled_transitions

```lua
(field) disabled_transitions: table
```

Enable/disable individual transitions.
These values are overriden by `config.transitions`.

---

## draw_stats

```lua
(field) draw_stats: boolean|"uncapped"
```

Draw the current FPS, the average frame time, and the maximum time that
coroutines have to run per frame without affecting the rendering process
plus the total amount of running coroutines. If set to 'uncapped' the system
will draw at the maximum speed per second for benchmarking purposes.

Defaults to false.

---

## draw_whitespace

```lua
(field) draw_whitespace: boolean
```

Draws whitespaces as dots.
This option is deprecated.
Please use the drawwhitespace plugin instead.

---

## file_size_limit

```lua
(field) file_size_limit: number
```

The file size limit, in megabytes.
Files larger than this size will not be shown in the file picker.

Defaults to 10.

---

## force_scrollbar_status

```lua
(field) force_scrollbar_status: "contracted"|"expanded"|false
```

Controls whether the DocView scrollbar is always shown or hidden.
This option does not affect other View's scrollbars.

Defaults to false.

---

## fps

```lua
(field) fps: number
```

The maximum frame rate of Pragtical.
Note that setting this value to the screen's refresh rate
does not necessarily eliminates screen tearing.

Defaults to current display refresh rate or 60.

---

## hide_tabs

```lua
(field) hide_tabs: boolean
```

Always hide tabs even if multiple documents are open.

The default is false.

---

## highlight_current_line

```lua
(field) highlight_current_line: "no_selection"|true|false
```

Highlights the current line.

The default is "no_selection".

---

## ignore_files

```lua
(field) ignore_files: string[]
```

A list of files and directories to ignore.
Each element is a Lua pattern, where patterns ending with a forward slash
are recognized as directories while patterns ending with an anchor ("$") are
recognized as files.

---

## images_background_color

```lua
(field) images_background_color: renderer.color
```

The color used for the background of transparent images when the
background mode is set to solid.

Defaults to "#ffffff".

---

## images_background_mode

```lua
(field) images_background_mode: "grid"|"none"|"solid"
```

The type of background drawn behind the images.

Defaults to "grid".

---

## indent_size

```lua
(field) indent_size: number
```

The number of spaces each level of indentation represents.

The default is 2.

---

## keep_newline_whitespace

```lua
(field) keep_newline_whitespace: boolean
```

Do not remove whitespaces when advancing to the next line.

Defaults to false.

---

## line_endings

```lua
(field) line_endings: "crlf"|"lf"
```

Default line endings for new files.

Defaults to `crlf` (`\r\n`) on Windows and `lf` (`\n`) on everything else.

---

## line_height

```lua
(field) line_height: number
```

The spacing between each line of text.

The default is 120% of the height of the text (1.2).

---

## line_limit

```lua
(field) line_limit: number
```

Maximum number of characters per-line for the line guide.

Defaults to 80.

---

## log_slow_threads

```lua
(field) log_slow_threads: boolean
```

Quiet logging of threads that are taking longer than the maximum time
allowed on a per frame iteration basis. Enable only when troubleshooting
performance issues, since enabling this may degrade performance.

Defaults to false.

---

## max_clicks

```lua
(field) max_clicks: number
```

Maximum number of clicks recognized by Pragtical.

Defaults to 3.

---

## max_log_items

```lua
(field) max_log_items: number
```

Maximum number of log items that will be stored.
When the number of log items exceed this value, old items will be discarded.

Defaults to 800.

---

## max_tabs

```lua
(field) max_tabs: number
```

The maximum number of tabs shown at a time.

The default is 8.

---

## max_undos

```lua
(field) max_undos: number
```

The maximum number of undo steps per-document.

The default is 10000.

---

## max_visible_commands

```lua
(field) max_visible_commands: integer
```

The maximum number of entries shown at a time in the command palette.

The default is 10.

---

## max_visited_files

```lua
(field) max_visited_files: integer
```

The maximum amount of recent files to keep on history.

The default is 5.

---

## message_timeout

```lua
(field) message_timeout: number
```

The timeout, in seconds, before a message dissapears from StatusView.

Defaults to 5.

---

## mouse_wheel_scroll

```lua
(field) mouse_wheel_scroll: number
```

The number of pixels scrolled per-step.

Defaults to 50 * SCALE.

---

## non_word_chars

```lua
(field) non_word_chars: string
```

A list of characters that delimits a word.

The default is ``" \t\n/\\()\"':,.;\<\>~!@#$%^&*|+=\[\]\{\}`?-"``

---

## plugins

```lua
(field) plugins: table
```

A table containing configuration for all the plugins.

This is a metatable that automaticaly creates a minimal
configuration when a plugin is initially configured.
Each plugins will then call `common.merge()` to get the finalized
plugin config.
Do not use raw operations on this table.

---

## scroll_context_lines

```lua
(field) scroll_context_lines: integer
```

Minimum number of lines to keep visible above and below the cursor
when scrolling the document.

The default is 1

---

## scroll_past_end

```lua
(field) scroll_past_end: boolean
```

Enables/disables scrolling past the end of a document.

Defaults to true.

---

## select_add_next_no_case

```lua
(field) select_add_next_no_case: boolean
```

Perform case insensitive next word selection.

The default is false.

---

## show_line_numbers

```lua
(field) show_line_numbers: boolean
```

Show or hide the line numbers.

The default is true

---

## skip_plugins_version

```lua
(field) skip_plugins_version: boolean
```

Disables plugin version checking.
Do not change this unless you know what you are doing.

Defaults to false.

---

## stonks

```lua
(field) stonks: boolean|{ font: renderer.font, icon: string }|nil
```

Increases the performance of the editor and its user.
Do not change this unless you know what you are doing.

Defaults to true.

---

## symbol_pattern

```lua
(field) symbol_pattern: string
```

Lua pattern used to find symbols when advanced syntax highlighting
is not available.
This pattern is also used for navigation, e.g. move to next word.

The default pattern matches all letters, followed by any number
of letters and digits.

---

## tab_close_button

```lua
(field) tab_close_button: boolean
```

Shows/hides the close buttons on tabs.
When hidden, users can close tabs via keyboard shortcuts or commands.

Defaults to true.

---

## tab_type

```lua
(field) tab_type: "hard"|"soft"
```

The type of indentation.

The default is "soft" (spaces).

---

## transitions

```lua
(field) transitions: boolean
```

Enables/disables all transitions.

Defaults to true.

---

## undo_merge_timeout

```lua
(field) undo_merge_timeout: number
```

The timeout, in seconds, before several consecutive actions
are merged as a single undo step.

The default is 0.3 seconds.

---

## use_system_file_picker

```lua
(field) use_system_file_picker: boolean
```

Use the system file picker instead of the command palette
when opening files.

Defaults to false if no sandbox is detected.

---

## config.highlightlinetype

```lua
config.highlightlinetype:
    | true -- Always highlight the current line.
    | false -- Never highlight the current line.
    | "no_selection" -- Highlight the current line if no text is selected.
```

## config.scrollbartype

```lua
config.scrollbartype:
    | "expanded" -- A thicker scrollbar is shown at all times.
    | "contracted" -- A thinner scrollbar is shown at all times.
    | false -- The scrollbar expands when the cursor hovers over it.
```

