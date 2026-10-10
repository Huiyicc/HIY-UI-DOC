---
title: "List"
---

# List <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/list.h>`

**命名空间：** `hiyui`

列表组件，虚表渲染

基于 `VirtualTableBase` 行对象池，只创建视口内可见行的 lv_obj_t， 滚动时复用行对象并重新绑定数据。



**参见：** `ListProps`


**参见：** `ListItem`

**继承自：** `hiyui::VirtualTableBase< List >`

## 类型定义

### ListEventType

列表内部事件类型

| 值 | 说明 |
|---|---|
| `Activate` |  |
| `Select` | 选择变化 |

## 公开方法

### List

```cpp
List(lv_obj_t *raw)
```

包装已有 LVGL 对象

### List

```cpp
List(ListProps props={})
```

通过属性聚合构造

### init

```cpp
List & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
List & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

### items

```cpp
List & items(const std::vector< ListItem > &listItems, Notify notify=Notify::No) &
```

批量设置列表项

### selectedIndex

```cpp
List & selectedIndex(int idx, Notify notify=Notify::No) &
```

设置选中项

| 参数 | 说明 |
|---|---|
| `idx` | 用户侧逻辑索引，不含 separator |

### selectedIndex

```cpp
int selectedIndex() const
```

获取当前选中项索引

**返回值：** 选中项索引，-1 = 无选中

### itemData

```cpp
int itemData(int logicalIdx) const
```

获取指定项的用户绑定数据。

| 参数 | 说明 |
|---|---|
| `logicalIdx` | 逻辑索引，与 onSelect 回调索引一致，不含 separator。 |


**返回值：** 项的 data 值；索引越界返回 0。

### onActivate

```cpp
List & onActivate(F &&f, EventHandle *handle=nullptr) &
```

绑定条目激活事件回调，重复绑定追加

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(int) |

| 参数 | 说明 |
|---|---|
| `f` | 参数为所点条目的逻辑索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### hoverBg

```cpp
List & hoverBg(ThemeRole role) &
```

绑定悬停背景色到主题语义角色，主题切换时自动更新

### selectedBg

```cpp
List & selectedBg(ThemeRole role) &
```

绑定选中项背景色到主题语义角色，主题切换时自动更新

### textColor

```cpp
List & textColor(ThemeRole role) &
```

绑定文字颜色到主题语义角色，主题切换时自动更新

### selectedTextColor

```cpp
List & selectedTextColor(ThemeRole role) &
```

绑定选中项文字色到主题语义角色，主题切换时自动更新

### itemCount

```cpp
int itemCount() const
```

获取数据项总数，不含 separator

### appendItem

```cpp
List & appendItem(const ListItem &item, Notify notify=Notify::No) &
```

追加一条数据项

beginUpdate 期间仅修改数据，endUpdate 时统一刷新。 非 beginUpdate 期间每次追加立即刷新。

### beginUpdate

```cpp
List & beginUpdate() &
```

暂停视图刷新，用于批量操作

### endUpdate

```cpp
List & endUpdate() &
```

恢复视图刷新并立即更新

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(ListEventType type)
```

获取列表内部事件码。
