---
title: "ScreenInfo"
---

# ScreenInfo <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/pal.h>`

**Namespace:** `hiyui`

Monitor screen information for the application layer to compute screen adaptation factors

## Public Members

### displayIndex

```cpp
int displayIndex
```

SDL display index

### physW

```cpp
int physW
```

Screen physical pixel width, desktop resolution

### physH

```cpp
int physH
```

Screen physical pixel height

### workW

```cpp
int workW
```

Work area width excluding taskbars, SDL_GetDisplayUsableBounds

### workH

```cpp
int workH
```

Work area height

### dpr

```cpp
float dpr
```

Current systemDpiScale()
