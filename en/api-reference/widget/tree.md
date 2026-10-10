---
title: "Tree"
---

# Tree <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree widget

Supports checking, multi-selection, dragging, asynchronous loading, search filtering, connect lines, accordion mode, custom icons and fields, and the context menu.

**Inherits:** `hiyui::VirtualTableBase< Tree >`

## 事件

### TreeEventType

| Value | Description |
|---|---|
| `Activate` |  |
| `Select` | Node selected |
| `Check` | Node checked |
| `Expand` | Node expanded or collapsed |
| `Drop` | Drag drop |

Internal tree event types

### contextMenu

```cpp
Tree & contextMenu(std::vector< ContextMenuItem > items) &
```

Set the row menu and copy text and image paths immediately. Can be called before initialization. An empty list removes the menu.

### eventCode

```cpp
static lv_event_code_t eventCode(TreeEventType type)
```

Get the internal tree event code.

## 数据

### appendChildren

```cpp
Tree & appendChildren(TreeNodeId parentId, const std::vector< TreeNodeConfig > &children, Notify notify=Notify::No) &
```

Append child nodes without clearing existing ones. parentId=0 appends as root nodes
