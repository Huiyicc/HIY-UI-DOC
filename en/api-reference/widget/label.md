---
title: "Label"
---

# Label <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/label.h>`

**Namespace:** `hiyui`

Text label widget

Supports changing the text at runtime and multi-state styling.



**See also:** `LabelProps`


**See also:** `Widget`

**Inherits:** `hiyui::Chainable< Label >`

## Protected Methods

### primaryTextObj

```cpp
virtual lv_obj_t * primaryTextObj() const override
```

Returns the widget primary text object, the inner label or textarea, used by text capabilities such as selectableText

Derived classes override as needed to return their own primary text object; base text nodes return themselves by default.

## Public Methods

### Label

```cpp
Label(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Label

```cpp
Label(LabelProps props={})
```

Construct from aggregated properties

text is copied at construction, nullptr keeps the default text.

### init

```cpp
Label & init(lv_obj_t *parent) &
```

Create the LVGL label object under a parent

### init

```cpp
Label & init(Widget &parent) &
```

Create the LVGL label object under a parent

### text

```cpp
Label & text(const std::string &t) &
```

Change the display text at runtime

### text

```cpp
Label & text(const char *t) &
```

Change the display text at runtime

UTF-8 encoded

### text

```cpp
Label & text(const LocalizedText &t) &
```

Bind text that updates with the language, copying the description. A plain text call replaces this binding.
