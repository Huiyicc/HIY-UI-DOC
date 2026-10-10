---
title: "hiyui_property_option_t"
---

# hiyui_property_option_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/property_grid.h>`

## 公开成员

### label

```c
const char * label
```

### value

```c
hiyui_property_value_t value
```

### disabled

```c
hiyui_bool_t disabled
```

### localized_label

```c
const hiyui_localized_text_t * localized_label
```

非 NULL 时复制描述并覆盖 label。
