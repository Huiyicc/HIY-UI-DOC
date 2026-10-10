---
title: "RichDocument"
---

# RichDocument <Badge type="info" text="Class" />

**Header:** `#include <hiyui/text/rich_document.h>`

**Namespace:** `hiyui`

Rich text document

Internal coordinates are UTF-8 byte offsets. `\n` is the block separator and an inline object occupies 3 bytes (U+FFFC). All edit operations enter the undo history.

## Public Methods

### clear

```cpp
void clear()
```

Clears all content; the operation itself is undoable

### charLength

```cpp
int charLength() const
```

Number of code points; each inline object counts as 1

### plainText

```cpp
std::string plainText() const
```

Plain text; inline objects are removed and block separators are output as `\n`

### textBytes

```cpp
const char * textBytes() const
```

Document byte buffer; the pointer is valid until the next edit

### insertText

```cpp
void insertText(int pos, const char *utf8, const RichCharFormat &fmt)
```

Inserts text; `\n` in the text creates a block separator and U+FFFC is ignored

### insertObject

```cpp
void insertObject(int pos, RichNode object)
```

Inserts an inline object; ownership of the payload's owned image transfers to the document

### charFormatAt

```cpp
RichCharFormat charFormatAt(int pos) const
```

Format of the character to the left of the position, which new input inherits; returns the default format for an empty document

### setBlockFormat

```cpp
void setBlockFormat(int pos, int len, const RichBlockFormat &fmt)
```

Sets the format of blocks intersecting [pos, pos+len); with len 0 it applies to the block containing pos

### fragmentIndexAtByte

```cpp
int fragmentIndexAtByte(int pos) const
```

Index of the fragment covering byte pos; when pos equals the document length returns the last fragment, and -1 for an empty document

### beginEditBlock

```cpp
void beginEditBlock()
```

Edits between beginEditBlock and endEditBlock merge into one undo step; call in pairs

### endEditBlock

```cpp
void endEditBlock(bool allowMerge=true)
```

When false, this edit block does not merge into adjacent typing undo steps

### undo

```cpp
bool undo(int *cursorPos)
```

Outputs the suggested cursor byte position after undo; may be null

### redo

```cpp
bool redo(int *cursorPos)
```

Outputs the suggested cursor byte position after redo; may be null
