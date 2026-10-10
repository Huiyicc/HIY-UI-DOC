---
title: "VirtualAnchor"
---

# VirtualAnchor <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/virtual_table.h>`

**命名空间：** `hiyui`

虚表锚定信息

数据变化前记录锚定节点，变化后恢复到原屏幕位置， 保持用户视角一致性。

## 公开成员

### itemId

```cpp
int itemId
```

锚定项标识，子类定义含义，Tree用TreeNodeId

### screenY

```cpp
int screenY
```

相对于视口顶部的Y坐标
