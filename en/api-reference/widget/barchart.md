---
title: "BarChart"
---

# BarChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/bar_chart.h>`

**Namespace:** `hiyui`

Bar chart widget

Wraps lv_chart in BAR/STACKED mode with hover shadow highlighting and value bubbles.



**See also:** `BarChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< BarChart >`

## Public Methods

### BarChart

```cpp
BarChart(lv_obj_t *raw)
```

Wrap an existing LVGL object

### BarChart

```cpp
BarChart(BarChartProps props={})
```

Construct from aggregated properties

Bar chart properties

### init

```cpp
BarChart & init(lv_obj_t *parent) &
```

Create the bar chart under a parent object

Parent LVGL object pointer

### init

```cpp
BarChart & init(Widget &parent) &
```

Create the bar chart under a parent object

Parent LVGL object pointer

### addSeries

```cpp
int addSeries(SeriesConfig config={})
```

Add a data series

Series configuration Index of the added series, incrementing from 0

### data

```cpp
BarChart & data(int seriesIdx, const int32_t *values, int count) &
```

Set the entire data of a series

Series index Data array Number of data points This component

### data

```cpp
BarChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

Set the entire data of a series

Series index Data array This component

### xLabels

```cpp
BarChart & xLabels(const std::vector< std::string > &labels) &
```

Set the X axis tick texts

Array of tick texts This component

### xLabels

```cpp
BarChart & xLabels(const std::vector< LocalizedText > &labels) &
```

Bind localized texts to the tick labels. Replacing the labels releases the previous binding and does not change data or viewport.

### yRange

```cpp
BarChart & yRange(int32_t min, int32_t max) &
```

Set the Y axis range

Minimum value Maximum value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Get the underlying lv_chart object

Pointer to the bar chart LVGL object for advanced custom drawing
