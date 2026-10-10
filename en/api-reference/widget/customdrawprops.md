---
title: "CustomDrawProps"
---

# CustomDrawProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/custom_draw.h>`

**Namespace:** `hiyui`

CustomDraw creation properties.

## Public Members

### width

```cpp
int width
```

Width; HIYUI_AUTO is decided by layout

### height

```cpp
int height
```

Height; HIYUI_AUTO is decided by layout

### fps

```cpp
int fps
```

0 = static; &gt;0 = animation frame rate

### transparentBg

```cpp
bool transparentBg
```

Whether the background is transparent

### type

```cpp
WidgetType type
```

Associated widget type; non-Base uses the matching theme StyleSet; the default custom background is controlled by the Painter
