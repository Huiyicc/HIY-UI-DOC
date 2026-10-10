---
title: "Image"
---

# Image <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/image.h>`

**命名空间：** `hiyui`

图片显示组件

支持文件路径和 lv_image_dsc_t* 内嵌资源两种图片源。 Windows 路径会自动转换为 LVGL FS 格式。



**参见：** `ImageProps`

**继承自：** `hiyui::Chainable< Image >`

## 公开方法

### Image

```cpp
Image(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Image

```cpp
Image(ImageProps props={})
```

通过属性聚合构造

### init

```cpp
Image & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL image 对象

### init

```cpp
Image & init(Widget &parent) &
```

在父对象上创建 LVGL image 对象

### src

```cpp
Image & src(const void *s) &
```

运行时切换图片源，通用指针

| 参数 | 说明 |
|---|---|
| `s` | 文件路径在返回前复制；图片描述符及像素借用至源替换或组件销毁。 |

### src

```cpp
Image & src(const char *path) &
```

运行时切换图片源，文件路径

| 参数 | 说明 |
|---|---|
| `path` | UTF-8 文件路径，返回前复制。 |

### src

```cpp
Image & src(const ImageBuffer &buffer) &
```

绑定库持有像素资源

复制为组件快照，快照存活至源被替换或组件销毁；绑定后局部 `ImageBuffer` 可销毁。gif 模式实例调用无效；要求组件已初始化。



| 参数 | 说明 |
|---|---|
| `buffer` | 32 位像素资源，无效缓冲不改变当前显示 |

### recolor

```cpp
Image & recolor(uint32_t color, uint8_t opa=255) &
```

设置重着色，图标模式

| 参数 | 说明 |
|---|---|
| `color` | 重着色颜色，0xRRGGBB |
| `opa` | 重着色强度 [0,255]，默认 255 |

### fit

```cpp
Image & fit(ImageFit mode) &
```

设置缩放/对齐模式
