---
title: "LabelProps"
---

# LabelProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/label.h>`

**Namespace:** `hiyui`

Text label creation properties

## Public Members

### text

```cpp
const char * text
```

Display text, UTF-8 encoded

### fontSize

```cpp
int fontSize
```

Font size, 0 = use the theme default

### textColor

```cpp
uint32_t textColor
```

Text color, HIYUI_DEFAULT = follow theme

### width

```cpp
int width
```

Label width, HIYUI_AUTO = fit the text content

### selectable

```cpp
bool selectable
```

Whether text selection and copy are allowed, off by default, effective only on the SDL desktop

### ellipsis

```cpp
bool ellipsis
```

Truncates overflow to a single line with an ellipsis, requires a constrained width such as a fixed width, a percentage or flex fill
