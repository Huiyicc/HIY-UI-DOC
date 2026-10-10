---
title: "DateValue"
---

# DateValue <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/date_picker.h>`

**Namespace:** `hiyui`

Date value

Uniformly represents the selected value of all picker types. year=0 means nothing is selected.

## Public Members

### year

```cpp
int year
```

Year

### month

```cpp
int month
```

Month 1-12, 0 in Year mode

### day

```cpp
int day
```

Day 1-31, valid only in Date/Week modes

### hour

```cpp
int hour
```

Hour 0-23, -1 = no time part

### minute

```cpp
int minute
```

Minute 0-59

### second

```cpp
int second
```

Second 0-59

## Public Methods

### valid

```cpp
bool valid() const
```

Returns whether a valid date value exists

### hasTime

```cpp
bool hasTime() const
```

Returns whether the time part is valid

### weekOfYear

```cpp
int weekOfYear() const
```

ISO 8601 week number, 1-53.

### quarterOfYear

```cpp
int quarterOfYear() const
```

Quarter, 1-4
