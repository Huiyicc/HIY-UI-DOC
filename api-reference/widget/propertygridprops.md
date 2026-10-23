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

### headerBg

```cpp
uint32_t headerBg
```

表头底色，HIYUI_DEFAULT 跟随主题。

### groupBg

```cpp
uint32_t groupBg
```

分组行底色，HIYUI_DEFAULT 跟随主题。

### selectedBg

```cpp
uint32_t selectedBg
```

选中行底色，HIYUI_DEFAULT 跟随主题。

### hoverBg

```cpp
uint32_t hoverBg
```

行和操作控件的悬停底色，HIYUI_DEFAULT 跟随主题。

### pressedBg

```cpp
uint32_t pressedBg
```

行和操作控件的按下底色，HIYUI_DEFAULT 跟随主题。

### borderColor

```cpp
uint32_t borderColor
```

边框及分隔线颜色，HIYUI_DEFAULT 跟随主题。

### secondaryTextColor

```cpp
uint32_t secondaryTextColor
```

说明、只读值和禁用操作的文字色，HIYUI_DEFAULT 跟随主题。
