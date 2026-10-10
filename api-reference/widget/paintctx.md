---
title: "PaintCtx"
---

# PaintCtx <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/painter.h>`

**命名空间：** `hiyui`

自绘与交互回调的当前组件信息，仅在回调期间有效。

## 公开成员

### width

```cpp
int width
```

组件物理像素宽度

### height

```cpp
int height
```

组件物理像素高度

### dpiScale

```cpp
float dpiScale
```

当前综合 DPI 因子，dpr × uiScale

### theme

```cpp
const Theme & theme
```

当前主题

### state

```cpp
WidgetState state
```

当前交互状态

### content

```cpp
Rect content
```

局部内容区，单位为物理像素

## 公开方法

### px

```cpp
int px(int logical) const
```

将逻辑像素转换为当前组件的物理像素。
