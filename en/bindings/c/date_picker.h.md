---
title: "date_picker.h"
---

# date_picker.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/date_picker.h>`

Date picker, aligned with hiyui::DatePicker

## Enums

### hiyui_date_picker_type_t

| Value | Description |
|---|---|
| `HIYUI_DATE_PICKER_TYPE_DATE` = 0 |  |
| `HIYUI_DATE_PICKER_TYPE_WEEK` |  |
| `HIYUI_DATE_PICKER_TYPE_MONTH` |  |
| `HIYUI_DATE_PICKER_TYPE_QUARTER` |  |
| `HIYUI_DATE_PICKER_TYPE_YEAR` |  |

### hiyui_date_panel_mode_t

| Value | Description |
|---|---|
| `HIYUI_DATE_PANEL_MODE_DAY` = 0 |  |
| `HIYUI_DATE_PANEL_MODE_MONTH` |  |
| `HIYUI_DATE_PANEL_MODE_YEAR` |  |
| `HIYUI_DATE_PANEL_MODE_QUARTER` |  |

### hiyui_date_picker_size_t

| Value | Description |
|---|---|
| `HIYUI_DATE_PICKER_SIZE_DEFAULT` = 0 |  |
| `HIYUI_DATE_PICKER_SIZE_SMALL` |  |
| `HIYUI_DATE_PICKER_SIZE_LARGE` |  |

### hiyui_date_picker_status_t

| Value | Description |
|---|---|
| `HIYUI_DATE_PICKER_STATUS_NORMAL` = 0 |  |
| `HIYUI_DATE_PICKER_STATUS_WARNING` |  |
| `HIYUI_DATE_PICKER_STATUS_ERROR` |  |

### hiyui_date_picker_placement_t

| Value | Description |
|---|---|
| `HIYUI_DATE_PICKER_PLACEMENT_BOTTOM_LEFT` = 0 |  |
| `HIYUI_DATE_PICKER_PLACEMENT_BOTTOM_RIGHT` |  |
| `HIYUI_DATE_PICKER_PLACEMENT_TOP_LEFT` |  |
| `HIYUI_DATE_PICKER_PLACEMENT_TOP_RIGHT` |  |

## Type Aliases

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

## Functions

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

Disabled-date predicate. A non-zero return means the date cannot be selected.

### hiyui_date_picker_on_panel_change

```c
HIYUI_API int HIYUI_CALL hiyui_date_picker_on_panel_change(hiyui_widget_t *w, hiyui_date_panel_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_date_picker_set_footer

```c
HIYUI_API void HIYUI_CALL hiyui_date_picker_set_footer(hiyui_widget_t *w, hiyui_picker_footer_fn builder, void *ud)
```
