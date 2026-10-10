---
title: "tool_bar.h"
---

# tool_bar.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/tool_bar.h>`

## Enums

### hiyui_tool_orientation_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_HORIZONTAL` |  |
| `HIYUI_TOOL_VERTICAL` |  |

### hiyui_tool_overflow_mode_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_OVERFLOW_MENU` |  |
| `HIYUI_TOOL_OVERFLOW_WRAP` |  |
| `HIYUI_TOOL_OVERFLOW_SCROLL` |  |

### hiyui_tool_overflow_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_AUTO` |  |
| `HIYUI_TOOL_NEVER` |  |
| `HIYUI_TOOL_ALWAYS` |  |

### hiyui_tool_button_kind_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_COMMAND` |  |
| `HIYUI_TOOL_TOGGLE` |  |
| `HIYUI_TOOL_RADIO` |  |
| `HIYUI_TOOL_DROPDOWN` |  |
| `HIYUI_TOOL_SPLIT` |  |

### hiyui_tool_check_state_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_OFF` |  |
| `HIYUI_TOOL_ON` |  |
| `HIYUI_TOOL_MIXED` |  |

### hiyui_tool_display_t

| Value | Description |
|---|---|
| `HIYUI_TOOL_ICON_AND_TEXT` |  |
| `HIYUI_TOOL_ICON_ONLY` |  |
| `HIYUI_TOOL_TEXT_ONLY` |  |

## Type Aliases

### hiyui_tool_menu_item_t

```c
typedef struct hiyui_tool_menu_item_s hiyui_tool_menu_item_t
```

Menu input is copied recursively during the set_menu call; non-separator ids are non-zero and unique across the whole menu.

### hiyui_tool_activate_fn

```c
typedef void(* hiyui_tool_activate_fn) (const hiyui_tool_event_t *event, void *user_data)
```

event is valid only during the callback and may be copied by value.

### hiyui_tool_change_fn

```c
typedef void(* hiyui_tool_change_fn) (hiyui_tool_check_state_t value, void *user_data)
```

### hiyui_tool_menu_snapshot_t

```c
typedef struct hiyui_tool_menu_snapshot_s hiyui_tool_menu_snapshot_t
```

## Functions

### hiyui_tool_bar_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_props_init(hiyui_tool_bar_props_t *props)
```

### hiyui_tool_button_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_props_init(hiyui_tool_button_props_t *props)
```

### hiyui_tool_group_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_group_props_init(hiyui_tool_group_props_t *props)
```

### hiyui_tool_separator_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_separator_props_init(hiyui_tool_separator_props_t *props)
```

### hiyui_tool_bar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_bar_create(hiyui_widget_t *parent, const hiyui_tool_bar_props_t *props)
```

props NULL uses defaults and parent NULL returns NULL; the widget is destroyed with its parent.

### hiyui_tool_button_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_button_create(hiyui_widget_t *parent, const hiyui_tool_button_props_t *props)
```

### hiyui_tool_group_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_group_create(hiyui_widget_t *parent, const hiyui_tool_group_props_t *props)
```

### hiyui_tool_separator_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_separator_create(hiyui_widget_t *parent, const hiyui_tool_separator_props_t *props)
```

### hiyui_tool_bar_set_orientation

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_orientation(hiyui_widget_t *bar, hiyui_tool_orientation_t value)
```

### hiyui_tool_bar_get_orientation

```c
HIYUI_API hiyui_tool_orientation_t HIYUI_CALL hiyui_tool_bar_get_orientation(hiyui_widget_t *bar)
```

### hiyui_tool_bar_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_overflow(hiyui_widget_t *bar, hiyui_tool_overflow_mode_t value)
```

### hiyui_tool_bar_get_overflow

```c
HIYUI_API hiyui_tool_overflow_mode_t HIYUI_CALL hiyui_tool_bar_get_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_set_button_size

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_button_size(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_enabled(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_set_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_hidden(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_append

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_append(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_move_item

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_move_item(hiyui_widget_t *bar, hiyui_widget_t *item, int index)
```

### hiyui_tool_bar_remove_item

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_remove_item(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_clear

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_clear(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_get_item_count(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_item

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_bar_get_item(hiyui_widget_t *bar, int index)
```

Returns a borrowed widget; out of range or a NULL bar returns NULL.

### hiyui_tool_bar_refresh

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_refresh(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_overflow_count

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_get_overflow_count(hiyui_widget_t *bar)
```

### hiyui_tool_bar_is_overflowed

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_is_overflowed(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_open_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_open_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_close_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_close_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_is_overflow_open

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_is_overflow_open(hiyui_widget_t *bar)
```

### hiyui_tool_group_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_group_set_overflow(hiyui_widget_t *group, hiyui_tool_overflow_t value)
```

### hiyui_tool_group_get_overflow

```c
HIYUI_API hiyui_tool_overflow_t HIYUI_CALL hiyui_tool_group_get_overflow(hiyui_widget_t *group)
```

### hiyui_tool_button_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_text(hiyui_widget_t *button, const char *text)
```

### hiyui_tool_button_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_tool_button_get_text(hiyui_widget_t *button, char *buffer, size_t capacity)
```

Returns the required byte count excluding the trailing NUL; with non-zero capacity it writes a NUL-terminated truncated copy.

### hiyui_tool_button_bind_text

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_bind_text(hiyui_widget_t *button, const hiyui_localized_text_t *text)
```

### hiyui_tool_button_set_icon

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_icon(hiyui_widget_t *button, uint32_t codepoint)
```

### hiyui_tool_button_set_icon_src

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_icon_src(hiyui_widget_t *button, const void *source)
```

### hiyui_tool_button_set_display

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_display(hiyui_widget_t *button, hiyui_tool_display_t value)
```

### hiyui_tool_button_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_checked(hiyui_widget_t *button, hiyui_tool_check_state_t value, hiyui_notify_t notify)
```

### hiyui_tool_button_get_checked

```c
HIYUI_API hiyui_tool_check_state_t HIYUI_CALL hiyui_tool_button_get_checked(hiyui_widget_t *button)
```

### hiyui_tool_button_get_kind

```c
HIYUI_API hiyui_tool_button_kind_t HIYUI_CALL hiyui_tool_button_get_kind(hiyui_widget_t *button)
```

### hiyui_tool_button_get_command_id

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_get_command_id(hiyui_widget_t *button)
```

### hiyui_tool_button_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_overflow(hiyui_widget_t *button, hiyui_tool_overflow_t value)
```

### hiyui_tool_button_get_overflow

```c
HIYUI_API hiyui_tool_overflow_t HIYUI_CALL hiyui_tool_button_get_overflow(hiyui_widget_t *button)
```

### hiyui_tool_button_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_enabled(hiyui_widget_t *button, int value)
```

### hiyui_tool_button_set_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_hidden(hiyui_widget_t *button, int value)
```

### hiyui_tool_button_set_menu

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_set_menu(hiyui_widget_t *button, const hiyui_tool_menu_item_t *items, size_t count)
```

Returns 1 on success; invalid data rejects the whole replacement, and count 0 clears the menu.

### hiyui_tool_button_get_menu

```c
HIYUI_API hiyui_tool_menu_snapshot_t *HIYUI_CALL hiyui_tool_button_get_menu(hiyui_widget_t *button)
```

Returns a caller-owned menu snapshot; widget changes or destruction do not affect the copy.

### hiyui_tool_menu_snapshot_items

```c
HIYUI_API const hiyui_tool_menu_item_t *HIYUI_CALL hiyui_tool_menu_snapshot_items(const hiyui_tool_menu_snapshot_t *snapshot, size_t *count)
```

### hiyui_tool_menu_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_tool_menu_snapshot_destroy(hiyui_tool_menu_snapshot_t *snapshot)
```

### hiyui_tool_button_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_activate(hiyui_widget_t *button)
```

### hiyui_tool_button_activate_menu

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_activate_menu(hiyui_widget_t *button, int id)
```

### hiyui_tool_button_open_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_open_menu(hiyui_widget_t *button)
```

### hiyui_tool_button_close_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_close_menu(hiyui_widget_t *button)
```

### hiyui_tool_button_is_menu_open

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_is_menu_open(hiyui_widget_t *button)
```

### hiyui_tool_button_set_shortcut

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_set_shortcut(hiyui_widget_t *button, const hiyui_hotkey_t *spec)
```

Binds a shortcut on the desktop SDL backend and returns 0 on other backends; a NULL spec unbinds.

### hiyui_tool_button_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_on_activate(hiyui_widget_t *button, hiyui_tool_activate_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Appends a subscription; destroy takes ownership of user_data and is also released when registration fails, and a non-NULL out_handle must initially point to NULL.

### hiyui_tool_button_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_on_change(hiyui_widget_t *button, hiyui_tool_change_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
