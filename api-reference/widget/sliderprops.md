---
title: "SliderProps"
---

# SliderProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/slider.h>`

**命名空间：** `hiyui`

滑块创建属性

## 公开成员

### value

```cpp
int value
```

初始值

### min

```cpp
int min
```

最小值

### max

```cpp
int max
```

最大值

### width

```cpp
int width
```

滑块轨道宽度

### height

```cpp
int height
```

滑块轨道高度

### activeColor

```cpp
uint32_t activeColor
```

已填充区域颜色，HIYUI_DEFAULT = 跟随主题 Primary

### trackColor

```cpp
uint32_t trackColor
```

轨道背景色，HIYUI_DEFAULT = 跟随主题

### knobColor

```cpp
uint32_t knobColor
```

滑块手柄颜色，HIYUI_DEFAULT = 主题适配，亮主题白、暗主题浅灰

### knobSize

```cpp
int knobSize
```

滑块手柄直径
