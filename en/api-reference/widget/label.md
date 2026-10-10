---
title: "Label"
---

# Label <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/label.h>`

**Namespace:** `hiyui`

Text label widget

Supports runtime text changes and multi-state styles.



**See also:** `LabelProps`


**See also:** `Widget`

**Inherits:** `hiyui::Chainable< Label >`

## Protected Methods

### primaryTextObj

```cpp
virtual lv_obj_t * primaryTextObj() const override
```

Returns the component's primary text object, the inner label/textarea, used by text capabilities such as selectableText

Derived classes override as needed to return their own primary text object; base text nodes return themselves by default.

## Public Methods

### Label

```cpp
Label(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Label

```cpp
Label(LabelProps props={})
```

Aggregate construction from properties

text is copied at construction; nullptr keeps the default text.

### init

```cpp
Label & init(lv_obj_t *parent) &
```

Creates the LVGL label object on a parent

### init

```cpp
Label & init(Widget &parent) &
```

Creates the LVGL label object on a parent

### text

```cpp
Label & text(const std::string &t) &
```

Changes the displayed text at runtime

### text

```cpp
Label & text(const char *t) &
```

Changes the displayed text at runtime

UTF-8 encoded

### text

```cpp
Label & text(const LocalizedText &t) &
```

Binds text that updates with the language. Copies the description. A plain text call replaces this binding.
