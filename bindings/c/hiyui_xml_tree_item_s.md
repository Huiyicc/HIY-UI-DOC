---
title: "hiyui_xml_tree_item_s"
---

# hiyui_xml_tree_item_s <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

ItemTree 的只读递归视图；全部指针仅在 collector 回调期间有效。

## 公开成员

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
