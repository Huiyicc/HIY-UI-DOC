---
title: "PopupPanel"
---

# PopupPanel <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/popup_panel.h>`

**命名空间：** `hiyui`

浮层面板组件

`open()` 时传入锚点与内容构造回调， 自动处理定位、外击关闭、ESC 关闭、祖先滚动关闭与展开动画。


`PopupPanel` 独立管理 LVGL 对象生命周期，不继承 Widget。



**参见：** `PopupPanelProps`

## 类型定义

### Builder

```cpp
using hiyui::PopupPanel::Builder = std::function<void(Widget &)>
```

内容构造回调，参数为面板内容容器

## 公开方法

### PopupPanel

```cpp
PopupPanel(PopupPanelProps props={})
```

通过属性聚合构造

### open

```cpp
PopupPanel & open(Widget &anchor, Builder builder)
```

打开浮层

### open

```cpp
PopupPanel & open(Widget &anchor, F &&builder)
```

同步构建浮层内容，回调可持有仅可移动的资源，返回后不保留构造回调。

### close

```cpp
PopupPanel & close()
```

关闭浮层

### isOpen

```cpp
bool isOpen() const
```

查询浮层是否处于打开状态

### raw

```cpp
lv_obj_t * raw() const
```

获取面板底层 LVGL 对象

**返回值：** 面板对象指针，未打开时返回 nullptr

### onClose

```cpp
PopupPanel & onClose(CloseCallback cb)
```

替换关闭回调

### onClose

```cpp
PopupPanel & onClose(F &&cb)
```

替换关闭回调并持有其资源，允许回调中再次打开或销毁面板。
