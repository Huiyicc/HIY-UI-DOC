---
title: "Avatar"
---

# Avatar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/avatar.h>`

**Namespace:** `hiyui`

Avatar widget

**See also:** `AvatarProps`

**Inherits:** `hiyui::Chainable< Avatar >`

## Public Methods

### Avatar

```cpp
Avatar(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Avatar

```cpp
Avatar(AvatarProps props={})
```

Aggregate construction from properties

Avatar properties. Supports aggregate initialization

### init

```cpp
Avatar & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### init

```cpp
Avatar & init(Widget &parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### src

```cpp
Avatar & src(const void *s) &
```

Changes the image source at runtime

Image source This component

### src

```cpp
Avatar & src(const char *path) &
```

Changes the image source at runtime

Image file path This component

### textColor

```cpp
Avatar & textColor(ThemeRole role) &
```

Binds the text color to a theme semantic role. Updates automatically on theme switch

### borderColor

```cpp
Avatar & borderColor(ThemeRole role) &
```

Binds the border color to a theme semantic role. Updates automatically on theme switch
