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

SDL key code, 0 means unbound

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
