---
title: "HotkeySpec"
---

# HotkeySpec <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/hotkey.h>`

**Namespace:** `hiyui`

Shortcut combination description, used for direct callback registration

## Public Members

### sdlKey

```cpp
uint32_t sdlKey
```

SDL key code (SDLK_*), 0 = unbound

### ctrl

```cpp
bool ctrl
```

Ctrl required

### primary

```cpp
bool primary
```

Command on macOS, Ctrl on other platforms

### shift

```cpp
bool shift
```

Shift required

### alt

```cpp
bool alt
```

Alt required

### meta

```cpp
bool meta
```

Command or Windows/Super key
