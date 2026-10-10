---
title: "ColorPicker"
---

# ColorPicker <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/color_picker.h>`

**Namespace:** `hiyui`

Color picker widget

**Inherits:** `hiyui::Chainable< ColorPicker >`

## Types

### ColorPickerEventType

Color picker internal event types

| Value | Description |
|---|---|
| `Changed` | Color or opacity changed |

## Public Methods

### color

```cpp
ColorPicker & color(uint32_t c, Notify notify=Notify::No) &
```

Sets the color at runtime

### color

```cpp
uint32_t color() const
```

Returns the current color

### alpha

```cpp
ColorPicker & alpha(uint8_t a, Notify notify=Notify::No) &
```

Sets Alpha at runtime

### alpha

```cpp
uint8_t alpha() const
```

Returns the current Alpha

### open

```cpp
ColorPicker & open() &
```

Opens the popup panel, non-panel mode

### close

```cpp
ColorPicker & close() &
```

Closes the popup panel

### onChange

```cpp
ColorPicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the color change callback, repeated binding appends

Callback, receives the color and Alpha Optional out parameter receiving the unbind handle for this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(ColorPickerEventType type)
```

Returns the internal color picker event code.
