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

Internal color picker event types

| Value | Description |
|---|---|
| `Changed` | Color or alpha changed |

## Public Methods

### color

```cpp
ColorPicker & color(uint32_t c, Notify notify=Notify::No) &
```

Set the color at runtime

### color

```cpp
uint32_t color() const
```

Get the current color

### alpha

```cpp
ColorPicker & alpha(uint8_t a, Notify notify=Notify::No) &
```

Set the alpha at runtime

### alpha

```cpp
uint8_t alpha() const
```

Get the current alpha

### open

```cpp
ColorPicker & open() &
```

Open the popup panel, non-panel mode

### close

```cpp
ColorPicker & close() &
```

Close the popup panel

### onChange

```cpp
ColorPicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

Bind the color change callback, repeated binds append

Callback, the arguments are the color and the alpha Optional out parameter receiving the unbind handle of this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(ColorPickerEventType type)
```

Get the internal color picker event code.
