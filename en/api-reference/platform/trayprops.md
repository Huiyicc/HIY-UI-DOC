---
title: "TrayProps"
---

# TrayProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/system_tray.h>`

**Namespace:** `hiyui`

Tray creation properties

## Public Members

### tooltip

```cpp
const char * tooltip
```

Hover tooltip, UTF-8

### icon

```cpp
TrayIcon icon
```

Icon source

### iconSrc

```cpp
const lv_image_dsc_t * iconSrc
```

ARGB8888 image, only for Custom; read during creation

### iconSize

```cpp
int iconSize
```

Icon edge length in physical pixels; 0 means the platform's current small icon size
