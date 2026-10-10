---
title: "hiyui_xml_value_t"
---

# hiyui_xml_value_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/xml.h>`

## 公开成员

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

借用字符串，仅在当前命令回调期间有效。
