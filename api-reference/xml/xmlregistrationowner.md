---
title: "XmlRegistrationOwner"
---

# XmlRegistrationOwner <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

移动型 XML 组件注册所有者，析构时注销仍持有的令牌。

## 公开方法

### reset

```cpp
XmlRegistrationStatus reset() noexcept
```

注销当前令牌并清空所有权。

### release

```cpp
XmlRegistration release() noexcept
```

返回当前注册结果且不注销令牌。
