---
title: "terminal.h"
---

# terminal.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/terminal.h>`

## Enums

### hiyui_terminal_input_type_t

| Value | Description |
|---|---|
| `HIYUI_TERMINAL_INPUT_TEXT` |  |
| `HIYUI_TERMINAL_INPUT_KEY` |  |
| `HIYUI_TERMINAL_INPUT_CHARACTER` |  |
| `HIYUI_TERMINAL_INPUT_PASTE` |  |
| `HIYUI_TERMINAL_INPUT_FOCUS` |  |
| `HIYUI_TERMINAL_INPUT_MOUSE` |  |

### hiyui_terminal_key_t

| Value | Description |
|---|---|
| `HIYUI_TERMINAL_KEY_NONE` |  |
| `HIYUI_TERMINAL_KEY_ENTER` |  |
| `HIYUI_TERMINAL_KEY_TAB` |  |
| `HIYUI_TERMINAL_KEY_BACKSPACE` |  |
| `HIYUI_TERMINAL_KEY_ESCAPE` |  |
| `HIYUI_TERMINAL_KEY_UP` |  |
| `HIYUI_TERMINAL_KEY_DOWN` |  |
| `HIYUI_TERMINAL_KEY_LEFT` |  |
| `HIYUI_TERMINAL_KEY_RIGHT` |  |
| `HIYUI_TERMINAL_KEY_INSERT` |  |
| `HIYUI_TERMINAL_KEY_DELETE` |  |
| `HIYUI_TERMINAL_KEY_HOME` |  |
| `HIYUI_TERMINAL_KEY_END` |  |
| `HIYUI_TERMINAL_KEY_PAGE_UP` |  |
| `HIYUI_TERMINAL_KEY_PAGE_DOWN` |  |
| `HIYUI_TERMINAL_KEY_F1` = 257 |  |
| `HIYUI_TERMINAL_KEY_F2` |  |
| `HIYUI_TERMINAL_KEY_F3` |  |
| `HIYUI_TERMINAL_KEY_F4` |  |
| `HIYUI_TERMINAL_KEY_F5` |  |
| `HIYUI_TERMINAL_KEY_F6` |  |
| `HIYUI_TERMINAL_KEY_F7` |  |
| `HIYUI_TERMINAL_KEY_F8` |  |
| `HIYUI_TERMINAL_KEY_F9` |  |
| `HIYUI_TERMINAL_KEY_F10` |  |
| `HIYUI_TERMINAL_KEY_F11` |  |
| `HIYUI_TERMINAL_KEY_F12` |  |

## Type Aliases

### hiyui_terminal_input_fn

```c
typedef void(HIYUI_CALL * hiyui_terminal_input_fn) (const hiyui_terminal_input_t *input, void *user_data)
```

### hiyui_terminal_model_t

```c
typedef struct hiyui_terminal_model hiyui_terminal_model_t
```

### hiyui_terminal_data_fn

```c
typedef void(HIYUI_CALL * hiyui_terminal_data_fn) (const char *data, size_t size, void *user_data)
```

The data is valid only during the callback and may contain zero bytes. The callback is invoked on the UI thread.

### hiyui_terminal_resize_fn

```c
typedef void(HIYUI_CALL * hiyui_terminal_resize_fn) (hiyui_terminal_size_t size, void *user_data)
```

## Functions

### hiyui_terminal_model_create

```c
HIYUI_API hiyui_terminal_model_t *HIYUI_CALL hiyui_terminal_model_create(hiyui_terminal_size_t size, int scrollback_lines)
```

Creates a windowless VT model. Non-positive dimensions become 1. A negative scrollback line count becomes zero. Returns NULL on failure.

### hiyui_terminal_model_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_destroy(hiyui_terminal_model_t *model)
```

Releases the model. NULL is a no-op.

### hiyui_terminal_model_write

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_write(hiyui_terminal_model_t *model, const char *data, size_t size)
```

Calls on the model must be serialized. A NULL model or NULL data is a no-op.

### hiyui_terminal_model_input

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_input(hiyui_terminal_model_t *model, const hiyui_terminal_input_t *input)
```

### hiyui_terminal_model_resize

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_resize(hiyui_terminal_model_t *model, hiyui_terminal_size_t size)
```

### hiyui_terminal_model_get_size

```c
HIYUI_API hiyui_terminal_size_t HIYUI_CALL hiyui_terminal_model_get_size(hiyui_terminal_model_t *model)
```

### hiyui_terminal_model_get_screen

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_model_get_screen(hiyui_terminal_model_t *model, char *buffer, size_t capacity)
```

Returns the required length. With a non-zero capacity, copies at most capacity-1 bytes and adds a zero terminator. A NULL model yields an empty value.

### hiyui_terminal_model_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_model_get_text(hiyui_terminal_model_t *model, char *buffer, size_t capacity)
```

Returns the required length. With a non-zero capacity, copies at most capacity-1 bytes and adds a zero terminator. A NULL model yields an empty value.

### hiyui_terminal_model_take_output

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_take_output(hiyui_terminal_model_t *model, void(HIYUI_CALL *callback)(const char *, size_t, void *), void *user_data)
```

Passes all pending output bytes to the callback and clears them. A NULL model or callback is a no-op.

### hiyui_terminal_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_props_init(hiyui_terminal_props_t *props)
```

Fills in defaults matching TerminalProps. NULL is a no-op.

### hiyui_terminal_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_terminal_create(hiyui_widget_t *parent, const hiyui_terminal_props_t *props)
```

Creates a terminal inside the parent widget. Returns NULL when the parent is NULL or creation fails.

### hiyui_terminal_write

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_write(hiyui_widget_t *widget, const char *data, size_t size)
```

Writes output bytes. A NULL widget, NULL data, or zero length is a no-op.

### hiyui_terminal_paste

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_paste(hiyui_widget_t *widget, const char *data, size_t size)
```

Sends pasted text. A NULL widget, NULL data, or zero length is a no-op.

### hiyui_terminal_clear_scrollback

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_clear_scrollback(hiyui_widget_t *widget)
```

### hiyui_terminal_scroll_lines

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_scroll_lines(hiyui_widget_t *widget, int lines)
```

### hiyui_terminal_set_font_size

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_font_size(hiyui_widget_t *widget, int size)
```

### hiyui_terminal_copy_selection

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_copy_selection(hiyui_widget_t *widget)
```

### hiyui_terminal_get_terminal_size

```c
HIYUI_API hiyui_terminal_size_t HIYUI_CALL hiyui_terminal_get_terminal_size(hiyui_widget_t *widget)
```

A NULL widget returns zero rows and zero columns.

### hiyui_terminal_set_terminal_size

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_terminal_size(hiyui_widget_t *widget, hiyui_terminal_size_t size)
```

Fixes the grid. A non-positive dimension restores the automatic grid. A NULL widget is a no-op.

### hiyui_terminal_set_read_only

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_read_only(hiyui_widget_t *widget, hiyui_bool_t value)
```

### hiyui_terminal_get_read_only

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_terminal_get_read_only(hiyui_widget_t *widget)
```

A NULL widget returns HIYUI_BOOL_FALSE.

### hiyui_terminal_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_text(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

Returns the required byte count, excluding the terminating zero. With a non-zero capacity, copies at most capacity-1 bytes and adds a zero terminator.

### hiyui_terminal_get_title

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_title(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

Returns the required byte count, excluding the terminating zero. With a non-zero capacity, copies at most capacity-1 bytes and adds a zero terminator.

### hiyui_terminal_get_selection_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_selection_text(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

Returns the required byte count, excluding the terminating zero. With a non-zero capacity, copies at most capacity-1 bytes and adds a zero terminator.

### hiyui_terminal_on_data

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_data(hiyui_widget_t *widget, hiyui_terminal_data_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds the data-sent event. Returns 1 on success and 0 on failure. Follows the event handle and destroy ownership contract.

### hiyui_terminal_on_input

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_input(hiyui_widget_t *widget, hiyui_terminal_input_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds raw user input, excluding protocol responses. Ownership and return value match hiyui_terminal_on_data.

### hiyui_terminal_on_resize

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_resize(hiyui_widget_t *widget, hiyui_terminal_resize_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds the grid change event. Ownership and return value match hiyui_terminal_on_data.

### hiyui_terminal_on_title_change

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_title_change(hiyui_widget_t *widget, hiyui_terminal_data_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds the title change event. The UTF-8 bytes are valid only during the callback. Ownership and return value match hiyui_terminal_on_data.
