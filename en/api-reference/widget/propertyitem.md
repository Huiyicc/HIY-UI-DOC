---
title: "PropertyItem"
---

# PropertyItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Owning property description. It is copied or moved when passed to the designer. id must be nonzero and unique across the tree. Tuple children must be a non-empty sequence of scalar leaf properties. Nested tuples and empty tuple values are not supported. When a Tuple provides no value it is aggregated from the children. When provided it overrides each child value. The same applies to defaults, and aggregation requires every item to have a default. A mixed tuple must still provide a representative value that satisfies each child constraint. Tuple children share the draft, pending and conflict states of the whole group. Changing the child structure requires updating the parent Tuple.

## Public Members

### editor

```cpp
std::string editor
```

When non-empty the matching registered factory is used. Not editable when unregistered.

### userData

```cpp
void * userData
```

Borrowed data. It must outlive the property removal and the end of related callbacks.

### mixed

```cpp
bool mixed
```

Values differ across objects. Unmodified drafts are not committed.

### modified

```cpp
bool modified
```

When no default is set it is marked by the caller or by a successful commit.

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

When set it overrides name, used for display, filtering and sorting.

### localizedDescription

```cpp
std::optional< LocalizedText > localizedDescription
```

When set it overrides description, used for the description and filtering.
