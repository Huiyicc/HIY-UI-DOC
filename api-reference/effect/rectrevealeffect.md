---
title: "RectRevealEffect"
---

# RectRevealEffect <Badge type="info" text="类" />

**头文件：** `#include <hiyui/effect/rect_reveal_effect.h>`

**命名空间：** `hiyui`

矩形扩散过渡效果

扩散区域以 origin 的圆角矩形为起点，随即以圆形扩张覆盖全屏，区域内露出新主题，区域外保留旧截图。

**继承自：** `hiyui::TransitionEffect`

## 公开方法

### RectRevealEffect

```cpp
RectRevealEffect(_lv_obj_t *origin=nullptr)
```

以 origin 的矩形为扩散起点

矩形坐标与圆角在构造时读取，origin 随后销毁不影响效果。



| 参数 | 说明 |
|---|---|
| `origin` | 触发控件，空指针时以屏幕中心为起点 |

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir) override
```

动画开始前的初始化

| 参数 | 说明 |
|---|---|
| `w` | 截图宽度，像素 |
| `h` | 截图高度，像素 |
| `dir` | 动画方向 |

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride) override
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
virtual int durationMs() const override
```

动画时长，毫秒

**返回值：** 默认 300ms，子类可重写
