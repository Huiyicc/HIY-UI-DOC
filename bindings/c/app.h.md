---
title: "app.h"
---

# app.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/app.h>`

应用生命周期 + 窗口管理

## 宏定义

### HIYUI_HAS_WINDOW_MANAGER

1 when the target supports independent operating-system windows.

## 枚举

### hiyui_win_anim_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_WIN_ANIM_NONE` = 0 |  |
| `HIYUI_WIN_ANIM_FADE` |  |
| `HIYUI_WIN_ANIM_SCALE` |  |
| `HIYUI_WIN_ANIM_ELASTIC_SCALE` |  |
| `HIYUI_WIN_ANIM_FLIP_3D` |  |

### hiyui_win_background_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_WIN_BACKGROUND_CONTENT` = 0 |  |
| `HIYUI_WIN_BACKGROUND_TRANSPARENT` |  |
| `HIYUI_WIN_BACKGROUND_SYSTEM_BLUR` |  |

### hiyui_transition_t

| 值 | 说明 |
|---|---|
| `HIYUI_TRANSITION_NONE` = 0 |  |
| `HIYUI_TRANSITION_SLIDE_LEFT` |  |
| `HIYUI_TRANSITION_SLIDE_RIGHT` |  |
| `HIYUI_TRANSITION_SLIDE_UP` |  |
| `HIYUI_TRANSITION_SLIDE_DOWN` |  |
| `HIYUI_TRANSITION_FADE` |  |

## 类型别名

### hiyui_win_close_event_t

```c
typedef struct hiyui_win_close_event_s hiyui_win_close_event_t
```

### hiyui_win_close_request_fn

```c
typedef void(HIYUI_CALL * hiyui_win_close_request_fn) (hiyui_win_close_event_t *event, void *user_data)
```

## 函数

### hiyui_run

```c
HIYUI_API int HIYUI_CALL hiyui_run(hiyui_setup_fn setup, void *user_data)
```

启动应用主循环，内部调用 setup 后进入 LVGL 事件循环

### hiyui_quit

```c
HIYUI_API void HIYUI_CALL hiyui_quit(void)
```

退出应用，在事件回调中调用

### hiyui_c_version

```c
HIYUI_API const char *HIYUI_CALL hiyui_c_version(void)
```

所链接库的完整版本字符串，含预发布标识，如 "0.1.0-rc.1"

### hiyui_c_version_number

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_c_version_number(void)
```

数值版本，(主 &lt;&lt; 16) | (次 &lt;&lt; 8) | 修订

### hiyui_win_create

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_win_create(hiyui_app_t *app, const char *title, int width, int height)
```

创建窗口（可调整大小，有边框）

### hiyui_win_create_ex

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_win_create_ex(hiyui_app_t *app, const char *title, int width, int height, int flags)
```

创建窗口（带标志位）

### hiyui_win_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_title(hiyui_win_t *win, const char *title)
```

设置窗口标题

### hiyui_win_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_size(hiyui_win_t *win, int width, int height)
```

设置窗口尺寸，height 为内容区高度，borderless 时标题栏与菜单栏在此基础上叠加

### hiyui_win_show

```c
HIYUI_API void HIYUI_CALL hiyui_win_show(hiyui_win_t *win)
```

显示窗口

### hiyui_win_hide

```c
HIYUI_API void HIYUI_CALL hiyui_win_hide(hiyui_win_t *win)
```

隐藏窗口

### hiyui_win_is_shown

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_win_is_shown(const hiyui_win_t *win)
```

查询窗口是否显示

### hiyui_win_set_root

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_root(hiyui_win_t *win, hiyui_widget_t *root)
```

设置窗口根组件（接管 widget 所有权）

### hiyui_win_close

```c
HIYUI_API void HIYUI_CALL hiyui_win_close(hiyui_win_t *win)
```

关闭窗口

### hiyui_win_request_back

```c
HIYUI_API int HIYUI_CALL hiyui_win_request_back(hiyui_win_t *win)
```

同步处理浮层、输入取消、局部区域和当前页面历史；根页面不退出应用。

**返回值：** 已消费为 1；NULL、已关闭、未显示、非活动共享页面、重复进入或无处理为 0。

### hiyui_win_screen

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_win_screen(hiyui_win_t *win)
```

获取窗口当前 screen 对象

### hiyui_app_open_window

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_app_open_window(const hiyui_win_props_t *props)
```

运行时新建窗口（不必在 setup 内），等价 C++ Application::openWindow。

**返回值：** 新窗口句柄；无活动应用时返回 NULL。 非 per-pixel-alpha 平台 Scale/ElasticScale/Flip3D 降级为 None。

### hiyui_app_navigate

```c
HIYUI_API int HIYUI_CALL hiyui_app_navigate(hiyui_win_t *win, hiyui_transition_t transition)
```

页面导航；记录历史，重复导航当前目标不增加历史。

### hiyui_app_go_back

```c
HIYUI_API int HIYUI_CALL hiyui_app_go_back(hiyui_transition_t transition)
```

关闭当前导航页并恢复上一页；根页面上无效果。

### hiyui_win_set_background

```c
HIYUI_API void HIYUI_CALL hiyui_win_set_background(hiyui_win_t *win, const hiyui_win_background_t *background)
```

替换窗口背景；NULL 恢复主题底色。

### hiyui_win_get_background_mode

```c
HIYUI_API hiyui_win_background_mode_t HIYUI_CALL hiyui_win_get_background_mode(hiyui_win_t *win)
```

查询窗口采用的背景模式。

**返回值：** 创建失败或移出后返回 HIYUI_WIN_BACKGROUND_CONTENT。

### hiyui_win_close_event_cancel

```c
HIYUI_API void HIYUI_CALL hiyui_win_close_event_cancel(hiyui_win_close_event_t *event)
```

取消本次关闭请求；event 仅在回调期间有效。

### hiyui_win_on_close_request

```c
HIYUI_API int HIYUI_CALL hiyui_win_on_close_request(hiyui_win_t *win, hiyui_win_close_request_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定关闭请求回调，重复绑定追加；任一回调取消即保留窗口。 窗口关闭时绑定自动释放。

**返回值：** 注册成功返回 1；参数无效或窗口已请求销毁返回 0。

### hiyui_win_menu

```c
HIYUI_API void HIYUI_CALL hiyui_win_menu(hiyui_win_t *win, const hiyui_menu_bar_item_t *items, int count)
```

设置窗口应用菜单，仅 borderless 桌面窗口生效，其他平台静默忽略。
