---
title: "PieChart"
---

# PieChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/pie_chart.h>`

**Namespace:** `hiyui`

Pie and donut chart widget

Draws itself with DrawCtx and supports hover highlighting and percent labels. Renders as a donut chart when innerRadius &gt; 0.



**See also:** `PieChartProps`


**See also:** `PieSlice`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< PieChart >`

## Public Methods

### PieChart

```cpp
PieChart(lv_obj_t *raw)
```

Wrap an existing LVGL object

### PieChart

```cpp
PieChart(PieChartProps props={})
```

Construct from aggregated properties

Pie chart properties

### init

```cpp
PieChart & init(lv_obj_t *parent) &
```

Create the pie chart under a parent object

Parent LVGL object pointer

### init

```cpp
PieChart & init(Widget &parent) &
```

Create the pie chart under a parent object

Parent LVGL object pointer

### slices

```cpp
PieChart & slices(const std::vector< PieSlice > &slices) &
```

Set the slice data, replacing all slices

Array of slices This component

### sliceValue

```cpp
PieChart & sliceValue(int idx, float value) &
```

Update the value of a single slice at runtime

Slice index New value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Get the underlying pie chart draw object

Pointer to the pie chart LVGL object for advanced custom drawing
