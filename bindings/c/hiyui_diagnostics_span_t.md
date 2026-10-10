---
title: "hiyui_diagnostics_span_t"
---

# hiyui_diagnostics_span_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

时间以本次采集开始为零点；嵌套区间不可直接相加。

## 公开成员

### id

```c
uint64_t id
```

### start_us

```c
uint64_t start_us
```

### duration_us

```c
uint64_t duration_us
```

### display_id

```c
uint64_t display_id
```

### object_id

```c
uint64_t object_id
```

### thread_id

```c
uint32_t thread_id
```

### depth

```c
uint32_t depth
```

### phase

```c
hiyui_diagnostics_phase_t phase
```

### diagnostic

```c
int diagnostic
```

### truncated

```c
int truncated
```

### name

```c
char name
```

### profiler

```c
int profiler
```

来自 LVGL 探针；display_id 为刷新上下文，0 表示未知。
