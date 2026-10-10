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
