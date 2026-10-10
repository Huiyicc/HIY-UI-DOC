---
title: "ItemStateColor"
---

# ItemStateColor <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/item_template.h>`

**Namespace:** `hiyui`

Unified color type, supporting ThemeRole or a constant color

## Public Methods

### resolve

```cpp
uint32_t resolve() const
```

Resolve to the actual color value

### isSet

```cpp
bool isSet() const
```

Whether set, i.e. not HIYUI_DEFAULT
