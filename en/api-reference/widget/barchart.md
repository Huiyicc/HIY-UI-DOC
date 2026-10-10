---
title: "BarChart"
---

# BarChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/bar_chart.h>`

**Namespace:** `hiyui`

Bar chart widget

Wraps lv_chart in BAR/STACKED modes with hover shadow highlight and value bubbles.



**See also:** `BarChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< BarChart >`

## Public Methods

### BarChart

```cpp
BarChart(lv_obj_t *raw)
```

Wraps an existing LVGL object

### BarChart

```cpp
BarChart(BarChartProps props={})
```

Aggregate construction from properties

Bar chart properties

### init

```cpp
BarChart & init(lv_obj_t *parent) &
```

Creates the bar chart on a parent object

Parent LVGL object pointer

### init

```cpp
BarChart & init(Widget &parent) &
```

Creates the bar chart on a parent object

Parent LVGL object pointer

### addSeries

```cpp
int addSeries(SeriesConfig config={})
```

Adds a data series

Series configuration Index of the new series, incrementing from 0

### data

```cpp
BarChart & data(int seriesIdx, const int32_t *values, int count) &
```

Replaces the whole data set of a series

Series index Value array Number of data points This component

### data

```cpp
BarChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

Replaces the whole data set of a series

Series index Value array This component

### xLabels

```cpp
BarChart & xLabels(const std::vector< std::string > &labels) &
```

Sets the X axis tick texts

Tick text array This component

### xLabels

```cpp
BarChart & xLabels(const std::vector< LocalizedText > &labels) &
```

Binds per-tick localized texts. Replacing the labels releases the original binding without changing data or viewport.

### yRange

```cpp
BarChart & yRange(int32_t min, int32_t max) &
```

Sets the Y axis range

Minimum value Maximum value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Returns the underlying lv_chart object

Bar chart LVGL object pointer for advanced custom drawing
