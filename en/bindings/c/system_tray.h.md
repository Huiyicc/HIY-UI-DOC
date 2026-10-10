---
title: "system_tray.h"
---

# system_tray.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/system_tray.h>`

System tray

Windows and macOS provide a native tray. On other platforms the handle can be created but valid() returns 0, and other operations silently do nothing.

## Enums

### hiyui_tray_icon_t

| Value | Description |
|---|---|
| `HIYUI_TRAY_ICON_SELF` = 0 |  |
| `HIYUI_TRAY_ICON_NONE` |  |
| `HIYUI_TRAY_ICON_CUSTOM` |  |

### hiyui_tray_message_icon_t

| Value | Description |
|---|---|
| `HIYUI_TRAY_MESSAGE_ICON_NONE` = 0 |  |
| `HIYUI_TRAY_MESSAGE_ICON_INFO` |  |
| `HIYUI_TRAY_MESSAGE_ICON_WARNING` |  |
| `HIYUI_TRAY_MESSAGE_ICON_CRITICAL` |  |

## Type Aliases

### hiyui_system_tray_t

```c
typedef struct hiyui_system_tray_s hiyui_system_tray_t
```

### hiyui_system_tray_click_fn

```c
typedef void(* hiyui_system_tray_click_fn) (int32_t screen_x, int32_t screen_y, void *user_data)
```

### hiyui_system_tray_notify_fn

```c
typedef void(* hiyui_system_tray_notify_fn) (void *user_data)
```

## Functions

### hiyui_system_tray_create

```c
HIYUI_API hiyui_system_tray_t *HIYUI_CALL hiyui_system_tray_create(hiyui_win_t *host_win, const hiyui_system_tray_props_t *props)
```

Creates a tray bound to the host window; a NULL props uses default icon properties.

### hiyui_system_tray_valid

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_system_tray_valid(const hiyui_system_tray_t *tray)
```

Queries whether the tray was created successfully on the current platform.

### hiyui_system_tray_on_left_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_left_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

Sets the left-click callback. Pass NULL to clear it.

### hiyui_system_tray_on_right_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_right_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

Sets the right-click callback; when a menu is set the menu takes over right-click events.

### hiyui_system_tray_on_double_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_double_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

Sets the left double-click callback. Pass NULL to clear it.

### hiyui_system_tray_on_middle_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_middle_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

Sets the middle-click callback. Pass NULL to clear it.

### hiyui_system_tray_on_message_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_message_click(hiyui_system_tray_t *tray, hiyui_system_tray_notify_fn callback, void *user_data)
```

Sets the notification balloon click callback. Pass NULL to clear it.

### hiyui_system_tray_set_menu

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_menu(hiyui_system_tray_t *tray, const hiyui_context_menu_item_t *items, int count)
```

Sets the right-click menu; menu text and shortcut strings are copied during the call.

### hiyui_system_tray_set_menu_max_height

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_menu_max_height(hiyui_system_tray_t *tray, int32_t max_height)
```

Sets the tray menu panel height cap; max_height 0 uses 70 percent of the screen work area height.

### hiyui_system_tray_set_icon

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_icon(hiyui_system_tray_t *tray, hiyui_tray_icon_t icon, const void *icon_src)
```

Changes the icon at runtime; icon_src is read only for the CUSTOM icon mode.

### hiyui_system_tray_set_tooltip

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_tooltip(hiyui_system_tray_t *tray, const char *text)
```

Changes the UTF-8 tooltip text at runtime.

### hiyui_system_tray_show_message

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_show_message(hiyui_system_tray_t *tray, const char *title, const char *text, hiyui_tray_message_icon_t icon, uint32_t timeout_ms)
```

Shows a notification balloon; natively supported only on Windows, silently ignored on other platforms.

### hiyui_system_tray_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_destroy(hiyui_system_tray_t *tray)
```

Destroys the tray handle.
