---
title: Style
---

# Style

`Style` describes the visual properties of one interaction state. Unset fields do not override the existing style of the object.

## Background layers

From bottom to top, the background consists of `BgImage`, `BgFill`, `Backdrop`, and `Overlay`.

```cpp
Style style{
    .bgImage = {.src = "background.png", .fit = BgImageFit::Cover},
    .bgFill = {.color = rgba(0xFFFFFF, 180)},
    .overlay = {.color = rgba(0x000000, 24)},
};
```

`BgImageFit` has four values: `None` keeps the original size, `Fill` stretches to fill (the aspect ratio may change), `Contain` scales uniformly to fit the container (may leave empty space), and `Cover` scales uniformly to cover the container (may crop). The image source is a file path or an `lv_image_dsc_t*`.

## Decoration

`Border` sets width and color. `radius` controls the widget corner radius, and `opacity` controls the overall opacity of the widget and its children.

`Shadow` has the following fields:

| Field | Type | Default | Description |
|---|---|---|---|
| `offset.x` | `int` | `0` | Horizontal offset; positive values move right |
| `offset.y` | `int` | `0` | Vertical offset; positive values move down |
| `blur` | `int` | `0` | Blur radius; larger values blur more |
| `color` | `RGBA` | `0x000000` | Shadow color; [`HIYUI_NONE`](/en/core/constants) = follow the theme `ShadowColor` |
| `opacity` | `int` | `HIYUI_NONE_INT` | Opacity from `0` to `255`; `HIYUI_NONE_INT` leaves it unset, `0` hides the shadow |
| `sides` | `ShadowSide` | `ShadowSide::All` | Edges where the shadow applies; combinable with bitwise OR |
| `placement` | `ShadowPlacement` | `ShadowPlacement::Outer` | Shadow drawn outside or inside the widget |

`ShadowSide` is a bitmask:

| Value | Description |
|---|---|
| `None` | No shadow is drawn |
| `Top` | Top edge |
| `Right` | Right edge |
| `Bottom` | Bottom edge |
| `Left` | Left edge |
| `All` | All edges |

`ShadowPlacement::Outer` draws the shadow outside the widget, and `ShadowPlacement::Inset` draws it inside. A shadow restricted to specific edges uses the effective corner radius of the widget in its current state.

The following style draws an outer shadow only on the bottom and right edges:

```cpp
Style edgeShadow{
    .shadow = {
        .offset = {0, 2},
        .blur = 10,
        .color = 0x000000,
        .opacity = 36,
        .sides = ShadowSide::Bottom | ShadowSide::Right,
    },
};

panel.style(edgeShadow);
```

## Layout and text

Style also sets padding (`padH`, `padV`), margin (`marginH`, `marginV`), text color (`color`), font size (`fontSize`), and the line height ratio (`lineHeight`). Sizes are in theme logical pixels. When a Props field or a shortcut method and `style()` set the same property, the later call takes effect.

## Merging

`with()` returns the merged Style, for deriving state styles from a base style.

```cpp
Style pressed = base.with({
    .bgFill = {.color = 0xD2E3FC},
});
```

Unset markers: color fields use `HIYUI_NONE`, numeric fields use `HIYUI_NONE_INT`, bgImage uses an empty `src`, and gradient uses `dir` set to `None`. Any other value (including 0) overrides. Writing 0 turns off the corresponding effect: `border = {.width = 0}` clears the border, `transition = 0` removes the transition, `shadow = {.opacity = 0}` hides the shadow, `backdrop = {.blurRadius = 0}` disables background blur, and `opacity = 255` is fully opaque.

backdrop, bgImage, gradient, and shadow replace the whole group once set; shadow counts as set when its opacity is set or its color carries an alpha channel. The width and color of border override independently.

For the full field list see [Style API](/en/api-reference/style/style).
