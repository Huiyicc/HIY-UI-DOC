---
title: "Slider"
---

# Slider <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/slider.h>`

**Namespace:** `hiyui`

Slider widget

**See also:** `SliderProps`

**Inherits:** `hiyui::Chainable< Slider >`

## Public Methods

### Slider

```cpp
Slider(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Slider

```cpp
Slider(SliderProps props={})
```

Construct from aggregated properties

### init

```cpp
Slider & init(lv_obj_t *parent) &
```

Create the LVGL slider object under a parent

### init

```cpp
Slider & init(Widget &parent) &
```

Create the LVGL slider object under a parent

### value

```cpp
Slider & value(int v, Notify notify=Notify::No) &
```

Set the value at runtime

New value, clamped to the range endpoints when out of bounds With theme animation on, the knob transitions to the new value. With animation off it arrives immediately. value() always returns the final value immediately.

### onChange

```cpp
Slider & onChange(F &&f, EventHandle *handle=nullptr) &
```

Append a value change subscription. The callback can take an int, an Event&amp; or no parameter.

### value

```cpp
int value() const
```

Get the current value

### range

```cpp
Slider & range(int minVal, int maxVal, Notify notify=Notify::No) &
```

Set the value range

### activeColor

```cpp
Slider & activeColor(ThemeRole role) &
```

Bind the filled area color to a theme semantic role, updated automatically on theme change

### trackColor

```cpp
Slider & trackColor(ThemeRole role) &
```

Bind the track background color to a theme semantic role, updated automatically on theme change

### knobColor

```cpp
Slider & knobColor(ThemeRole role) &
```

Bind the knob color to a theme semantic role, updated automatically on theme change
