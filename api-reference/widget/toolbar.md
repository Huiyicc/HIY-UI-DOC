---
title: "ToolBar"
---

# ToolBar <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tool_bar.h>`

**命名空间：** `hiyui`

工具条容器，支持原地挂载、声明式子树、溢出菜单及嵌入控件。 子控件由工具条管理，溢出不销毁原控件。动态排序使用 moveItem。 UI 线程调用；挂载前的配置与事件绑定在 init 时应用，销毁后的操作无效。 未挂载或已销毁对象的查询返回默认值。

**继承自：** `hiyui::Container< ToolBar >`

## 公开方法

### buttonSize

```cpp
ToolBar & buttonSize(int value) &
```

设置按钮最小命中尺寸，单位逻辑像素，正值有效，触摸界面可使用 44。

### append

```cpp
ToolBar & append(Widget &item) &
```

将已挂载控件追加到工具条，移动其父子关系；重复追加不改变顺序。

### moveItem

```cpp
bool moveItem(Widget &item, int index)
```

将顶层项目移到指定索引，范围为 [0,itemCount)，无效参数返回 false。

### removeItem

```cpp
bool removeItem(Widget &item)
```

删除顶层项目及其子树；非本工具条项目返回 false。

### itemAt

```cpp
Ref< Widget > itemAt(int index) const
```

获取顶层项目的非拥有引用；越界返回空引用，索引包含分隔线。

### refresh

```cpp
ToolBar & refresh() &
```

同步刷新尺寸与溢出分配，布局事件也会自动刷新。
