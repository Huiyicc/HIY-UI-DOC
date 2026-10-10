---
title: "PaginationProps"
---

# PaginationProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/pagination.h>`

**命名空间：** `hiyui`

分页创建属性

## 公开成员

### total

```cpp
int total
```

总记录数

### current

```cpp
int current
```

当前页码，从 1 开始

### pageSize

```cpp
int pageSize
```

每页记录数

### width

```cpp
int width
```

组件宽度；有限宽度下自动减少可见页码

### activeColor

```cpp
uint32_t activeColor
```

当前页码颜色，HIYUI_DEFAULT = 跟随主题 Primary

### textColor

```cpp
uint32_t textColor
```

页码文字颜色

### fontSize

```cpp
int fontSize
```

字体大小

### buttonSize

```cpp
int buttonSize
```

页码按钮大小
