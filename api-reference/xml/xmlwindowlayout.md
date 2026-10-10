---
title: "XmlWindowLayout"
---

# XmlWindowLayout <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_window.h>`

**命名空间：** `hiyui`

将 &lt;`Window`&gt; 根元素同步创建为窗口及其内容组件树。

窗口由 `Application` 管理生命周期，本对象仅持有不拥有指针。所有操作必须在 LVGL/Hiy-UI UI 线程调用。窗口内容加载始终事务回滚，不保留部分内容。

## 公开方法

### window

```cpp
Window * window() const
```

返回已创建窗口。

**返回值：** 窗口未创建或已关闭时返回 nullptr。

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

仅当窗口已创建且没有错误诊断时返回 true。

## 静态方法

### fromFile

```cpp
static XmlWindowLayout fromFile(const char *path, XmlContext context={}, XmlLoadOptions options={})
```

通过宿主文件系统加载，返回值始终保留失败诊断。

### fromString

```cpp
static XmlWindowLayout fromString(std::string_view xml, XmlContext context={}, XmlLoadOptions options={})
```

从内存字符串加载，解析和窗口创建在返回前完成。
