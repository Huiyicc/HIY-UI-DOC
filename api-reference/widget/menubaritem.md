---
title: "MenuBarItem"
---

# MenuBarItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu_bar.h>`

**命名空间：** `hiyui`

顶级菜单项，children 为下拉内容

## 公开成员

### text

```cpp
const char * text
```

顶级项文本

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

顶级项图标码点，0 = 无图标

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式

### disabled

```cpp
bool disabled
```

禁用，点击不弹出下拉

### children

```cpp
std::vector< ContextMenuItem > children
```

下拉菜单项

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

设置后覆盖原文本，并随语言切换更新；描述在传入组件时复制。
