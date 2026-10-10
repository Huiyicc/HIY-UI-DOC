---
title: "EventBinding"
---

# EventBinding <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

## Public Members

### obj

```cpp
lv_obj_t * obj
```

Object the callback is attached to

### dsc

```cpp
lv_event_dsc_t * dsc
```

Registration descriptor created by invoke

### deleteDsc

```cpp
lv_event_dsc_t * deleteDsc
```

DELETE cleanup hook descriptor.

### code

```cpp
lv_event_code_t code
```

Bound event code

### dispatchDepth

```cpp
uint32_t dispatchDepth
```

invoke nesting depth; greater than 0 means dispatching

### pendingDelete

```cpp
bool pendingDelete
```

Abandoned during dispatch, deleted after the outermost invoke returns

## Static Methods

### hasBinding

```cpp
static bool hasBinding(lv_obj_t *obj, lv_event_code_t code)
```

Queries whether a binding with the given event code exists on the object

Descriptors already unbound but still being visited during dispatch are not counted.
