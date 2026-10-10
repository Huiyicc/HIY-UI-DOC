---
title: "FloatLabelInput"
---

# FloatLabelInput <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/float_label_input.h>`

**Namespace:** `hiyui`

Text input with outlined style and a floating label

The label shows inside the input area while the input is empty and unfocused. On focus or when text exists, the label moves above the left of the border and shrinks.



**See also:** `FloatLabelInputProps`


**See also:** `Input`

**Inherits:** `hiyui::Chainable< FloatLabelInput >`

## Public Methods

### FloatLabelInput

```cpp
FloatLabelInput(lv_obj_t *raw)
```

Wraps an existing floating label input object

### FloatLabelInput

```cpp
FloatLabelInput(FloatLabelInputProps props={})
```

Aggregate construction from properties

### init

```cpp
FloatLabelInput & init(lv_obj_t *parent) &
```

Creates the floating label input under a parent

### init

```cpp
FloatLabelInput & init(Widget &parent) &
```

Creates the floating label input under a parent

### input

```cpp
Input & input()
```

Returns the inner Input

Lifetime matches this component

### input

```cpp
const Input & input() const
```

Returns the inner Input

Lifetime matches this component

### text

```cpp
FloatLabelInput & text(const std::string &t, Notify notify=Notify::No) &
```

Sets the current text

### text

```cpp
FloatLabelInput & text(const char *t, Notify notify=Notify::No) &
```

Sets the current text

### text

```cpp
std::string text() const
```

Returns the current text

### label

```cpp
FloatLabelInput & label(const char *t) &
```

Sets the floating label text

A null pointer or an empty string hides the label

### label

```cpp
FloatLabelInput & label(const LocalizedText &text) &
```

Binds text that updates with the language, copying the description; a plain string call replaces this binding.

### clear

```cpp
FloatLabelInput & clear(Notify notify=Notify::No) &
```

Clears the current text

### focus

```cpp
FloatLabelInput & focus() &
```

Focuses the inner input

### addToGroup

```cpp
FloatLabelInput & addToGroup() &
```

Adds the inner input to the default input group

### enabled

```cpp
FloatLabelInput & enabled(bool enabled=true) &
```

Sets whether the input is interactive

### on

```cpp
FloatLabelInput & on(EventCode code, F &&handler, EventHandle *handle=nullptr) &
```

Binds an input event; ValueChanged targets this component, other events target the inner input

Optional out parameter receiving the unbind handle of this binding

### onClick

```cpp
FloatLabelInput & onClick(F &&f, EventHandle *handle=nullptr) &
```

Binds the inner input click event

Optional out parameter receiving the unbind handle of this binding

### onChange

```cpp
FloatLabelInput & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the text change event; the generic event entry observes the same commits

Optional out parameter receiving the unbind handle of this binding
