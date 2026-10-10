---
title: "PaginationState"
---

# PaginationState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/pagination.h>`

**命名空间：** `hiyui`

分页运行时状态，生命周期跟随 LVGL 对象

## 公开成员

### container

```cpp
lv_obj_t * container
```

指向宿主 lv_obj_t

### scrollArea

```cpp
lv_obj_t * scrollArea
```

裁剪区域，显示窗口

### strip

```cpp
lv_obj_t * strip
```

数字条，所有页码按钮的父容器

### highlight

```cpp
lv_obj_t * highlight
```

FLOATING 高亮框，固定在中间

### animScroll

```cpp
lv_anim_t animScroll
```

数字条滚动动画

### scrollX

```cpp
int scrollX
```

数字条当前 X 偏移

### maxVisible

```cpp
int maxVisible
```

可见窗口内的按钮数
