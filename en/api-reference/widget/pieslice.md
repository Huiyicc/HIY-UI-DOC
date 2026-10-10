---
title: "PieSlice"
---

# PieSlice <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/chart/pie_chart.h>`

**Namespace:** `hiyui`

Pie slice data

## Public Members

### name

```cpp
const char * name
```

Slice name, used in the legend

### value

```cpp
float value
```

Raw value; percentages are computed automatically

### color

```cpp
uint32_t color
```

Slice color; HIYUI_DEFAULT assigns automatically

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

Overrides the name when set and updates on language switch. The description is copied on assignment.
