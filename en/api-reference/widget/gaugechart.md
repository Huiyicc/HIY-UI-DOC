---
title: "GaugeChart"
---

# GaugeChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/gauge_chart.h>`

**Namespace:** `hiyui`

Gauge widget

Draws itself with lv_draw_arc and presents a single value as a half circle or a 3/4 circle.



**See also:** `GaugeChartProps`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< GaugeChart >`

## Public Methods

### GaugeChart

```cpp
GaugeChart(lv_obj_t *raw)
```

Wrap an existing LVGL object

Restores the C++ wrapper from a created gauge object and automatically reattaches the persistent draw state.


Pointer to the created lv_obj_t

### GaugeChart

```cpp
GaugeChart(GaugeChartProps props={})
```

Construct from aggregated properties

Gauge properties

### init

```cpp
GaugeChart & init(lv_obj_t *parent) &
```

Create the gauge under a parent object

Parent LVGL object pointer

### init

```cpp
GaugeChart & init(Widget &parent) &
```

Create the gauge under a parent object

Parent LVGL object pointer

### value

```cpp
GaugeChart & value(float v, Notify notify=Notify::No) &
```

Set the current value

New value, clamped automatically when outside [min, max] This component

### value

```cpp
float value() const
```

Get the currently displayed value

Current value

### range

```cpp
GaugeChart & range(float min, float max, Notify notify=Notify::No) &
```

Set the measurement range

Minimum value Maximum value This component

### gaugeObj

```cpp
lv_obj_t * gaugeObj() const
```

Get the underlying gauge draw object

Pointer to the gauge LVGL object for advanced custom drawing
