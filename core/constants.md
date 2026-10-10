---
title: 常量
---

# 常量

## 哨兵值

哨兵值（表示"未设置"或特殊含义的固定常量）只用于声明支持它们的字段、参数或返回值。

| 常量 | 用途 |
| --- | --- |
| `HIYUI_AUTO` | 自动值，由布局计算；用作最大尺寸时表示移除局部上限，值为 `-1` |
| `HIYUI_DEFAULT` | 颜色字段跟随当前主题，值为 `0xFFFFFFFE` |
| `HIYUI_NONE` | 颜色字段未设置 |
| `HIYUI_TRANSPARENT` | 颜色字段强制透明，覆盖主题设置 |
| `HIYUI_NONE_INT` | 整型字段未设置 |
| `HIYUI_NO_SELECTION` | 没有选中项；仅用于声明支持该值的索引接口 |
| `HIYUI_VIDEO_TIME_UNKNOWN` | 值为 `-1`，表示未知视频时长，单位为毫秒；启用 FFmpeg 的 C++ 视频组件提供 |

`Video::durationMs()` 在未知或未加载时返回 `HIYUI_VIDEO_TIME_UNKNOWN`。不能把它当作已知时长计算播放百分比。

## 布局枚举

- `Align`。Flex 容器主轴或交叉轴的对齐方式。
- `Anchor`。组件相对父对象的九宫格锚点。
- `Direction`。水平或垂直排列方向。
- `TextAlign`。Checkbox、Radio、Dropdown 中文字的水平对齐。
- `IndicatorSide`。Checkbox 与 Radio 指示器显示在文字哪一侧。

## ScrollMode

容器允许滚动的轴。

| 值 | 行为 |
| --- | --- |
| `Off` | 禁用滚动 |
| `Auto` | 内容溢出时启用，方向随内容 |
| `Horizontal` | 仅水平滚动 |
| `Vertical` | 仅垂直滚动 |
| `Both` | 水平和垂直都可滚动 |

## Transition

窗口导航的过渡动画类型：`None`、`SlideLeft`、`SlideRight`、`SlideUp`、`SlideDown` 和 `Fade`。

完整枚举与转换函数见 [API 参考](/api-reference/)。
