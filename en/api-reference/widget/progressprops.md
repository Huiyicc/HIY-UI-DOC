---
title: "ProgressProps"
---

# ProgressProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/progress.h>`

**Namespace:** `hiyui`

Properties for creating a Progress

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

Width for Line, outer diameter for Circle and Dashboard

### height

```cpp
int height
```

Height for Line, ignored for Circle

### strokeWidth

```cpp
int strokeWidth
```

Arc width for Circle and Dashboard

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

Rounded line ends

### showText

```cpp
bool showText
```

Show the percentage text

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

Active color, follows theme Primary

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

Segment count

### animated

```cpp
bool animated
```

Transition animation on value change

### small

```cpp
bool small
```

Compact mode

### stepCount

```cpp
int stepCount
```

Total step count, Steps mode

### currentStep

```cpp
int currentStep
```

Current step, Steps mode, 0-based
