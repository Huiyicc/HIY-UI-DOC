---
title: "Ref"
---

# Ref <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/ref.h>`

**Namespace:** `hiyui`

Component reference providing deferred access to a mounted component

Stores the widget binding; moving, unbinding or destroying the original wrapper does not affect this reference. Owns no component; access and liveness checks must happen on the UI thread.


Component type providing an explicit T(lv_obj_t*) constructor

## Public Methods

### Ref

```cpp
Ref(const T &widget)
```

Binds a component; copying the reference does not extend the component lifetime.

### bind

```cpp
void bind(const T &widget)
```

Replaces the current binding without changing references copied earlier.

### reset

```cpp
void reset()
```

Clears this reference without deleting the component or changing other references.

### bind

```cpp
void bind(lv_obj_t *r)
```

Binds a raw LVGL object pointer

Repeated calls replace the existing binding.


lv_obj_t* pointer obtained from Widget::ref()

### operator-&gt;

```cpp
Proxy operator->()
```

Accesses target component methods through -&gt;, non-const version

Returns a temporary wrapper and forwards the method call; debug builds assert when the target is no longer valid.


Temporary proxy; a wrapper reference obtained through a -&gt; chain is valid only within the current full expression.

### operator-&gt;

```cpp
Proxy operator->() const
```

Accesses target component methods through -&gt;, const version

Same as the non-const version; debug builds assert when the target is no longer valid.


Temporary proxy; a wrapper reference obtained through a -&gt; chain is valid only within the current full expression.

### operator bool

```cpp
operator bool() const
```

Checks whether the reference is still valid

true means the bound object is still alive Returns false after unmount, removal of the reference, or a delete request on the target or its parent.

### destroy

```cpp
void destroy() const
```

Requests deletion of the target and its subtree; invalidates the reference immediately, actual release happens in the UI main loop. Call on the UI thread; null references and repeated calls are no-ops.

### with

```cpp
bool with(F &&f) const
```

When the reference is valid, calls f synchronously with a borrowing wrapper

Does not extend the target component lifetime; the argument wrapper must not be kept beyond f.


Callable with signature void(T&amp;) true when the call completed; returns false without calling when the reference is invalid

### raw

```cpp
lv_obj_t * raw() const
```

Returns the underlying LVGL object pointer

The bound pointer; nullptr when unbound, moved out, or after component deletion.
