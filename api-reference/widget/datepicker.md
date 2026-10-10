---
title: "DatePicker"
---

# DatePicker <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/date_picker.h>`

**命名空间：** `hiyui`

日期选择器组件

**继承自：** `hiyui::Chainable< DatePicker >`

## 类型定义

### DatePickerEventType

日期选择器内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 值变化 |
| `CalendarChanged` | 日历选中变化 |
| `PanelChanged` | 面板模式变化 |

## 公开方法

### placeholder

```cpp
DatePicker & placeholder(const char *value) &
```

设置占位文字，nullptr 恢复默认；普通文本取消语言绑定，保留当前值。

### placeholder

```cpp
DatePicker & placeholder(LocalizedText value) &
```

绑定占位文字，复制文案与参数并随语言更新。

### value

```cpp
DatePicker & value(const DateValue &v, Notify notify=Notify::No) &
```

设置当前值

### value

```cpp
DateValue value() const
```

获取当前值

### selection

```cpp
DatePickerValue selection() const
```

获取完整已提交选择；面板内未确认的草稿不改变返回值。

### rangeValue

```cpp
DatePicker & rangeValue(const DateValue &start, const DateValue &end, Notify notify=Notify::No) &
```

设置范围值，仅 range 模式

### rangeValue

```cpp
std::pair< DateValue, DateValue > rangeValue() const
```

获取范围值

### open

```cpp
DatePicker & open() &
```

打开面板

### close

```cpp
DatePicker & close() &
```

关闭面板

### status

```cpp
DatePicker & status(DatePickerStatus s) &
```

运行时设置自定义状态

### picker

```cpp
DatePicker & picker(DatePickerType t, Notify notify=Notify::No) &
```

运行时切换 picker 类型

### panelMode

```cpp
DatePicker & panelMode(DatePanelMode m) &
```

受控面板模式

### onChange

```cpp
DatePicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定值变化回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为当前值 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

### onCalendarChange

```cpp
DatePicker & onCalendarChange(F &&f, EventHandle *handle=nullptr) &
```

绑定日历选中变化回调，重复绑定追加；range 模式下首次选中时触发

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为选中值 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

### disabledDate

```cpp
DatePicker & disabledDate(std::function< bool(const DateValue &)> cb) &
```

禁用日期判断回调

### onPanelChange

```cpp
DatePicker & onPanelChange(F &&f, EventHandle *handle=nullptr) &
```

绑定面板模式变化回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为面板模式与当前值 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

### footer

```cpp
DatePicker & footer(std::function< void(Widget &)> cb) &
```

自定义页脚构建回调

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(DatePickerEventType type)
```

获取日期选择器内部事件码。
