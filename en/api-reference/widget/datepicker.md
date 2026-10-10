---
title: "DatePicker"
---

# DatePicker <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/date_picker.h>`

**Namespace:** `hiyui`

Date picker widget

**Inherits:** `hiyui::Chainable< DatePicker >`

## Types

### DatePickerEventType

Internal date picker event types

| Value | Description |
|---|---|
| `Changed` | The value changed |
| `CalendarChanged` | The calendar selection changed |
| `PanelChanged` | The panel mode changed |

## Public Methods

### placeholder

```cpp
DatePicker & placeholder(const char *value) &
```

Sets the placeholder text, nullptr restores the default, plain text cancels the language binding and keeps the current value.

### placeholder

```cpp
DatePicker & placeholder(LocalizedText value) &
```

Binds the placeholder text, copies the text and arguments and updates with the language.

### value

```cpp
DatePicker & value(const DateValue &v, Notify notify=Notify::No) &
```

Sets the current value

### value

```cpp
DateValue value() const
```

Returns the current value

### selection

```cpp
DatePickerValue selection() const
```

Returns the full committed selection, unconfirmed drafts inside the panel do not change the return value.

### rangeValue

```cpp
DatePicker & rangeValue(const DateValue &start, const DateValue &end, Notify notify=Notify::No) &
```

Sets the range value, range mode only

### rangeValue

```cpp
std::pair< DateValue, DateValue > rangeValue() const
```

Returns the range value

### open

```cpp
DatePicker & open() &
```

Opens the panel

### close

```cpp
DatePicker & close() &
```

Closes the panel

### status

```cpp
DatePicker & status(DatePickerStatus s) &
```

Sets the custom status at runtime

### picker

```cpp
DatePicker & picker(DatePickerType t, Notify notify=Notify::No) &
```

Switches the picker type at runtime

### panelMode

```cpp
DatePicker & panelMode(DatePanelMode m) &
```

Controlled panel mode

### onChange

```cpp
DatePicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the value changed callback, repeated binds append

Callback, its argument is the current value Optional output parameter receiving the unbind handle of this binding This component

### onCalendarChange

```cpp
DatePicker & onCalendarChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the calendar selection changed callback, repeated binds append, fires on the first selection in range mode

Callback, its argument is the selected value Optional output parameter receiving the unbind handle of this binding This component

### disabledDate

```cpp
DatePicker & disabledDate(std::function< bool(const DateValue &)> cb) &
```

Disabled date predicate callback

### onPanelChange

```cpp
DatePicker & onPanelChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the panel mode changed callback, repeated binds append

Callback, its arguments are the panel mode and the current value Optional output parameter receiving the unbind handle of this binding This component

### footer

```cpp
DatePicker & footer(std::function< void(Widget &)> cb) &
```

Custom footer builder callback

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(DatePickerEventType type)
```

Returns the internal date picker event code.
