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

Wrap an existing LVGL object

### Switch

```cpp
Switch(SwitchProps props={})
```

Construct from aggregated properties

### init

```cpp
Switch & init(lv_obj_t *parent) &
```

Create the LVGL switch object under a parent

### init

```cpp
Switch & init(Widget &parent) &
```

Create the LVGL switch object under a parent

### checked

```cpp
Switch & checked(bool c, Notify notify=Notify::No) &
```

Set the switch state at runtime

### onChange

```cpp
Switch & onChange(F &&f, EventHandle *handle=nullptr) &
```

Append a state change subscription. The callback can take a bool, an Event&amp; or no parameter.

### isChecked

```cpp
bool isChecked() const
```

Query whether currently on

### onColor

```cpp
Switch & onColor(ThemeRole role) &
```

Bind the on-state background color to a theme semantic role, updated automatically on theme change

### offColor

```cpp
Switch & offColor(ThemeRole role) &
```

Bind the off-state background color to a theme semantic role, updated automatically on theme change

### knobColor

```cpp
Switch & knobColor(ThemeRole role) &
```

Bind the knob color to a theme semantic role, updated automatically on theme change
