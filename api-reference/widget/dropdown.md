---
title: "Dropdown"
---

# Dropdown <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/dropdown.h>`

**命名空间：** `hiyui`

下拉选择组件

**参见：** `DropdownProps`

**继承自：** `hiyui::Chainable< Dropdown >`

## 类型定义

### SearchMatcher

```cpp
using hiyui::Dropdown::SearchMatcher = std::function<bool(const std::string &itemText,
                                          const std::string &query)>
```

搜索匹配插槽，返回 true 表示选项保留

## 公开方法

### placeholder

```cpp
Dropdown & placeholder(const char *value) &
```

设置占位文字，nullptr 恢复默认；普通文本取消语言绑定，保留当前值。

### placeholder

```cpp
Dropdown & placeholder(LocalizedText value) &
```

绑定占位文字，复制文案与参数并随语言更新。

### itemText

```cpp
Dropdown & itemText(int index, const char *value) &
```

更新指定项的文案，不触发选中事件；越界不操作，nullptr 显示空文案。 index 从 0 开始。替换整个集合时清除绑定。

### itemText

```cpp
Dropdown & itemText(int index, LocalizedText value) &
```

绑定条目文案，切换语言时保留集合内容和选中状态。

### part

```cpp
Dropdown & part(DropdownPart part, Part customization) &
```

替换指定部件的定制，初始化前可调用，Part{} 恢复默认。 样式覆盖保留到组件销毁，并在主题、DPI 变化和部件重建后继续生效。 Item 激活回调在选择之前执行，index 为选项索引；其他部件仅支持样式。

### Dropdown

```cpp
Dropdown(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Dropdown

```cpp
Dropdown(DropdownProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 下拉选择属性，支持聚合初始化 |

### init

```cpp
Dropdown & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### init

```cpp
Dropdown & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

| 参数 | 说明 |
|---|---|
| `parent` | 父级 LVGL 对象指针 |


**返回值：** 当前组件

### items

```cpp
Dropdown & items(const std::vector< DropdownItem > &items, Notify notify=Notify::No) &
```

设置选项列表

| 参数 | 说明 |
|---|---|
| `items` | 选项列表 |


**返回值：** 当前组件

默认静默替换；原选中索引越界时清空选择；列表打开时先关闭。 无选中状态为 HIYUI_NO_SELECTION，闭合态显示 placeholder。

### selectedIndex

```cpp
Dropdown & selectedIndex(int idx, Notify notify=Notify::No) &
```

设置选中索引

| 参数 | 说明 |
|---|---|
| `idx` | 选中项索引 |


**返回值：** 当前组件

### selectedIndex

```cpp
int selectedIndex() const
```

获取当前选中索引

**返回值：** 当前选中项索引

### itemData

```cpp
int itemData(int index) const
```

获取指定选项的用户绑定数据。

| 参数 | 说明 |
|---|---|
| `index` | 选项索引，与 `selectedIndex()` 一致。 |


**返回值：** 项的 data 值；索引越界返回 0。

### open

```cpp
Dropdown & open() &
```

打开下拉列表

**返回值：** 当前组件

### close

```cpp
Dropdown & close() &
```

关闭下拉列表

**返回值：** 当前组件

### editable

```cpp
Dropdown & editable(bool enabled) &
```

设置可编辑模式

| 参数 | 说明 |
|---|---|
| `enabled` | true = 闭合态可输入自由文本 |


**返回值：** 当前组件

### editable

```cpp
bool editable() const
```

查询可编辑模式

**返回值：** 当前是否处于可编辑模式

### searchEnabled

```cpp
Dropdown & searchEnabled(bool enabled) &
```

设置搜索过滤开关，列表打开时立即关闭列表

| 参数 | 说明 |
|---|---|
| `enabled` | true = 开启搜索 |


**返回值：** 当前组件

### searchEnabled

```cpp
bool searchEnabled() const
```

查询搜索过滤开关

**返回值：** 当前搜索是否开启

### searchMatcher

```cpp
Dropdown & searchMatcher(SearchMatcher matcher) &
```

设置搜索匹配插槽

| 参数 | 说明 |
|---|---|
| `matcher` | 返回 true 表示选项保留；传空恢复默认匹配 |


**返回值：** 当前组件

### text

```cpp
std::string text() const
```

获取当前文本

**返回值：** 可编辑模式返回输入文本；非可编辑返回选中项文本，无选中返回空串

### text

```cpp
Dropdown & text(const std::string &t, Notify notify=Notify::No) &
```

设置文本，仅可编辑模式生效

| 参数 | 说明 |
|---|---|
| `t` | 新文本 |


**返回值：** 当前组件

默认静默设置；与选项完全一致的文本会恢复对应选中索引。
