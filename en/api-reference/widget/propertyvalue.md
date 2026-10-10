---
title: "PropertyValue"
---

# PropertyValue <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Stores property data by value. Text and custom bytes are stored independently on copy. Date years range from 1 to 9999. An unset value uses an empty PropertyValue.

## Public Methods

### get

```cpp
const T * get() const
```

Returns nullptr on a type mismatch. The pointer is borrowed until the value is modified or destroyed.
