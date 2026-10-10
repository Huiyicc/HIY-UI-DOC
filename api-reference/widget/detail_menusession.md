---
title: "detail::MenuSession"
---

# detail::MenuSession <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/detail/menu_panel.h>`

**命名空间：** `hiyui`

菜单弹出会话运行时状态

Inline 模式：rootPanel/overlay/subPanels 挂主 screen。 `Window` 模式：popupDisp 持有独立离屏 display，rootPanel 挂其 screen， 子菜单为 childSessions（每级一个独立 popup）。

## 公开成员

### panelMaxH

```cpp
int32_t panelMaxH
```

面板高度上限，画布像素，0 = 不封顶

### anchorPressToggles

```cpp
bool anchorPressToggles
```

锚点按压走 toggle 关闭，不按外部点击处理
