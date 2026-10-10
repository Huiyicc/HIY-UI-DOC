---
title: "ProgressProps"
---

# ProgressProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/progress.h>`

**命名空间：** `hiyui`

进度条创建属性

## 公开成员

### type

```cpp
ProgressType type
```

形态

### value

```cpp
int value
```

当前值 [0,100]

### width

```cpp
int width
```

Line: 宽度 / Circle,Dashboard: 外径

### height

```cpp
int height
```

Line: 高度 (Circle 忽略)

### strokeWidth

```cpp
int strokeWidth
```

环形/仪表盘弧线宽度

### startAngle

```cpp
int startAngle
```

环形起始角度，顺时针，0=右侧水平

### gapAngle

```cpp
int gapAngle
```

仪表盘缺口角度

### rounded

```cpp
bool rounded
```

圆角端点

### showText

```cpp
bool showText
```

显示百分比

### customText

```cpp
const char * customText
```

自定义中心文字

### trackColor

```cpp
uint32_t trackColor
```

轨道色

### activeColor

```cpp
uint32_t activeColor
```

激活色，跟随 Primary

### gradientEndColor

```cpp
uint32_t gradientEndColor
```

渐变终止色

### textColor

```cpp
uint32_t textColor
```

文字颜色

### segments

```cpp
const ProgressSegment * segments
```

分段定义

### segmentCount

```cpp
int segmentCount
```

分段数量

### animated

```cpp
bool animated
```

值变过渡动画

### small

```cpp
bool small
```

小型模式

### stepCount

```cpp
int stepCount
```

步骤总数 (Steps 模式)

### currentStep

```cpp
int currentStep
```

当前步骤 (Steps 模式, 0-based)
