---
title: "XmlRegistry"
---

# XmlRegistry <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Global XML component registry.

All operations must run on the LVGL/Hiy-UI UI thread.

## Public Methods

### registerModule

```cpp
XmlRegistration registerModule(const XmlModuleSpec &spec)
```

Registers a module and deep-copies the namespace and display information.

### unregisterModule

```cpp
XmlRegistrationStatus unregisterModule(uint64_t token)
```

Unregisters a module and all its components; new loads no longer resolve that namespace.

### registerWidget

```cpp
XmlRegistration registerWidget(uint64_t moduleToken, const XmlWidgetSpec &spec)
```

Registers a component with the module and deep-copies the local name, fields, and attributes from the description.

On success the registry takes ownership of `userData` and calls `destroyUserData` after unregistration and after all load references are released. On failure ownership remains with the caller.

### unregisterWidget

```cpp
XmlRegistrationStatus unregisterWidget(uint64_t token)
```

Unregisters the component for the token; new loads no longer resolve that tag.

### snapshot

```cpp
XmlRegistrySnapshot snapshot() const
```

Returns a deep copy of registration metadata sorted by namespace URI and local name.

### revision

```cpp
uint64_t revision() const noexcept
```

Returns the revision number incremented after each successful registration or unregistration.
