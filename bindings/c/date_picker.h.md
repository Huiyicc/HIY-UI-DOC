---
title: "date_picker.h"
---

# date_picker.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/date_picker.h>`

日期选择器，对齐 hiyui::DatePicker

## 枚举

### hiyui_date_picker_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_DATE_PICKER_TYPE_DATE` = 0 |  |
| `HIYUI_DATE_PICKER_TYPE_WEEK` |  |
| `HIYUI_DATE_PICKER_TYPE_MONTH` |  |
| `HIYUI_DATE_PICKER_TYPE_QUARTER` |  |
| `HIYUI_DATE_PICKER_TYPE_YEAR` |  |

### hiyui_date_panel_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_DATE_PANEL_MODE_DAY` = 0 |  |
| `HIYUI_DATE_PANEL_MODE_MONTH` |  |
| `HIYUI_DATE_PANEL_MODE_YEAR` |  |
| `HIYUI_DATE_PANEL_MODE_QUARTER` |  |

### hiyui_date_picker_size_t

| 值 | 说明 |
|---|---|
| `HIYUI_DATE_PICKER_SIZE_DEFAULT` = 0 |  |
| `HIYUI_DATE_PICKER_SIZE_SMALL` |  |
| `HIYUI_DATE_PICKER_SIZE_LARGE` |  |

### hiyui_date_picker_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_DATE_PICKER_STATUS_NORMAL` = 0 |  |
| `HIYUI_DATE_PICKER_STATUS_WARNING` |  |
| `HIYUI_DATE_PICKER_STATUS_ERROR` |  |

### hiyui_date_picker_placement_t

| 值 | 说明 |
|---|---|
| `HIYUI_DATE_PICKER_PLACEMENT_BOTTOM_LEFT` = 0 |  |
| `HIYUI_DATE_PICKER_PLACEMENT_BOTTOM_RIGHT` |  |
| `HIYUI_DATE_PICKER_PLACEMENT_TOP_LEFT` |  |
| `HIYUI_DATE_PICKER_PLACEMENT_TOP_RIGHT` |  |

## 类型别名

### hiyui_date_change_fn

```c
typedef void(* hiyui_date_change_fn) (const hiyui_date_picker_value_t *v, void *ud)
```

### hiyui_date_calendar_fn

```c
typedef void(* hiyui_date_calendar_fn) (const hiyui_date_value_t *v, void *ud)
```

### hiyui_date_disabled_fn

```c
typedef int(* hiyui_date_disabled_fn) (const hiyui_date_value_t *v, void *ud)
```

### hiyui_date_panel_fn

```c
typedef void(* hiyui_date_panel_fn) (hiyui_date_panel_mode_t mode, const hiyui_date_value_t *v, void *ud)
```

## 函数

### hiyui_date_picker_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_date_picker_create(hiyui_widget_t *parent, const hiyui_date_picker_props_t *props)
```

### hiyui_date_picker_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_value(hiyui_widget_t *w, const hiyui_date_value_t *v, hiyui_notify_t notify)
```

### hiyui_date_picker_get_value

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_get_value(hiyui_widget_t *w, hiyui_date_value_t *out)
```

### hiyui_date_picker_set_range

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_range(hiyui_widget_t *w, const hiyui_date_value_t *start, const hiyui_date_value_t *end, hiyui_notify_t notify)
```

### hiyui_date_picker_open

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_open(hiyui_widget_t *w)
```

### hiyui_date_picker_close

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_close(hiyui_widget_t *w)
```

### hiyui_date_picker_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_enabled(hiyui_widget_t *w, int enabled)
```

### hiyui_date_picker_set_status

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_status(hiyui_widget_t *w, hiyui_date_picker_status_t status)
```

### hiyui_date_picker_set_picker_type

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_picker_type(hiyui_widget_t *w, hiyui_date_picker_type_t type, hiyui_notify_t notify)
```

### hiyui_date_picker_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_date_picker_on_change(hiyui_widget_t *widget, hiyui_date_change_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_date_picker_on_calendar_change

```c
HIYUI_API int HIYUI_CALL hiyui_date_picker_on_calendar_change(hiyui_widget_t *w, hiyui_date_calendar_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_date_picker_set_disabled_date

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_disabled_date(hiyui_widget_t *w, hiyui_date_disabled_fn cb, void *ud)
```

禁用日期判定回调，返回非 0 表示该日期不可选

### hiyui_date_picker_on_panel_change

```c
HIYUI_API int HIYUI_CALL hiyui_date_picker_on_panel_change(hiyui_widget_t *w, hiyui_date_panel_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_date_picker_set_footer

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_footer(hiyui_widget_t *w, hiyui_picker_footer_fn builder, void *ud)
```
