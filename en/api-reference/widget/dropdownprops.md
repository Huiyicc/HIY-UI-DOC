---
title: "DropdownProps"
---

# DropdownProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dropdown.h>`

**Namespace:** `hiyui`

Dropdown creation properties

## Public Members

### selectedIndex

```cpp
int selectedIndex
```

Initial selected index

### placeholder

```cpp
const char * placeholder
```

Placeholder text shown when nothing is selected

### width

```cpp
int width
```

Dropdown width

### height

```cpp
int height
```

Dropdown height, HIYUI_AUTO = fit content

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

### maxHeight

```cpp
int maxHeight
```

Maximum dropdown list height in theme logical pixels; 0 or less means unlimited

### arrowSide

```cpp
ArrowSide arrowSide
```

Arrow position

### align

```cpp
DropdownAlign align
```

Text alignment

### itemHeight

```cpp
int itemHeight
```

List item height

### popupMode

```cpp
PopupMode popupMode
```

Popup mode. Window falls back to inline when floating window capability is unavailable or creation fails

### searchable

```cpp
bool searchable
```

Search filter toggle, off by default. In editable mode typing filters the list; in non-editable mode a search box is shown at the top of the popup list

### editable

```cpp
bool editable
```

Editable mode; the closed state accepts free-text input
