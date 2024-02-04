---
sidebar_position: 1
description: Welcome to Pragtical!
---

# Introduction

**Pragtical** - The practical and pragmatic code editor.

![screenshot](/img/gallery/1.png)

**Pragtical** is a code editor which was forked from [Lite XL] (also a fork of [lite])
written mostly in **Lua** with a focus on been practical rather than minimalist.
The name of the editor is a mixture of the words `pragmatic` and `practical`,
two words that properly define our development approach as follows:

* governed through practice or action, rather than theory, speculation or idealism
* willing to see things as they really are and deal with them sensibly

As a result we belief that new features introduced through pull requests should
be evaluated taking a practical approach, without going into lenghty idealistic
discussions that slowdown progress, merging code when logical.

## Goals

We differentiate from our ancestors by striving to make Pragtical an editor
that has amplified the set of features, to give you and us a better out of the
box experience, while keeping an eye on performance and ease of extensibility.
Also, we are simplifying the release process by reducing the amount of builds
to choose from and trying a release often approach.

### Performance

* **JIT** - Pragtical takes a LuaJIT first approach, meaning that our official
builds use LuaJIT instead of PUC Lua for the performance benefits that come
with it. Also having a LuaJIT first approach gives us FFI for free which allows
easy interfacing with native C libraries for easier plugin development. LuaJIT
has proven to be a mature Lua implementation that will provide a stable
development ecosystem for the foreseeable future.

* **Threading** - a supported feature inside the core on components where it is
practical to use, like file searching and replacing, where performance gains are
evident.

### More Features

* **Widgets** - more tightly integrated as part of the core for easier gui
development and reusability, also ensuring that plugin developers can with
more ease develop user interfaces when in need.

* **Settings UI** - if you are not using a terminal editor like n/vim it means
you are looking for a more point and click approach which is why we include a
graphical interface to adjust your preferences out of the box. But don't
worry, configuring the editor through Lua will keep working because it is also
pragtical 😉

* **Encoding** - while UTF-8 has overtaken as the preferred encoding for text
documents for its convenience, we can sometimes encounter a document in another
encoding. Loading and saving documents with different encodings will be
supported for when the need arrives, a feature that is also commonly found in
other editors because it is pragtical.

* **IPC** - shared memory functionality is part of the core and IPC plugin
shipped by default to allow opening files and tab dragging between currently
opened instances.

* **CLI** - Integrated command line interface API that can be extended by
plugins to provide new CLI flags.

* **Search/Replace** - Project-wide search and replace support, better user
interface for both documents and project search/replace.

[Lite XL]:              https://github.com/lite-xl/lite-xl
[lite]:                 https://github.com/rxi/lite
