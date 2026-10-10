---
title: "AvatarProps"
---

# AvatarProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/avatar.h>`

**Namespace:** `hiyui`

Avatar creation properties

## Public Members

### src

```cpp
const void * src
```

Image source. File path or lv_image_dsc_t*

### text

```cpp
const char * text
```

Text placeholder, shown when there is no image

### size

```cpp
int size
```

Avatar diameter

### circle

```cpp
bool circle
```

Whether circular. false = use radius

### radius

```cpp
int radius
```

Corner radius when not circular

### bg

```cpp
uint32_t bg
```

Background color. HIYUI_DEFAULT = follow theme

### textColor

```cpp
uint32_t textColor
```

Text color

### borderColor

```cpp
uint32_t borderColor
```

Border color. HIYUI_NONE = no border

### borderWidth

```cpp
int borderWidth
```

Border width

### gif

```cpp
bool gif
```

GIF animation mode
