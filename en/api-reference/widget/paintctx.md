---
title: "PaintCtx"
---

# PaintCtx <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/painter.h>`

**Namespace:** `hiyui`

Current widget information for paint and interaction callbacks, valid only during the callback.

## Public Members

### width

```cpp
int width
```

Widget width in physical pixels

### height

```cpp
int height
```

Widget height in physical pixels

### dpiScale

```cpp
float dpiScale
```

Current combined DPI factor, dpr × uiScale

### theme

```cpp
const Theme & theme
```

Current theme

### state

```cpp
WidgetState state
```

Current interaction state

### content

```cpp
Rect content
```

Local content area, in physical pixels

## Public Methods

### px

```cpp
int px(int logical) const
```

Converts logical pixels to this widget's physical pixels.
