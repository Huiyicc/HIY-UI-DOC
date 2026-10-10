---
title: "CustomDraw"
---

# CustomDraw <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/custom_draw.h>`

**命名空间：** `hiyui`

自绘容器组件

通过 `painter()` 注入 Painter，由 `Painter` 决定全部绘制内容。 支持聚合初始化、链式调用与运行时替换 Painter。



**参见：** `Painter`

**继承自：** `hiyui::Chainable< CustomDraw >`

## 公开方法

### painter

```cpp
CustomDraw & painter(std::unique_ptr< Painter > p) &
```

转移 `Painter` 所有权；nullptr 清空。 替换或删除时，执行中的回调返回后才释放旧 Painter。

### start

```cpp
CustomDraw & start() &
```

启动动画，fps&gt;0 时创建 timer，幂等。

### stop

```cpp
CustomDraw & stop() &
```

停止动画，删除 timer，立即静止。

### fps

```cpp
CustomDraw & fps(int f) &
```

运行时修改帧率，0 = 停，在跑则按新帧率重建 timer。

### redraw

```cpp
CustomDraw & redraw() &
```

手动触发重绘
