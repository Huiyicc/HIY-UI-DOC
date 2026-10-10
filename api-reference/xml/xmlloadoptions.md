---
title: "XmlLoadOptions"
---

# XmlLoadOptions <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/xml/xml_diagnostic.h>`

**命名空间：** `hiyui`

XML 加载的错误处理和资源限制。

## 公开成员

### strict

```cpp
bool strict
```

出现错误时销毁本次创建的完整组件树。

### maxDepth

```cpp
size_t maxDepth
```

允许的最大元素嵌套深度，根元素深度为 1。

### maxNodes

```cpp
size_t maxNodes
```

单次加载允许处理的最大元素数，包括 ItemList 子项。

### maxBytes

```cpp
size_t maxBytes
```

单次加载允许读取的最大 XML 字节数。

### maxIncludeDepth

```cpp
size_t maxIncludeDepth
```

单次加载允许的最大 Include 嵌套层数。

### sourceId

```cpp
const char * sourceId
```

内存或 reader 根文档的 source ID；nullptr 表示无 source ID，借用至调用返回。

### sourceResolver

```cpp
XmlSourceResolver sourceResolver
```

Include source resolver；回调为空时使用宿主文件 resolver。
