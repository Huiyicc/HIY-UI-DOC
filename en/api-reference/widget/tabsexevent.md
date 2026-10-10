---
title: "TabsExEvent"
---

# TabsExEvent <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs_ex.h>`

**Namespace:** `hiyui`

TabsEx event content.

`index` is the current tab index when the event occurred, for reorder events `previousIndex` is the index when the drag started. `text` is valid only during the callback, `data` is the user data of the tab item.

## Public Members

### type

```cpp
TabsExEventType type
```

Event type.

### index

```cpp
int index
```

Tab index when the event occurred, -1 for the new session event.

### previousIndex

```cpp
int previousIndex
```

Tab index before the reorder or activation.

### data

```cpp
int data
```

User data of the tab item.

### text

```cpp
const char * text
```

Current title, valid only during the callback.

### pinned

```cpp
bool pinned
```

Pin state when the event occurred.
