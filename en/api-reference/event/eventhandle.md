---
title: "EventHandle"
---

# EventHandle <Badge type="info" text="Class" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

Unbind handle for a single event binding

Obtained through Widget::on as the optional out parameter of a component event binding, move-only. Destruction does not unbind. Repeated off() calls and off() after component destruction have no additional effect.

## Public Methods

### off

```cpp
void off()
```

Unbinds the held event binding

When called inside a callback the registration is removed immediately, and closure destruction is deferred until the outermost callback returns. Calling before attachment cancels the pending connection.

### operator bool

```cpp
operator bool() const
```

Returns true while the binding is still valid and the target has not requested deletion.

### connected

```cpp
bool connected() const
```

Returns true when the binding is connected and the target is valid. False before attachment, after deletion is requested, or after unbinding.
