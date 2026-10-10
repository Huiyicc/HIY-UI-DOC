---
title: "DockLayoutSnapshot"
---

# DockLayoutSnapshot <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

布局快照节点。

## 公开成员

### root

```cpp
Node root
```

停靠树根。

### floating

```cpp
std::vector< Floating > floating
```

浮动面板列表。

### hidden

```cpp
std::vector< std::string > hidden
```

隐藏面板名列表。
