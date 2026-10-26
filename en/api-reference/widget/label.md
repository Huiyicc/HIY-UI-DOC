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

### bindText

```cpp
Label & bindText(State< std::string > state, BindingHandle *handle=nullptr) &
```

Binds state text; State changes update the display

Replaces the static text and translation binding of this property; the current text is kept after unbinding. Calls before mounting are saved and connected at mount completion with the current value applied.


Optional out parameter receiving the unbind handle; when passed before mounting it targets the connection after mount completes

### bindText

```cpp
Label & bindText(State< T > state, F &&converter, BindingHandle *handle=nullptr) &
```

Binds a state with a converter

The converter receives the state value and returns std::string or LocalizedText; a LocalizedText output retranslates on language change without triggering business subscriptions. The converter must not write any State.

### clearTextBinding

```cpp
Label & clearTextBinding() &
```

Removes text bindings including data and translation bindings and keeps the displayed text; repeated calls do nothing.
