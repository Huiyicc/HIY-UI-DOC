---
title: "WaveformChart"
---

# WaveformChart <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/waveform_chart.h>`

**命名空间：** `hiyui`

波形图组件

面向高频数据流的波形可视化，支持多频道、视口控制与线程安全的数据推入。



**参见：** `WaveformChartProps`


**参见：** `WaveformChannel`


**参见：** `ChartBase`

**继承自：** `hiyui::ChartBase< WaveformChart >`

## 公开方法

### WaveformChart

```cpp
WaveformChart(lv_obj_t *raw)
```

包装已有 LVGL 对象

### WaveformChart

```cpp
WaveformChart(WaveformChartProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 波形图属性 |

### init

```cpp
WaveformChart & init(lv_obj_t *parent) &
```

在父对象上创建波形图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### init

```cpp
WaveformChart & init(Widget &parent) &
```

在父对象上创建波形图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### addChannel

```cpp
int addChannel(WaveformChannel config={})
```

添加频道

| 参数 | 说明 |
|---|---|
| `config` | 频道配置 |


**返回值：** 新增频道的索引，从 0 起递增

### pushValue

```cpp
WaveformChart & pushValue(int channelIdx, float value) &
```

向指定频道推入单个采样值

线程安全，可从数据采集线程调用。



| 参数 | 说明 |
|---|---|
| `channelIdx` | 频道索引 |
| `value` | 采样值 |


**返回值：** 当前组件

### pushValues

```cpp
WaveformChart & pushValues(int channelIdx, const float *values, size_t count) &
```

向指定频道批量推入采样值

线程安全，可从数据采集线程调用。



| 参数 | 说明 |
|---|---|
| `channelIdx` | 频道索引 |
| `values` | 采样值数组 |
| `count` | 采样数 |


**返回值：** 当前组件

### viewport

```cpp
WaveformChart & viewport(size_t startIdx, size_t endIdx) &
```

设置可见视口范围

| 参数 | 说明 |
|---|---|
| `startIdx` | 起始数据索引 |
| `endIdx` | 结束数据索引 |


**返回值：** 当前组件

### viewAll

```cpp
WaveformChart & viewAll() &
```

显示全部数据

**返回值：** 当前组件

### viewLatest

```cpp
WaveformChart & viewLatest(size_t windowSize) &
```

自动跟踪最新数据

| 参数 | 说明 |
|---|---|
| `windowSize` | 可视窗口采样数 |


**返回值：** 当前组件

### yRange

```cpp
WaveformChart & yRange(float min, float max) &
```

设置 Y 轴范围

| 参数 | 说明 |
|---|---|
| `min` | 最小值 |
| `max` | 最大值 |


**返回值：** 当前组件

### channelSize

```cpp
size_t channelSize(int channelIdx) const
```

获取指定频道的数据点数

| 参数 | 说明 |
|---|---|
| `channelIdx` | 频道索引 |


**返回值：** 数据点数量

### refresh

```cpp
WaveformChart & refresh() &
```

刷新显示

数据更新后或定时调用以重绘波形。



**返回值：** 当前组件

### chartObj

```cpp
lv_obj_t * chartObj() const
```

获取底层波形图绘制对象

**返回值：** 波形图 LVGL 对象指针，用于高级自定义绘制
