---
sidebar_position: 3.1
description: Schedule view updates and redraw changed content without keeping the editor busy while idle.
---

# Efficient Updates and Rendering

A plugin can respond to input, show asynchronous results, and animate without
keeping the editor rendering continuously. Schedule the next piece of work,
then request a redraw when the displayed state changes.

This guide uses `core.request_update`, available in current Pragtical builds.
Start with [Views](views.md) for creating a view and adding it to the editor.

## Choose the right request

| Need | API | Effect |
| --- | --- | --- |
| Visible content changed | `core.redraw = true` | Requests drawing through the normal frame scheduling. |
| A view must check a timer later | `core.request_update(delay)` | Requests a view update after a delay in seconds, without itself requesting drawing. |
| An animation needs its first update | `core.request_update()` | Requests an update with no delay. |
| An operation has more work than should run at once | `core.add_thread` or `core.add_background_thread` | Runs cooperative work that can yield; see [Coroutines](coroutines.md). |

Both requests affect the editor. They do not target one view. An update walks
the normal view tree, including the active tab in each pane and shown floating
views. It does not update every inactive tab or hidden popup. A redraw can
paint other visible views too, so an unnecessary request costs more than your
plugin's drawing alone.

Neither API calls your methods synchronously. Updates and drawing still follow
the editor's frame and focus rules. Do not call `core.step`, `view:update`, or
`view:draw` directly to force the normal UI loop to run. Composite views can
still delegate updates and drawing to their children during their own lifecycle.

### Preserve other plugins' requests

Set `core.redraw = true` when your plugin needs drawing. Leave it alone when
there is nothing to draw; assigning `false` could clear another plugin's request.
The editor clears the flag when it processes drawing.

For example, publish changed text with:

```lua
function ResultView:set_text(text)
  if self.text ~= text then
    self.text = text
    core.redraw = true
  end
end
```

Call this method from the result callback or coroutine that receives the text
on the editor's Lua thread. An asynchronous result does not have to wait for
keyboard input or cursor blinking to appear.

## Schedule deadlines from update

`core.request_update(delay)` is an update request, not a callback timer:

- Omitting the delay, or passing zero, requests the next available update.
- Multiple requests coalesce to the earliest deadline.
- An earlier view update consumes the pending request. While your work is still
  waiting, request its remaining delay again from `update()`.
- There is no request handle or per-view cancellation. Stop renewing the request
  when your work finishes; a previously requested update may still occur.

Store the time when work is due. If another event causes an early update, use
`due - system.get_time()` to renew the request. Restarting the full delay on
every update can keep postponing work while the user types or moves the mouse.
Use `system.get_time()` consistently for due times and remaining delays; its
monotonic values are seconds, not calendar timestamps.

### A clock that changes once a second

This class can be added to a node as shown in the [Views tutorial](views.md).
It draws a cached caption and requests only the next second boundary.

```lua
local core = require "core"
local style = require "core.style"
local View = require "core.view"

local ClockView = View:extend()

function ClockView:new()
  ClockView.super.new(self)
  self.caption = ""
end

function ClockView:get_name()
  return "Clock"
end

function ClockView:update()
  ClockView.super.update(self)
  local now = system.get_time()
  local second = math.floor(now)
  local caption = string.format("Timer: %d seconds", second)
  if self.caption ~= caption then
    self.caption = caption
    core.redraw = true
  end
  core.request_update(second + 1 - now)
end

function ClockView:draw()
  self:draw_background(style.background)
  renderer.draw_text(style.font, self.caption,
    self.position.x + style.padding.x,
    self.position.y + style.padding.y, style.text)
end

return ClockView
```

An input event may update this view before the next second. The caption remains
unchanged, so the view only renews its deadline. When the clock tab is inactive,
its updates stop; showing it again recomputes the current caption.

### Debounce a filter

A filter should run once after typing pauses. Here an existing `FilterView`
has `items`, an array of strings, and displays `filtered_items`. Its text-input
handler calls `set_query` when the query changes.

```lua
function FilterView:set_query(query)
  self.query = query
  self.filter_due = system.get_time() + 0.15
  core.request_update(0.15)
end

function FilterView:update()
  FilterView.super.update(self)
  if not self.filter_due then return end

  local remaining = self.filter_due - system.get_time()
  if remaining > 0 then
    core.request_update(remaining)
    return
  end

  self.filter_due = nil
  local results = {}
  for _, item in ipairs(self.items) do
    if item:find(self.query, 1, true) then
      results[#results + 1] = item
    end
  end
  self.filtered_items = results
  core.redraw = true
end
```

Each keystroke replaces the view's due time. An old, earlier global request may
still wake the editor, but the update checks the current due time and renews
its remaining delay. It does not run the filter early.

This example filters a small list synchronously. For a large list or expensive
search, do the work cooperatively and publish the result when ready. A hidden
view's `update()` is not a place to run work that must finish while hidden.

## Publish asynchronous results

Coroutines and transport callbacks can finish while the editor is idle.
Publishing data must also invalidate its visible representation. A coroutine
waking up, yielding, or finishing does not automatically request a redraw.

Use a method such as `ResultView:set_text` above when a response arrives. For
list results, compare a result revision or meaningful contents before replacing
cached rows and requesting drawing. Repeatedly publishing the same result
should not keep the entire editor repainting.

A callback can also start delayed work: store its due time and call
`core.request_update(delay)` there, then renew the remaining delay from the
view's update. Without the initial request, the view might never get an update
to notice the pending timer.

Choose a [background coroutine](coroutines.md#coroutine-types) only for work
that must keep running when the editor loses focus. Worker-thread results
should be delivered back to the editor's Lua thread before changing views or
requesting UI updates; see [Threads and Channels](threads-and-channels.md).

## Animate while something is changing

A smooth animation needs frames while its displayed value moves. Start it with
an update request and use the existing `View:move_towards` helper, which requests
redrawing while the value changes and stops when it reaches the target.

For an existing `MeterView` with numeric `value` and `target` fields initialized
to zero:

```lua
function MeterView:set_target(value)
  if self.target ~= value then
    self.target = value
    core.request_update()
  end
end

function MeterView:update()
  MeterView.super.update(self)
  self:move_towards("value", self.target)
end
```

Draw `self.value` in the view's `draw()` method. The editor provides a following
update after a redraw, allowing this animation to advance or settle. There is
no need for a permanent timer or an unconditional redraw in `draw()`.

For a discrete animation, use its actual cadence. A spinner with eight steps
per second can request the next eighth-second boundary, then redraw only when
its step changes, following the clock pattern. Stop requesting steps when the
operation ends. Hidden animations should stop their UI work too.

[Floating view slides](../floating-views.md) already use the shared animation
machinery. Their placement does not require a separate rendering loop.

## Draw cached content on every draw call

Drawing can happen because another plugin changed, a window was exposed, or
layout or scale changed. Always render your view's current visible contents
when `draw()` is called, even if your own data did not change.

Cache expensive layout or parsing work and invalidate those caches when their
inputs change. Reuse the cache during drawing. Skipping the entire draw method
because the data is unchanged can leave missing content after another repaint.

Keep timer checks and model changes in update methods or result callbacks.
Unconditionally setting `core.redraw = true` inside `update()` or `draw()` asks
the editor to keep producing frames, even when the rendered output is identical.

## Reduce background checks as well as drawing

A coroutine that checks for data every 20 milliseconds still wakes about
50 times per second, even if it never requests drawing. That is polling, and
removing redraws alone does not remove its CPU cost.

Start recurring jobs when they have work and stop them when their server,
session, or operation ends. Where supported, use readiness notifications.
Otherwise retain the polling needed for responsive output, process cleanup,
input, and filesystem changes. A longer interval reduces wakeups but can delay
those changes; do not replace polling with a blocking read on the editor thread.

Yield during bounded chunks of expensive cooperative work. A permanent
`coroutine.yield(0)` loop is not an idle strategy: it asks to run again as soon
as possible.

## Verify idle behavior

1. Exercise the plugin, then stop typing and moving the mouse. Delayed work
   should finish and settled content should stop requesting frames.
2. Temporarily set `config.disable_blink = true` in a test profile. Cursor
   blinking and unrelated animations can conceal a missing redraw or deadline.
3. Cause an earlier update before your timer expires. Check that the remaining
   delay is renewed and the work still runs at its due time.
4. Test hiding, showing, closing, and reopening the view, and losing/regaining
   window focus. Check that finished or disabled jobs stop their recurring work.
5. Compare redraws, update calls, worker wakeups, and process CPU during both
   quiet and busy use. A wakeup count is not a CPU percentage.

Use LuaJIT's `jit.p` profiler to find expensive Lua paths. Keep measurements and
temporary profiles separate from the user's normal editor session.
