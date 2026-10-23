---
title: "types.h"
---

# types.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/types.h>`

Base type definitions: export macros, opaque handles, callback types, enums, and sentinel values.

## Enums

### hiyui_notify_t

| Value | Description |
|---|---|
| `HIYUI_NOTIFY_NO` = 0 |  |
| `HIYUI_NOTIFY_YES` = 1 |  |

### hiyui_bool_t

| Value | Description |
|---|---|
| `HIYUI_BOOL_DEFAULT` = 0 |  |
| `HIYUI_BOOL_FALSE` = -1 |  |
| `HIYUI_BOOL_TRUE` = 1 |  |

### hiyui_align_t

| Value | Description |
|---|---|
| `HIYUI_ALIGN_START` = 0 |  |
| `HIYUI_ALIGN_CENTER` |  |
| `HIYUI_ALIGN_END` |  |
| `HIYUI_ALIGN_SPACE_BETWEEN` |  |
| `HIYUI_ALIGN_SPACE_AROUND` |  |
| `HIYUI_ALIGN_SPACE_EVENLY` |  |

### hiyui_scroll_t

| Value | Description |
|---|---|
| `HIYUI_SCROLL_OFF` = 0 |  |
| `HIYUI_SCROLL_AUTO` |  |
| `HIYUI_SCROLL_HORIZONTAL` |  |
| `HIYUI_SCROLL_VERTICAL` |  |
| `HIYUI_SCROLL_BOTH` |  |

### hiyui_btn_variant_t

| Value | Description |
|---|---|
| `HIYUI_BTN_VARIANT_PRIMARY` = 0 |  |
| `HIYUI_BTN_VARIANT_SECONDARY` |  |
| `HIYUI_BTN_VARIANT_OUTLINE` |  |
| `HIYUI_BTN_VARIANT_GHOST` |  |
| `HIYUI_BTN_VARIANT_LINK` |  |

### hiyui_image_fit_t

| Value | Description |
|---|---|
| `HIYUI_IMAGE_FIT_DEFAULT` = 0 |  |
| `HIYUI_IMAGE_FIT_CENTER` |  |
| `HIYUI_IMAGE_FIT_STRETCH` |  |
| `HIYUI_IMAGE_FIT_CONTAIN` |  |
| `HIYUI_IMAGE_FIT_COVER` |  |
| `HIYUI_IMAGE_FIT_TILE` |  |

### hiyui_indicator_side_t

| Value | Description |
|---|---|
| `HIYUI_INDICATOR_SIDE_LEFT` = 0 |  |
| `HIYUI_INDICATOR_SIDE_RIGHT` |  |

### hiyui_text_align_t

| Value | Description |
|---|---|
| `HIYUI_TEXT_ALIGN_LEFT` = 0 |  |
| `HIYUI_TEXT_ALIGN_CENTER` |  |
| `HIYUI_TEXT_ALIGN_RIGHT` |  |

### hiyui_progress_type_t

| Value | Description |
|---|---|
| `HIYUI_PROGRESS_LINE` = 0 |  |
| `HIYUI_PROGRESS_CIRCLE` |  |
| `HIYUI_PROGRESS_DASHBOARD` |  |
| `HIYUI_PROGRESS_STEPS` |  |

### hiyui_spin_type_t

| Value | Description |
|---|---|
| `HIYUI_SPIN_ARC` = 0 |  |
| `HIYUI_SPIN_DOTS` |  |

### hiyui_tooltip_placement_t

| Value | Description |
|---|---|
| `HIYUI_TOOLTIP_TOP` = 0 |  |
| `HIYUI_TOOLTIP_TOP_START` |  |
| `HIYUI_TOOLTIP_TOP_END` |  |
| `HIYUI_TOOLTIP_BOTTOM` |  |
| `HIYUI_TOOLTIP_BOTTOM_START` |  |
| `HIYUI_TOOLTIP_BOTTOM_END` |  |
| `HIYUI_TOOLTIP_LEFT` |  |
| `HIYUI_TOOLTIP_LEFT_START` |  |
| `HIYUI_TOOLTIP_LEFT_END` |  |
| `HIYUI_TOOLTIP_RIGHT` |  |
| `HIYUI_TOOLTIP_RIGHT_START` |  |
| `HIYUI_TOOLTIP_RIGHT_END` |  |

### hiyui_picker_presentation_t

How the Picker panel is presented.

| Value | Description |
|---|---|
| `HIYUI_PICKER_PRESENTATION_AUTO` = 0 |  |
| `HIYUI_PICKER_PRESENTATION_ANCHORED` |  |
| `HIYUI_PICKER_PRESENTATION_BOTTOM_SHEET` |  |

AUTO is resolved from the logical width of the window available area when the panel opens, or from the screen logical width without a window host. BOTTOM_SHEET is used below a width of 720, otherwise ANCHORED. The presentation does not switch while the panel is open and is resolved again on the next opening.

### hiyui_layout_width_class_t

Layout width class.

| Value | Description |
|---|---|
| `HIYUI_LAYOUT_WIDTH_NARROW` = 0 |  |
| `HIYUI_LAYOUT_WIDTH_WIDE` |  |

### hiyui_capability_state_t

State of a capability wired into the backend. UNKNOWN is not the same as UNAVAILABLE.

| Value | Description |
|---|---|
| `HIYUI_CAPABILITY_UNKNOWN` = 0 |  |
| `HIYUI_CAPABILITY_UNAVAILABLE` |  |
| `HIYUI_CAPABILITY_AVAILABLE` |  |

### hiyui_display_shape_t

| Value | Description |
|---|---|
| `HIYUI_DISPLAY_SHAPE_UNKNOWN` = 0 |  |
| `HIYUI_DISPLAY_SHAPE_RECTANGLE` |  |
| `HIYUI_DISPLAY_SHAPE_CIRCLE` |  |

## Type Aliases

### hiyui_app_t

```c
typedef struct hiyui_app_s hiyui_app_t
```

### hiyui_win_t

```c
typedef struct hiyui_win_s hiyui_win_t
```

### hiyui_widget_t

```c
typedef struct hiyui_wdg_s hiyui_widget_t
```

### hiyui_localized_text_t

```c
typedef struct hiyui_localized_text_s hiyui_localized_text_t
```

### hiyui_setup_fn

```c
typedef void( * hiyui_setup_fn) (hiyui_app_t *app, void *user_data)
```

### hiyui_callback_fn

```c
typedef void( * hiyui_callback_fn) (void *user_data)
```

### hiyui_int_fn

```c
typedef void( * hiyui_int_fn) (int value, void *user_data)
```

### hiyui_string_fn

```c
typedef void( * hiyui_string_fn) (const char *text, void *user_data)
```

### hiyui_destroy_fn

```c
typedef void( * hiyui_destroy_fn) (void *user_data)
```

Releases callback state once on the thread specified by the receiving API. Must not throw exceptions or touch widgets being destroyed.

### hiyui_environment_fn

```c
typedef void( * hiyui_environment_fn) (const hiyui_layout_environment_t *value, void *user_data)
```

value is valid only during the callback and can be copied for later use.

### hiyui_back_request_fn

```c
typedef void( * hiyui_back_request_fn) (hiyui_back_request_t *request, void *user_data)
```

request is valid only during the callback.

### hiyui_part_event_t

```c
typedef struct hiyui_part_event_s hiyui_part_event_t
```

### hiyui_part_event_fn

```c
typedef void( * hiyui_part_event_fn) (hiyui_part_event_t *event, void *user_data)
```

### hiyui_draw_ctx_t

```c
typedef struct hiyui_draw_ctx_s hiyui_draw_ctx_t
```

## Functions

### hiyui_part_event_index

```c
int hiyui_part_event_index(const hiyui_part_event_t *event)
```

Index of the activated item. Returns HIYUI_NO_SELECTION when not applicable.

### hiyui_part_event_column

```c
int hiyui_part_event_column(const hiyui_part_event_t *event)
```

Column index. Returns HIYUI_NO_SELECTION when not applicable.

### hiyui_part_event_prevent_default

```c
void hiyui_part_event_prevent_default(hiyui_part_event_t *event)
```

Prevents the widget default behavior of this activation. event is valid only during the callback.
