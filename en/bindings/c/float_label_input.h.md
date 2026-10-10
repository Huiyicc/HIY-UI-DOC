---
title: "float_label_input.h"
---

# float_label_input.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/float_label_input.h>`

Floating label input

## Functions

### hiyui_float_label_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_float_label_input_create(hiyui_widget_t *parent, const hiyui_float_label_input_props_t *props)
```

Creates a floating label input; a NULL label uses input.placeholder.

### hiyui_float_label_input_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_set_text(hiyui_widget_t *w, const char *text, hiyui_notify_t notify)
```

### hiyui_float_label_input_get_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_float_label_input_get_text(hiyui_widget_t *w)
```

Current text; returns NULL when w is NULL.

### hiyui_float_label_input_set_label

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_set_label(hiyui_widget_t *w, const char *label)
```

Sets the floating label text; NULL or an empty string hides the label.

### hiyui_float_label_input_clear

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_clear(hiyui_widget_t *w, hiyui_notify_t notify)
```

### hiyui_float_label_input_focus

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_focus(hiyui_widget_t *w)
```

Focuses the internal input.

### hiyui_float_label_input_add_to_group

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_add_to_group(hiyui_widget_t *w)
```

Adds the internal input to the default input group.
