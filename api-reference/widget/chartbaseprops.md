---
title: "ChartBaseProps"
---

# ChartBaseProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/chart/chart_base.h>`

**命名空间：** `hiyui`

图表公共创建属性

所有图表子类的 Props 均继承自该结构。

## 公开成员

### title

```cpp
const char * title
```

标题文本，UTF-8 编码，nullptr = 无标题

### width

```cpp
int width
```

宽度，HIYUI_AUTO = 填满父容器

### height

```cpp
int height
```

高度，单位主题逻辑像素

### padding

```cpp
int padding
```

内边距，单位主题逻辑像素

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### legend

```cpp
LegendPosition legend
```

图例位置

### xAxis

```cpp
AxisConfig xAxis
```

X 轴配置

### yAxis

```cpp
AxisConfig yAxis
```

Y 轴配置

### interaction

```cpp
InteractionConfig interaction
```

交互配置，十字准星、tooltip、缩放、平移
