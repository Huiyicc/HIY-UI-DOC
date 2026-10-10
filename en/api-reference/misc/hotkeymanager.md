---
title: "HotkeyManager"
---

# HotkeyManager <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/hotkey.h>`

**Namespace:** `hiyui`

Cross-platform hotkey manager, SDL mode

Singleton; default hotkeys are registered automatically at Application initialization. registerHotkey dispatches through focus events; registerShortcut uses direct callbacks and matches with higher priority than focus dispatch.

## Types

### ShortcutId

```cpp
using hiyui::HotkeyManager::ShortcutId = uint32_t
```

Direct-callback shortcut identifier, returned by registerShortcut

## Static Methods

### instance

```cpp
static HotkeyManager & instance()
```

Returns the singleton instance

### eventCode

```cpp
static EventCode eventCode(HotkeyId id)
```

Returns the LVGL event code for a hotkey

Event code, usable with widget.on()

## Public Methods

### registerHotkey

```cpp
void registerHotkey(HotkeyDef def)
```

Registers a hotkey dispatched through focus events

A hotkey with the same id is overwritten.

### registerShortcut

```cpp
ShortcutId registerShortcut(const HotkeySpec &def, std::function< void()> cb)
```

Registers a direct-callback shortcut

Trigger callback, invoked when the combination matches Shortcut identifier, for unregisterShortcut

### unregisterShortcut

```cpp
void unregisterShortcut(ShortcutId id)
```

Unregisters a direct-callback shortcut

Identifier returned by registerShortcut

### handleSDLEvent

```cpp
bool handleSDLEvent(const SDL_Event &event)
```

Handles an SDL event, called by Application

Event handled; the caller should stop further processing
