---
title: Animation
---

# Animation

HIY-UI provides three entry points: property transitions, the `Anim` builder, and custom per-frame animation.

## Property transitions

Sets a 180 ms transition for button background changes.

```cpp
button.transitionBg(180);
button.bg(0x3367D6);
```

`transitionAll(duration)` sets one duration for all supported style properties. The animation switch and duration in theme tokens can participate in widget default transitions.

## Anim

Include `<hiyui/anim/anim.h>` and use `Anim(target, exec)` to interpolate integer values. `exec` has the signature `void(void *, int32_t)`, receiving the target address and the current value; the default easing is `Ease::InOut`.

In the following code, `value` is an application member of type `int32_t` whose lifetime covers the whole animation.

```cpp
const auto apply = +[](void *target, int32_t v) {
  *static_cast<int32_t *>(target) = v;
};
Anim(&value, apply).values(0, 100).duration(200).start();
```

| Method | Returns | Description |
| --- | --- | --- |
| `values(int32_t from, int32_t to)` | `Anim &` | Sets the start and end values |
| `duration(uint32_t ms)`, `delay(uint32_t ms)` | `Anim &` | Sets the duration and the delay before start, in milliseconds |
| `ease(Ease)` | `Anim &` | Sets the easing curve |
| `playback(uint32_t ms)` | `Anim &` | Sets the reverse playback duration; `0` disables reverse playback |
| `repeat(int32_t count)` | `Anim &` | Sets the repeat count; `1` for a single run, `LV_ANIM_REPEAT_INFINITE` for infinite |
| `onFinished(AnimTargetCb)` | `Anim &` | Notified once after all playback and repeats finish naturally; not called on stop or replacement |
| `onRemoved(AnimTargetCb)` | `Anim &` | Notified once on natural finish, stop, or replacement |
| `start()` | `lv_anim_t *` | Starts the animation; the runtime is managed by the library, and the returned handle does not need to be kept |
| `Anim::running(target, exec = nullptr)` | `bool` | Includes the delay phase; a null callback matches all animations on the target |
| `Anim::retarget(target, exec, to)` | `bool` | Updates the end value and keeps the elapsed time; returns `false` when no animation matches |
| `Anim::stop(target, exec)` | `void` | Stops matching animations; a null callback matches all animations of the target |

`AnimTargetCb` has the signature `void(void *)`, and its argument is the target used when creating the animation. The target address must stay valid until the animation is removed; call `Anim::stop()` before releasing the target, or reclaim target resources in `onRemoved()`. On natural completion, `onFinished()` is called first, then `onRemoved()`.

`Anim` itself does not skip animations based on the theme switch; when the caller disables animations, set the final value directly. Menu, Tabs, and Pagination follow the theme animation switch; TabsEx and Segmented are additionally controlled by their own Props `animated` field.

## C interface

Include `<hiyui/c/anim.h>` and configure animations through `hiyui_anim_props_t`. `exec_cb` receives the current value; `finished_cb` and `removed_cb` receive the target, and `NULL` means no notification.

| C++ operation | C function |
| --- | --- |
| `Anim(...).start()` | `hiyui_anim_start()` |
| `Anim::running()` | `hiyui_anim_running()` |
| `Anim::retarget()` | `hiyui_anim_retarget()` |
| `Anim::stop(target, exec)` | `hiyui_anim_stop()`; `exec` must not be null |
| `Anim::stop(target, nullptr)` | `hiyui_anim_stop_all()` |

Configuration fields are described in [Animation C Reference](/en/bindings/c/anim.h).

## Easing

`Ease` provides linear, multi-degree polynomial, sine, exponential, circular, bounce, back, and elastic curves. `AngleLerp` and `Impact` support only evaluation through `Easing::at()` and are treated as linear when used as LVGL animation paths.

## Per-frame animation

Custom-drawn animation is driven by the `CustomDraw` widget. `CustomDrawProps::fps` or `fps(int)` sets the frame rate, and `start()` and `stop()` control starting and stopping. When the frame rate is greater than `0`, `Painter::tick(float dt)` is called periodically at that rate, with `dt` the interval between two frames in seconds; the frame is still submitted in `paint()`.

## Periodic callbacks

After including `<hiyui/misc/timer.h>`, `Timer` runs periodic callbacks on the UI thread. A timer is owned by the application or a widget, can be moved, and cannot be copied.

| Method | Returns | Description |
| --- | --- | --- |
| `start(uint32_t periodMs, callback)` | `void` | Replaces the existing periodic callback, in milliseconds; `0` is equivalent to `stop()` |
| `stop()` | `void` | Cancels the callback; repeated calls are no-ops |
| `active()` | `bool` | Whether a created timer is currently held |

Destruction stops the timer automatically, and stopping or destroying the timer inside its own callback is allowed. The C periodic callback uses `hiyui_timer_create()` from `<hiyui/c/misc.h>`, and the caller releases the handle with `hiyui_timer_destroy()`.
