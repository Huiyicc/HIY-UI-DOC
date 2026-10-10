---
title: "ListState"
---

# ListState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/list.h>`

**Namespace:** `hiyui`

List runtime state, lifetime follows the LVGL object

Heap allocated and attached to the lv_obj_t user_data, freed automatically through the LV_EVENT_DELETE callback.

## Public Members

### updating

```cpp
bool updating
```

true during beginUpdate, pausing view refresh
