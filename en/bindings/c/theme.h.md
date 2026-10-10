---
title: "theme.h"
---

# theme.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/theme.h>`

Theme system, the ThemeRole enum, preset themes and switching functions

## Enums

### hiyui_theme_role_t

| Value | Description |
|---|---|
| `HIYUI_THEME_ROLE_BACKGROUND` = 0 |  |
| `HIYUI_THEME_ROLE_SURFACE` |  |
| `HIYUI_THEME_ROLE_PRIMARY` |  |
| `HIYUI_THEME_ROLE_SECONDARY` |  |
| `HIYUI_THEME_ROLE_TEXT_PRIMARY` |  |
| `HIYUI_THEME_ROLE_TEXT_SECONDARY` |  |
| `HIYUI_THEME_ROLE_DIVIDER` |  |
| `HIYUI_THEME_ROLE_BORDER` |  |
| `HIYUI_THEME_ROLE_SUCCESS` |  |
| `HIYUI_THEME_ROLE_WARNING` |  |
| `HIYUI_THEME_ROLE_DANGER` |  |
| `HIYUI_THEME_ROLE_ON_PRIMARY` |  |
| `HIYUI_THEME_ROLE_PRIMARY_CONTAINER` |  |
| `HIYUI_THEME_ROLE_ON_PRIMARY_CONTAINER` |  |
| `HIYUI_THEME_ROLE_SURFACE_VARIANT` |  |
| `HIYUI_THEME_ROLE_ON_SURFACE_VARIANT` |  |
| `HIYUI_THEME_ROLE_OUTLINE` |  |
| `HIYUI_THEME_ROLE_OUTLINE_VARIANT` |  |
| `HIYUI_THEME_ROLE_SURFACE_CONTAINER` |  |
| `HIYUI_THEME_ROLE_SURFACE_CONTAINER_HIGH` |  |
| `HIYUI_THEME_ROLE_TERTIARY` |  |
| `HIYUI_THEME_ROLE_TERTIARY_CONTAINER` |  |
| `HIYUI_THEME_ROLE_ON_SURFACE` |  |
| `HIYUI_THEME_ROLE_INVERSE_SURFACE` |  |
| `HIYUI_THEME_ROLE_ERROR_CONTAINER` |  |
| `HIYUI_THEME_ROLE_NONE` = 0xFF |  |

### hiyui_surface_role_t

| Value | Description |
|---|---|
| `HIYUI_SURFACE_ROLE_BACKGROUND` = 0 |  |
| `HIYUI_SURFACE_ROLE_CHROME` |  |
| `HIYUI_SURFACE_ROLE_PANEL` |  |
| `HIYUI_SURFACE_ROLE_CONTROL` |  |
| `HIYUI_SURFACE_ROLE_CONTENT` |  |
| `HIYUI_SURFACE_ROLE_POPUP` |  |
| `HIYUI_SURFACE_ROLE_SOLID` |  |

### hiyui_theme_preset_t

| Value | Description |
|---|---|
| `HIYUI_THEME_PRESET_DREAM` = 0 |  |
| `HIYUI_THEME_PRESET_LIGHT` |  |
| `HIYUI_THEME_PRESET_DARK` |  |
| `HIYUI_THEME_PRESET_NETEASE` |  |
| `HIYUI_THEME_PRESET_BLUR_LITE` |  |
| `HIYUI_THEME_PRESET_BLUR_DARK` |  |

### hiyui_transition_direction_t

| Value | Description |
|---|---|
| `HIYUI_TRANSITION_DIRECTION_LEFT_TO_RIGHT` = 0 |  |
| `HIYUI_TRANSITION_DIRECTION_RIGHT_TO_LEFT` |  |

### hiyui_widget_type_t

Built-in theme style types.

| Value | Description |
|---|---|
| `HIYUI_WIDGET_BASE` = 0 |  |
| `HIYUI_WIDGET_BUTTON` |  |
| `HIYUI_WIDGET_LABEL` |  |
| `HIYUI_WIDGET_CONTAINER` |  |
| `HIYUI_WIDGET_TITLE_BAR` |  |
| `HIYUI_WIDGET_IMAGE` |  |
| `HIYUI_WIDGET_VBOX` |  |
| `HIYUI_WIDGET_HBOX` |  |
| `HIYUI_WIDGET_FLOW_BOX` |  |
| `HIYUI_WIDGET_SPACER` |  |
| `HIYUI_WIDGET_BOX` |  |
| `HIYUI_WIDGET_CHECKBOX` |  |
| `HIYUI_WIDGET_RADIO` |  |
| `HIYUI_WIDGET_SWITCH` |  |
| `HIYUI_WIDGET_SLIDER` |  |
| `HIYUI_WIDGET_INPUT` |  |
| `HIYUI_WIDGET_DROPDOWN` |  |
| `HIYUI_WIDGET_SELECT` |  |
| `HIYUI_WIDGET_TABS` |  |
| `HIYUI_WIDGET_CARD` |  |
| `HIYUI_WIDGET_MENU` |  |
| `HIYUI_WIDGET_PAGINATION` |  |
| `HIYUI_WIDGET_AVATAR` |  |
| `HIYUI_WIDGET_LIST` |  |
| `HIYUI_WIDGET_MESSAGE_BOX` |  |
| `HIYUI_WIDGET_CONFIRM_DIALOG` |  |
| `HIYUI_WIDGET_TOAST` |  |
| `HIYUI_WIDGET_SEGMENTED` |  |
| `HIYUI_WIDGET_PROGRESS` |  |
| `HIYUI_WIDGET_SPIN` |  |
| `HIYUI_WIDGET_DATE_PICKER` |  |
| `HIYUI_WIDGET_TIME_PICKER` |  |
| `HIYUI_WIDGET_COLOR_PICKER` |  |
| `HIYUI_WIDGET_CHART` |  |
| `HIYUI_WIDGET_CAROUSEL` |  |
| `HIYUI_WIDGET_CHAT_LIST` |  |
| `HIYUI_WIDGET_MENU_BAR` |  |
| `HIYUI_WIDGET_TYPE_BASE` = HIYUI_WIDGET_BASE |  |
| `HIYUI_WIDGET_TYPE_BUTTON` = HIYUI_WIDGET_BUTTON |  |
| `HIYUI_WIDGET_TYPE_LABEL` = HIYUI_WIDGET_LABEL |  |
| `HIYUI_WIDGET_TYPE_CONTAINER` = HIYUI_WIDGET_CONTAINER |  |
| `HIYUI_WIDGET_TYPE_TITLE_BAR` = HIYUI_WIDGET_TITLE_BAR |  |
| `HIYUI_WIDGET_TYPE_IMAGE` = HIYUI_WIDGET_IMAGE |  |
| `HIYUI_WIDGET_TYPE_VBOX` = HIYUI_WIDGET_VBOX |  |
| `HIYUI_WIDGET_TYPE_HBOX` = HIYUI_WIDGET_HBOX |  |
| `HIYUI_WIDGET_TYPE_FLOWBOX` = HIYUI_WIDGET_FLOW_BOX |  |
| `HIYUI_WIDGET_TYPE_SPACER` = HIYUI_WIDGET_SPACER |  |
| `HIYUI_WIDGET_TYPE_BOX` = HIYUI_WIDGET_BOX |  |
| `HIYUI_WIDGET_TYPE_CHECKBOX` = HIYUI_WIDGET_CHECKBOX |  |
| `HIYUI_WIDGET_TYPE_RADIO` = HIYUI_WIDGET_RADIO |  |
| `HIYUI_WIDGET_TYPE_SWITCH` = HIYUI_WIDGET_SWITCH |  |
| `HIYUI_WIDGET_TYPE_SLIDER` = HIYUI_WIDGET_SLIDER |  |
| `HIYUI_WIDGET_TYPE_INPUT` = HIYUI_WIDGET_INPUT |  |
| `HIYUI_WIDGET_TYPE_DROPDOWN` = HIYUI_WIDGET_DROPDOWN |  |
| `HIYUI_WIDGET_TYPE_SELECT` = HIYUI_WIDGET_SELECT |  |
| `HIYUI_WIDGET_TYPE_TABS` = HIYUI_WIDGET_TABS |  |
| `HIYUI_WIDGET_TYPE_CARD` = HIYUI_WIDGET_CARD |  |
| `HIYUI_WIDGET_TYPE_MENU` = HIYUI_WIDGET_MENU |  |
| `HIYUI_WIDGET_TYPE_PAGINATION` = HIYUI_WIDGET_PAGINATION |  |
| `HIYUI_WIDGET_TYPE_AVATAR` = HIYUI_WIDGET_AVATAR |  |
| `HIYUI_WIDGET_TYPE_LIST` = HIYUI_WIDGET_LIST |  |
| `HIYUI_WIDGET_TYPE_MESSAGE_BOX` = HIYUI_WIDGET_MESSAGE_BOX |  |
| `HIYUI_WIDGET_TYPE_CONFIRM_DIALOG` = HIYUI_WIDGET_CONFIRM_DIALOG |  |
| `HIYUI_WIDGET_TYPE_TOAST` = HIYUI_WIDGET_TOAST |  |
| `HIYUI_WIDGET_TYPE_SEGMENTED` = HIYUI_WIDGET_SEGMENTED |  |
| `HIYUI_WIDGET_TYPE_PROGRESS` = HIYUI_WIDGET_PROGRESS |  |
| `HIYUI_WIDGET_TYPE_SPIN` = HIYUI_WIDGET_SPIN |  |
| `HIYUI_WIDGET_TYPE_DATE_PICKER` = HIYUI_WIDGET_DATE_PICKER |  |
| `HIYUI_WIDGET_TYPE_TIME_PICKER` = HIYUI_WIDGET_TIME_PICKER |  |
| `HIYUI_WIDGET_TYPE_COLOR_PICKER` = HIYUI_WIDGET_COLOR_PICKER |  |
| `HIYUI_WIDGET_TYPE_CHART` = HIYUI_WIDGET_CHART |  |
| `HIYUI_WIDGET_TYPE_CAROUSEL` = HIYUI_WIDGET_CAROUSEL |  |
| `HIYUI_WIDGET_TYPE_CHAT_LIST` = HIYUI_WIDGET_CHAT_LIST |  |

### hiyui_token_t

Theme tokens, user slots are [128,255].

| Value | Description |
|---|---|
| `HIYUI_TOKEN_PRIMARY` = 0 |  |
| `HIYUI_TOKEN_SECONDARY` |  |
| `HIYUI_TOKEN_DANGER` |  |
| `HIYUI_TOKEN_WARNING` |  |
| `HIYUI_TOKEN_SURFACE` |  |
| `HIYUI_TOKEN_BACKGROUND` |  |
| `HIYUI_TOKEN_TEXT_PRIMARY` |  |
| `HIYUI_TOKEN_TEXT_SECONDARY` |  |
| `HIYUI_TOKEN_SUCCESS` |  |
| `HIYUI_TOKEN_BORDER_COLOR` |  |
| `HIYUI_TOKEN_DIVIDER` |  |
| `HIYUI_TOKEN_ON_PRIMARY` |  |
| `HIYUI_TOKEN_PRIMARY_CONTAINER` |  |
| `HIYUI_TOKEN_ON_PRIMARY_CONTAINER` |  |
| `HIYUI_TOKEN_ON_SECONDARY` |  |
| `HIYUI_TOKEN_SECONDARY_CONTAINER` |  |
| `HIYUI_TOKEN_ON_SECONDARY_CONTAINER` |  |
| `HIYUI_TOKEN_TERTIARY` |  |
| `HIYUI_TOKEN_ON_TERTIARY` |  |
| `HIYUI_TOKEN_TERTIARY_CONTAINER` |  |
| `HIYUI_TOKEN_ON_TERTIARY_CONTAINER` |  |
| `HIYUI_TOKEN_ON_ERROR` |  |
| `HIYUI_TOKEN_ERROR_CONTAINER` |  |
| `HIYUI_TOKEN_ON_ERROR_CONTAINER` |  |
| `HIYUI_TOKEN_SURFACE_VARIANT` |  |
| `HIYUI_TOKEN_ON_SURFACE` |  |
| `HIYUI_TOKEN_ON_SURFACE_VARIANT` |  |
| `HIYUI_TOKEN_SURFACE_CONTAINER` |  |
| `HIYUI_TOKEN_SURFACE_CONTAINER_HIGH` |  |
| `HIYUI_TOKEN_OUTLINE` |  |
| `HIYUI_TOKEN_OUTLINE_VARIANT` |  |
| `HIYUI_TOKEN_INVERSE_SURFACE` |  |
| `HIYUI_TOKEN_INVERSE_ON_SURFACE` |  |
| `HIYUI_TOKEN_SPACING_XS` |  |
| `HIYUI_TOKEN_SPACING_SM` |  |
| `HIYUI_TOKEN_SPACING_MD` |  |
| `HIYUI_TOKEN_SPACING_LG` |  |
| `HIYUI_TOKEN_SPACING_XL` |  |
| `HIYUI_TOKEN_RADIUS_SM` |  |
| `HIYUI_TOKEN_RADIUS_MD` |  |
| `HIYUI_TOKEN_RADIUS_LG` |  |
| `HIYUI_TOKEN_RADIUS_XL` |  |
| `HIYUI_TOKEN_RADIUS_FULL` |  |
| `HIYUI_TOKEN_FONT_XS` |  |
| `HIYUI_TOKEN_FONT_SM` |  |
| `HIYUI_TOKEN_FONT_MD` |  |
| `HIYUI_TOKEN_FONT_LG` |  |
| `HIYUI_TOKEN_FONT_XL` |  |
| `HIYUI_TOKEN_FONT_XXL` |  |
| `HIYUI_TOKEN_GLASS_TINT` |  |
| `HIYUI_TOKEN_GLASS_TINT_OPA` |  |
| `HIYUI_TOKEN_ANIM_ENABLED` |  |
| `HIYUI_TOKEN_ANIM_DURATION` |  |
| `HIYUI_TOKEN_ANIM_DURATION_FAST` |  |
| `HIYUI_TOKEN_ANIM_DURATION_SLOW` |  |
| `HIYUI_TOKEN_TITLE_BAR_BG` |  |
| `HIYUI_TOKEN_TITLE_BAR_TEXT` |  |
| `HIYUI_TOKEN_TITLE_BAR_ICON` |  |
| `HIYUI_TOKEN_TITLE_BAR_ICON_HOVER` |  |
| `HIYUI_TOKEN_TITLE_BAR_CLOSE_HOVER` |  |
| `HIYUI_TOKEN_SHADOW_COLOR` |  |
| `HIYUI_TOKEN_SHADOW_OPA_SCALE` |  |
| `HIYUI_TOKEN_GLASS_BLUR_RADIUS` |  |
| `HIYUI_TOKEN_CONTROL_OPACITY` |  |
| `HIYUI_TOKEN_POPUP_OPACITY` |  |
| `HIYUI_TOKEN_WINDOW_TINT_OPACITY` |  |
| `HIYUI_TOKEN_USER_BEGIN` = 128 |  |

## Functions

### hiyui_theme_style_for

```c
HIYUI_API int HIYUI_CALL hiyui_theme_style_for(hiyui_widget_type_t type, hiyui_style_spec_set_t *out)
```

Gets the current theme style, returns 0 when out is NULL or the type is invalid. Image sources in the output are borrowed until the theme changes and must not be used across a theme switch.

### hiyui_theme_get_token

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_theme_get_token(hiyui_token_t token)
```

Gets the current theme token, returns HIYUI_NONE for an invalid slot.

### hiyui_theme_anim_duration_fast

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_theme_anim_duration_fast(void)
```

Fast animation duration in milliseconds, returns 0 when animations are disabled.

### hiyui_theme_hover_opacity

```c
HIYUI_API uint8_t HIYUI_CALL hiyui_theme_hover_opacity(void)
```

Default hover opacity of themed controls, in the range [0,255].

### hiyui_color_darken

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_color_darken(uint32_t color, int percent)
```

Darkens or lightens a color, percent is in the range [0,100].

### hiyui_color_lighten

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_color_lighten(uint32_t color, int percent)
```

### hiyui_set_theme

```c
HIYUI_API void HIYUI_CALL hiyui_set_theme(hiyui_theme_preset_t preset)
```

Switches to a preset theme.

### hiyui_set_theme_from_seed

```c
HIYUI_API void HIYUI_CALL hiyui_set_theme_from_seed(uint32_t seed_color, int dark)
```

Generates a theme from a seed color, dark=1 means dark mode.

### hiyui_theme_resolve

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_theme_resolve(hiyui_theme_role_t role)
```

Resolves a semantic color role to 0xRRGGBB.

### hiyui_theme_glass_card

```c
HIYUI_API void HIYUI_CALL hiyui_theme_glass_card(hiyui_style_set_t *out)
```

Exports the theme glass card style set, unset fields are zero.

### hiyui_theme_gradient_primary

```c
HIYUI_API void HIYUI_CALL hiyui_theme_gradient_primary(hiyui_style_t *out)
```

Exports the theme primary gradient button style, unset fields are zero.

### hiyui_theme_glass_tint

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_theme_glass_tint(void)
```

Theme glass tint, 0xRRGGBB.

### hiyui_theme_glass_enabled

```c
HIYUI_API int HIYUI_CALL hiyui_theme_glass_enabled(void)
```

Returns 1 when the theme enables glass.

### hiyui_theme_surface_opacity

```c
HIYUI_API uint8_t HIYUI_CALL hiyui_theme_surface_opacity(hiyui_surface_role_t role)
```

Surface material opacity, [0,255].

### hiyui_theme_transition_play_preset

```c
HIYUI_API void HIYUI_CALL hiyui_theme_transition_play_preset(hiyui_theme_preset_t preset, hiyui_transition_direction_t dir)
```

Switches to a preset theme with a transition animation.

### hiyui_theme_transition_play_seed

```c
HIYUI_API void HIYUI_CALL hiyui_theme_transition_play_seed(uint32_t seed_color, int dark, hiyui_transition_direction_t dir)
```

Switches to a seed theme with a transition animation, dark=1 means dark mode.

### hiyui_theme_transition_set_exclusion_obj

```c
HIYUI_API void HIYUI_CALL hiyui_theme_transition_set_exclusion_obj(hiyui_widget_t *obj)
```

Sets the object excluded from the transition animation.

### hiyui_theme_transition_clear_exclusion

```c
HIYUI_API void HIYUI_CALL hiyui_theme_transition_clear_exclusion(void)
```

Clears the object excluded from the transition animation.

### hiyui_icon_font_init

```c
HIYUI_API int HIYUI_CALL hiyui_icon_font_init(const unsigned char *data, unsigned int size)
```

Initializes the embedded Material Symbols icon font.
