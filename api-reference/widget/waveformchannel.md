---
title: "WaveformChannel"
---

# WaveformChannel <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/chart/waveform_chart.h>`

**命名空间：** `hiyui`

波形频道配置

## 公开成员

### name

```cpp
const char * name
```

频道名称，用于图例

### color

```cpp
uint32_t color
```

频道颜色，HIYUI_DEFAULT = 自动分配

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

设置后覆盖名称，并随语言切换更新；传入时复制描述。
