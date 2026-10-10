---
title: "ListDetailProps"
---

# ListDetailProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/list_detail.h>`

**命名空间：** `hiyui`

列表详情创建属性，非法配置不创建组件。

## 公开成员

### splitMinWidth

```cpp
int splitMinWidth
```

进入双栏的最小内容逻辑宽度，须大于 listWidth 与 gap 之和。

### listWidth

```cpp
int listWidth
```

双栏列表宽度，正逻辑像素。

### gap

```cpp
int gap
```

双栏间距，非负逻辑像素。

### animated

```cpp
bool animated
```

单栏区域切换是否使用主题动画。
