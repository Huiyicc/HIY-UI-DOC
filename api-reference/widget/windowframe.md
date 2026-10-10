---
title: "WindowFrame"
---

# WindowFrame <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

管理 Header、Navigation 和 Content 区域的响应式窗口框架。

每种区域最多挂载一个直接子对象。宽度级别变化时保留区域对象及其子树， 仅更新区域的布局呈现。

**继承自：** `hiyui::Container< WindowFrame >`

## 公开方法

### WindowFrame

```cpp
WindowFrame(lv_obj_t *raw)
```

包装已有窗口框架对象。

### init

```cpp
WindowFrame & init(lv_obj_t *parent) &
```

在父组件中创建窗口框架。

### init

```cpp
WindowFrame & init(lv_obj_t *parent, const WindowFrameProps &props) &
```

使用指定属性在父组件中创建窗口框架。

### init

```cpp
WindowFrame & init(Widget &parent) &
```

在父组件中创建窗口框架。

### init

```cpp
WindowFrame & init(Widget &parent, const WindowFrameProps &props) &
```

使用指定属性在父组件中创建窗口框架。

### init

```cpp
WindowFrame & init(Window &window) &
```

在窗口根内容区创建窗口框架

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。

### init

```cpp
WindowFrame & init(Window &window, const WindowFrameProps &props) &
```

在窗口根内容区创建窗口框架

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。

### widthClass

```cpp
LayoutWidthClass widthClass() const
```

获取当前宽度级别。

### openNavigation

```cpp
WindowFrame & openNavigation() &
```

打开当前 Drawer 导航，其他呈现方式下不改变状态。

### closeNavigation

```cpp
WindowFrame & closeNavigation() &
```

关闭当前 Drawer 导航，其他呈现方式下不改变状态。

### toggleNavigation

```cpp
WindowFrame & toggleNavigation() &
```

切换当前 Drawer 导航，其他呈现方式下不改变状态。

### navigationOpen

```cpp
bool navigationOpen() const
```

查询 Drawer 导航是否打开或正在打开，其他呈现方式返回 false。
