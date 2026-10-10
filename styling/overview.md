---
title: 样式概览
---

# 样式概览

Hiy-UI 的样式接口分为三个层次。

| 层 | 类型 | 用途 |
| --- | --- | --- |
| 单状态 | `Style` | 一个状态的背景、文字、边框、阴影、间距和透明度 |
| 多状态 | `StyleSet` | normal、hovered、pressed、focused、checked、disabled、focusKey、mixed、expanded 九种状态 |
| 主题 | `Theme` | Token 值表和组件默认 StyleSet |

## 使用方式

```cpp
Style panel{
    .bgFill = {.color = 0xFFFFFF},
    .border = {.width = 1, .color = 0xDADCE0},
    .radius = 8,
};

Card card;
card.init(parent);
card.style(panel);
```

单个组件的固定外观使用局部 `Style`。颜色写成 `ThemeRole` 语义角色（如 `ThemeRole::Primary`）而不是固定 RGB，主题切换时自动取新主题的颜色。一类组件的默认样式放入 `Theme`。

## 更新

`setTheme()` 切换全局主题，并刷新已注册的组件与主题绑定。固定 RGB 值保持不变，`ThemeRole` 绑定根据新主题取值。

样式中的尺寸值参与 DPI 缩放，单位为主题逻辑像素。运行时修改布局相关样式后，LVGL 在下一布局周期更新坐标。

## 相关页面

- [Style](/styling/style)：单状态样式的全部字段。
- [StyleSet](/styling/style-set)：多状态样式。
- [Theme](/styling/theme)：Token、预定义主题与切换。
- [样式过渡](/styling/transition)：状态切换动画。
- [视觉效果](/styling/effects)：毛玻璃与主题切换过渡。
- [Shape](/styling/shape)：非矩形裁剪与命中测试。
