---
title: "LayoutEnvironment"
---

# LayoutEnvironment <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/responsive.h>`

**命名空间：** `hiyui`

当前组件内容空间与所属窗口环境的布局快照。

## 公开成员

### contentWidth

```cpp
int contentWidth
```

逻辑像素，扣除边框和内边距，不扣滚动偏移。

### contentHeight

```cpp
int contentHeight
```

逻辑像素，扣除边框和内边距，不扣滚动偏移。

### scale

```cpp
float scale
```

逻辑像素到物理像素的缩放，不含组件变换。
