---
title: "Gradient"
---

# Gradient <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Gradient configuration

## Public Members

### dir

```cpp
GradDir dir
```

Gradient direction, None = no gradient

### from

```cpp
RGBA from
```

Start color

### to

```cpp
RGBA to
```

End color

### mainStop

```cpp
uint8_t mainStop
```

Start color position [0,255]

### gradStop

```cpp
uint8_t gradStop
```

End color position [0,255]
