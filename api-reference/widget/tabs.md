---
title: "Tabs"
---

# Tabs <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tabs.h>`

**命名空间：** `hiyui`

标签页组件，提供标签栏与内容面板的布局

**参见：** `TabsProps`

**继承自：** `hiyui::Chainable< Tabs >`

## 公开方法

### itemText

```cpp
Tabs & itemText(int index, const char *value) &
```

更新指定项的文案，不触发选中事件；越界不操作，nullptr 显示空文案。 index 从 0 开始。替换整个集合时清除绑定。

### itemText

```cpp
Tabs & itemText(int index, LocalizedText value) &
```

绑定条目文案，切换语言时保留集合内容和选中状态。

### Tabs

```cpp
Tabs(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Tabs

```cpp
Tabs(TabsProps props={})
```

通过属性聚合构造

### init

```cpp
Tabs & init(lv_obj_t *parent) &
```

在父对象上创建标签页

### init

```cpp
Tabs & init(Widget &parent) &
```

在父对象上创建标签页

### activeIndex

```cpp
Tabs & activeIndex(int idx, Notify notify=Notify::No) &
```

切换到指定标签页

### activeIndex

```cpp
int activeIndex() const
```

获取当前激活的标签索引

**返回值：** 空集合返回 HIYUI_NO_SELECTION。

### itemData

```cpp
int itemData(int idx) const
```

获取指定标签的用户绑定数据。

| 参数 | 说明 |
|---|---|
| `idx` | 标签索引，与 `activeIndex()` 索引一致。 |


**返回值：** 项的 data 值；索引越界返回 0。

### items

```cpp
Tabs & items(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

替换全部标签页，销毁旧页面及其内容。

| 参数 | 说明 |
|---|---|
| `items` | 文本在返回前复制；旧页面的 `Ref` 失效。 |

### appendItems

```cpp
Tabs & appendItems(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

追加标签页，保留已有页面及其内容。

### position

```cpp
Tabs & position(TabPosition pos) &
```

运行时切换标签栏位置

### tabPanel

```cpp
Tabs & tabPanel(int idx, F &&builder) &
```

通过回调填充标签页内容

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(Widget&amp;)，参数为面板的 `Widget` 包装 |

### tabContent

```cpp
lv_obj_t * tabContent(int idx) const
```

获取指定标签页的内容面板

### activeColor

```cpp
Tabs & activeColor(ThemeRole role) &
```

绑定激活标签颜色到主题语义角色，主题切换时自动更新

### inactiveColor

```cpp
Tabs & inactiveColor(ThemeRole role) &
```

绑定未激活标签颜色到主题语义角色，主题切换时自动更新
