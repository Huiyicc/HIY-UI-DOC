---
title: "WindowProps"
---

# WindowProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/window.h>`

**命名空间：** `hiyui`

窗口创建属性

纯 POD 结构体，所有字段均有默认值，支持 C++20 聚合初始化。 通过 Application::createWindow(WindowProps) 使用。

## 公开成员

### title

```cpp
const char * title
```

窗口标题，UTF-8 编码

### width

```cpp
int width
```

窗口宽度，单位像素

### height

```cpp
int height
```

内容区高度，单位像素；borderless 时标题栏与菜单栏在此基础上叠加

### borderless

```cpp
bool borderless
```

是否无边框模式

### resizable

```cpp
bool resizable
```

是否允许用户拖拽调整大小

### shadow

```cpp
bool shadow
```

是否启用窗口阴影，仅无边框模式生效

### x

```cpp
int x
```

窗口 X 坐标，-1 = 居中

### y

```cpp
int y
```

窗口 Y 坐标，-1 = 居中

### titleBar

```cpp
TitleBarProps titleBar
```

标题栏属性，仅无边框模式生效

### enterAnimation

```cpp
WindowAnimation enterAnimation
```

入场动画

### exitAnimation

```cpp
WindowAnimation exitAnimation
```

退场动画

### menuBar

```cpp
MenuBarProps menuBar
```

应用菜单栏样式，仅 borderless 桌面端生效，由 menu() 安装菜单时使用

### initiallyHidden

```cpp
bool initiallyHidden
```

桌面端创建及挂载后保持隐藏，直到显式调用 show；其他平台忽略。

### background

```cpp
WindowBackground background
```

窗口背景，覆盖标题栏和内容区。
