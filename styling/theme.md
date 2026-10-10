---
title: Theme
---

# Theme

`Theme` 保存 Token 表，并为组件类型提供默认 `StyleSet`。

## Token

Token 是主题中的命名值，覆盖语义颜色、间距、圆角、字号、动画时长、毛玻璃参数和标题栏颜色。`Theme::set()` 返回主题引用，支持链式调用。

```cpp
Theme theme;
theme.set(Token::Primary, 0x3367D6)
     .set(Token::Surface, 0xFFFFFF)
     .set(Token::TextPrimary, 0x202124)
     .set(Token::RadiusMD, 8);
```

`Theme::get(Token::Primary)` 读取 Token 值，未设置时返回 [`HIYUI_NONE`](/core/constants)。

`ThemeRole` 是语义颜色角色（`Primary`、`Surface`、`TextPrimary`、`Danger` 等），用于运行时颜色绑定；主题切换时绑定处自动取新主题的颜色。

```cpp
title.textColor(ThemeRole::TextPrimary);
panel.bg(ThemeRole::Surface);
```

## 预定义主题

头文件提供 `LightTheme`（默认构造即为亮色）、`DarkTheme`、`NeteaseTheme`、`DreamTheme`、`BlurTheme` 和 `BlurDarkTheme`。

`Theme::fromSeed(seed)` 和 `Theme::fromSeedDark(seed)` 从一个种子颜色生成 Material Design 3 配色的亮色和暗色主题。

```cpp
const Theme brand = Theme::fromSeed(0x6750A4);
setTheme(brand);
```

## 切换

```cpp
setTheme(DarkTheme);
```

传入 `setTheme()` 的对象在主题生效期间保持有效。预定义主题具有静态生命周期。`currentTheme()` 返回当前生效的主题。

## 字体比例

`FontScale` 定义 xs 到 xxl 六档字号。`DesktopFont`、`MobileFont` 和 `EmbeddedFont` 提供预设值，也可使用 `setFont()` 写入自定义比例。

## 组件样式

主题按 `WidgetType` 提供组件默认 StyleSet（`theme.button()`、`theme.card()` 等）。组件初始化和主题切换时读取对应样式；显式设置的属性覆盖主题默认值。
