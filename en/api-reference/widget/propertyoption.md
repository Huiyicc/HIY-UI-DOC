---
title: "PropertyOption"
---

# PropertyOption <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Display text and a non-empty, unique business value for an option. Disabled options cannot be committed through editing. Flags use non-overlapping unsigned single-bit values; disabled bits keep their formal value.

## Public Members

### localizedLabel

```cpp
std::optional< LocalizedText > localizedLabel
```

Overrides label when set. Display updates on language switch.
