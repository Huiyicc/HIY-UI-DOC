---
title: "TextRules"
---

# TextRules <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/state.h>`

**Namespace:** `hiyui`

Text state rules, immutable after creation.

## Public Members

### multiline

```cpp
bool multiline
```

false converts each newline to a space; true normalizes newlines to LF.

### maxLength

```cpp
uint32_t maxLength
```

Maximum Unicode code points; 0 means unlimited.
