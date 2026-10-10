---
title: "XmlLayout"
---

# XmlLayout <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_layout.h>`

**命名空间：** `hiyui`

将 XML 文档同步创建为 Hiy-UI 组件树。

所有操作必须在 LVGL/Hiy-UI UI 线程调用。布局只观察已挂载的组件树，销毁布局 不销毁组件；组件销毁后对应的 ID 查询返回空引用。

## 公开方法

### get

```cpp
Ref< T > get(const char *id) const
```

按 ID 获取类型匹配的组件引用。

**返回值：** ID 不存在、对象已销毁或实际组件类型不匹配时返回空引用。

### getRaw

```cpp
lv_obj_t * getRaw(const char *id) const
```

按 ID 获取底层对象，不检查组件类型。

### diagnostics

```cpp
const std::vector< XmlDiagnostic > & diagnostics() const
```

返回加载产生的全部结构化诊断。

### hasErrors

```cpp
bool hasErrors() const
```

当前结果是否包含错误诊断。

### context

```cpp
XmlContext context() const
```

返回本布局使用的共享上下文。

### sourceId

```cpp
const std::string & sourceId() const
```

返回根文档的规范 source ID；未提供时返回空字符串。

### dependencies

```cpp
const std::vector< std::string > & dependencies() const
```

返回本次加载解析到的去重 Include source ID。

### operator bool

```cpp
operator bool() const
```

仅当根对象有效且没有错误诊断时返回 true。

## 静态方法

### fromFile

```cpp
static XmlLayout fromFile(Widget &parent, const char *path, XmlContext context={}, XmlLoadOptions options={})
```

通过宿主文件系统便利接口加载，返回值始终保留失败诊断。

### fromReader

```cpp
static XmlLayout fromReader(Widget &parent, XmlReadCallback reader, void *userData=nullptr, XmlContext context={}, XmlLoadOptions options={})
```

同步读取并加载，reader 返回值不得超过 capacity。

reader 和 userData 仅在调用期间使用，资源的打开和关闭由调用方管理。

### fromString

```cpp
static XmlLayout fromString(Widget &parent, std::string_view xml, XmlContext context={}, XmlLoadOptions options={})
```

从内存字符串加载，解析和组件创建在返回前完成。
