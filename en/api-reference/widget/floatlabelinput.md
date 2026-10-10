---
title: "FloatLabelInput"
---

# FloatLabelInput <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/float_label_input.h>`

**Namespace:** `hiyui`

Text input using the outlined style with a floating label

The label is shown inside the input area while the input is empty and unfocused. On focus or when text exists the label moves above the left edge of the border and shrinks.



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

Constructs through aggregate property initialization

### init

```cpp
FloatLabelInput & init(lv_obj_t *parent) &
```

Creates the floating label input on the parent

### init

```cpp
FloatLabelInput & init(Widget &parent) &
```

Creates the floating label input on the parent

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

A null pointer or empty string hides the label

### label

```cpp
FloatLabelInput & label(const LocalizedText &text) &
```

Binds text that updates with the language, the description is copied, a plain string call replaces this binding.

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

Binds an input event, ValueChanged targets this component while other events target the inner input

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

Binds the text change event, the generic event entry observes the same commit

Optional out parameter receiving the unbind handle of this binding
