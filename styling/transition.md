---
title: 样式过渡
---

# 样式过渡

样式过渡指状态切换（如悬停、按下）时属性渐变而非跳变。

`Style.transition` 字段是最简单的入口，单位为毫秒。设置后状态切换对背景、边框、文字颜色和整体透明度自动应用过渡；`0` 表示无动画。

```cpp
Style style{
    .transition = 180,
};

button.style(style);
```

## 自定义过渡

需要指定属性范围、延迟或缓动时，用 `TransitionCfg` 描述过渡，并通过 `acquireTransition()` 获取 LVGL 描述符。

```cpp
auto *transition = acquireTransition({
    .props = TransitionProps::All,
    .duration = 180,
    .delay = 0,
    .ease = Ease::InOut,
});
```

### TransitionCfg 字段

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `props` | `TransitionProps` | `TransitionProps::All` | 参与过渡的属性集合 |
| `duration` | `uint32_t` | `0` | 时长，毫秒；`0` 使用主题 `AnimDuration` |
| `delay` | `uint32_t` | `0` | 延迟，毫秒 |
| `ease` | `Ease` | `Ease::InOut` | 缓动算法 |

## 属性组

| 值 | 属性范围 |
| --- | --- |
| `BgColor` | 背景颜色与背景透明度 |
| `All` | 背景、边框、文字颜色与整体透明度 |
| `Indicator` | 指示器背景与边框 |
| `Scrollbar` | 滚动条透明度、尺寸与位移 |
| `Knob` | 旋钮 padding 与阴影 |

## 生命周期

相同配置（属性组、时长、延迟、缓动）共享同一个描述符，返回的指针在进程结束前有效。全局动画关闭时 `acquireTransition()` 返回 `nullptr`。测试或热重载环境可调用 `clearTransitionPool()` 清空描述符池。
