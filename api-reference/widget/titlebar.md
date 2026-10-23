---
title: "TitleBar"
---

# TitleBar <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/title_bar.h>`

**命名空间：** `hiyui`

窗口标题栏组件

用于无边框窗口，提供可拖拽的标题栏区域和窗口控制按钮。 通常由 `Window` 在无边框模式下自动创建，也可手动构建。



**参见：** `TitleBarProps`


**参见：** `Window`

**继承自：** `hiyui::Container< TitleBar >`

## 公开方法

### TitleBar

```cpp
TitleBar(lv_obj_t *raw)
```

包装已有 LVGL 对象

### TitleBar

```cpp
TitleBar(TitleBarProps props={})
```

通过属性聚合构造

### palette

```cpp
TitleBar & palette(const TitleBarPalette &value) &
```

复制并应用实例配色；可在挂载前调用，失效对象无操作。

### init

```cpp
TitleBar & init(lv_obj_t *parent) &
```

在父对象上创建标题栏

### title

```cpp
TitleBar & title(const char *t) &
```

运行时修改标题文本，UTF-8 编码

### title

```cpp
TitleBar & title(const LocalizedText &text) &
```

绑定随语言更新的标题；普通 title 调用替换此绑定。

### onMinimize

```cpp
TitleBar & onMinimize(F &&f, EventHandle *handle=nullptr) &
```

绑定最小化按钮回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onMaximize

```cpp
TitleBar & onMaximize(F &&f, EventHandle *handle=nullptr) &
```

绑定最大化/还原按钮回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onClose

```cpp
TitleBar & onClose(F &&f, EventHandle *handle=nullptr) &
```

绑定关闭按钮回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onDoubleClick

```cpp
TitleBar & onDoubleClick(F &&f, EventHandle *handle=nullptr) &
```

绑定双击背景回调，双击标题栏非按钮区域时触发，重复绑定追加

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onDragBegin

```cpp
TitleBar & onDragBegin(F &&f, EventHandle *handle=nullptr) &
```

绑定背景按下回调，重复绑定追加。 按下标题栏非按钮区域时触发一次，回调期间左键保持按下，用于发起窗口拖拽。

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### setMaximized

```cpp
TitleBar & setMaximized(bool maximized) &
```

设置窗口最大化状态，切换 Max 按钮在全屏与还原图标之间。
