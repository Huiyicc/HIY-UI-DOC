---
title: "hiyui_chart_hit_t"
---

# hiyui_chart_hit_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/chart.h>`

Hit result. Valid only inside the tooltip callback; the pointer is invalid after the callback returns.

## Public Members

### series_idx

```c
int series_idx
```

### data_idx

```c
size_t data_idx
```

### value

```c
float value
```

### screen_x

```c
int screen_x
```

### screen_y

```c
int screen_y
```

### color

```c
uint32_t color
```

### series_name

```c
const char * series_name
```
