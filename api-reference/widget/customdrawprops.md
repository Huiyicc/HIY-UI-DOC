---
title: "CustomDrawProps"
---

# CustomDrawProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/custom_draw.h>`

**命名空间：** `hiyui`

`CustomDraw` 创建属性

## 公开成员

### width

```cpp
int width
```

宽，HIYUI_AUTO 由布局决定

### height

```cpp
int height
```

高，HIYUI_AUTO 由布局决定

### fps

```cpp
int fps
```

0 = 静态；&gt;0 = 动画帧率

### transparentBg

```cpp
bool transparentBg
```

是否透明背景

### type

```cpp
WidgetType type
```

关联组件类型；非 Base 时走对应主题 StyleSet，默认自绘背景由 `Painter` 控制
