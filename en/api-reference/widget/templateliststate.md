---
title: "TemplateListState"
---

# TemplateListState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/template_list.h>`

**Namespace:** `hiyui`

TemplateList runtime state, lifetime follows the LVGL object.

## Public Members

### updating

```cpp
bool updating
```

true during beginUpdate, pauses view refresh

### expandedIdx

```cpp
int expandedIdx
```

Currently expanded row index, -1 = none expanded

### animatingHeight

```cpp
int animatingHeight
```

Animation intermediate value, 0 = not animating

### animListObj

```cpp
lv_obj_t * animListObj
```

List object used inside animation callbacks
