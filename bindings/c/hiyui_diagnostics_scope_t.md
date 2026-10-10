---
title: "hiyui_diagnostics_scope_t"
---

# hiyui_diagnostics_scope_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

调用方持有的计时存储；不得复制活跃区间，begin/end 必须在同一线程配对。

## 公开成员

### alignment

```c
uint64_t alignment
```

### bytes

```c
unsigned char bytes
```

### storage

```c
union hiyui_diagnostics_scope_t::@133041231046100240121223252224103002352171115020 storage
```

### active

```c
int active
```
