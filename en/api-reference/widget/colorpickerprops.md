---
title: "ColorPickerProps"
---

# ColorPickerProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/color_picker.h>`

**Namespace:** `hiyui`

Creation properties of the color picker

## Public Members

### color

```cpp
uint32_t color
```

Initial color 0xRRGGBB

### size

```cpp
ColorPickerSize size
```

Indicator size

### panelMode

```cpp
bool panelMode
```

Embedded panel mode

### extended

```cpp
bool extended
```

Extended panel, also shows RGB/HSL/HSV full channel input

### showAlpha

```cpp
bool showAlpha
```

Show the Alpha channel

### alpha

```cpp
uint8_t alpha
```

Initial Alpha value

### presentation

```cpp
PickerPresentation presentation
```

Panel presentation, ignored in panelMode

### bg

```cpp
uint32_t bg
```

Background color

### radius

```cpp
uint32_t radius
```

Corner radius
