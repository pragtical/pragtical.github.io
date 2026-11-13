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

### Automated tests

Use the built-in `core.test` framework to test plugins and editor behavior
against Pragtical's Lua and native APIs. Run a test file or directory with
`pragtical test path/to/tests`. See [Writing and Running Tests](testing.md) for
test cases, assertions, setup and cleanup hooks, asynchronous tests, and
headless runs.

### The repl and run commands

Pragtical has a built-in [REPL][9] that you can access directly from the
terminal. It becomes really handy when you want to test bits of code, it has
back history and completion support to make it more convenient.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="https://github.com/user-attachments/assets/ec9491b9-3f80-4d14-9f1e-29544942e2b0"/>
</video>

You can also quickly run lua files against the pragtical runtime by using the
`run` command:

```sh
pragtical run my_lua_file.lua
```

Or directly evaluate a lua snippet:

```sh
pragtical run -e 'print "hello world!"'
```

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

### Console output on Windows

Official Windows builds include two executables in the installation directory:

- `pragtical.exe` launches the editor as a GUI application.
- `pragtical.com` is the console executable for terminal use, with standard
  input, output, and error streams.

Use `pragtical.com` when you need to see Lua `print()` output, use the REPL,
run scripts or tests, or access the command-line plugin manager. No output
redirection workaround is needed.

With the default `PATHEXT` order (`.COM` before `.EXE`), both `cmd.exe` and
PowerShell automatically select `pragtical.com` when both executables are in
the same directory. You can therefore omit the extension:

On PowerShell:

```powershell
.\pragtical repl
.\pragtical run -e "print('hello world!')"
```

On `cmd.exe`:

```batch
pragtical run my_lua_file.lua
pragtical pm --help
```

These examples assume you are in Pragtical's installation directory. PowerShell
requires the `.\` prefix for executables in the current directory. If that
directory is on your `PATH`, use `pragtical` without the prefix in either shell.
If you have customized `PATHEXT`, specify `pragtical.com` explicitly to ensure
you run the console executable.


[1]: https://www.lua.org/manual/5.4/
[2]: https://www.lua.org/pil/
[3]: https://tylerneylon.com/a/learn-lua/
[4]: http://www.tutorialspoint.com/lua/lua_overview.htm
[5]: http://lua-users.org/wiki/LuaTutorial
[6]: https://github.com/rxi/lite
[7]: https://rxi.github.io/lite_an_implementation_overview.html
[8]: https://github.com/pragtical/plugins/blob/master/plugins/lite-debugger.lua?raw=1
[9]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
[Creating Syntaxes]:           syntaxes-and-themes/creating-syntaxes.md
[Creating Themes]:             syntaxes-and-themes/creating-themes.md
[Simple Plugin]:               writing-plugins/simple-plugin.md
[Commands]:                    commands-and-shortcuts/commands.md
[Managing Keyboard Shortcuts]: commands-and-shortcuts/managing-keyboard-shortcuts.md
[Classes and Objects]:         writing-plugins/classes-and-objects.md
[Using Regular Expressions]:   using-libraries/using-regular-expressions.md
[Interacting with the OS]:     using-libraries/interacting-with-the-os.md
[Child Processes]:             using-libraries/child-processes.md
