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

Displayed text in UTF-8

### fontSize

```cpp
int fontSize
```

Font size. 0 = use the theme default

### textColor

```cpp
uint32_t textColor
```

Text color. HIYUI_DEFAULT = follow theme

### width

```cpp
int width
```

Label width. HIYUI_AUTO = fit text content

### selectable

```cpp
bool selectable
```

Whether text selection and copy is allowed. Off by default. Only effective on SDL desktop

### ellipsis

```cpp
bool ellipsis
```

Truncates a single line with an ellipsis when too long. Requires a constrained width such as fixed width, percentage or flex fill
