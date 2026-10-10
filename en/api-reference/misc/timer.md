---
title: "Timer"
---

# Timer <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/timer.h>`

**Namespace:** `hiyui`

Periodic callback on the UI thread, cancelled by destruction or stop; stopping or destroying the timer from inside the callback is allowed.

## Public Methods

### start

```cpp
void start(uint32_t periodMs, F &&callback)
```

Replaces the current callback; periodMs is a positive millisecond value, 0 equals stop.
