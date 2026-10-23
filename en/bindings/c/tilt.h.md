---
title: "tilt.h"
---

# tilt.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/tilt.h>`

Pointer-follow 3D tilt effect.

Widget operations must run on the UI thread; a non-NULL handle must refer to a live widget and must not be used after destruction. The effect is cleaned up automatically when the widget is destroyed.

## Functions

### hiyui_tilt_params_init

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_params_init(hiyui_tilt_params_t *params)
```

Fills in defaults matching TiltParams.

NULL is a no-op.

### hiyui_tilt_attach

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_attach(hiyui_widget_t *obj, const hiyui_tilt_params_t *params)
```

Attaches a tilt effect; repeated calls update all parameters.

Disabling animation while following applies the target angles immediately; disabling it during release flattens immediately.


NULL is a no-op. NULL uses defaults; otherwise all fields are copied before return and zero values are applied as supplied.

### hiyui_tilt_detach

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_detach(hiyui_widget_t *obj)
```

Removes the tilt effect and restores immediately while tilted.

NULL or an unattached widget is a no-op.

### hiyui_tilt_reset

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_reset(hiyui_widget_t *obj)
```

Flattens immediately while staying attached; subsequent hover or press-drag can trigger tilt again.

NULL or an unattached widget is a no-op.

### hiyui_tilt_is_attached

```c
HIYUI_API int HIYUI_CALL hiyui_tilt_is_attached(hiyui_widget_t *obj)
```

Queries whether the tilt effect is attached.

Returns 1 when attached, or 0 when unattached or obj is NULL.
