---
sidebar_position: 1
description: Learn about basic operations in Pragtical.
---

# Introduction

## Opening files

Pragtical comes with a file browser by default.
You can open, rename, move and delete files with it.
Right-clicking on a file or folder will show more options.

Other than that, you can also open files with <kbd>ctrl+p</kbd>.
This opens a fuzzy finder with a list of project files.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/opening-files.mp4"/>
</video>

## Commands

Most of Pragtical's functionalities are implemented as commands and
exposed by the command palette.
The command palette is bound to <kbd>ctrl+shift+p</kbd> by default and is
used to enter commands and execute them.

The command palette supports fuzzy matching, so you don't need to enter
the full name of the command. For instance, to create a new file, you can
type `new doc` and the correct command `Core: New Doc` will show up as
the first choice. You can press <kbd>up</kbd> or <kbd>down</kbd> to select other commands.
If a command is bound to a key shortcut, it will be shown on the right.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/command-palette.mp4"/>
</video>

## Keyboard shortcuts

All keyboard shortcuts are handled by the `core.keymap` module.
A key binding maps a "stroke" (e.g. <kbd>ctrl+q</kbd>) to one or more commands
(e.g. `core:quit`).
When the shortcut is pressed Pragtical will iterate each command
assigned to that key and run the *predicate function* for that command — if the
predicate passes it stops iterating and runs the command.

A new mapping can be added by your user module as follows:

```lua
local keymap = require "core.keymap"
keymap.add { ["ctrl+q"] = "core:quit" }
```

A list of default mappings can be viewed [here][1].

## Multiple selections (multiple cursors)

Pragtical supports multiple cursors to edit multiple lines at once.
You insert more cursors by <kbd>ctrl+left-button</kbd>.
To insert cursors upwards or downwards, use <kbd>ctrl+shift+up</kbd>
or <kbd>ctrl+shift+down</kbd>.

<video autoplay muted loop style={{width: '100%'}} controls>
  <source src="/videos/user-guide/multi-cursor.mp4"/>
</video>

## Find and replace

To find a certain word, you can use <kbd>ctrl+f</kbd>.
This will open a prompt where you can find text in the document.
After entering the text, you can press enter to find the first
match.
The matched text will be selected.
To find the next match, press <kbd>f3</kbd>

By default, Pragtical uses case-insensitive search.
Input such as `Test` will match either `Test` or `test`.
To toggle case-sensitive search, press <kbd>ctrl+i</kbd>.

Pragtical also supports searching with regular expressions.
This feature can be enabled by pressing <kbd>ctrl+shift+i</kbd>.
This mode can be used in conjunction with case-sensitive search.

To find and replace text, press <kbd>ctrl+r</kbd>.
Pragtical will prompt you for text to replace and the replacement
text. Afterwards, it will replace all occurrences of the text.

![The find text prompt][1]

## Project search

Finding text across multiple files can be useful.
To do this in Pragtical, press <kbd>ctrl+shift+f</kbd>.
You can then enter the text to find and press enter.
Pragtical will open a new tab to display all the search results.
To open the file containing the match, you can click the entries.

Project search also supports case-sensitive search and
regular expressions with the same keyboard shortcuts.
`project-search:fuzzy-find` allows you to search the project
for similar words.

Pragtical does not support find and replace text across a project.

![Project search result tab][2]

## Line endings

Some application may require a specific type of line ending.
To change the line ending of a file, you can use the command
`doc:toggle-line-ending` or press the rightmost entry on
the StatusView.
This should toggle between LF and CRLF which corresponds to
Unix and Windows style line endings.

![Button to change line endings][3]

## Indentation

Pragtical should automatically detect the indentation
of the current file and apply it when pressing <kbd>tab</kbd>.
However, you can change the indentation size by left-clicking
the 4th entry on the right of the StatusView.
You can also change the type of the indentation by right-clicking
the entry.
The settings will not apply to existing text.

![Changing the indentation of the file][4]

## Projects

Pragtical centers around the concept of projects — a project contains your code
and project-specific configuration.
A project contains at least one project directory.
Project directories are where your code is stored.

To use open a directory as a project, the directory name can be passed
as a command-line argument or the directory can be dragged onto
either the executable or a running instance.
Once loaded, the project can be changed using the command
`core:change-project-folder`.
The command will close all the documents currently opened
and switch to the new project.
If you want to open a project in a new window,
the command `core:open-project-folder` will open a new editor window
with the selected project.

Projects may contain multiple directories.
To add a directory to the current project,
you can use the command `core:add-directory`.
Once the directory is added to the project, you can browse its file on the
file browser and fuzzy finder.

Pragtical will automatically save opened files and directories and restore them
when you restart the editor.


[1]: /img/user-guide/find.png
[2]: /img/user-guide/project-search.png
[3]: /img/user-guide/line-endings.png
[4]: /img/user-guide/indent.png
