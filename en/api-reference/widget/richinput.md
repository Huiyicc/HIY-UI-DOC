---
title: "RichInput"
---

# RichInput <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/rich_input.h>`

**Namespace:** `hiyui`

**Inherits:** `hiyui::Chainable< RichInput >`

## Types

### RichInputEventType

Rich text input internal event types

| Value | Description |
|---|---|
| `Changed` | Content changed |
| `Submit` | Enter submits. |

## Public Methods

### insertText

```cpp
RichInput & insertText(const std::string &text, Notify notify=Notify::No) &
```

Inserts text. The format inherits from the character left of the cursor. With a selection, the selection is deleted first

### insertImage

```cpp
RichInput & insertImage(const void *src, int h=70, Notify notify=Notify::No) &
```

Inserts an image at the cursor

File path string or lv_image_dsc_t*. GIF uses the first frame as a static image Target image height in logical pixels

### plainText

```cpp
std::string plainText() const
```

Plain text. Mention outputs `@display`. Image outputs the source text. Other inline objects output a space

### length

```cpp
int length() const
```

Character count. Each inline object counts as 1

### cursorPos

```cpp
int cursorPos() const
```

Cursor position as a UTF-8 byte offset. Each inline object occupies 3 bytes

### selectedText

```cpp
std::string selectedText() const
```

Plain text of the selection. Same semantics as plainText()

### applyCharFormat

```cpp
RichInput & applyCharFormat(const RichCharFormat &fmt, Notify notify=Notify::No) &
```

Applies character format to the selection. Without a selection, the format is recorded for subsequent input and becomes invalid after the cursor moves

### charFormatAt

```cpp
RichCharFormat charFormatAt() const
```

Format in effect at the cursor. With a selection, the format of the first selected character. Without a selection, the format inherited by new input

### charFormatAt

```cpp
RichCharFormat charFormatAt(int bytePos) const
```

UTF-8 byte offset

### setBlockFormat

```cpp
RichInput & setBlockFormat(const RichBlockFormat &fmt, Notify notify=Notify::No) &
```

Applies block format to paragraphs intersecting the selection. Without a selection, applies to the paragraph at the cursor

### blockFormatAt

```cpp
RichBlockFormat blockFormatAt(int bytePos) const
```

UTF-8 byte offset

### onChange

```cpp
RichInput & onChange(F &&f, EventHandle *handle=nullptr) &
```

Registers the content-changed callback. Repeated bindings are appended

### onSubmit

```cpp
RichInput & onSubmit(F &&f, EventHandle *handle=nullptr) &
```

Registers the submit callback. Repeated bindings are appended. After registration, Enter triggers the callback and does not insert a newline, while Shift+Enter inserts a newline. When not registered, Enter inserts a newline

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(RichInputEventType type)
```

Gets the internal event code of the rich text input.
