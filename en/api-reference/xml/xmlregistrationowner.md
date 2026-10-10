---
title: "XmlRegistrationOwner"
---

# XmlRegistrationOwner <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Move-only owner of an XML component registration; unregisters the token still held on destruction.

## Public Methods

### reset

```cpp
XmlRegistrationStatus reset() noexcept
```

Unregisters the current token and clears ownership.

### release

```cpp
XmlRegistration release() noexcept
```

Returns the current registration result without unregistering the token.
