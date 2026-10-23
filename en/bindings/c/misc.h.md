---
title: "misc.h"
---

# misc.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/misc.h>`

Timers, delayed callbacks, UI thread posting, and hotkeys

## Enums

### hiyui_post_status_t

| Value | Description |
|---|---|
| `HIYUI_POST_ACCEPTED` = 0 |  |
| `HIYUI_POST_QUEUE_FULL` |  |
| `HIYUI_POST_STOPPED` |  |

## Type Aliases

### hiyui_timer_t

```c
typedef struct hiyui_timer_s hiyui_timer_t
```

## Functions

### hiyui_once

```c
HIYUI_API void HIYUI_CALL hiyui_once(uint32_t delay_ms, hiyui_callback_fn cb, void *ud)
```

One-shot delayed callback. Runs once on the UI thread after delay_ms milliseconds and releases itself automatically.

Delay in milliseconds. Callback with signature void(void*). User data passed to the callback; its lifetime is managed by the caller.

### hiyui_timer_create

```c
HIYUI_API hiyui_timer_t *HIYUI_CALL hiyui_timer_create(uint32_t period_ms, hiyui_callback_fn cb, void *ud)
```

Creates a periodic timer that fires cb every period_ms milliseconds.

Returns a timer handle. NULL when cb is NULL or period_ms is 0. The handle must be destroyed with hiyui_timer_destroy.

### hiyui_timer_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_timer_destroy(hiyui_timer_t *t)
```

Destroys the timer and frees the handle; NULL is safe.

### hiyui_timer_pause

```c
HIYUI_API void HIYUI_CALL hiyui_timer_pause(hiyui_timer_t *t)
```

Pauses the timer.

### hiyui_timer_resume

```c
HIYUI_API void HIYUI_CALL hiyui_timer_resume(hiyui_timer_t *t)
```

Resumes the timer.

### hiyui_timer_set_period

```c
HIYUI_API void HIYUI_CALL hiyui_timer_set_period(hiyui_timer_t *t, uint32_t period_ms)
```

Changes the timer period.

### hiyui_post_ui

```c
HIYUI_API hiyui_post_status_t HIYUI_CALL hiyui_post_ui(hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

Posts a callback to the UI thread; callable from ordinary threads. The callback runs at most once. After enqueueing, cb and destroy run on the UI thread. State is released after the callback returns, or without invoking it if still pending when the main loop stops. Rejected tasks do not invoke cb and release their state on the posting thread before this function returns. Does not wait for callback completion. When posted from another thread, the callback and cleanup may finish before this function returns. Neither cb nor destroy may throw exceptions.

May be NULL; passed unchanged to cb and destroy. When non-NULL, this call takes ownership of ud and releases it exactly once, including rejection paths; the caller must not free it again or reuse the same state for a retry. When NULL, ud is not released and the caller must keep it valid throughout the callback. Returns HIYUI_POST_ACCEPTED when queued, HIYUI_POST_QUEUE_FULL when full, or HIYUI_POST_STOPPED for a NULL cb, a scheduler that has not started or has stopped, or an internal allocation or enqueue exception.

### hiyui_hotkey_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_hotkey_text(hiyui_hotkey_t spec, char *buffer, size_t capacity)
```

Builds hotkey hint text for the current platform, such as "Ctrl+N". Writes an empty string when unbound. Returns an empty string when buffer is NULL or capacity is 0.

Returns buffer.

### hiyui_hotkey_same

```c
HIYUI_API int HIYUI_CALL hiyui_hotkey_same(hiyui_hotkey_t left, hiyui_hotkey_t right)
```

Compares hotkeys after expanding Primary per platform. Returns 0 on non-desktop platforms.

### hiyui_shortcut_register

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_shortcut_register(hiyui_hotkey_t spec, hiyui_callback_fn callback, void *user_data, hiyui_destroy_fn destroy)
```

Registers a desktop hotkey. The callback runs on the UI thread. Returns 0 when arguments are invalid or the platform is unsupported. When destroy is non-NULL it takes ownership of user_data. destroy runs on failed registration or on unregistration. If unregistered while the callback is executing, destroy runs after the callback returns. The returned id must be unregistered via hiyui_shortcut_unregister.

### hiyui_shortcut_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_shortcut_unregister(uint32_t id)
```

Unregisters a hotkey. 0 or repeated unregistration is a no-op.

### hiyui_format_markup

```c
HIYUI_API const char *HIYUI_CALL hiyui_format_markup(const char *markup, char *buffer, size_t capacity)
```

Formats HTML/markup text into indented multi-line form.

Returns buffer with the result written. Writes an empty string and returns buffer on invalid arguments or insufficient capacity.

### hiyui_scaled

```c
HIYUI_API int HIYUI_CALL hiyui_scaled(int px)
```

Scales a logical pixel value by the current DPI.

### hiyui_scaled_line

```c
HIYUI_API int HIYUI_CALL hiyui_scaled_line(int px)
```

Scales a line width by the current DPI. A positive value is at least one physical pixel. Non-positive values return 0.
