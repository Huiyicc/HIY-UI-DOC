---
title: "hiyui_chart_slice_t"
---

# hiyui_chart_slice_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/chart.h>`

## 公开成员

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

调用时复制翻译描述并覆盖普通文字；空值或无效描述使用普通文字。
