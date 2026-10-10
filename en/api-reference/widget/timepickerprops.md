---
title: "TimePickerProps"
---

# TimePickerProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/time_picker.h>`

**Namespace:** `hiyui`

Time picker creation properties

## Public Members

### width

```cpp
int width
```

Input box width

### height

```cpp
int height
```

Input box height

### borderless

```cpp
bool borderless
```

Borderless mode

### enabled

```cpp
bool enabled
```

Allows user interaction

### format

```cpp
const char * format
```

Format string, such as "HH:mm:ss" "h:mm:ss a" "HH:mm"

### placeholder

```cpp
const char * placeholder
```

Placeholder text

### range

```cpp
bool range
```

Range selection mode

### hourStep

```cpp
int hourStep
```

Hour step

### minuteStep

```cpp
int minuteStep
```

Minute step

### secondStep

```cpp
int secondStep
```

Second step

### size

```cpp
TimePickerSize size
```

Size

### status

```cpp
TimePickerStatus status
```

Status

### placement

```cpp
TimePickerPlacement placement
```

Popup position

### presentation

```cpp
PickerPresentation presentation
```

Panel presentation; BottomSheet mode ignores placement

### suffixIcon

```cpp
uint32_t suffixIcon
```

Suffix icon codepoint

### bg

```cpp
uint32_t bg
```

Background color

### textColor

```cpp
uint32_t textColor
```

Text color

### radius

```cpp
uint32_t radius
```

Corner radius
