---
title: "hiyui_xml_tree_item_s"
---

# hiyui_xml_tree_item_s <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/xml.h>`

Read-only recursive view for ItemTree; all pointers are valid only during the collector callback.

## Public Members

### attrs

```c
const hiyui_xml_attr_t * attrs
```

### attr_count

```c
size_t attr_count
```

### children

```c
const struct hiyui_xml_tree_item_s * children
```

### child_count

```c
size_t child_count
```
