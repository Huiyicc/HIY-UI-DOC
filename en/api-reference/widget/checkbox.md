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

Wraps an existing LVGL object

### Checkbox

```cpp
Checkbox(CheckboxProps props={})
```

Aggregate construction from properties

Checkbox properties. Supports aggregate initialization

### init

```cpp
Checkbox & init(lv_obj_t *parent) &
```

Creates the LVGL checkbox object on a parent

Parent LVGL object pointer This component

### init

```cpp
Checkbox & init(Widget &parent) &
```

Creates the LVGL checkbox object on a parent

Parent LVGL object pointer This component

### checked

```cpp
Checkbox & checked(bool c, Notify notify=Notify::No) &
```

Sets the checked state at runtime

true = check, false = uncheck This component

### onChange

```cpp
Checkbox & onChange(F &&f, EventHandle *handle=nullptr) &
```

Appends a state-change subscription. The callback can take bool, Event&amp; or no parameters.

### isChecked

```cpp
bool isChecked() const
```

Queries whether currently checked

Checked state

### text

```cpp
Checkbox & text(const char *t) &
```

Changes the label text at runtime

New text content in UTF-8 This component

### text

```cpp
Checkbox & text(const LocalizedText &text) &
```

Binds text that updates with the language. Copies the description. A plain string call replaces this binding.

### checkedColor

```cpp
Checkbox & checkedColor(ThemeRole role) &
```

Binds the checked check box color to a theme semantic role. Updates automatically on theme switch
