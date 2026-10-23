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

### nodeContextMenu

```cpp
Tree & nodeContextMenu(std::function< std::vector< ContextMenuItem >(TreeNodeId)> builder) &
```

按右键节点 ID 生成菜单，不改变选择；可在初始化前调用。 与 contextMenu 相互覆盖，菜单 owner 为 Tree；生成期间 `Tree` 被销毁则不打开。

| 参数 | 说明 |
|---|---|
| `builder` | 保存的生成函数；空函数移除菜单，返回空列表取消打开。 返回条目的借用文本及图片路径须保持有效，直到菜单打开时完成复制。 |

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

## 公开方法

### palette

```cpp
Tree & palette(const TreePalette &value) &
```

复制并应用实例配色，保留节点、选择及展开状态；可在挂载前调用，失效对象无操作。
