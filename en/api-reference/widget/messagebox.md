---
title: "MessageBox"
---

# MessageBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/message_box.h>`

**Namespace:** `hiyui`

Message box widget

A modal dialog showing a title, body text, and a confirm button. Closes when the confirm button or the mask layer is clicked.



**See also:** `MessageBoxProps`

**Inherits:** `hiyui::Chainable< MessageBox >`

## Public Methods

### MessageBox

```cpp
MessageBox(lv_obj_t *raw)
```

Wraps an existing LVGL object

### MessageBox

```cpp
MessageBox(MessageBoxProps props={})
```

Aggregate construction from properties

### title

```cpp
MessageBox & title(const char *value) &
```

Sets the title; after showing, only created text areas are updated, and a plain string cancels the language binding.

### title

```cpp
MessageBox & title(LocalizedText value) &
```

Binds owned text that updates when the language changes.

### content

```cpp
MessageBox & content(const char *value) &
```

Sets the body text; after showing, only created text areas are updated, and a plain string cancels the language binding.

### content

```cpp
MessageBox & content(LocalizedText value) &
```

Binds owned text that updates when the language changes.

### confirmText

```cpp
MessageBox & confirmText(const char *value) &
```

Sets the confirm button text; after showing, only created text areas are updated, and a plain string cancels the language binding.

### confirmText

```cpp
MessageBox & confirmText(LocalizedText value) &
```

Binds owned text that updates when the language changes.

### show

```cpp
MessageBox & show(lv_obj_t *parent=nullptr) &
```

Shows the dialog

Parent object to attach to, nullptr = current active screen

### onConfirm

```cpp
MessageBox & onConfirm(F &&f) &
```

Binds the confirm button callback

Callbacks bound before show() take effect once the dialog is shown.


Callable type, signature void()

### close

```cpp
MessageBox & close() &
```

Closes the dialog Releases current bindings; show() can be called again and callbacks must be rebound.
