---
title: "PropertyChange"
---

# PropertyChange <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Snapshot of a formal value change. The value can be copied and kept. userData is still held by the caller. Commits and changes of Tuple children use the parent Tuple id, userData and the complete old and new tuples.
