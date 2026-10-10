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

Control the spin animation

### spinning

```cpp
bool spinning() const
```

Query whether currently spinning

### color

```cpp
Spin & color(uint32_t c) &
```

Change the color at runtime

0xRRGGBB

### color

```cpp
Spin & color(ThemeRole role) &
```

Bind the color to a theme semantic role, updated automatically on theme change

### type

```cpp
Spin & type(SpinType t) &
```

Change the shape at runtime

### speed

```cpp
Spin & speed(float s) &
```

Change the speed factor at runtime

Speed factor, 0 = static, 1.0 = normal, &gt;1 = faster

### speed

```cpp
float speed() const
```

Query the current speed factor
