---
title: "pal::BufferConfig"
---

# pal::BufferConfig <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/pal.h>`

**Namespace:** `hiyui`

Buffer configuration.

The SDL backend manages buffers internally and ignores this configuration.

## Public Members

### mode

```cpp
RenderMode mode
```

Render mode.

### bufferCount

```cpp
int bufferCount
```

Buffer count, 1 or 2, where 2 means Alt Buffer double buffering.
