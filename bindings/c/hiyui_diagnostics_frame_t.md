---
title: "hiyui_diagnostics_frame_t"
---

# hiyui_diagnostics_frame_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

render_us 包含 flush；submitted 仅表示 CPU 提交返回，不表示 GPU 完成或实际上屏。

## 公开成员

### id

```c
uint64_t id
```

### display_id

```c
uint64_t display_id
```

### start_us

```c
uint64_t start_us
```

### duration_us

```c
uint64_t duration_us
```

### interval_us

```c
uint64_t interval_us
```

### render_us

```c
uint64_t render_us
```

### flush_us

```c
uint64_t flush_us
```

### flush_wait_us

```c
uint64_t flush_wait_us
```

### submit_us

```c
uint64_t submit_us
```

软件 SDL 为累计 flush 回调耗时，GL 为 swap 调用耗时。

### input_to_submit_us

```c
uint64_t input_to_submit_us
```

### request_to_submit_us

```c
uint64_t request_to_submit_us
```

### request_us

```c
uint64_t request_us
```

### flushed_pixels

```c
uint64_t flushed_pixels
```

### flush_count

```c
uint32_t flush_count
```

### continuous

```c
int continuous
```

本帧首次刷新请求在前次提交后一帧预算内，不表示实际掉帧数。

### submitted

```c
int submitted
```

### input_associated

```c
int input_associated
```

最近一次输入处理到下一次提交的时间关联，不保证输入引发本帧。

### request_associated

```c
int request_associated
```

### diagnostic

```c
int diagnostic
```
