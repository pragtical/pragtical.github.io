---
sidebar_position: 2
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# audio

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

## audio.completion_callback

Runs once after terminal playback, outside all native audio callbacks/locks.
"finished" follows EOF and all requested repeats; "stopped" follows explicit
stop (including a completed fade); "error" supplies a playback failure message.
Pauses, loop boundaries, and temporary PCM underruns do not notify. Mixer close,
collection, and Lua-state shutdown cancel undelivered callbacks, not invoke them.
Mid-stream decoder failures may appear as "finished" with unpatched SDL_mixer;
the optional playback patch supplies the additional native error reporting.
See mixer:dispatch_events() for scheduling, callback errors, and worker use.

## audio.completion_reason

```lua
audio.completion_reason:
    | "finished"
    | "stopped"
    | "error"
```

## audio.device_descriptor

Physical device IDs are session-local; do not persist them across restarts.

### id

```lua
(field) id: integer
```

---

### kind

```lua
(field) kind: "playback"|"recording"
```

---

### name

```lua
(field) name: string
```

---

## audio.device_info

Hardware information can change with default-device migration. buffer_frames
is the device buffer size, not total end-to-end latency. Gain is local, not the
OS master volume. For recording, spec is not necessarily the format read by Lua.

### buffer_frames

```lua
(field) buffer_frames: integer
```

---

### follows_default

```lua
(field) follows_default: boolean
```

---

### gain

```lua
(field) gain: number
```

---

### id

```lua
(field) id: integer
```

Logical device ID, not the enumerated physical ID.

---

### kind

```lua
(field) kind: "playback"|"recording"
```

---

### name

```lua
(field) name: string
```

---

### paused

```lua
(field) paused: boolean
```

---

### spec

```lua
(field) spec: audio.spec
```

Current hardware format.

---

## audio.device_kind

```lua
audio.device_kind:
    | "playback"
    | "recording"
```

## audio.format

Native-endian aliases are s16, s32, and f32. Prefer explicit byte order for
files, subprocesses, or network data.

## audio.group

A named, non-nested playback group owned by one mixer. Group gain/pause persist
even with no voices and apply to future voices. Effective gain is mixer gain *
group gain * voice gain * fade envelope. Each voice belongs to at most one group.

### get_gain

```lua
(method) audio.group:get_gain()
  -> gain: number?
  2. errmsg: string?
```

Return the group's gain, initially 1, excluding mixer/voice gains and fades.

@*return* `gain`: `number?`

@*return* `errmsg`: `string?`

---

### is_paused

```lua
(method) audio.group:is_paused()
  -> paused: boolean?
  2. errmsg: string?
```

Return the group's own pause flag, not the parent mixer's pause flag.

@*return* `paused`: `boolean?`

@*return* `errmsg`: `string?`

---

### pause

```lua
(method) audio.group:pause()
  -> success: boolean?
  2. errmsg: string?
```

Pause this group's current/future voices, preserving their own pause flags.
Other groups (for example menu sounds) continue unless the mixer is paused.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### play

```lua
(method) audio.group:play(sound: audio.sound, options?: audio.play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Like mixer:play(), assigning the voice to this group. Group gain/pause applies.

@*param* `sound`: [`audio.sound`](/docs/api/audio#audiosound) — Immutable reusable audio. load/load_memory may retain encoded bytes; new_sound
and predecode=true retain PCM. The same sound can play in multiple mixers in
this Lua state. It does not own or implicitly open a playback device.

@*param* `options?`: [`audio.play_options`](/docs/api/audio#audioplay_options) — The first pass covers \[start, loop_end); subsequent passes cover
\[loop_start, loop_end). loop_end defaults to source EOF. After the last pass,
playback finishes there; it does not continue into an outro after loop_end.
Boundaries must form nonempty ranges after rounding to source frames. Offsets
must be finite, nonnegative, and within the source when its length is known.
loop_start is only used when loops ~= 0; it defaults to 0, not start.
Example: start=0, loop_start=4, loop_end=20, loops=2 plays the intro once and
the \[4,20) region three times total. loops=-1 repeats until explicitly stopped.
These repeats are separate from any looping embedded in a decoder's source;
loops=0 does not disable those internal loops. Set loop_end to bound such input.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### play_file

```lua
(method) audio.group:play_file(path: string, options?: audio.play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Like mixer:play_file(), assigning the streamed-file voice to this group.

@*param* `options?`: [`audio.play_options`](/docs/api/audio#audioplay_options) — The first pass covers \[start, loop_end); subsequent passes cover
\[loop_start, loop_end). loop_end defaults to source EOF. After the last pass,
playback finishes there; it does not continue into an outro after loop_end.
Boundaries must form nonempty ranges after rounding to source frames. Offsets
must be finite, nonnegative, and within the source when its length is known.
loop_start is only used when loops ~= 0; it defaults to 0, not start.
Example: start=0, loop_start=4, loop_end=20, loops=2 plays the intro once and
the \[4,20) region three times total. loops=-1 repeats until explicitly stopped.
These repeats are separate from any looping embedded in a decoder's source;
loops=0 does not disable those internal loops. Set loop_end to bound such input.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### play_stream

```lua
(method) audio.group:play_stream(spec: audio.spec, options?: audio.stream_play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Like mixer:play_stream(), assigning the writable PCM voice to this group.

@*param* `spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*param* `options?`: [`audio.stream_play_options`](/docs/api/audio#audiostream_play_options) — Writable PCM voices have no seekable history; loops/start/loop boundaries are
not accepted. Panning and completion callbacks work like loaded-sound voices.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### resume

```lua
(method) audio.group:resume()
  -> success: boolean?
  2. errmsg: string?
```

Clear the group's own pause flag; mixer and individual voice pauses still apply.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_gain

```lua
(method) audio.group:set_gain(gain: number)
  -> success: boolean?
  2. errmsg: string?
```

Set a persistent multiplier for current AND future voices. Does not overwrite
their individual gains. This is wrapper behavior, not simply MIX_SetTagGain().

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### stop

```lua
(method) audio.group:stop(options?: audio.stop_options)
  -> success: boolean?
  2. errmsg: string?
```

Stop only this group's current voices. Gain/pause settings and the group remain.

@*param* `options?`: [`audio.stop_options`](/docs/api/audio#audiostop_options)

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

## audio.load_options

### predecode

```lua
(field) predecode: boolean?
```

Default false: retain encoded data, decode during playback.

---

## audio.metadata

Optional decoder-supplied tags, not trusted or normalized application data.
Missing fields remain nil; generated PCM sounds normally have no tags.

### album

```lua
(field) album: string?
```

---

### artist

```lua
(field) artist: string?
```

---

### copyright

```lua
(field) copyright: string?
```

---

### title

```lua
(field) title: string?
```

---

### total_tracks

```lua
(field) total_tracks: integer?
```

---

### track

```lua
(field) track: integer?
```

---

### year

```lua
(field) year: integer?
```

---

## audio.mixer

Independent device-backed or offline playback owner. Initially unpaused with
gain 1 and rate 1. Groups and voices use the same operations in either mode.

### close

```lua
(method) audio.mixer:close()
```

Immediately stop owned voices and close owned files/device, ignoring fades.
Invalidates groups; surviving voices report "stopped" unless already terminal.
Cancels pending/future callbacks and releases their Lua references, without
invoking them. Other mixers and reusable sounds are unaffected. Device-backed
mixers close on the main thread; offline mixers close on their creating thread.

---

### dispatch_events

```lua
(method) audio.mixer:dispatch_events()
  -> delivered: integer?
  2. errmsg: string?
```

Dispatch a snapshot of pending on_complete callbacks on the creating Lua thread,
after releasing native mixer locks. The editor does this automatically for
main-thread mixers; worker/offline scripts without an editor event loop call it
explicitly. It does not advance playback, render PCM, or perform voice cleanup.
Each registration not cancelled by close/shutdown is invoked once. It receives
the terminal voice, reason, and optional playback error. No notifications for
voices without a handler. The handler/voice remain retained until delivery or
cancellation, so worker scripts using handlers must drain this queue regularly.
Callbacks may start/stop voices or close the mixer, but cannot yield or recursively
dispatch. New completions wait for the next dispatch. Closing cancels the rest
of the pending callbacks. Ordering between different voices is not guaranteed.
Callback errors are caught; remaining callbacks still run. Return their invocation
count and first callback error, if any; automatic editor dispatch logs that error.
A closed mixer returns nil, errmsg. Callback latency follows Lua/editor
scheduling, not the sample clock: this is NOT a gapless sequencing mechanism.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetTrackStoppedCallback

@*return* `delivered`: `integer?` — Callback invocation count, including failed callbacks.

@*return* `errmsg`: `string?` — First callback error, or dispatch failure when count is nil.

---

### get_gain

```lua
(method) audio.mixer:get_gain()
  -> gain: number?
  2. errmsg: string?
```

Return this mixer's gain, initially 1; not the system master volume.

@*return* `gain`: `number?`

@*return* `errmsg`: `string?`

---

### get_info

```lua
(method) audio.mixer:get_info()
  -> info: (audio.mixer_info)?
  2. errmsg: string?
```

Return mixer controls/output and, when device-backed, a nested device snapshot.
Offline mixers have no device IDs or hardware buffer size. Fails after close().

@*return* `info`: `(`[`audio.mixer_info`](/docs/api/audio#audiomixer_info)`)?`

@*return* `errmsg`: `string?`

---

### get_rate

```lua
(method) audio.mixer:get_rate()
  -> rate: number?
  2. errmsg: string?
```

Return the mixer-wide speed/pitch ratio, initially 1.

@*return* `rate`: `number?`

@*return* `errmsg`: `string?`

---

### get_samples

```lua
(method) audio.mixer:get_samples(frames?: integer)
  -> samples: number[]?
  2. spec: (audio.spec)?
  3. errmsg: string?
```

Copy the newest captured frames into an interleaved array of float samples,
oldest first. Does not consume samples or advance playback. Returns fewer
frames (or an empty array) until the buffer fills. Format changes clear old
samples; inspect the returned spec rather than assuming a channel count.
Values are normally in \[-1, 1\], but mixing/gain can exceed that range. These
are mixer samples before final device conversions, not a hardware playback
clock: audible output can lag the snapshot. Paused mixers may retain their
last snapshot. Not a lossless recording API; old frames are overwritten.
Poll only as often as the visualization needs, e.g. 30 times per second.
Disabled/closed buffers return nil, nil, errmsg.

@*param* `frames?`: `integer` — Maximum frames to copy, 1-65536; default 1024.

@*return* `samples`: `number[]?`

@*return* `spec`: `(`[`audio.spec`](/docs/api/audio#audiospec)`)?` — Native-endian float32 PCM specification.

@*return* `errmsg`: `string?`

---

### group

```lua
(method) audio.mixer:group(name: string)
  -> group: (audio.group)?
  2. errmsg: string?
```

Get or create a named group, initially unpaused with gain 1. Names are nonempty,
case-sensitive strings scoped to this mixer. Repeating the name returns the
same group. Groups live until mixer closure, with no separate close operation.

@*return* `group`: `(`[`audio.group`](/docs/api/audio#audiogroup)`)?`

@*return* `errmsg`: `string?`

---

### is_paused

```lua
(method) audio.mixer:is_paused()
  -> paused: boolean?
  2. errmsg: string?
```

Return this mixer's own pause flag.

@*return* `paused`: `boolean?`

@*return* `errmsg`: `string?`

---

### pause

```lua
(method) audio.mixer:pause()
  -> success: boolean?
  2. errmsg: string?
```

Pause all playback, including future voices, without altering group/voice flags.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### play

```lua
(method) audio.mixer:play(sound: audio.sound, options?: audio.play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Start a new independent voice, not assigned to a named group. Input format is
converted automatically. Retains sound storage, not its Lua handle.
All active, paused, fading, and starved voices count toward max_voices. Completed
voices release slots automatically. At capacity return nil, errmsg; never
silently steal a voice. No polling by the consumer is needed for cleanup.
Unsupported looping/start offsets fail before playback, not silently later.
paused=true prepares the voice without consuming any source frames, including
before the function returns. Useful for resume_together(). If supplied,
on_complete is retained until dispatch/cancellation even if the voice handle
is discarded. Failed play calls do not schedule completion callbacks.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_PlayTrack

@*param* `sound`: [`audio.sound`](/docs/api/audio#audiosound) — Immutable reusable audio. load/load_memory may retain encoded bytes; new_sound
and predecode=true retain PCM. The same sound can play in multiple mixers in
this Lua state. It does not own or implicitly open a playback device.

@*param* `options?`: [`audio.play_options`](/docs/api/audio#audioplay_options) — The first pass covers \[start, loop_end); subsequent passes cover
\[loop_start, loop_end). loop_end defaults to source EOF. After the last pass,
playback finishes there; it does not continue into an outro after loop_end.
Boundaries must form nonempty ranges after rounding to source frames. Offsets
must be finite, nonnegative, and within the source when its length is known.
loop_start is only used when loops ~= 0; it defaults to 0, not start.
Example: start=0, loop_start=4, loop_end=20, loops=2 plays the intro once and
the \[4,20) region three times total. loops=-1 repeats until explicitly stopped.
These repeats are separate from any looping embedded in a decoder's source;
loops=0 does not disable those internal loops. Set loop_end to bound such input.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### play_file

```lua
(method) audio.mixer:play_file(path: string, options?: audio.play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Play directly from a seekable local file, without caching the whole file in RAM.
Each call owns a separate file/decoder until completion or stop. Initial opening
and format inspection are synchronous; later reads/decoding occur as needed.
Decoder/playback buffers still use memory. Slow storage can cause underruns.
No stream=true option is needed. Not a URL/network-stream API. Use load()+play()
for frequently repeated effects, avoiding repeated file opens and inspection.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetTrackIOStream

@*param* `options?`: [`audio.play_options`](/docs/api/audio#audioplay_options) — The first pass covers \[start, loop_end); subsequent passes cover
\[loop_start, loop_end). loop_end defaults to source EOF. After the last pass,
playback finishes there; it does not continue into an outro after loop_end.
Boundaries must form nonempty ranges after rounding to source frames. Offsets
must be finite, nonnegative, and within the source when its length is known.
loop_start is only used when loops ~= 0; it defaults to 0, not start.
Example: start=0, loop_start=4, loop_end=20, loops=2 plays the intro once and
the \[4,20) region three times total. loops=-1 repeats until explicitly stopped.
These repeats are separate from any looping embedded in a decoder's source;
loops=0 does not disable those internal loops. Set loop_end to bound such input.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### play_stream

```lua
(method) audio.mixer:play_stream(spec: audio.spec, options?: audio.stream_play_options)
  -> voice: (audio.voice)?
  2. errmsg: string?
```

Create a writable PCM voice in spec. It starts with an empty queue; an underrun
outputs silence without terminating the voice. Feed chunks using write(), and
call finish() for end-of-input or stop() to cancel. No Lua producer is called
by the audio thread; optional on_complete only runs after terminal playback.
Retain the handle to feed it; discarding an unfinished voice does not stop it
and it occupies a voice slot until stopped, finished, or its mixer closes.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetTrackAudioStream

@*param* `spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*param* `options?`: [`audio.stream_play_options`](/docs/api/audio#audiostream_play_options) — Writable PCM voices have no seekable history; loops/start/loop boundaries are
not accepted. Panning and completion callbacks work like loaded-sound voices.

@*return* `voice`: `(`[`audio.voice`](/docs/api/audio#audiovoice)`)?`

@*return* `errmsg`: `string?`

---

### render

```lua
(method) audio.mixer:render(frames: integer)
  -> data: string?
  2. mixed_frames: integer?
  3. errmsg: string?
```

Generate frames of interleaved PCM from an offline mixer in get_info().spec.
Device-backed mixers reject this operation. Runs synchronously as fast as the
CPU/storage allows; groups, loops, fades, rate, and panning work as in playback.
Returns a PCM string sized for exactly the requested frames. The destination
is initialized to format-correct silence before mixing, including any portion
left unwritten by an upstream short read or exhausted input.
mixed_frames is SDL_mixer's reported non-padding count, not a scan for silent
samples. With unpatched SDL_mixer 3.2.4, mixer rate changes can make this count
inaccurate or larger than frames; do not use it to trim output or detect EOF.
Even normally, paused/starved voices can yield zero without reaching EOF.
Resampling tails and chunk-to-chunk equivalence are not guaranteed with that
version. The optional playback patch is needed for the stricter count and
resampling behavior tested by PRAGTICAL_AUDIO_EXACT=1. Prefer 512-4096-frame
requests; very small resampled requests can fail on the unpatched library.
A paused mixer produces silence without advancing its voices. Otherwise each
call continues from the previous mix position, including resampler state.
Feed writable voices before rendering; no Lua synthesis callback runs mid-mix.
No container header or encoding is added. Render in bounded chunks; infinite
loops and generated streams need an explicit output duration or stop condition.
Completion callbacks are queued, not invoked by render(); dispatch them outside
mixing. Failure returns nil, nil, errmsg, and may have consumed some input.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_Generate

@*param* `frames`: `integer` — Positive output frame count; byte size must fit in 2^31-1.

@*return* `data`: `string?` — Raw PCM, including any appended silence.

@*return* `mixed_frames`: `integer?` — Upstream-reported mixed frames; see accuracy limitations above.

@*return* `errmsg`: `string?`

---

### resume

```lua
(method) audio.mixer:resume()
  -> success: boolean?
  2. errmsg: string?
```

Resume this mixer; individually paused groups/voices remain paused.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### resume_together

```lua
(method) audio.mixer:resume_together(voices: audio.voice[])
  -> success: boolean?
  2. errmsg: string?
```

Resume a nonempty array of distinct, individually paused voices together on
the same mixer sample frame. They may belong to different groups or use loaded,
file, or writable PCM sources. Create each with paused=true and prefill any PCM
queues before this call to start layered music without sequential-call drift.
All voices must belong to this mixer and be nonterminal; the mixer and their
groups must be unpaused. Validate the whole set before changing anything;
failure leaves all voice states unchanged. Other voices are unaffected.
Preserves positions, rates, fades, and loop counts; previously played voices
resume where paused, not at zero. No beat detection or automatic realignment.
Matching material/loop lengths and rates are needed for continued alignment.
This synchronizes mixer processing, not codec priming or hardware latency;
stream underruns can still create gaps. Offline voices resume at the next render.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_LockMixer

@*param* `voices`: [`audio.voice`](/docs/api/audio#audiovoice)`[]`

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_gain

```lua
(method) audio.mixer:set_gain(gain: number)
  -> success: boolean?
  2. errmsg: string?
```

Set gain for all current/future voices, retaining their individual/group gains.
Values above 1 may clip; zero mutes but does not pause.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_rate

```lua
(method) audio.mixer:set_rate(rate: number)
  -> success: boolean?
  2. errmsg: string?
```

Set speed/pitch for the entire mix, including current and future group voices.
Effective speed is voice rate * mixer rate; individual rates are preserved.
Applies after track mixing, including offline output. Does not change the
declared output spec. Already buffered output is unaffected; unsupported
effective rates fail without changing the previous setting.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetMixerFrequencyRatio

@*param* `rate`: `number` — Finite ratio in \[0.01, 100\].

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_sample_buffer

```lua
(method) audio.mixer:set_sample_buffer(frames: integer)
  -> success: boolean?
  2. errmsg: string?
```

Enable a bounded rolling buffer of post-mix samples for visualization.
Disabled by default. Zero disables capture and frees the buffer; otherwise
accepts 1-65536 frames. Every call clears the previous snapshot. Storage is
reserved for up to eight channels, at most 2 MiB. The audio callback only
copies samples: no Lua callbacks, allocation, or analysis run on that thread.
Works with device and offline mixers; closing the mixer releases the buffer.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetPostMixCallback

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### stop

```lua
(method) audio.mixer:stop(options?: audio.stop_options)
  -> success: boolean?
  2. errmsg: string?
```

Stop all current voices, including group voices; optionally fade them out.
Does not close the mixer or affect future voices. Uses voice:stop() semantics.

@*param* `options?`: [`audio.stop_options`](/docs/api/audio#audiostop_options)

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

## audio.mixer_info

Mixer controls and output format; device is absent for offline mixers.
All returned tables are snapshots. Device-backed output may change if the
default device changes; offline spec stays fixed for the mixer's lifetime.

### device

```lua
(field) device: (audio.device_info)?
```

Current playback device information.

---

### gain

```lua
(field) gain: number
```

---

### max_voices

```lua
(field) max_voices: integer
```

---

### offline

```lua
(field) offline: boolean
```

---

### paused

```lua
(field) paused: boolean
```

---

### rate

```lua
(field) rate: number
```

---

### spec

```lua
(field) spec: audio.spec
```

Mixer output format, not an input sound's format.

---

## audio.mixer_options

### id

```lua
(field) id: integer?
```

Physical playback ID; default follows system. Invalid when offline.

---

### max_voices

```lua
(field) max_voices: integer?
```

Positive limit, default 64; includes PCM/file voices.

---

### offline

```lua
(field) offline: boolean?
```

Default false; true opens no device and requires spec.

---

### spec

```lua
(field) spec: (audio.spec)?
```

Hardware hint when online; required exact output when offline.

---

## audio.play_options

The first pass covers \[start, loop_end); subsequent passes cover
\[loop_start, loop_end). loop_end defaults to source EOF. After the last pass,
playback finishes there; it does not continue into an outro after loop_end.
Boundaries must form nonempty ranges after rounding to source frames. Offsets
must be finite, nonnegative, and within the source when its length is known.
loop_start is only used when loops ~= 0; it defaults to 0, not start.
Example: start=0, loop_start=4, loop_end=20, loops=2 plays the intro once and
the \[4,20) region three times total. loops=-1 repeats until explicitly stopped.
These repeats are separate from any looping embedded in a decoder's source;
loops=0 does not disable those internal loops. Set loop_end to bound such input.

### fade_in

```lua
(field) fade_in: number?
```

Nonnegative duration in source seconds, default 0.

---

### gain

```lua
(field) gain: number?
```

Default 1; excludes mixer/group gain and fades.

---

### loop_end

```lua
(field) loop_end: number?
```

Exclusive end in source seconds for every pass, default EOF.

---

### loop_start

```lua
(field) loop_start: number?
```

Repeat start in source seconds, default 0.

---

### loops

```lua
(field) loops: integer?
```

Additional repeats: 0 (default), positive count, or -1 forever.

---

### on_complete

```lua
(field) on_complete: fun(voice: audio.voice, reason: "error"|"finished"|"stopped", errmsg?: string)?
```

Optional deferred terminal notification.

---

### pan

```lua
(field) pan: number?
```

Stereo balance in \[-1, 1\]; omitted preserves channel layout.

---

### paused

```lua
(field) paused: boolean?
```

Default false; parent pause still applies.

---

### rate

```lua
(field) rate: number?
```

Default 1; changes speed and pitch together.

---

### start

```lua
(field) start: number?
```

Nonnegative source offset in seconds, default 0.

---

## audio.recording_options

### id

```lua
(field) id: integer?
```

Physical recording ID; omitted follows the system default.

---

### paused

```lua
(field) paused: boolean?
```

Default true; false starts capturing immediately.

---

## audio.sound

Immutable reusable audio. load/load_memory may retain encoded bytes; new_sound
and predecode=true retain PCM. The same sound can play in multiple mixers in
this Lua state. It does not own or implicitly open a playback device.

### close

```lua
(method) audio.sound:close()
```

Release this handle; further sound operations fail. Active voices retain their
own native sample references and continue playing. Idempotent.

---

### get_data

```lua
(method) audio.sound:get_data()
  -> data: string?
  2. errmsg: string?
```

Return a new string of decoded PCM in get_spec() format, NEVER encoded bytes.
Encoded sounds are fully decoded synchronously; this may be expensive and does
not change their storage mode. Already-PCM sounds are copied. Infinite sources
and results exceeding the supported PCM buffer size return nil, errmsg.
Useful for synthesis/sample processing and worker PCM transfer, not playback.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_DecodeAudio

@*return* `data`: `string?`

@*return* `errmsg`: `string?`

---

### get_duration

```lua
(method) audio.sound:get_duration()
  -> seconds: number?
  2. errmsg: string?
```

Return source duration in seconds, excluding playback loops and rate changes.
An unknown duration returns nil with no error; an infinite source returns
math.huge. Closed handles return nil, errmsg. Decoder estimates may be inexact.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_GetAudioDuration

@*return* `seconds`: `number?`

@*return* `errmsg`: `string?`

---

### get_metadata

```lua
(method) audio.sound:get_metadata()
  -> metadata: (audio.metadata)?
  2. errmsg: string?
```

Return a fresh table of decoder-supplied tags; missing tags are omitted, not an
error. new_sound() normally returns an empty table. Changing this table does
not modify the sound or file. Treat strings as untrusted text when displaying.
This is loaded-sound metadata, not a reason to load a whole streamed music file
just to play it. Duration remains available separately through get_duration().
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_GetAudioProperties

@*return* `metadata`: `(`[`audio.metadata`](/docs/api/audio#audiometadata)`)?`

@*return* `errmsg`: `string?`

---

### get_size

```lua
(method) audio.sound:get_size()
  -> bytes: integer?
  2. errmsg: string?
```

Return stored payload bytes: encoded for default loads, PCM for predecoded
loads/new_sound(). Excludes object overhead and per-voice decoding buffers.
This changes the old PCM-only meaning; use #get_data() for exact decoded size.

@*return* `bytes`: `integer?`

@*return* `errmsg`: `string?`

---

### get_spec

```lua
(method) audio.sound:get_spec()
  -> spec: (audio.spec)?
  2. errmsg: string?
```

Return the stable PCM specification used by get_data(), regardless of whether
this sound stores encoded data or PCM. Does not return a codec/container name.

@*return* `spec`: `(`[`audio.spec`](/docs/api/audio#audiospec)`)?`

@*return* `errmsg`: `string?`

---

## audio.spec

Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

### channels

```lua
(field) channels: integer
```

From 1 through 8.

---

### format

```lua
(field) format: "f32"|"f32be"|"f32le"|"s16"|"s16be"...(+6)
```

Native-endian aliases are s16, s32, and f32. Prefer explicit byte order for
files, subprocesses, or network data.

---

### sample_rate

```lua
(field) sample_rate: integer
```

From 1 through 2^31-1 frames/second, normally 48000.

---

## audio.stop_options

### fade_out

```lua
(field) fade_out: number?
```

Nonnegative source seconds, default 0 (immediate).

---

## audio.stream

A PCM capture stream owning its recording device, or an unbound converter.
Playback uses writable audio.voice instead. Formats supplied by the caller are
fixed for the stream's lifetime; hardware-facing capture formats may change.
Queues have no implicit cap: drain regularly, pause capture, or clear/close.

### clear

```lua
(method) audio.stream:clear()
  -> success: boolean?
  2. errmsg: string?
```

Discard buffered input/output, retaining formats, gain, rate, and pause state.
Does not stop ongoing capture.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### close

```lua
(method) audio.stream:close()
```

Discard queues and close the stream; capture also releases its device.
Flush/drain first to keep final data. Further operations fail. Idempotent.

---

### flush

```lua
(method) audio.stream:flush()
  -> success: boolean?
  2. errmsg: string?
```

Make the resampler's remaining tail available; does not close or permanently
seal the stream. Further writes are allowed but may introduce discontinuities.
For a capture stream, pause first to flush a completed recording segment.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### get_available_bytes

```lua
(method) audio.stream:get_available_bytes()
  -> bytes: integer?
  2. errmsg: string?
```

Return currently available converted output bytes. Conversion may retain a
partial tail until more input arrives or flush() is called.

@*return* `bytes`: `integer?`

@*return* `errmsg`: `string?`

---

### get_device_info

```lua
(method) audio.stream:get_device_info()
  -> info: (audio.device_info)?
  2. errmsg: string?
```

Return the recording device snapshot. Offline converters return nil, errmsg.
The requested read format is available through get_formats(), not info.spec.

@*return* `info`: `(`[`audio.device_info`](/docs/api/audio#audiodevice_info)`)?`

@*return* `errmsg`: `string?`

---

### get_formats

```lua
(method) audio.stream:get_formats()
  -> input_spec: (audio.spec)?
  2. output_spec: (audio.spec)?
  3. errmsg: string?
```

Return input/output specs. Capture input is hardware format and may change;
capture output and both offline converter formats stay as specified by Lua.
Failure returns nil, nil, errmsg.

@*return* `input_spec`: `(`[`audio.spec`](/docs/api/audio#audiospec)`)?`

@*return* `output_spec`: `(`[`audio.spec`](/docs/api/audio#audiospec)`)?`

@*return* `errmsg`: `string?`

---

### get_gain

```lua
(method) audio.stream:get_gain()
  -> gain: number?
  2. errmsg: string?
```

Return the conversion/capture gain, initially 1.

@*return* `gain`: `number?`

@*return* `errmsg`: `string?`

---

### get_queued_bytes

```lua
(method) audio.stream:get_queued_bytes()
  -> bytes: integer?
  2. errmsg: string?
```

Return unconsumed input bytes. Capture input uses hardware format, not the
requested read format. Does not include converted output already available.

@*return* `bytes`: `integer?`

@*return* `errmsg`: `string?`

---

### get_rate

```lua
(method) audio.stream:get_rate()
  -> rate: number?
  2. errmsg: string?
```

Return the conversion rate ratio, initially 1.

@*return* `rate`: `number?`

@*return* `errmsg`: `string?`

---

### is_paused

```lua
(method) audio.stream:is_paused()
  -> paused: boolean?
  2. errmsg: string?
```

Return capture pause state; offline converters return nil, errmsg.

@*return* `paused`: `boolean?`

@*return* `errmsg`: `string?`

---

### pause

```lua
(method) audio.stream:pause()
  -> success: boolean?
  2. errmsg: string?
```

Pause capture, retaining queued data. Microphone access is not released.
Offline converters cannot pause; simply stop feeding/reading them.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### read

```lua
(method) audio.stream:read(max_bytes?: integer)
  -> data: string?
  2. errmsg: string?
```

Read available converted/captured PCM without waiting for hardware. max_bytes
is positive and rounded down to a whole output frame (must fit at least one).
Returns "" when no complete frames are ready, not an EOF indication.

@*param* `max_bytes?`: `integer` — Default 4096 bytes.

@*return* `data`: `string?`

@*return* `errmsg`: `string?`

---

### resume

```lua
(method) audio.stream:resume()
  -> success: boolean?
  2. errmsg: string?
```

Resume capture. Audio during the pause was not queued for later capture.
Offline converters return nil, errmsg.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_gain

```lua
(method) audio.stream:set_gain(gain: number)
  -> success: boolean?
  2. errmsg: string?
```

Set gain for future PCM conversion. Zero mutes samples, but does not pause.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_rate

```lua
(method) audio.stream:set_rate(rate: number)
  -> success: boolean?
  2. errmsg: string?
```

Set the conversion speed/pitch ratio. Does not change microphone hardware
capture speed; it changes the resulting PCM duration/pitch. Does not alter
already converted output. Unsupported effective sample rates return nil, errmsg.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### write

```lua
(method) audio.stream:write(data: string)
  -> bytes_written: integer?
  2. errmsg: string?
```

Write complete PCM input frames to an offline converter, returning #data.
Capture streams reject writes. No implicit queue cap or partial writes.

@*return* `bytes_written`: `integer?`

@*return* `errmsg`: `string?`

---

## audio.stream_play_options

Writable PCM voices have no seekable history; loops/start/loop boundaries are
not accepted. Panning and completion callbacks work like loaded-sound voices.

### fade_in

```lua
(field) fade_in: number?
```

Nonnegative source seconds, default 0.

---

### gain

```lua
(field) gain: number?
```

Default 1.

---

### on_complete

```lua
(field) on_complete: fun(voice: audio.voice, reason: "error"|"finished"|"stopped", errmsg?: string)?
```

Optional deferred terminal notification.

---

### pan

```lua
(field) pan: number?
```

Stereo balance in \[-1, 1\]; omitted preserves channel layout.

---

### paused

```lua
(field) paused: boolean?
```

Default false.

---

### rate

```lua
(field) rate: number?
```

Default 1.

---

## audio.voice

One loaded-sound, file, or generated-stream playback instance. A finished/stopped
voice cannot restart; request a new voice. Status remains readable after it ends.

### clear

```lua
(method) audio.voice:clear()
  -> success: boolean?
  2. errmsg: string?
```

Discard buffered PCM on an unfinished writable voice; keep it accepting input.
Does not retract already mixed/submitted audio or reset producer state.
Other voice kinds and voices sealed with finish() return nil, errmsg.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### finish

```lua
(method) audio.voice:finish()
  -> success: boolean?
  2. errmsg: string?
```

Signal final input for a writable PCM voice. Flush the conversion tail, reject
further writes, and finish naturally after queued audio is mixed. Does not
resume paused parents/voice or wait for hardware. Repeated calls succeed, even
after completion/stop; non-writable voice kinds return nil, errmsg.
Unlike a temporarily empty queue, finish() permits natural voice termination.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### get_duration

```lua
(method) audio.voice:get_duration()
  -> seconds: number?
  2. errmsg: string?
```

Return source duration in seconds for a loaded sound or streamed file, without
loading the whole file. Excludes loops, playback rate, and loop boundaries.
Returns nil with no error when unknown, including writable PCM sources.
Infinite sources return math.huge. Decoder estimates may be inexact.
Remains available after playback ends.

@*return* `seconds`: `number?`

@*return* `errmsg`: `string?`

---

### get_gain

```lua
(method) audio.voice:get_gain()
  -> gain: number
```

Return the voice's base gain, excluding parents/fades; readable after completion.

@*return* `gain`: `number`

---

### get_pan

```lua
(method) audio.voice:get_pan()
  -> pan: number?
```

Return the stereo balance, or nil when disabled; readable after completion.

@*return* `pan`: `number?`

---

### get_position

```lua
(method) audio.voice:get_position()
  -> seconds: number?
  2. errmsg: string?
```

Return source position in seconds, preserving the final value on completion.
Loops wrap this position; rate changes affect how fast it advances. Unsupported
source position queries (including writable PCM voices) return nil, errmsg.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_GetTrackPlaybackPosition

@*return* `seconds`: `number?`

@*return* `errmsg`: `string?`

---

### get_queued_bytes

```lua
(method) audio.voice:get_queued_bytes()
  -> bytes: integer?
  2. errmsg: string?
```

Return unconsumed application-input bytes for a writable PCM voice. Does not
include all converted/mixed output or hardware buffering. Not a completion
test: use finish() followed by get_state(). Other voice kinds return nil, errmsg.
Returns zero after a generated voice has finished/stopped.

@*return* `bytes`: `integer?`

@*return* `errmsg`: `string?`

---

### get_rate

```lua
(method) audio.voice:get_rate()
  -> rate: number
```

Return the voice's speed/pitch ratio, excluding mixer rate; readable after completion.

@*return* `rate`: `number`

---

### get_state

```lua
(method) audio.voice:get_state()
  -> state: "finished"|"paused"|"playing"|"stopped"
  2. errmsg: string?
```

Report effective state, including parent pauses. A starved generated voice is
still "playing", not "finished". "finished" means the source was fully mixed,
not that hardware has played every sample. "stopped" means explicit stop,
owner closure, or failure; a failure includes errmsg. Terminal state is retained.

```lua
state:
    | "playing"
    | "paused"
    | "finished"
    | "stopped"
```

@*return* `state`: `"finished"|"paused"|"playing"|"stopped"`

@*return* `errmsg`: `string?`

---

### pause

```lua
(method) audio.voice:pause()
  -> success: boolean?
  2. errmsg: string?
```

Pause only this voice; queued samples/source position and fade progress remain.
Mutating playback controls on terminal voices returns nil, errmsg.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### resume

```lua
(method) audio.voice:resume()
  -> success: boolean?
  2. errmsg: string?
```

Clear this voice's own pause flag; group/mixer pauses still apply.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### seek

```lua
(method) audio.voice:seek(seconds: number)
  -> success: boolean?
  2. errmsg: string?
```

Seek an active sound/file voice to a nonnegative source offset in seconds.
Retains pause flags, gain, rate, pan, loop boundaries, and remaining repeat count.
Targets must be before loop_end when specified. Unsupported/out-of-range seeks
return nil, errmsg without restarting the voice. Writable PCM voices cannot
seek. May decode/read synchronously; not all codecs offer identical precision.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_gain

```lua
(method) audio.voice:set_gain(gain: number)
  -> success: boolean?
  2. errmsg: string?
```

Set base gain; parent gain and fade envelopes continue to multiply it.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_pan

```lua
(method) audio.voice:set_pan(pan?: number)
  -> success: boolean?
  2. errmsg: string?
```

Set stereo balance in \[-1, 1\]: -1 is left, 0 center, 1 right. Forces a stereo
downmix onto front left/right; on stereo sources this balances channels, it
does not relocate all right-channel content into the left channel or vice versa.
Uses linear attenuation: left gain = 1 - max(pan, 0), right = 1 + min(pan, 0).
Center leaves both at unity; parent gain and fades still multiply these gains.
nil disables forced stereo and preserves the normal channel layout. Thus pan=0
and no pan differ for multichannel material. Final output conversion still applies
on mono devices. No 3D listener, distance attenuation, or Doppler model is implied.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_SetTrackStereo

@*param* `pan?`: `number` — Finite value in \[-1, 1\]; nil disables stereo balance.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### set_rate

```lua
(method) audio.voice:set_rate(rate: number)
  -> success: boolean?
  2. errmsg: string?
```

Set speed/pitch together. Invalid effective sample rates return nil, errmsg.
Applies to future processing, not samples already submitted to hardware.

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### stop

```lua
(method) audio.voice:stop(options?: audio.stop_options)
  -> success: boolean?
  2. errmsg: string?
```

Immediately stop by default, or fade then stop. Effective-paused voices stop
immediately even when a fade is requested. Repeating a pending fade request does
not restart its countdown; an immediate stop overrides it. Terminal voices
succeed without changes. A fading voice retains its slot until playback ends.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_StopTrack

@*param* `options?`: [`audio.stop_options`](/docs/api/audio#audiostop_options)

@*return* `success`: `boolean?`

@*return* `errmsg`: `string?`

---

### write

```lua
(method) audio.voice:write(data: string)
  -> bytes_written: integer?
  2. errmsg: string?
```

Write complete PCM frames to a voice created by play_stream(). Copies the data;
returns its byte count, including zero for "". Other voice kinds, terminal
voices, and voices whose finish() was called return nil, errmsg.
No implicit queue cap or partial writes: check get_queued_bytes() before feeding.
Writing while paused is allowed, but the queue does not drain.

@*return* `bytes_written`: `integer?`

@*return* `errmsg`: `string?`

---

## audio.voice_state

```lua
audio.voice_state:
    | "playing"
    | "paused"
    | "finished"
    | "stopped"
```

## convert

```lua
function audio.convert(data: string, input_spec: audio.spec, output_spec: audio.spec)
  -> data: string?
  2. errmsg: string?
```

Convert one complete PCM buffer synchronously. Empty input returns "".
Use create_stream() for successive chunks: separate convert() calls reset the
resampler. Unsupported/effective-rate combinations return nil, errmsg.

@*param* `input_spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*param* `output_spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*return* `data`: `string?` — Converted PCM in output_spec.

@*return* `errmsg`: `string?`

---

## create_mixer

```lua
function audio.create_mixer(options?: audio.mixer_options)
  -> mixer: (audio.mixer)?
  2. errmsg: string?
```

Open an independent playback mixer on the main thread, ready to play. Omit id
to follow the system default; an unavailable explicit ID never falls back
silently. Audio failure must not prevent a plugin from continuing without sound.
With offline=true, require spec, reject id, and open no hardware; this mode can
be created/used/closed in a worker. render() pulls PCM in the exact spec supplied.
Device failure never silently switches a mixer to offline mode.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_CreateMixerDevice
               https://wiki.libsdl.org/SDL3_mixer/MIX_CreateMixer

@*param* `options?`: [`audio.mixer_options`](/docs/api/audio#audiomixer_options)

@*return* `mixer`: `(`[`audio.mixer`](/docs/api/audio#audiomixer)`)?`

@*return* `errmsg`: `string?`

---

## create_stream

```lua
function audio.create_stream(input_spec: audio.spec, output_spec: audio.spec)
  -> stream: (audio.stream)?
  2. errmsg: string?
```

Create an offline PCM converter; no hardware is opened. Retain it across input
chunks to preserve resampling history, draining output regularly. Flush after
the final input segment, not after every chunk.

@*param* `input_spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*param* `output_spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*return* `stream`: `(`[`audio.stream`](/docs/api/audio#audiostream)`)?`

@*return* `errmsg`: `string?`

---

## get_decoders

```lua
function audio.get_decoders()
  -> decoders: string[]?
  2. errmsg: string?
```

List available decoder names after internal, serialized mixer initialization.
Names describe decoders, not an exhaustive extension list. Does not open audio
hardware. Missing codecs produce an error when loading/playing that format.

@*return* `decoders`: `string[]?`

@*return* `errmsg`: `string?`

---

## get_devices

```lua
function audio.get_devices(kind?: "playback"|"recording")
  -> devices: audio.device_descriptor[]?
  2. errmsg: string?
```

Enumerate physical devices on the main thread, initializing SDL audio as needed.
An empty list is successful. No recording device is opened by enumeration.

```lua
kind:
    | "playback"
    | "recording"
```

@*param* `kind?`: `"playback"|"recording"` — Defaults to "playback".

@*return* `devices`: [`audio.device_descriptor`](/docs/api/audio#audiodevice_descriptor)`[]?`

@*return* `errmsg`: `string?`

---

## get_driver

```lua
function audio.get_driver()
  -> driver: string?
```

Return the current backend, or nil if hardware audio has not been initialized.
Does not initialize audio; nil is not an error.

@*return* `driver`: `string?`

---

## get_drivers

```lua
function audio.get_drivers()
  -> drivers: string[]
```

List compiled SDL backend driver names; this does not initialize hardware.
Listed drivers are not necessarily usable on the current system.

@*return* `drivers`: `string[]`

---

## load

```lua
function audio.load(path: string, options?: audio.load_options)
  -> sound: (audio.sound)?
  2. errmsg: string?
```

Synchronously load a whole supported file, detecting format from its contents.
Default: cache encoded data in RAM and decode during each playback.
predecode=true: decode upfront and cache PCM. Neither mode streams from disk.
The file is closed before returning; no mixer or playback device is required.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_LoadAudio_IO

@*param* `options?`: [`audio.load_options`](/docs/api/audio#audioload_options)

@*return* `sound`: `(`[`audio.sound`](/docs/api/audio#audiosound)`)?`

@*return* `errmsg`: `string?`

---

## load_memory

```lua
function audio.load_memory(data: string, options?: audio.load_options)
  -> sound: (audio.sound)?
  2. errmsg: string?
```

Like load(), but copy a complete encoded file supplied as a binary Lua string.
Not raw PCM; use new_sound() for that. The caller may release data on return.

@*param* `options?`: [`audio.load_options`](/docs/api/audio#audioload_options)

@*return* `sound`: `(`[`audio.sound`](/docs/api/audio#audiosound)`)?`

@*return* `errmsg`: `string?`

---

## new_sound

```lua
function audio.new_sound(data: string, spec: audio.spec)
  -> sound: (audio.sound)?
  2. errmsg: string?
```

Copy nonempty, complete interleaved PCM frames into reusable sound storage.
No conversion or container decoding. Supports synthesized samples/compositions
and recorded or externally decoded audio without writing a file.
SDL reference: https://wiki.libsdl.org/SDL3_mixer/MIX_LoadRawAudio

@*param* `spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*return* `sound`: `(`[`audio.sound`](/docs/api/audio#audiosound)`)?`

@*return* `errmsg`: `string?`

---

## open_recording

```lua
function audio.open_recording(spec: audio.spec, options?: audio.recording_options)
  -> stream: (audio.stream)?
  2. errmsg: string?
```

Open a capture stream on the main thread; spec is the PCM format read by Lua.
Opening is explicit microphone access and may prompt even when paused. The
stream starts paused unless requested otherwise. Pausing does not release
microphone access: close when done. SDL converts hardware data into spec.

@*param* `spec`: [`audio.spec`](/docs/api/audio#audiospec) — Interleaved PCM; all fields are required. One frame includes all channels.
Float samples normally use \[-1, 1\]; u8 silence is 128, other formats use zero.
PCM strings must contain complete frames and fit in 2^31-1 bytes per operation.
This is not a file-stream length limit. Returned spec tables are copies.

@*param* `options?`: [`audio.recording_options`](/docs/api/audio#audiorecording_options)

@*return* `stream`: `(`[`audio.stream`](/docs/api/audio#audiostream)`)?`

@*return* `errmsg`: `string?`

---

