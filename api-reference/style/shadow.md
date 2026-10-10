---
title: "Shadow"
---

# Shadow <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style.h>`

**命名空间：** `hiyui`

阴影效果配置

所有值为 0 时阴影不生效。

## 公开成员

### x

```cpp
int x
```

水平偏移，正值向右

### y

```cpp
int y
```

垂直偏移，正值向下

### blur

```cpp
int blur
```

模糊半径，值越大越模糊

### color

```cpp
RGBA color
```

阴影颜色，HIYUI_NONE = 跟随主题

### opacity

```cpp
int opacity
```

阴影透明度 [0,255]，HIYUI_NONE_INT = 不设置，0 = 不显示

### sides

```cpp
ShadowSide sides
```

生效边缘，可使用位或组合

### placement

```cpp
ShadowPlacement placement
```

阴影位置
