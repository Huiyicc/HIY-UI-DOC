---
title: "XmlActivationResult"
---

# XmlActivationResult <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

显式展示的资源；成功时必须提供 state 和 destroy，销毁函数须可处理已经关闭的展示。

## 公开成员

### childHost

```cpp
lv_obj_t * childHost
```

可选的组件内容宿主，在展示资源销毁前有效。
