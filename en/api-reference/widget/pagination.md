---
title: "Pagination"
---

# Pagination <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/pagination.h>`

**Namespace:** `hiyui`

Pagination widget

**See also:** `PaginationProps`

**Inherits:** `hiyui::Chainable< Pagination >`

## Types

### PaginationEventType

Pagination internal event types

| Value | Description |
|---|---|
| `Changed` | Page number changed |

## Public Methods

### Pagination

```cpp
Pagination(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Pagination

```cpp
Pagination(PaginationProps props={})
```

Aggregate construction from properties

### init

```cpp
Pagination & init(lv_obj_t *parent) &
```

Creates the LVGL object under a parent object

### init

```cpp
Pagination & init(Widget &parent) &
```

Creates the LVGL object under a parent object

### currentPage

```cpp
Pagination & currentPage(int page, Notify notify=Notify::No) &
```

Jumps to the given page

Page number, starting from 1

### currentPage

```cpp
int currentPage() const
```

Returns the current page number

Current page number

### totalPages

```cpp
int totalPages() const
```

Returns the total number of pages

Total number of pages

### onChange

```cpp
Pagination & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the page change event, repeated binding appends

Callable type, signature void(int) Callback, receives the new page number Optional out parameter receiving the unbind handle for this binding

### activeColor

```cpp
Pagination & activeColor(ThemeRole role) &
```

Binds the current page number color to a theme semantic role, updated automatically on theme change

### textColor

```cpp
Pagination & textColor(ThemeRole role) &
```

Binds the page number text color to a theme semantic role, updated automatically on theme change

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(PaginationEventType type)
```

Returns the internal pagination event code.

### rebuild

```cpp
static void rebuild(PaginationState *st)
```

Rebuilds the button layout, internal use

### goToPage

```cpp
static void goToPage(PaginationState *st, int page, Notify notify=Notify::Yes)
```

Switches the page with a strip scroll animation, internal use
