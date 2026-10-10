---
title: "pal::SystemCaps"
---

# pal::SystemCaps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/pal.h>`

**Namespace:** `hiyui`

System capability description reflecting the hardware and environment of the current platform

Obtained through pal::caps(); each field is filled by the platform layer at compile or run time.

## Public Members

### hasFilesystem

```cpp
bool hasFilesystem
```

Whether filesystem access is available

### hasGpu

```cpp
bool hasGpu
```

Whether GPU acceleration is available

### hasTouch

```cpp
bool hasTouch
```

Whether touch input is available

### hasWindowManager

```cpp
bool hasWindowManager
```

Whether a window manager exists, desktop environments

### renderBackend

```cpp
RenderBackend renderBackend
```

Current render backend

### defaultDpi

```cpp
int defaultDpi
```

Default DPI

### screenWidth

```cpp
int screenWidth
```

Screen width in pixels

### screenHeight

```cpp
int screenHeight
```

Screen height in pixels

### dpiScale

```cpp
float dpiScale
```

Device pixel ratio, devicePixelRatio
