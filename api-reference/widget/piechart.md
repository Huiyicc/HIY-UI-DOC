---
title: "PieChart"
---

# PieChart <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/pie_chart.h>`

**命名空间：** `hiyui`

饼图/环形图组件

使用 `DrawCtx` 自绘，支持 hover 高亮和百分比标签。innerRadius &gt; 0 时渲染为环形图。



**参见：** `PieChartProps`


**参见：** `PieSlice`


**参见：** `ChartBase`

**继承自：** `hiyui::ChartBase< PieChart >`

## 公开方法

### PieChart

```cpp
PieChart(lv_obj_t *raw)
```

包装已有 LVGL 对象

### PieChart

```cpp
PieChart(PieChartProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 饼图属性 |

### init

```cpp
PieChart & init(lv_obj_t *parent) &
```

在父对象上创建饼图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### init

```cpp
PieChart & init(Widget &parent) &
```

在父对象上创建饼图

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |

### slices

```cpp
PieChart & slices(const std::vector< PieSlice > &slices) &
```

设置扇区数据，整体替换

| 参数 | 说明 |
|---|---|
| `slices` | 扇区数组 |


**返回值：** 当前组件

### sliceValue

```cpp
PieChart & sliceValue(int idx, float value) &
```

动态更新单个扇区的值

| 参数 | 说明 |
|---|---|
| `idx` | 扇区索引 |
| `value` | 新数值 |


**返回值：** 当前组件

### chartObj

```cpp
lv_obj_t * chartObj() const
```

获取底层饼图绘制对象

**返回值：** 饼图 LVGL 对象指针，用于高级自定义绘制
