---
title: "PropertyOption"
---

# PropertyOption <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Option display text and a non-empty, unique business value. Disabled options cannot be committed through editing. Flags use non-overlapping unsigned single-bit values. Disabled bits keep their formal values.

## Public Members

### localizedLabel

```cpp
std::optional< LocalizedText > localizedLabel
```

When set it overrides label and updates the display on language switch.
