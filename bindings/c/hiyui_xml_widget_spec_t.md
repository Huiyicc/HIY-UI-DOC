---
title: "hiyui_xml_widget_spec_t"
---

# hiyui_xml_widget_spec_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

可扩展组件注册描述；传入注册 API 前使用 `HIYUI_XML_WIDGET_SPEC_INIT` 初始化。

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

### factory

```c
hiyui_xml_factory_fn factory
```

### child_mode

```c
hiyui_xml_child_mode_t child_mode
```

### item_tag

```c
const char * item_tag
```

### item_collector

```c
hiyui_xml_item_collector_fn item_collector
```

### tree_item_collector

```c
hiyui_xml_tree_item_collector_fn tree_item_collector
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

非零时加载器不创建 UI 对象。

### attributes

```c
const hiyui_xml_attribute_spec_t * attributes
```

### attribute_count

```c
size_t attribute_count
```

### item_attributes

```c
const hiyui_xml_attribute_spec_t * item_attributes
```

### item_attribute_count

```c
size_t item_attribute_count
```

### top_item_attributes

```c
const hiyui_xml_attribute_spec_t * top_item_attributes
```

ItemTree 顶层 item 的属性描述；为空时使用 item_attributes。

### top_item_attribute_count

```c
size_t top_item_attribute_count
```

### property_validator

```c
hiyui_xml_property_validator_fn property_validator
```

### property_setter

```c
hiyui_xml_property_setter_fn property_setter
```

### value_kind

```c
hiyui_xml_value_kind_t value_kind
```

### value_reader

```c
hiyui_xml_value_reader_fn value_reader
```

### user_data

```c
void * user_data
```

### destroy_user_data

```c
hiyui_xml_userdata_destroy_fn destroy_user_data
```

注册成功后由注册表调用；注册失败时不会调用。
