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
| `Changed` | Page switched |

## Public Methods

### addPage

```cpp
Carousel & addPage(const std::function< void(Widget &page)> &builder, Notify notify=Notify::No) &
```

Appends a page. Before the first navigation, the nearest existing page selected by startIndex is chosen; after navigation, the current selection is kept.

### onChange

```cpp
Carousel & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds a page switch callback; repeated bindings are appended

Callback; the argument is the new page index Optional output parameter receiving the unbind handle for this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(CarouselEventType type)
```

Returns the internal event code of the carousel.
