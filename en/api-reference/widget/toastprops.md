---
title: "ToastProps"
---

# ToastProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/toast.h>`

**Namespace:** `hiyui`

Toast creation properties

## Public Members

### message

```cpp
const char * message
```

Toast text, UTF-8 encoded

### type

```cpp
ToastType type
```

Toast type

### position

```cpp
ToastPosition position
```

Popup position

### duration

```cpp
int duration
```

Auto-dismiss time in ms; 0 = never auto-close

### maxWidth

```cpp
int maxWidth
```

Maximum width in theme logical pixels
