---
title: "Backdrop"
---

# Backdrop <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Backdrop blur configuration

Applies Gaussian blur post-processing to the composited layers below, creating a frosted glass effect.



**See also:** `GlassEffect`

## Public Members

### blurRadius

```cpp
int blurRadius
```

Blur radius, HIYUI_NONE_INT = not set, 0 = disabled, valid range [2,254]

### opacity

```cpp
uint8_t opacity
```

Draw opacity of the blur layer [0,255]

### tint

```cpp
RGBA tint
```

Tint color overlaid on top

### tintOpacity

```cpp
uint8_t tintOpacity
```

Tint layer opacity [0,255]
