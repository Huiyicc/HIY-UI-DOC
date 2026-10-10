---
title: "PaginationProps"
---

# PaginationProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/pagination.h>`

**Namespace:** `hiyui`

Creation properties of pagination

## Public Members

### total

```cpp
int total
```

Total number of records

### current

```cpp
int current
```

Current page number, starting from 1

### pageSize

```cpp
int pageSize
```

Records per page

### width

```cpp
int width
```

Widget width; with a finite width the visible page numbers are reduced automatically

### activeColor

```cpp
uint32_t activeColor
```

Current page number color, HIYUI_DEFAULT = follow theme Primary

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

Page number button size
