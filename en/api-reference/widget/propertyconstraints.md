---
title: "PropertyConstraints"
---

# PropertyConstraints <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Numeric bounds and step use the same value type as the property; empty means unset. Minimum must not exceed maximum, step must be greater than zero, and floating-point values must be finite.

## Public Members

### decimals

```cpp
int decimals
```

Displayed decimal places, 0 to 15. Does not change storage precision.

### maxLength

```cpp
int maxLength
```

Text UTF-8 byte limit. 0 = unlimited

### localizedUnit

```cpp
std::optional< LocalizedText > localizedUnit
```

Overrides unit when set. Affects display only.
