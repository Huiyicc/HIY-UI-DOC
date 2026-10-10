---
title: "Tree"
---

# Tree <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tree.h>`

**命名空间：** `hiyui`

树形组件

支持勾选、多选、拖拽、异步加载、搜索过滤、 连接线、手风琴模式、自定义图标/字段、右键菜单。

**继承自：** `hiyui::VirtualTableBase< Tree >`

## 事件

### TreeEventType

| 值 | 说明 |
|---|---|
| `Activate` |  |
| `Select` | 节点选中 |
| `Check` | 节点勾选 |
| `Expand` | 节点展开/折叠 |
| `Drop` | 拖拽落点 |

树内部事件类型

### contextMenu

```cpp
Tree & contextMenu(std::vector< ContextMenuItem > items) &
```

设置行菜单并立即复制文本与图片路径；可在初始化前调用，空列表移除菜单。

### eventCode

```cpp
static lv_event_code_t eventCode(TreeEventType type)
```

获取树内部事件码。

## 数据

### appendChildren

```cpp
Tree & appendChildren(TreeNodeId parentId, const std::vector< TreeNodeConfig > &children, Notify notify=Notify::No) &
```

追加子节点，不清空已有子节点，parentId=0 追加为根节点
