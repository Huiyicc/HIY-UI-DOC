---
title: "hiyui_chart_series_t"
---

# hiyui_chart_series_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/chart.h>`

## Public Members

### name

```c
const char * name
```

### color

```c
uint32_t color
```

### line_width

```c
int line_width
```

### show_points

```c
hiyui_bool_t show_points
```

### point_radius

```c
int point_radius
```

### smooth

```c
hiyui_bool_t smooth
```

### area_fill

```c
hiyui_bool_t area_fill
```

### area_opacity

```c
uint8_t area_opacity
```

### localized_name

```c
const hiyui_localized_text_t * localized_name
```

Copies the translation description on call and overrides the plain text. Null or invalid descriptions use the plain text.
