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
function bit.band(x: integer, x2: integer, ...integer)
  -> y: integer
```

Returns the bitwise `and` of all of its arguments.

---

## bnot

```lua
function bit.bnot(x: integer)
  -> y: integer
```

Returns the bitwise `not` of its argument.

---

## bor

```lua
function bit.bor(x: integer, x2: integer, ...integer)
  -> y: integer
```

Returns the bitwise `or` of all of its arguments.

---

## bswap

```lua
function bit.bswap(x: integer)
  -> y: integer
```

Swaps the bytes of its argument and returns it. This can be used to
convert little-endian 32 bit numbers to big-endian 32 bit numbers or
vice versa.

---

## bxor

```lua
function bit.bxor(x: integer, x2: integer, ...integer)
  -> y: integer
```

Returns the bitwise `xor` of all of its arguments.

---

## lshift

```lua
function bit.lshift(x: integer, n: integer)
  -> y: integer
```

Returns either the bitwise logical left-shift of its first argument by the
number of bits given by the second argument.

---

## rol

```lua
function bit.rol(x: integer, n: integer)
  -> y: integer
```

Returns the bitwise left rotation of its first argument by the number of
bits given by the second argument. Bits shifted out on one side are
shifted back in on the other side.

---

## ror

```lua
function bit.ror(x: integer, n: integer)
  -> y: integer
```

Returns the bitwise right rotation of its first argument by the number of
bits given by the second argument. Bits shifted out on one side are
shifted back in on the other side.

---

## rshift

```lua
function bit.rshift(x: integer, n: integer)
  -> y: integer
```

Returns either the bitwise logical right-shift of its first argument by the
number of bits given by the second argument.

---

## tobit

```lua
function bit.tobit(x: integer)
  -> y: integer
```

Normalizes a number to the numeric range for bit operations and returns it.
This function is usually not needed since all bit operations already
normalize all of their input arguments.

---

## tohex

```lua
function bit.tohex(x: integer, n?: integer)
  -> y: integer
```

Converts its first argument to a hex string. The number of hex digits is
given by the absolute value of the optional second argument. Positive
numbers between 1 and 8 generate lowercase hex digits. Negative numbers
generate uppercase hex digits. Only the least-significant 4*|n| bits are
used. The default is to generate 8 lowercase hex digits.

---

