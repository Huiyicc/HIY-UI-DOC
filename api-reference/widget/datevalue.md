---
title: "DateValue"
---

# DateValue <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/date_picker.h>`

**命名空间：** `hiyui`

日期值

统一表示各 picker 类型的选中值。 year=0 表示未选择。

## 公开成员

### year

```cpp
int year
```

年份

### month

```cpp
int month
```

月份 1-12，Year 模式下为 0

### day

```cpp
int day
```

日 1-31，仅 Date/Week 模式有效

### hour

```cpp
int hour
```

小时 0-23，-1=不含时间

### minute

```cpp
int minute
```

分钟 0-59

### second

```cpp
int second
```

秒 0-59

## 公开方法

### valid

```cpp
bool valid() const
```

是否有有效日期值

### hasTime

```cpp
bool hasTime() const
```

时间部分是否有效

### weekOfYear

```cpp
int weekOfYear() const
```

ISO 8601 周数，1-53

### quarterOfYear

```cpp
int quarterOfYear() const
```

季度，1-4
