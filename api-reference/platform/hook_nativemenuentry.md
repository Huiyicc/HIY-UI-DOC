---
title: "hook::NativeMenuEntry"
---

# hook::NativeMenuEntry <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/window_hook.h>`

**命名空间：** `hiyui`

应用级原生菜单项，桌面端平台无关描述

## 公开成员

### text

```cpp
const char * text
```

菜单项文本，UTF-8

### shortcut

```cpp
const char * shortcut
```

右侧快捷键提示，纯展示

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

字体图标码点，0 = 无图标

### iconStyle

```cpp
FontIconStyle iconStyle
```

字体图标轴参数

### accelerator

```cpp
HotkeySpec accelerator
```

快捷键绑定，sdlKey = 0 表示无

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

### action

```cpp
std::function< void()> action
```

点击回调

### children

```cpp
std::vector< NativeMenuEntry > children
```

子菜单项
