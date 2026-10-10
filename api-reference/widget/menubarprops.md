---
title: "MenuBarProps"
---

# MenuBarProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu_bar.h>`

**命名空间：** `hiyui`

菜单栏创建属性

## 公开成员

### height

```cpp
int height
```

栏高度，单位主题逻辑像素

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### textColor

```cpp
uint32_t textColor
```

文字色，HIYUI_DEFAULT = 跟随主题

### hoverColor

```cpp
uint32_t hoverColor
```

顶级项 hover 高亮色

### activeColor

```cpp
uint32_t activeColor
```

下拉打开时顶级项高亮色

### fontSize

```cpp
int fontSize
```

字号，0 = 主题默认

### itemPaddingX

```cpp
int itemPaddingX
```

顶级项水平内边距

### popupMode

```cpp
PopupMode popupMode
```

下拉弹出模式
