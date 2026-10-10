---
title: "LayoutValues"
---

# LayoutValues <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/layout_rules.h>`

**Namespace:** `hiyui`

Layout field values; when the minimum size exceeds a finite maximum size, layout uses the minimum size. Lengths update with runtime DPI; when the minimum size exceeds the parent content area, overflow is allowed and scrolling is not enabled automatically.

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

Horizontal padding, non-negative logical pixels.

### paddingY

```cpp
int paddingY
```

Vertical padding, non-negative logical pixels.

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

Non-negative logical pixels; HIYUI_AUTO removes the local upper bound.

### maxHeight

```cpp
int maxHeight
```

Non-negative logical pixels; HIYUI_AUTO removes the local upper bound.

### flex

```cpp
int flex
```

Share of the remaining main axis space, 0 to 255.
