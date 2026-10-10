---
title: "RGBA"
---

# RGBA <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/draw/color.h>`

**Namespace:** `hiyui`

Color type with an alpha channel, used for color fields in style properties

Stores RGB (uint32_t) and Alpha (uint8_t) internally. Supports implicit construction from uint32_t. rgb_ == 0xFFFFFFFF means unset, with HIYUI_NONE semantics.



**See also:** `Color`


**See also:** `rgba()`

## Public Members

### rgb_

```cpp
uint32_t rgb_
```

RGB color value; 0xFFFFFFFF = unset (HIYUI_NONE)

### alpha_

```cpp
uint8_t alpha_
```

Alpha channel [0, 255]; 255 = fully opaque

### hasAlpha_

```cpp
bool hasAlpha_
```

Whether an explicit alpha value was set

## Public Methods

### RGBA

```cpp
constexpr RGBA()=default
```

Default constructor, rgb_ is HIYUI_NONE, unset

### RGBA

```cpp
constexpr RGBA(uint32_t hex)
```

Implicit construction from a hexadecimal value, without alpha

Color value in 0xRRGGBB format

### RGBA

```cpp
constexpr RGBA(uint32_t hex, uint8_t a)
```

Constructs from a hexadecimal value and alpha

Color value in 0xRRGGBB format

### hasAlpha

```cpp
bool hasAlpha() const
```

Whether alpha was set explicitly

True when created via the two-parameter constructor or rgba()
