---
title: "AvatarProps"
---

# AvatarProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/avatar.h>`

**命名空间：** `hiyui`

头像创建属性

## 公开成员

### src

```cpp
const void * src
```

图片源，文件路径或 lv_image_dsc_t*

### text

```cpp
const char * text
```

文字占位，无图片时显示

### size

```cpp
int size
```

头像直径

### circle

```cpp
bool circle
```

是否圆形，false = 使用 radius

### radius

```cpp
int radius
```

非圆形时的圆角半径

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### textColor

```cpp
uint32_t textColor
```

文字颜色

### borderColor

```cpp
uint32_t borderColor
```

边框颜色，HIYUI_NONE = 无边框

### borderWidth

```cpp
int borderWidth
```

边框宽度

### gif

```cpp
bool gif
```

GIF 动画模式
