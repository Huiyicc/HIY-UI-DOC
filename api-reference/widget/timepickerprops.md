---
title: "TimePickerProps"
---

# TimePickerProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/time_picker.h>`

**命名空间：** `hiyui`

时间选择器创建属性

## 公开成员

### width

```cpp
int width
```

输入框宽度

### height

```cpp
int height
```

输入框高度

### borderless

```cpp
bool borderless
```

无边框模式

### enabled

```cpp
bool enabled
```

允许用户交互

### format

```cpp
const char * format
```

格式串，如 "HH:mm:ss" "h:mm:ss a" "HH:mm"

### placeholder

```cpp
const char * placeholder
```

占位文本

### range

```cpp
bool range
```

范围选择模式

### hourStep

```cpp
int hourStep
```

小时步长

### minuteStep

```cpp
int minuteStep
```

分钟步长

### secondStep

```cpp
int secondStep
```

秒步长

### size

```cpp
TimePickerSize size
```

尺寸

### status

```cpp
TimePickerStatus status
```

状态

### placement

```cpp
TimePickerPlacement placement
```

弹出位置

### presentation

```cpp
PickerPresentation presentation
```

面板呈现方式，BottomSheet 模式忽略 placement

### suffixIcon

```cpp
uint32_t suffixIcon
```

后缀图标码点

### bg

```cpp
uint32_t bg
```

背景色

### textColor

```cpp
uint32_t textColor
```

文字颜色

### radius

```cpp
uint32_t radius
```

圆角
