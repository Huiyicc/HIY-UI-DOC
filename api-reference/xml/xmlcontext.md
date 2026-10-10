---
title: "XmlContext"
---

# XmlContext <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_context.h>`

**命名空间：** `hiyui`

单个 XML 使用域的资源、样式、绑定值和命令集合。

所有操作必须在 LVGL/Hiy-UI UI 线程调用。复制对象共享同一上下文状态。

## 公开方法

### registerCommand

```cpp
XmlContextRegistration registerCommand(const char *name, XmlCommandCallback callback, void *userData=nullptr, XmlContextUserDataDestroy destroyUserData=nullptr)
```

注册具名命令。

成功后上下文接管 `userData`，在注销且进行中的回调结束后调用 `destroyUserData`。失败时所有权仍归调用方。

### unregisterCommand

```cpp
XmlContextRegistrationStatus unregisterCommand(uint64_t token)
```

注销命令令牌，已绑定对象的后续事件不再调用该命令。

### setResource

```cpp
bool setResource(const char *name, const char *value)
```

设置 `{resource:name}` 使用的字符串资源。

### setStyle

```cpp
bool setStyle(const char *name, const StyleSet &style)
```

设置具名 StyleSet，供组件的 `样式` 属性引用。

### registerMenuResource

```cpp
bool registerMenuResource(const char *name, const std::vector< ContextMenuItem > &items, PopupMode mode=PopupMode::Inline)
```

注册具名菜单资源，供任意 layout 的 ContextMenu/MenuBar 引用。

| 参数 | 说明 |
|---|---|
| `name` | 资源 id，同名覆盖。 |
| `items` | 菜单项，内部深拷贝 text/shortcut；调用方可在返回后释放原字符串。 |
| `mode` | 右键绑定（ContextMenu 资源）的弹出模式；MenuBar 引用时由其 popupMode 决定。 |


**返回值：** 名称有效且成功存入时返回 true。

### setBinding

```cpp
bool setBinding(const char *name, const char *value)
```

设置 `{binding:name}` 的值并更新仍有效的绑定目标。

**返回值：** 名称和值有效且所有目标均接受该值时返回 true。

### updateBinding

```cpp
XmlBindingUpdateResult updateBinding(const char *name, const char *value)
```

验证全部目标后设置 binding，并返回目标数量和运行时诊断。

验证失败时不保存值且不调用 setter。`ApplyFailed` 表示 setter 违反已验证 值不得拒绝的契约，已经更新的目标不会回滚。

### lastBindingUpdateResult

```cpp
XmlBindingUpdateResult lastBindingUpdateResult() const
```

返回当前上下文最近一次同步 Binding 更新结果。

### setCollection

```cpp
XmlCollectionUpdateResult setCollection(const char *name, std::span< const XmlCollectionItem > items)
```

替换具名集合；构造任一重复器失败时保留原集合和 UI。

### appendCollectionItem

```cpp
XmlCollectionUpdateResult appendCollectionItem(const char *name, const XmlCollectionItem &item)
```

在具名集合末尾追加一项。

### insertCollectionItem

```cpp
XmlCollectionUpdateResult insertCollectionItem(const char *name, size_t index, const XmlCollectionItem &item)
```

在指定索引插入一项。

### replaceCollectionItem

```cpp
XmlCollectionUpdateResult replaceCollectionItem(const char *name, size_t index, const XmlCollectionItem &item)
```

替换指定索引的一项。

### removeCollectionItem

```cpp
XmlCollectionUpdateResult removeCollectionItem(const char *name, size_t index)
```

删除指定索引的一项。

### clearCollection

```cpp
XmlCollectionUpdateResult clearCollection(const char *name)
```

清空具名集合；集合不存在时创建空集合。
