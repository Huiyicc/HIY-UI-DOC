---
title: "TitleBarProps"
---

# TitleBarProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/title_bar.h>`

**命名空间：** `hiyui`

标题栏创建属性

## 公开成员

### title

```cpp
const char * title
```

标题文本，UTF-8 编码

### iconSrc

```cpp
const char * iconSrc
```

图标路径，仅 Custom 模式使用

### iconBytes

```cpp
const uint8_t * iconBytes
```

编码图片字节（PNG 等），仅 Bytes 模式；须在标题栏生命周期内有效

### iconByteSize

```cpp
size_t iconByteSize
```

iconBytes 长度，仅 Bytes 模式

### iconMode

```cpp
TitleBarIcon iconMode
```

图标来源，默认自动获取程序自身图标

### iconSize

```cpp
int iconSize
```

图标逻辑尺寸，单位主题逻辑像素

### height

```cpp
int height
```

标题栏高度，单位像素

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

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

### items

```cpp
TitleBarItem items
```

显示的元素，位掩码组合

### layout

```cpp
TitleBarLayout layout
```

控制按钮布局

### btnSize

```cpp
int btnSize
```

窗口控制按钮尺寸，单位像素

### transitionMs

```cpp
int transitionMs
```

按钮悬浮渐变动画时长，单位毫秒

### bottomShadow

```cpp
bool bottomShadow
```

是否显示底部浅阴影
