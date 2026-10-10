---
title: "RichInput"
---

# RichInput <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/rich_input.h>`

**Namespace:** `hiyui`

**Inherits:** `hiyui::Chainable< RichInput >`

## Types

### RichInputEventType

Internal rich text input event types

| Value | Description |
|---|---|
| `Changed` | Content changed |
| `Submit` | Submitted by Enter. |

## Public Methods

### insertText

```cpp
RichInput & insertText(const std::string &text, Notify notify=Notify::No) &
```

Insert text. The format inherits from the character left of the cursor. An existing selection is deleted first.

### insertImage

```cpp
RichInput & insertImage(const void *src, int h=70, Notify notify=Notify::No) &
```

Insert an image at the cursor

A file path string or lv_image_dsc_t*. A GIF uses its first frame as a static image Target image height in logical pixels

### plainText

```cpp
std::string plainText() const
```

Plain text. Mentions output `@display`, images output the source text, other inline objects output a space

### length

```cpp
int length() const
```

Character count, each inline object counts as 1

### cursorPos

```cpp
int cursorPos() const
```

Cursor position as a UTF-8 byte offset, each inline object occupies 3 bytes

### selectedText

```cpp
std::string selectedText() const
```

Selection plain text, same semantics as plainText()

### applyCharFormat

```cpp
RichInput & applyCharFormat(const RichCharFormat &fmt, Notify notify=Notify::No) &
```

Apply a character format to the selection. Without a selection it is recorded as the format for subsequent input and invalidated once the cursor moves.

### charFormatAt

```cpp
RichCharFormat charFormatAt() const
```

The format effective at the cursor. With a selection it is the format of the first selected character. Without one it is the format new input will inherit.

### charFormatAt

```cpp
RichCharFormat charFormatAt(int bytePos) const
```

UTF-8 byte offset

### setBlockFormat

```cpp
RichInput & setBlockFormat(const RichBlockFormat &fmt, Notify notify=Notify::No) &
```

Apply a format to the paragraphs intersecting the selection. Without a selection it applies to the paragraph at the cursor.

### blockFormatAt

```cpp
RichBlockFormat blockFormatAt(int bytePos) const
```

UTF-8 byte offset

### onChange

```cpp
RichInput & onChange(F &&f, EventHandle *handle=nullptr) &
```

Register a content change callback. Repeated bindings are appended.

### onSubmit

```cpp
RichInput & onSubmit(F &&f, EventHandle *handle=nullptr) &
```

Register a submit callback. Repeated bindings are appended. Once registered, Enter triggers the callback without inserting a newline, Shift+Enter inserts a newline. When unregistered, Enter inserts a newline.

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(RichInputEventType type)
```

Get the internal rich text input event code.
