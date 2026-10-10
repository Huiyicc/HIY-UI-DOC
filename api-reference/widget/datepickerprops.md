---
title: "DatePickerProps"
---

# DatePickerProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/date_picker.h>`

**命名空间：** `hiyui`

日期选择器创建属性

## 公开成员

### picker

```cpp
DatePickerType picker
```

选择器类型

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

### format

```cpp
const char * format
```

自定义格式串

### placeholder

```cpp
const char * placeholder
```

占位文本

### enabled

```cpp
bool enabled
```

允许用户交互

### range

```cpp
bool range
```

范围选择模式

### showTime

```cpp
bool showTime
```

显示时间选择

### timeFormat

```cpp
const char * timeFormat
```

时间格式串，如 "HH:mm:ss"

### size

```cpp
DatePickerSize size
```

尺寸

### status

```cpp
DatePickerStatus status
```

状态

### placement

```cpp
DatePickerPlacement placement
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

后缀图标码点，0=默认日历图标

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
