---
title: "Pagination"
---

# Pagination <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/pagination.h>`

**命名空间：** `hiyui`

分页组件

**参见：** `PaginationProps`

**继承自：** `hiyui::Chainable< Pagination >`

## 类型定义

### PaginationEventType

分页内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 页码变化 |

## 公开方法

### Pagination

```cpp
Pagination(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Pagination

```cpp
Pagination(PaginationProps props={})
```

通过属性聚合构造

### init

```cpp
Pagination & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
Pagination & init(Widget &parent) &
```

在父对象上创建 LVGL 对象

### currentPage

```cpp
Pagination & currentPage(int page, Notify notify=Notify::No) &
```

跳转到指定页码

| 参数 | 说明 |
|---|---|
| `page` | 页码，从 1 开始 |

### currentPage

```cpp
int currentPage() const
```

获取当前页码

**返回值：** 当前页码

### totalPages

```cpp
int totalPages() const
```

获取总页数

**返回值：** 总页数

### onChange

```cpp
Pagination & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定页码变化事件，重复绑定追加

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void(int) |

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为新页码 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### activeColor

```cpp
Pagination & activeColor(ThemeRole role) &
```

绑定当前页码颜色到主题语义角色，主题切换时自动更新

### textColor

```cpp
Pagination & textColor(ThemeRole role) &
```

绑定页码文字颜色到主题语义角色，主题切换时自动更新

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(PaginationEventType type)
```

获取分页内部事件码。

### rebuild

```cpp
static void rebuild(PaginationState *st)
```

重建按钮布局，内部使用

### goToPage

```cpp
static void goToPage(PaginationState *st, int page, Notify notify=Notify::Yes)
```

切换页码，数字条滚动动画，内部使用
