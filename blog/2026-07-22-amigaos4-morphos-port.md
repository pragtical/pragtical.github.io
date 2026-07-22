---
slug: pragtical-amigaos4-morphos-port
title: Pragtical Ported to AmigaOS 4 and MorphOS
authors: jgmdev
---

With excitement today's announcement goes to the community port of Pragtical into
AmigaOS! For sometime Walkero has been working on this port of Pragtical
to AmigaOS 4.1 FE and MorphOS 3 and it is finally ready for a test drive!

![pragtical amigaos port](https://storage.ko-fi.com/cdn/useruploads/display/07a93c6c-262c-44ff-93d0-9f7998ffa990_pragtical_3.8.7_os4_1.png)

<!-- truncate -->

In his announcement, [Walkero](https://github.com/walkero-gr) explains that the
port was started from scratch rather than being based directly on his previous
Lite XL work. He cherry-picked the pieces needed for Pragtical, restructured
parts of the code, and implemented platform-specific pieces that were not present
in the older editor port.

The port keeps Pragtical's compact SDL3 and Lua foundation, while preserving
features that make the editor useful out of the box: the plugin system, project
search UI, settings pages, and file encoding support. For encoding detection,
Walkero also ported the `uchardet` library.

Some of the deeper platform work covered threads, processes, file monitoring,
and event handling. The port also adds Lua unit tests for path handling so
Amiga filesystem behavior can be checked automatically as new changes are
merged.

This first release is based on Pragtical 3.8.7, so it is behind the current
official release series, but Walkero describes it as well tested and stable. He
plans to keep working on the port and catch up with newer Pragtical versions.

You can read more, download and support this port on the official announcement
[Ko-fi](https://ko-fi.com/post/Pragtical-is-coming-to-AmigaOS-4-and-MorphOS-Y8P523M05B)
page.
