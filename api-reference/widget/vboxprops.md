---
title: "VBoxProps"
---

# VBoxProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/vbox.h>`

**命名空间：** `hiyui`

垂直布局容器创建属性

## 公开成员

### padding

```cpp
int padding
```

内边距

### gap

```cpp
int gap
```

子组件间距

### margin

```cpp
int margin
```

外边距，容器在父布局中的外边距

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### align

```cpp
Align align
```

主轴对齐方式，垂直方向

### scroll

```cpp
ScrollMode scroll
```

滚动模式
