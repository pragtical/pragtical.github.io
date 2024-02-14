---
sidebar_position: 1
description: An introduction about Pragtical's concepts
              and how they tie in to plugin development.
---

# Introduction

Pragtical has little functionalities without plugins —
anything that can be implemented as plugins can and _will_ be implemented as one.

Pragtical is mostly written in Lua.
If you want to write plugins, you need to know how to write Lua.
There are various resources such as the [Lua 5.4 Reference Manual][1],
[Programming in Lua][2], [Learn Lua in 15 Minutes][3],
[Lua Tutorial at TutorialsPoint][4] and [Lua Tutorial at lua-users.org][5].

You will also need general programming knowledge and some experience with
object-oriented programming.

:::note Some of these tutorials target older versions of Lua and may be less relevant.
:::

## Overview

Pragtical is a fork of [lite][6].
As such, a lot of concepts used in lite is inherited in Pragtical.
[Lite: An Implementation Overview][7] is an excellent article that explains
many concepts about lite.

## Types of plugins

There are a few types of plugins.
Syntaxes and colors are considered as subset of plugins.
These subsets of plugins only interact with the syntax highlighter
and the `style` table respectively.

## Tips and tricks

Here are some tips for plugin developers.

### Interactive debugging

Other than using GDB to debug the C part of Pragtical,
you can also debug the Lua part with [lite-debugger][8].
To use the debugger, install it as a plugin and call
`command.perform "debugger:break"` to stop the VM and
start debugging interactively.

### Differing stack traces on a critical error

On an older version of Pragtical, the stack trace printed on the terminal
when a critical error occur may differ with the stack trace printed
in `error.txt`.
In this case, the stack trace in `error.txt` is more complete and
should be referred.
This is a bug and will be fixed in future versions of Pragtical.

### `print()` function many not work in Windows

:::note Since v3.2.0, console output works on Windows without the instructions below.
:::

On Windows, we compile Pragtical using the GUI subsystem by default.
This causes Pragtical to close the stdout.
To work around this behavior, you can force Pragtical to keep
stdout open by redirecting its output in a terminal.

On PowerShell:

```powershell
./pragtical | tee -variable null
```

On `cmd.exe`:

```batch
./pragtical > NUL
```


[1]: https://www.lua.org/manual/5.4/
[2]: https://www.lua.org/pil/
[3]: https://tylerneylon.com/a/learn-lua/
[4]: http://www.tutorialspoint.com/lua/lua_overview.htm
[5]: http://lua-users.org/wiki/LuaTutorial
[6]: https://github.com/rxi/lite
[7]: https://rxi.github.io/lite_an_implementation_overview.html
[8]: https://github.com/pragtical/plugins/blob/master/plugins/lite-debugger.lua?raw=1
[Creating Syntaxes]:           syntaxes-and-themes/creating-syntaxes.md
[Creating Themes]:             syntaxes-and-themes/creating-themes.md
[Simple Plugin]:               simple-plugin.md
[Commands]:                    commands.md
[Managing Keyboard Shortcuts]: managing-keyboard-shortcuts.md
[Classes and Objects]:         classes-and-objects.md
[Using Regular Expressions]:   using-regular-expressions.md
[Interacting with the OS]:     interacting-with-the-os.md
[Child Processes]:             child-processes.md
