---
title: "hiyui_xml_source_t"
---

# hiyui_xml_source_t <Badge type="info" text="结构体" />

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

### source_id

```c
const char * source_id
```

成功时必须设置为非空规范 ID；字符串仅需在回调期间有效。

### content

```c
const char * content
```

内容仅需在回调期间有效；content_size 非零时不得为 NULL。

### content_size

```c
size_t content_size
```
