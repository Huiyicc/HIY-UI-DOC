---
title: "hook::NativeMenuEntry"
---

# hook::NativeMenuEntry <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/platform/window_hook.h>`

**Namespace:** `hiyui`

Application-level native menu entry, platform-independent description for desktop platforms

## Public Members

### text

```cpp
const char * text
```

Menu entry text, UTF-8

### shortcut

```cpp
const char * shortcut
```

Shortcut hint on the right, display only

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Font icon codepoint, 0 means no icon

### iconStyle

```cpp
FontIconStyle iconStyle
```

Font icon axis parameters

### accelerator

```cpp
HotkeySpec accelerator
```

Shortcut binding, sdlKey = 0 means none

### separator

```cpp
bool separator
```

Separator, other fields ignored

### disabled

```cpp
bool disabled
```

Disabled state

### action

```cpp
std::function< void()> action
```

Click callback

### children

```cpp
std::vector< NativeMenuEntry > children
```

Submenu entries
