---
title: "ref.h"
---

# ref.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/ref.h>`

## 类型别名

### hiyui_ref_t

```c
typedef struct hiyui_ref_s hiyui_ref_t
```

非拥有组件引用；全部操作须在 UI 线程进行。

### hiyui_ref_fn

```c
typedef void(* hiyui_ref_fn) (hiyui_widget_t *widget, void *user_data)
```

## 函数

### hiyui_ref_create

```c
HIYUI_API hiyui_ref_t *HIYUI_CALL hiyui_ref_create(hiyui_widget_t *widget)
```

创建引用，widget 可为 NULL；返回句柄须由 hiyui_ref_destroy 释放。

### hiyui_ref_clone

```c
HIYUI_API hiyui_ref_t *HIYUI_CALL hiyui_ref_clone(const hiyui_ref_t *ref)
```

复制绑定，后续重新绑定互不影响；NULL 返回空引用。

### hiyui_ref_bind

```c
HIYUI_API void HIYUI_CALL hiyui_ref_bind(hiyui_ref_t *ref, hiyui_widget_t *widget)
```

替换绑定，widget 为 NULL 时清空；ref 为 NULL 时无操作。

### hiyui_ref_valid

```c
HIYUI_API int HIYUI_CALL hiyui_ref_valid(const hiyui_ref_t *ref)
```

未绑定、组件删除或 NULL 时返回 0。

### hiyui_ref_get

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_ref_get(const hiyui_ref_t *ref)
```

返回借用组件；未绑定或组件删除后返回 NULL，地址复用不会恢复引用。

### hiyui_ref_with

```c
HIYUI_API int HIYUI_CALL hiyui_ref_with(const hiyui_ref_t *ref, hiyui_ref_fn callback, void *user_data)
```

引用有效时同步调用 callback，不延长组件生命周期；调用后返回 1，否则返回 0。

### hiyui_ref_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_ref_destroy(hiyui_ref_t *ref)
```

释放引用，不删除组件；NULL 安全，非空句柄只能释放一次。

### hiyui_ref_destroy_target

```c
HIYUI_API void HIYUI_CALL hiyui_ref_destroy_target(const hiyui_ref_t *ref)
```

请求删除目标及子树，立即使引用失效，实际释放在 UI 主循环完成；NULL、空引用或重复调用无操作。
