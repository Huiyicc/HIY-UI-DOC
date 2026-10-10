---
title: "MenuContext"
---

# MenuContext <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/menu_context.h>`

**命名空间：** `hiyui`

菜单动作上下文

由菜单引擎在动作触发时构造并传入回调；上下文与 owner 包装器均为借用， 仅在回调内有效，不得保存到回调之外。

## 公开方法

### MenuContext

```cpp
MenuContext(Widget owner)
```

构造菜单动作上下文

| 参数 | 说明 |
|---|---|
| `owner` | 触发对象包装器，可为未初始化包装器 |

### hasOwner

```cpp
bool hasOwner() const
```

是否存在触发对象

**返回值：** 原生应用菜单与系统托盘菜单触发时返回 false

### owner

```cpp
Widget & owner()
```

触发对象的借用包装器

**返回值：** 无 owner 时 raw() 为 nullptr
