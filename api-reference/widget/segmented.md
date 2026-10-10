---
title: "Segmented"
---

# Segmented <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/segmented.h>`

**命名空间：** `hiyui`

分段选择器组件

预设多个成员，点击后滑块动画切换，支持单项禁用。



**参见：** `SegmentedProps`


**参见：** `SegmentedItem`

**继承自：** `hiyui::Chainable< Segmented >`

## 类型定义

### SegmentedEventType

分段选择器内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 选中项切换 |

## 公开方法

### itemText

```cpp
Segmented & itemText(int index, const char *value) &
```

更新指定项的文案，不触发选中事件；越界不操作，nullptr 显示空文案。 index 从 0 开始。替换整个集合时清除绑定。

### itemText

```cpp
Segmented & itemText(int index, LocalizedText value) &
```

绑定条目文案，切换语言时保留集合内容和选中状态。

### Segmented

```cpp
Segmented(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Segmented

```cpp
Segmented(SegmentedProps props={})
```

通过属性聚合构造

### init

```cpp
Segmented & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
Segmented & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

### items

```cpp
Segmented & items(const std::vector< SegmentedItem > &items, Notify notify=Notify::No) &
```

设置/替换选项列表，支持动态加载

当前索引仍有效且可选时保留选择，否则选择可用项。

### items

```cpp
Segmented & items(std::initializer_list< const char * > texts, Notify notify=Notify::No) &
```

快捷设置纯文本选项

### selectedIndex

```cpp
Segmented & selectedIndex(int idx, Notify notify=Notify::No) &
```

编程式切换选中项

### selectedIndex

```cpp
int selectedIndex() const
```

获取当前选中索引

### itemData

```cpp
int itemData(int idx) const
```

获取指定项的用户绑定数据。

| 参数 | 说明 |
|---|---|
| `idx` | 项索引，与 onChange 回调索引一致。 |


**返回值：** 项的 data 值；索引越界返回 0。

### onChange

```cpp
Segmented & onChange(F &&f, EventHandle *handle=nullptr) &
```

注册切换事件回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为新选中索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### disableItem

```cpp
Segmented & disableItem(int idx, bool disable=true, Notify notify=Notify::No) &
```

运行时禁用/启用指定项

### activeColor

```cpp
Segmented & activeColor(ThemeRole role) &
```

绑定选中项文字色到主题语义角色，主题切换时自动更新

### activeBg

```cpp
Segmented & activeBg(ThemeRole role) &
```

绑定选中项滑块背景色到主题语义角色，主题切换时自动更新

### textColor

```cpp
Segmented & textColor(ThemeRole role) &
```

绑定未选中项文字色到主题语义角色，主题切换时自动更新

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(SegmentedEventType type)
```

获取分段选择器内部事件码。
