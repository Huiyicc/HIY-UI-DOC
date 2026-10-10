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

Button text, UTF-8 encoded

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

Icon size, 0 = default 18

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style, fill/weight/grade/opticalSize

### variant

```cpp
ButtonVariant variant
```

Button variant

### width

```cpp
int width
```

Width, HIYUI_AUTO = fit content

### height

```cpp
int height
```

Height, HIYUI_AUTO = fit content

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### textColor

```cpp
uint32_t textColor
```

Text color, HIYUI_DEFAULT = follow theme

### fontSize

```cpp
int fontSize
```

Font size, 0 = use the theme default

### radius

```cpp
uint32_t radius
```

Corner radius, HIYUI_DEFAULT = follow theme

### underline

```cpp
bool underline
```

Text underline, only effective for the Link variant, on by default

### normalSrc

```cpp
const void * normalSrc
```

Normal state image, a file path (const char*) or lv_image_dsc_t*. State pick priority: disabled &gt; pressed &gt; hovered &gt; normal. Setting any state image makes the background fully transparent by default

### hoveredSrc

```cpp
const void * hoveredSrc
```

Hovered state image, entered on pointer hover; falls back to the next lower-priority image when unset

### pressedSrc

```cpp
const void * pressedSrc
```

Pressed state image; falls back to the next lower-priority image when unset

### disabledSrc

```cpp
const void * disabledSrc
```

Disabled state image; falls back to the next lower-priority image when unset

### fit

```cpp
ImageFit fit
```

Image fit mode, applied when the size is constrained by layout
