---
title: "TitleBarProps"
---

# TitleBarProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/title_bar.h>`

**Namespace:** `hiyui`

Title bar creation properties

## Public Members

### title

```cpp
const char * title
```

Title text, UTF-8 encoded

### iconSrc

```cpp
const char * iconSrc
```

Icon path, used only in Custom mode

### iconBytes

```cpp
const uint8_t * iconBytes
```

Encoded image bytes (PNG etc.), Bytes mode only; must stay valid for the title bar lifetime

### iconByteSize

```cpp
size_t iconByteSize
```

Length of iconBytes, Bytes mode only

### iconMode

```cpp
TitleBarIcon iconMode
```

Icon source; by default the program's own icon is used

### iconSize

```cpp
int iconSize
```

Icon logical size in theme logical pixels

### height

```cpp
int height
```

Title bar height in pixels

### bg

```cpp
uint32_t bg
```

Background color; HIYUI_DEFAULT = follow theme

### textColor

```cpp
uint32_t textColor
```

Text color; HIYUI_DEFAULT = follow theme

### fontSize

```cpp
int fontSize
```

Font size; 0 = use the theme default

### items

```cpp
TitleBarItem items
```

Elements to show, combined as a bitmask

### layout

```cpp
TitleBarLayout layout
```

Control button layout

### btnSize

```cpp
int btnSize
```

Window control button size in pixels

### transitionMs

```cpp
int transitionMs
```

Button hover fade duration in milliseconds

### bottomShadow

```cpp
bool bottomShadow
```

Whether to show a subtle bottom shadow
