---
title: "ChartBaseProps"
---

# ChartBaseProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/chart/chart_base.h>`

**Namespace:** `hiyui`

Common chart creation properties

Props of all chart subclasses inherit from this struct.

## Public Members

### title

```cpp
const char * title
```

Title text in UTF-8; nullptr means no title

### width

```cpp
int width
```

Width; HIYUI_AUTO fills the parent

### height

```cpp
int height
```

Height in theme logical pixels

### padding

```cpp
int padding
```

Inner padding in theme logical pixels

### bg

```cpp
uint32_t bg
```

Background color; HIYUI_DEFAULT follows theme

### legend

```cpp
LegendPosition legend
```

Legend position

### xAxis

```cpp
AxisConfig xAxis
```

X axis configuration

### yAxis

```cpp
AxisConfig yAxis
```

Y axis configuration

### interaction

```cpp
InteractionConfig interaction
```

Interaction configuration: crosshair, tooltip, zoom, pan
