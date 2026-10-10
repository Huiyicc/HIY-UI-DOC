---
title: "InputCapabilities"
---

# InputCapabilities <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/responsive.h>`

**Namespace:** `hiyui`

Interaction devices currently connected to the backend; several can be available at once.

## Public Members

### pointer

```cpp
CapabilityState pointer
```

Excludes touch emulating a mouse.

### keyboard

```cpp
CapabilityState keyboard
```

Includes a screen keyboard connected to the backend.
