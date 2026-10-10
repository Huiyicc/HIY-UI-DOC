---
title: "detail::MenuSession"
---

# detail::MenuSession <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/detail/menu_panel.h>`

**Namespace:** `hiyui`

Menu popup session runtime state

Inline mode: rootPanel, overlay and subPanels attach to the main screen. Window mode: popupDisp holds an independent offscreen display, rootPanel attaches to its screen, and submenus are childSessions with one independent popup per level.

## Public Members

### panelMaxH

```cpp
int32_t panelMaxH
```

Panel height limit in canvas pixels; 0 = no limit

### anchorPressToggles

```cpp
bool anchorPressToggles
```

Anchor press closes via toggle and is not handled as an outside click
