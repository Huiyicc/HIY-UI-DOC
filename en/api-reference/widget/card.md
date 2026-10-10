---
title: "Card"
---

# Card <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/card.h>`

**Namespace:** `hiyui`

Card container widget that can contain child components

**See also:** `CardProps`


**See also:** `Container`

**Inherits:** `hiyui::Container< Card >`

## Public Methods

### Card

```cpp
Card(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Card

```cpp
Card(CardProps props={})
```

Aggregate construction from properties

Card properties. Supports aggregate initialization

### init

```cpp
Card & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### init

```cpp
Card & init(Widget &parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### title

```cpp
Card & title(const char *t) &
```

Sets the card title

Title text in UTF-8 This component

### title

```cpp
Card & title(const LocalizedText &text) &
```

Binds a title that updates with the language. Creates the title area when missing. A plain title call replaces this binding.

### titleColor

```cpp
Card & titleColor(ThemeRole role) &
```

Binds the title color to a theme semantic role. Updates automatically on theme switch
