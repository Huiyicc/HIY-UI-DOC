---
title: "InputProps"
---

# InputProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/input.h>`

**Namespace:** `hiyui`

Text input creation properties

## Public Members

### text

```cpp
const char * text
```

Initial text content, UTF-8 encoded

### placeholder

```cpp
const char * placeholder
```

Placeholder hint text

### password

```cpp
bool password
```

Whether password mode is on, displayed as •

### maxLength

```cpp
int maxLength
```

Maximum input length, 0 = unlimited

### width

```cpp
int width
```

Input width

### height

```cpp
int height
```

Input height, HIYUI_AUTO = fit content

### multiline

```cpp
bool multiline
```

Multi-line mode, false = single-line (default)

### horizontalScroll

```cpp
bool horizontalScroll
```

Enables the horizontal scrollbar in multi-line mode, disables automatic wrapping

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### textColor

```cpp
uint32_t textColor
```

Text color, HIYUI_DEFAULT = follow theme

### placeholderColor

```cpp
uint32_t placeholderColor
```

Placeholder text color

### fontSize

```cpp
int fontSize
```

Font size, 0 = use the theme default

### radius

```cpp
uint32_t radius
```

Corner radius, HIYUI_DEFAULT = follow theme

### borderless

```cpp
bool borderless
```

Borderless mode, transparent background without border including the focused state, blends into the parent container

### maxUndoSteps

```cpp
int maxUndoSteps
```

Maximum undo/redo steps, 0 = disable undo

### multiCursor

```cpp
bool multiCursor
```

Allows additional selections and multi-cursor input, desktop backends only

### readOnly

```cpp
bool readOnly
```

Disables user editing, selection and copy remain available.
