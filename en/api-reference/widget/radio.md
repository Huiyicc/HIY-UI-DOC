---
title: "Radio"
---

# Radio <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/radio.h>`

**Namespace:** `hiyui`

Radio button widget

Only one Radio with the same group can be checked.



**See also:** `RadioProps`

**Inherits:** `hiyui::Chainable< Radio >`

## Public Methods

### Radio

```cpp
Radio(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Radio

```cpp
Radio(RadioProps props={})
```

Construct from aggregated properties

### init

```cpp
Radio & init(lv_obj_t *parent) &
```

Create the LVGL object under a parent

### init

```cpp
Radio & init(Widget &parent) &
```

Create the LVGL object under a parent

### checked

```cpp
Radio & checked(bool c, Notify notify=Notify::No) &
```

Set the checked state at runtime

Setting the same value has no side effect.

### onChange

```cpp
Radio & onChange(F &&f, EventHandle *handle=nullptr) &
```

Append a state change subscription. The callback can take a bool, an Event&amp; or no parameter.

### isChecked

```cpp
bool isChecked() const
```

Query whether currently checked

### text

```cpp
Radio & text(const char *t) &
```

Change the label text at runtime

UTF-8 encoded

### text

```cpp
Radio & text(const LocalizedText &text) &
```

Bind text that updates with the language, copying the description. A plain string call replaces this binding.

### checkedColor

```cpp
Radio & checkedColor(ThemeRole role) &
```

Bind the checked color to a theme semantic role, updated automatically on theme change
