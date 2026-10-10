---
title: "TimePicker"
---

# TimePicker <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/time_picker.h>`

**Namespace:** `hiyui`

Time picker component

The floating panel contains hour/minute/second scroll columns and supports 12h/24h formats.

**Inherits:** `hiyui::Chainable< TimePicker >`

## Types

### TimePickerEventType

Time picker internal event types

| Value | Description |
|---|---|
| `Changed` | Value changed |

## Public Methods

### placeholder

```cpp
TimePicker & placeholder(const char *value) &
```

Sets the placeholder text; nullptr restores the default. Plain text clears the language binding and keeps the current value.

### placeholder

```cpp
TimePicker & placeholder(LocalizedText value) &
```

Binds the placeholder text; text and parameters are copied and updated with the language.

### selection

```cpp
TimePickerValue selection() const
```

Returns the full committed selection; unconfirmed drafts inside the panel do not change the return value.

### rangeValue

```cpp
TimePicker & rangeValue(const TimeValue &start, const TimeValue &end, Notify notify=Notify::No) &
```

Sets the range value; only in range mode

### status

```cpp
TimePicker & status(TimePickerStatus s) &
```

Sets the status at runtime

### onChange

```cpp
TimePicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds a value change callback; repeated bindings are appended and the callback receives the current value

Optional output parameter receiving the unbind handle for this binding

### footer

```cpp
TimePicker & footer(std::function< void(Widget &)> cb) &
```

Custom footer builder callback

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(TimePickerEventType type)
```

Returns the internal event code of the time picker.
