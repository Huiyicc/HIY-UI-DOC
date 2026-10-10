---
title: "hiyui_chart_slice_t"
---

# hiyui_chart_slice_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/chart.h>`

## Public Members

### name

```c
const char * name
```

### value

```c
float value
```

### color

```c
uint32_t color
```

### localized_name

```c
const hiyui_localized_text_t * localized_name
```

Copies the translation description on call and overrides the plain text. Null or invalid descriptions use the plain text.
