---
title: "AccessibilityProps"
---

# AccessibilityProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/accessibility/accessibility.h>`

**Namespace:** `hiyui`

Overrides accessibility information provided automatically by the component; strings use UTF-8.

## Public Members

### name

```cpp
const char * name
```

nullptr uses the associated label or the component name.

### description

```cpp
const char * description
```

Supplementary description; nullptr clears the explicit description.

### automationId

```cpp
const char * automationId
```

Application-defined identifier, invariant across display languages.

### decorative

```cpp
bool decorative
```

Omits its own semantics while keeping semantics of independent child components.
