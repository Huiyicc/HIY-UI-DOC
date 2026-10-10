---
title: "FrameNavigationToggle"
---

# FrameNavigationToggle <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

控制所在 `WindowFrame` 导航区域的按钮。

Drawer 呈现时显示，其他呈现方式下隐藏。按钮必须位于 `WindowFrame` 子树内。

**继承自：** `hiyui::Chainable< FrameNavigationToggle, Button >`

## 公开方法

### FrameNavigationToggle

```cpp
FrameNavigationToggle(lv_obj_t *raw)
```

包装已有导航切换按钮对象。

### init

```cpp
FrameNavigationToggle & init(lv_obj_t *parent) &
```

在 `WindowFrame` 子树中创建导航切换按钮，找不到框架时不创建。
