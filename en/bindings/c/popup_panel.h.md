---
title: "popup_panel.h"
---

# popup_panel.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/popup_panel.h>`

Floating panel positioned relative to an anchor

open takes an anchor and a content build callback, and handles positioning, outside-click close, ESC close, ancestor-scroll close, and the open animation. Child widgets created inside builder attach to the panel container and are destroyed on close.

## Enums

### hiyui_popup_placement_t

| Value | Description |
|---|---|
| `HIYUI_POPUP_PLACEMENT_BOTTOM_START` = 0 |  |
| `HIYUI_POPUP_PLACEMENT_BOTTOM_END` |  |
| `HIYUI_POPUP_PLACEMENT_TOP_START` |  |
| `HIYUI_POPUP_PLACEMENT_TOP_END` |  |
| `HIYUI_POPUP_PLACEMENT_RIGHT_START` |  |
| `HIYUI_POPUP_PLACEMENT_LEFT_START` |  |

## Type Aliases

### hiyui_popup_panel_t

```c
typedef struct hiyui_popup_panel_s hiyui_popup_panel_t
```

### hiyui_popup_panel_build_fn

```c
typedef void(* hiyui_popup_panel_build_fn) (hiyui_widget_t *panel, void *ud)
```

Content build callback; panel is the panel content container

## Functions

### hiyui_popup_panel_create

```c
HIYUI_API hiyui_popup_panel_t *HIYUI_CALL hiyui_popup_panel_create(const hiyui_popup_panel_props_t *props)
```

Creates a floating panel; NULL props uses all defaults

### hiyui_popup_panel_open

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_open(hiyui_popup_panel_t *pp, hiyui_widget_t *anchor, hiyui_popup_panel_build_fn builder, void *ud)
```

Opens the panel; anchor is the positioning anchor

### hiyui_popup_panel_close

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_close(hiyui_popup_panel_t *pp)
```

### hiyui_popup_panel_is_open

```c
HIYUI_API int HIYUI_CALL hiyui_popup_panel_is_open(hiyui_popup_panel_t *pp)
```

### hiyui_popup_panel_on_close

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_on_close(hiyui_popup_panel_t *pp, void(*cb)(void *), void *ud)
```

### hiyui_popup_panel_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_destroy(hiyui_popup_panel_t *pp)
```

Destroys the panel; the handle is invalid afterwards
