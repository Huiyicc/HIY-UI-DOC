---
title: "Part"
---

# Part <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/part.h>`

**Namespace:** `hiyui`

Holds part customization by value; copies share the callback; owns no part or widget.

## Public Methods

### onActivate

```cpp
Part & onActivate(F &&callback) &
```

Sets the activation callback that runs before the default behavior; setting again replaces the previous callback.
