---
title: "Radio"
---

# Radio <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/radio.h>`

**命名空间：** `hiyui`

单选按钮组件

同一 group 的 `Radio` 只能有一个被选中。



**参见：** `RadioProps`

**继承自：** `hiyui::Chainable< Radio >`

## 公开方法

### Radio

```cpp
Radio(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Radio

```cpp
Radio(RadioProps props={})
```

通过属性聚合构造

### init

```cpp
Radio & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
Radio & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

### checked

```cpp
Radio & checked(bool c, Notify notify=Notify::No) &
```

运行时设置选中状态

同值设置无副作用。

### onChange

```cpp
Radio & onChange(F &&f, EventHandle *handle=nullptr) &
```

追加状态变化订阅；回调可接收 bool、Event&amp; 或无参数。

### isChecked

```cpp
bool isChecked() const
```

查询当前是否选中

### text

```cpp
Radio & text(const char *t) &
```

运行时修改标签文本

| 参数 | 说明 |
|---|---|
| `t` | UTF-8 编码 |

### text

```cpp
Radio & text(const LocalizedText &text) &
```

绑定随语言更新的文案，复制描述；普通字符串调用替换此绑定。

### checkedColor

```cpp
Radio & checkedColor(ThemeRole role) &
```

绑定选中颜色到主题语义角色，主题切换时自动更新
