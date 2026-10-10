---
title: "GaugeChart"
---

# GaugeChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/gauge_chart.h>`

**Namespace:** `hiyui`

Gauge chart widget

Self-drawn with lv_draw_arc, showing a single value as a half or three-quarter circle.



**See also:** `GaugeChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< GaugeChart >`

## Public Methods

### GaugeChart

```cpp
GaugeChart(lv_obj_t *raw)
```

Wraps an existing LVGL object

Restores the C++ wrapper from a created gauge object and reassociates the persisted draw state.


Pointer to the created lv_obj_t

### GaugeChart

```cpp
GaugeChart(GaugeChartProps props={})
```

Aggregate construction from properties

Gauge chart properties

### init

```cpp
GaugeChart & init(lv_obj_t *parent) &
```

Creates the gauge chart on a parent object

Parent LVGL object pointer

### init

```cpp
GaugeChart & init(Widget &parent) &
```

Creates the gauge chart on a parent object

Parent LVGL object pointer

### value

```cpp
GaugeChart & value(float v, Notify notify=Notify::No) &
```

Sets the current value

New value, clamped to [min, max] This component

### value

```cpp
float value() const
```

Returns the current displayed value

Current value

### range

```cpp
GaugeChart & range(float min, float max, Notify notify=Notify::No) &
```

Sets the measurement range

Minimum value Maximum value This component

### gaugeObj

```cpp
lv_obj_t * gaugeObj() const
```

Returns the underlying gauge draw object

Gauge LVGL object pointer for advanced custom drawing
