---
title: "hiyui_xml_widget_metadata_t"
---

# hiyui_xml_widget_metadata_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/xml.h>`

Registration metadata output; strings borrow from the snapshot and are valid until it is destroyed.

## Public Members

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

When non-zero, an ItemList item may contain a widget subtree.

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
