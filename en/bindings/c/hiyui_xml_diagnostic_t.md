---
title: "hiyui_xml_diagnostic_t"
---

# hiyui_xml_diagnostic_t <Badge type="info" text="Struct" />

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

### severity

```c
hiyui_xml_diagnostic_severity_t severity
```

### code

```c
hiyui_xml_diagnostic_code_t code
```

### source

```c
const char * source
```

Borrowed string, valid until the owning result is destroyed; NULL when there is no source ID.

### line

```c
int line
```

### column

```c
int column
```

### element

```c
const char * element
```

Borrowed string, valid until the owning handle is destroyed; NULL when no corresponding value exists.

### attribute

```c
const char * attribute
```

### message

```c
const char * message
```
