---
title: "LayoutEnvironment"
---

# LayoutEnvironment <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/responsive.h>`

**Namespace:** `hiyui`

Layout snapshot of this component's content space and its window environment.

## Public Members

### contentWidth

```cpp
int contentWidth
```

Logical pixels; borders and padding are subtracted, scroll offset is not.

### contentHeight

```cpp
int contentHeight
```

Logical pixels; borders and padding are subtracted, scroll offset is not.

### scale

```cpp
float scale
```

Logical to physical pixel scale, excluding widget transforms.
