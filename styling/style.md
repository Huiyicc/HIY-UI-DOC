---
title: Style
---

# Style

`Style` 描述一个交互状态下的视觉属性。未设置字段不覆盖对象已有样式。

## 背景层

背景从底到顶由 `BgImage`、`BgFill`、`Backdrop` 和 `Overlay` 组成。

```cpp
Style style{
    .bgImage = {.src = "background.png", .fit = BgImageFit::Cover},
    .bgFill = {.color = rgba(0xFFFFFF, 180)},
    .overlay = {.color = rgba(0x000000, 24)},
};
```

`BgImageFit` 四个值：`None` 原始尺寸、`Fill` 拉伸填满（可能变形）、`Contain` 等比缩放适应容器（可能留白）、`Cover` 等比缩放覆盖容器（可能裁剪）。图像源可以是文件路径或 `lv_image_dsc_t*`。

## 装饰

`Border` 设置宽度与颜色。`radius` 控制组件圆角，`opacity` 控制组件及其子元素的整体透明度。

`Shadow` 的字段如下：

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `offset.x` | `int` | `0` | 水平偏移，正值向右 |
| `offset.y` | `int` | `0` | 垂直偏移，正值向下 |
| `blur` | `int` | `0` | 模糊半径，值越大越模糊 |
| `color` | `RGBA` | `0x000000` | 阴影颜色，[`HIYUI_NONE`](/core/constants) = 跟随主题 `ShadowColor` |
| `opacity` | `int` | `HIYUI_NONE_INT` | 透明度，取值 `0` 到 `255`；`HIYUI_NONE_INT` 表示不设置，`0` 表示不显示 |
| `sides` | `ShadowSide` | `ShadowSide::All` | 生效边缘，可使用位或组合 |
| `placement` | `ShadowPlacement` | `ShadowPlacement::Outer` | 阴影位于组件外部或内部 |

`ShadowSide` 是位掩码：

| 值 | 说明 |
|---|---|
| `None` | 不绘制阴影 |
| `Top` | 顶边 |
| `Right` | 右边 |
| `Bottom` | 底边 |
| `Left` | 左边 |
| `All` | 全部边缘 |

`ShadowPlacement::Outer` 在组件外部绘制阴影，`ShadowPlacement::Inset` 在组件内部绘制阴影。指定边缘的阴影使用组件当前状态下的有效圆角。

以下样式只在底边和右边绘制外阴影：

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

## 布局与文字

Style 还可设置 padding（`padH`、`padV`）、margin（`marginH`、`marginV`）、文字颜色（`color`）、字号（`fontSize`）和行高倍率（`lineHeight`）。尺寸单位为主题逻辑像素。Props 或快捷方法与 `style()` 设置同一属性时，后调用的一方生效。

## 合并

`with()` 返回合并后的 Style，适合从基础样式派生状态样式。

```cpp
Style pressed = base.with({
    .bgFill = {.color = 0xD2E3FC},
});
```

未设置标记：颜色字段用 `HIYUI_NONE`，数值字段用 `HIYUI_NONE_INT`，bgImage 用 `src` 为空，gradient 用 `dir` 为 `None`。其余值（含 0）均覆盖。写入 0 关闭对应效果：`border = {.width = 0}` 清除边框，`transition = 0` 移除过渡，`shadow = {.opacity = 0}` 不显示阴影，`backdrop = {.blurRadius = 0}` 关闭背景模糊，`opacity = 255` 完全不透明。

backdrop、bgImage、gradient、shadow 设置后整组替换；shadow 以 opacity 已设置或 color 带 alpha 通道为设置标记。border 的宽度和颜色各自独立覆盖。

完整字段见 [Style API](/api-reference/style/style)。
