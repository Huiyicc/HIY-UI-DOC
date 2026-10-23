---
title: "XmlTemplate"
---

# XmlTemplate <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_template.h>`

**Namespace:** `hiyui`

可复制的 XML 条目模板，持有资源作用域和 Include 内容；仅在 UI 线程使用。

## Public Methods

### instantiate

```cpp
XmlLayout instantiate(Widget &parent, const XmlCollectionItem &item, size_t index) const
```

在宿主内创建一条记录的组件树；失败时回滚本次创建，诊断保留在返回值中。

### collectionName

```cpp
const std::string & collectionName() const
```

返回模板订阅的集合名称；空模板返回空字符串。

### context

```cpp
XmlContext context() const
```

返回模板使用的共享上下文。
