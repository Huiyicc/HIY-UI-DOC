---
title: "LayoutRules"
---

# LayoutRules <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/layout_rules.h>`

**Namespace:** `hiyui`

Starts from base, then applies all matching rules in array order to the marked fields. The configuration and array are copied when layoutRules is called, ownership is not transferred; the default configuration is equivalent to clearing rules. Unknown field bits, or invalid enums or values in marked fields, invalidate the whole configuration.

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

0 applies only base and rules is not read.
