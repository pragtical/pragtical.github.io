---
sidebar_position: 3
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# diff

Functionality to generate the differences between two strings.

## diff.changes

### a

```lua
(field) a: string?
```

---

### b

```lua
(field) b: string?
```

---

### tag

```lua
(field) tag: "delete"|"equal"|"insert"|"modify"
```

---

## diff

```lua
function diff.diff(a: table<integer, string>, b: table<integer, string>)
  -> diff.changes[]
```

Generate the differences between two tables of strings.

---

## diff_iter

```lua
function diff.diff_iter(a: table<integer, string>, b: table<integer, string>)
  -> fun():diff.changes
```

Same as diff.diff(...) but in iterable mode.

---

## inline_diff

```lua
function diff.inline_diff(a: string, b: string)
  -> diff.changes[]
```

Generates the differences between two strings.

---

## split

```lua
function diff.split(str: string, mode?: "char"|"line")
  -> table<integer, string>
```

Split a string by the given mode ready for consumption by diff.diff(...).

```lua
mode:
    | "char"
    | "line"
```

---

