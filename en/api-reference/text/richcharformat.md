---
title: "RichCharFormat"
---

# RichCharFormat <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/text/rich_format.h>`

**Namespace:** `hiyui`

Character format; fields left at default inherit the widget default

## Public Members

### foreground

```cpp
uint32_t foreground
```

Foreground color; HIYUI_DEFAULT inherits the widget default

### background

```cpp
uint32_t background
```

Background highlight color; HIYUI_DEFAULT means no background

### fontSize

```cpp
int fontSize
```

Font size in logical pixels; 0 inherits the widget default
