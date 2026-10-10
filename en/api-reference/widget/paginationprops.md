---
title: "PaginationProps"
---

# PaginationProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/pagination.h>`

**Namespace:** `hiyui`

Properties for creating a Pagination

## Public Members

### total

```cpp
int total
```

Total record count

### current

```cpp
int current
```

Current page, starting from 1

### pageSize

```cpp
int pageSize
```

Records per page

### width

```cpp
int width
```

Widget width; the number of visible page buttons shrinks automatically at finite width

### activeColor

```cpp
uint32_t activeColor
```

Current page color, HIYUI_DEFAULT = follow theme Primary

### textColor

```cpp
uint32_t textColor
```

Page number text color

### fontSize

```cpp
int fontSize
```

Font size

### buttonSize

```cpp
int buttonSize
```

Page button size
