---
title: "misc.h"
---

# misc.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/misc.h>`

定时器、延时回调、UI 线程投递与快捷键

## 枚举

### hiyui_post_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_POST_ACCEPTED` = 0 |  |
| `HIYUI_POST_QUEUE_FULL` |  |
| `HIYUI_POST_STOPPED` |  |

## 类型别名

### hiyui_timer_t

```c
typedef struct hiyui_timer_s hiyui_timer_t
```

## 函数

### hiyui_once

```c
HIYUI_API void HIYUI_CALL hiyui_once(uint32_t delay_ms, hiyui_callback_fn cb, void *ud)
```

一次性延时回调，delay_ms 毫秒后在 UI 线程执行一次并自动释放。

| 参数 | 说明 |
|---|---|
| `delay_ms` | 延迟毫秒数 |
| `cb` | 回调，签名 void(void*) |
| `ud` | 透传给回调的用户数据，生命周期由调用方管理 |

### hiyui_timer_create

```c
HIYUI_API hiyui_timer_t *HIYUI_CALL hiyui_timer_create(uint32_t period_ms, hiyui_callback_fn cb, void *ud)
```

创建周期定时器，每 period_ms 毫秒触发一次 cb。

**返回值：** 定时器句柄；cb 为空或 period_ms 为 0 时返回 NULL。 句柄必须由 hiyui_timer_destroy 销毁。

### hiyui_timer_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_timer_destroy(hiyui_timer_t *t)
```

销毁定时器并释放句柄；传 NULL 安全。

### hiyui_timer_pause

```c
HIYUI_API void HIYUI_CALL hiyui_timer_pause(hiyui_timer_t *t)
```

暂停定时器。

### hiyui_timer_resume

```c
HIYUI_API void HIYUI_CALL hiyui_timer_resume(hiyui_timer_t *t)
```

恢复定时器。

### hiyui_timer_set_period

```c
HIYUI_API void HIYUI_CALL hiyui_timer_set_period(hiyui_timer_t *t, uint32_t period_ms)
```

修改定时器周期。

### hiyui_post_ui

```c
HIYUI_API hiyui_post_status_t HIYUI_CALL hiyui_post_ui(hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

投递回调到 UI 线程，可从普通线程调用。 回调至多执行一次；入队后 cb 与 destroy 均在 UI 线程调用，回调返回后释放，主循环停止时尚未执行的任务只释放。 拒绝时不调用 cb，并在本函数返回前于投递线程释放状态。 不等待回调执行完成；从其他线程投递时，回调及释放可能早于本函数返回。cb 与 destroy 均不得抛出异常。

| 参数 | 说明 |
|---|---|
| `ud` | 可为 NULL，仍原样传给 cb 和 destroy。 |
| `destroy` | 非 NULL 时，调用即接管 ud，包含拒绝路径在内恰好释放一次，调用方不得再次释放或复用同一份状态重试；为 NULL 时不释放 ud，由调用方保证其在回调期间有效。 |


**返回值：** 入队成功返回 HIYUI_POST_ACCEPTED，队列满返回 HIYUI_POST_QUEUE_FULL；cb 为 NULL、调度器未启动或已停止、内部分配或入队异常时返回 HIYUI_POST_STOPPED。

### hiyui_hotkey_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_hotkey_text(hiyui_hotkey_t spec, char *buffer, size_t capacity)
```

生成当前平台的快捷键提示文本，如 "Ctrl+N"。 未绑定时写入空串。buffer 为 NULL 或 capacity 为 0 时返回空串。

**返回值：** buffer。

### hiyui_hotkey_same

```c
HIYUI_API int HIYUI_CALL hiyui_hotkey_same(hiyui_hotkey_t left, hiyui_hotkey_t right)
```

按平台展开 Primary 后比较快捷键，非桌面平台返回 0。

### hiyui_shortcut_register

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_shortcut_register(hiyui_hotkey_t spec, hiyui_callback_fn callback, void *user_data, hiyui_destroy_fn destroy)
```

注册桌面快捷键，回调在 UI 线程执行；返回 0 表示参数无效或平台不支持。 destroy 非 NULL 时接管 user_data，注册失败或注销时释放，执行中注销则在回调返回后释放。 成功返回的编号需通过 hiyui_shortcut_unregister 注销。

### hiyui_shortcut_unregister

```c
HIYUI_API void HIYUI_CALL hiyui_shortcut_unregister(uint32_t id)
```

注销快捷键，0 或重复注销无操作。

### hiyui_format_markup

```c
HIYUI_API const char *HIYUI_CALL hiyui_format_markup(const char *markup, char *buffer, size_t capacity)
```

将 HTML/标记文本格式化为缩进多行形式。

**返回值：** 写入结果后的 buffer；参数无效或缓冲不足时写入空串并返回 buffer。

### hiyui_scaled

```c
HIYUI_API int HIYUI_CALL hiyui_scaled(int px)
```

按当前 DPI 换算逻辑像素。

### hiyui_scaled_line

```c
HIYUI_API int HIYUI_CALL hiyui_scaled_line(int px)
```

按当前 DPI 换算线宽，正值至少为一个物理像素，非正值返回 0。
