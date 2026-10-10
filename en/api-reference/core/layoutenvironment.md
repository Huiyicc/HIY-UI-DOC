---
title: "LayoutEnvironment"
---

# LayoutEnvironment <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/responsive.h>`

**Namespace:** `hiyui`

Layout snapshot of the widget's content space and its owning window environment.

## Public Members

### contentWidth

```cpp
int contentWidth
```

Logical pixels, border and padding excluded, scroll offset not excluded.

### contentHeight

```cpp
int contentHeight
```

Logical pixels, border and padding excluded, scroll offset not excluded.

### scale

```cpp
float scale
```

Logical to physical pixel scale, widget transformations not included.
