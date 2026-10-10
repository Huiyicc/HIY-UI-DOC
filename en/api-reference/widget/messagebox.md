---
title: "MessageBox"
---

# MessageBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/message_box.h>`

**Namespace:** `hiyui`

Message box widget

A modal dialog showing a title, body text and a confirm button. Closes on confirm button click or on mask click.



**See also:** `MessageBoxProps`

**Inherits:** `hiyui::Chainable< MessageBox >`

## Public Methods

### MessageBox

```cpp
MessageBox(lv_obj_t *raw)
```

Wrap an existing LVGL object

### MessageBox

```cpp
MessageBox(MessageBoxProps props={})
```

Construct from aggregated properties

### title

```cpp
MessageBox & title(const char *value) &
```

Sets the title; after show only already created text areas are updated, and a plain string cancels the language binding.

### title

```cpp
MessageBox & title(LocalizedText value) &
```

Binds owned text that updates on language change.

### content

```cpp
MessageBox & content(const char *value) &
```

Sets the body text; after show only already created text areas are updated, and a plain string cancels the language binding.

### content

```cpp
MessageBox & content(LocalizedText value) &
```

Binds owned text that updates on language change.

### confirmText

```cpp
MessageBox & confirmText(const char *value) &
```

Sets the confirm button text; after show only already created text areas are updated, and a plain string cancels the language binding.

### confirmText

```cpp
MessageBox & confirmText(LocalizedText value) &
```

Binds owned text that updates on language change.

### show

```cpp
MessageBox & show(lv_obj_t *parent=nullptr) &
```

Show the dialog

Parent to attach to, nullptr = the current active screen

### onConfirm

```cpp
MessageBox & onConfirm(F &&f) &
```

Bind the confirm button callback

Callbacks bound before show() take effect after the dialog is shown.


Callable type, signature void()

### close

```cpp
MessageBox & close() &
```

Close the dialog Releases the current bindings; show() can be called again and callbacks must be re-bound.
