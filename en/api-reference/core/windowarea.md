---
title: "WindowArea"
---

# WindowArea <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/responsive.h>`

**Namespace:** `hiyui`

Logical area relative to the window client area origin, not child-container local coordinates.

## Public Members

### valid

```cpp
bool valid
```

false when there is no window host.

### safeArea

```cpp
LogicalRect safeArea
```

Excludes decorations and known system-reserved areas.

### availableArea

```cpp
LogicalRect availableArea
```

Largest rectangle after excluding known keyboard occlusion; with equal area, the upper one is chosen, then the left one.

### keyboardArea

```cpp
LogicalRect keyboardArea
```

Empty when unknown or confirmed closed; keyboardAreaKnown distinguishes the two.

### safeAreaKnown

```cpp
bool safeAreaKnown
```

When false, safeArea only covers the currently known content extent.
