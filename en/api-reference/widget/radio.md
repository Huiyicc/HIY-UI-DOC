---
title: "Radio"
---

# Radio <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/radio.h>`

**Namespace:** `hiyui`

Radio button widget

Only one Radio in the same group can be checked.



**See also:** `RadioProps`

**Inherits:** `hiyui::Chainable< Radio >`

## Public Methods

### Radio

```cpp
Radio(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Radio

```cpp
Radio(RadioProps props={})
```

Aggregate construction from properties

### init

```cpp
Radio & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

### init

```cpp
Radio & init(Widget &parent) &
```

Creates the LVGL object on a parent

### checked

```cpp
Radio & checked(bool c, Notify notify=Notify::No) &
```

Sets the checked state at runtime

Setting the same value has no side effects.

### onChange

```cpp
Radio & onChange(F &&f, EventHandle *handle=nullptr) &
```

Appends a state-change subscription. The callback can take bool, Event&amp; or no parameters.

### isChecked

```cpp
bool isChecked() const
```

Queries whether currently checked

### text

```cpp
Radio & text(const char *t) &
```

Changes the label text at runtime

UTF-8 encoded

### text

```cpp
Radio & text(const LocalizedText &text) &
```

Binds text that updates with the language. Copies the description. A plain string call replaces this binding.

### checkedColor

```cpp
Radio & checkedColor(ThemeRole role) &
```

Binds the checked color to a theme semantic role. Updates automatically on theme switch
