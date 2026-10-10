---
title: "ContextMenuItem"
---

# ContextMenuItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/context_menu.h>`

**Namespace:** `hiyui`

Menu item definition

Passed as a std::vector to ContextMenu::show() or Widget::contextMenu(). text and shortcut borrow caller strings; children, action and accelerator are owned by this struct.

## Public Members

### text

```cpp
const char * text
```

Menu item text

### shortcut

```cpp
const char * shortcut
```

Right-side hint. Generated from accelerator when nullptr

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Font icon codepoint. Non-zero overrides iconSrc

### iconSrc

```cpp
const void * iconSrc
```

Image source. File path or lv_image_dsc_t*

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style

### separator

```cpp
bool separator
```

Separator. Other fields are ignored

### disabled

```cpp
bool disabled
```

Disabled state

### children

```cpp
std::vector< ContextMenuItem > children
```

Submenu items

### action

```cpp
std::function< void(MenuContext &)> action
```

Click callback. See MenuContext for the owner context

### accelerator

```cpp
HotkeySpec accelerator
```

Hotkey binding. sdlKey=0 means none

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

Overrides text when present. Owns the text and updates with the language.
