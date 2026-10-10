---
title: "LineChart"
---

# LineChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/line_chart.h>`

**Namespace:** `hiyui`

Line chart widget

Wraps lv_chart in LINE/CURVE mode with gradient area fill, data point highlighting and tooltip.



**See also:** `LineChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< LineChart >`

## Public Methods

### LineChart

```cpp
LineChart(lv_obj_t *raw)
```

Wrap an existing LVGL object

### LineChart

```cpp
LineChart(LineChartProps props={})
```

Construct from aggregated properties

Line chart properties

### init

```cpp
LineChart & init(lv_obj_t *parent) &
```

Create the line chart under a parent object

Parent LVGL object pointer

### init

```cpp
LineChart & init(Widget &parent) &
```

Create the line chart under a parent object

Parent LVGL object pointer

### addSeries

```cpp
int addSeries(SeriesConfig config={})
```

Add a data series

Series configuration such as name, color and line width Index of the added series, incrementing from 0

### data

```cpp
LineChart & data(int seriesIdx, const int32_t *values, int count) &
```

Set the entire data of a series

Series index, the value returned by addSeries Data array Number of data points This component

### data

```cpp
LineChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

Set the entire data of a series

Series index Data array This component

### pushValue

```cpp
LineChart & pushValue(int seriesIdx, int32_t value) &
```

Push one data point to the end of a series

Series index Data value This component

### clearSeries

```cpp
LineChart & clearSeries(int seriesIdx) &
```

Clear the data of a series

Series index This component

### xLabels

```cpp
LineChart & xLabels(const std::vector< std::string > &labels) &
```

Set the X axis tick texts

Array of tick texts, length should match pointCount This component

### xLabels

```cpp
LineChart & xLabels(const std::vector< LocalizedText > &labels) &
```

Bind localized texts to the tick labels. Replacing the labels releases the previous binding and does not change data or viewport.

### yRange

```cpp
LineChart & yRange(int32_t min, int32_t max) &
```

Set the Y axis range

Minimum value Maximum value This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Get the underlying lv_chart object

Pointer to the line chart LVGL object for advanced custom drawing
