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

Wraps an existing LVGL object

### Slider

```cpp
Slider(SliderProps props={})
```

Aggregate construction from properties

### init

```cpp
Slider & init(lv_obj_t *parent) &
```

Creates the LVGL slider object on a parent

### init

```cpp
Slider & init(Widget &parent) &
```

Creates the LVGL slider object on a parent

### value

```cpp
Slider & value(int v, Notify notify=Notify::No) &
```

Sets the value at runtime

New value. Clamped to the range endpoints when out of bounds With theme animation on, the knob transitions to the new value; when off, it reaches it immediately. value() always returns the final value immediately.

### onChange

```cpp
Slider & onChange(F &&f, EventHandle *handle=nullptr) &
```

Appends a value-change subscription. The callback can take int, Event&amp; or no parameters.

### value

```cpp
int value() const
```

Gets the current value

### range

```cpp
Slider & range(int minVal, int maxVal, Notify notify=Notify::No) &
```

Sets the value range

### bindValue

```cpp
Slider & bindValue(State< int32_t > state, BindingHandle *handle=nullptr) &
```

One-way value binding; State changes update the slider

Applied values are clamped to the current range and user operations do not write the state. A program value call unbinds; an effective range change does not.

### model

```cpp
Slider & model(State< int32_t > state, BindingHandle *handle=nullptr) &
```

Two-way value binding installing the model range

Requires a bounded state; the range and current value are installed once at mount completion without intermediate public events. User drags, key steps and program value writes are normalized by the model and synced to all connections; an effective range change unbinds.


BindingError for an invalid state handle or a missing range constraint

### clearValueBinding

```cpp
Slider & clearValueBinding() &
```

Removes the value binding, one-way or two-way, keeping the current value and range; repeated calls do nothing.

### activeColor

```cpp
Slider & activeColor(ThemeRole role) &
```

Binds the filled area color to a theme semantic role. Updates automatically on theme switch

### trackColor

```cpp
Slider & trackColor(ThemeRole role) &
```

Binds the track background color to a theme semantic role. Updates automatically on theme switch

### knobColor

```cpp
Slider & knobColor(ThemeRole role) &
```

Binds the knob color to a theme semantic role. Updates automatically on theme switch
