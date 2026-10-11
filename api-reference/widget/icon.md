---
title: "Icon"
---

# Icon <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/icon.h>`

**命名空间：** `hiyui`

Material Symbols 图标组件

内部使用 lv_image 展示 `FontIcon` 渲染的 bitmap， 通过 image_recolor 机制实现着色，兼容主题系统。

**继承自：** `hiyui::Chainable< Icon >`

## 公开方法

### Icon

```cpp
Icon(lv_obj_t *obj)
```

`Ref` 代理构造，内部使用

### init

```cpp
Icon & init(Widget &parent) &
```

在 `Widget` 父容器中初始化

### init

```cpp
Icon & init(lv_obj_t *parent) &
```

在 lv_obj_t 父对象中初始化

### codepoint

```cpp
Icon & codepoint(uint32_t cp) &
```

设置图标码点

### iconSize

```cpp
Icon & iconSize(uint32_t sz) &
```

设置图标像素大小

### iconStyle

```cpp
Icon & iconStyle(const FontIconStyle &s) &
```

设置 Variable Font 轴参数

### color

```cpp
Icon & color(uint32_t c) &
```

设置图标颜色，固定色值

### color

```cpp
Icon & color(ThemeRole role) &
```

绑定图标颜色到主题角色，响应式

### colorFrom

```cpp
Icon & colorFrom(Widget &source) &
```

跟随已挂载组件当前文字颜色，响应状态与主题；重复调用替换来源，来源删除后保持最后颜色，失效来源无操作。

### rendered

```cpp
bool rendered() const
```

是否已获得可显示的图标图像，未挂载或渲染不可用时返回 false。

### opacity

```cpp
Icon & opacity(int opa) &
```

设置图标透明度，0=全透明，255=不透明，HIYUI_DEFAULT_INT = 恢复默认 255
