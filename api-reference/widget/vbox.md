---
title: "VBox"
---

# VBox <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/vbox.h>`

**命名空间：** `hiyui`

垂直布局容器，子组件从上到下排列

在 operator() 被调用前，VBox 自身需要先被挂载到父对象。



**参见：** `VBoxProps`


**参见：** `HBox`

**继承自：** `hiyui::Container< VBox >`

## 公开方法

### VBox

```cpp
VBox(lv_obj_t *raw)
```

包装已有 LVGL 对象

### VBox

```cpp
VBox(VBoxProps props={})
```

通过属性聚合构造

### init

```cpp
VBox & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL Flex Column 容器，使用构造时保存的布局属性

### init

```cpp
VBox & init(lv_obj_t *parent, const VBoxProps &props) &
```

在父对象上创建 LVGL Flex Column 容器

### init

```cpp
VBox & init(Widget &parent) &
```

在父对象上创建 LVGL Flex Column 容器，使用构造时保存的布局属性

### init

```cpp
VBox & init(Widget &parent, const VBoxProps &props) &
```

在父对象上创建 LVGL Flex Column 容器

### init

```cpp
VBox & init(Window &window) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。

### init

```cpp
VBox & init(Window &window, const VBoxProps &props) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。
