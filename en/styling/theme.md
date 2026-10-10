---
title: Theme
---

# Theme

`Theme` stores the token table and provides a default `StyleSet` per widget type.

## Token

A token is a named value in a theme, covering semantic colors, spacing, corner radius, font sizes, animation durations, frosted glass parameters, and title bar colors. `Theme::set()` returns the theme reference and supports chaining.

```cpp
Theme theme;
theme.set(Token::Primary, 0x3367D6)
     .set(Token::Surface, 0xFFFFFF)
     .set(Token::TextPrimary, 0x202124)
     .set(Token::RadiusMD, 8);
```

`Theme::get(Token::Primary)` reads a token value and returns [`HIYUI_NONE`](/en/core/constants) when unset.

`ThemeRole` is a semantic color role (`Primary`, `Surface`, `TextPrimary`, `Danger`, and others) used for runtime color bindings; after a theme switch, bound positions take the color from the new theme.

```cpp
title.textColor(ThemeRole::TextPrimary);
panel.bg(ThemeRole::Surface);
```

## Predefined themes

The headers provide `LightTheme` (default construction gives the light variant), `DarkTheme`, `NeteaseTheme`, `DreamTheme`, `BlurTheme`, and `BlurDarkTheme`.

`Theme::fromSeed(seed)` and `Theme::fromSeedDark(seed)` generate Material Design 3 light and dark themes from a seed color.

```cpp
const Theme brand = Theme::fromSeed(0x6750A4);
setTheme(brand);
```

## Switching

```cpp
setTheme(DarkTheme);
```

The object passed to `setTheme()` must stay valid while the theme is in effect. Predefined themes have static lifetime. `currentTheme()` returns the currently active theme.

## Font scale

`FontScale` defines six font size steps from xs to xxl. `DesktopFont`, `MobileFont`, and `EmbeddedFont` provide presets; custom scales can be written with `setFont()`.

## Widget styles

The theme provides default StyleSets per `WidgetType` (`theme.button()`, `theme.card()`, and others). Widgets read the matching style at initialization and on theme switches; explicitly set properties override theme defaults.
