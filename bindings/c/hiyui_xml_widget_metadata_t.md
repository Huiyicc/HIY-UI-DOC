---
title: "hiyui_xml_widget_metadata_t"
---

# hiyui_xml_widget_metadata_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

注册元数据输出；字符串借用自 snapshot，在 snapshot 销毁前有效。

## 公开成员

### struct_size

```c
size_t struct_size
```

### abi_version

```c
uint32_t abi_version
```

### local_name

```c
const char * local_name
```

### child_mode

```c
hiyui_xml_child_mode_t child_mode
```

### item_tag

```c
const char * item_tag
```

### item_allows_children

```c
int item_allows_children
```

非零时 ItemList 的 item 允许包含组件子树。

### resource_only

```c
int resource_only
```

### value_kind

```c
hiyui_xml_value_kind_t value_kind
```

### attribute_count

```c
size_t attribute_count
```

### item_attribute_count

```c
size_t item_attribute_count
```

### top_item_attribute_count

```c
size_t top_item_attribute_count
```
