---
title: "PropertyGridProps"
---

# PropertyGridProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/property_grid.h>`

**命名空间：** `hiyui`

属性设计器的静态配置，尺寸使用逻辑像素。

## 公开成员

### width

```cpp
int width
```

HIYUI_AUTO 填满父容器宽度。

### height

```cpp
int height
```

HIYUI_AUTO 填满父容器高度，父容器须有确定高度。

### rowHeight

```cpp
int rowHeight
```

单行逻辑高度，最小 32；窄屏属性使用两行，分组保持一行。

### nameWidth

```cpp
int nameWidth
```

名称列逻辑宽度，自动限制在可用内容宽度内。

### narrowWidth

```cpp
int narrowWidth
```

小于此内容宽度时名称和值分行，0 禁用。
