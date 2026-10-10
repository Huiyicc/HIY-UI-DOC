---
title: "hiyui_layout_environment_t"
---

# hiyui_layout_environment_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/types.h>`

内容逻辑尺寸扣除边框和内边距；窗口区域不再从中扣除。

## 公开成员

### valid

```c
int valid
```

### content_width

```c
int content_width
```

### content_height

```c
int content_height
```

### scale

```c
float scale
```

逻辑像素到物理像素的缩放，无效快照为 1.0。

### input

```c
hiyui_input_capabilities_t input
```

### window

```c
hiyui_window_area_t window
```
