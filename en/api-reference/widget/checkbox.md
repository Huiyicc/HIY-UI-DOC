---
title: "Checkbox"
---

# Checkbox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/checkbox.h>`

**Namespace:** `hiyui`

Checkbox widget

**See also:** `CheckboxProps`

**Inherits:** `hiyui::Chainable< Checkbox >`

## Public Methods

### Checkbox

```cpp
Checkbox(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Checkbox

```cpp
Checkbox(CheckboxProps props={})
```

Construct from aggregated properties

Checkbox properties, aggregate initialization supported

### init

```cpp
Checkbox & init(lv_obj_t *parent) &
```

Create the LVGL checkbox object under a parent

Parent LVGL object pointer This component

### init

```cpp
Checkbox & init(Widget &parent) &
```

Create the LVGL checkbox object under a parent

Parent LVGL object pointer This component

### checked

```cpp
Checkbox & checked(bool c, Notify notify=Notify::No) &
```

Set the checked state at runtime

true = check, false = uncheck This component

### onChange

```cpp
Checkbox & onChange(F &&f, EventHandle *handle=nullptr) &
```

Append a state change subscription. The callback can take a bool, an Event&amp; or no parameter.

### isChecked

```cpp
bool isChecked() const
```

Query whether currently checked

The checked state

### text

```cpp
Checkbox & text(const char *t) &
```

Change the label text at runtime

New text content, UTF-8 encoded This component

### text

```cpp
Checkbox & text(const LocalizedText &text) &
```

Bind text that updates with the language, copying the description. A plain string call replaces this binding.

### checkedColor

```cpp
Checkbox & checkedColor(ThemeRole role) &
```

Bind the checked indicator color to a theme semantic role, updated automatically on theme change
