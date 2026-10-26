---
title: "state.h"
---

# state.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/state.h>`

C interface for reactive state, subscriptions and widget bindings

## Enums

### hiyui_state_status_t

| Value | Description |
|---|---|
| `HIYUI_STATE_OK` = 0 |  |
| `HIYUI_STATE_UNCHANGED` |  |
| `HIYUI_STATE_INVALID_ARGUMENT` |  |
| `HIYUI_STATE_INVALID_STATE` |  |
| `HIYUI_STATE_INVALID_VALUE` |  |
| `HIYUI_STATE_INVALID_OPERATION` |  |
| `HIYUI_STATE_CYCLE` |  |
| `HIYUI_STATE_OUT_OF_MEMORY` |  |
| `HIYUI_STATE_CALLBACK_FAILED` |  |

### hiyui_binding_phase_t

| Value | Description |
|---|---|
| `HIYUI_BINDING_PENDING` = 0 |  |
| `HIYUI_BINDING_CONNECTED` |  |
| `HIYUI_BINDING_DISCONNECTED` |  |
| `HIYUI_BINDING_TARGET_GONE` |  |
| `HIYUI_BINDING_FAILED` |  |

### hiyui_binding_error_t

| Value | Description |
|---|---|
| `HIYUI_BINDING_ERROR_NONE` = 0 |  |
| `HIYUI_BINDING_ERROR_INVALID_STATE` |  |
| `HIYUI_BINDING_ERROR_CONSTRAINT_MISMATCH` |  |
| `HIYUI_BINDING_ERROR_CONVERT_FAILED` |  |
| `HIYUI_BINDING_ERROR_APPLY_FAILED` |  |

## Type Aliases

### hiyui_state_t

```c
typedef struct hiyui_state_s hiyui_state_t
```

### hiyui_state_sub_t

```c
typedef struct hiyui_state_sub_s hiyui_state_sub_t
```

### hiyui_binding_t

```c
typedef struct hiyui_binding_s hiyui_binding_t
```

### hiyui_state_int_fn

```c
typedef void(HIYUI_CALL * hiyui_state_int_fn) (int32_t current, int32_t previous, void *user_data)
```

### hiyui_state_bool_fn

```c
typedef void(HIYUI_CALL * hiyui_state_bool_fn) (hiyui_bool_t current, hiyui_bool_t previous, void *user_data)
```

### hiyui_state_string_fn

```c
typedef void(HIYUI_CALL * hiyui_state_string_fn) (const char *current, const char *previous, void *user_data)
```

The string pointers are valid only during the callback.

### hiyui_state_int_text_fn

```c
typedef const char *(HIYUI_CALL * hiyui_state_int_text_fn) (int32_t value, void *user_data)
```

The return value is copied immediately; NULL displays empty text.

## Functions

### hiyui_state_create_int

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_int(int32_t initial)
```

All functions are called on the UI thread; string inputs are copied at call time. Returns NULL on failure; fails when min is greater than max, initial is not valid UTF-8 or contains an embedded NUL.

### hiyui_state_create_int_bounded

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_int_bounded(int32_t initial, int32_t min, int32_t max)
```

### hiyui_state_create_bool

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_bool(hiyui_bool_t initial)
```

### hiyui_state_create_string

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_string(const char *initial)
```

### hiyui_state_create_string_text

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_string_text(const char *initial, hiyui_text_rules_t rules)
```

### hiyui_state_release

```c
HIYUI_API void HIYUI_CALL hiyui_state_release(hiyui_state_t *state)
```

Releases the caller reference; unreleased bindings and subscriptions stay valid and the last reference frees the state.

### hiyui_state_get_int

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_get_int(hiyui_state_t *state, int32_t *out)
```

Writes the current value to out when non-NULL; a type mismatch returns InvalidArgument.

### hiyui_state_get_bool

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_get_bool(hiyui_state_t *state, hiyui_bool_t *out)
```

### hiyui_state_get_string

```c
HIYUI_API size_t HIYUI_CALL hiyui_state_get_string(hiyui_state_t *state, char *buffer, size_t capacity)
```

Two-call output: returns the required byte count including NUL, 0 on failure; buffer may be NULL, and an insufficient capacity greater than 0 writes an empty string.

### hiyui_state_set_int

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_int(hiyui_state_t *state, int32_t value, hiyui_state_result_t *result)
```

trySet semantics: normalizes and commits, writes the result to result (nullable) without throwing.

### hiyui_state_set_bool

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_bool(hiyui_state_t *state, hiyui_bool_t value, hiyui_state_result_t *result)
```

### hiyui_state_set_string

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_string(hiyui_state_t *state, const char *value, hiyui_state_result_t *result)
```

### hiyui_state_watch_int

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_int(hiyui_state_t *state, hiyui_state_int_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

The callback is not invoked on registration; returns NULL on a handle type mismatch or creation failure and destroy is called exactly once.

### hiyui_state_watch_bool

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_bool(hiyui_state_t *state, hiyui_state_bool_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_state_watch_string

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_string(hiyui_state_t *state, hiyui_state_string_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_state_sub_release

```c
HIYUI_API void HIYUI_CALL hiyui_state_sub_release(hiyui_state_sub_t *subscription)
```

Cancels the subscription and frees the handle; a call during dispatch takes effect after the dispatch returns.

### hiyui_binding_off

```c
HIYUI_API void HIYUI_CALL hiyui_binding_off(hiyui_binding_t *binding)
```

Unbinds; repeated calls and calls after release have no extra effect.

### hiyui_binding_status

```c
HIYUI_API hiyui_binding_phase_t HIYUI_CALL hiyui_binding_status(hiyui_binding_t *binding)
```

### hiyui_binding_error

```c
HIYUI_API hiyui_binding_error_t HIYUI_CALL hiyui_binding_error(hiyui_binding_t *binding)
```

### hiyui_label_bind_state_text

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_label_bind_state_text(hiyui_widget_t *label, hiyui_state_t *state, hiyui_binding_t **handle)
```

Binds only mounted widgets of the matching type; returns InvalidArgument when handle is non-NULL and already targets a binding.

### hiyui_label_bind_state_text_convert

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_label_bind_state_text_convert(hiyui_widget_t *label, hiyui_state_t *state, hiyui_state_int_text_fn convert, void *user_data, hiyui_destroy_fn destroy, hiyui_binding_t **handle)
```

### hiyui_slider_bind_state_value

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_slider_bind_state_value(hiyui_widget_t *slider, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_slider_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_slider_bind_model(hiyui_widget_t *slider, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_switch_bind_state_checked

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_switch_bind_state_checked(hiyui_widget_t *switch_widget, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_switch_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_switch_bind_model(hiyui_widget_t *switch_widget, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_input_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_input_bind_model(hiyui_widget_t *input, hiyui_state_t *state, hiyui_binding_t **handle)
```
