---
title: "HBox"
---

# HBox <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/hbox.h>`

**命名空间：** `hiyui`

水平布局容器，子组件从左到右排列

内部使用 LVGL Flex Row 布局。



**参见：** `HBoxProps`


**参见：** `VBox`

**继承自：** `hiyui::Container< HBox >`

## 公开方法

### HBox

```cpp
HBox(lv_obj_t *raw)
```

包装已有 LVGL 对象

### HBox

```cpp
HBox(HBoxProps props={})
```

通过属性聚合构造

### init

```cpp
HBox & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL Flex Row 容器

使用构造时保存的布局属性。

### init

```cpp
HBox & init(lv_obj_t *parent, const HBoxProps &props) &
```

在父对象上创建 LVGL Flex Row 容器

### init

```cpp
HBox & init(Widget &parent) &
```

在父对象上创建 LVGL Flex Row 容器

使用构造时保存的布局属性。

### init

```cpp
HBox & init(Widget &parent, const HBoxProps &props) &
```

在父对象上创建 LVGL Flex Row 容器

### init

```cpp
HBox & init(Window &window) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。

### init

```cpp
HBox & init(Window &window, const HBoxProps &props) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。
