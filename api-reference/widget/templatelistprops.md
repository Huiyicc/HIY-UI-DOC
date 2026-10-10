---
title: "TemplateListProps"
---

# TemplateListProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/template_list.h>`

**命名空间：** `hiyui`

`TemplateList` 创建属性

## 公开成员

### width

```cpp
int width
```

列表宽度

### height

```cpp
int height
```

列表高度，HIYUI_AUTO = 内容自适应

### maxHeight

```cpp
int maxHeight
```

最大高度，height=HIYUI_AUTO 时生效，0 = 不限

### padding

```cpp
int padding
```

容器内边距

### gap

```cpp
int gap
```

item 间距，List 模式下作为纵向间距

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题 Surface

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### selectedIndex

```cpp
int selectedIndex
```

初始选中索引，-1 = 无选中

### columnCount

```cpp
int columnCount
```

Grid 模式固定列数，&lt;=0 表示自适应

### minItemWidth

```cpp
int minItemWidth
```

Grid 模式自适应最小列宽

### rowGap

```cpp
int rowGap
```

Grid 模式纵向间距，HIYUI_NONE_INT = 复用 gap

### columnGap

```cpp
int columnGap
```

Grid 模式横向间距，HIYUI_NONE_INT = 复用 gap
