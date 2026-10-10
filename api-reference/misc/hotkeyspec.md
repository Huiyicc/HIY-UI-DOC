---
title: "HotkeySpec"
---

# HotkeySpec <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/hotkey.h>`

**命名空间：** `hiyui`

快捷键组合描述，用于直接回调注册

## 公开成员

### sdlKey

```cpp
uint32_t sdlKey
```

SDL 键码 (SDLK_*)，0 = 未绑定

### ctrl

```cpp
bool ctrl
```

需要 Ctrl

### primary

```cpp
bool primary
```

macOS 为 Command，其他平台为 Ctrl

### shift

```cpp
bool shift
```

需要 Shift

### alt

```cpp
bool alt
```

需要 Alt

### meta

```cpp
bool meta
```

Command 或 Windows/Super 键
