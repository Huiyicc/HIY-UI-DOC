---
title: "ProgressProps"
---

# ProgressProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/progress.h>`

**Namespace:** `hiyui`

Creation properties of the progress bar

## Public Members

### type

```cpp
ProgressType type
```

Shape

### value

```cpp
int value
```

Current value [0,100]

### width

```cpp
int width
```

Line: width / Circle,Dashboard: outer diameter

### height

```cpp
int height
```

Line: height (ignored by Circle)

### strokeWidth

```cpp
int strokeWidth
```

Arc width for circle and dashboard modes

### startAngle

```cpp
int startAngle
```

Circle start angle, clockwise, 0 = horizontal right

### gapAngle

```cpp
int gapAngle
```

Dashboard gap angle

### rounded

```cpp
bool rounded
```

Rounded ends

### showText

```cpp
bool showText
```

Show the percentage

### customText

```cpp
const char * customText
```

Custom center text

### trackColor

```cpp
uint32_t trackColor
```

Track color

### activeColor

```cpp
uint32_t activeColor
```

Active color, follows Primary

### gradientEndColor

```cpp
uint32_t gradientEndColor
```

Gradient end color

### textColor

```cpp
uint32_t textColor
```

Text color

### segments

```cpp
const ProgressSegment * segments
```

Segment definitions

### segmentCount

```cpp
int segmentCount
```

Number of segments

### animated

```cpp
bool animated
```

Value change transition animation

### small

```cpp
bool small
```

Small mode

### stepCount

```cpp
int stepCount
```

Total number of steps (Steps mode)

### currentStep

```cpp
int currentStep
```

Current step (Steps mode, 0-based)
