---
sidebar_position: 2
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# bit

Mike Pall bit operations library included on every Lua runtime for
consistency with the patch https://github.com/LuaJIT/LuaJIT/issues/384
applied for newer Lua versions support.

See: https://bitop.luajit.org/

## arshift

```lua
function bit.arshift(x: integer, n: integer)
  -> y: integer
```

Returns either the bitwise logical arithmetic right-shift of its first
argument by the number of bits given by the second argument.

---

## band

```lua
function bit.band(x: any, n: any)
  -> unknown
```

---

## bnot

```lua
function bit.bnot(x: any)
  -> integer
```

---

## bor

```lua
function bit.bor(x: any, n: any)
  -> unknown
```

---

## bswap

```lua
function bit.bswap(x: any)
  -> unknown
```

---

## bxor

```lua
function bit.bxor(x: any, n: any)
  -> unknown
```

---

## lshift

```lua
function bit.lshift(x: any, n: any)
  -> unknown
```

---

## rol

```lua
function bit.rol(x: any, n: any)
  -> unknown
```

---

## ror

```lua
function bit.ror(x: any, n: any)
  -> unknown
```

---

## rshift

```lua
function bit.rshift(x: any, n: any)
  -> unknown
```

---

## tobit

```lua
function bit.tobit(x: any)
  -> integer
```

---

## tohex

```lua
function bit.tohex(x: any)
  -> string
```

---

