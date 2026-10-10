---
title: "Switch"
---

# Switch <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/switch.h>`

**命名空间：** `hiyui`

开关组件

**参见：** `SwitchProps`

**继承自：** `hiyui::Chainable< Switch >`

## 公开方法

### Switch

```cpp
Switch(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Switch

```cpp
Switch(SwitchProps props={})
```

通过属性聚合构造

### init

```cpp
Switch & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL switch 对象

### init

```cpp
Switch & init(Widget &parent) &
```

在父对象上创建 LVGL switch 对象

### checked

```cpp
Switch & checked(bool c, Notify notify=Notify::No) &
```

运行时设置开关状态

### onChange

```cpp
Switch & onChange(F &&f, EventHandle *handle=nullptr) &
```

追加状态变化订阅；回调可接收 bool、Event&amp; 或无参数。

### isChecked

```cpp
bool isChecked() const
```

查询当前是否打开

### onColor

```cpp
Switch & onColor(ThemeRole role) &
```

绑定打开态背景色到主题语义角色，主题切换时自动更新

### offColor

```cpp
Switch & offColor(ThemeRole role) &
```

绑定关闭态背景色到主题语义角色，主题切换时自动更新

### knobColor

```cpp
Switch & knobColor(ThemeRole role) &
```

绑定滑块颜色到主题语义角色，主题切换时自动更新
