---
title: "HslTonalEngine"
---

# HslTonalEngine <Badge type="info" text="Class" />

**Header:** `#include <hiyui/style/tonal_engine.h>`

**Namespace:** `hiyui`

HSL-based tonal mapping engine

chroma is a ratio of the seed saturation [0.0, 1.0]. HSL Lightness is nonlinear with perceived brightness, so color accuracy is limited.

**Inherits:** `hiyui::TonalEngine`

## Public Methods

### extractSeed

```cpp
virtual void extractSeed(uint32_t seedColor) override
```

Extracts hue and chroma parameters from a seed color

Seed color in 0xRRGGBB format

### tonalColor

```cpp
virtual uint32_t tonalColor(double chroma, int tone) const override
```

Generates a color at the given tone under the current hue

Chroma ratio [0.0, 1.0], 1.0 = the seed color original chroma Tone [0, 100] A 0xRRGGBB value

### tonalColorWithHueShift

```cpp
virtual uint32_t tonalColorWithHueShift(int hueDelta, double chroma, int tone) const override
```

Generates a color after shifting the hue, used for Tertiary and similar

Hue shift in degrees Chroma ratio [0.0, 1.0] Tone [0, 100] A 0xRRGGBB value
