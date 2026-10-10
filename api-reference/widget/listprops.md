---
title: "ListProps"
---

# ListProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/list.h>`

**命名空间：** `hiyui`

列表创建属性

## 公开成员

### width

```cpp
int width
```

列表宽度

### height

```cpp
int height
```

列表高度，HIYUI_AUTO = 内容自适应

### itemHeight

```cpp
int itemHeight
```

每项高度

### maxHeight

```cpp
int maxHeight
```

最大高度，height=HIYUI_AUTO 时生效

### selectedIndex

```cpp
int selectedIndex
```

初始选中索引，-1 = 无选中

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### hoverBg

```cpp
uint32_t hoverBg
```

悬停背景色，HIYUI_DEFAULT = 自动计算

### selectedBg

```cpp
uint32_t selectedBg
```

选中项背景色，HIYUI_DEFAULT = 跟随主题 Primary

### textColor

```cpp
uint32_t textColor
```

文字颜色，HIYUI_DEFAULT = 跟随主题

### selectedTextColor

```cpp
uint32_t selectedTextColor
```

选中项文字色，HIYUI_DEFAULT = 白色

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### padding

```cpp
int padding
```

内边距
