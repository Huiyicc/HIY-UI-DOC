---
title: "XmlValueWriter"
---

# XmlValueWriter <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_value.h>`

**命名空间：** `hiyui`

value reader 的拥有型输出接口。

## 公开方法

### setString

```cpp
bool setString(std::string_view value) noexcept
```

复制字符串，内存不足时清空输出并返回 false。

### value

```cpp
const XmlValue & value() const noexcept
```

返回借用值，writer 销毁或再次写入后失效。
