---
title: "system_tray.h"
---

# system_tray.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/system_tray.h>`

系统托盘

Windows 和 macOS 提供原生托盘。其他平台的句柄可创建但 valid() 返回 0， 其余操作静默无效。

## 枚举

### hiyui_tray_icon_t

| 值 | 说明 |
|---|---|
| `HIYUI_TRAY_ICON_SELF` = 0 |  |
| `HIYUI_TRAY_ICON_NONE` |  |
| `HIYUI_TRAY_ICON_CUSTOM` |  |

### hiyui_tray_message_icon_t

| 值 | 说明 |
|---|---|
| `HIYUI_TRAY_MESSAGE_ICON_NONE` = 0 |  |
| `HIYUI_TRAY_MESSAGE_ICON_INFO` |  |
| `HIYUI_TRAY_MESSAGE_ICON_WARNING` |  |
| `HIYUI_TRAY_MESSAGE_ICON_CRITICAL` |  |

## 类型别名

### hiyui_system_tray_t

```c
typedef struct hiyui_system_tray_s hiyui_system_tray_t
```

### hiyui_system_tray_click_fn

```c
typedef void(* hiyui_system_tray_click_fn) (int32_t screen_x, int32_t screen_y, void *user_data)
```

### hiyui_system_tray_notify_fn

```c
typedef void(* hiyui_system_tray_notify_fn) (void *user_data)
```

## 函数

### hiyui_system_tray_create

```c
HIYUI_API hiyui_system_tray_t *HIYUI_CALL hiyui_system_tray_create(hiyui_win_t *host_win, const hiyui_system_tray_props_t *props)
```

创建托盘并绑定宿主窗口；props 为 NULL 时使用默认图标属性。

### hiyui_system_tray_valid

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_system_tray_valid(const hiyui_system_tray_t *tray)
```

查询托盘是否由当前平台创建成功。

### hiyui_system_tray_on_left_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_left_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

设置左键单击回调。传入 NULL 清除回调。

### hiyui_system_tray_on_right_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_right_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

设置右键单击回调；有菜单时右键事件由菜单接管。

### hiyui_system_tray_on_double_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_double_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

设置左键双击回调。传入 NULL 清除回调。

### hiyui_system_tray_on_middle_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_middle_click(hiyui_system_tray_t *tray, hiyui_system_tray_click_fn callback, void *user_data)
```

设置中键单击回调。传入 NULL 清除回调。

### hiyui_system_tray_on_message_click

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_on_message_click(hiyui_system_tray_t *tray, hiyui_system_tray_notify_fn callback, void *user_data)
```

设置气泡通知点击回调。传入 NULL 清除回调。

### hiyui_system_tray_set_menu

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_menu(hiyui_system_tray_t *tray, const hiyui_context_menu_item_t *items, int count)
```

设置右键弹出的菜单；菜单文本和快捷键字符串在调用期间复制。

### hiyui_system_tray_set_menu_max_height

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_menu_max_height(hiyui_system_tray_t *tray, int32_t max_height)
```

设置托盘菜单面板高度上限；max_height 为 0 使用屏幕工作区高度的 70。

### hiyui_system_tray_set_icon

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_icon(hiyui_system_tray_t *tray, hiyui_tray_icon_t icon, const void *icon_src)
```

运行时更换图标；icon_src 仅在 CUSTOM 时读取。

### hiyui_system_tray_set_tooltip

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_set_tooltip(hiyui_system_tray_t *tray, const char *text)
```

运行时更换 UTF-8 提示文本。

### hiyui_system_tray_show_message

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_show_message(hiyui_system_tray_t *tray, const char *title, const char *text, hiyui_tray_message_icon_t icon, uint32_t timeout_ms)
```

显示气泡通知；仅 Windows 原生支持，其余平台静默无效。

### hiyui_system_tray_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_system_tray_destroy(hiyui_system_tray_t *tray)
```

销毁托盘句柄。
