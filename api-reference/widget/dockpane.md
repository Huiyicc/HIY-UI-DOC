---
title: "DockPane"
---

# DockPane <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

停靠面板，容纳用户内容。

operator() 可在挂载前配置内容，并将面板右值交给 Dock::operator() 随容器挂载。 已挂载面板通过 `Dock::addPane()` 进入布局。 面板可反复 addPane / removePane；removePane 后内容对象保留在 `Dock` 下并 隐藏，再次 addPane 时恢复显示。

**继承自：** `hiyui::Container< DockPane >`

## 公开方法

### DockPane

```cpp
DockPane(DockPaneProps props={})
```

通过属性聚合构造。

### DockPane

```cpp
DockPane(lv_obj_t *raw)
```

包装由 `DockPane` 创建的已有 LVGL 对象。

### init

```cpp
DockPane & init(lv_obj_t *parent) &
```

在父对象上创建面板内容容器。

### init

```cpp
DockPane & init(Widget &parent) &
```

在父对象上创建面板内容容器。

### props

```cpp
const DockPaneProps & props() const
```

未注册时读取构造属性。

### title

```cpp
DockPane & title(const char *text) &
```

设置标题，调用期间复制文本。

**返回值：** 当前组件；未注册时仅更新待提交属性。

### closable

```cpp
DockPane & closable(bool value) &
```

设置是否允许关闭。

### movable

```cpp
DockPane & movable(bool value) &
```

设置是否允许拖拽移动。

### floatable

```cpp
DockPane & floatable(bool value) &
```

设置是否允许拖出浮动。

### name

```cpp
const char * name() const
```

获取面板唯一名，未注册时返回构造属性值。

### isFloating

```cpp
bool isFloating() const
```

查询是否处于浮动状态；未注册返回 false。

### isShown

```cpp
bool isShown() const
```

查询是否处于显示状态；未注册返回 true。
