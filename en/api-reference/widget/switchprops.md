---
title: "SwitchProps"
---

# SwitchProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/switch.h>`

**Namespace:** `hiyui`

Switch creation properties

## Public Members

### checked

```cpp
bool checked
```

Initial switch state

### width

```cpp
int width
```

Switch width

### height

```cpp
int height
```

Switch height

### onColor

```cpp
uint32_t onColor
```

Background color when on. HIYUI_DEFAULT = follow theme Primary

### offColor

```cpp
uint32_t offColor
```

Background color when off. HIYUI_DEFAULT = follow theme SurfaceVariant

### knobColor

```cpp
uint32_t knobColor
```

Knob color. HIYUI_DEFAULT = theme adapted, white in light theme and light gray in dark theme
