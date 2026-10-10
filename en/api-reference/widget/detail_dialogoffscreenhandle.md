---
title: "detail::DialogOffScreenHandle"
---

# detail::DialogOffScreenHandle <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/detail/offscreen_dialog.h>`

**Namespace:** `hiyui`

Result of opening an offscreen session

After building the card on screen, the caller invokes fitDialogOffScreen to measure, center and show it.

## Public Members

### screen

```cpp
lv_obj_t * screen
```

Active screen of the offscreen window, the card mount point

### display

```cpp
lv_display_t * display
```

Offscreen display

### session

```cpp
DialogOffScreenSession * session
```

Session handle; nullptr on failure
