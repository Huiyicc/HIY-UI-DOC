---
title: "PieSlice"
---

# PieSlice <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/chart/pie_chart.h>`

**命名空间：** `hiyui`

饼图扇区数据

## 公开成员

### name

```cpp
const char * name
```

扇区名称，用于图例

### value

```cpp
float value
```

原始数值，百分比自动计算

### color

```cpp
uint32_t color
```

扇区颜色，HIYUI_DEFAULT = 自动分配

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

设置后覆盖名称，并随语言切换更新；传入时复制描述。
