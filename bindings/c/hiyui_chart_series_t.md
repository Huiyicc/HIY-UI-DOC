---
title: "hiyui_chart_series_t"
---

# hiyui_chart_series_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/chart.h>`

## 公开成员

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

调用时复制翻译描述并覆盖普通文字；空值或无效描述使用普通文字。
