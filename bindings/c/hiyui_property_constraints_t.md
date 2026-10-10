---
title: "hiyui_property_constraints_t"
---

# hiyui_property_constraints_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/property_grid.h>`

## 公开成员

### minimum

```c
hiyui_property_value_t minimum
```

### maximum

```c
hiyui_property_value_t maximum
```

### step

```c
hiyui_property_value_t step
```

### decimals

```c
int decimals
```

### max_length

```c
int max_length
```

### unit

```c
const char * unit
```

### nullable

```c
hiyui_bool_t nullable
```

### localized_unit

```c
const hiyui_localized_text_t * localized_unit
```

非 NULL 时复制描述并覆盖 unit，仅影响显示。
