---
title: "Color"
---

# Color <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/draw/color.h>`

**命名空间：** `hiyui`

RGB 颜色值封装，支持编译期构造与通道操作

内部以 0xRRGGBB 格式存储为 uint32_t。 提供 darken / lighten 静态方法用于编译期颜色计算。



**参见：** `RGBA`

## 公开成员

### value

```cpp
uint32_t value
```

RGB 颜色值，0xRRGGBB 格式

## 公开方法

### Color

```cpp
constexpr Color()=default
```

默认构造，颜色为黑色 (0x000000)

### Color

```cpp
constexpr Color(uint32_t hex)
```

从十六进制值构造

| 参数 | 说明 |
|---|---|
| `hex` | 0xRRGGBB 格式颜色值 |

## 静态方法

### darken

```cpp
static Color darken(Color c, int percent)
```

将颜色加深指定百分比

对 RGB 各通道乘以 (100 - percent) / 100。



| 参数 | 说明 |
|---|---|
| `percent` | 加深百分比 [0, 100]，0 = 不变，100 = 全黑 |


**参见：** `lighten()`

### lighten

```cpp
static Color lighten(Color c, int percent)
```

将颜色减淡指定百分比

对 RGB 各通道向 255 方向插值 percent。



| 参数 | 说明 |
|---|---|
| `percent` | 减淡百分比 [0, 100]，0 = 不变，100 = 全白 |


**参见：** `darken()`
