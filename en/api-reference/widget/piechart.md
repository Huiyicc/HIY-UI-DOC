---
title: "PieChart"
---

# PieChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/pie_chart.h>`

**Namespace:** `hiyui`

Pie and donut chart widget

Self-drawn with DrawCtx, with hover highlight and percent labels. Renders a donut chart when innerRadius &gt; 0.



**See also:** `PieChartProps`


**See also:** `PieSlice`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< PieChart >`

## Public Methods

### PieChart

```cpp
PieChart(lv_obj_t *raw)
```

Wraps an existing LVGL object

### PieChart

```cpp
PieChart(PieChartProps props={})
```

Aggregate construction from properties

Pie chart properties

### init

```cpp
PieChart & init(lv_obj_t *parent) &
```

Creates the pie chart on a parent object

Parent LVGL object pointer

### init

```cpp
PieChart & init(Widget &parent) &
```

Creates the pie chart on a parent object

Parent LVGL object pointer

### slices

```cpp
PieChart & slices(const std::vector< PieSlice > &slices) &
```

Replaces all slice data

Slice array This component

### sliceValue

```cpp
PieChart & sliceValue(int idx, float value) &
```

Updates the value of one slice

Slice index New value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Returns the underlying pie chart draw object

Pie chart LVGL object pointer for advanced custom drawing
