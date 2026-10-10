---
title: "XmlValueWriter"
---

# XmlValueWriter <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_value.h>`

**Namespace:** `hiyui`

Owning output interface for value readers.

## Public Methods

### setString

```cpp
bool setString(std::string_view value) noexcept
```

Copies the string; clears the output and returns false on allocation failure.

### value

```cpp
const XmlValue & value() const noexcept
```

Returns a borrowed value; it becomes invalid when the writer is destroyed or written again.
