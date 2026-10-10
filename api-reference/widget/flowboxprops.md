---
title: "FlowBoxProps"
---

# FlowBoxProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/flowbox.h>`

**命名空间：** `hiyui`

自动换行布局容器创建属性

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

主轴对齐，行内水平方向

### crossAlign

```cpp
Align crossAlign
```

交叉轴对齐，行间垂直方向

### minChildWidth

```cpp
int minChildWidth
```

子元素最小宽度，0 = 不限制

### maxChildWidth

```cpp
int maxChildWidth
```

子元素最大宽度，0 = 不限制

### childGrow

```cpp
bool childGrow
```

子元素是否 flex-grow 填充行内剩余空间

### scroll

```cpp
ScrollMode scroll
```

滚动模式
