---
title: "MenuBarProps"
---

# MenuBarProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu_bar.h>`

**Namespace:** `hiyui`

Menu bar creation properties

## Public Members

### height

```cpp
int height
```

Bar height in theme logical pixels

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

### hoverColor

```cpp
uint32_t hoverColor
```

Top-level item hover highlight color

### activeColor

```cpp
uint32_t activeColor
```

Top-level item highlight color while the dropdown is open

### fontSize

```cpp
int fontSize
```

Font size. 0 = theme default

### itemPaddingX

```cpp
int itemPaddingX
```

Top-level item horizontal padding

### popupMode

```cpp
PopupMode popupMode
```

Dropdown popup mode
