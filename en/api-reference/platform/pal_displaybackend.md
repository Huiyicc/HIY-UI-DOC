---
title: "pal::DisplayBackend"
---

# pal::DisplayBackend <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/pal.h>`

**Namespace:** `hiyui`

Display backend interface encapsulating platform window creation, destruction, and property setting.

Implemented by each platform. Obtain the current platform instance through pal::display().

## Public Members

### create

```cpp
_lv_display_t *(* create
```

Creates a display object of the given size.

### destroy

```cpp
void(* destroy
```

Destroys the display object and releases resources.

### setTitle

```cpp
void(* setTitle
```

Sets the window title, UTF-8.
