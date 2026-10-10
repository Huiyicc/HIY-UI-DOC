---
title: "hiyui_localized_text_s"
---

# hiyui_localized_text_s <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/i18n.h>`

翻译输入描述；绑定和查询在调用时复制引用的数据，所有操作在 UI 线程执行。

## 公开成员

### id

```c
const char * id
```

### source

```c
const char * source
```

### source_plural

```c
const char * source_plural
```

### has_count

```c
hiyui_bool_t has_count
```

### count

```c
int64_t count
```

### arguments

```c
const hiyui_text_arg_t * arguments
```

### argument_count

```c
size_t argument_count
```
