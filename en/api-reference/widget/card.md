---
title: "Card"
---

# Card <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/card.h>`

**Namespace:** `hiyui`

Card container widget that can hold child widgets

**See also:** `CardProps`


**See also:** `Container`

**Inherits:** `hiyui::Container< Card >`

## Public Methods

### Card

```cpp
Card(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Card

```cpp
Card(CardProps props={})
```

Construct from aggregated properties

Card properties, aggregate initialization supported

### init

```cpp
Card & init(lv_obj_t *parent) &
```

Create the LVGL object under a parent

Parent LVGL object pointer This component

### init

```cpp
Card & init(Widget &parent) &
```

Create the LVGL object under a parent

Parent LVGL object pointer This component

### title

```cpp
Card & title(const char *t) &
```

Set the card title

Title text, UTF-8 encoded This component

### title

```cpp
Card & title(const LocalizedText &text) &
```

Bind a title that updates with the language, created when the title area is missing. A plain title call replaces this binding.

### titleColor

```cpp
Card & titleColor(ThemeRole role) &
```

Bind the title color to a theme semantic role, updated automatically on theme change
