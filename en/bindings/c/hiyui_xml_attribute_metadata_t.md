---
title: "hiyui_xml_attribute_metadata_t"
---

# hiyui_xml_attribute_metadata_t <Badge type="info" text="Struct" />

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

### name

```c
const char * name
```

### kind

```c
hiyui_xml_attribute_kind_t kind
```

### required

```c
int required
```

### bindable

```c
int bindable
```

### has_default

```c
int has_default
```

### default_is_null

```c
int default_is_null
```

### default_integer

```c
int64_t default_integer
```

### default_unsigned_integer

```c
uint64_t default_unsigned_integer
```

### default_number

```c
double default_number
```

### default_boolean

```c
int default_boolean
```

### default_string

```c
const char * default_string
```

### min_integer

```c
int64_t min_integer
```

### max_integer

```c
int64_t max_integer
```

### max_unsigned_integer

```c
uint64_t max_unsigned_integer
```

### min_number

```c
double min_number
```

### max_number

```c
double max_number
```

### enum_value_count

```c
size_t enum_value_count
```

### description

```c
const char * description
```
