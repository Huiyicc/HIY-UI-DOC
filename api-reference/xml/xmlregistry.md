---
title: "XmlRegistry"
---

# XmlRegistry <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

全局 XML 组件注册表。

所有操作必须在 LVGL/Hiy-UI UI 线程调用。

## 公开方法

### registerModule

```cpp
XmlRegistration registerModule(const XmlModuleSpec &spec)
```

注册模块并深拷贝 namespace 与显示信息。

### unregisterModule

```cpp
XmlRegistrationStatus unregisterModule(uint64_t token)
```

注销模块及其全部组件，新加载不再解析该 namespace。

### registerWidget

```cpp
XmlRegistration registerWidget(uint64_t moduleToken, const XmlWidgetSpec &spec)
```

向模块注册组件并深拷贝描述中的本地名、字段和属性。

成功后注册表接管 `userData`，在注销且所有加载引用释放后调用 `destroyUserData`。失败时所有权仍归调用方。

### unregisterWidget

```cpp
XmlRegistrationStatus unregisterWidget(uint64_t token)
```

注销令牌对应的组件，新加载不再解析该标签。

### snapshot

```cpp
XmlRegistrySnapshot snapshot() const
```

返回按 namespace URI 和 local name 排序的注册元数据深拷贝。

### revision

```cpp
uint64_t revision() const noexcept
```

返回注册或注销成功后递增的修订号。
