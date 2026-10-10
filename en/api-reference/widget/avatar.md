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

Wrap an existing LVGL object

### Avatar

```cpp
Avatar(AvatarProps props={})
```

Construct from aggregated properties

Avatar properties, aggregate initialization supported

### init

```cpp
Avatar & init(lv_obj_t *parent) &
```

Create the LVGL object under a parent

Parent LVGL object pointer This component

### init

```cpp
Avatar & init(Widget &parent) &
```

Create the LVGL object under a parent

Parent LVGL object pointer This component

### src

```cpp
Avatar & src(const void *s) &
```

Switch the image source at runtime

Image source This component

### src

```cpp
Avatar & src(const char *path) &
```

Switch the image source at runtime

Image file path This component

### textColor

```cpp
Avatar & textColor(ThemeRole role) &
```

Bind the text color to a theme semantic role, updated automatically on theme change

### borderColor

```cpp
Avatar & borderColor(ThemeRole role) &
```

Bind the border color to a theme semantic role, updated automatically on theme change
