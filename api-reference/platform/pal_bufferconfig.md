---
title: "pal::BufferConfig"
---

# pal::BufferConfig <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/pal.h>`

**命名空间：** `hiyui`

缓冲区配置

SDL 后端内部管理缓冲区，忽略此配置。

## 公开成员

### mode

```cpp
RenderMode mode
```

渲染模式

### bufferCount

```cpp
int bufferCount
```

缓冲区数量 (1 或 2，2=Alt Buffer 双缓冲)
