---
title: "dialog.h"
---

# dialog.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/dialog.h>`

Feedback dialogs: Toast / MessageBox / ConfirmDialog

## Enums

### hiyui_toast_type_t

| Value | Description |
|---|---|
| `HIYUI_TOAST_INFO` = 0 |  |
| `HIYUI_TOAST_SUCCESS` |  |
| `HIYUI_TOAST_WARNING` |  |
| `HIYUI_TOAST_ERROR` |  |

### hiyui_toast_position_t

| Value | Description |
|---|---|
| `HIYUI_TOAST_POS_TOP_CENTER` = 0 |  |
| `HIYUI_TOAST_POS_TOP_RIGHT` |  |
| `HIYUI_TOAST_POS_BOTTOM_LEFT` |  |
| `HIYUI_TOAST_POS_BOTTOM_RIGHT` |  |

## Functions

### hiyui_toast_show

```c
HIYUI_API void HIYUI_CALL hiyui_toast_show(const hiyui_toast_props_t *props)
```

### hiyui_toast_info

```c
HIYUI_API void HIYUI_CALL hiyui_toast_info(const char *msg, int duration, hiyui_toast_position_t pos)
```

### hiyui_toast_success

```c
HIYUI_API void HIYUI_CALL hiyui_toast_success(const char *msg, int duration, hiyui_toast_position_t pos)
```

### hiyui_toast_warning

```c
HIYUI_API void HIYUI_CALL hiyui_toast_warning(const char *msg, int duration, hiyui_toast_position_t pos)
```

### hiyui_toast_error

```c
HIYUI_API void HIYUI_CALL hiyui_toast_error(const char *msg, int duration, hiyui_toast_position_t pos)
```

### hiyui_message_box_show

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_message_box_show(hiyui_widget_t *parent, const hiyui_message_box_props_t *props, hiyui_callback_fn on_confirm, void *ud)
```

### hiyui_message_box_close

```c
HIYUI_API void HIYUI_CALL hiyui_message_box_close(hiyui_widget_t *w)
```

### hiyui_confirm_dialog_show

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_confirm_dialog_show(hiyui_widget_t *parent, const hiyui_confirm_dialog_props_t *props, hiyui_callback_fn on_confirm, hiyui_callback_fn on_cancel, void *ud)
```

### hiyui_confirm_dialog_close

```c
HIYUI_API void HIYUI_CALL hiyui_confirm_dialog_close(hiyui_widget_t *w)
```

### hiyui_confirm_dialog_ask

```c
HIYUI_API void HIYUI_CALL hiyui_confirm_dialog_ask(const char *title, const char *content, hiyui_widget_t *parent, hiyui_int_fn cb, void *ud)
```

One-call static confirm dialog that manages its own lifetime

nullptr means the current active screen. void(int ok, void *ud). ok is 1 for confirm and 0 for cancel, fired only once.
