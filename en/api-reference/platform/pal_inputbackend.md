---
title: "pal::InputBackend"
---

# pal::InputBackend <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/pal.h>`

**Namespace:** `hiyui`

Input backend interface encapsulating platform input device creation.

Implemented by each platform. Obtain the current platform instance through pal::input().

## Public Members

### createPointer

```cpp
_lv_indev_t *(* createPointer
```

Creates a pointer input device, mouse or touch, for the given display.

### createKeyboard

```cpp
_lv_indev_t *(* createKeyboard
```

Creates a keyboard input device for the given display.
