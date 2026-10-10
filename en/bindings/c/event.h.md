---
title: "event.h"
---

# event.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/event.h>`

## Enums

### hiyui_event_code_t

| Value | Description |
|---|---|
| `HIYUI_EVENT_UNKNOWN` = -1 |  |
| `HIYUI_EVENT_PRESSED` = 0 |  |
| `HIYUI_EVENT_PRESSING` |  |
| `HIYUI_EVENT_PRESS_LOST` |  |
| `HIYUI_EVENT_SHORT_CLICKED` |  |
| `HIYUI_EVENT_SINGLE_CLICKED` |  |
| `HIYUI_EVENT_DOUBLE_CLICKED` |  |
| `HIYUI_EVENT_TRIPLE_CLICKED` |  |
| `HIYUI_EVENT_LONG_PRESSED` |  |
| `HIYUI_EVENT_LONG_PRESS_REPEAT` |  |
| `HIYUI_EVENT_CLICKED` |  |
| `HIYUI_EVENT_RELEASED` |  |
| `HIYUI_EVENT_SCROLL_BEGIN` |  |
| `HIYUI_EVENT_SCROLL_END` |  |
| `HIYUI_EVENT_SCROLL` |  |
| `HIYUI_EVENT_GESTURE` |  |
| `HIYUI_EVENT_KEY` |  |
| `HIYUI_EVENT_FOCUSED` |  |
| `HIYUI_EVENT_DEFOCUSED` |  |
| `HIYUI_EVENT_LEAVE` |  |
| `HIYUI_EVENT_VALUE_CHANGED` |  |
| `HIYUI_EVENT_READY` |  |
| `HIYUI_EVENT_DELETE` |  |
| `HIYUI_EVENT_CHILD_CHANGED` |  |
| `HIYUI_EVENT_SIZE_CHANGED` |  |
| `HIYUI_EVENT_STYLE_CHANGED` |  |
| `HIYUI_EVENT_HOVER_OVER` |  |
| `HIYUI_EVENT_HOVER_LEAVE` |  |
| `HIYUI_EVENT_CANCEL` |  |
| `HIYUI_EVENT_STATE_CHANGED` |  |
| `HIYUI_EVENT_LAYOUT_CHANGED` |  |
| `HIYUI_EVENT_LAYOUT_COMPLETED` |  |
| `HIYUI_EVENT_INPUT_KEY` |  |
| `HIYUI_EVENT_KEY_PREVIEW` |  |
| `HIYUI_EVENT_CUSTOM_BEGIN` = 0x10000 |  |

### hiyui_key_code_t

| Value | Description |
|---|---|
| `HIYUI_KEY_NONE` = 0 |  |
| `HIYUI_KEY_HOME` = 2 |  |
| `HIYUI_KEY_END` = 3 |  |
| `HIYUI_KEY_BACKSPACE` = 8 |  |
| `HIYUI_KEY_NEXT` = 9 |  |
| `HIYUI_KEY_ENTER` = 10 |  |
| `HIYUI_KEY_PREVIOUS` = 11 |  |
| `HIYUI_KEY_UP` = 17 |  |
| `HIYUI_KEY_DOWN` = 18 |  |
| `HIYUI_KEY_RIGHT` = 19 |  |
| `HIYUI_KEY_LEFT` = 20 |  |
| `HIYUI_KEY_ESCAPE` = 27 |  |
| `HIYUI_KEY_SPACE` = 32 |  |
| `HIYUI_KEY_DELETE` = 127 |  |

## Type Aliases

### hiyui_event_t

```c
typedef struct hiyui_event_s hiyui_event_t
```

A borrowed event valid only inside its event callback.

### hiyui_event_handle_t

```c
typedef struct hiyui_event_handle_s hiyui_event_handle_t
```

Event subscription handle, released by hiyui_event_handle_destroy.

### hiyui_event_fn

```c
typedef void(* hiyui_event_fn) (hiyui_event_t *event, void *user_data)
```

Called synchronously on the UI thread. The event and its borrowed objects must not be kept beyond the callback.

### hiyui_mouse_move_fn

```c
typedef void(* hiyui_mouse_move_fn) (int screen_x, int screen_y, int local_x, int local_y, void *user_data)
```

### hiyui_mouse_wheel_fn

```c
typedef void(* hiyui_mouse_wheel_fn) (int local_x, int local_y, int delta_y, void *user_data)
```

## Functions

### hiyui_wdg_on

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on(hiyui_widget_t *widget, hiyui_event_code_t code, hiyui_event_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Appends an event subscription; user_data is released when the widget is deleted or the subscription is removed.

When non-NULL, takes over user_data and is also called if registration fails; release happens only after an in-flight callback returns. May be NULL; when non-NULL, *out_handle must be NULL, and the returned handle must be released separately. Returns 1 on successful registration and 0 on failure; without a requested handle the subscription lasts until widget deletion.

### hiyui_event_register

```c
HIYUI_API hiyui_event_code_t HIYUI_CALL hiyui_event_register(void)
```

Allocates a custom event code on the UI thread. It stays valid for the process lifetime and is never reused.

### hiyui_wdg_send_event

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_send_event(hiyui_widget_t *widget, hiyui_event_code_t code, void *data)
```

Sends the event synchronously; data is borrowed until the call returns. Returns 0 for DELETE, an invalid code, or a NULL widget. KEY_PREVIEW cannot be sent manually. For KEY and INPUT_KEY, data points to a uint32_t key code; other built-in events must satisfy the corresponding event data contract.

### hiyui_event_data

```c
HIYUI_API void *HIYUI_CALL hiyui_event_data(const hiyui_event_t *event)
```

The event payload, valid only within the current callback. A NULL event returns NULL.

### hiyui_event_off

```c
HIYUI_API void HIYUI_CALL hiyui_event_off(hiyui_event_handle_t *handle)
```

Unbinds the subscription. Repeated calls, NULL, and calls after widget deletion have no additional effect.

### hiyui_event_connected

```c
HIYUI_API int HIYUI_CALL hiyui_event_connected(const hiyui_event_handle_t *handle)
```

Whether the subscription can still receive events. NULL returns 0.

### hiyui_event_handle_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_event_handle_destroy(hiyui_event_handle_t *handle)
```

Unbinds and releases the handle. NULL is safe, and a non-NULL handle can be released only once.

### hiyui_event_code

```c
HIYUI_API hiyui_event_code_t HIYUI_CALL hiyui_event_code(const hiyui_event_t *event)
```

A NULL or unmapped event returns HIYUI_EVENT_UNKNOWN.

### hiyui_event_key

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_event_key(const hiyui_event_t *event)
```

Character keys keep the raw key code. Non-key events or NULL return HIYUI_KEY_NONE.

### hiyui_event_target

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_event_target(const hiyui_event_t *event)
```

Returns the borrowed widget that actually triggered the event. A NULL event returns NULL.

### hiyui_event_current_target

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_event_current_target(const hiyui_event_t *event)
```

Returns the borrowed widget the callback was attached to. A NULL event returns NULL.

### hiyui_event_pointer_position_px

```c
HIYUI_API int HIYUI_CALL hiyui_event_pointer_position_px(const hiyui_event_t *event, hiyui_point_t *out)
```

Gets the local physical coordinates of the object currently propagating the event. Without pointer input, returns 0 and zeroes the output.

### hiyui_event_stop_bubbling

```c
HIYUI_API void HIYUI_CALL hiyui_event_stop_bubbling(hiyui_event_t *event)
```

### hiyui_event_stop_processing

```c
HIYUI_API void HIYUI_CALL hiyui_event_stop_processing(hiyui_event_t *event)
```

Stops further event processing. For the DELETE event, lifecycle cleanup cannot be stopped and the call is a no-op.

### hiyui_mouse_move_register

```c
HIYUI_API int HIYUI_CALL hiyui_mouse_move_register(hiyui_widget_t *widget, hiyui_mouse_move_fn cb, void *user_data, hiyui_destroy_fn destroy)
```

Appends a move listener; deletion or unregister releases user_data. Non-desktop builds return 0.

### hiyui_mouse_wheel_register

```c
HIYUI_API int HIYUI_CALL hiyui_mouse_wheel_register(hiyui_widget_t *widget, hiyui_mouse_wheel_fn cb, void *user_data, hiyui_destroy_fn destroy)
```

Replaces the wheel listener; deletion or unregister releases user_data. Non-desktop builds return 0.

### hiyui_mouse_move_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_mouse_move_unregister(hiyui_widget_t *widget)
```

### hiyui_mouse_wheel_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_mouse_wheel_unregister(hiyui_widget_t *widget)
```
