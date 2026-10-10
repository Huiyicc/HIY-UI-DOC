---
title: "XmlFactoryContext"
---

# XmlFactoryContext <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Interface for factories and item collectors to report errors into the current load.

## Public Methods

### error

```cpp
void error(XmlDiagnosticCode code, const char *attribute, const char *message)
```

Records an error diagnostic for the current element.

### hasCommand

```cpp
bool hasCommand(std::string_view name) const
```

Whether the command name is registered in the current context.

### makeCommandAction

```cpp
std::function< void(MenuContext &)> makeCommandAction(std::string_view name) const
```

Builds a menu item action that triggers the given command.

Returns a callable action when the command is registered; the owner context is described by MenuContext. Returns empty when not registered.
