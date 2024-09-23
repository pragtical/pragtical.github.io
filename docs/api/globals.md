---
sidebar_position: 1
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# Globals

Available system globals.

## ARCH

```lua
global ARCH: string
```

The current platform tuple used for native modules loading,
for example: "x86_64-linux", "x86_64-darwin", "x86_64-windows", etc...

---

## ARGS

```lua
global ARGS: table<integer, string>
```

The command line arguments given to pragtical.

---

## COMPAT_DISABLE_FIX_PATTERN

```lua
global COMPAT_DISABLE_FIX_PATTERN: boolean
```

---

## DATADIR

```lua
global DATADIR: string
```

Directory that holds the editor lua sources and other data files.

---

## DEFAULT_SCALE

```lua
global DEFAULT_SCALE: number
```

Default system scale.

---

## EXEDIR

```lua
global EXEDIR: string
```

Directory where the editor executable resides.

---

## EXEFILE

```lua
global EXEFILE: string
```

Full path of pragtical executable.

---

## HOME

```lua
global HOME: string
```

Path to the users home directory.

---

## LUAJIT

```lua
global LUAJIT: boolean
```

This is set to true if pragtical was compiled with luajit.

---

## MOD_VERSION_MAJOR

```lua
global MOD_VERSION_MAJOR: integer
```

Same as application major version.

---

## MOD_VERSION_MINOR

```lua
global MOD_VERSION_MINOR: integer
```

Same as application minor version.

---

## MOD_VERSION_PATCH

```lua
global MOD_VERSION_PATCH: integer
```

Same as application patch version.

---

## MOD_VERSION_STRING

```lua
global MOD_VERSION_STRING: string
```

Same as application version.

---

## PATHSEP

```lua
global PATHSEP: string
```

Current platform path separator, usually `/` or `\` on windows.

---

## PLATFORM

```lua
global PLATFORM: string|"Android"|"Linux"|"Mac OS X"|"Windows"...(+1)
```

The current operating system.

---

## SCALE

```lua
global SCALE: number
```

The current text or ui scale.

---

## USERDIR

```lua
global USERDIR: string
```

Directory that holds the user configuration files, plugins, colors, etc...

---

## VERSION

```lua
global VERSION: string
```

The application version.

---

## bit

```lua
global bit: bit
```

Mike Pall bit operations library included on every Lua runtime for
consistency with the patch https://github.com/LuaJIT/LuaJIT/issues/384
applied for newer Lua versions support.

See: https://bitop.luajit.org/

[\[View Library\]](/docs/api/bit)

---

## dirmonitor

```lua
global dirmonitor: dirmonitor
```

Functionality that allows to monitor a directory or file for changes
using the native facilities provided by the current operating system
for better efficiency and performance.

[\[View Library\]](/docs/api/dirmonitor)

---

## encoding

```lua
global encoding: encoding
```

Utilities for encoding detection and conversion.

[\[View Library\]](/docs/api/encoding)

---

## global

```lua
global global: function
```

used to define a global variable

---

## process

```lua
global process: process
```

Functionality that allows you to launch subprocesses and read
or write to them in a non-blocking fashion.

[\[View Library\]](/docs/api/process)

---

## regex

```lua
global regex: regex
```

Provides the base functionality for regular expressions matching.

[\[View Library\]](/docs/api/regex)

---

## renderer

```lua
global renderer: renderer
```

Core functionality to render or draw elements into the screen.

[\[View Library\]](/docs/api/renderer)

---

## renwindow

```lua
global renwindow: renwindow
```

Functionality to create and manage windows.

[\[View Library\]](/docs/api/renwindow)

---

## shmem

```lua
global shmem: shmem
```

Functionality that allows to share data between processes.

[\[View Library\]](/docs/api/shmem)

---

## system

```lua
global system: system
```

Utilites for managing current window, files and more.

[\[View Library\]](/docs/api/system)

---

## thread

```lua
global thread: thread
```

Provides threading capabilities.

[\[View Library\]](/docs/api/thread)

---

## utf8

```lua
global utf8: table
```

---

## utf8extra

```lua
global utf8extra: utf8extra
```

Additional utf8 support not provided by lua.

[\[View Library\]](/docs/api/utf8extra)

---

