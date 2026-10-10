---
title: "PropertyConstraints"
---

# PropertyConstraints <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Numeric bounds and step use the same value type as the property. Empty values mean unset. The minimum must not exceed the maximum, the step must be greater than zero, and floating point values must be finite.

## Public Members

### decimals

```cpp
int decimals
```

Displayed decimal places, 0 to 15. Does not change stored precision.

### maxLength

```cpp
int maxLength
```

Text UTF-8 byte limit. 0 means unlimited.

### localizedUnit

```cpp
std::optional< LocalizedText > localizedUnit
```

When set it overrides unit and affects display only.
