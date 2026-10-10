---
title: "Spin"
---

# Spin <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/spin.h>`

**Namespace:** `hiyui`

Loading spinner widget

**Inherits:** `hiyui::Chainable< Spin >`

## Public Methods

### spinning

```cpp
Spin & spinning(bool on) &
```

Controls the spinning animation

### spinning

```cpp
bool spinning() const
```

Queries whether currently spinning

### color

```cpp
Spin & color(uint32_t c) &
```

Changes the color at runtime

0xRRGGBB

### color

```cpp
Spin & color(ThemeRole role) &
```

Binds the color to a theme semantic role. Updates automatically on theme switch

### type

```cpp
Spin & type(SpinType t) &
```

Changes the appearance at runtime

### speed

```cpp
Spin & speed(float s) &
```

Changes the speed multiplier at runtime

Speed multiplier. 0 = static, 1.0 = normal, &gt;1 = faster

### speed

```cpp
float speed() const
```

Queries the current speed multiplier
