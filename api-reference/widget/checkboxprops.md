---
title: "CheckboxProps"
---

# CheckboxProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/checkbox.h>`

**命名空间：** `hiyui`

复选框创建属性

## 公开成员

### text

```cpp
const char * text
```

标签文本，UTF-8 编码

### checked

```cpp
bool checked
```

初始选中状态

### width

```cpp
int width
```

宽度，HIYUI_AUTO = 自适应内容

### checkedColor

```cpp
uint32_t checkedColor
```

选中时勾选框颜色，HIYUI_DEFAULT = 跟随主题 Primary

### textColor

```cpp
uint32_t textColor
```

文字颜色，HIYUI_DEFAULT = 跟随主题

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### indicatorSide

```cpp
IndicatorSide indicatorSide
```

指示器位置，默认左侧

### textAlign

```cpp
TextAlign textAlign
```

文字对齐方式，默认左对齐
