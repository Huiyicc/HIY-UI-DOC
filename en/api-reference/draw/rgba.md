---
title: "RGBA"
---

# RGBA <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/draw/color.h>`

**Namespace:** `hiyui`

Color type with an alpha channel, used for color fields in style properties

Stores RGB (uint32_t) and Alpha (uint8_t) separately. Implicitly constructible from uint32_t. rgb_ == 0xFFFFFFFF means unset, HIYUI_NONE semantics.



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

Whether an alpha value was explicitly given

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

Implicit construction from a hex value without alpha

Color value in 0xRRGGBB format

### RGBA

```cpp
constexpr RGBA(uint32_t hex, uint8_t a)
```

Constructs from a hex value and an alpha value

Color value in 0xRRGGBB format

### hasAlpha

```cpp
bool hasAlpha() const
```

Whether alpha was explicitly set

True when created through the two-parameter constructor or rgba()
