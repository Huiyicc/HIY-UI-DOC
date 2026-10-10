---
title: "InputCapabilities"
---

# InputCapabilities <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/responsive.h>`

**Namespace:** `hiyui`

Input facilities currently connected by the backend; several can be available at once.

## Public Members

### pointer

```cpp
CapabilityState pointer
```

Does not include touch emulating a mouse.

### keyboard

```cpp
CapabilityState keyboard
```

Includes an on-screen keyboard connected by the backend.
