---
title: "hiyui_layout_rules_t"
---

# hiyui_layout_rules_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Starting from base, marked fields of all matching rules are overridden in array order.

## Public Members

### base

```c
hiyui_layout_values_t base
```

### rules

```c
const hiyui_layout_rule_t * rules
```

Must point to a valid array when count is greater than 0.

### count

```c
size_t count
```

0 applies only base and does not read rules.
