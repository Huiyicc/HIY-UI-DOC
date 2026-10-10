---
title: "ConfirmDialog"
---

# ConfirmDialog <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/confirm_dialog.h>`

**Namespace:** `hiyui`

Confirm dialog widget

Modal dialog showing title, body text, and confirm/cancel buttons.



**See also:** `ConfirmDialogProps`

**Inherits:** `hiyui::Chainable< ConfirmDialog >`

## Public Methods

### ConfirmDialog

```cpp
ConfirmDialog(lv_obj_t *raw)
```

Wrap an existing LVGL object

### ConfirmDialog

```cpp
ConfirmDialog(ConfirmDialogProps props={})
```

Aggregate construct from properties

Dialog properties

### title

```cpp
ConfirmDialog & title(const char *value) &
```

Set the title; after show() only already created text areas are updated; plain text removes the language binding.

### title

```cpp
ConfirmDialog & title(LocalizedText value) &
```

Bind owning text and update it with language changes.

### content

```cpp
ConfirmDialog & content(const char *value) &
```

Set the body text; after show() only already created text areas are updated; plain text removes the language binding.

### content

```cpp
ConfirmDialog & content(LocalizedText value) &
```

Bind owning text and update it with language changes.

### confirmText

```cpp
ConfirmDialog & confirmText(const char *value) &
```

Set the confirm button text; after show() only already created text areas are updated; plain text removes the language binding.

### confirmText

```cpp
ConfirmDialog & confirmText(LocalizedText value) &
```

Bind owning text and update it with language changes.

### cancelText

```cpp
ConfirmDialog & cancelText(const char *value) &
```

Set the cancel button text; after show() only already created text areas are updated; plain text removes the language binding.

### cancelText

```cpp
ConfirmDialog & cancelText(LocalizedText value) &
```

Bind owning text and update it with language changes.

### show

```cpp
ConfirmDialog & show(lv_obj_t *parent=nullptr) &
```

Show the dialog

Parent to mount on; nullptr = the current active screen This component

### onConfirm

```cpp
ConfirmDialog & onConfirm(F &&f) &
```

Bind the confirm button callback

Callbacks bound before show() take effect once the dialog is shown.


Callable type, signature void() Callback function This component

### onCancel

```cpp
ConfirmDialog & onCancel(F &&f) &
```

Bind the cancel button callback

Callbacks bound before show() take effect once the dialog is shown.


Callable type, signature void() Callback function This component

### close

```cpp
ConfirmDialog & close() &
```

Close the dialog Releases current bindings; show() can be called again; callbacks must be re-bound.

This component

## Static Methods

### ask

```cpp
static void ask(const char *title, const char *content, F &&callback, lv_obj_t *parent=nullptr, PopupMode mode=PopupMode::Inline)
```

Static call in the style of the Win32 MessageBox.

Shows a confirm dialog in one call; the callback receives true = confirm, false = cancel.


Callable type, signature void(bool confirmed) Title Content Result callback; true = confirm, false = cancel Parent object; nullptr = the current active screen
