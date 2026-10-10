---
title: "TreeState"
---

# TreeState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tree.h>`

**命名空间：** `hiyui`

树组件运行时状态，堆分配挂 user_data

## 公开成员

### allNodes

```cpp
std::vector< TreeNodeData > allNodes
```

全量扁平节点

### visibleIndices

```cpp
std::vector< int > visibleIndices
```

可见行索引

### poolRows

```cpp
std::vector< lv_obj_t * > poolRows
```

行对象池

### poolStart

```cpp
int poolStart
```

池首行对应的 visibleIndices 偏移

### lastAnchorSelect

```cpp
int lastAnchorSelect
```

shift 多选锚点

### keyFocusVisibleIdx

```cpp
int keyFocusVisibleIdx
```

键盘焦点行，visibleIndices 索引

### dragIndicator

```cpp
lv_obj_t * dragIndicator
```

拖拽指示线
