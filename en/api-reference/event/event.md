---
title: "Event"
---

# Event <Badge type="info" text="Class" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

C++ wrapper for LVGL events providing type-safe event access.

Wraps an lv_event_t pointer and is passed as the parameter to parameterized callbacks.



**See also:** `Callback`


**See also:** `EventCallback`

## Public Methods

### Event

```cpp
Event(lv_event_t *e)
```

Constructs an Event wrapper

LVGL event pointer, passed in by the event system

### userData

```cpp
void * userData() const
```

Returns the user data carried by the event

User data pointer, passed in via the user_data parameter of lv_obj_add_event_cb

### data

```cpp
void * data() const
```

Synchronous event parameter, valid only during the callback, may be null.

### key

```cpp
uint32_t key() const
```

Returns the key code of a keyboard event, valid only for keyboard callbacks such as EventCode::Key

LVGL key code, such as LV_KEY_UP / LV_KEY_ENTER

### target

```cpp
lv_obj_t * target() const
```

Returns the event target object, the object that actually triggered the event, which may be a child.

### currentTarget

```cpp
lv_obj_t * currentTarget() const
```

Returns the current event propagation object, the object the callback is attached to.

### targetWidget

```cpp
Widget targetWidget() const
```

Returns a borrowing wrapper for the event target

Non-owning wrapper, for use within the callback only, must not be kept beyond it

### currentTargetWidget

```cpp
Widget currentTargetWidget() const
```

Returns a borrowing wrapper for the object the current callback is attached to, usable only within the current callback.

### keyCode

```cpp
KeyCode keyCode() const
```

Returns the navigation key; returns KeyCode::None for non-key events.

### pointerPositionPx

```cpp
bool pointerPositionPx(Point &point) const
```

Returns the pointer position relative to the top-left of the current propagation object, in physical pixels.

Returns false when there is no pointer input, and zeroes point.

### stopBubbling

```cpp
void stopBubbling()
```

Stops propagation of the current event to ancestors.

### stopProcessing

```cpp
void stopProcessing()
```

Stops later handlers; the Delete event does not allow stopping lifecycle cleanup, so the call is a no-op for it.
