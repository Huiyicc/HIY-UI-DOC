---
title: "UserStyleRegistry"
---

# UserStyleRegistry <Badge type="info" text="Class" />

**Header:** `#include <hiyui/style/user_style_registry.h>`

**Namespace:** `hiyui`

User widget type registry, Meyer singleton

registerType allocates monotonically increasing ids from 100 up to a limit of 255, repeated registration with the same name is idempotent. Theme::styleFor automatically delegates types where isUserType is true to this registry.

## Static Methods

### isUserType

```cpp
static bool isUserType(WidgetType t)
```

An id of 100 or above is a user widget type

## Public Methods

### registerType

```cpp
WidgetType registerType(const char *name, UserStyleFactory factory)
```

Registers a named user widget type

Type name, the caller guarantees stability during registration Default style factory, may be nullptr, meaning no theme default style The assigned WidgetType, 100 or above, WidgetType::Base when ids are exhausted or name is empty

### styleFor

```cpp
StyleSet styleFor(WidgetType type, const Theme &theme) const
```

Looks up the default StyleSet by id

Returns an empty StyleSet when unregistered or factory is null

### find

```cpp
bool find(const char *name, WidgetType &out) const
```

Queries the registered id by name

Returns false when unregistered
