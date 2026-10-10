---
title: "ConfirmDialogProps"
---

# ConfirmDialogProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/confirm_dialog.h>`

**Namespace:** `hiyui`

Confirm dialog creation properties

## Public Members

### title

```cpp
const char * title
```

Dialog title

### content

```cpp
const char * content
```

Dialog content

### confirmText

```cpp
const char * confirmText
```

nullptr uses the language-dependent confirm text.

### cancelText

```cpp
const char * cancelText
```

nullptr uses the language-dependent cancel text.

### width

```cpp
int width
```

Dialog width in theme logical pixels

### bg

```cpp
uint32_t bg
```

Background color; HIYUI_DEFAULT = follow theme

### confirmBg

```cpp
uint32_t confirmBg
```

Confirm button background color; HIYUI_DEFAULT = follow the primary color

### popupMode

```cpp
PopupMode popupMode
```

Popup mode; default is an in-window overlay
