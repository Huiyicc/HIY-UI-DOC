---
title: "TerminalProps"
---

# TerminalProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/terminal.h>`

**Namespace:** `hiyui`

Terminal creation properties; sizes and font size use logical pixels.

## Public Members

### width

```cpp
int width
```

HIYUI_AUTO fills the parent.

### fontSize

```cpp
int fontSize
```

Positive integer.

### scrollbackLines

```cpp
int scrollbackLines
```

Upper limit of history lines; zero keeps no history.

### bg

```cpp
uint32_t bg
```

HIYUI_DEFAULT follows the theme background.

### textColor

```cpp
uint32_t textColor
```

HIYUI_DEFAULT follows the theme body text color.

### animated

```cpp
bool animated
```

Whether cursor blinking is allowed; also controlled by the theme animation switch.

### readOnly

```cpp
bool readOnly
```

Blocks user input; selection, copy, and scrolling remain available.
