---
title: "MenuBar"
---

# MenuBar <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/menu_bar.h>`

**命名空间：** `hiyui`

顶部菜单栏

横向排列顶级项，点击弹出下拉（复用 `ContextMenu` 弹出引擎）。 叶菜单项的 accelerator 在 `items()` 时注册到 HotkeyManager，重建或析构时注销。

**继承自：** `hiyui::Chainable< MenuBar >`

## 公开方法

### MenuBar

```cpp
MenuBar(lv_obj_t *raw)
```

包装已有 LVGL 对象

### MenuBar

```cpp
MenuBar(MenuBarProps props={})
```

通过属性聚合构造

### init

```cpp
MenuBar & init(lv_obj_t *parent) &
```

在父对象上创建

### init

```cpp
MenuBar & init(Widget &parent) &
```

在父对象上创建

### items

```cpp
MenuBar & items(const std::vector< MenuBarItem > &items) &
```

设置顶级菜单项，重建整棵树

| 参数 | 说明 |
|---|---|
| `items` | 每项 children 为下拉内容 |
