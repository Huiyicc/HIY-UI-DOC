---
title: "LineChart"
---

# LineChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/line_chart.h>`

**Namespace:** `hiyui`

Line chart widget

Wraps lv_chart in LINE/CURVE modes with gradient area fill, data point highlight and tooltip.



**See also:** `LineChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< LineChart >`

## Public Methods

### LineChart

```cpp
LineChart(lv_obj_t *raw)
```

Wraps an existing LVGL object

### LineChart

```cpp
LineChart(LineChartProps props={})
```

Aggregate construction from properties

Line chart properties

### init

```cpp
LineChart & init(lv_obj_t *parent) &
```

Creates the line chart on a parent object

Parent LVGL object pointer

### init

```cpp
LineChart & init(Widget &parent) &
```

Creates the line chart on a parent object

Parent LVGL object pointer

### addSeries

```cpp
int addSeries(SeriesConfig config={})
```

Adds a data series

Series configuration: name, color, line width, etc. Index of the new series, incrementing from 0

### data

```cpp
LineChart & data(int seriesIdx, const int32_t *values, int count) &
```

Replaces the whole data set of a series

Series index, the value returned by addSeries Value array Number of data points This component

### data

```cpp
LineChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

Replaces the whole data set of a series

Series index Value array This component

### pushValue

```cpp
LineChart & pushValue(int seriesIdx, int32_t value) &
```

Appends one data point to a series

Series index Data value This component

### clearSeries

```cpp
LineChart & clearSeries(int seriesIdx) &
```

Clears the data of a series

Series index This component

### xLabels

```cpp
LineChart & xLabels(const std::vector< std::string > &labels) &
```

Sets the X axis tick texts

Tick text array; the length should match pointCount This component

### xLabels

```cpp
LineChart & xLabels(const std::vector< LocalizedText > &labels) &
```

Binds per-tick localized texts. Replacing the labels releases the original binding without changing data or viewport.

### yRange

```cpp
LineChart & yRange(int32_t min, int32_t max) &
```

Sets the Y axis range

Minimum value Maximum value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Returns the underlying lv_chart object

Line chart LVGL object pointer for advanced custom drawing
