---
title: "TerminalModel"
---

# TerminalModel <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/terminal_model.h>`

**Namespace:** `hiyui`

Windowless VT state and input encoder; calls on the same instance must be serialized by the caller.

## Public Methods

### TerminalModel

```cpp
TerminalModel(TerminalSize size={80, 24}, int scrollbackLines=2000)
```

Non-positive rows or columns become 1 and a negative scrollback count becomes zero.

### resize

```cpp
void resize(TerminalSize size)
```

Non-positive rows or columns leave the grid unchanged.

### takeOutput

```cpp
std::string takeOutput()
```

Takes the input encodings and VT query responses; returns an empty string when nothing is pending.

### text

```cpp
std::string text() const
```

Current screen text, excluding history and trailing spaces.

### screen

```cpp
std::string screen() const
```

Generates UTF-8/VT draw data for the current screen, including colors, cursor, title and mouse mode. The receiver must use the same rows and columns, and input is fed back through onInput encoded by this model. The data excludes history and is not for restoring shell protocol state.
