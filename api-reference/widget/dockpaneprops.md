---
title: "DockPaneProps"
---

# DockPaneProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

停靠面板创建属性。

## 公开成员

### title

```cpp
const char * title
```

标题，空时显示 "Pane"，内部复制。

### name

```cpp
const char * name
```

唯一名，查找与序列化用；空时取 title。

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols 码点，0 表示无图标。

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标轴参数。

### edge

```cpp
DockEdge edge
```

初始停靠边。

### width

```cpp
int width
```

Left/Right 初始宽度，HIYUI_AUTO = 与邻居平分。

### height

```cpp
int height
```

Top/Bottom 初始高度，HIYUI_AUTO = 与邻居平分。

### minWidth

```cpp
int minWidth
```

最小宽度，主题逻辑像素。

### minHeight

```cpp
int minHeight
```

最小高度，主题逻辑像素。

### closable

```cpp
bool closable
```

是否显示关闭控件并发送关闭事件。

### movable

```cpp
bool movable
```

是否允许拖拽移动。

### floatable

```cpp
bool floatable
```

是否允许拖出浮动。

### animated

```cpp
bool animated
```

是否启用该面板参与的入坞动画。
