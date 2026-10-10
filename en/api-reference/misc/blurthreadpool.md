---
title: "BlurThreadPool"
---

# BlurThreadPool <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/algorithm/BlurThreadPool.h>`

**Namespace:** `hiyui`

Dedicated thread pool for blur algorithms, singleton

Creates (CPU core count - 1) worker threads at construction and provides parallel_for to distribute tasks evenly across all cores. Falls back to serial execution when there is one core.

## Static Methods

### instance

```cpp
static BlurThreadPool & instance()
```

Returns the global singleton

Reference to the thread pool singleton

## Public Methods

### cores

```cpp
int cores() const
```

Returns the core count used by the pool, including the main thread

### parallel_for

```cpp
void parallel_for(int count, const std::function< void(int)> &job)
```

Runs tasks over the range [0, count) in parallel

When cores == 1, tasks run serially on the calling thread.


Task callback; the argument is the task index in [0, count)
