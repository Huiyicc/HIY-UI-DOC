---
title: "HotkeyManager"
---

# HotkeyManager <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/hotkey.h>`

**命名空间：** `hiyui`

跨平台热键管理器，SDL 模式

单例模式，在 `Application` 初始化时自动注册默认热键。 registerHotkey 走焦点事件分发；registerShortcut 走直接回调， 匹配优先级高于焦点分发。

## 类型定义

### ShortcutId

```cpp
using hiyui::HotkeyManager::ShortcutId = uint32_t
```

直接回调快捷键标识，由 registerShortcut 返回

## 静态方法

### instance

```cpp
static HotkeyManager & instance()
```

获取单例实例

### eventCode

```cpp
static EventCode eventCode(HotkeyId id)
```

获取热键对应的 LVGL 事件码

**返回值：** 事件码，可用于 widget.on()

## 公开方法

### registerHotkey

```cpp
void registerHotkey(HotkeyDef def)
```

注册热键，走焦点事件分发

相同 id 的热键会被覆盖。

### registerShortcut

```cpp
ShortcutId registerShortcut(const HotkeySpec &def, std::function< void()> cb)
```

注册直接回调快捷键

| 参数 | 说明 |
|---|---|
| `cb` | 触发回调，匹配组合键时调用 |


**返回值：** 快捷键标识，用于 unregisterShortcut

### unregisterShortcut

```cpp
void unregisterShortcut(ShortcutId id)
```

注销直接回调快捷键

| 参数 | 说明 |
|---|---|
| `id` | registerShortcut 返回的标识 |

### handleSDLEvent

```cpp
bool handleSDLEvent(const SDL_Event &event)
```

处理 SDL 事件，由 `Application` 调用

**返回值：** 事件已处理，调用方应阻止后续处理
