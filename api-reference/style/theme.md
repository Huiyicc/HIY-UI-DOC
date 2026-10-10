---
title: "Theme"
---

# Theme <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/theme.h>`

**命名空间：** `hiyui`

主题定义，管理设计 `Token` 值表

内部使用固定 256 槽位的数组存储 `Token` 值，通过枚举下标 O(1) 查找。 默认构造为亮色主题。



**参见：** `Token`


**参见：** `StyleSet`

## 颜色工具

### kHoverOpa

```cpp
static lv_opa_t kHoverOpa
```

Hover 背景透明度常量

primary 色叠加此透明度，用于统一的 hover 效果。

### darken

```cpp
static uint32_t darken(uint32_t color, int percent)
```

将颜色加深指定百分比

| 参数 | 说明 |
|---|---|
| `color` | 输入颜色，0xRRGGBB 格式 |
| `percent` | 加深百分比 [0, 100]，0 = 不变，100 = 全黑 |


**返回值：** 加深后的颜色


**参见：** `lighten()`

### lighten

```cpp
static uint32_t lighten(uint32_t color, int percent)
```

将颜色提亮指定百分比

| 参数 | 说明 |
|---|---|
| `color` | 输入颜色，0xRRGGBB 格式 |
| `percent` | 提亮百分比 [0, 100]，0 = 不变，100 = 全白 |


**返回值：** 提亮后的颜色


**参见：** `darken()`

## Token 查询 / 设置

### get

```cpp
uint32_t get(Token t) const
```

获取 `Token` 值

**返回值：** `Token` 对应的值，未设置时返回 HIYUI_NONE

### set

```cpp
Theme & set(Token t, uint32_t value)
```

设置 `Token` 值

**返回值：** 主题引用，支持链式调用

### setFont

```cpp
Theme & setFont(const FontScale &f)
```

批量设置字体大小 `Token`

**返回值：** 主题引用，支持链式调用

## 便捷访问器

### primary

```cpp
uint32_t primary() const
```

主色

### secondary

```cpp
uint32_t secondary() const
```

辅助色

### danger

```cpp
uint32_t danger() const
```

危险色

### warning

```cpp
uint32_t warning() const
```

警告色

### surface

```cpp
uint32_t surface() const
```

表面色，卡片/面板

### background

```cpp
uint32_t background() const
```

页面背景色

### textPrimary

```cpp
uint32_t textPrimary() const
```

主文本色

### textSecondary

```cpp
uint32_t textSecondary() const
```

次文本色

### success

```cpp
uint32_t success() const
```

成功色

### borderColor

```cpp
uint32_t borderColor() const
```

边框色

### borderFallback

```cpp
uint32_t borderFallback() const
```

边框色，borderColor 为 HIYUI_NONE 时回退到中性浅灰

**返回值：** 0xRRGGBB；borderColor 已设置则原样返回

### divider

```cpp
uint32_t divider() const
```

分割线色

### sliderKnobColor

```cpp
uint32_t sliderKnobColor() const
```

滑块类组件手柄的主题适配色

背景亮度较高时返回白色，否则返回 inverseSurface。 供 `Slider` / `Switch` 的 knob 默认色使用。

### spacingXS

```cpp
int spacingXS() const
```

间距 4px

### spacingSM

```cpp
int spacingSM() const
```

间距 8px

### spacingMD

```cpp
int spacingMD() const
```

间距 16px

### spacingLG

```cpp
int spacingLG() const
```

间距 24px

### spacingXL

```cpp
int spacingXL() const
```

间距 32px

### radiusSM

```cpp
int radiusSM() const
```

圆角 4px

### radiusMD

```cpp
int radiusMD() const
```

圆角 8px

### radiusLG

```cpp
int radiusLG() const
```

圆角 12px

### radiusXL

```cpp
int radiusXL() const
```

圆角 16px

### radiusFull

```cpp
int radiusFull() const
```

全圆角 9999px

### fontMD

```cpp
int fontMD() const
```

默认字体大小

### animEnabled

```cpp
bool animEnabled() const
```

全局动画开关

### animDuration

```cpp
int animDuration() const
```

默认动画时长

### animDurationFast

```cpp
int animDurationFast() const
```

快速动画时长

### animDurationSlow

```cpp
int animDurationSlow() const
```

慢速动画时长

### titleBarBg

```cpp
uint32_t titleBarBg() const
```

标题栏背景色

### titleBarText

```cpp
uint32_t titleBarText() const
```

标题栏文字色

### titleBarIcon

```cpp
uint32_t titleBarIcon() const
```

标题栏图标默认色

### titleBarIconHover

```cpp
uint32_t titleBarIconHover() const
```

标题栏图标 hover 色

### titleBarCloseHover

```cpp
uint32_t titleBarCloseHover() const
```

关闭按钮 hover 色

### shadowColor

```cpp
uint32_t shadowColor() const
```

阴影颜色

### shadowOpaScale

```cpp
int shadowOpaScale() const
```

阴影不透明度缩放百分比

### shadowOpa

```cpp
uint8_t shadowOpa(uint8_t base) const
```

按主题缩放阴影不透明度

| 参数 | 说明 |
|---|---|
| `base` | 基准不透明度 [0, 255] |


**返回值：** 缩放后的不透明度，上限 255

### resolveAnimDuration

```cpp
uint32_t resolveAnimDuration(uint32_t ms=0) const
```

获取动画时长，考虑全局开关

如果动画禁用，返回 0；否则返回传入时长或默认时长。



| 参数 | 说明 |
|---|---|
| `ms` | 期望时长，毫秒，0 表示使用默认值 |


**返回值：** 实际时长，动画禁用时为 0

### resolveAnimDurationFast

```cpp
uint32_t resolveAnimDurationFast(uint32_t ms=0) const
```

获取快速动画时长，考虑全局开关

| 参数 | 说明 |
|---|---|
| `ms` | 期望时长，毫秒，0 表示使用默认快速时长 |


**返回值：** 实际时长，动画禁用时为 0

## 组件默认样式

### styleFor

```cpp
StyleSet styleFor(WidgetType type) const
```

根据组件类型返回默认 `StyleSet`

### resolve

```cpp
uint32_t resolve(ThemeRole role) const
```

将语义角色解析为当前主题的颜色值

**返回值：** 0xRRGGBB 颜色值

### button

```cpp
StyleSet button() const
```

按钮默认样式

### label

```cpp
StyleSet label() const
```

标签默认样式

### checkbox

```cpp
StyleSet checkbox() const
```

复选框默认样式

### radio

```cpp
StyleSet radio() const
```

单选按钮默认样式

### switchStyle

```cpp
StyleSet switchStyle() const
```

开关默认样式

### slider

```cpp
StyleSet slider() const
```

滑块默认样式

### input

```cpp
StyleSet input() const
```

文本输入框默认样式

### dropdown

```cpp
StyleSet dropdown() const
```

下拉选择默认样式

### tabs

```cpp
StyleSet tabs() const
```

标签页默认样式

### card

```cpp
StyleSet card() const
```

卡片默认样式

### glassCard

```cpp
StyleSet glassCard() const
```

毛玻璃卡片默认样式

### surfaceStyle

```cpp
Style surfaceStyle(SurfaceRole role) const
```

获取表面材质，尺寸为逻辑像素，不包含文字和布局设置。

### surfaceOpacity

```cpp
uint8_t surfaceOpacity(SurfaceRole role) const
```

获取表面填充的透明度，范围 [0,255]；非毛玻璃主题返回 255。

### glassEnabled

```cpp
bool glassEnabled() const
```

查询主题是否启用毛玻璃表面。

### gradientPrimary

```cpp
Style gradientPrimary() const
```

主色渐变样式

**返回值：** Primary → Secondary 的渐变

## MD3 种子主题工厂

### fromSeed

```cpp
static Theme fromSeed(uint32_t seedColor, MD3Variant variant=MD3Variant::Content, const MD3ChromaConfig &custom={})
```

从种子颜色创建 Light 主题

| 参数 | 说明 |
|---|---|
| `seedColor` | 0xRRGGBB 种子色 |
| `variant` | 配色变体，默认 Content |
| `custom` | 自定义参数，仅 Custom 变体有效 |


**返回值：** 生成的 Light 主题，非 constexpr

### fromSeedDark

```cpp
static Theme fromSeedDark(uint32_t seedColor, MD3Variant variant=MD3Variant::Content, const MD3ChromaConfig &custom={})
```

从种子颜色创建 Dark 主题

| 参数 | 说明 |
|---|---|
| `seedColor` | 0xRRGGBB 种子色 |
| `variant` | 配色变体，默认 Content |
| `custom` | 自定义参数，仅 Custom 变体有效 |


**返回值：** 生成的 Dark 主题，非 constexpr

## 公开成员

### tokens_

```cpp
uint32_t tokens_
```

`Token` 值表，下标即 `Token` 枚举值

## 公开方法

### Theme

```cpp
constexpr Theme()
```

默认构造，初始化为亮色主题的 `Token` 值
