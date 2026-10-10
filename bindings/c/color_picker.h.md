---
title: "color_picker.h"
---

# color_picker.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/color_picker.h>`

颜色选择器，对齐 hiyui::ColorPicker

## 枚举

### hiyui_color_picker_size_t

| 值 | 说明 |
|---|---|
| `HIYUI_COLOR_PICKER_SIZE_SMALL` = 0 |  |
| `HIYUI_COLOR_PICKER_SIZE_MEDIUM` |  |
| `HIYUI_COLOR_PICKER_SIZE_LARGE` |  |

## 类型别名

### hiyui_color_picker_change_fn

```c
typedef void(* hiyui_color_picker_change_fn) (uint32_t color, uint8_t alpha, void *ud)
```

## 函数

### hiyui_color_picker_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_color_picker_create(hiyui_widget_t *parent, const hiyui_color_picker_props_t *props)
```

### hiyui_color_picker_set_color

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_set_color(hiyui_widget_t *w, uint32_t color, hiyui_notify_t notify)
```

运行时设置当前颜色，0xRRGGBB

### hiyui_color_picker_get_color

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_color_picker_get_color(hiyui_widget_t *w)
```

### hiyui_color_picker_set_alpha

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_set_alpha(hiyui_widget_t *w, uint8_t alpha, hiyui_notify_t notify)
```

运行时设置 Alpha [0,255]，需 show_alpha 启用

### hiyui_color_picker_get_alpha

```c
HIYUI_API uint8_t HIYUI_CALL hiyui_color_picker_get_alpha(hiyui_widget_t *w)
```

### hiyui_color_picker_open

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_open(hiyui_widget_t *w)
```

打开 / 关闭弹出面板，仅非 panel_mode 有效

### hiyui_color_picker_close

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_close(hiyui_widget_t *w)
```

### hiyui_color_picker_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_color_picker_on_change(hiyui_widget_t *widget, hiyui_color_picker_change_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

颜色变化回调，拖动色板或输入颜色时触发
