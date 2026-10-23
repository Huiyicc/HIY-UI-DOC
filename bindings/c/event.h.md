---
title: "event.h"
---

# event.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/event.h>`

## 枚举

### hiyui_event_code_t

| 值 | 说明 |
|---|---|
| `HIYUI_EVENT_UNKNOWN` = -1 |  |
| `HIYUI_EVENT_PRESSED` = 0 |  |
| `HIYUI_EVENT_PRESSING` |  |
| `HIYUI_EVENT_PRESS_LOST` |  |
| `HIYUI_EVENT_SHORT_CLICKED` |  |
| `HIYUI_EVENT_SINGLE_CLICKED` |  |
| `HIYUI_EVENT_DOUBLE_CLICKED` |  |
| `HIYUI_EVENT_TRIPLE_CLICKED` |  |
| `HIYUI_EVENT_LONG_PRESSED` |  |
| `HIYUI_EVENT_LONG_PRESS_REPEAT` |  |
| `HIYUI_EVENT_CLICKED` |  |
| `HIYUI_EVENT_RELEASED` |  |
| `HIYUI_EVENT_SCROLL_BEGIN` |  |
| `HIYUI_EVENT_SCROLL_END` |  |
| `HIYUI_EVENT_SCROLL` |  |
| `HIYUI_EVENT_GESTURE` |  |
| `HIYUI_EVENT_KEY` |  |
| `HIYUI_EVENT_FOCUSED` |  |
| `HIYUI_EVENT_DEFOCUSED` |  |
| `HIYUI_EVENT_LEAVE` |  |
| `HIYUI_EVENT_VALUE_CHANGED` |  |
| `HIYUI_EVENT_READY` |  |
| `HIYUI_EVENT_DELETE` |  |
| `HIYUI_EVENT_CHILD_CHANGED` |  |
| `HIYUI_EVENT_SIZE_CHANGED` |  |
| `HIYUI_EVENT_STYLE_CHANGED` |  |
| `HIYUI_EVENT_HOVER_OVER` |  |
| `HIYUI_EVENT_HOVER_LEAVE` |  |
| `HIYUI_EVENT_CANCEL` |  |
| `HIYUI_EVENT_STATE_CHANGED` |  |
| `HIYUI_EVENT_LAYOUT_CHANGED` |  |
| `HIYUI_EVENT_LAYOUT_COMPLETED` |  |
| `HIYUI_EVENT_INPUT_KEY` |  |
| `HIYUI_EVENT_KEY_PREVIEW` |  |
| `HIYUI_EVENT_CUSTOM_BEGIN` = 0x10000 |  |

### hiyui_key_code_t

| 值 | 说明 |
|---|---|
| `HIYUI_KEY_NONE` = 0 |  |
| `HIYUI_KEY_HOME` = 2 |  |
| `HIYUI_KEY_END` = 3 |  |
| `HIYUI_KEY_BACKSPACE` = 8 |  |
| `HIYUI_KEY_NEXT` = 9 |  |
| `HIYUI_KEY_ENTER` = 10 |  |
| `HIYUI_KEY_PREVIOUS` = 11 |  |
| `HIYUI_KEY_UP` = 17 |  |
| `HIYUI_KEY_DOWN` = 18 |  |
| `HIYUI_KEY_RIGHT` = 19 |  |
| `HIYUI_KEY_LEFT` = 20 |  |
| `HIYUI_KEY_ESCAPE` = 27 |  |
| `HIYUI_KEY_SPACE` = 32 |  |
| `HIYUI_KEY_DELETE` = 127 |  |

## 类型别名

### hiyui_event_t

```c
typedef struct hiyui_event_s hiyui_event_t
```

仅在对应事件回调内有效的借用事件。

### hiyui_event_handle_t

```c
typedef struct hiyui_event_handle_s hiyui_event_handle_t
```

事件订阅句柄，由 hiyui_event_handle_destroy 释放。

### hiyui_event_fn

```c
typedef void(HIYUI_CALL * hiyui_event_fn) (hiyui_event_t *event, void *user_data)
```

在 UI 线程同步调用；事件及其借用对象不得保存到回调之外。

### hiyui_mouse_move_fn

```c
typedef void(HIYUI_CALL * hiyui_mouse_move_fn) (int screen_x, int screen_y, int local_x, int local_y, void *user_data)
```

### hiyui_mouse_wheel_fn

```c
typedef void(HIYUI_CALL * hiyui_mouse_wheel_fn) (int local_x, int local_y, int delta_y, void *user_data)
```

## 函数

### hiyui_wdg_on

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on(hiyui_widget_t *widget, hiyui_event_code_t code, hiyui_event_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

追加事件订阅，组件删除或主动解绑后释放 user_data。

| 参数 | 说明 |
|---|---|
| `destroy` | 非 NULL 时接管 user_data，注册失败时也调用；执行中的回调返回后才释放。 |
| `out_handle` | 可为 NULL；非空时 *out_handle 必须为 NULL，成功返回的句柄需单独释放。 |


**返回值：** 注册成功返回 1，失败返回 0；未请求句柄时订阅持续到组件删除。

### hiyui_event_register

```c
HIYUI_API hiyui_event_code_t HIYUI_CALL hiyui_event_register(void)
```

在 UI 线程分配自定义事件编号，在进程内保持有效，不重复使用。

### hiyui_wdg_send_event

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_send_event(hiyui_widget_t *widget, hiyui_event_code_t code, void *data)
```

同步发送事件，data 借用至调用返回；DELETE、无效编号或 NULL 组件返回 0。 KEY_PREVIEW 不允许手动发送。KEY 和 INPUT_KEY 的 data 指向 uint32_t 键值；其他内置事件需满足对应事件的数据契约。

### hiyui_event_data

```c
HIYUI_API void *HIYUI_CALL hiyui_event_data(const hiyui_event_t *event)
```

事件附加数据，仅在当前回调内有效；NULL 事件返回 NULL。

### hiyui_event_off

```c
HIYUI_API void HIYUI_CALL hiyui_event_off(hiyui_event_handle_t *handle)
```

解绑；重复调用、NULL 及组件删除后调用均无额外效果。

### hiyui_event_connected

```c
HIYUI_API int HIYUI_CALL hiyui_event_connected(const hiyui_event_handle_t *handle)
```

是否仍能接收事件，NULL 返回 0。

### hiyui_event_handle_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_event_handle_destroy(hiyui_event_handle_t *handle)
```

解绑并释放句柄；NULL 安全，非空句柄只能释放一次。

### hiyui_event_code

```c
HIYUI_API hiyui_event_code_t HIYUI_CALL hiyui_event_code(const hiyui_event_t *event)
```

NULL 或未映射的事件返回 HIYUI_EVENT_UNKNOWN。

### hiyui_event_key

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_event_key(const hiyui_event_t *event)
```

字符键保留原始键值；非按键事件或 NULL 返回 HIYUI_KEY_NONE。

### hiyui_event_target

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_event_target(const hiyui_event_t *event)
```

返回实际触发事件的借用组件，NULL 事件返回 NULL。

### hiyui_event_current_target

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_event_current_target(const hiyui_event_t *event)
```

返回挂载回调的借用组件，NULL 事件返回 NULL。

### hiyui_event_pointer_position_px

```c
HIYUI_API int HIYUI_CALL hiyui_event_pointer_position_px(const hiyui_event_t *event, hiyui_point_t *out)
```

获取当前传播对象的局部物理坐标；无指针输入返回 0 并清零输出。

### hiyui_event_stop_bubbling

```c
HIYUI_API void HIYUI_CALL hiyui_event_stop_bubbling(hiyui_event_t *event)
```

### hiyui_event_stop_processing

```c
HIYUI_API void HIYUI_CALL hiyui_event_stop_processing(hiyui_event_t *event)
```

停止后续事件处理；DELETE 事件不允许停止生命周期清理，调用无操作。

### hiyui_mouse_move_register

```c
HIYUI_API int HIYUI_CALL hiyui_mouse_move_register(hiyui_widget_t *widget, hiyui_mouse_move_fn cb, void *user_data, hiyui_destroy_fn destroy)
```

Appends a move listener; deletion or unregister releases user_data. Non-desktop builds return 0.

### hiyui_mouse_wheel_register

```c
HIYUI_API int HIYUI_CALL hiyui_mouse_wheel_register(hiyui_widget_t *widget, hiyui_mouse_wheel_fn cb, void *user_data, hiyui_destroy_fn destroy)
```

Replaces the wheel listener; deletion or unregister releases user_data. Non-desktop builds return 0.

### hiyui_mouse_move_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_mouse_move_unregister(hiyui_widget_t *widget)
```

### hiyui_mouse_wheel_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_mouse_wheel_unregister(hiyui_widget_t *widget)
```
