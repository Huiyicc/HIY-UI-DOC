---
title: "Avatar"
---

# Avatar <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/avatar.h>`

**命名空间：** `hiyui`

头像组件

**参见：** `AvatarProps`

**继承自：** `hiyui::Chainable< Avatar >`

## 公开方法

### Avatar

```cpp
Avatar(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Avatar

```cpp
Avatar(AvatarProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 头像属性，支持聚合初始化 |

### init

```cpp
Avatar & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Avatar & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### src

```cpp
Avatar & src(const void *s) &
```

运行时切换图片源

| 参数 | 说明 |
|---|---|
| `s` | 图片源 |


**返回值：** 当前组件

### src

```cpp
Avatar & src(const char *path) &
```

运行时切换图片源

| 参数 | 说明 |
|---|---|
| `path` | 图片文件路径 |


**返回值：** 当前组件

### textColor

```cpp
Avatar & textColor(ThemeRole role) &
```

绑定文字颜色到主题语义角色，主题切换时自动更新

### borderColor

```cpp
Avatar & borderColor(ThemeRole role) &
```

绑定边框颜色到主题语义角色，主题切换时自动更新
