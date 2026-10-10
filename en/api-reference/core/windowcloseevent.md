---
title: "WindowCloseEvent"
---

# WindowCloseEvent <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/window.h>`

**Namespace:** `hiyui`

Synchronously dispatched close request, valid only during the callback.

## Public Methods

### cancel

```cpp
void cancel()
```

Cancels this close; other callbacks cannot undo the cancellation.

### isCanceled

```cpp
bool isCanceled() const
```

Returns whether this request has been canceled.
