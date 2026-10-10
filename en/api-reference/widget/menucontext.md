---
title: "MenuContext"
---

# MenuContext <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/menu_context.h>`

**Namespace:** `hiyui`

Menu action context

Constructed by the menu engine when an action triggers and passed to the callback. Both the context and the owner wrapper are borrowed, valid only inside the callback, and must not be stored beyond it.

## Public Methods

### MenuContext

```cpp
MenuContext(Widget owner)
```

Constructs a menu action context

Wrapper of the triggering object; may be an uninitialized wrapper

### hasOwner

```cpp
bool hasOwner() const
```

Whether a triggering object exists

Returns false when triggered from a native application menu or a system tray menu

### owner

```cpp
Widget & owner()
```

Borrowed wrapper of the triggering object

raw() is nullptr when there is no owner
