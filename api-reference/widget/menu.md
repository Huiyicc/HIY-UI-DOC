---
title: "Menu"
---

# Menu <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/menu.h>`

**命名空间：** `hiyui`

菜单/导航列表组件

支持多层嵌套子菜单、手风琴展开/折叠、滑动选中指示器动画。

**继承自：** `hiyui::Chainable< Menu >`

## 类型定义

### MenuEventType

菜单内部事件类型

| 值 | 说明 |
|---|---|
| `Activate` | 选中叶节点 |
| `Expand` | 节点展开/折叠 |
| `Collapse` | 整体折叠/展开 |

## 公开方法

### itemText

```cpp
Menu & itemText(int index, const char *value) &
```

更新指定项的文案，不触发选中事件；越界不操作，nullptr 显示空文案。 index 是含父项和分隔线的前序节点索引，分隔线更新已有分组标签。替换整个集合时清除绑定。

### itemText

```cpp
Menu & itemText(int index, LocalizedText value) &
```

绑定条目文案，切换语言时保留集合内容和选中状态。

### Menu

```cpp
Menu(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Menu

```cpp
Menu(MenuProps props={})
```

通过属性聚合构造

### init

```cpp
Menu & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
Menu & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

### items

```cpp
Menu & items(const std::vector< MenuItem > &menuItems, Notify notify=Notify::No) &
```

批量设置菜单项，重建整棵树

| 参数 | 说明 |
|---|---|
| `menuItems` | 支持递归子菜单 |

### selectedIndex

```cpp
Menu & selectedIndex(int leafIdx, Notify notify=Notify::No) &
```

设置选中叶节点

### selectedIndex

```cpp
int selectedIndex() const
```

获取当前选中叶节点索引

### itemData

```cpp
int itemData(int leafIdx) const
```

获取指定叶节点的用户绑定数据。

| 参数 | 说明 |
|---|---|
| `leafIdx` | 叶节点索引，与 onActivate 回调索引一致。 |


**返回值：** 项的 data 值；索引越界返回 0。

### expandItem

```cpp
Menu & expandItem(int nodeIdx, bool expanded=true) &
```

展开/折叠指定父节点

| 参数 | 说明 |
|---|---|
| `nodeIdx` | 节点在 nodes 数组中的索引 |

### collapseAll

```cpp
Menu & collapseAll() &
```

折叠所有展开的父节点

### onChange

```cpp
Menu & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定选择事件回调，重复绑定追加

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(int) |

| 参数 | 说明 |
|---|---|
| `f` | 参数为选中叶节点索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onExpand

```cpp
Menu & onExpand(F &&f, EventHandle *handle=nullptr) &
```

绑定展开/折叠事件回调，重复绑定追加

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(int nodeIdx, bool expanded) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onCollapse

```cpp
Menu & onCollapse(F &&f, EventHandle *handle=nullptr) &
```

绑定折叠/展开事件回调，重复绑定追加

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(bool collapsed) |

| 参数 | 说明 |
|---|---|
| `f` | 参数为是否已折叠 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### collapsed

```cpp
Menu & collapsed(bool collapsed) &
```

切换折叠状态，带动画

| 参数 | 说明 |
|---|---|
| `collapsed` | true = 折叠为窄模式, false = 展开为宽模式 |

### isCollapsed

```cpp
bool isCollapsed() const
```

查询当前是否处于折叠，窄模式

### mode

```cpp
Menu & mode(MenuMode m) &
```

直接设置显示模式，带动画

### mode

```cpp
MenuMode mode() const
```

查询当前显示模式

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(MenuEventType type)
```

获取菜单内部事件码。

### updateSelection

```cpp
static void updateSelection(MenuState *st, int leafIdx)
```

更新选中项高亮

### toggleExpand

```cpp
static void toggleExpand(MenuState *st, int nodeIdx, bool animate)
```

展开/折叠节点

### applyHover

```cpp
static void applyHover(MenuState *st, int nodeIdx, bool hovered)
```

应用/移除 hover 高亮

### computeAbsoluteY

```cpp
static int computeAbsoluteY(lv_obj_t *itemRow, lv_obj_t *menuContainer)
```

计算节点相对于菜单容器的绝对 Y 坐标

### reapplyThemeStatic

```cpp
static void reapplyThemeStatic(lv_obj_t *obj)
```

静态主题刷新，不依赖 this，从 `MenuState` 获取数据

### reapplyForDpi

```cpp
static void reapplyForDpi(lv_obj_t *obj)
```

DPI 变更重算，重算缓存物理值 + 重渲染图标 + 重定位指示器

### correctAfterLayout

```cpp
static void correctAfterLayout(MenuState *st)
```

主题/尺寸变化后的几何校正

### applyMode

```cpp
static void applyMode(MenuState *st, MenuMode newMode, bool animate)
```

应用显示模式切换，宽/窄

### showHoverPopup

```cpp
static void showHoverPopup(MenuState *st, int nodeIdx)
```

显示窄模式悬停弹出面板

### hideHoverPopup

```cpp
static void hideHoverPopup(MenuState *st)
```

隐藏窄模式悬停弹出面板
