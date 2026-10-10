---
title: "TableColumnGroup"
---

# TableColumnGroup <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

Header group, multi-level header

## Public Members

### title

```cpp
const char * title
```

Group title

### columnIndices

```cpp
std::vector< int > columnIndices
```

Included column indices

### localizedTitle

```cpp
std::optional< LocalizedText > localizedTitle
```

When set it overrides the original text and updates on language switch. The description is copied when passed to the widget.
