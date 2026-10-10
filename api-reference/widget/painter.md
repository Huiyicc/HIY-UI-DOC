---
title: "Painter"
---

# Painter <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/painter.h>`

**命名空间：** `hiyui`

自绘策略基类

实例通过 std::unique_ptr 移交给 CustomDraw，生命周期与 LVGL 对象绑定， 回调中可安全使用 this。

## 公开方法

### paint

```cpp
virtual void paint(DrawCtx &ctx, const PaintCtx &pc)=0
```

重绘使用局部物理坐标；仅提交绘制，不在此回调内修改组件树、主题或尺寸。

### tick

```cpp
virtual void tick(float)
```

动画帧；仅 `CustomDraw` 的 fps &gt; 0 时被周期调用。dt 单位秒。

### onTheme

```cpp
virtual void onTheme(const Theme &)
```

主题切换通知，库保证在下次 paint 前调用。

### onEvent

```cpp
virtual void onEvent(Event &, const PaintCtx &)
```

处理输入与状态事件；返回后自动请求重绘，Event 不得保存到回调之外。

### onResize

```cpp
virtual void onResize(const PaintCtx &)
```

安装策略及组件尺寸变化时调用，尺寸可以为零。

### onDpi

```cpp
virtual void onDpi(const PaintCtx &)
```

安装策略及 DPI 更新后调用。
