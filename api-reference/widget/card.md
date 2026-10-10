---
title: "Card"
---

# Card <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/card.h>`

**命名空间：** `hiyui`

卡片容器组件，可包含子组件

**参见：** `CardProps`


**参见：** `Container`

**继承自：** `hiyui::Container< Card >`

## 公开方法

### Card

```cpp
Card(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Card

```cpp
Card(CardProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 卡片属性，支持聚合初始化 |

### init

```cpp
Card & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Card & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### title

```cpp
Card & title(const char *t) &
```

设置卡片标题

| 参数 | 说明 |
|---|---|
| `t` | 标题文本，UTF-8 编码 |


**返回值：** 当前组件

### title

```cpp
Card & title(const LocalizedText &text) &
```

绑定随语言更新的标题，缺少标题区时创建；普通 title 调用替换此绑定。

### titleColor

```cpp
Card & titleColor(ThemeRole role) &
```

绑定标题颜色到主题语义角色，主题切换时自动更新
