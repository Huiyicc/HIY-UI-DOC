---
title: "app.h"
---

# app.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/app.h>`

Application lifecycle and window management

## Macros

### HIYUI_HAS_WINDOW_MANAGER

1 when the target supports independent operating-system windows.

## Enums

### hiyui_win_anim_type_t

| Value | Description |
|---|---|
| `HIYUI_WIN_ANIM_NONE` = 0 |  |
| `HIYUI_WIN_ANIM_FADE` |  |
| `HIYUI_WIN_ANIM_SCALE` |  |
| `HIYUI_WIN_ANIM_ELASTIC_SCALE` |  |
| `HIYUI_WIN_ANIM_FLIP_3D` |  |

### hiyui_win_background_mode_t

| Value | Description |
|---|---|
| `HIYUI_WIN_BACKGROUND_CONTENT` = 0 |  |
| `HIYUI_WIN_BACKGROUND_TRANSPARENT` |  |
| `HIYUI_WIN_BACKGROUND_SYSTEM_BLUR` |  |

### hiyui_transition_t

| Value | Description |
|---|---|
| `HIYUI_TRANSITION_NONE` = 0 |  |
| `HIYUI_TRANSITION_SLIDE_LEFT` |  |
| `HIYUI_TRANSITION_SLIDE_RIGHT` |  |
| `HIYUI_TRANSITION_SLIDE_UP` |  |
| `HIYUI_TRANSITION_SLIDE_DOWN` |  |
| `HIYUI_TRANSITION_FADE` |  |

## Type Aliases

### hiyui_win_close_event_t

```c
typedef struct hiyui_win_close_event_s hiyui_win_close_event_t
```

### hiyui_win_close_request_fn

```c
typedef void(* hiyui_win_close_request_fn) (hiyui_win_close_event_t *event, void *user_data)
```

## Functions

### hiyui_run

```c
HIYUI_API int HIYUI_CALL hiyui_run(hiyui_setup_fn setup, void *user_data)
```

Runs the application main loop, calls setup internally and then enters the LVGL event loop.

### hiyui_quit

```c
HIYUI_API void HIYUI_CALL hiyui_quit(void)
```

Quits the application, call from an event callback.

### hiyui_c_version

```c
HIYUI_API const char *HIYUI_CALL hiyui_c_version(void)
```

Full version string of the linked library, including pre-release identifiers, such as "0.1.0-rc.1".

### hiyui_c_version_number

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_c_version_number(void)
```

Numeric version, (major &lt;&lt; 16) | (minor &lt;&lt; 8) | patch.

### hiyui_win_create

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_win_create(hiyui_app_t *app, const char *title, int width, int height)
```

Creates a window, resizable and with border.

### hiyui_win_create_ex

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_win_create_ex(hiyui_app_t *app, const char *title, int width, int height, int flags)
```

Creates a window with flags.

### hiyui_win_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_title(hiyui_win_t *win, const char *title)
```

Sets the window title.

### hiyui_win_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_size(hiyui_win_t *win, int width, int height)
```

Sets the window size, height is the content area height. In borderless mode the title bar and menu bar are added on top of it.

### hiyui_win_show

```c
HIYUI_API void HIYUI_CALL hiyui_win_show(hiyui_win_t *win)
```

Shows the window.

### hiyui_win_hide

```c
HIYUI_API void HIYUI_CALL hiyui_win_hide(hiyui_win_t *win)
```

Hides the window.

### hiyui_win_is_shown

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_win_is_shown(const hiyui_win_t *win)
```

Queries whether the window is shown.

### hiyui_win_set_root

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_root(hiyui_win_t *win, hiyui_widget_t *root)
```

Sets the window root widget and takes ownership of widget.

### hiyui_win_close

```c
HIYUI_API void HIYUI_CALL hiyui_win_close(hiyui_win_t *win)
```

Closes the window.

### hiyui_win_request_back

```c
HIYUI_API int HIYUI_CALL hiyui_win_request_back(hiyui_win_t *win)
```

Synchronously handles popups, input cancel, partial regions and current page history. The root page does not quit the application.

Returns 1 when consumed. Returns 0 for NULL, closed, not shown, inactive shared page, re-entry or nothing handled.

### hiyui_win_screen

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_win_screen(hiyui_win_t *win)
```

Gets the current screen object of the window.

### hiyui_app_open_window

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_app_open_window(const hiyui_win_props_t *props)
```

Creates a window at runtime, not necessarily inside setup, equivalent to C++ Application::openWindow.

New window handle, NULL when no application is active. On non-per-pixel-alpha platforms Scale, ElasticScale and Flip3D degrade to None.

### hiyui_app_navigate

```c
HIYUI_API int HIYUI_CALL hiyui_app_navigate(hiyui_win_t *win, hiyui_transition_t transition)
```

Navigates pages and records history. Navigating to the current target again adds no history.

### hiyui_app_go_back

```c
HIYUI_API int HIYUI_CALL hiyui_app_go_back(hiyui_transition_t transition)
```

Closes the current navigation page and restores the previous one, no effect on the root page.

### hiyui_win_set_background

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_background(hiyui_win_t *win, const hiyui_win_background_t *background)
```

Replaces the window background, NULL restores the theme base color.

### hiyui_win_get_background_mode

```c
HIYUI_API hiyui_win_background_mode_t HIYUI_CALL hiyui_win_get_background_mode(hiyui_win_t *win)
```

Queries the background mode adopted by the window.

Returns HIYUI_WIN_BACKGROUND_CONTENT after failed creation or removal.

### hiyui_win_close_event_cancel

```c
HIYUI_API void HIYUI_CALL hiyui_win_close_event_cancel(hiyui_win_close_event_t *event)
```

Cancels this close request, event is valid only during the callback.

### hiyui_win_on_close_request

```c
HIYUI_API int HIYUI_CALL hiyui_win_on_close_request(hiyui_win_t *win, hiyui_win_close_request_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds a close request callback, repeated binding appends. Any callback cancel keeps the window. Bindings are released automatically when the window closes.

Returns 1 on successful registration. Returns 0 for invalid arguments or when the window has already been requested to destroy.

### hiyui_win_menu

```c
HIYUI_API void HIYUI_CALL hiyui_win_menu(hiyui_win_t *win, const hiyui_menu_bar_item_t *items, int count)
```

Sets the window application menu, effective only on borderless desktop windows. Silently ignored on other platforms.
