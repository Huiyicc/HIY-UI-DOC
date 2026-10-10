---
title: 动画
---

# 动画

HIY-UI 提供属性过渡、`Anim` 构建器和自绘逐帧动画三种入口。

## 属性过渡

为按钮背景变化设置 180 毫秒的过渡。

```cpp
button.transitionBg(180);
button.bg(0x3367D6);
```

`transitionAll(duration)` 为支持的样式属性设置统一时长。主题 Token 中的动画开关和时长可参与组件默认过渡。

## Anim

包含 `<hiyui/anim/anim.h>`，使用 `Anim(target, exec)` 对整数值插值。`exec` 的签名为 `void(void *, int32_t)`，接收目标地址和当前值，默认缓动为 `Ease::InOut`。

以下代码中的 `value` 是 `int32_t` 类型的应用成员，生命周期覆盖整个动画。

```cpp
const auto apply = +[](void *target, int32_t v) {
  *static_cast<int32_t *>(target) = v;
};
Anim(&value, apply).values(0, 100).duration(200).start();
```

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `values(int32_t from, int32_t to)` | `Anim &` | 设置起止值 |
| `duration(uint32_t ms)`、`delay(uint32_t ms)` | `Anim &` | 设置时长和开始前延迟，单位毫秒 |
| `ease(Ease)` | `Anim &` | 设置缓动曲线 |
| `playback(uint32_t ms)` | `Anim &` | 设置反向回放时长，`0` 不回放 |
| `repeat(int32_t count)` | `Anim &` | 设置重复次数，`1` 为单次，`LV_ANIM_REPEAT_INFINITE` 为无限 |
| `onFinished(AnimTargetCb)` | `Anim &` | 全部回放和重复自然结束后通知一次；停止或替换不调用 |
| `onRemoved(AnimTargetCb)` | `Anim &` | 自然结束、停止或替换时通知一次 |
| `start()` | `lv_anim_t *` | 启动动画，运行期由库管理，无需保存返回句柄 |
| `Anim::running(target, exec = nullptr)` | `bool` | 包含延迟阶段；空回调匹配目标上的全部动画 |
| `Anim::retarget(target, exec, to)` | `bool` | 更新终点并保留已用时间；无匹配动画返回 `false` |
| `Anim::stop(target, exec)` | `void` | 停止匹配动画；空回调匹配该目标的全部动画 |

`AnimTargetCb` 的签名为 `void(void *)`，参数是创建动画时的目标。目标地址必须保持有效到动画移除；释放目标前调用 `Anim::stop()`，或在 `onRemoved()` 中回收目标资源。自然完成时先调用 `onFinished()`，再调用 `onRemoved()`。

`Anim` 本身不会根据主题开关跳过动画；调用方关闭动画时应直接设置最终值。Menu、Tabs、Pagination 使用主题动画开关，TabsEx、Segmented 还受各自 Props 的 `animated` 控制。

## C 接口

包含 `<hiyui/c/anim.h>`，通过 `hiyui_anim_props_t` 配置动画。`exec_cb` 接收当前值；`finished_cb` 与 `removed_cb` 接收目标，设为 `NULL` 不通知。

| C++ 操作 | C 函数 |
| --- | --- |
| `Anim(...).start()` | `hiyui_anim_start()` |
| `Anim::running()` | `hiyui_anim_running()` |
| `Anim::retarget()` | `hiyui_anim_retarget()` |
| `Anim::stop(target, exec)` | `hiyui_anim_stop()`，`exec` 不可为空 |
| `Anim::stop(target, nullptr)` | `hiyui_anim_stop_all()` |

配置字段见 [动画 C 参考](/bindings/c/anim.h)。

## 缓动

`Ease` 提供线性、多次多项式、正弦、指数、圆弧、反弹、回弹和弹性曲线。`AngleLerp` 与 `Impact` 只支持 `Easing::at()` 求值，用作 LVGL 动画路径时按线性处理。

## 逐帧动画

自绘动画由 `CustomDraw` 组件驱动。`CustomDrawProps::fps` 或 `fps(int)` 设置帧率，`start()` 和 `stop()` 控制启停。帧率大于 `0` 时，`Painter::tick(float dt)` 按帧率周期调用，`dt` 为两帧间隔秒数；画面仍在 `paint()` 中提交。

## 周期回调

包含 `<hiyui/misc/timer.h>` 后，`Timer` 可在 UI 线程执行周期回调。定时器由应用或组件持有，允许移动，不允许复制。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `start(uint32_t periodMs, callback)` | `void` | 替换现有周期回调，单位毫秒；`0` 等同 `stop()` |
| `stop()` | `void` | 取消回调，重复调用无操作 |
| `active()` | `bool` | 当前是否持有已创建的定时器 |

析构自动停止定时器，回调中允许停止或销毁自身。C 的周期回调使用 `<hiyui/c/misc.h>` 中的 `hiyui_timer_create()`，由调用方调用 `hiyui_timer_destroy()` 释放句柄。
