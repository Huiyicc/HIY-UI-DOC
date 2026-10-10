---
title: StyleSet
---

# StyleSet

`StyleSet` 将组件在九种交互状态下的样式组合在一起。

为按钮分别设置默认、悬停、按下、聚焦和禁用样式。

```cpp
StyleSet buttonStyle{
    .normal = {.bgFill = {.color = 0x3367D6}},
    .hovered = {.bgFill = {.color = 0x2855B4}},
    .pressed = {.bgFill = {.color = 0x1F438F}},
    .focused = {.border = {.width = 2, .color = 0x8AB4F8}},
    .disabled = {.opacity = 96},
};

button.style(buttonStyle);
```

## 状态字段

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `normal` | `Style` | `{}` | 默认状态 |
| `hovered` | `Style` | `{}` | 鼠标悬停 |
| `pressed` | `Style` | `{}` | 按下 |
| `focused` | `Style` | `{}` | 聚焦 |
| `checked` | `Style` | `{}` | 选中 |
| `disabled` | `Style` | `{}` | 禁用 |
| `focusKey` | `Style` | `{}` | 键盘聚焦 |
| `mixed` | `Style` | `{}` | 混合选择 |
| `expanded` | `Style` | `{}` | 展开 |

空 `Style`（保持默认 `{}`）不修改该状态。使用 `widget.style(styles)` 应用状态集合；使用 `widget.state(StyleState::Checked, true)` 等调用设置独立状态。

## 运行时方法

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `applyTo(lv_obj_t *obj)` | `void` | 将各状态样式绑定到对应的 LVGL 状态标志 |
| `applyColorsOnly(lv_obj_t *obj, bool skipTextColor = false, bool skipBgColor = false)` | `void` | 仅刷新背景、文字、边框颜色，不修改 radius、padding、fontSize 等结构性属性，用于主题切换时安全刷新 |

## 默认样式与显式样式

`widget.themeStyle(provider)` 在注册时、主题变化及 DPI 更新时应用提供者返回的 `StyleSet`。`widget.style(styles)` 设置的显式值覆盖提供者的结果。

## C 样式

`hiyui_style_spec_t` 和 `hiyui_style_spec_set_t` 分别表示单个样式和九种状态的样式集合。使用 `hiyui_style_spec_default()` 或 `hiyui_style_spec_set_default()` 初始化，再调用 `hiyui_wdg_apply_style_spec()` 或 `hiyui_wdg_apply_style_spec_set()`。

颜色的 `rgb` 为 `HIYUI_NONE` 时不设置；整数尺寸、不透明度和过渡时长为 `HIYUI_NONE_INT` 时不设置。显式零值、黑色和 Alpha 会被保留。`line_height` 为负值时不设置。尺寸为逻辑像素，不透明度范围为 0–255，过渡时长为毫秒。哨兵定义见 [常量与哨兵值](/core/constants)。

以下 C 代码设置透明背景和零内边距，其他属性保持原值。

```c
hiyui_style_spec_t style = hiyui_style_spec_default();
style.bg_fill.color = hiyui_rgba(0x000000, 0);
style.pad_h = 0;
style.pad_v = 0;
hiyui_wdg_apply_style_spec(widget, &style);
```

`hiyui_wdg_bind_theme_style()` 传入已初始化的状态集合供回调填写。回调立即执行，并在主题或 DPI 更新时再次执行；显式样式覆盖其结果。回调不得改变主题或删除组件，输出的图片和路径须保持有效至替换或组件销毁。
