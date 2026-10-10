---
title: "PropertyReply"
---

# PropertyReply <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_editor.h>`

**Namespace:** `hiyui`

Copyable, non-owning reply handle; all methods must be called on the UI thread. Becomes invalid after the first completion, cancellation, a property version change, or widget deletion; completing again returns false.

## Public Methods

### accept

```cpp
bool accept() const
```

Accepts the original candidate value.

### accept

```cpp
bool accept(PropertyValue value) const
```

Validates and accepts a corrected value; on validation failure the draft and error are kept.

### reject

```cpp
bool reject(std::string message) const
```

Rejects the commit and keeps the draft; an empty message uses the default error text.
