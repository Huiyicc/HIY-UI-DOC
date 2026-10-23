---
title: "chart.h"
---

# chart.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/chart.h>`

图表组件：折线 / 柱状 / 饼图 / 仪表盘 / 波形

对应 C++ 的 LineChart、BarChart、PieChart、GaugeChart、WaveformChart。

## 枚举

### hiyui_chart_legend_t

| 值 | 说明 |
|---|---|
| `HIYUI_CHART_LEGEND_DEFAULT` = 0 |  |
| `HIYUI_CHART_LEGEND_NONE` |  |
| `HIYUI_CHART_LEGEND_TOP` |  |
| `HIYUI_CHART_LEGEND_BOTTOM` |  |
| `HIYUI_CHART_LEGEND_LEFT` |  |
| `HIYUI_CHART_LEGEND_RIGHT` |  |

## 类型别名

### hiyui_chart_tooltip_fn

```c
typedef void(HIYUI_CALL * hiyui_chart_tooltip_fn) (hiyui_widget_t *content, const hiyui_chart_hit_t *hits, int count, void *user_data)
```

自定义 Tooltip 构建回调，在 content 上创建子组件

## 函数

### hiyui_line_chart_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_line_chart_create(hiyui_widget_t *parent, const hiyui_line_chart_props_t *props)
```

### hiyui_line_chart_add_series

```c
HIYUI_API int HIYUI_CALL hiyui_line_chart_add_series(hiyui_widget_t *c, const hiyui_chart_series_t *config)
```

### hiyui_line_chart_set_data

```c
HIYUI_API void HIYUI_CALL hiyui_line_chart_set_data(hiyui_widget_t *c, int series_idx, const int32_t *values, int count)
```

### hiyui_line_chart_push_value

```c
HIYUI_API void HIYUI_CALL hiyui_line_chart_push_value(hiyui_widget_t *c, int series_idx, int32_t value)
```

### hiyui_line_chart_clear_series

```c
HIYUI_API void HIYUI_CALL hiyui_line_chart_clear_series(hiyui_widget_t *c, int series_idx)
```

### hiyui_line_chart_set_x_labels

```c
HIYUI_API void HIYUI_CALL hiyui_line_chart_set_x_labels(hiyui_widget_t *c, const char *const *labels, int count)
```

### hiyui_line_chart_set_y_range

```c
HIYUI_API void HIYUI_CALL hiyui_line_chart_set_y_range(hiyui_widget_t *c, int32_t min, int32_t max)
```

### hiyui_bar_chart_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_bar_chart_create(hiyui_widget_t *parent, const hiyui_bar_chart_props_t *props)
```

### hiyui_bar_chart_add_series

```c
HIYUI_API int HIYUI_CALL hiyui_bar_chart_add_series(hiyui_widget_t *c, const hiyui_chart_series_t *config)
```

### hiyui_bar_chart_set_data

```c
HIYUI_API void HIYUI_CALL hiyui_bar_chart_set_data(hiyui_widget_t *c, int series_idx, const int32_t *values, int count)
```

### hiyui_bar_chart_set_x_labels

```c
HIYUI_API void HIYUI_CALL hiyui_bar_chart_set_x_labels(hiyui_widget_t *c, const char *const *labels, int count)
```

### hiyui_bar_chart_set_y_range

```c
HIYUI_API void HIYUI_CALL hiyui_bar_chart_set_y_range(hiyui_widget_t *c, int32_t min, int32_t max)
```

### hiyui_pie_chart_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_pie_chart_create(hiyui_widget_t *parent, const hiyui_pie_chart_props_t *props)
```

### hiyui_pie_chart_set_slices

```c
HIYUI_API void HIYUI_CALL hiyui_pie_chart_set_slices(hiyui_widget_t *c, const hiyui_chart_slice_t *slices, int count)
```

### hiyui_pie_chart_set_slice_value

```c
HIYUI_API void HIYUI_CALL hiyui_pie_chart_set_slice_value(hiyui_widget_t *c, int idx, float value)
```

### hiyui_gauge_chart_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_gauge_chart_create(hiyui_widget_t *parent, const hiyui_gauge_chart_props_t *props)
```

### hiyui_gauge_chart_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_gauge_chart_set_value(hiyui_widget_t *c, float value, hiyui_notify_t notify)
```

### hiyui_gauge_chart_get_value

```c
HIYUI_API float HIYUI_CALL hiyui_gauge_chart_get_value(hiyui_widget_t *c)
```

### hiyui_gauge_chart_set_range

```c
HIYUI_API void HIYUI_CALL hiyui_gauge_chart_set_range(hiyui_widget_t *c, float min, float max, hiyui_notify_t notify)
```

### hiyui_waveform_chart_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_waveform_chart_create(hiyui_widget_t *parent, const hiyui_waveform_chart_props_t *props)
```

### hiyui_waveform_chart_add_channel

```c
HIYUI_API int HIYUI_CALL hiyui_waveform_chart_add_channel(hiyui_widget_t *c, const hiyui_chart_channel_t *config)
```

### hiyui_waveform_chart_push_value

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_push_value(hiyui_widget_t *c, int channel_idx, float value)
```

### hiyui_waveform_chart_push_values

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_push_values(hiyui_widget_t *c, int channel_idx, const float *values, size_t count)
```

### hiyui_waveform_chart_set_viewport

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_set_viewport(hiyui_widget_t *c, size_t start_idx, size_t end_idx)
```

### hiyui_waveform_chart_view_all

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_view_all(hiyui_widget_t *c)
```

### hiyui_waveform_chart_view_latest

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_view_latest(hiyui_widget_t *c, size_t window_size)
```

### hiyui_waveform_chart_set_y_range

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_set_y_range(hiyui_widget_t *c, float min, float max)
```

### hiyui_waveform_chart_channel_size

```c
HIYUI_API size_t HIYUI_CALL hiyui_waveform_chart_channel_size(hiyui_widget_t *c, int channel_idx)
```

### hiyui_waveform_chart_refresh

```c
HIYUI_API void HIYUI_CALL hiyui_waveform_chart_refresh(hiyui_widget_t *c)
```
