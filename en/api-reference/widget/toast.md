---
title: "Toast"
---

# Toast <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/toast.h>`

**Namespace:** `hiyui`

Overlay toast widget

Mounted on lv_layer_top() and does not affect the main window layout. A position shows at most 2 toasts fully; older toasts fade out and the layout shrinks back when exceeded.



**See also:** `ToastProps`

**Inherits:** `hiyui::Chainable< Toast >`

## Public Methods

### message

```cpp
Toast & message(const char *value) &
```

Set the toast text; plain text removes the translation binding; nullptr shows empty text.

### message

```cpp
Toast & message(LocalizedText value) &
```

Bind the toast text; copies text and parameters and updates with the language.

### Toast

```cpp
Toast(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Toast

```cpp
Toast(ToastProps props={})
```

Aggregate construct from properties

### show

```cpp
Toast & show() &
```

Show the toast

The toast object is mounted on lv_layer_top(); after show() returns the queue owns the underlying object. The C++ wrapper no longer holds raw_.

## Static Methods

### info

```cpp
static void info(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Show a toast that updates with the language; copies text and parameters.

### success

```cpp
static void success(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Show a toast that updates with the language; copies text and parameters.

### warning

```cpp
static void warning(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Show a toast that updates with the language; copies text and parameters.

### error

```cpp
static void error(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Show a toast that updates with the language; copies text and parameters.

### info

```cpp
static void info(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut to show an info toast

Auto-dismiss time in ms; 0 = never auto-close

### success

```cpp
static void success(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut to show a success toast

Auto-dismiss time in ms; 0 = never auto-close

### warning

```cpp
static void warning(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut to show a warning toast

Auto-dismiss time in ms; 0 = never auto-close

### error

```cpp
static void error(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

Shortcut to show an error toast

Auto-dismiss time in ms; 0 = never auto-close
