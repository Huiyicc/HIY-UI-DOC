---
title: "MessageBoxProps"
---

# MessageBoxProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/message_box.h>`

**Namespace:** `hiyui`

Creation properties of the message box

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

When nullptr, a language-following confirm label is used.

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

Popup mode, default is an in-window overlay
