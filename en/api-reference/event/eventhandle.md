---
title: "EventHandle"
---

# EventHandle <Badge type="info" text="Class" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

Unbind handle for a single event binding

Obtained as an optional output parameter when binding component events via Widget::on; move-only. Destruction does not unbind; repeated off() calls and off() after component destruction have no additional effect.

## Public Methods

### off

```cpp
void off()
```

Unbinds the held event binding

When called inside a callback, removes the registration immediately; closure destruction is deferred until the outermost callback returns. Calling before mounting cancels the pending connection.

### operator bool

```cpp
operator bool() const
```

Returns true while the binding is still valid and the target has not requested deletion.

### connected

```cpp
bool connected() const
```

Returns true when the binding is connected and the target is valid; false before mounting, after deletion is requested, or after unbinding.
