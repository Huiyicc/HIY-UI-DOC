---
title: "hiyui_xml_diagnostic_t"
---

# hiyui_xml_diagnostic_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

## 公开成员

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

借用字符串，在所属结果销毁前有效；无 source ID 时为 NULL。

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

借用字符串，在所属句柄销毁前有效；无对应值时为 NULL。

### attribute

```c
const char * attribute
```

### message

```c
const char * message
```
