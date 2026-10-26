---
title: "StateWriteResult"
---

# StateWriteResult <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/state.h>`

**Namespace:** `hiyui`

Result of a state write.

## Public Members

### status

```cpp
StateStatus status
```

Write status.

### normalized

```cpp
bool normalized
```

The candidate value was altered by the fixed rules.

### committed

```cpp
bool committed
```

The candidate replaced the old value; may be true together with a failure status.
