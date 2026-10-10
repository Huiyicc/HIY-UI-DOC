---
title: "GaugeChart"
---

# GaugeChart <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/gauge_chart.h>`

**命名空间：** `hiyui`

仪表盘组件

使用 lv_draw_arc 自绘，以半圆或 3/4 圆形式展示单值指标。



**参见：** `GaugeChartProps`


**参见：** `ChartBase`

**继承自：** `hiyui::ChartBase< GaugeChart >`

## 公开方法

### GaugeChart

```cpp
GaugeChart(lv_obj_t *raw)
```

包装已有 LVGL 对象

从已创建的仪表盘对象恢复 C++ 包装，自动重新关联持久化绘制状态。



| 参数 | 说明 |
|---|---|
| `raw` | 已创建的 lv_obj_t 指针 |

### GaugeChart

```cpp
GaugeChart(GaugeChartProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 仪表盘属性 |

### init

```cpp
GaugeChart & init(lv_obj_t *parent) &
```

在父对象上创建仪表盘

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### init

```cpp
GaugeChart & init(Widget &parent) &
```

在父对象上创建仪表盘

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### value

```cpp
GaugeChart & value(float v, Notify notify=Notify::No) &
```

设置当前值

| 参数 | 说明 |
|---|---|
| `v` | 新值，超出 [min, max] 范围时自动钳制 |


**返回值：** 当前组件

### value

```cpp
float value() const
```

获取当前显示值

**返回值：** 当前值

### range

```cpp
GaugeChart & range(float min, float max, Notify notify=Notify::No) &
```

设置量程范围

| 参数 | 说明 |
|---|---|
| `min` | 最小值 |
| `max` | 最大值 |


**返回值：** 当前组件

### gaugeObj

```cpp
lv_obj_t * gaugeObj() const
```

获取底层仪表盘绘制对象

**返回值：** 仪表盘 LVGL 对象指针，用于高级自定义绘制
