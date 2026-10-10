---
title: "title_bar.h"
---

# title_bar.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/title_bar.h>`

无边框窗口标题栏

## 枚举

### hiyui_title_bar_item_t

| 值 | 说明 |
|---|---|
| `HIYUI_TITLE_BAR_ITEM_TITLE` = 1 << 0 |  |
| `HIYUI_TITLE_BAR_ITEM_MIN` = 1 << 1 |  |
| `HIYUI_TITLE_BAR_ITEM_MAX` = 1 << 2 |  |
| `HIYUI_TITLE_BAR_ITEM_CLOSE` = 1 << 3 |  |
| `HIYUI_TITLE_BAR_ITEM_DEFAULT` = 0x0F |  |

### hiyui_title_bar_layout_t

| 值 | 说明 |
|---|---|
| `HIYUI_TITLE_BAR_LAYOUT_PLATFORM_DEFAULT` = 0 |  |
| `HIYUI_TITLE_BAR_LAYOUT_RIGHT` |  |
| `HIYUI_TITLE_BAR_LAYOUT_LEFT` |  |

### hiyui_title_bar_icon_t

| 值 | 说明 |
|---|---|
| `HIYUI_TITLE_BAR_ICON_DEFAULT` = 0 |  |
| `HIYUI_TITLE_BAR_ICON_NONE` |  |
| `HIYUI_TITLE_BAR_ICON_SELF` |  |
| `HIYUI_TITLE_BAR_ICON_CUSTOM` |  |
| `HIYUI_TITLE_BAR_ICON_BYTES` |  |

## 函数

### hiyui_title_bar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_title_bar_create(hiyui_widget_t *parent, const hiyui_title_bar_props_t *props)
```

创建标题栏；icon_bytes 须在标题栏生命周期内有效。

### hiyui_title_bar_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_title_bar_set_title(hiyui_widget_t *w, const char *title)
```

### hiyui_title_bar_set_maximized

```c
HIYUI_API void HIYUI_CALL hiyui_title_bar_set_maximized(hiyui_widget_t *w, int maximized)
```

非 0 显示还原图标，0 显示全屏图标。

### hiyui_title_bar_get_layout

```c
HIYUI_API hiyui_title_bar_layout_t HIYUI_CALL hiyui_title_bar_get_layout(hiyui_widget_t *w)
```

**返回值：** 控制按钮布局；w 为 NULL 时返回平台默认。

### hiyui_title_bar_on_minimize

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_minimize(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_maximize

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_maximize(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_close

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_close(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_double_click

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_double_click(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

双击标题栏非按钮区域时触发。

### hiyui_title_bar_on_drag_begin

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_drag_begin(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

按下标题栏非按钮区域时触发一次，用于发起窗口拖拽。
