---
title: "StateSubscription"
---

# StateSubscription <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/state.h>`

**Namespace:** `hiyui`

Scoped owner of a state subscription; cancels on destruction or off.

## Public Methods

### off

```cpp
void off()
```

Cancels the subscription; repeated calls and calls on an invalid state have no extra effect.

### connected

```cpp
bool connected() const
```

true while the subscription is still active.

### error

```cpp
std::optional< StateStatus > error() const
```

The last error; InvalidState for an invalid handle, CallbackFailed after a callback exception.
