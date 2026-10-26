---
title: "BindingHandle"
---

# BindingHandle <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/detail/property_binding.h>`

**Namespace:** `hiyui`

Unbind handle for a widget property binding; destruction does not unbind.

## Public Methods

### off

```cpp
void off()
```

Unbinds the binding; repeated calls and calls after unbinding or widget deletion have no extra effect.

### connected

```cpp
bool connected() const
```

true while the binding is connected and the target is valid.

### phase

```cpp
BindingPhase phase() const
```

Current phase; Disconnected when no binding is held.

### error

```cpp
BindingFailReason error() const
```

The last failure reason.
