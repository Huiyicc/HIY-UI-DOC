---
title: "Checkbox"
---

# Checkbox <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/checkbox.h>`

**命名空间：** `hiyui`

复选框组件

**参见：** `CheckboxProps`

**继承自：** `hiyui::Chainable< Checkbox >`

## 公开方法

### Checkbox

```cpp
Checkbox(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Checkbox

```cpp
Checkbox(CheckboxProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 复选框属性，支持聚合初始化 |

### init

```cpp
Checkbox & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL checkbox 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Checkbox & init(Widget &parent) &
```

在父对象上创建 LVGL checkbox 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### checked

```cpp
Checkbox & checked(bool c, Notify notify=Notify::No) &
```

运行时设置选中状态

| 参数 | 说明 |
|---|---|
| `c` | true = 选中，false = 取消 |


**返回值：** 当前组件

### onChange

```cpp
Checkbox & onChange(F &&f, EventHandle *handle=nullptr) &
```

追加状态变化订阅；回调可接收 bool、Event&amp; 或无参数。

### isChecked

```cpp
bool isChecked() const
```

查询当前是否选中

**返回值：** 选中状态

### text

```cpp
Checkbox & text(const char *t) &
```

运行时修改标签文本

| 参数 | 说明 |
|---|---|
| `t` | 新文本内容，UTF-8 编码 |


**返回值：** 当前组件

### text

```cpp
Checkbox & text(const LocalizedText &text) &
```

绑定随语言更新的文案，复制描述；普通字符串调用替换此绑定。

### checkedColor

```cpp
Checkbox & checkedColor(ThemeRole role) &
```

绑定选中勾选框颜色到主题语义角色，主题切换时自动更新
