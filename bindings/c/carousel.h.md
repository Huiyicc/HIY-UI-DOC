---
title: "carousel.h"
---

# carousel.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/carousel.h>`

走马灯，对齐 hiyui::Carousel

## 枚举

### hiyui_carousel_indicator_pos_t

| 值 | 说明 |
|---|---|
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_LEFT` = 0 |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_CENTER` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_TOP_RIGHT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_MIDDLE_LEFT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_MIDDLE_RIGHT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_LEFT` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_CENTER` |  |
| `HIYUI_CAROUSEL_INDICATOR_POS_BOTTOM_RIGHT` |  |

## 类型别名

### hiyui_carousel_page_fn

```c
typedef void(* hiyui_carousel_page_fn) (hiyui_widget_t *page, void *ud)
```

### hiyui_carousel_change_fn

```c
typedef void(* hiyui_carousel_change_fn) (int index, void *ud)
```

## 函数

### hiyui_carousel_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_carousel_create(hiyui_widget_t *parent, const hiyui_carousel_props_t *props)
```

### hiyui_carousel_add_image_page

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_add_image_page(hiyui_widget_t *w, const hiyui_carousel_image_page_t *page, hiyui_notify_t notify)
```

追加图片页，src 为文件路径或 lv_image_dsc_t*；fit 默认 Cover

### hiyui_carousel_add_page

```c
HIYUI_API void HIYUI_CALL hiyui_carousel_add_page(hiyui_widget_t *w, hiyui_carousel_page_fn builder, void *ud, hiyui_notify_t notify)
```

追加自定义页，builder 在页容器内构建子组件

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

当前页索引变化回调
