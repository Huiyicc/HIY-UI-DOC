---
title: "BgImage"
---

# BgImage <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Background image

## Public Members

### src

```cpp
const void * src
```

Image source, file path (const char*) or lv_image_dsc_t*

### fit

```cpp
BgImageFit fit
```

Scaling mode

### opacity

```cpp
uint8_t opacity
```

Background image opacity [0,255]

### recolor

```cpp
RGBA recolor
```

Recolor color

### recolorOpa

```cpp
uint8_t recolorOpa
```

Recolor opacity [0,255]

### tiled

```cpp
bool tiled
```

Whether tiled
