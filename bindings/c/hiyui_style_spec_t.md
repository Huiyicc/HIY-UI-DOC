---
title: "hiyui_style_spec_t"
---

# hiyui_style_spec_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/style.h>`

可保留未设置值、零值和 Alpha 的样式；使用 hiyui_style_spec_default 初始化。 颜色 rgb 为 HIYUI_NONE 时不设置；整型尺寸、不透明度及 transition_ms 为 HIYUI_NONE_INT 时不设置；line_height 为负值时不设置。尺寸为逻辑像素， 不透明度范围为 [0,255]，transition_ms 为毫秒，line_height 为字号倍率。 bg_image.src 为借用图片数据或路径；apply_style_spec 系列调用复制路径，图片数据由调用方保持有效。

## 公开成员

### color

```c
hiyui_rgba_t color
```

### font_size

```c
int font_size
```

### line_height

```c
float line_height
```

### src

```c
const void * src
```

### fit

```c
hiyui_bg_image_fit_t fit
```

### opacity

```c
uint8_t opacity
```

### recolor

```c
hiyui_rgba_t recolor
```

### recolor_opa

```c
uint8_t recolor_opa
```

### tiled

```c
int tiled
```

### bg_image

```c
struct hiyui_style_spec_t::@151311204022323304361307015371213365067116341024 bg_image
```

### gradient

```c
hiyui_gradient_t gradient
```

### bg_fill

```c
struct hiyui_style_spec_t::@140272030346300046206225016050204112277364225122 bg_fill
```

### blur_radius

```c
int blur_radius
```

### tint

```c
hiyui_rgba_t tint
```

### tint_opacity

```c
uint8_t tint_opacity
```

### backdrop

```c
struct hiyui_style_spec_t::@346236375301345165214373057133025142354142120331 backdrop
```

### overlay

```c
hiyui_rgba_t overlay
```

### radius

```c
int radius
```

### pad_h

```c
int pad_h
```

### pad_v

```c
int pad_v
```

### margin_h

```c
int margin_h
```

### margin_v

```c
int margin_v
```

### opacity

```c
int opacity
```

### transition_ms

```c
int transition_ms
```

### width

```c
int width
```

### border

```c
struct hiyui_style_spec_t::@172245010203171306234316061246157353270326352202 border
```

### offset_x

```c
int offset_x
```

### offset_y

```c
int offset_y
```

### blur

```c
int blur
```

### sides

```c
uint8_t sides
```

### placement

```c
hiyui_shadow_placement_t placement
```

### shadow

```c
struct hiyui_style_spec_t::@201160202205052122023223367377244137116266370276 shadow
```
