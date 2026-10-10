---
title: "ToolButtonProps"
---

# ToolButtonProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tool_bar.h>`

**Namespace:** `hiyui`

Tool button configuration; sizes use theme logical pixels. Strings and image paths are copied by the widget; image descriptors are borrowed until the widget is destroyed.

## Public Members

### radioGroup

```cpp
uint32_t radioGroup
```

Radio buttons with the same value in one tool bar are mutually exclusive; standalone buttons group by parent container.

### iconSize

```cpp
int iconSize
```

0 follows the tool bar; 18 when used standalone.
