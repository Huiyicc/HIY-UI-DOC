---
title: "LineChart"
---

# LineChart <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/line_chart.h>`

**命名空间：** `hiyui`

折线图组件

封装 lv_chart 的 LINE/CURVE 模式，支持渐变面积填充、数据点高亮和 tooltip。



**参见：** `LineChartProps`


**参见：** `ChartBase`

**继承自：** `hiyui::ChartBase< LineChart >`

## 公开方法

### LineChart

```cpp
LineChart(lv_obj_t *raw)
```

包装已有 LVGL 对象

### LineChart

```cpp
LineChart(LineChartProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 折线图属性 |

### init

```cpp
LineChart & init(lv_obj_t *parent) &
```

在父对象上创建折线图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### init

```cpp
LineChart & init(Widget &parent) &
```

在父对象上创建折线图

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
| `config` | 系列配置，名称、颜色、线宽等 |


**返回值：** 新增系列的索引，从 0 起递增

### data

```cpp
LineChart & data(int seriesIdx, const int32_t *values, int count) &
```

设置指定系列的整段数据

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引，addSeries 返回值 |
| `values` | 数据数组 |
| `count` | 数据点数量 |


**返回值：** 当前组件

### data

```cpp
LineChart & data(int seriesIdx, const std::vector< int32_t > &values) &
```

设置指定系列的整段数据

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引 |
| `values` | 数据数组 |


**返回值：** 当前组件

### pushValue

```cpp
LineChart & pushValue(int seriesIdx, int32_t value) &
```

向指定系列末尾推入一个数据点

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引 |
| `value` | 数据值 |


**返回值：** 当前组件

### clearSeries

```cpp
LineChart & clearSeries(int seriesIdx) &
```

清空指定系列的数据

| 参数 | 说明 |
|---|---|
| `seriesIdx` | 系列索引 |


**返回值：** 当前组件

### xLabels

```cpp
LineChart & xLabels(const std::vector< std::string > &labels) &
```

设置 X 轴刻度文本

| 参数 | 说明 |
|---|---|
| `labels` | 刻度文本数组，长度应与 pointCount 一致 |


**返回值：** 当前组件

### xLabels

```cpp
LineChart & xLabels(const std::vector< LocalizedText > &labels) &
```

绑定各刻度文案；替换标签会解除原绑定，不改变数据或视口。

### yRange

```cpp
LineChart & yRange(int32_t min, int32_t max) &
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

**返回值：** 折线图 LVGL 对象指针，用于高级自定义绘制
