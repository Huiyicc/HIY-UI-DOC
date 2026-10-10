---
title: "hiyui_layout_rules_t"
---

# hiyui_layout_rules_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Starts from base, then applies the marked fields of all matching rules in array order.

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

0 means only base is applied, rules is not read.
