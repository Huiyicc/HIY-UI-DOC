---
title: "ConfirmDialog"
---

# ConfirmDialog <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/confirm_dialog.h>`

**Namespace:** `hiyui`

Confirmation dialog component

Modal dialog showing a title, body text, and confirm/cancel buttons.



**See also:** `ConfirmDialogProps`

**Inherits:** `hiyui::Chainable< ConfirmDialog >`

## Public Methods

### ConfirmDialog

```cpp
ConfirmDialog(lv_obj_t *raw)
```

Wraps an existing LVGL object

### ConfirmDialog

```cpp
ConfirmDialog(ConfirmDialogProps props={})
```

Aggregate construction from properties

Dialog properties

### title

```cpp
ConfirmDialog & title(const char *value) &
```

Sets the title; after show() only already created text areas are updated, and plain text clears the language binding.

### title

```cpp
ConfirmDialog & title(LocalizedText value) &
```

Binds owning text that updates on language change.

### content

```cpp
ConfirmDialog & content(const char *value) &
```

Sets the body text; after show() only already created text areas are updated, and plain text clears the language binding.

### content

```cpp
ConfirmDialog & content(LocalizedText value) &
```

Binds owning text that updates on language change.

### confirmText

```cpp
ConfirmDialog & confirmText(const char *value) &
```

Sets the confirm button text; after show() only already created text areas are updated, and plain text clears the language binding.

### confirmText

```cpp
ConfirmDialog & confirmText(LocalizedText value) &
```

Binds owning text that updates on language change.

### cancelText

```cpp
ConfirmDialog & cancelText(const char *value) &
```

Sets the cancel button text; after show() only already created text areas are updated, and plain text clears the language binding.

### cancelText

```cpp
ConfirmDialog & cancelText(LocalizedText value) &
```

Binds owning text that updates on language change.

### show

```cpp
ConfirmDialog & show(lv_obj_t *parent=nullptr) &
```

Shows the dialog

Parent to mount on; nullptr = the current active screen This component

### onConfirm

```cpp
ConfirmDialog & onConfirm(F &&f) &
```

Binds the confirm button callback

Callbacks bound before show() take effect once the dialog is shown.


Callable type with signature void() Callback function This component

### onCancel

```cpp
ConfirmDialog & onCancel(F &&f) &
```

Binds the cancel button callback

Callbacks bound before show() take effect once the dialog is shown.


Callable type with signature void() Callback function This component

### close

```cpp
ConfirmDialog & close() &
```

Closes the dialog. Releases the current bindings; the dialog can be shown again afterwards. Callbacks must be bound again.

This component

## Static Methods

### ask

```cpp
static void ask(const char *title, const char *content, F &&callback, lv_obj_t *parent=nullptr, PopupMode mode=PopupMode::Inline)
```

Static call in the style of a Win32 MessageBox.

Pops up a confirmation dialog in one call; the callback argument is true for confirm and false for cancel.


Callable type with signature void(bool confirmed) Title Content Result callback; true = confirm, false = cancel Parent object; nullptr = the current active screen
