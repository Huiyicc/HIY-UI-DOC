---
title: "MenuItem"
---

# MenuItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu.h>`

**命名空间：** `hiyui`

菜单项配置，支持递归子菜单

## 公开成员

### text

```cpp
const char * text
```

菜单文本

### iconSrc

```cpp
const void * iconSrc
```

图标源，文件路径或 lv_image_dsc_t*

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols 码点；非零时覆盖 iconSrc

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式，fill/weight/grade/opticalSize

### separator

```cpp
bool separator
```

是否为分隔线

### groupTag

```cpp
const char * groupTag
```

分隔线上方的分组标签，仅 separator=true 时有效

### expanded

```cpp
bool expanded
```

初始展开状态，仅父项有效

### data

```cpp
int data
```

用户绑定数据，由 itemData() 读取

### children

```cpp
std::vector< MenuItem > children
```

子菜单项，非空则为可展开父项
