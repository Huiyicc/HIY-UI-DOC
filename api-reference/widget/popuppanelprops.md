---
title: "PopupPanelProps"
---

# PopupPanelProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/popup_panel.h>`

**命名空间：** `hiyui`

浮层面板创建属性

## 公开成员

### placement

```cpp
PopupPlacement placement
```

定位方式

### width

```cpp
int width
```

宽度，HIYUI_AUTO = 与锚点同宽

### height

```cpp
int height
```

高度，HIYUI_AUTO = 内容自适应

### minWidth

```cpp
int minWidth
```

最小宽度，0 = 不限制

### maxWidth

```cpp
int maxWidth
```

最大宽度，单位主题逻辑像素

### maxHeight

```cpp
int maxHeight
```

最大高度，单位主题逻辑像素

### offsetX

```cpp
int offsetX
```

水平偏移，单位主题逻辑像素

### offsetY

```cpp
int offsetY
```

垂直偏移，单位主题逻辑像素

### padding

```cpp
int padding
```

内边距，单位主题逻辑像素

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### borderColor

```cpp
uint32_t borderColor
```

边框颜色，HIYUI_DEFAULT = 跟随主题

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

### closeOnOutsideClick

```cpp
bool closeOnOutsideClick
```

点击外部是否关闭

### closeOnEsc

```cpp
bool closeOnEsc
```

按 ESC 是否关闭

### closeOnAncestorScroll

```cpp
bool closeOnAncestorScroll
```

祖先滚动时是否关闭

### animated

```cpp
bool animated
```

是否启用展开动画

### mode

```cpp
PopupMode mode
```

`Window` 在无窗口管理器或关闭外击关闭时使用 Inline。
