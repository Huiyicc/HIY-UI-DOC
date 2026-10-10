---
title: "Event"
---

# Event <Badge type="info" text="类" />

**头文件：** `#include <hiyui/event/callback.h>`

**命名空间：** `hiyui`

LVGL 事件的 C++ 包装，提供类型安全的事件访问

封装 lv_event_t 指针，在带参回调中作为参数传入。



**参见：** `Callback`


**参见：** `EventCallback`

## 公开方法

### Event

```cpp
Event(lv_event_t *e)
```

构造 `Event` 包装

| 参数 | 说明 |
|---|---|
| `e` | LVGL 事件指针，由事件系统传入 |

### userData

```cpp
void * userData() const
```

获取事件携带的用户数据

**返回值：** 用户数据指针，由 lv_obj_add_event_cb 的 user_data 参数传入

### data

```cpp
void * data() const
```

同步事件参数，仅在回调期间有效，可为空。

### key

```cpp
uint32_t key() const
```

获取键盘事件按键码，仅 `EventCode::Key` 等键盘回调有效

**返回值：** LVGL 按键码，如 LV_KEY_UP / LV_KEY_ENTER 等

### target

```cpp
lv_obj_t * target() const
```

获取事件目标对象，实际触发事件的对象，可能是子对象。

### currentTarget

```cpp
lv_obj_t * currentTarget() const
```

获取当前事件传播对象，挂载该回调的对象。

### targetWidget

```cpp
Widget targetWidget() const
```

获取事件目标的借用包装器

**返回值：** 非拥有包装器，仅限回调内使用，不得保存到回调之外

### currentTargetWidget

```cpp
Widget currentTargetWidget() const
```

获取挂载当前回调的借用包装器，仅限当前回调内使用。

### keyCode

```cpp
KeyCode keyCode() const
```

获取导航按键；非按键事件返回 KeyCode::None。

### pointerPositionPx

```cpp
bool pointerPositionPx(Point &point) const
```

获取相对当前传播对象左上角的指针坐标，单位为物理像素。

**返回值：** 没有指针输入时返回 false，并将 point 清零。

### stopBubbling

```cpp
void stopBubbling()
```

停止向祖先传播当前事件。

### stopProcessing

```cpp
void stopProcessing()
```

停止后续处理器；Delete 事件不允许停止生命周期清理，调用无操作。
