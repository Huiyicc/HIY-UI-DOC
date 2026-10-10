---
title: "Color"
---

# Color <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/draw/color.h>`

**Namespace:** `hiyui`

RGB color value wrapper with compile-time construction and channel operations.

Stores the value as uint32_t in 0xRRGGBB format. Provides darken / lighten static methods for compile-time color computation.



**See also:** `RGBA`

## Public Members

### value

```cpp
uint32_t value
```

RGB color value in 0xRRGGBB format

## Public Methods

### Color

```cpp
constexpr Color()=default
```

Default constructor, color is black (0x000000)

### Color

```cpp
constexpr Color(uint32_t hex)
```

Constructs from a hex value

Color value in 0xRRGGBB format

## Static Methods

### darken

```cpp
static Color darken(Color c, int percent)
```

Darkens the color by a given percentage

Multiplies each RGB channel by (100 - percent) / 100.


Darkening percentage in [0, 100]; 0 = unchanged, 100 = fully black

### lighten

```cpp
static Color lighten(Color c, int percent)
```

Lightens the color by a given percentage

Interpolates each RGB channel toward 255 by percent.


Lightening percentage in [0, 100]; 0 = unchanged, 100 = fully white
