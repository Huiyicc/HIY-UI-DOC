---
title: "XmlReloadHost"
---

# XmlReloadHost <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_reload.h>`

**命名空间：** `hiyui`

在固定父组件下以整树事务管理可重载 XML 布局。

宿主拥有当前提交的 XML 根树。每次加载强制使用严格模式；失败时销毁候选树并 保留当前树，成功时销毁旧树。所有加载共享构造时传入的 `XmlContext`，所有 操作必须在 LVGL/Hiy-UI UI 线程调用。

## 公开方法

### reloadFromFile

```cpp
bool reloadFromFile(const char *path, XmlLoadOptions options={})
```

从文件同步构建候选树；成功提交时返回 true。

### reloadFromString

```cpp
bool reloadFromString(std::string_view xml, XmlLoadOptions options={})
```

从内存字符串同步构建候选树；成功提交时返回 true。

### reloadFromReader

```cpp
bool reloadFromReader(XmlReadCallback reader, void *userData=nullptr, XmlLoadOptions options={})
```

从 reader 同步构建候选树；成功提交时返回 true。

reader 和 userData 仅在调用期间使用，资源的打开和关闭由调用方管理。

### layout

```cpp
const XmlLayout & layout() const noexcept
```

返回当前已提交布局；没有成功布局时返回空布局。

### get

```cpp
Ref< T > get(const char *id) const
```

按 ID 获取当前布局中的组件引用；成功替换或 reset 后旧引用失效。

### getRaw

```cpp
lv_obj_t * getRaw(const char *id) const
```

按 ID 获取当前布局的底层对象；成功替换或 reset 后旧指针失效。

### status

```cpp
XmlReloadStatus status() const noexcept
```

返回最近一次加载尝试的状态。

### diagnostics

```cpp
const std::vector< XmlDiagnostic > & diagnostics() const
```

返回最近一次加载诊断；引用在下次加载或 reset 后失效。

### sourceId

```cpp
const std::string & sourceId() const
```

返回最近一次加载的根 source ID；引用在下次加载或 reset 后失效。

### dependencies

```cpp
const std::vector< std::string > & dependencies() const
```

返回最近一次加载的 Include source ID；引用在下次加载或 reset 后失效。

### context

```cpp
XmlContext context() const
```

返回所有加载共享的上下文。

### reset

```cpp
void reset() noexcept
```

销毁当前根树并清除最近加载结果，保留父组件和上下文。

### operator bool

```cpp
operator bool() const
```

当前是否存在有效的已提交布局。
