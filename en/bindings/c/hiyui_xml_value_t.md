---
title: "hiyui_xml_value_t"
---

# hiyui_xml_value_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/xml.h>`

## Public Members

### kind

```c
hiyui_xml_value_kind_t kind
```

### integer

```c
int64_t integer
```

### boolean

```c
int boolean
```

### number

```c
double number
```

### string

```c
const char * string
```

Borrowed string, valid only during the current command callback.
