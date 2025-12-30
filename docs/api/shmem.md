---
sidebar_position: 13
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# shmem

Functionality that allows to share data between processes.

## open

```lua
function shmem.open(namespace: string, capacity: integer)
  -> shmem|nil
  2. errmsg: string
```

Open a shared memory container.

---

## __pairs

```lua
(method) shmem:__pairs()
  -> function
```

Implements the pairs metamethod for easy traversal of elements.

---

## capacity

```lua
(method) shmem:capacity()
  -> integer
```

Maximum amount of elements the shared memory container can store.

---

## clear

```lua
(method) shmem:clear()
```

Remove all elements from the shared memory container.

---

## get

```lua
(method) shmem:get(name_or_index: string|integer)
  -> data: string?
```

Retrieve the element data from the shared memory container.

---

## remove

```lua
(method) shmem:remove(name: string)
```

Removes the specified element from the shared memory container.

---

## set

```lua
(method) shmem:set(name: string, value: string)
  -> updated: boolean
```

Adds or edits an existing element on the shared memory container.

---

## size

```lua
(method) shmem:size()
  -> integer
```

The amount of elements residing on the shared memory container.

---

