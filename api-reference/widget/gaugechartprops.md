---
title: "GaugeChartProps"
---

# GaugeChartProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/chart/gauge_chart.h>`

**命名空间：** `hiyui`

仪表盘创建属性

**继承自：** `hiyui::ChartBaseProps`

## 公开成员

### min

```cpp
float min
```

最小值

### max

```cpp
float max
```

最大值

### value

```cpp
float value
```

当前值

### startAngle

```cpp
int startAngle
```

起始角度，度，0 = 3 点钟方向，顺时针

### sweepAngle

```cpp
int sweepAngle
```

弧线扫描角度

### strokeWidth

```cpp
int strokeWidth
```

轨道弧宽度，单位主题逻辑像素

### rounded

```cpp
bool rounded
```

弧线圆角端点

### showValue

```cpp
bool showValue
```

是否显示数值文字

### unit

```cpp
const char * unit
```

单位文字，如 "%"、"°C"

### activeColor

```cpp
uint32_t activeColor
```

活动弧颜色，HIYUI_DEFAULT = 跟随主题主色

### trackColor

```cpp
uint32_t trackColor
```

轨道弧颜色，HIYUI_DEFAULT = 跟随主题
