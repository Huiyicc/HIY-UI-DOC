---
title: "LayoutValues"
---

# LayoutValues <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/layout_rules.h>`

**Namespace:** `hiyui`

Layout field values; when the minimum size exceeds the finite maximum size, the minimum size applies. Lengths update with runtime DPI; overflow is allowed when the minimum size exceeds the parent content area, without enabling scrolling.

## Public Members

### gap

```cpp
int gap
```

Non-negative logical pixels.

### paddingX

```cpp
int paddingX
```

Left and right padding, non-negative logical pixels.

### paddingY

```cpp
int paddingY
```

Top and bottom padding, non-negative logical pixels.

### minWidth

```cpp
int minWidth
```

Non-negative logical pixels.

### minHeight

```cpp
int minHeight
```

Non-negative logical pixels.

### maxWidth

```cpp
int maxWidth
```

Non-negative logical pixels; HIYUI_AUTO removes the local cap.

### maxHeight

```cpp
int maxHeight
```

Non-negative logical pixels; HIYUI_AUTO removes the local cap.

### flex

```cpp
int flex
```

Share of remaining main-axis space, range 0 to 255.
