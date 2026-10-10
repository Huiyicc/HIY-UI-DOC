---
title: "HotkeyDef"
---

# HotkeyDef <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/hotkey.h>`

**Namespace:** `hiyui`

Hotkey definition

## Public Members

### id

```cpp
HotkeyId id
```

Hotkey identifier

### sdlKey

```cpp
uint32_t sdlKey
```

SDL keycode; 0 means unbound

### ctrl

```cpp
bool ctrl
```

Physical Ctrl

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
