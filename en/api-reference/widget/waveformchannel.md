---
title: "WaveformChannel"
---

# WaveformChannel <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/chart/waveform_chart.h>`

**Namespace:** `hiyui`

Waveform channel configuration

## Public Members

### name

```cpp
const char * name
```

Channel name, used for the legend

### color

```cpp
uint32_t color
```

Channel color, HIYUI_DEFAULT = automatic assignment

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

Overrides the name when set and updates on language switch. The description is copied on assignment.
