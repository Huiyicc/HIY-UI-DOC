---
title: "LayoutRules"
---

# LayoutRules <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/layout_rules.h>`

**Namespace:** `hiyui`

Starting from base, marked fields of all matching rules are overridden in array order. The configuration and array are copied at the layoutRules call without transferring ownership; the default configuration is equivalent to clearing rules. Unknown field bits, or invalid enums or values in marked fields, invalidate the whole configuration.

## Public Members

### rules

```cpp
const LayoutRule * rules
```

Must point to a valid array when count is greater than 0.

### count

```cpp
size_t count
```

0 applies base only and rules is not read.
