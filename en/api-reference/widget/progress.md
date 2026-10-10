---
title: "Progress"
---

# Progress <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/progress.h>`

**Namespace:** `hiyui`

Progress bar widget

**Inherits:** `hiyui::Chainable< Progress >`

## Public Methods

### value

```cpp
Progress & value(int v, Notify notify=Notify::No) &
```

Set the value at runtime, with animation

New value [0,100]

### value

```cpp
int value() const
```

Get the current target value

### text

```cpp
Progress & text(const char *t) &
```

Set custom text

### text

```cpp
Progress & text(const LocalizedText &text) &
```

Binds locale-updated text and copies the description. A plain string call replaces this binding.

### activeColor

```cpp
Progress & activeColor(uint32_t color) &
```

Set the active color at runtime

### activeColor

```cpp
Progress & activeColor(ThemeRole role) &
```

Binds the active color to a theme semantic role, updated automatically on theme switch

### trackColor

```cpp
Progress & trackColor(ThemeRole role) &
```

Binds the track color to a theme semantic role, updated automatically on theme switch

### gradientEndColor

```cpp
Progress & gradientEndColor(ThemeRole role) &
```

Binds the gradient end color to a theme semantic role, updated automatically on theme switch

### segments

```cpp
Progress & segments(const ProgressSegment *segs, int count) &
```

Set segments at runtime

### currentStep

```cpp
Progress & currentStep(int step) &
```

Set the current step in Steps mode.

### currentStep

```cpp
int currentStep() const
```

Get the current step, Steps mode, 0-based

### stepCount

```cpp
int stepCount() const
```

Get the total step count, Steps mode
