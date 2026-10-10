---
title: "Theme"
---

# Theme <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/theme.h>`

**Namespace:** `hiyui`

Theme definition managing the design token value table

Internally stores token values in a fixed 256-slot array with O(1) lookup by enum index. Default construction yields a light theme.



**See also:** `Token`


**See also:** `StyleSet`

## 颜色工具

### kHoverOpa

```cpp
static lv_opa_t kHoverOpa
```

Hover background opacity constant.

This opacity is applied over the primary color for a uniform hover effect.

### darken

```cpp
static uint32_t darken(uint32_t color, int percent)
```

Darkens a color by the given percentage

Input color in 0xRRGGBB format Darkening percentage [0, 100], 0 = unchanged, 100 = fully black The darkened color

### lighten

```cpp
static uint32_t lighten(uint32_t color, int percent)
```

Lightens a color by the given percentage

Input color in 0xRRGGBB format Lightening percentage [0, 100], 0 = unchanged, 100 = fully white The lightened color

## Token 查询 / 设置

### get

```cpp
uint32_t get(Token t) const
```

Returns the token value

The value of the token, HIYUI_NONE when unset

### set

```cpp
Theme & set(Token t, uint32_t value)
```

Sets the token value

Theme reference for chaining

### setFont

```cpp
Theme & setFont(const FontScale &f)
```

Sets the font size tokens in batch

Theme reference for chaining

## 便捷访问器

### primary

```cpp
uint32_t primary() const
```

Primary color

### secondary

```cpp
uint32_t secondary() const
```

Secondary color

### danger

```cpp
uint32_t danger() const
```

Danger color

### warning

```cpp
uint32_t warning() const
```

Warning color

### surface

```cpp
uint32_t surface() const
```

Surface color, cards and panels

### background

```cpp
uint32_t background() const
```

Page background color

### textPrimary

```cpp
uint32_t textPrimary() const
```

Primary text color

### textSecondary

```cpp
uint32_t textSecondary() const
```

Secondary text color

### success

```cpp
uint32_t success() const
```

Success color

### borderColor

```cpp
uint32_t borderColor() const
```

Border color

### borderFallback

```cpp
uint32_t borderFallback() const
```

Border color, falls back to a neutral light gray when borderColor is HIYUI_NONE

A 0xRRGGBB value; returned as is when borderColor is set

### divider

```cpp
uint32_t divider() const
```

Divider color

### sliderKnobColor

```cpp
uint32_t sliderKnobColor() const
```

Theme-adapted color for slider-class component knobs

Returns white when the background luminance is high, otherwise inverseSurface. Used as the default knob color of Slider and Switch.

### spacingXS

```cpp
int spacingXS() const
```

Spacing 4px

### spacingSM

```cpp
int spacingSM() const
```

Spacing 8px

### spacingMD

```cpp
int spacingMD() const
```

Spacing 16px

### spacingLG

```cpp
int spacingLG() const
```

Spacing 24px

### spacingXL

```cpp
int spacingXL() const
```

Spacing 32px

### radiusSM

```cpp
int radiusSM() const
```

Corner radius 4px

### radiusMD

```cpp
int radiusMD() const
```

Corner radius 8px

### radiusLG

```cpp
int radiusLG() const
```

Corner radius 12px

### radiusXL

```cpp
int radiusXL() const
```

Corner radius 16px

### radiusFull

```cpp
int radiusFull() const
```

Full round, 9999px

### fontMD

```cpp
int fontMD() const
```

Default font size

### animEnabled

```cpp
bool animEnabled() const
```

Global animation switch

### animDuration

```cpp
int animDuration() const
```

Default animation duration

### animDurationFast

```cpp
int animDurationFast() const
```

Fast animation duration

### animDurationSlow

```cpp
int animDurationSlow() const
```

Slow animation duration

### titleBarBg

```cpp
uint32_t titleBarBg() const
```

Title bar background color

### titleBarText

```cpp
uint32_t titleBarText() const
```

Title bar text color

### titleBarIcon

```cpp
uint32_t titleBarIcon() const
```

Title bar icon default color

### titleBarIconHover

```cpp
uint32_t titleBarIconHover() const
```

Title bar icon hover color

### titleBarCloseHover

```cpp
uint32_t titleBarCloseHover() const
```

Close button hover color

### shadowColor

```cpp
uint32_t shadowColor() const
```

Shadow color

### shadowOpaScale

```cpp
int shadowOpaScale() const
```

Shadow opacity scale percentage

### shadowOpa

```cpp
uint8_t shadowOpa(uint8_t base) const
```

Scales a shadow opacity by the theme

Base opacity [0, 255] The scaled opacity, capped at 255

### resolveAnimDuration

```cpp
uint32_t resolveAnimDuration(uint32_t ms=0) const
```

Returns an animation duration, honoring the global switch

Returns 0 when animations are disabled; otherwise the passed duration or the default duration.


Desired duration in milliseconds, 0 uses the default value The actual duration, 0 when animations are disabled

### resolveAnimDurationFast

```cpp
uint32_t resolveAnimDurationFast(uint32_t ms=0) const
```

Returns the fast animation duration, honoring the global switch

Desired duration in milliseconds, 0 uses the default fast duration The actual duration, 0 when animations are disabled

## 组件默认样式

### styleFor

```cpp
StyleSet styleFor(WidgetType type) const
```

Returns the default StyleSet for a widget type

### resolve

```cpp
uint32_t resolve(ThemeRole role) const
```

Resolves a semantic role to the current theme color value

A 0xRRGGBB color value

### button

```cpp
StyleSet button() const
```

Button default style

### label

```cpp
StyleSet label() const
```

Label default style

### checkbox

```cpp
StyleSet checkbox() const
```

Checkbox default style

### radio

```cpp
StyleSet radio() const
```

Radio default style

### switchStyle

```cpp
StyleSet switchStyle() const
```

Switch default style

### slider

```cpp
StyleSet slider() const
```

Slider default style

### input

```cpp
StyleSet input() const
```

Text input default style

### dropdown

```cpp
StyleSet dropdown() const
```

Dropdown default style

### tabs

```cpp
StyleSet tabs() const
```

Tabs default style

### card

```cpp
StyleSet card() const
```

Card default style

### glassCard

```cpp
StyleSet glassCard() const
```

Frosted glass card default style

### surfaceStyle

```cpp
Style surfaceStyle(SurfaceRole role) const
```

Returns the surface material; sizes are in logical pixels and exclude text and layout settings.

### surfaceOpacity

```cpp
uint8_t surfaceOpacity(SurfaceRole role) const
```

Returns the surface fill opacity in [0,255]; returns 255 on non-glass themes.

### glassEnabled

```cpp
bool glassEnabled() const
```

Queries whether the theme enables frosted glass surfaces.

### gradientPrimary

```cpp
Style gradientPrimary() const
```

Primary gradient style

A gradient from Primary to Secondary

## MD3 种子主题工厂

### fromSeed

```cpp
static Theme fromSeed(uint32_t seedColor, MD3Variant variant=MD3Variant::Content, const MD3ChromaConfig &custom={})
```

Creates a Light theme from a seed color

Seed color in 0xRRGGBB Color variant, defaults to Content Custom parameters, effective only for the Custom variant The generated Light theme, not constexpr

### fromSeedDark

```cpp
static Theme fromSeedDark(uint32_t seedColor, MD3Variant variant=MD3Variant::Content, const MD3ChromaConfig &custom={})
```

Creates a Dark theme from a seed color

Seed color in 0xRRGGBB Color variant, defaults to Content Custom parameters, effective only for the Custom variant The generated Dark theme, not constexpr

## Public Members

### tokens_

```cpp
uint32_t tokens_
```

Token value table, the index equals the Token enum value

## Public Methods

### Theme

```cpp
constexpr Theme()
```

Default constructor, initializes the token values of the light theme
