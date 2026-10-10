---
title: "MessageBoxProps"
---

# MessageBoxProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/message_box.h>`

**Namespace:** `hiyui`

Properties for creating a MessageBox

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

Dialog body text

### confirmText

```cpp
const char * confirmText
```

nullptr uses the locale-dependent confirm text.

### width

```cpp
int width
```

Dialog width, in theme logical pixels

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### popupMode

```cpp
PopupMode popupMode
```

Popup mode, default is in-window overlay
