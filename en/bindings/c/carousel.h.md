---
title: "carousel.h"
---

# carousel.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/carousel.h>`

Carousel, aligned with hiyui::Carousel

## Enums

### hiyui_carousel_indicator_pos_t

| Value | Description |
|---|---|
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_LEFT` = 0 |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_CENTER` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_RIGHT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_MIDDLE_LEFT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_MIDDLE_RIGHT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_LEFT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_CENTER` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_RIGHT` |  |

## Type Aliases

### hiyui_carousel_page_fn

```c
typedef void(HIYUI_CALL * hiyui_carousel_page_fn) (hiyui_widget_t *page, void *ud)
```

### hiyui_carousel_change_fn

```c
typedef void(HIYUI_CALL * hiyui_carousel_change_fn) (int index, void *ud)
```

## Functions

### hiyui_carousel_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_carousel_create(hiyui_widget_t *parent, const hiyui_carousel_props_t *props)
```

### hiyui_carousel_add_image_page

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_add_image_page(hiyui_widget_t *w, const hiyui_carousel_image_page_t *page, hiyui_notify_t notify)
```

Appends an image page; src is a file path or an lv_image_dsc_t pointer, fit defaults to Cover

### hiyui_carousel_add_page

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_add_page(hiyui_widget_t *w, hiyui_carousel_page_fn builder, void *ud, hiyui_notify_t notify)
```

Appends a custom page; builder builds child widgets inside the page container

### hiyui_carousel_set_current

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_set_current(hiyui_widget_t *w, int index, int animated, hiyui_notify_t notify)
```

### hiyui_carousel_get_current

```c
HIYUI_API int HIYUI_CALL hiyui_carousel_get_current(hiyui_widget_t *w)
```

### hiyui_carousel_page_count

```c
HIYUI_API int HIYUI_CALL hiyui_carousel_page_count(hiyui_widget_t *w)
```

### hiyui_carousel_next

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_next(hiyui_widget_t *w, int animated, hiyui_notify_t notify)
```

### hiyui_carousel_prev

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_prev(hiyui_widget_t *w, int animated, hiyui_notify_t notify)
```

### hiyui_carousel_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_carousel_on_change(hiyui_widget_t *widget, hiyui_carousel_change_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Current page index change callback
