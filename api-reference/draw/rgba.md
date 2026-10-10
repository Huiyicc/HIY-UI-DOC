---
title: "RGBA"
---

# RGBA <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/draw/color.h>`

**命名空间：** `hiyui`

带 Alpha 通道的颜色类型，用于样式属性中的颜色字段

内部存储 RGB (uint32_t) 和 Alpha (uint8_t) 两部分。 支持从 uint32_t 隐式构造。 rgb_ == 0xFFFFFFFF 表示"未设置"，HIYUI_NONE 语义。



**参见：** `Color`


**参见：** `rgba()`

## 公开成员

### rgb_

```cpp
uint32_t rgb_
```

RGB 颜色值，0xFFFFFFFF = 未设置 (HIYUI_NONE)

### alpha_

```cpp
uint8_t alpha_
```

Alpha 通道 [0, 255]，255 = 完全不透明

### hasAlpha_

```cpp
bool hasAlpha_
```

是否显式指定了 Alpha 值

## 公开方法

### RGBA

```cpp
constexpr RGBA()=default
```

默认构造，rgb_ 为 HIYUI_NONE，未设置

### RGBA

```cpp
constexpr RGBA(uint32_t hex)
```

从十六进制值隐式构造，不含 Alpha

| 参数 | 说明 |
|---|---|
| `hex` | 0xRRGGBB 格式颜色值 |

### RGBA

```cpp
constexpr RGBA(uint32_t hex, uint8_t a)
```

从十六进制值和 Alpha 构造

| 参数 | 说明 |
|---|---|
| `hex` | 0xRRGGBB 格式颜色值 |

### hasAlpha

```cpp
bool hasAlpha() const
```

是否显式设置了 Alpha

**返回值：** 通过双参数构造或 `rgba()` 创建时为 true
