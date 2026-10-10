---
title: "ColorPicker"
---

# ColorPicker <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/color_picker.h>`

**命名空间：** `hiyui`

颜色选择器组件

**继承自：** `hiyui::Chainable< ColorPicker >`

## 类型定义

### ColorPickerEventType

颜色选择器内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 颜色或透明度变化 |

## 公开方法

### color

```cpp
ColorPicker & color(uint32_t c, Notify notify=Notify::No) &
```

运行时设置颜色

### color

```cpp
uint32_t color() const
```

获取当前颜色

### alpha

```cpp
ColorPicker & alpha(uint8_t a, Notify notify=Notify::No) &
```

运行时设置 Alpha

### alpha

```cpp
uint8_t alpha() const
```

获取当前 Alpha

### open

```cpp
ColorPicker & open() &
```

打开弹出面板，非面板模式

### close

```cpp
ColorPicker & close() &
```

关闭弹出面板

### onChange

```cpp
ColorPicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定颜色变化回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为颜色与 Alpha |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(ColorPickerEventType type)
```

获取颜色选择器内部事件码。
