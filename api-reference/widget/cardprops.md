---
title: "CardProps"
---

# CardProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/card.h>`

**命名空间：** `hiyui`

卡片创建属性

## 公开成员

### title

```cpp
const char * title
```

卡片标题，nullptr = 无标题

### width

```cpp
int width
```

宽度，HIYUI_AUTO = 自适应

### height

```cpp
int height
```

高度，HIYUI_AUTO = 自适应

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

背景色，HIYUI_DEFAULT = 跟随主题 Surface

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### shadow

```cpp
bool shadow
```

是否显示阴影

### titleColor

```cpp
uint32_t titleColor
```

标题颜色，HIYUI_DEFAULT = 跟随主题

### titleFontSize

```cpp
int titleFontSize
```

标题字体大小，0 = 使用主题默认值
