---
title: "date_value.h"
---

# date_value.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/date_value.h>`

Date and time values and shared picker callback types

Shared by TimePicker / DatePicker. A year of 0 means no selection.

## Type Aliases

### hiyui_picker_footer_fn

```c
typedef void(* hiyui_picker_footer_fn) (hiyui_widget_t *panel, void *ud)
```

Popup footer build callback; builds custom child widgets inside the popup bottom container
