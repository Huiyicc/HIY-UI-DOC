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

Internal pagination event types

| Value | Description |
|---|---|
| `Changed` | Page changed |

## Public Methods

### Pagination

```cpp
Pagination(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Pagination

```cpp
Pagination(PaginationProps props={})
```

Construct from aggregated properties

### init

```cpp
Pagination & init(lv_obj_t *parent) &
```

Create the LVGL object under a parent

### init

```cpp
Pagination & init(Widget &parent) &
```

Create the LVGL object under a parent

### currentPage

```cpp
Pagination & currentPage(int page, Notify notify=Notify::No) &
```

Jump to the given page

Page number, starting from 1

### currentPage

```cpp
int currentPage() const
```

Get the current page

The current page

### totalPages

```cpp
int totalPages() const
```

Get the total page count

The total page count

### onChange

```cpp
Pagination & onChange(F &&f, EventHandle *handle=nullptr) &
```

Bind the page change event, repeated binds append

Callable type, signature void(int) Callback, the argument is the new page Optional out parameter receiving the unbind handle of this binding

### activeColor

```cpp
Pagination & activeColor(ThemeRole role) &
```

Binds the current page color to a theme semantic role, updated automatically on theme switch

### textColor

```cpp
Pagination & textColor(ThemeRole role) &
```

Binds the page number text color to a theme semantic role, updated automatically on theme switch

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(PaginationEventType type)
```

Get the internal pagination event code.

### rebuild

```cpp
static void rebuild(PaginationState *st)
```

Rebuild the button layout, internal use

### goToPage

```cpp
static void goToPage(PaginationState *st, int page, Notify notify=Notify::Yes)
```

Switch the page with a strip scroll animation, internal use
