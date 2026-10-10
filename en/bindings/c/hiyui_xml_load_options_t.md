---
title: "hiyui_xml_load_options_t"
---

# hiyui_xml_load_options_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/xml.h>`

Extensible load options; initialize with `HIYUI_XML_LOAD_OPTIONS_INIT` before passing to a load API.

## Public Members

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

When non-zero, any error destroys the entire root widget tree created by this load.

### max_depth

```c
size_t max_depth
```

Maximum element depth; 0 uses the library default.

### max_nodes

```c
size_t max_nodes
```

Maximum element count; 0 uses the library default.

### max_bytes

```c
size_t max_bytes
```

Maximum XML input size in bytes; 0 uses the library default.

### max_include_depth

```c
size_t max_include_depth
```

Maximum Include nesting depth; 0 uses the library default.

### source_id

```c
const char * source_id
```

Source ID of the memory or reader root document; NULL means no source ID.

### source_resolver

```c
hiyui_xml_resolve_fn source_resolver
```

When NULL the host file resolver is used.

### source_resolver_user_data

```c
void * source_resolver_user_data
```
