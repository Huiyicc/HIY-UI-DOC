---
title: "popup_panel.h"
---

# popup_panel.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/popup_panel.h>`

浮层面板，相对锚点定位

open 时传入锚点与内容构造回调，自动处理定位、外击关闭、ESC 关闭、 祖先滚动关闭与展开动画。builder 内创建的子组件挂在面板容器上， close 后随之销毁。

## 枚举

### hiyui_popup_placement_t

| 值 | 说明 |
|---|---|
| `HIYUI_POPUP_PLACEMENT_BOTTOM_START` = 0 |  |
| `HIYUI_POPUP_PLACEMENT_BOTTOM_END` |  |
| `HIYUI_POPUP_PLACEMENT_TOP_START` |  |
| `HIYUI_POPUP_PLACEMENT_TOP_END` |  |
| `HIYUI_POPUP_PLACEMENT_RIGHT_START` |  |
| `HIYUI_POPUP_PLACEMENT_LEFT_START` |  |

## 类型别名

### hiyui_popup_panel_t

```c
typedef struct hiyui_popup_panel_s hiyui_popup_panel_t
```

### hiyui_popup_panel_build_fn

```c
typedef void(HIYUI_CALL * hiyui_popup_panel_build_fn) (hiyui_widget_t *panel, void *ud)
```

内容构造回调，panel 为面板内容容器

## 函数

### hiyui_popup_panel_create

```c
HIYUI_API hiyui_popup_panel_t *HIYUI_CALL hiyui_popup_panel_create(const hiyui_popup_panel_props_t *props)
```

创建浮层面板，props 为 NULL 时全默认

### hiyui_popup_panel_open

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_open(hiyui_popup_panel_t *pp, hiyui_widget_t *anchor, hiyui_popup_panel_build_fn builder, void *ud)
```

打开浮层，anchor 为定位锚点

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
HIYUI_API void HIYUI_CALL hiyui_popup_panel_on_close(hiyui_popup_panel_t *pp, void(HIYUI_CALL *cb)(void *), void *ud)
```

### hiyui_popup_panel_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_popup_panel_destroy(hiyui_popup_panel_t *pp)
```

销毁浮层面板，之后句柄不可用
