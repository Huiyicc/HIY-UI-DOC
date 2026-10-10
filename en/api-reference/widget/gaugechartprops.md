---
title: "GaugeChartProps"
---

# GaugeChartProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/chart/gauge_chart.h>`

**Namespace:** `hiyui`

Gauge creation properties

**Inherits:** `hiyui::ChartBaseProps`

## Public Members

### min

```cpp
float min
```

Minimum value

### max

```cpp
float max
```

Maximum value

### value

```cpp
float value
```

Current value

### startAngle

```cpp
int startAngle
```

Start angle in degrees, 0 = 3 o'clock direction, clockwise

### sweepAngle

```cpp
int sweepAngle
```

Arc sweep angle

### strokeWidth

```cpp
int strokeWidth
```

Track arc width in theme logical pixels

### rounded

```cpp
bool rounded
```

Rounded arc ends

### showValue

```cpp
bool showValue
```

Whether to show the value text

### unit

```cpp
const char * unit
```

Unit text such as "%" or "°C"

### activeColor

```cpp
uint32_t activeColor
```

Active arc color, HIYUI_DEFAULT = follow the theme primary color

### trackColor

```cpp
uint32_t trackColor
```

Track arc color, HIYUI_DEFAULT = follow theme
