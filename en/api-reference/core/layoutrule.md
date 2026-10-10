---
title: "LayoutRule"
---

# LayoutRule <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/layout_rules.h>`

**Namespace:** `hiyui`

Matches on host logical content width and height; lower bounds inclusive, upper bounds exclusive, effective only when both axes match. Lower bounds are non-negative; upper bounds are non-negative values or HIYUI_AUTO, meaning no upper bound. A lower bound must not exceed a finite upper bound; equal bounds never match.

## Public Members

### values

```cpp
LayoutValues values
```

fields must be a subset of LayoutRules::base.fields.
