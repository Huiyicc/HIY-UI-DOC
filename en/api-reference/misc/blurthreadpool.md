---
title: "BlurThreadPool"
---

# BlurThreadPool <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/algorithm/BlurThreadPool.h>`

**Namespace:** `hiyui`

Singleton thread pool dedicated to blur algorithms

Creates CPU core count minus one worker threads at construction and provides parallel_for to distribute tasks evenly across all cores. With a single core it degrades to serial execution.

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

Returns the number of cores used by the pool, including the main thread

### parallel_for

```cpp
void parallel_for(int count, const std::function< void(int)> &job)
```

Executes tasks over the range [0, count) in parallel

When cores == 1 it runs serially on the calling thread.


Task callback; the argument is the task index in [0, count)
