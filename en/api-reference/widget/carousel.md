---
title: "Carousel"
---

# Carousel <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/carousel.h>`

**Namespace:** `hiyui`

**Inherits:** `hiyui::Chainable< Carousel >`

## Types

### CarouselEventType

Carousel internal event types

| Value | Description |
|---|---|
| `Changed` | Page changed |

## Public Methods

### addPage

```cpp
Carousel & addPage(const std::function< void(Widget &page)> &builder, Notify notify=Notify::No) &
```

Append a page; before the first navigation the nearest existing page per startIndex is selected; after navigation the current selection is kept.

### onChange

```cpp
Carousel & onChange(F &&f, EventHandle *handle=nullptr) &
```

Bind the page-changed callback; repeated binds append

Callback; its argument is the new page index Optional out parameter receiving the unbind handle of this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(CarouselEventType type)
```

Get the internal event code of the carousel.
