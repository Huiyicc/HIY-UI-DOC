---
title: "TabsExEvent"
---

# TabsExEvent <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs_ex.h>`

**Namespace:** `hiyui`

TabsEx event payload.

`index` is the current tab index when the event occurred; for reorder events `previousIndex` is the index at drag start. `text` is valid only during the callback, and `data` is the tab item user data.

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

Tab index when the event occurred; -1 for new-session events.

### previousIndex

```cpp
int previousIndex
```

Tab index before reorder or activation.

### data

```cpp
int data
```

Tab item user data.

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
