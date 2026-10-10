---
title: "ContextMenuItem"
---

# ContextMenuItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/context_menu.h>`

**命名空间：** `hiyui`

菜单项定义

通过 std::vector 传递给 `ContextMenu::show()` 或 `Widget::contextMenu()`。 text/shortcut 借用调用方字符串，children/action/accelerator 由本结构拥有。

## 公开成员

### text

```cpp
const char * text
```

菜单项文本

### shortcut

```cpp
const char * shortcut
```

右侧提示，nullptr 时从 accelerator 生成

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

字体图标码点，非零覆盖 iconSrc

### iconSrc

```cpp
const void * iconSrc
```

图片源，文件路径或 lv_image_dsc_t*

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式

### separator

```cpp
bool separator
```

分隔线，忽略其他字段

### disabled

```cpp
bool disabled
```

禁用态

### children

```cpp
std::vector< ContextMenuItem > children
```

子菜单项

### action

```cpp
std::function< void(MenuContext &)> action
```

点击回调，owner 上下文见 `MenuContext`

### accelerator

```cpp
HotkeySpec accelerator
```

快捷键绑定，sdlKey=0 表示无

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

存在时覆盖 text，拥有文案并随语言更新。
