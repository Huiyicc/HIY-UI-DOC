---
title: "Tree"
---

# Tree <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree widget

Supports checkboxes, multi-select, drag and drop, async loading, search filtering, connect lines, accordion mode, custom icons and fields, and context menus.

**Inherits:** `hiyui::VirtualTableBase< Tree >`

## 事件

### TreeEventType

| Value | Description |
|---|---|
| `Activate` |  |
| `Select` | Node selected |
| `Check` | Node checked |
| `Expand` | Node expanded or collapsed |
| `Drop` | Drag drop position |

Tree internal event types

### contextMenu

```cpp
Tree & contextMenu(std::vector< ContextMenuItem > items) &
```

Sets the row context menu and immediately copies text and image paths. Can be called before init. An empty list removes the menu.

### nodeContextMenu

```cpp
Tree & nodeContextMenu(std::function< std::vector< ContextMenuItem >(TreeNodeId)> builder) &
```

按右键节点 ID 生成菜单，不改变选择；可在初始化前调用。 与 contextMenu 相互覆盖，菜单 owner 为 Tree；生成期间 `Tree` 被销毁则不打开。

| Parameter | Description |
|---|---|
| `builder` | 保存的生成函数；空函数移除菜单，返回空列表取消打开。 返回条目的借用文本及图片路径须保持有效，直到菜单打开时完成复制。 |

### eventCode

```cpp
static lv_event_code_t eventCode(TreeEventType type)
```

Gets the tree internal event code.

## 数据

### appendChildren

```cpp
Tree & appendChildren(TreeNodeId parentId, const std::vector< TreeNodeConfig > &children, Notify notify=Notify::No) &
```

Appends child nodes without clearing existing children. parentId=0 appends as root nodes

## Public Methods

### palette

```cpp
Tree & palette(const TreePalette &value) &
```

Copies and applies the palette, preserving nodes, selection and expansion; may be called before mounting, no action on invalid objects.
