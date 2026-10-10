---
title: "HctTonalEngine"
---

# HctTonalEngine <Badge type="info" text="类" />

**头文件：** `#include <hiyui/style/tonal_engine.h>`

**命名空间：** `hiyui`

基于 HCT(CAM16 + L*) 的色调映射引擎

chroma 为 HCT 绝对色度值，MD3 TonalSpot 典型值， Primary=36, Secondary=16, Tertiary=24, Neutral=6, NeutralVariant=8。 感知均匀，配色精度高。

**继承自：** `hiyui::TonalEngine`

## 公开方法

### extractSeed

```cpp
virtual void extractSeed(uint32_t seedColor) override
```

从种子色提取色相/色度参数

| 参数 | 说明 |
|---|---|
| `seedColor` | 0xRRGGBB 格式种子色 |

### tonalColor

```cpp
virtual uint32_t tonalColor(double chroma, int tone) const override
```

在当前色相下生成指定 tone 的颜色

| 参数 | 说明 |
|---|---|
| `chroma` | 色度比例 [0.0, 1.0]，1.0 = 种子色原始色度 |
| `tone` | 明度 [0, 100] |


**返回值：** 0xRRGGBB

### tonalColorWithHueShift

```cpp
virtual uint32_t tonalColorWithHueShift(int hueDelta, double chroma, int tone) const override
```

偏移色相后生成颜色，Tertiary 等

| 参数 | 说明 |
|---|---|
| `hueDelta` | 色相偏移度数 |
| `chroma` | 色度比例 [0.0, 1.0] |
| `tone` | 明度 [0, 100] |


**返回值：** 0xRRGGBB
