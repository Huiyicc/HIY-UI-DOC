---
title: "Switch"
---

# Switch <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/switch.h>`

**Namespace:** `hiyui`

Switch widget

**See also:** `SwitchProps`

**Inherits:** `hiyui::Chainable< Switch >`

## Public Methods

### Switch

```cpp
Switch(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Switch

```cpp
Switch(SwitchProps props={})
```

Aggregate construction from properties

### init

```cpp
Switch & init(lv_obj_t *parent) &
```

Creates the LVGL switch object on a parent

### init

```cpp
Switch & init(Widget &parent) &
```

Creates the LVGL switch object on a parent

### checked

```cpp
Switch & checked(bool c, Notify notify=Notify::No) &
```

Sets the switch state at runtime

### onChange

```cpp
Switch & onChange(F &&f, EventHandle *handle=nullptr) &
```

Appends a state-change subscription. The callback can take bool, Event&amp; or no parameters.

### isChecked

```cpp
bool isChecked() const
```

Queries whether currently on

### onColor

```cpp
Switch & onColor(ThemeRole role) &
```

Binds the on-state background color to a theme semantic role. Updates automatically on theme switch

### offColor

```cpp
Switch & offColor(ThemeRole role) &
```

Binds the off-state background color to a theme semantic role. Updates automatically on theme switch

### knobColor

```cpp
Switch & knobColor(ThemeRole role) &
```

Binds the knob color to a theme semantic role. Updates automatically on theme switch
