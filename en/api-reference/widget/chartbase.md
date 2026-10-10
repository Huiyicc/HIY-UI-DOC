---
title: "ChartBase"
---

# ChartBase <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/chart_base.h>`

**Namespace:** `hiyui`

Common chart base class, CRTP

Provides the common skeleton for title, legend, plot area container and theme binding. Concrete charts such as line, bar, pie, waveform and gauge inherit ChartBase of the concrete type and create the chart object within the plot area in buildChart().


Concrete chart type, e.g. LineChart inherits ChartBase&lt;LineChart&gt;

**Inherits:** `hiyui::Chainable< Derived >`

## Public Methods

### ChartBase

```cpp
ChartBase(lv_obj_t *raw)
```

Wraps an existing LVGL object

### ChartBase

```cpp
ChartBase(ChartBaseProps props={})
```

Aggregate construction from properties

Common chart properties

### init

```cpp
Derived & init(lv_obj_t *parent) &
```

Initializes the layout skeleton on a parent object

Parent LVGL object pointer This component

### init

```cpp
Derived & init(Widget &parent) &
```

Initializes the layout skeleton on a parent object

Parent LVGL object pointer This component

### title

```cpp
Derived & title(const char *text) &
```

Changes the title text at runtime

New title in UTF-8 This component

### title

```cpp
Derived & title(const LocalizedText &text) &
```

Binds an existing localized title. Calling before init creates the title; a plain string unbinds.

### legendPosition

```cpp
Derived & legendPosition(LegendPosition pos) &
```

Sets the legend position. After init the call only records the configuration and does not move a created legend

Legend position This component

### xAxis

```cpp
Derived & xAxis(const AxisConfig &config) &
```

Sets the X axis configuration

Axis configuration This component

### yAxis

```cpp
Derived & yAxis(const AxisConfig &config) &
```

Sets the Y axis configuration

Axis configuration This component
