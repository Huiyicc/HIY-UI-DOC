---
title: "StyleSet"
---

# StyleSet <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style_set.h>`

**Namespace:** `hiyui`

Multi-state style set

Aggregates Style objects for each interaction state, unset fields do not override existing styles.



**See also:** `Style`


**See also:** `Theme::styleFor()`

## Public Members

### normal

```cpp
Style normal
```

Default state style

### hovered

```cpp
Style hovered
```

Hover state style

### pressed

```cpp
Style pressed
```

Pressed state style

### focused

```cpp
Style focused
```

Focus state style

### checked

```cpp
Style checked
```

Checked state style

### disabled

```cpp
Style disabled
```

Disabled state style

### focusKey

```cpp
Style focusKey
```

Keyboard focus style

### mixed

```cpp
Style mixed
```

Mixed selection style

### expanded

```cpp
Style expanded
```

Expanded style

## Public Methods

### applyTo

```cpp
void applyTo(_lv_obj_t *obj) const
```

Applies each state style to an LVGL object

Each state style binds to the corresponding LVGL state flag.


Target LVGL object pointer

### applyColorsOnly

```cpp
void applyColorsOnly(_lv_obj_t *obj, bool skipTextColor=false, bool skipBgColor=false) const
```

Refreshes color properties only, bg_color / text_color / border_color

Does not modify structural properties such as opacity, radius, padding and fontSize. Used to refresh safely on theme switching without breaking custom styles such as variant or custom drawing.


Target LVGL object When true, skips text_color refresh, the user has explicitly overridden it When true, skips bg_color refresh, the user has explicitly overridden it
