---
title: "RadioProps"
---

# RadioProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/radio.h>`

**Namespace:** `hiyui`

Radio button creation properties

## Public Members

### text

```cpp
const char * text
```

Label text in UTF-8

### checked

```cpp
bool checked
```

Initial checked state

### width

```cpp
int width
```

Width. HIYUI_AUTO = fit content

### checkedColor

```cpp
uint32_t checkedColor
```

Checked color. HIYUI_DEFAULT = follow theme Primary

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

### group

```cpp
uint32_t group
```

Mutually exclusive group ID. Only one Radio per group can be checked

### indicatorSide

```cpp
IndicatorSide indicatorSide
```

Indicator position, left side by default

### textAlign

```cpp
TextAlign textAlign
```

Text alignment, left by default
