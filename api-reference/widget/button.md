---
title: "Button"
---

# Button <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/button.h>`

**命名空间：** `hiyui`

按钮组件，可包含子组件

**参见：** `ButtonProps`


**参见：** `Container`

**继承自：** `hiyui::Container< Button >`

## 公开方法

### Button

```cpp
Button(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Button

```cpp
Button(ButtonProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 按钮属性，支持聚合初始化 |

### init

```cpp
Button & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL button 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Button & init(Widget &parent) &
```

在父对象上创建 LVGL button 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### text

```cpp
Button & text(const char *t) &
```

运行时修改按钮文本

| 参数 | 说明 |
|---|---|
| `t` | 新文本内容，UTF-8 编码 |


**返回值：** 当前组件

### text

```cpp
Button & text(const LocalizedText &t) &
```

绑定随语言更新的按钮文本，复制描述；普通 text 调用替换此绑定。

### icon

```cpp
Button & icon(uint32_t codepoint) &
```

运行时设置图标码点，清除图片源图标并重建内容

| 参数 | 说明 |
|---|---|
| `codepoint` | Material Symbols 码点，0 = 移除图标 |


**返回值：** 当前组件

### icon

```cpp
Button & icon(const void *src) &
```

运行时设置图片源图标，清除图标码点并重建内容

| 参数 | 说明 |
|---|---|
| `src` | 图片源，文件路径或 lv_image_dsc_t，nullptr = 移除图标 |


**返回值：** 当前组件

### stateImage

```cpp
Button & stateImage(StyleState state, const void *src) &
```

运行时替换状态底图，复制路径源；描述符借用至替换或销毁

| 参数 | 说明 |
|---|---|
| `state` | 仅 Normal/Hovered/Pressed/Disabled 生效，其余状态无操作 |
| `src` | 图片源，nullptr = 清除该状态底图 |


**返回值：** 当前组件
