---
title: "misc.h"
---

# misc.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/misc.h>`

Timers, delayed callbacks, UI thread posting and hotkeys

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

One-shot delayed callback that runs once on the UI thread after delay_ms milliseconds and frees itself.

Delay in milliseconds Callback with signature void(void*) User data passed through to the callback, lifetime managed by the caller

### hiyui_timer_create

```c
HIYUI_API hiyui_timer_t *HIYUI_CALL hiyui_timer_create(uint32_t period_ms, hiyui_callback_fn cb, void *ud)
```

Creates a periodic timer that fires cb every period_ms milliseconds.

Timer handle, NULL when cb is null or period_ms is 0. The handle must be destroyed by hiyui_timer_destroy.

### hiyui_timer_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_timer_destroy(hiyui_timer_t *t)
```

Destroys the timer and frees the handle, passing NULL is safe.

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

Posts a callback to the UI thread, callable from ordinary threads. The callback runs at most once. When queued, the callback and destroy run and are freed on the UI thread. When rejected, destroy is freed on the posting thread. Does not block waiting for the callback to run.

Posting result, a NULL cb is treated as rejected and returns HIYUI_POST_STOPPED.

### hiyui_hotkey_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_hotkey_text(hiyui_hotkey_t spec, char *buffer, size_t capacity)
```

Builds the hotkey hint text for the current platform, such as "Ctrl+N". Writes an empty string when unbound. Returns an empty string when buffer is NULL or capacity is 0.

buffer.

### hiyui_hotkey_same

```c
HIYUI_API int HIYUI_CALL hiyui_hotkey_same(hiyui_hotkey_t left, hiyui_hotkey_t right)
```

Compares hotkeys after expanding Primary per platform, returns 0 on non-desktop platforms.

### hiyui_shortcut_register

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_shortcut_register(hiyui_hotkey_t spec, hiyui_callback_fn callback, void *user_data, hiyui_destroy_fn destroy)
```

Registers a desktop hotkey whose callback runs on the UI thread, returns 0 for invalid arguments or an unsupported platform. When destroy is not NULL it takes ownership of user_data, freed on failed registration or on unregister. If unregistered while executing, freed after the callback returns. The id returned on success must be unregistered via hiyui_shortcut_unregister.

### hiyui_shortcut_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_shortcut_unregister(uint32_t id)
```

Unregisters a hotkey, 0 or repeated unregister is a no-op.

### hiyui_format_markup

```c
HIYUI_API const char *HIYUI_CALL hiyui_format_markup(const char *markup, char *buffer, size_t capacity)
```

Formats HTML or markup text into an indented multi-line form.

The buffer holding the result, writes an empty string and returns buffer on invalid arguments or insufficient capacity.

### hiyui_scaled

```c
HIYUI_API int HIYUI_CALL hiyui_scaled(int px)
```

Converts logical pixels using the current DPI.

### hiyui_scaled_line

```c
HIYUI_API int HIYUI_CALL hiyui_scaled_line(int px)
```

Converts line width using the current DPI, a positive value is at least one physical pixel and non-positive returns 0.
