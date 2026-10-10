---
title: "layout.h"
---

# layout.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/layout.h>`

Layout components and the responsive window frame

## Enums

### @065373171357043174252047124347310170166225165370

| Value | Description |
|---|---|
| `HIYUI_LAYOUT_FIELD_NONE` = 0 |  |
| `HIYUI_LAYOUT_FIELD_FLOW` = 1u << 0 |  |
| `HIYUI_LAYOUT_FIELD_GAP` = 1u << 1 |  |
| `HIYUI_LAYOUT_FIELD_PADDING_X` = 1u << 2 |  |
| `HIYUI_LAYOUT_FIELD_PADDING_Y` = 1u << 3 |  |
| `HIYUI_LAYOUT_FIELD_WIDTH` = 1u << 4 |  |
| `HIYUI_LAYOUT_FIELD_HEIGHT` = 1u << 5 |  |
| `HIYUI_LAYOUT_FIELD_MIN_WIDTH` = 1u << 6 |  |
| `HIYUI_LAYOUT_FIELD_MIN_HEIGHT` = 1u << 7 |  |
| `HIYUI_LAYOUT_FIELD_MAX_WIDTH` = 1u << 8 |  |
| `HIYUI_LAYOUT_FIELD_MAX_HEIGHT` = 1u << 9 |  |
| `HIYUI_LAYOUT_FIELD_FLEX` = 1u << 10 |  |
| `HIYUI_LAYOUT_FIELD_HIDDEN` = 1u << 11 |  |

### hiyui_layout_length_kind_t

| Value | Description |
|---|---|
| `HIYUI_LAYOUT_LENGTH_CONTENT` = 0 |  |
| `HIYUI_LAYOUT_LENGTH_LOGICAL` |  |
| `HIYUI_LAYOUT_LENGTH_PERCENT` |  |

### hiyui_list_detail_pane_t

| Value | Description |
|---|---|
| `HIYUI_LIST_DETAIL_PANE_LIST` = 0 |  |
| `HIYUI_LIST_DETAIL_PANE_DETAIL` |  |

### hiyui_list_detail_presentation_t

| Value | Description |
|---|---|
| `HIYUI_LIST_DETAIL_SINGLE` = 0 |  |
| `HIYUI_LIST_DETAIL_SPLIT` |  |

### hiyui_frame_navigation_presentation_t

Presentation of the window frame navigation area.

| Value | Description |
|---|---|
| `HIYUI_FRAME_NAVIGATION_DEFAULT` = 0 |  |
| `HIYUI_FRAME_NAVIGATION_DOCKED` |  |
| `HIYUI_FRAME_NAVIGATION_DRAWER` |  |
| `HIYUI_FRAME_NAVIGATION_HIDDEN` |  |

### hiyui_frame_navigation_edge_t

Edge the window frame navigation area attaches to.

| Value | Description |
|---|---|
| `HIYUI_FRAME_NAVIGATION_EDGE_DEFAULT` = 0 |  |
| `HIYUI_FRAME_NAVIGATION_EDGE_LEFT` |  |
| `HIYUI_FRAME_NAVIGATION_EDGE_RIGHT` |  |

## Type Aliases

### hiyui_layout_fields_t

```c
typedef uint32_t hiyui_layout_fields_t
```

Bit set of rule managed fields, values of unmarked fields are ignored.

## Functions

### hiyui_layout_values_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_values_init(hiyui_layout_values_t *out)
```

Writes the C++ defaults with maximum sizes HIYUI_AUTO and hidden FALSE, NULL does nothing.

### hiyui_layout_rule_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_rule_init(hiyui_layout_rule_t *out)
```

Writes the default unbounded interval and default values, NULL does nothing and no resources are allocated.

### hiyui_layout_rules_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_rules_init(hiyui_layout_rules_t *out)
```

Writes the default base, a NULL array, and a zero count, NULL does nothing and no resources are allocated.

### hiyui_wdg_layout_rules

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_layout_rules(hiyui_widget_t *w, hiyui_widget_t *host, const hiyui_layout_rules_t *rules)
```

Copies and installs the single set of layout rules, updating while preserving the subtree and business state, without dispatching ValueChanged. A successful replacement first restores the base of fields still managed by the old set, unknown field bits, invalid enums of marked fields, or invalid values are rejected. Explicit layout setters and style padding assignment release the fields they write, theme and DPI updates keep the rules in control. When the minimum size exceeds a finite maximum the minimum size takes precedence, and overflow is handled by the scroll container set by the application. A hidden subtree leaves hit testing and focus traversal, showing it again does not move existing valid focus, call on the UI thread.

NULL uses the direct parent and follows reparenting, otherwise it must be a valid ancestor and not the widget itself or a descendant. Host axes used in breakpoints must be sized by the parent layout or explicit sizes, not by the content of managed descendants. When the explicit host becomes invalid, leaves the ancestor chain, or the host breakpoint axis loses its constraint, the still managed base is restored and the rules are cleared. NULL or a default empty configuration equals clearing, the structure and array are copied before return. 1 means the installation or clearing was accepted, 0 means the target or configuration is invalid and the previous rules remain.

### hiyui_wdg_clear_layout_rules

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clear_layout_rules(hiyui_widget_t *w)
```

Restores the base of still managed fields and removes the rules and subscription, NULL, invalid objects, and repeated calls do nothing.

### hiyui_list_detail_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_list_detail_props_init(hiyui_list_detail_props_t *out)
```

Writes 720, 240, 12, and TRUE, NULL does nothing and repeated calls overwrite previous values.

### hiyui_list_detail_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_create(hiyui_widget_t *parent, const hiyui_list_detail_props_t *props)
```

Creates a list detail container that switches between single pane and two pane by its own content width, the parent must assign its size. Re-layout keeps pane subtrees, input, and valid scroll offsets, and does not change business data or application history. Entering a pane restores valid focus, with only one pane it fills the area, and after Detail is deleted it returns to List.

NULL uses the C++ defaults, the configuration is copied at call time. NULL when the parent or configuration is invalid, on success the parent manages the widget lifecycle.

### hiyui_list_detail_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_list_create(hiyui_widget_t *parent)
```

Creates the list pane, returns NULL when the parent is not a ListDetail, is invalid, or the pane already exists.

### hiyui_list_detail_content_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_content_create(hiyui_widget_t *parent)
```

Creates the detail pane, returns NULL when the parent is not a ListDetail, is invalid, or the pane already exists.

### hiyui_list_detail_active_pane

```c
HIYUI_API hiyui_list_detail_pane_t HIYUI_CALL hiyui_list_detail_active_pane(hiyui_widget_t *w)
```

Queries the active pane, NULL or invalid objects return HIYUI_LIST_DETAIL_PANE_LIST.

### hiyui_list_detail_presentation

```c
HIYUI_API hiyui_list_detail_presentation_t HIYUI_CALL hiyui_list_detail_presentation(hiyui_widget_t *w)
```

Queries the current presentation, NULL or invalid objects return HIYUI_LIST_DETAIL_SINGLE.

### hiyui_list_detail_set_active_pane

```c
HIYUI_API void HIYUI_CALL hiyui_list_detail_set_active_pane(hiyui_widget_t *w, hiyui_list_detail_pane_t value, hiyui_notify_t notify)
```

Sets the active pane, requesting Detail when there is no Detail, invalid enums, NULL, or invalid objects do nothing. When notify is YES and the value changes, ValueChanged is sent once and can be subscribed with hiyui_wdg_on_change to query the new value. Size and structure changes do not notify, and released handles must not be passed again.

### hiyui_list_detail_back

```c
HIYUI_API int HIYUI_CALL hiyui_list_detail_back(hiyui_widget_t *w)
```

When in single pane Detail and a List exists, switches back to List, notifies, and returns 1, otherwise returns 0, application history is not invoked.

### hiyui_vbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_vbox_create(hiyui_widget_t *parent, const hiyui_vbox_props_t *props)
```

### hiyui_hbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_hbox_create(hiyui_widget_t *parent, const hiyui_hbox_props_t *props)
```

### hiyui_spacer_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_spacer_create(hiyui_widget_t *parent)
```

### hiyui_flowbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_flowbox_create(hiyui_widget_t *parent, const hiyui_flowbox_props_t *props)
```

### hiyui_window_frame_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_window_frame_create(hiyui_widget_t *parent, const hiyui_window_frame_props_t *props)
```

Creates the responsive window frame.

### hiyui_frame_header_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_header_create(hiyui_widget_t *parent)
```

Creates the WindowFrame header area, returns NULL when the area already exists.

### hiyui_frame_navigation_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_navigation_create(hiyui_widget_t *parent)
```

Creates the WindowFrame navigation area, returns NULL when the area already exists.

### hiyui_frame_content_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_content_create(hiyui_widget_t *parent)
```

Creates the WindowFrame content area, returns NULL when the area already exists.

### hiyui_frame_navigation_toggle_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_navigation_toggle_create(hiyui_widget_t *parent, const hiyui_frame_navigation_toggle_props_t *props)
```

Creates the navigation toggle button within the WindowFrame subtree.

### hiyui_window_frame_width_class

```c
HIYUI_API hiyui_layout_width_class_t HIYUI_CALL hiyui_window_frame_width_class(hiyui_widget_t *frame)
```

Returns the current width class, invalid objects return HIYUI_LAYOUT_WIDTH_NARROW.

### hiyui_window_frame_open_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_open_navigation(hiyui_widget_t *frame)
```

Opens the current Drawer navigation, other presentations leave the state unchanged.

### hiyui_window_frame_close_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_close_navigation(hiyui_widget_t *frame)
```

Closes the current Drawer navigation, other presentations leave the state unchanged.

### hiyui_window_frame_toggle_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_toggle_navigation(hiyui_widget_t *frame)
```

Toggles the current Drawer navigation, other presentations leave the state unchanged.

### hiyui_window_frame_navigation_is_open

```c
HIYUI_API int HIYUI_CALL hiyui_window_frame_navigation_is_open(hiyui_widget_t *frame)
```

Returns whether the Drawer navigation is open or opening.
