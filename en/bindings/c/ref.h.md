---
title: "ref.h"
---

# ref.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/ref.h>`

## Type Aliases

### hiyui_ref_t

```c
typedef struct hiyui_ref_s hiyui_ref_t
```

Non-owning widget reference. All operations must run on the UI thread.

### hiyui_ref_fn

```c
typedef void(HIYUI_CALL * hiyui_ref_fn) (hiyui_widget_t *widget, void *user_data)
```

## Functions

### hiyui_ref_create

```c
HIYUI_API hiyui_ref_t *HIYUI_CALL hiyui_ref_create(hiyui_widget_t *widget)
```

Creates a reference; widget may be NULL. The returned handle must be released with hiyui_ref_destroy.

### hiyui_ref_clone

```c
HIYUI_API hiyui_ref_t *HIYUI_CALL hiyui_ref_clone(const hiyui_ref_t *ref)
```

Clones the binding; later rebinds do not affect each other. NULL returns an empty reference.

### hiyui_ref_bind

```c
HIYUI_API void HIYUI_CALL hiyui_ref_bind(hiyui_ref_t *ref, hiyui_widget_t *widget)
```

Replaces the binding. A NULL widget clears it; a NULL ref is a no-op.

### hiyui_ref_valid

```c
HIYUI_API int HIYUI_CALL hiyui_ref_valid(const hiyui_ref_t *ref)
```

Returns 0 when unbound, the widget is deleted, or ref is NULL.

### hiyui_ref_get

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_ref_get(const hiyui_ref_t *ref)
```

Returns the borrowed widget. Returns NULL when unbound or after the widget is deleted. Address reuse does not restore the reference.

### hiyui_ref_with

```c
HIYUI_API int HIYUI_CALL hiyui_ref_with(const hiyui_ref_t *ref, hiyui_ref_fn callback, void *user_data)
```

Calls callback synchronously while the reference is valid, without extending the widget lifetime. Returns 1 after the call, otherwise 0.

### hiyui_ref_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_ref_destroy(hiyui_ref_t *ref)
```

Releases the reference without deleting the widget. NULL is safe; a non-NULL handle can be released only once.

### hiyui_ref_destroy_target

```c
HIYUI_API void HIYUI_CALL hiyui_ref_destroy_target(const hiyui_ref_t *ref)
```

Requests deletion of the target and its subtree, invalidating the reference immediately. Actual release completes in the UI main loop. NULL, an empty reference, or repeated calls are no-ops.
