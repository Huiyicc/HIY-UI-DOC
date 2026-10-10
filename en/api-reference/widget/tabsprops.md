---
title: "TabsProps"
---

# TabsProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs.h>`

**Namespace:** `hiyui`

Tabs creation properties

## Public Members

### activeIndex

```cpp
int activeIndex
```

Initial active tab index

### position

```cpp
TabPosition position
```

Tab bar position

### tabBarHeight

```cpp
int tabBarHeight
```

Tab bar height

### width

```cpp
int width
```

Widget width; HIYUI_AUTO = fill the parent

### height

```cpp
int height
```

Widget height; HIYUI_AUTO = fit content

### activeColor

```cpp
uint32_t activeColor
```

Active tab color; HIYUI_DEFAULT = follow theme Primary

### inactiveColor

```cpp
uint32_t inactiveColor
```

Inactive tab color; HIYUI_DEFAULT = follow theme TextSecondary

### bg

```cpp
uint32_t bg
```

Background color; HIYUI_DEFAULT = follow theme

### fontSize

```cpp
int fontSize
```

Font size; 0 = use the theme default

### maxVisibleTabs

```cpp
int maxVisibleTabs
```

Maximum visible tabs; beyond this the bar scrolls horizontally. 0 = compute automatically from the width
