---
title: "Button"
---

# Button <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/button.h>`

**Namespace:** `hiyui`

Button widget that can hold child widgets

**See also:** `ButtonProps`


**See also:** `Container`

**Inherits:** `hiyui::Container< Button >`

## Public Methods

### Button

```cpp
Button(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Button

```cpp
Button(ButtonProps props={})
```

Construct from aggregated properties

Button properties, aggregate initialization supported

### init

```cpp
Button & init(lv_obj_t *parent) &
```

Create the LVGL button object under a parent

Parent LVGL object pointer This component

### init

```cpp
Button & init(Widget &parent) &
```

Create the LVGL button object under a parent

Parent LVGL object pointer This component

### text

```cpp
Button & text(const char *t) &
```

Change the button text at runtime

New text content, UTF-8 encoded This component

### text

```cpp
Button & text(const LocalizedText &t) &
```

Bind button text that follows locale updates, copying the text; a plain text() call replaces this binding.

### icon

```cpp
Button & icon(uint32_t codepoint) &
```

Set the icon by codepoint at runtime, clearing any image icon and rebuilding content

Material Symbols codepoint, 0 = remove the icon This component

### icon

```cpp
Button & icon(const void *src) &
```

Set the icon by image source at runtime, clearing any codepoint icon and rebuilding content

Image source, a file path or lv_image_dsc_t, nullptr = remove the icon This component

### stateImage

```cpp
Button & stateImage(StyleState state, const void *src) &
```

Replace a state image at runtime, copying path sources; descriptors are borrowed until replaced or destroyed

Only Normal/Hovered/Pressed/Disabled take effect, other states do nothing Image source, nullptr = clear the image of that state This component
