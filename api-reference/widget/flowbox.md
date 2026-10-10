---
title: "FlowBox"
---

# FlowBox <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/flowbox.h>`

**命名空间：** `hiyui`

自动换行布局容器

使用 LVGL Flex Row Wrap 布局，并支持子元素宽度约束。



**参见：** `FlowBoxProps`


**参见：** `VBox`


**参见：** `HBox`

**继承自：** `hiyui::Container< FlowBox >`

## 公开方法

### FlowBox

```cpp
FlowBox(lv_obj_t *raw)
```

包装已有 LVGL 对象

### FlowBox

```cpp
FlowBox(FlowBoxProps props={})
```

通过属性聚合构造

### init

```cpp
FlowBox & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL Flex Row Wrap 容器

使用构造时保存的布局属性。

### init

```cpp
FlowBox & init(lv_obj_t *parent, const FlowBoxProps &props) &
```

在父对象上创建 LVGL Flex Row Wrap 容器

### init

```cpp
FlowBox & init(Widget &parent) &
```

在父对象上创建 LVGL Flex Row Wrap 容器

使用构造时保存的布局属性。

### init

```cpp
FlowBox & init(Widget &parent, const FlowBoxProps &props) &
```

在父对象上创建 LVGL Flex Row Wrap 容器

### init

```cpp
FlowBox & init(Window &window) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。

### init

```cpp
FlowBox & init(Window &window, const FlowBoxProps &props) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。
