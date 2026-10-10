---
title: "time_picker.h"
---

# time_picker.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/time_picker.h>`

时间选择器，对齐 hiyui::TimePicker

## 枚举

### hiyui_time_picker_size_t

| 值 | 说明 |
|---|---|
| `HIYUI_TIME_PICKER_SIZE_DEFAULT` = 0 |  |
| `HIYUI_TIME_PICKER_SIZE_SMALL` |  |
| `HIYUI_TIME_PICKER_SIZE_LARGE` |  |

### hiyui_time_picker_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_TIME_PICKER_STATUS_NORMAL` = 0 |  |
| `HIYUI_TIME_PICKER_STATUS_WARNING` |  |
| `HIYUI_TIME_PICKER_STATUS_ERROR` |  |

### hiyui_time_picker_placement_t

| 值 | 说明 |
|---|---|
| `HIYUI_TIME_PICKER_PLACEMENT_BOTTOM_LEFT` = 0 |  |
| `HIYUI_TIME_PICKER_PLACEMENT_BOTTOM_RIGHT` |  |
| `HIYUI_TIME_PICKER_PLACEMENT_TOP_LEFT` |  |
| `HIYUI_TIME_PICKER_PLACEMENT_TOP_RIGHT` |  |

## 类型别名

### hiyui_time_change_fn

```c
typedef void(* hiyui_time_change_fn) (const hiyui_time_picker_value_t *v, void *ud)
```

## 函数

### hiyui_time_picker_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_time_picker_create(hiyui_widget_t *parent, const hiyui_time_picker_props_t *props)
```

### hiyui_time_picker_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_set_value(hiyui_widget_t *w, const hiyui_time_value_t *v, hiyui_notify_t notify)
```

### hiyui_time_picker_get_value

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_get_value(hiyui_widget_t *w, hiyui_time_value_t *out)
```

### hiyui_time_picker_set_range

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_set_range(hiyui_widget_t *w, const hiyui_time_value_t *start, const hiyui_time_value_t *end, hiyui_notify_t notify)
```

### hiyui_time_picker_open

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_open(hiyui_widget_t *w)
```

### hiyui_time_picker_close

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_close(hiyui_widget_t *w)
```

### hiyui_time_picker_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_set_enabled(hiyui_widget_t *w, int enabled)
```

### hiyui_time_picker_set_status

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_set_status(hiyui_widget_t *w, hiyui_time_picker_status_t status)
```

### hiyui_time_picker_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_time_picker_on_change(hiyui_widget_t *widget, hiyui_time_change_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_time_picker_set_footer

```c
HIYUI_API void HIYUI_CALL hiyui_time_picker_set_footer(hiyui_widget_t *w, hiyui_picker_footer_fn builder, void *ud)
```
