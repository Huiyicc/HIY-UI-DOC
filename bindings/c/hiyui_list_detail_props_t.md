---
title: "hiyui_list_detail_props_t"
---

# hiyui_list_detail_props_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/layout.h>`

使用 hiyui_list_detail_props_init 初始化，整数 0 不表示默认值。

## 公开成员

### split_min_width

```c
int split_min_width
```

双栏最小内容逻辑宽度，须大于 list_width 与 gap 之和。

### list_width

```c
int list_width
```

双栏列表宽度，正逻辑像素。

### gap

```c
int gap
```

双栏间距，非负逻辑像素。

### animated

```c
hiyui_bool_t animated
```

DEFAULT 和 TRUE 启用主题动画，FALSE 关闭。
