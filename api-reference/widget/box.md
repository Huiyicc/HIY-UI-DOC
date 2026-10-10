---
title: "Box"
---

# Box <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/box.h>`

**命名空间：** `hiyui`

无布局纯容器，子组件手动定位

与 VBox/HBox 的 Flex 自动布局不同，Box 内的子组件需要通过 pos() 或 align() 手动指定位置。适用于绝对定位场景。



**参见：** `VBox`


**参见：** `HBox`

**继承自：** `hiyui::Container< Box >`

## 公开方法

### Box

```cpp
Box(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Box

```cpp
Box(BoxProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 容器属性，支持聚合初始化 |

### init

```cpp
Box & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Box & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Box & init(Window &window) &
```

在窗口根内容区创建容器

无边框窗口挂载到标题栏与菜单栏下方的内容区，普通窗口挂载到屏幕。



| 参数 | 说明 |
|---|---|
| `window` | 目标窗口 |


**返回值：** 当前组件

### borderColor

```cpp
Box & borderColor(ThemeRole role) &
```

绑定边框颜色到主题语义角色，主题切换时自动更新
