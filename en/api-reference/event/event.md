---
title: "Event"
---

# Event <Badge type="info" text="Class" />

**Header:** `#include <hiyui/event/callback.h>`

**Namespace:** `hiyui`

C++ wrapper over an LVGL event with type-safe access.

Wraps an lv_event_t pointer and is passed as the argument to callbacks that take a parameter.



**See also:** `Callback`


**See also:** `EventCallback`

## Public Methods

### Event

```cpp
Event(lv_event_t *e)
```

Constructs an Event wrapper

LVGL event pointer, provided by the event system

### userData

```cpp
void * userData() const
```

Returns the user data carried by the event

User data pointer, passed in through the user_data argument of lv_obj_add_event_cb

### data

```cpp
void * data() const
```

Synchronous event parameter, valid only during the callback and may be null.

### key

```cpp
uint32_t key() const
```

Returns the key code of a keyboard event, valid only in keyboard callbacks such as EventCode::Key

LVGL key code, such as LV_KEY_UP / LV_KEY_ENTER

### target

```cpp
lv_obj_t * target() const
```

Returns the event target, the object that actually triggered the event, which may be a child object.

### currentTarget

```cpp
lv_obj_t * currentTarget() const
```

Returns the current propagation target, the object the callback is attached to.

### targetWidget

```cpp
Widget targetWidget() const
```

Returns a borrowed wrapper for the event target

Non-owning wrapper, valid only inside the callback and must not be kept beyond it

### currentTargetWidget

```cpp
Widget currentTargetWidget() const
```

Returns a borrowed wrapper for the object the callback is attached to, valid only within the current callback.

### keyCode

```cpp
KeyCode keyCode() const
```

Returns the navigation key; KeyCode::None for non-key events.

### pointerPositionPx

```cpp
bool pointerPositionPx(Point &point) const
```

Returns the pointer position relative to the top-left of the current propagation target, in physical pixels.

Returns false and zeroes point when there is no pointer input.

### stopBubbling

```cpp
void stopBubbling()
```

Stops propagation of the current event to ancestors.

### stopProcessing

```cpp
void stopProcessing()
```

Stops later handlers. Lifecycle cleanup on Delete events cannot be stopped, so the call is a no-op there.
