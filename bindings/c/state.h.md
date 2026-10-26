---
title: "state.h"
---

# state.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/state.h>`

响应式状态、订阅与组件绑定的 C 接口

## 枚举

### hiyui_state_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_STATE_OK` = 0 |  |
| `HIYUI_STATE_UNCHANGED` |  |
| `HIYUI_STATE_INVALID_ARGUMENT` |  |
| `HIYUI_STATE_INVALID_STATE` |  |
| `HIYUI_STATE_INVALID_VALUE` |  |
| `HIYUI_STATE_INVALID_OPERATION` |  |
| `HIYUI_STATE_CYCLE` |  |
| `HIYUI_STATE_OUT_OF_MEMORY` |  |
| `HIYUI_STATE_CALLBACK_FAILED` |  |

### hiyui_binding_phase_t

| 值 | 说明 |
|---|---|
| `HIYUI_BINDING_PENDING` = 0 |  |
| `HIYUI_BINDING_CONNECTED` |  |
| `HIYUI_BINDING_DISCONNECTED` |  |
| `HIYUI_BINDING_TARGET_GONE` |  |
| `HIYUI_BINDING_FAILED` |  |

### hiyui_binding_error_t

| 值 | 说明 |
|---|---|
| `HIYUI_BINDING_ERROR_NONE` = 0 |  |
| `HIYUI_BINDING_ERROR_INVALID_STATE` |  |
| `HIYUI_BINDING_ERROR_CONSTRAINT_MISMATCH` |  |
| `HIYUI_BINDING_ERROR_CONVERT_FAILED` |  |
| `HIYUI_BINDING_ERROR_APPLY_FAILED` |  |

## 类型别名

### hiyui_state_t

```c
typedef struct hiyui_state_s hiyui_state_t
```

### hiyui_state_sub_t

```c
typedef struct hiyui_state_sub_s hiyui_state_sub_t
```

### hiyui_binding_t

```c
typedef struct hiyui_binding_s hiyui_binding_t
```

### hiyui_state_int_fn

```c
typedef void(HIYUI_CALL * hiyui_state_int_fn) (int32_t current, int32_t previous, void *user_data)
```

### hiyui_state_bool_fn

```c
typedef void(HIYUI_CALL * hiyui_state_bool_fn) (hiyui_bool_t current, hiyui_bool_t previous, void *user_data)
```

### hiyui_state_string_fn

```c
typedef void(HIYUI_CALL * hiyui_state_string_fn) (const char *current, const char *previous, void *user_data)
```

字符串指针仅在回调期间有效。

### hiyui_state_int_text_fn

```c
typedef const char *(HIYUI_CALL * hiyui_state_int_text_fn) (int32_t value, void *user_data)
```

返回值立即被复制，不需保持有效；返回 NULL 显示空文本。

## 函数

### hiyui_state_create_int

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_int(int32_t initial)
```

全部函数在 UI 线程调用；字符串入参调用时复制。 创建失败返回 NULL；min 大于 max、initial 非有效 UTF-8 或包含内嵌 NUL 时失败。

### hiyui_state_create_int_bounded

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_int_bounded(int32_t initial, int32_t min, int32_t max)
```

### hiyui_state_create_bool

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_bool(hiyui_bool_t initial)
```

### hiyui_state_create_string

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_string(const char *initial)
```

### hiyui_state_create_string_text

```c
HIYUI_API hiyui_state_t *HIYUI_CALL hiyui_state_create_string_text(const char *initial, hiyui_text_rules_t rules)
```

### hiyui_state_release

```c
HIYUI_API void HIYUI_CALL hiyui_state_release(hiyui_state_t *state)
```

释放调用方引用；未释放的绑定与订阅仍有效，最后一个引用释放状态。

### hiyui_state_get_int

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_get_int(hiyui_state_t *state, int32_t *out)
```

out 非空时写入当前值；类型不符返回 InvalidArgument。

### hiyui_state_get_bool

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_get_bool(hiyui_state_t *state, hiyui_bool_t *out)
```

### hiyui_state_get_string

```c
HIYUI_API size_t HIYUI_CALL hiyui_state_get_string(hiyui_state_t *state, char *buffer, size_t capacity)
```

两段式出参：返回含 NUL 的所需字节数，失败为 0；buffer 可空，容量不足且大于 0 时缓冲区置为空串。

### hiyui_state_set_int

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_int(hiyui_state_t *state, int32_t value, hiyui_state_result_t *result)
```

trySet 语义：规范化并提交，写入结果到 result（可空），不抛出异常。

### hiyui_state_set_bool

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_bool(hiyui_state_t *state, hiyui_bool_t value, hiyui_state_result_t *result)
```

### hiyui_state_set_string

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_state_set_string(hiyui_state_t *state, const char *value, hiyui_state_result_t *result)
```

### hiyui_state_watch_int

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_int(hiyui_state_t *state, hiyui_state_int_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

建立订阅时不调用回调；句柄类型不符或创建失败返回 NULL，destroy 恰好调用一次。

### hiyui_state_watch_bool

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_bool(hiyui_state_t *state, hiyui_state_bool_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_state_watch_string

```c
HIYUI_API hiyui_state_sub_t *HIYUI_CALL hiyui_state_watch_string(hiyui_state_t *state, hiyui_state_string_fn fn, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_state_sub_release

```c
HIYUI_API void HIYUI_CALL hiyui_state_sub_release(hiyui_state_sub_t *subscription)
```

取消订阅并释放句柄；派发中调用则在派发返回后生效。

### hiyui_binding_off

```c
HIYUI_API void HIYUI_CALL hiyui_binding_off(hiyui_binding_t *binding)
```

解除绑定；重复调用与释放后调用无额外效果。

### hiyui_binding_status

```c
HIYUI_API hiyui_binding_phase_t HIYUI_CALL hiyui_binding_status(hiyui_binding_t *binding)
```

### hiyui_binding_error

```c
HIYUI_API hiyui_binding_error_t HIYUI_CALL hiyui_binding_error(hiyui_binding_t *binding)
```

### hiyui_label_bind_state_text

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_label_bind_state_text(hiyui_widget_t *label, hiyui_state_t *state, hiyui_binding_t **handle)
```

只绑定已挂载的对应类型组件；handle 出参非空且已指向绑定时返回 InvalidArgument。

### hiyui_label_bind_state_text_convert

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_label_bind_state_text_convert(hiyui_widget_t *label, hiyui_state_t *state, hiyui_state_int_text_fn convert, void *user_data, hiyui_destroy_fn destroy, hiyui_binding_t **handle)
```

### hiyui_slider_bind_state_value

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_slider_bind_state_value(hiyui_widget_t *slider, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_slider_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_slider_bind_model(hiyui_widget_t *slider, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_switch_bind_state_checked

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_switch_bind_state_checked(hiyui_widget_t *switch_widget, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_switch_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_switch_bind_model(hiyui_widget_t *switch_widget, hiyui_state_t *state, hiyui_binding_t **handle)
```

### hiyui_input_bind_model

```c
HIYUI_API hiyui_state_status_t HIYUI_CALL hiyui_input_bind_model(hiyui_widget_t *input, hiyui_state_t *state, hiyui_binding_t **handle)
```
