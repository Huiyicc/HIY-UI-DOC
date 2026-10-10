---
title: "TimePicker"
---

# TimePicker <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/time_picker.h>`

**命名空间：** `hiyui`

时间选择器组件

浮层面板包含时/分/秒滚动列，支持 12h/24h 制。

**继承自：** `hiyui::Chainable< TimePicker >`

## 类型定义

### TimePickerEventType

时间选择器内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 值变化 |

## 公开方法

### placeholder

```cpp
TimePicker & placeholder(const char *value) &
```

设置占位文字，nullptr 恢复默认；普通文本取消语言绑定，保留当前值。

### placeholder

```cpp
TimePicker & placeholder(LocalizedText value) &
```

绑定占位文字，复制文案与参数并随语言更新。

### selection

```cpp
TimePickerValue selection() const
```

获取完整已提交选择；面板内未确认的草稿不改变返回值。

### rangeValue

```cpp
TimePicker & rangeValue(const TimeValue &start, const TimeValue &end, Notify notify=Notify::No) &
```

设置范围值，仅 range 模式

### status

```cpp
TimePicker & status(TimePickerStatus s) &
```

运行时设置状态

### onChange

```cpp
TimePicker & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定值变化回调，重复绑定追加，回调参数为当前值

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### footer

```cpp
TimePicker & footer(std::function< void(Widget &)> cb) &
```

自定义页脚构建回调

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(TimePickerEventType type)
```

获取时间选择器内部事件码。
