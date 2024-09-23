---
sidebar_position: 45
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# plugins.projectsearch

```lua
local projectsearch = require "plugins.projectsearch"
```

## ResultsView

```lua
(field) ResultsView: plugins.projectsearch.resultsview
```

---

## plugins.projectsearch.resultsview

### apply_button

```lua
(field) apply_button: unknown
```

---

### brightness

```lua
(field) brightness: integer
```

---

### context

```lua
(field) context: string
```

---

### defer_draw

```lua
(field) defer_draw: boolean
```

---

### end_time

```lua
(field) end_time: unknown
```

---

### insensitive

```lua
(field) insensitive: any
```

---

### path

```lua
(field) path: any
```

---

### query

```lua
(field) query: any
```

---

### replaced

```lua
(field) replaced: boolean
```

---

### replacement

```lua
(field) replacement: any
```

---

### replacing

```lua
(field) replacing: boolean
```

---

### results_list

```lua
(field) results_list: widget.searchreplacelist
```

---

### scrollable

```lua
(field) scrollable: boolean
```

---

### search_type

```lua
(field) search_type: any
```

---

### searching

```lua
(field) searching: boolean
```

the search was completed

---

### start_time

```lua
(field) start_time: unknown
```

---

### total_files

```lua
(field) total_files: number
```

---

### total_files_processed

```lua
(field) total_files_processed: integer
```

---

### whole_word

```lua
(field) whole_word: any
```

---

### begin_replace

```lua
(method) plugins.projectsearch.resultsview:begin_replace()
```

Starts the replacement procedure and worker threads using
previously matched results.

---

### begin_search

```lua
(method) plugins.projectsearch.resultsview:begin_search(path?: string, text: string, search_type: "plain"|"regex", insensitive?: boolean, whole_word?: boolean)
```

Start the search procedure and worker threads.

```lua
search_type:
    | "plain"
    | "regex"
```

---

### draw

```lua
(method) plugins.projectsearch.resultsview:draw()
  -> boolean
```

---

### get_name

```lua
(method) plugins.projectsearch.resultsview:get_name()
  -> string
```

Text displayed on the application title and view tab.

---

### new

```lua
(method) plugins.projectsearch.resultsview:new(path: any, text: any, type: any, insensitive: any, whole_word: any, replacement: any)
```

Constructor

---

### open_selected_result

```lua
(method) plugins.projectsearch.resultsview:open_selected_result()
  -> boolean|nil
```

Opens a DocView of the user selected match.

---

### refresh

```lua
(method) plugins.projectsearch.resultsview:refresh()
```

Re-perform the search procedure using previous search options.

---

### update

```lua
(method) plugins.projectsearch.resultsview:update()
  -> boolean
```

---

## search_plain

```lua
function plugins.projectsearch.search_plain(text: string, path?: string, insensitive?: boolean, whole_word?: boolean, replacement?: string)
  -> (plugins.projectsearch.resultsview)?
```

Start a plain text search.

---

## search_regex

```lua
function plugins.projectsearch.search_regex(text: string, path?: string, insensitive?: boolean, whole_word?: boolean, replacement?: string)
  -> (plugins.projectsearch.resultsview)?
```

Start a regex search.

---

