---
title: "TransitionEffect"
---

# TransitionEffect <Badge type="info" text="类" />

**头文件：** `#include <hiyui/effect/transition_effect.h>`

**命名空间：** `hiyui`

主题过渡动画效果抽象基类

子类实现 `prepare()` 和 `update()` 来定义具体的像素处理算法。 `ThemeTransition` 在动画每帧调用 `update()`，传入当前进度和截图缓冲区。

## 公开方法

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir)=0
```

动画开始前的初始化

| 参数 | 说明 |
|---|---|
| `w` | 截图宽度，像素 |
| `h` | 截图高度，像素 |
| `dir` | 动画方向 |

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride)=0
```

每帧更新截图像素

实现类在此方法中修改 buf 中的像素数据，实现过渡效果。 buf 格式为 ARGB8888，stride 为每行字节数。 将不需要显示的区域 alpha 设为 0 即可露出下方新内容。



| 参数 | 说明 |
|---|---|
| `progress` | 动画进度 [0.0, 1.0] |
| `buf` | 截图像素缓冲区，ARGB8888，可修改 |
| `w` | 宽度，像素 |
| `h` | 高度，像素 |
| `stride` | 每行字节数 |

### durationMs

```cpp
virtual int durationMs() const
```

动画时长，毫秒

**返回值：** 默认 300ms，子类可重写
