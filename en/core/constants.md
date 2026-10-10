---
title: Constants
---

# Constants

## Sentinel values

Sentinel values (fixed constants meaning "not set" or a special condition) apply only to fields, parameters, or return values declared to support them.

| Constant | Purpose |
| --- | --- |
| `HIYUI_AUTO` | Automatic value computed by layout; as a maximum size it removes the local cap, value `-1` |
| `HIYUI_DEFAULT` | Color fields follow the current theme, value `0xFFFFFFFE` |
| `HIYUI_NONE` | Color field not set |
| `HIYUI_TRANSPARENT` | Color field forced transparent, overrides the theme setting |
| `HIYUI_NONE_INT` | Integer field not set |
| `HIYUI_NO_SELECTION` | No selected item; only for index interfaces declared to support this value |
| `HIYUI_VIDEO_TIME_UNKNOWN` | Value `-1`, unknown video duration in milliseconds; provided by the C++ video component when FFmpeg is enabled |

`Video::durationMs()` returns `HIYUI_VIDEO_TIME_UNKNOWN` when the duration is unknown or not loaded. Do not use it as a known duration to compute the playback percentage.

## Layout enums

- `Align`. Alignment of Flex containers on the main or cross axis.
- `Anchor`. Nine-grid anchor of a widget relative to its parent object.
- `Direction`. Horizontal or vertical arrangement direction.
- `TextAlign`. Horizontal text alignment in Checkbox, Radio, and Dropdown.
- `IndicatorSide`. Which side of the text the Checkbox and Radio indicator appears on.

## ScrollMode

Axes a container allows scrolling on.

| Value | Behavior |
| --- | --- |
| `Off` | Disables scrolling |
| `Auto` | Enabled on content overflow, direction follows content |
| `Horizontal` | Horizontal scrolling only |
| `Vertical` | Vertical scrolling only |
| `Both` | Both horizontal and vertical scrolling |

## Transition

Transition animation types for window navigation: `None`, `SlideLeft`, `SlideRight`, `SlideUp`, `SlideDown`, and `Fade`.

For full enums and conversion functions see [API Reference](/en/api-reference/).
