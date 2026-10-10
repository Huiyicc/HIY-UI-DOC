---
title: "Shadow"
---

# Shadow <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Shadow effect configuration

No shadow effect when all values are 0.

## Public Members

### x

```cpp
int x
```

Horizontal offset, positive to the right

### y

```cpp
int y
```

Vertical offset, positive downward

### blur

```cpp
int blur
```

Blur radius, larger values are more blurred

### color

```cpp
RGBA color
```

Shadow color, HIYUI_NONE = follow theme

### opacity

```cpp
int opacity
```

Shadow opacity [0,255], HIYUI_NONE_INT = not set, 0 = hidden

### sides

```cpp
ShadowSide sides
```

Effective edges, combinable with bitwise or

### placement

```cpp
ShadowPlacement placement
```

Shadow position
