---
title: "TreeNodeData"
---

# TreeNodeData <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tree.h>`

**命名空间：** `hiyui`

树组件内部节点数据，扁平存储

## 公开成员

### depth

```cpp
int depth
```

嵌套深度，根=0

### parentIndex

```cpp
int parentIndex
```

父节点在 allNodes 中的索引

### indeterminate

```cpp
bool indeterminate
```

半选状态

### lazyLoaded

```cpp
bool lazyLoaded
```

异步是否已加载完成

### lazyLoading

```cpp
bool lazyLoading
```

正在加载中

### matchesFilter

```cpp
bool matchesFilter
```

搜索过滤匹配

### visible

```cpp
bool visible
```

过滤后是否可见，含祖先链
