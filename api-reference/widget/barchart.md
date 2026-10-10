---
title: "BarChart"
---

# BarChart <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/bar_chart.h>`

**命名空间：** `hiyui`

柱状图组件

封装 lv_chart 的 BAR/STACKED 模式，支持 hover 阴影高亮和数值气泡。



**参见：** `BarChartProps`


**参见：** `ChartBase`

**继承自：** `hiyui::ChartBase< BarChart >`

## 公开方法

### BarChart

```cpp
BarChart(lv_obj_t *raw)
```

包装已有 LVGL 对象

### BarChart

```cpp
BarChart(BarChartProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 柱状图属性 |

### init

```cpp
BarChart & init(lv_obj_t *parent) &
```

在父对象上创建柱状图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### init

```cpp
BarChart & init(Widget &parent) &
```

在父对象上创建柱状图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### addSeries

```cpp
int addSeries(SeriesConfig config={})
```

添加数据系列

| 参数 | 说明 |
|---|---|
| `config` | 系列配置 |


**返回值：** 新增系列的索引，从 0 起递增

### data

```cpp
BarChart & data(int seriesIdx, const int32_t *values, int count) &
```

设置指定系列的整段数据

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引 |
| `values` | 数据数组 |
| `count` | 数据点数量 |


**返回值：** 当前组件

### data

```cpp
BarChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

设置指定系列的整段数据

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引 |
| `values` | 数据数组 |


**返回值：** 当前组件

### xLabels

```cpp
BarChart & xLabels(const std::vector< std::string > &labels) &
```

设置 X 轴刻度文本

| 参数 | 说明 |
|---|---|
| `labels` | 刻度文本数组 |


**返回值：** 当前组件

### xLabels

```cpp
BarChart & xLabels(const std::vector< LocalizedText > &labels) &
```

绑定各刻度文案；替换标签会解除原绑定，不改变数据或视口。

### yRange

```cpp
BarChart & yRange(int32_t min, int32_t max) &
```

设置 Y 轴范围

| 参数 | 说明 |
|---|---|
| `min` | 最小值 |
| `max` | 最大值 |


**返回值：** 当前组件

### chartObj

```cpp
lv_obj_t * chartObj() const
```

获取底层 lv_chart 对象

**返回值：** 柱状图 LVGL 对象指针，用于高级自定义绘制
