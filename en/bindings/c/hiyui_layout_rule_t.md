---
title: "hiyui_layout_rule_t"
---

# hiyui_layout_rule_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Applies when both axes of logical content size fall in an interval with inclusive lower bound and exclusive upper bound. Lower bounds are non-negative, upper bounds are non-negative or HIYUI_AUTO. A lower bound must not exceed a finite upper bound. Equal bounds never match.

## Public Members

### min_width

```c
int min_width
```

### max_width

```c
int max_width
```

### min_height

```c
int min_height
```

### max_height

```c
int max_height
```

### values

```c
hiyui_layout_values_t values
```

fields must be a subset of base.fields.
