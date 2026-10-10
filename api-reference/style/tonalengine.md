---
title: "TonalEngine"
---

# TonalEngine <Badge type="info" text="类" />

**头文件：** `#include <hiyui/style/tonal_engine.h>`

**命名空间：** `hiyui`

色调映射引擎基类

子类实现从种子色提取色相参数、按指定 tone/chroma 生成 RGB 的核心逻辑。

## 公开方法

### extractSeed

```cpp
virtual void extractSeed(uint32_t seedColor)=0
```

从种子色提取色相/色度参数

| 参数 | 说明 |
|---|---|
| `seedColor` | 0xRRGGBB 格式种子色 |

### tonalColor

```cpp
virtual uint32_t tonalColor(double chroma, int tone) const =0
```

在当前色相下生成指定 tone 的颜色

| 参数 | 说明 |
|---|---|
| `chroma` | 色度比例 [0.0, 1.0]，1.0 = 种子色原始色度 |
| `tone` | 明度 [0, 100] |


**返回值：** 0xRRGGBB

### tonalColorWithHueShift

```cpp
virtual uint32_t tonalColorWithHueShift(int hueDelta, double chroma, int tone) const =0
```

偏移色相后生成颜色，Tertiary 等

| 参数 | 说明 |
|---|---|
| `hueDelta` | 色相偏移度数 |
| `chroma` | 色度比例 [0.0, 1.0] |
| `tone` | 明度 [0, 100] |


**返回值：** 0xRRGGBB
