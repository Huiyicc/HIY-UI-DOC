---
title: "hiyui_xml_load_options_t"
---

# hiyui_xml_load_options_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

可扩展加载选项；传入加载 API 前使用 `HIYUI_XML_LOAD_OPTIONS_INIT` 初始化。

## 公开成员

### struct_size

```c
size_t struct_size
```

### abi_version

```c
uint32_t abi_version
```

### strict

```c
int strict
```

非零时任一错误会销毁本次创建的完整根组件树。

### max_depth

```c
size_t max_depth
```

最大元素深度；0 使用库默认值。

### max_nodes

```c
size_t max_nodes
```

最大元素数量；0 使用库默认值。

### max_bytes

```c
size_t max_bytes
```

最大 XML 输入字节数；0 使用库默认值。

### max_include_depth

```c
size_t max_include_depth
```

最大 Include 嵌套层数；0 使用库默认值。

### source_id

```c
const char * source_id
```

内存或 reader 根文档的 source ID；NULL 表示无 source ID。

### source_resolver

```c
hiyui_xml_resolve_fn source_resolver
```

NULL 时使用宿主文件 resolver。

### source_resolver_user_data

```c
void * source_resolver_user_data
```
