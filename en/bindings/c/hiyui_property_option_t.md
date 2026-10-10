---
title: "hiyui_property_option_t"
---

# hiyui_property_option_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/property_grid.h>`

## Public Members

### label

```c
const char * label
```

### value

```c
hiyui_property_value_t value
```

### disabled

```c
hiyui_bool_t disabled
```

### localized_label

```c
const hiyui_localized_text_t * localized_label
```

When non-NULL, the description is copied and overrides label.
