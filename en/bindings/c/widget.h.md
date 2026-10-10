---
title: "widget.h"
---

# widget.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/widget.h>`

General widget operations: size, style, events, tooltips

## Enums

### hiyui_primitive_kind_t

| Value | Description |
|---|---|
| `HIYUI_PRIMITIVE_OBJECT` = 0 |  |
| `HIYUI_PRIMITIVE_TEXT` |  |
| `HIYUI_PRIMITIVE_PRESSABLE` |  |

### hiyui_text_overflow_t

| Value | Description |
|---|---|
| `HIYUI_TEXT_OVERFLOW_WRAP` = 0 |  |
| `HIYUI_TEXT_OVERFLOW_ELLIPSIS` |  |
| `HIYUI_TEXT_OVERFLOW_DOTS` |  |

### hiyui_flex_flow_t

| Value | Description |
|---|---|
| `HIYUI_FLEX_ROW` = 0 |  |
| `HIYUI_FLEX_COLUMN` |  |
| `HIYUI_FLEX_ROW_WRAP` |  |
| `HIYUI_FLEX_COLUMN_WRAP` |  |
| `HIYUI_FLEX_ROW_REVERSE` |  |
| `HIYUI_FLEX_COLUMN_REVERSE` |  |

### hiyui_scrollbar_mode_t

| Value | Description |
|---|---|
| `HIYUI_SCROLLBAR_OFF` |  |
| `HIYUI_SCROLLBAR_AUTO` |  |
| `HIYUI_SCROLLBAR_ACTIVE` |  |
| `HIYUI_SCROLLBAR_ALWAYS` |  |

### hiyui_scroll_snap_t

| Value | Description |
|---|---|
| `HIYUI_SCROLL_SNAP_NONE` |  |
| `HIYUI_SCROLL_SNAP_START` |  |
| `HIYUI_SCROLL_SNAP_CENTER` |  |
| `HIYUI_SCROLL_SNAP_END` |  |

### hiyui_direction_t

| Value | Description |
|---|---|
| `HIYUI_DIRECTION_ROW` = 0 |  |
| `HIYUI_DIRECTION_COLUMN` |  |

### hiyui_style_state_t

| Value | Description |
|---|---|
| `HIYUI_STATE_NORMAL` = 0 |  |
| `HIYUI_STATE_HOVERED` |  |
| `HIYUI_STATE_PRESSED` |  |
| `HIYUI_STATE_FOCUSED` |  |
| `HIYUI_STATE_CHECKED` |  |
| `HIYUI_STATE_DISABLED` |  |
| `HIYUI_STATE_FOCUS_KEY` |  |
| `HIYUI_STATE_MIXED` |  |
| `HIYUI_STATE_EXPANDED` |  |

### hiyui_accessibility_role_t

| Value | Description |
|---|---|
| `HIYUI_ACCESSIBILITY_WINDOW` = 0 |  |
| `HIYUI_ACCESSIBILITY_GROUP` |  |
| `HIYUI_ACCESSIBILITY_TEXT` |  |
| `HIYUI_ACCESSIBILITY_BUTTON` |  |
| `HIYUI_ACCESSIBILITY_CHECKBOX` |  |
| `HIYUI_ACCESSIBILITY_RADIO` |  |
| `HIYUI_ACCESSIBILITY_SWITCH` |  |
| `HIYUI_ACCESSIBILITY_SLIDER` |  |
| `HIYUI_ACCESSIBILITY_PROGRESS` |  |
| `HIYUI_ACCESSIBILITY_EDIT` |  |

### hiyui_cursor_t

| Value | Description |
|---|---|
| `HIYUI_CURSOR_ARROW` = 0 |  |
| `HIYUI_CURSOR_HAND` |  |
| `HIYUI_CURSOR_IBEAM` |  |
| `HIYUI_CURSOR_CROSSHAIR` |  |
| `HIYUI_CURSOR_SIZE_H` |  |
| `HIYUI_CURSOR_SIZE_V` |  |
| `HIYUI_CURSOR_NO_ACTION` |  |

### hiyui_align_pos_t

| Value | Description |
|---|---|
| `HIYUI_ALIGN_POS_CENTER` = 0 |  |
| `HIYUI_ALIGN_POS_TOP_LEFT` |  |
| `HIYUI_ALIGN_POS_TOP_MID` |  |
| `HIYUI_ALIGN_POS_TOP_RIGHT` |  |
| `HIYUI_ALIGN_POS_BOTTOM_LEFT` |  |
| `HIYUI_ALIGN_POS_BOTTOM_MID` |  |
| `HIYUI_ALIGN_POS_BOTTOM_RIGHT` |  |
| `HIYUI_ALIGN_POS_LEFT_MID` |  |
| `HIYUI_ALIGN_POS_RIGHT_MID` |  |

## Type Aliases

### hiyui_text_binding_fn

```c
typedef void(* hiyui_text_binding_fn) (hiyui_widget_t *widget, const char *text, void *user_data)
```

The text is borrowed until the callback returns; the callback runs on the UI thread and can update the node with set_text_content.

### hiyui_theme_style_fn

```c
typedef void(* hiyui_theme_style_fn) (hiyui_style_spec_set_t *out, void *user_data)
```

Fills in the initialized default styles, out is valid only inside the callback, and the callback must not change the theme or delete widgets. Image sources and paths in the output are borrowed and must stay valid until the image is replaced or the widget is destroyed.

## Functions

### hiyui_primitive_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_primitive_create(hiyui_widget_t *parent, hiyui_primitive_kind_t kind)
```

Creates a base node without the widget theme, owned by the parent; returns NULL when the parent is NULL or the kind is invalid.

### hiyui_wdg_set_text_content

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_set_text_content(hiyui_widget_t *w, const char *text)
```

Sets the content of a base text node; NULL text refreshes the existing text, and a NULL w or non-text node does nothing.

### hiyui_wdg_get_text_content

```c
HIYUI_API size_t HIYUI_CALL hiyui_wdg_get_text_content(hiyui_widget_t *w, char *buffer, size_t capacity)
```

Copies the text and returns the required capacity including NUL; buffer may be NULL, an empty string is written when capacity is insufficient, and 1 is returned when there is no text.

### hiyui_wdg_text_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_overflow(hiyui_widget_t *w, hiyui_text_overflow_t value)
```

Ellipsis is a single line ellipsis and Dots keeps the height; NULL or a non-text node does nothing.

### hiyui_wdg_get_text_color

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_wdg_get_text_color(hiyui_widget_t *w)
```

### hiyui_selectable_text_by_default

```c
HIYUI_API int HIYUI_CALL hiyui_selectable_text_by_default(void)
```

### hiyui_image_source_is_text

```c
HIYUI_API int HIYUI_CALL hiyui_image_source_is_text(const void *source)
```

Returns whether the source is a path or symbol string, NULL returns 0.

### hiyui_wdg_bind_text

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_bind_text(hiyui_widget_t *w, const hiyui_localized_text_t *text, hiyui_text_binding_fn setter, void *user_data, hiyui_destroy_fn destroy)
```

Copies the translation descriptor, updates immediately and on later language changes, and repeated binding replaces the previous binding. When destroy is not NULL it takes ownership of user_data, which is released on failure, replacement, unbinding, or widget destruction.

1 on success, 0 for NULL arguments or an invalid text descriptor.

### hiyui_wdg_clear_text_binding

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clear_text_binding(hiyui_widget_t *w)
```

Removes the translation binding and keeps the text, NULL or repeated calls do nothing.

### hiyui_wdg_parent

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_parent(hiyui_widget_t *w)
```

Returns a borrowed node, NULL, out-of-range, or nonexistent returns NULL, and the node must not be used after its parent is deleted.

### hiyui_wdg_child_at

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_child_at(hiyui_widget_t *w, int index)
```

### hiyui_wdg_screen

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_screen(hiyui_widget_t *w)
```

### hiyui_wdg_reparent

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_reparent(hiyui_widget_t *w, hiyui_widget_t *parent)
```

Reparents the widget, NULL or an ancestor cycle does nothing.

### hiyui_wdg_contains

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_contains(hiyui_widget_t *w, hiyui_widget_t *other)
```

Whether the ancestor relation includes the widget itself, NULL returns 0.

### hiyui_wdg_is_hidden

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_is_hidden(hiyui_widget_t *w)
```

### hiyui_wdg_is_visible

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_is_visible(hiyui_widget_t *w)
```

### hiyui_wdg_floating

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_floating(hiyui_widget_t *w, int on)
```

### hiyui_wdg_event_bubble

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_event_bubble(hiyui_widget_t *w, int on)
```

### hiyui_wdg_set_state

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_set_state(hiyui_widget_t *w, hiyui_style_state_t state, int on)
```

### hiyui_wdg_flow

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flow(hiyui_widget_t *w, hiyui_flex_flow_t flow)
```

### hiyui_wdg_flex_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flex_align(hiyui_widget_t *w, hiyui_align_t main, hiyui_align_t cross, hiyui_align_t track)
```

### hiyui_wdg_gap

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_gap(hiyui_widget_t *w, int gap)
```

Gap and minimum size are in logical pixels, NULL does nothing.

### hiyui_wdg_minimum_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_minimum_size(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_scroll_direction

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_direction(hiyui_widget_t *w, hiyui_direction_t direction)
```

### hiyui_wdg_scroll_mode

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_mode(hiyui_widget_t *w, hiyui_scroll_t value)
```

### hiyui_wdg_scrollbars

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scrollbars(hiyui_widget_t *w, hiyui_scrollbar_mode_t value)
```

### hiyui_wdg_scroll_snap

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_snap(hiyui_widget_t *w, hiyui_direction_t axis, hiyui_scroll_snap_t value)
```

### hiyui_wdg_snap_child

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_snap_child(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_one

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_one(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_on_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_on_focus(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_chain

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_chain(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_to_x_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_x_px(hiyui_widget_t *w, int value, int animate)
```

### hiyui_wdg_scroll_to_y_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_y_px(hiyui_widget_t *w, int value, int animate)
```

### hiyui_wdg_scroll_by_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_by_px(hiyui_widget_t *w, int dx, int dy, int animate)
```

### hiyui_wdg_stop_scroll

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_stop_scroll(hiyui_widget_t *w)
```

### hiyui_wdg_scroll_into_view

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_into_view(hiyui_widget_t *w, int animate)
```

### hiyui_wdg_pos_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pos_px(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_translate_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_translate_px(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_minimum_size_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_minimum_size_px(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_clip_corner

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clip_corner(hiyui_widget_t *w, int value)
```

### hiyui_wdg_overflow_visible

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_overflow_visible(hiyui_widget_t *w, int value)
```

### hiyui_wdg_text_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_align(hiyui_widget_t *w, hiyui_align_t value)
```

### hiyui_wdg_image_scale

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_image_scale(hiyui_widget_t *w, int value)
```

### hiyui_wdg_get_scroll_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_scroll_metrics(hiyui_widget_t *w, hiyui_scroll_metrics_t *out)
```

### hiyui_wdg_get_position_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_position_px(hiyui_widget_t *w, hiyui_point_t *out)
```

### hiyui_wdg_get_translation_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_translation_px(hiyui_widget_t *w, hiyui_point_t *out)
```

### hiyui_wdg_top_layer

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_top_layer(hiyui_widget_t *w)
```

### hiyui_wdg_scroll_to_x

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_x(hiyui_widget_t *w, int x)
```

### hiyui_wdg_move_to_index

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_move_to_index(hiyui_widget_t *w, int index)
```

### hiyui_wdg_size_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_size_px(hiyui_widget_t *w, int width, int height)
```

Sets the size in physical pixels, NULL does nothing.

### hiyui_wdg_width_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_width_px(hiyui_widget_t *w, int width)
```

### hiyui_wdg_height_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_height_px(hiyui_widget_t *w, int height)
```

### hiyui_wdg_max_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_width(hiyui_widget_t *w, int value)
```

Sets the maximum logical width, updated with DPI; when the minimum width exceeds the limit the widget is laid out at the minimum width.

Non-negative logical pixels, 0 is a zero limit, HIYUI_AUTO removes the local limit, and other negative values do nothing. Does nothing when NULL or already requested for deletion.

### hiyui_wdg_max_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_height(hiyui_widget_t *w, int value)
```

Sets the maximum logical height, updated with DPI; when the minimum height exceeds the limit the widget is laid out at the minimum height.

Non-negative logical pixels, 0 is a zero limit, HIYUI_AUTO removes the local limit, and other negative values do nothing. Does nothing when NULL or already requested for deletion.

### hiyui_wdg_max_width_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_width_px(hiyui_widget_t *w, int width)
```

Maximum size in physical pixels, HIYUI_AUTO removes the limit, NULL does nothing.

### hiyui_wdg_max_height_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_height_px(hiyui_widget_t *w, int height)
```

### hiyui_wdg_get_layout_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_layout_metrics(hiyui_widget_t *w, hiyui_layout_metrics_t *out)
```

Returns 0 for NULL arguments and zeroes non-NULL output.

### hiyui_wdg_update_layout

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_update_layout(hiyui_widget_t *w)
```

Completes layout synchronously, callbacks may delete widgets, and NULL does nothing.

### hiyui_wdg_invalidate_layout

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_invalidate_layout(hiyui_widget_t *w)
```

### hiyui_focused_widget

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_focused_widget(void)
```

Borrowed focus node of the default input group, or NULL when none exists.

### hiyui_wdg_has_focus_group

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_has_focus_group(hiyui_widget_t *w)
```

### hiyui_wdg_focus_next

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_focus_next(hiyui_widget_t *w, int previous)
```

### hiyui_wdg_window_focused

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_window_focused(hiyui_widget_t *w)
```

Whether the owning desktop window has keyboard focus, NULL or non-desktop platforms return 0.

### hiyui_wdg_accessibility_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility_role(hiyui_widget_t *w, hiyui_accessibility_role_t role, uint32_t group)
```

### hiyui_wdg_accessibility_changed

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility_changed(hiyui_widget_t *w)
```

### hiyui_wdg_theme_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_theme_style(hiyui_widget_t *w, hiyui_widget_type_t type)
```

Applies the built-in widget theme, called once before setting explicit styles, and NULL does nothing.

### hiyui_wdg_bind_theme_style

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_bind_theme_style(hiyui_widget_t *w, hiyui_theme_style_fn provider, void *user_data, hiyui_destroy_fn destroy)
```

Appends a default style provider that runs immediately and on theme and DPI updates, and explicit styles override its result. When destroy is not NULL it takes ownership of user_data, which is released on failure or widget destruction.

1 on success, 0 when w or provider is NULL.

### hiyui_wdg_apply_style_spec

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_spec(hiyui_widget_t *w, const hiyui_style_spec_t *style)
```

Merges explicit styles, keeps zero values and alpha, and reapplies on theme and DPI updates, NULL arguments do nothing.

### hiyui_wdg_apply_style_spec_set

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_spec_set(hiyui_widget_t *w, const hiyui_style_spec_set_t *styles)
```

### hiyui_wdg_selectable_text

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_selectable_text(hiyui_widget_t *w, int with_menu)
```

Enables text selection, a non-zero with_menu includes the copy menu, repeated calls have no extra effect, and non-desktop platforms do nothing.

### hiyui_wdg_cursor

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_cursor(hiyui_widget_t *w, hiyui_cursor_t cursor)
```

Uses the given mouse cursor on hover, NULL or non-desktop platforms do nothing.

### hiyui_wdg_pos

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pos(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_size(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_width(hiyui_widget_t *w, int width)
```

### hiyui_wdg_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_height(hiyui_widget_t *w, int height)
```

### hiyui_wdg_center

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_center(hiyui_widget_t *w)
```

### hiyui_wdg_fill

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill(hiyui_widget_t *w)
```

### hiyui_wdg_fill_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill_width(hiyui_widget_t *w)
```

### hiyui_wdg_fill_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill_height(hiyui_widget_t *w)
```

### hiyui_wdg_flex

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flex(hiyui_widget_t *w, int grow)
```

### hiyui_wdg_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_hidden(hiyui_widget_t *w, int hidden)
```

### hiyui_wdg_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_enabled(hiyui_widget_t *w, int enabled)
```

### hiyui_wdg_get_width

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_width(hiyui_widget_t *w)
```

### hiyui_wdg_get_height

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_height(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_width

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_width(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_height

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_height(hiyui_widget_t *w)
```

### hiyui_wdg_get_width_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_width_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_height_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_height_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_width_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_width_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_height_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_height_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_child_count

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_wdg_get_child_count(hiyui_widget_t *w)
```

### hiyui_wdg_get_bounds_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_bounds_px(hiyui_widget_t *w, hiyui_rect_t *out)
```

Queries the untransformed bounds in screen coordinates, NULL arguments return 0 and non-NULL output is zeroed.

### hiyui_wdg_get_content_bounds_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_bounds_px(hiyui_widget_t *w, hiyui_rect_t *out)
```

Queries the local content area in physical pixels, NULL arguments return 0 and non-NULL output is zeroed.

### hiyui_wdg_to_local_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_to_local_px(hiyui_widget_t *w, hiyui_point_t point, hiyui_point_t *out)
```

Converts screen physical coordinates to local coordinates including ancestor transforms, NULL arguments return 0 and non-NULL output is zeroed.

### hiyui_wdg_to_screen_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_to_screen_px(hiyui_widget_t *w, hiyui_point_t point, hiyui_point_t *out)
```

Converts local physical coordinates to screen coordinates including ancestor transforms, NULL arguments return 0 and non-NULL output is zeroed.

### hiyui_wdg_get_state

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_state(hiyui_widget_t *w, hiyui_widget_state_t *out)
```

Queries the interaction state, NULL arguments return 0 and non-NULL output is zeroed.

### hiyui_wdg_redraw

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_redraw(hiyui_widget_t *w)
```

### hiyui_wdg_clickable

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clickable(hiyui_widget_t *w, int on)
```

### hiyui_wdg_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_focus(hiyui_widget_t *w)
```

### hiyui_wdg_add_to_group

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_add_to_group(hiyui_widget_t *w)
```

### hiyui_wdg_key_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_key_focus(hiyui_widget_t *w)
```

Focuses the widget and joins the keyboard navigation group.

### hiyui_wdg_get_viewport_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_viewport_metrics(hiyui_widget_t *w, int wide_min_width, hiyui_viewport_metrics_t *out)
```

Queries the current viewport of the widget.

Minimum logical width for the wide layout, must be greater than 0. Receives the query result on success. Returns 1 on success, 0 when arguments or the widget are invalid.

### hiyui_wdg_layout_environment

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_layout_environment(hiyui_widget_t *w, hiyui_layout_environment_t *out)
```

Queries the environment of the most recent layout without forcing a synchronous layout, call on the UI thread.

Returns 1 for a valid snapshot, 0 when out is NULL, and an invalid widget writes a default snapshot and returns 0.

### hiyui_wdg_on_environment_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_environment_change(hiyui_widget_t *w, hiyui_environment_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Appends an environment subscription notified with the first snapshot and later changes after layout completes, identical snapshots are not notified again. The handler is not called within the binding call stack, moves across parents follow the host, and cleanup happens on widget destruction. When the callback unbinds or destroys the widget, user_data is released after the current dispatch ends.

When not NULL it takes ownership of user_data, released once even if binding fails. May be NULL, otherwise must point to NULL, unbind through hiyui_event_off. 1 on successful binding, 0 for an invalid widget, NULL callback, or non-NULL output handle.

### hiyui_wdg_on_back_request

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_back_request(hiyui_widget_t *w, hiyui_back_request_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Appends a back request handler called before the default local back handling of this object, the first consumer ends routing. When the callback unbinds or destroys the widget, user_data is released after the current dispatch ends.

When not NULL it takes ownership of user_data, released once even if binding fails. May be NULL, otherwise must point to NULL, use the existing event handle to unbind and release. 1 on successful binding, 0 for an invalid widget, NULL callback, or non-NULL output handle.

### hiyui_wdg_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_align(hiyui_widget_t *w, hiyui_align_pos_t pos, int dx, int dy)
```

Aligns to a position relative to the parent widget, dx/dy are offsets.

### hiyui_wdg_bg

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_bg(hiyui_widget_t *w, uint32_t color)
```

### hiyui_wdg_bg_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_bg_role(hiyui_widget_t *w, hiyui_theme_role_t role)
```

### hiyui_wdg_surface

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_surface(hiyui_widget_t *w, hiyui_surface_role_t role)
```

Binds a surface material role, colors update with theme and DPI.

### hiyui_wdg_text_color

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_color(hiyui_widget_t *w, uint32_t color)
```

### hiyui_wdg_text_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_color_role(hiyui_widget_t *w, hiyui_theme_role_t role)
```

### hiyui_wdg_font_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_font_size(hiyui_widget_t *w, int size)
```

### hiyui_wdg_radius

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_radius(hiyui_widget_t *w, int r)
```

### hiyui_wdg_padding

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_padding(hiyui_widget_t *w, int h, int v)
```

### hiyui_wdg_padding_all

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_padding_all(hiyui_widget_t *w, int all)
```

### hiyui_wdg_pad_left

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_left(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_right

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_right(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_top

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_top(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_bottom

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_bottom(hiyui_widget_t *w, int v)
```

### hiyui_wdg_opacity

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_opacity(hiyui_widget_t *w, uint8_t opa)
```

### hiyui_wdg_underline

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_underline(hiyui_widget_t *w, int on)
```

### hiyui_wdg_apply_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style(hiyui_widget_t *w, const hiyui_style_t *s)
```

### hiyui_wdg_apply_style_set

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_set(hiyui_widget_t *w, const hiyui_style_set_t *ss)
```

### hiyui_wdg_transition_bg

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_transition_bg(hiyui_widget_t *w, uint32_t ms)
```

### hiyui_wdg_transition_all

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_transition_all(hiyui_widget_t *w, uint32_t ms)
```

### hiyui_wdg_on_click

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_click(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_press

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_press(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_long_press

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_long_press(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_wdg_on_size_changed

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_size_changed(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

Triggered after the widget size changes.

### hiyui_wdg_on_delete

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_delete(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

Triggered before the widget is destroyed, the callback must not access w.

### hiyui_wdg_on_theme_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_theme_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

Theme change callback, runs after setTheme refreshes styles and unbinds automatically when the widget is deleted.

### hiyui_wdg_on_dpi_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_dpi_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

DPI change callback, unbinds automatically when the widget is deleted.

### hiyui_wdg_tooltip

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_tooltip(hiyui_widget_t *w, const char *text)
```

### hiyui_wdg_tooltip_ex

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_tooltip_ex(hiyui_widget_t *w, const hiyui_tooltip_config_t *config)
```

### hiyui_tooltip_dismiss

```c
HIYUI_API void HIYUI_CALL hiyui_tooltip_dismiss(void)
```

### hiyui_wdg_accessibility

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility(hiyui_widget_t *w, const hiyui_accessibility_props_t *props)
```

Restores automatic semantics when props is NULL.

### hiyui_register_dpi_binding

```c
HIYUI_API int HIYUI_CALL hiyui_register_dpi_binding(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

Registers a callback to recompute on DPI changes, unregistered automatically when the widget is destroyed.

Returns 1 on successful registration, 0 for invalid arguments or registration failure.

### hiyui_wdg_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_destroy(hiyui_widget_t *w)
```

Destroys the widget, destroying the parent cascades to child widgets

### hiyui_wdg_clean

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clean(hiyui_widget_t *w)
```

Removes all child widgets

### hiyui_wdg_scroll_to_y

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_y(hiyui_widget_t *w, int y)
```

Scrolls to the given Y position

### hiyui_wdg_scrollable

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scrollable(hiyui_widget_t *w, int scrollable)
```

Sets scrollability, 0 disables

### hiyui_wdg_raw

```c
HIYUI_API struct _lv_obj_t *HIYUI_CALL hiyui_wdg_raw(hiyui_widget_t *w)
```

Returns the underlying lv_obj_t*, allowing mixed use of the raw LVGL API

### hiyui_debug_print_obj

```c
HIYUI_API void HIYUI_CALL hiyui_debug_print_obj(hiyui_widget_t *w, const char *name)
```

Debug prints object size, padding, and child count

### hiyui_debug_print_children

```c
HIYUI_API void HIYUI_CALL hiyui_debug_print_children(hiyui_widget_t *w, const char *prefix)
```

Debug prints width and height of all child objects

### hiyui_wdg_press_lock

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_press_lock(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_elastic

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_elastic(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_momentum

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_momentum(hiyui_widget_t *w, int value)
```

### hiyui_wdg_enable_pc_scroll

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_enable_pc_scroll(hiyui_widget_t *w)
```

### hiyui_wdg_apply_scrollbar_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_scrollbar_style(hiyui_widget_t *w)
```

Applies the native scrollbar normal and scrolling styles, NULL does nothing.
