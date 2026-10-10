---
title: "hiyui_layout_values_t"
---

# hiyui_layout_values_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/layout.h>`

使用 hiyui_layout_values_init 初始化后覆盖所需字段。

## 公开成员

### fields

```c
hiyui_layout_fields_t fields
```

### flow

```c
hiyui_flex_flow_t flow
```

### gap

```c
int gap
```

非负逻辑像素。

### padding_x

```c
int padding_x
```

左右内边距，非负逻辑像素。

### padding_y

```c
int padding_y
```

上下内边距，非负逻辑像素。

### width

```c
hiyui_layout_length_t width
```

### height

```c
hiyui_layout_length_t height
```

### min_width

```c
int min_width
```

非负逻辑像素。

### min_height

```c
int min_height
```

非负逻辑像素。

### max_width

```c
int max_width
```

非负逻辑像素；HIYUI_AUTO 移除局部上限。

### max_height

```c
int max_height
```

非负逻辑像素；HIYUI_AUTO 移除局部上限。

### flex

```c
int flex
```

范围 0 至 255，0 不参与主轴剩余空间分配。

### hidden

```c
hiyui_bool_t hidden
```

DEFAULT 和 FALSE 表示显示，TRUE 表示隐藏。
