---
title: "Icon"
---

# Icon <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/icon.h>`

**Namespace:** `hiyui`

Material Symbols icon widget.

Internally uses an lv_image to show the bitmap rendered by FontIcon. Coloring uses the image_recolor mechanism and works with the theme system.

**Inherits:** `hiyui::Chainable< Icon >`

## Public Methods

### Icon

```cpp
Icon(lv_obj_t *obj)
```

Ref proxy constructor, internal use.

### init

```cpp
Icon & init(Widget &parent) &
```

Initializes inside a Widget parent container

### init

```cpp
Icon & init(lv_obj_t *parent) &
```

Initializes under an lv_obj_t parent

### codepoint

```cpp
Icon & codepoint(uint32_t cp) &
```

Sets the icon codepoint

### iconSize

```cpp
Icon & iconSize(uint32_t sz) &
```

Sets the icon pixel size

### iconStyle

```cpp
Icon & iconStyle(const FontIconStyle &s) &
```

Sets the Variable Font axis parameters

### color

```cpp
Icon & color(uint32_t c) &
```

Sets the icon color to a fixed value

### color

```cpp
Icon & color(ThemeRole role) &
```

Binds the icon color to a theme role, reactive

### colorFrom

```cpp
Icon & colorFrom(Widget &source) &
```

Follows the current text color of the mounted source widget, reacting to state and theme. A repeated call replaces the source. The last color is kept after the source is deleted. An invalid source is a no-op.

### rendered

```cpp
bool rendered() const
```

Whether a displayable icon image is available; returns false when unmounted or when rendering is unavailable.

### opacity

```cpp
Icon & opacity(int opa) &
```

Sets the icon opacity, 0 = fully transparent, 255 = opaque, HIYUI_DEFAULT_INT = restore the default 255
