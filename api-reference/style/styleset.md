---
title: "StyleSet"
---

# StyleSet <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style_set.h>`

**命名空间：** `hiyui`

多状态样式集合

聚合各交互状态的 Style，未设置的字段不覆盖已有样式。



**参见：** `Style`


**参见：** `Theme::styleFor()`

## 公开成员

### normal

```cpp
Style normal
```

默认状态样式

### hovered

```cpp
Style hovered
```

悬停状态样式

### pressed

```cpp
Style pressed
```

按下状态样式

### focused

```cpp
Style focused
```

聚焦状态样式

### checked

```cpp
Style checked
```

选中状态样式

### disabled

```cpp
Style disabled
```

禁用状态样式

### focusKey

```cpp
Style focusKey
```

键盘聚焦样式

### mixed

```cpp
Style mixed
```

混合选择样式

### expanded

```cpp
Style expanded
```

展开样式

## 公开方法

### applyTo

```cpp
void applyTo(_lv_obj_t *obj) const
```

将各状态的样式应用到 LVGL 对象

各状态样式绑定到对应的 LVGL 状态标志。



| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象指针 |

### applyColorsOnly

```cpp
void applyColorsOnly(_lv_obj_t *obj, bool skipTextColor=false, bool skipBgColor=false) const
```

仅刷新颜色属性，bg_color / text_color / border_color

不修改 opacity、radius、padding、fontSize 等结构性属性， 用于主题切换时安全刷新，不破坏 variant/自绘等自定义样式。



| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |
| `skipTextColor` | 为 true 时跳过 text_color 刷新，用户已显式覆盖 |
| `skipBgColor` | 为 true 时跳过 bg_color 刷新，用户已显式覆盖 |
