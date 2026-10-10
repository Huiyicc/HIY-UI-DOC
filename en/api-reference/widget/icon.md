---
title: "Icon"
---

# Icon <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/icon.h>`

**Namespace:** `hiyui`

Material Symbols icon widget.

Uses an lv_image internally to display the bitmap rendered by FontIcon, recolored through the image_recolor mechanism and compatible with the theme system.

**Inherits:** `hiyui::Chainable< Icon >`

## Public Methods

### Icon

```cpp
Icon(lv_obj_t *obj)
```

Ref delegate constructor, internal use.

### init

```cpp
Icon & init(Widget &parent) &
```

Initialize under a Widget parent

### init

```cpp
Icon & init(lv_obj_t *parent) &
```

Initialize under an lv_obj_t parent

### codepoint

```cpp
Icon & codepoint(uint32_t cp) &
```

Set the icon codepoint

### iconSize

```cpp
Icon & iconSize(uint32_t sz) &
```

Set the icon size in pixels

### iconStyle

```cpp
Icon & iconStyle(const FontIconStyle &s) &
```

Set Variable Font axis parameters

### color

```cpp
Icon & color(uint32_t c) &
```

Set the icon color to a fixed value

### color

```cpp
Icon & color(ThemeRole role) &
```

Bind the icon color to a theme role, reactive

### colorFrom

```cpp
Icon & colorFrom(Widget &source) &
```

Follows the current text color of a mounted widget, reacting to state and theme. Repeated calls replace the source. The last color is kept after the source is removed. A stale source is a no-op.

### rendered

```cpp
bool rendered() const
```

Whether a displayable icon image is available. Returns false when unmounted or rendering is unavailable.

### opacity

```cpp
Icon & opacity(uint8_t opa) &
```

Set the icon opacity, 0 = fully transparent, 255 = opaque, default 255
