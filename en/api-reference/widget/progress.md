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

Sets the value at runtime, triggering an animation

New value [0,100]

### value

```cpp
int value() const
```

Returns the current target value

### text

```cpp
Progress & text(const char *t) &
```

Sets custom text

### text

```cpp
Progress & text(const LocalizedText &text) &
```

Binds text that updates with the language and copies the description; a plain string call replaces this binding.

### activeColor

```cpp
Progress & activeColor(uint32_t color) &
```

Sets the active color at runtime

### activeColor

```cpp
Progress & activeColor(ThemeRole role) &
```

Binds the active color to a theme semantic role, updated automatically on theme change

### trackColor

```cpp
Progress & trackColor(ThemeRole role) &
```

Binds the track color to a theme semantic role, updated automatically on theme change

### gradientEndColor

```cpp
Progress & gradientEndColor(ThemeRole role) &
```

Binds the gradient end color to a theme semantic role, updated automatically on theme change

### segments

```cpp
Progress & segments(const ProgressSegment *segs, int count) &
```

Sets segments at runtime

### currentStep

```cpp
Progress & currentStep(int step) &
```

Sets the current step in Steps mode.

### currentStep

```cpp
int currentStep() const
```

Returns the current step, Steps mode, 0-based

### stepCount

```cpp
int stepCount() const
```

Returns the total number of steps, Steps mode
