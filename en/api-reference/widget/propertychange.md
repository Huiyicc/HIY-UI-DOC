---
title: "PropertyChange"
---

# PropertyChange <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Snapshot of a committed value change. The value can be copied and kept; userData is still owned by the caller. Tuple child commits and changes use the parent Tuple id, userData and complete old and new tuples.
