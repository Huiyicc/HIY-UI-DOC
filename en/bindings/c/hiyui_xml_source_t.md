---
title: "hiyui_xml_source_t"
---

# hiyui_xml_source_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/xml.h>`

## Public Members

### struct_size

```c
size_t struct_size
```

### abi_version

```c
uint32_t abi_version
```

### source_id

```c
const char * source_id
```

Must be set to a non-empty canonical ID on success; the string only needs to be valid during the callback.

### content

```c
const char * content
```

Content only needs to be valid during the callback; must not be NULL when content_size is non-zero.

### content_size

```c
size_t content_size
```
