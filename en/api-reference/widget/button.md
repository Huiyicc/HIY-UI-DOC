---
title: "Button"
---

# Button <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/button.h>`

**Namespace:** `hiyui`

Button widget that can contain child components

**See also:** `ButtonProps`


**See also:** `Container`

**Inherits:** `hiyui::Container< Button >`

## Public Methods

### Button

```cpp
Button(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Button

```cpp
Button(ButtonProps props={})
```

Aggregate construction from properties

Button properties. Supports aggregate initialization

### init

```cpp
Button & init(lv_obj_t *parent) &
```

Creates the LVGL button object on a parent

Parent LVGL object pointer This component

### init

```cpp
Button & init(Widget &parent) &
```

Creates the LVGL button object on a parent

Parent LVGL object pointer This component

### text

```cpp
Button & text(const char *t) &
```

Changes the button text at runtime

New text content in UTF-8 This component

### text

```cpp
Button & text(const LocalizedText &t) &
```

Binds button text that updates with the language. Copies the description. A plain text call replaces this binding.

### icon

```cpp
Button & icon(uint32_t codepoint) &
```

Sets the icon codepoint at runtime, clearing the image source icon and rebuilding the content

Material Symbols codepoint. 0 = remove the icon This component

### icon

```cpp
Button & icon(const void *src) &
```

Sets the image source icon at runtime, clearing the icon codepoint and rebuilding the content

Image source, file path or lv_image_dsc_t. nullptr = remove the icon This component

### stateImage

```cpp
Button & stateImage(StyleState state, const void *src) &
```

Replaces a state base image at runtime. Path sources are copied; descriptors are borrowed until replaced or destroyed

Only Normal, Hovered, Pressed and Disabled take effect; other states do nothing Image source. nullptr = clear the base image for that state This component
