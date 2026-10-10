---
title: "dock.h"
---

# dock.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/dock.h>`

停靠窗口容器

## 枚举

### hiyui_dock_edge_t

| 值 | 说明 |
|---|---|
| `HIYUI_DOCK_EDGE_DEFAULT` = 0 |  |
| `HIYUI_DOCK_EDGE_LEFT` |  |
| `HIYUI_DOCK_EDGE_TOP` |  |
| `HIYUI_DOCK_EDGE_RIGHT` |  |
| `HIYUI_DOCK_EDGE_BOTTOM` |  |
| `HIYUI_DOCK_EDGE_CENTER` |  |

### hiyui_dock_event_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_DOCK_EVENT_PANE_ACTIVATED` = 0 |  |
| `HIYUI_DOCK_EVENT_CLOSE_REQUEST` |  |
| `HIYUI_DOCK_EVENT_PANE_DOCKED` |  |
| `HIYUI_DOCK_EVENT_PANE_FLOATED` |  |
| `HIYUI_DOCK_EVENT_PANE_HIDDEN` |  |
| `HIYUI_DOCK_EVENT_PANE_SHOWN` |  |
| `HIYUI_DOCK_EVENT_LAYOUT_CHANGED` |  |

## 类型别名

### hiyui_dock_event_fn

```c
typedef void(* hiyui_dock_event_fn) (const hiyui_dock_event_t *event, void *user_data)
```

### hiyui_dock_snapshot_t

```c
typedef struct hiyui_dock_snapshot_s hiyui_dock_snapshot_t
```

## 函数

### hiyui_dock_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_create(hiyui_widget_t *parent, const hiyui_dock_props_t *props)
```

创建停靠容器；parent 为 NULL 时返回 NULL。

### hiyui_dock_pane_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_pane_create(hiyui_widget_t *dock, const hiyui_dock_pane_props_t *props)
```

在停靠容器上创建面板内容容器，须再经 hiyui_dock_add_pane 进入布局。

**返回值：** 面板组件；dock 为 NULL 时返回 NULL。

### hiyui_dock_add_pane

```c
HIYUI_API int HIYUI_CALL hiyui_dock_add_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

按面板属性声明的边停靠；面板不属于本容器时不改变状态。

### hiyui_dock_remove_pane

```c
HIYUI_API int HIYUI_CALL hiyui_dock_remove_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

移除面板并从注册表注销；面板不属于本容器时不改变状态。

### hiyui_dock_hide_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_hide_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

隐藏面板，保留注册与原位置记录，可经 hiyui_dock_show_pane 恢复。

### hiyui_dock_show_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_show_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

恢复隐藏面板，优先回到隐藏前所在组与 tab 位置。

### hiyui_dock_activate_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_activate_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

激活面板所在的 tab 或将其置于浮动窗最前。

### hiyui_dock_set_floating

```c
HIYUI_API void HIYUI_CALL hiyui_dock_set_floating(hiyui_widget_t *dock, hiyui_widget_t *pane, int floating)
```

编程切换面板的浮动状态；floating 非 0 转为浮动。

### hiyui_dock_pane_count

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_count(hiyui_widget_t *dock)
```

**返回值：** 已注册面板数量；dock 为 NULL 时返回 0。

### hiyui_dock_pane_by_name

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_pane_by_name(hiyui_widget_t *dock, const char *name)
```

**返回值：** 面板组件；未找到或参数无效时返回 NULL。

### hiyui_dock_pane_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_title(hiyui_widget_t *pane, const char *title)
```

### hiyui_dock_pane_set_closable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_closable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_set_movable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_movable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_set_floatable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_floatable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_name

```c
HIYUI_API const char *HIYUI_CALL hiyui_dock_pane_name(hiyui_widget_t *pane)
```

**返回值：** 面板唯一名；pane 未注册时返回 NULL。

### hiyui_dock_pane_is_floating

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_is_floating(hiyui_widget_t *pane)
```

**返回值：** 处于浮动状态返回 1；其余返回 0。

### hiyui_dock_pane_is_shown

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_is_shown(hiyui_widget_t *pane)
```

**返回值：** 处于显示状态返回 1；其余返回 0。

### hiyui_dock_save_layout

```c
HIYUI_API hiyui_dock_snapshot_t *HIYUI_CALL hiyui_dock_save_layout(hiyui_widget_t *dock)
```

保存当前布局快照，含浮动几何与隐藏列表。

**返回值：** 快照句柄，须由 hiyui_dock_snapshot_destroy 释放；dock 为 NULL 时返回 NULL。

### hiyui_dock_restore_layout

```c
HIYUI_API int HIYUI_CALL hiyui_dock_restore_layout(hiyui_widget_t *dock, const hiyui_dock_snapshot_t *snapshot)
```

恢复布局快照，按面板名匹配已注册面板；未注册的名字被跳过。

**返回值：** 成功返回 1；参数无效返回 0。

### hiyui_dock_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_dock_snapshot_destroy(hiyui_dock_snapshot_t *snapshot)
```

释放快照句柄；传 NULL 安全。

### hiyui_dock_on_pane_event

```c
HIYUI_API int HIYUI_CALL hiyui_dock_on_pane_event(hiyui_widget_t *dock, hiyui_dock_event_type_t type, hiyui_dock_event_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定面板业务事件，订阅追加；解绑经返回的句柄进行。

**返回值：** 注册成功返回 1；参数无效返回 0。
