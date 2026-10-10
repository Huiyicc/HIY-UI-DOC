---
title: "hiyui_property_item_t"
---

# hiyui_property_item_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/property_grid.h>`

Initialize with item_init. The tree must be acyclic, and IDs must be non-zero and unique across the tree. user_data is owned by the caller and must stay alive until the property is removed and related callbacks finish. When has_default_value is TRUE, default_value is copied, including an EMPTY default. TUPLE uses a non-empty sequence of scalar leaf items. Nested TUPLE and empty tuple values are not supported; structural changes must update the parent property. A TUPLE EMPTY value is aggregated from its children; an explicit tuple value overrides the child values. The same applies to defaults, and aggregation requires every child to have a default. A mixed tuple still requires a representative value satisfying each child constraint. TUPLE children share draft, pending, and conflict states. Commit, change, and status callbacks use the parent ID and the full tuple.

## Public Members

### id

```c
hiyui_property_id_t id
```

### name

```c
const char * name
```

### description

```c
const char * description
```

### kind

```c
hiyui_property_kind_t kind
```

### value

```c
hiyui_property_value_t value
```

### has_default_value

```c
hiyui_bool_t has_default_value
```

### default_value

```c
hiyui_property_value_t default_value
```

### constraints

```c
hiyui_property_constraints_t constraints
```

### options

```c
const hiyui_property_option_t * options
```

### option_count

```c
size_t option_count
```

### editor

```c
const char * editor
```

### children

```c
const struct hiyui_property_item_t * children
```

### child_count

```c
size_t child_count
```

### user_data

```c
void * user_data
```

### read_only

```c
hiyui_bool_t read_only
```

### enabled

```c
hiyui_bool_t enabled
```

### visible

```c
hiyui_bool_t visible
```

### expanded

```c
hiyui_bool_t expanded
```

### mixed

```c
hiyui_bool_t mixed
```

### modified

```c
hiyui_bool_t modified
```

### localized_name

```c
const hiyui_localized_text_t * localized_name
```

When non-NULL, copies the description and overrides name for display, filtering, and sorting.

### localized_description

```c
const hiyui_localized_text_t * localized_description
```

When non-NULL, copies the description and overrides description for the description text and filtering.
