---
title: "LayoutValues"
---

# LayoutValues <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/layout_rules.h>`

**命名空间：** `hiyui`

布局字段值，最小尺寸大于有限最大尺寸时按最小尺寸布局。 长度随运行时 DPI 更新；最小尺寸超过父内容区时允许溢出，不自动开启滚动。

## 公开成员

### gap

```cpp
int gap
```

非负逻辑像素。

### paddingX

```cpp
int paddingX
```

左右内边距，非负逻辑像素。

### paddingY

```cpp
int paddingY
```

上下内边距，非负逻辑像素。

### minWidth

```cpp
int minWidth
```

非负逻辑像素。

### minHeight

```cpp
int minHeight
```

非负逻辑像素。

### maxWidth

```cpp
int maxWidth
```

非负逻辑像素；HIYUI_AUTO 移除局部上限。

### maxHeight

```cpp
int maxHeight
```

非负逻辑像素；HIYUI_AUTO 移除局部上限。

### flex

```cpp
int flex
```

主轴剩余空间的分配比例，范围 0 至 255。
