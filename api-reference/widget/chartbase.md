---
title: "ChartBase"
---

# ChartBase <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/chart_base.h>`

**命名空间：** `hiyui`

图表公共基类，CRTP

提供标题、图例、绘图区容器与主题绑定的通用骨架。具体图表，折线、柱状、饼图、 波形、仪表盘继承 `ChartBase<自身类型>`，在 buildChart() 中于绘图区内创建具体图表对象。



| 名称 | 说明 |
|---|---|
| `Derived` | 具体图表类型，如 `LineChart` 继承 `ChartBase<LineChart>` |


**参见：** `ChartBaseProps`


**参见：** `LineChart`


**参见：** `BarChart`


**参见：** `PieChart`


**参见：** `WaveformChart`


**参见：** `GaugeChart`

**继承自：** `hiyui::Chainable< Derived >`

## 公开方法

### ChartBase

```cpp
ChartBase(lv_obj_t *raw)
```

包装已有 LVGL 对象

### ChartBase

```cpp
ChartBase(ChartBaseProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 图表公共属性 |

### init

```cpp
Derived & init(lv_obj_t *parent) &
```

在父对象上初始化布局骨架

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Derived & init(Widget &parent) &
```

在父对象上初始化布局骨架

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### title

```cpp
Derived & title(const char *text) &
```

运行时修改标题文本

| 参数 | 说明 |
|---|---|
| `text` | 新标题，UTF-8 编码 |


**返回值：** 当前组件

### title

```cpp
Derived & title(const LocalizedText &text) &
```

绑定已有标题；初始化前调用会创建标题，普通字符串取消绑定。

### legendPosition

```cpp
Derived & legendPosition(LegendPosition pos) &
```

设置图例位置，init 后调用仅记录配置，不移动已创建的图例

| 参数 | 说明 |
|---|---|
| `pos` | 图例位置 |


**返回值：** 当前组件

### xAxis

```cpp
Derived & xAxis(const AxisConfig &config) &
```

设置 X 轴配置

| 参数 | 说明 |
|---|---|
| `config` | 坐标轴配置 |


**返回值：** 当前组件

### yAxis

```cpp
Derived & yAxis(const AxisConfig &config) &
```

设置 Y 轴配置

| 参数 | 说明 |
|---|---|
| `config` | 坐标轴配置 |


**返回值：** 当前组件
