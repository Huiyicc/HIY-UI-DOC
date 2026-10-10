---
title: "HotkeySpec"
---

# HotkeySpec <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/hotkey.h>`

**Namespace:** `hiyui`

Shortcut combination description for direct callback registration

## Public Members

### sdlKey

```cpp
uint32_t sdlKey
```

SDL keycode (SDLK_*); 0 means unbound

### ctrl

```cpp
bool ctrl
```

Requires Ctrl

### primary

```cpp
bool primary
```

Command on macOS, Ctrl on other platforms

### shift

```cpp
bool shift
```

Requires Shift

### alt

```cpp
bool alt
```

Requires Alt

### meta

```cpp
bool meta
```

Command or the Windows/Super key
