---
title: "PropertyItem"
---

# PropertyItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_value.h>`

**Namespace:** `hiyui`

Owning property description, copied or moved when passed to a designer; id must be nonzero and unique across the tree. Tuple children must be a non-empty sequence of scalar leaf properties; nested Tuples and empty tuple values are not supported. When a Tuple provides no value it is aggregated from children; when provided it overrides each child value. The same applies to default values, and aggregation requires every item to have a default value. A mixed tuple still requires a representative value satisfying each child constraint. Tuple children share the draft, pending and conflict state of the whole group; changing the child structure requires updating the parent Tuple.

## Public Members

### editor

```cpp
std::string editor
```

When non-empty, uses the corresponding registered factory. Cannot be edited when unregistered.

### userData

```cpp
void * userData
```

Borrowed data. Must stay alive until the property is removed and related callbacks finish.

### mixed

```cpp
bool mixed
```

Values differ across objects. Unmodified drafts are not committed.

### modified

```cpp
bool modified
```

Marked by the caller or a successful commit when no default value is set.

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

Overrides name when set. Used for display, filtering and sorting.

### localizedDescription

```cpp
std::optional< LocalizedText > localizedDescription
```

Overrides description when set. Used for description and filtering.
