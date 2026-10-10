---
title: "TerminalInput"
---

# TerminalInput <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/terminal_model.h>`

**Namespace:** `hiyui`

Uncoded terminal input; text is valid only for the duration of the call or event callback.

## Public Members

### modifiers

```cpp
uint8_t modifiers
```

Bitmask; Shift is 1, Alt is 2, Ctrl is 4.

### row

```cpp
int row
```

Mouse row, zero-based.

### column

```cpp
int column
```

Mouse column, zero-based.

### button

```cpp
int button
```

Zero means movement, 1-3 are buttons, 4/5 are wheel up/down.

### pressed

```cpp
bool pressed
```

Mouse pressed or focus gained.
