---
title: "ScopedEventHandle"
---

# ScopedEventHandle <Badge type="info" text="Class" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

Scoped owner of a single event; unbinds the original event on destruction, rebinding, or move assignment.

## Public Methods

### out

```cpp
EventHandle * out()
```

Unbinds the original event and returns the handle out parameter for the next on call. The returned pointer must not be stored.

### off

```cpp
void off()
```

Unbinds the event; repeated calls and calls after component deletion are safe.

### connected

```cpp
bool connected() const
```

Whether events can still be received.
