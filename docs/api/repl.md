---
sidebar_position: 11
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# repl

Cross-platform readline like functionality.

Usage Example:
```lua
local line, err = repl.input(prompt)
while line do
  if #line \> 0 then
    repl.add_history(line)
    repl.save_history(history) -- save every new line
  end
  line, err = repl.input(prompt)
end
if err then
  print('An error occurred: ' .. err)
end
```

## repl.completion

A repl completions list object

### add

```lua
(method) repl.completion:add(str: string)
```

Add a new string to the completions list.

---

## add_completion

```lua
function repl.add_completion(completions: repl.completion, str: string)
```

Adds string to the list of completions.
All functions return nil on error; functions that don't have an obvious
return value return true on success.

---

## add_history

```lua
function repl.add_history(line: string)
```

Adds line to the history list.

---

## clear_screen

```lua
function repl.clear_screen()
```

Clears the screen.

---

## input

```lua
function repl.input(prompt: any)
  -> line: string?
  2. errmsg: string?
```

Prompts for a line of input, using prompt as the prompt string.
Returns nil if no more input is available;
Returns nil and an error string if an error occurred.

---

## load_history

```lua
function repl.load_history(filename: string)
```

Loads the history list from filename.

---

## print_keycodes

```lua
function repl.print_keycodes()
```

Prints repl key codes. Primarly used for debugging.

---

## save_history

```lua
function repl.save_history(filename: string)
```

Saves the history list to filename.

---

## set_completion

```lua
function repl.set_completion(callback: fun(completion: repl.completion, str: string))
```

Sets the completion callback. This callback is called with two arguments:

 * A completions object. Use object:add or repl.add_completion to add a
   completion to this object.
 * The current line of input.

Example:
```lua
set_completion(function(completion,str)
  if str == 'h' then
    completion:add('help')
    completion:add('halt')
  end
end)
```

---

## set_history_max_len

```lua
function repl.set_history_max_len(length: integer)
```

Sets the history list size to length.

---

## set_multiline

```lua
function repl.set_multiline(multiline: boolean)
```

Enables multi-line mode if multiline is true, disables otherwise.

---

