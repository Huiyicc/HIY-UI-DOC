---
title: "context_menu.h"
---

# context_menu.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/context_menu.h>`

ContextMenu definitions and right-click binding API.

## Enums

### hiyui_popup_mode_t

| Value | Description |
|---|---|
| `HIYUI_POPUP_MODE_INLINE` = 0 |  |
| `HIYUI_POPUP_MODE_WINDOW` |  |

## Type Aliases

### hiyui_context_menu_item_t

```c
typedef struct hiyui_context_menu_item_t hiyui_context_menu_item_t
```

Recursively nested menu item; the shortcut text is generated automatically when shortcut is NULL and an accelerator is bound. action_ex takes precedence over action, and action_ud is passed to action_ex.

## Functions

### hiyui_wdg_context_menu

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_context_menu(hiyui_widget_t *w, const hiyui_context_menu_item_t *items, int count, hiyui_popup_mode_t mode)
```

Binds a context menu to a widget.


Menu strings and child arrays are read during this call.

### hiyui_context_menu_open

```c
HIYUI_API int HIYUI_CALL hiyui_context_menu_open(hiyui_widget_t *screen, hiyui_widget_t *owner, const hiyui_context_menu_item_t *items, int count, int x, int y, hiyui_popup_mode_t mode, int max_height, hiyui_callback_fn closed, void *user_data, hiyui_destroy_fn destroy)
```

Opens a menu at physical screen coordinates; returns 0 on failure. Strings and children are copied. Keep action_ud valid until the menu is closed and any selected action returns. destroy releases user_data after close and any selected action returns, or after a failed open. closed runs only after a successful open. Non-desktop builds return 0.

### hiyui_context_menu_close

```c
HIYUI_API void HIYUI_CALL hiyui_context_menu_close(hiyui_widget_t *screen)
```

### hiyui_context_menu_close_all

```c
HIYUI_API void HIYUI_CALL hiyui_context_menu_close_all(void)
```
