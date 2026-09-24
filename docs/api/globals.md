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

## DEFAULT_FPS

```lua
global DEFAULT_FPS: number
```

The default system fps based on the current display refresh rate.

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

## LUA_VERSION

```lua
global LUA_VERSION: number?
```

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

## audio

```lua
global audio: audio
```

Independent mixers, persistent playback groups, reusable encoded/PCM sounds,
file-streamed music, generated PCM voices, recording, and offline mixing/PCM
conversion. Playback supports loop regions, panning, and synchronized layers.
SDL3_mixer handles playback/decoding; SDL3 handles capture and PCM conversion.
Bundled codecs include WAV, AIFF, AU, VOC, Ogg Vorbis, MP3, FLAC, and Opus. get_decoders()
reports the actual build/runtime capabilities. No audio encoder is exposed.

Builds follow upstream SDL3_mixer by default. The optional, disabled
subprojects/packagefiles/sdl3_mixer-playback.patch provides stricter offline
resampling/count behavior and tiny-loop fixes for the pinned library version.
Without it, use ordinary playback-sized buffers, avoid one-frame loops, and
do not depend on exact resampled mixer output or counts (see mixer:render()).

Initialization is internal. Device enumeration, device-backed mixers, recording,
and their handles are main-thread operations. Sound loading, PCM generation,
extraction, offline mixers, and conversion can run in workers without hardware.
Each userdata belongs to its creating Lua state; exchange PCM strings and spec
tables between states, not handles. No Lua function runs on an audio callback.

Operational failures return nil, errmsg unless documented otherwise. Invalid
arguments raise Lua errors.
close() and immediate stop() are idempotent. Opening/loading/seeking can block;
"streaming" does not mean asynchronous opening. PCM I/O never waits for hardware
but may allocate, copy, lock, or convert. No promise of real-time execution.

Retain a mixer while it is needed. Closing/collecting it stops its voices and
releases its device, without affecting other mixers. Groups/voices do not keep
the mixer open. Dropping a voice handle does not stop it; completion is cleaned
up natively. Playback retains the needed sound data even after sound:close().
Recording streams own their devices; close/collection releases microphone use.

No update() pump is required for files, loaded sounds, loops, fades, or cleanup.
Optional completion callbacks are queued, then dispatched by the editor on the
main thread. Workers using offline mixers call mixer:dispatch_events() instead.
Offline mixers advance only through render(), never through elapsed wall time.
Generated streams need a producer; capture streams need a consumer. Ordinary
Lua coroutine producers can underrun during long editor stalls. Use a worker
for expensive synthesis, transfer PCM, and keep a measured amount buffered.

Positions/start offsets use seconds on the source timeline. Fades also use
source-audio seconds: voice AND mixer rates change their wall-clock duration.
Loop starts and fade durations must fit in 2^31-1 source frames.
Offsets/boundaries are rounded down to source sample frames. Pauses
freeze progress. Gain is a finite nonnegative multiplier; rate is a finite
speed AND pitch ratio in \[0.01, 100\], not independent pitch shifting.
Already submitted hardware samples cannot be recalled; "finished", queue sizes,
and positions are not exact measurements of what the listener currently hears.

Removed: audio.init(), open_device(), audio.device, load_wav(), decode_wav().
Replacements: create_mixer(), open_recording(), load(), and load_memory().
There is one audio.sound type, not a separate clip type. Groups are our
persistent control abstraction, not a direct exposure of SDL_mixer tags.
Numeric play_options.loops replaces the earlier draft's boolean loop option.

References: https://wiki.libsdl.org/SDL3_mixer/CategoryAPI
            https://wiki.libsdl.org/SDL3/CategoryAudio

[\[View Library\]](/docs/api/audio)

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

## canvas

```lua
global canvas: canvas
```

Core functionality that allows rendering into a separate surface.

[\[View Library\]](/docs/api/canvas)

---

## diff

```lua
global diff: diff
```

Functionality to generate the differences between two strings.

[\[View Library\]](/docs/api/diff)

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

## get_current_require_path

```lua
global get_current_require_path: function
```

Returns the current `require` path.
See: require for details and caveats

---

## global

```lua
global global: function
```

used to define a global variable

---

## net

```lua
global net: net
```

Core functionality that allows non-blocking network communication with
encryption support (SSL) on TCP connections.

[\[View Library\]](/docs/api/net)

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

Renderer backend selection can be overridden at startup with:
`PRAGTICAL_RENDERER=surface|sdlrenderer|sdlgpu`.

Settings \> Core \> Graphics \> Renderer saves a preference in `USERDIR/renderer`.
The file contains `surface`, `sdlrenderer`, or `sdlgpu`; surrounding whitespace
is ignored. Missing, unreadable, or invalid files use the compiled-in default.
A non-empty `PRAGTICAL_RENDERER` takes precedence over the saved preference.
Selecting Default removes the file. Changes require closing and reopening
Pragtical, not the in-process restart command. Backend fallback still applies;
`renwindow:get_renderer_info()` reports the actual backend in use.

When using the `sdlgpu` backend, GPU device selection can be influenced with:
`PRAGTICAL_SDLGPU_POWER=auto|low|high`.
The default `auto` mode tries the low-power GPU first, then high-performance
GPU before falling back to the software surface backend. `low` and `high`
are strict single-preference modes.

[\[View Library\]](/docs/api/renderer)

---

## renwindow

```lua
global renwindow: renwindow
```

Functionality to create and manage windows.

[\[View Library\]](/docs/api/renwindow)

---

## repl

```lua
global repl: repl
```

Cross-platform readline like functionality.

Usage Example:
```lua
local line, err = repl.input(prompt)
while line do
  if #line \> 0 then
    repl.add_history(line)
    repl.save_history(history) -- save every new line
  end
  line, err = repl.input(prompt)
end
if err then
  print('An error occurred: ' .. err)
end
```

[\[View Library\]](/docs/api/repl)

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
Workers have independent Lua states, but belong to the editor session that
created them, including workers created by other workers. Completed worker
states are closed even while their Thread handles are retained.

Restart and normal exit request shutdown and wait for all workers to finish
before closing the editor state. Channel operations interrupt workers during
shutdown. Computation and native I/O must finish or reach a channel operation;
a worker that never does so can prevent restart. Cancellation is not a forced
termination of native code.

[\[View Library\]](/docs/api/thread)

---

## utf8extra

```lua
global utf8extra: utf8extra
```

Additional utf8 support not provided by lua.

[\[View Library\]](/docs/api/utf8extra)

---

