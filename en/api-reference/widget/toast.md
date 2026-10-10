---
title: "Toast"
---

# Toast <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/toast.h>`

**Namespace:** `hiyui`

Floating-layer toast component

Mounted on lv_layer_top() without affecting the main window layout. At most 2 toasts are fully shown per position; older toasts fade out and the layout shrinks back.



**See also:** `ToastProps`

**Inherits:** `hiyui::Chainable< Toast >`

## Public Methods

### message

```cpp
Toast & message(const char *value) &
```

Sets the toast text; plain text clears the translation binding, nullptr shows empty text.

### message

```cpp
Toast & message(LocalizedText value) &
```

Binds the toast text; text and parameters are copied and updated with the language.

### Toast

```cpp
Toast(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Toast

```cpp
Toast(ToastProps props={})
```

Aggregate construction from properties

### show

```cpp
Toast & show() &
```

Shows the toast

The toast object is mounted on lv_layer_top(); after show() returns the underlying object is managed by the toast queue and the C++ wrapper no longer holds raw_.

## Static Methods

### info

```cpp
static void info(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shows a toast that updates with the language; text and parameters are copied.

### success

```cpp
static void success(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shows a toast that updates with the language; text and parameters are copied.

### warning

```cpp
static void warning(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shows a toast that updates with the language; text and parameters are copied.

### error

```cpp
static void error(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shows a toast that updates with the language; text and parameters are copied.

### info

```cpp
static void info(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut for an info toast

Auto-dismiss time in ms; 0 = do not close automatically

### success

```cpp
static void success(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut for a success toast

Auto-dismiss time in ms; 0 = do not close automatically

### warning

```cpp
static void warning(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut for a warning toast

Auto-dismiss time in ms; 0 = do not close automatically

### error

```cpp
static void error(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut for an error toast

Auto-dismiss time in ms; 0 = do not close automatically
