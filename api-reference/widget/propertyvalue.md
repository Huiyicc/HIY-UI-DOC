---
title: "PropertyValue"
---

# PropertyValue <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/property_value.h>`

**命名空间：** `hiyui`

按值保存属性数据，文本和自定义字节随复制独立保存。 日期年份为 1 至 9999；未设置值使用空 PropertyValue。

## 公开方法

### get

```cpp
const T * get() const
```

类型不匹配时返回 nullptr；指针借用至值被修改或销毁。
