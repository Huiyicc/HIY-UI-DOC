---
title: "DockLayoutSnapshot::Node"
---

# DockLayoutSnapshot::Node <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

分割节点或 tab 组节点。

## 公开成员

### split

```cpp
bool split
```

true 为分割节点，false 为 tab 组节点。

### horizontal

```cpp
bool horizontal
```

分割节点朝向，子节点水平排列为 true。

### weight

```cpp
float weight
```

占父节点长度的比例。

### children

```cpp
std::vector< Node > children
```

分割节点子节点。

### panes

```cpp
std::vector< std::string > panes
```

tab 组的面板名，tab 顺序。

### activeIndex

```cpp
int activeIndex
```

tab 组激活索引。
