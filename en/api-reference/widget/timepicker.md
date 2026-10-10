---
title: "TimePicker"
---

# TimePicker <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/time_picker.h>`

**Namespace:** `hiyui`

Time picker widget

The popup panel holds hour/minute/second wheel columns and supports 12h/24h formats.

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

Set the placeholder; nullptr restores the default; plain text removes the language binding and keeps the current value.

### placeholder

```cpp
TimePicker & placeholder(LocalizedText value) &
```

Bind the placeholder; copies text and parameters and updates with the language.

### selection

```cpp
TimePickerValue selection() const
```

Get the full committed selection; unconfirmed drafts in the panel do not change the return value.

### rangeValue

```cpp
TimePicker & rangeValue(const TimeValue &start, const TimeValue &end, Notify notify=Notify::No) &
```

Set the range value, range mode only

### status

```cpp
TimePicker & status(TimePickerStatus s) &
```

Set the status at runtime

### onChange

```cpp
TimePicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

Bind the value-changed callback; repeated binds append; the callback argument is the current value

Optional out parameter receiving the unbind handle of this binding

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

Get the internal event code of the time picker.
