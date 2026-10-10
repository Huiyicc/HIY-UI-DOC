---
title: "ButtonProps"
---

# ButtonProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/button.h>`

**Namespace:** `hiyui`

Button creation properties

## Public Members

### text

```cpp
const char * text
```

Button text in UTF-8

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Icon codepoint before the text

### iconSrc

```cpp
const void * iconSrc
```

Image source before the text

### iconSize

```cpp
uint32_t iconSize
```

Icon size. 0 = default 18

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style. fill/weight/grade/opticalSize

### variant

```cpp
ButtonVariant variant
```

Button variant

### width

```cpp
int width
```

Width. HIYUI_AUTO = fit content

### height

```cpp
int height
```

Height. HIYUI_AUTO = fit content

### bg

```cpp
uint32_t bg
```

Background color. HIYUI_DEFAULT = follow theme

### textColor

```cpp
uint32_t textColor
```

Text color. HIYUI_DEFAULT = follow theme

### fontSize

```cpp
int fontSize
```

Font size. 0 = use the theme default

### radius

```cpp
uint32_t radius
```

Corner radius. HIYUI_DEFAULT = follow theme

### underline

```cpp
bool underline
```

Text underline. Only effective on the Link variant, on by default

### normalSrc

```cpp
const void * normalSrc
```

Normal state base image, file path (const char*) or lv_image_dsc_t*. State selection priority is disabled &gt; pressed &gt; hovered &gt; normal. After any state base image is set, the background defaults to fully transparent

### hoveredSrc

```cpp
const void * hoveredSrc
```

Hovered state base image, entered while the pointer hovers. Falls back to a lower-priority base image when unset

### pressedSrc

```cpp
const void * pressedSrc
```

Pressed state base image. Falls back to a lower-priority base image when unset

### disabledSrc

```cpp
const void * disabledSrc
```

Disabled state base image. Falls back to a lower-priority base image when unset

### fit

```cpp
ImageFit fit
```

Base image scaling mode. Takes effect when the size is constrained by the layout
