---
title: "detail::MenuSession"
---

# detail::MenuSession <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/detail/menu_panel.h>`

**Namespace:** `hiyui`

Runtime state of a menu popup session

Inline mode: rootPanel, overlay and subPanels attach to the main screen. Window mode: popupDisp owns a separate offscreen display, rootPanel attaches to its screen, and submenus are childSessions with one popup per level.

## Public Members

### panelMaxH

```cpp
int32_t panelMaxH
```

Panel height limit in canvas pixels; 0 means no limit

### anchorPressToggles

```cpp
bool anchorPressToggles
```

Anchor press closes via toggle instead of being handled as an outside click
