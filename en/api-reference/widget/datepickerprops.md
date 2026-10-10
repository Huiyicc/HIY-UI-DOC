---
title: "DatePickerProps"
---

# DatePickerProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/date_picker.h>`

**Namespace:** `hiyui`

Date picker creation properties

## Public Members

### picker

```cpp
DatePickerType picker
```

Picker type

### width

```cpp
int width
```

Input width

### height

```cpp
int height
```

Input height

### borderless

```cpp
bool borderless
```

Borderless mode

### format

```cpp
const char * format
```

Custom format string

### placeholder

```cpp
const char * placeholder
```

Placeholder text

### enabled

```cpp
bool enabled
```

Whether user interaction is allowed

### range

```cpp
bool range
```

Range selection mode

### showTime

```cpp
bool showTime
```

Whether to show time selection

### timeFormat

```cpp
const char * timeFormat
```

Time format string, for example "HH:mm:ss"

### size

```cpp
DatePickerSize size
```

Size

### status

```cpp
DatePickerStatus status
```

Status

### placement

```cpp
DatePickerPlacement placement
```

Popup placement

### presentation

```cpp
PickerPresentation presentation
```

Panel presentation, BottomSheet mode ignores placement

### suffixIcon

```cpp
uint32_t suffixIcon
```

Suffix icon codepoint, 0 = default calendar icon

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
