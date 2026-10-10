---
title: "ChartBase"
---

# ChartBase <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/chart_base.h>`

**Namespace:** `hiyui`

Common chart base class, CRTP

Provides the common skeleton for title, legend, plot area container and theme binding. Concrete charts such as line, bar, pie, waveform and gauge inherit ChartBase&lt;their own type&gt; and create the concrete chart object inside the plot area in buildChart().


Concrete chart type, e.g. LineChart inherits ChartBase&lt;LineChart&gt;

**Inherits:** `hiyui::Chainable< Derived >`

## Public Methods

### ChartBase

```cpp
ChartBase(lv_obj_t *raw)
```

Wrap an existing LVGL object

### ChartBase

```cpp
ChartBase(ChartBaseProps props={})
```

Construct from aggregated properties

Common chart properties

### init

```cpp
Derived & init(lv_obj_t *parent) &
```

Initialize the layout skeleton under a parent object

Parent LVGL object pointer This component

### init

```cpp
Derived & init(Widget &parent) &
```

Initialize the layout skeleton under a parent object

Parent LVGL object pointer This component

### title

```cpp
Derived & title(const char *text) &
```

Change the title text at runtime

New title, UTF-8 encoded This component

### title

```cpp
Derived & title(const LocalizedText &text) &
```

Bind an existing title. Calling before initialization creates the title, a plain string unbinds it.

### legendPosition

```cpp
Derived & legendPosition(LegendPosition pos) &
```

Set the legend position. Calls after init only record the configuration and do not move a created legend.

Legend position This component

### xAxis

```cpp
Derived & xAxis(const AxisConfig &config) &
```

Set the X axis configuration

Axis configuration This component

### yAxis

```cpp
Derived & yAxis(const AxisConfig &config) &
```

Set the Y axis configuration

Axis configuration This component
