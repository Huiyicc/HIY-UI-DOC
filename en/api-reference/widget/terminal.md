---
title: "Terminal"
---

# Terminal <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/terminal.h>`

**Namespace:** `hiyui`

Interactive terminal accepting UTF-8 and VT control sequences; owns no shell or transport connection. All methods are called on the UI thread. Settings, writes, and event bindings made before mounting take effect on mount. After destruction, writes and runtime settings do nothing and queries return empty; input and protocol responses are sent through onData.

**Inherits:** `hiyui::Chainable< Terminal >`

## Public Methods

### write

```cpp
Terminal & write(std::string_view bytes) &
```

Receive output bytes; UTF-8 and control sequences may be fed in segments; new output clears the selection.

### paste

```cpp
Terminal & paste(std::string_view text) &
```

Send text as paste input, honoring bracketed paste mode; line breaks are normalized to carriage return.

### clearScrollback

```cpp
Terminal & clearScrollback() &
```

Clear the history without changing the current screen or shell state.

### scrollLines

```cpp
Terminal & scrollLines(int lines) &
```

Scroll the history relatively; positive values move toward older content; scrolling clears the selection.

### fontSize

```cpp
Terminal & fontSize(int size) &
```

Change the logical font size to a positive value; the auto grid updates with available space, a fixed grid keeps its rows and columns.

### terminalSize

```cpp
TerminalSize terminalSize() const
```

Get the current rows and columns; changes are reported by onResize.

### terminalSize

```cpp
Terminal & terminalSize(TerminalSize size) &
```

Fix the grid and shrink the font to fit the available space; a non-positive value in either dimension restores the auto grid.

### readOnly

```cpp
Terminal & readOnly(bool value) &
```

Toggle read-only; does not block protocol responses produced by write.

### text

```cpp
std::string text() const
```

Get the current screen text without history, with trailing spaces per line and trailing blank lines removed.

### title

```cpp
std::string title() const
```

Get the title set by the application through control sequences; empty when not set.

### selectionText

```cpp
std::string selectionText() const
```

Get the UTF-8 text of the selection; empty when there is no selection.

### copySelection

```cpp
Terminal & copySelection() &
```

Copy a non-empty selection to the system clipboard; no-op on platforms without clipboard support.

### onData

```cpp
Terminal & onData(F &&handler, EventHandle *handle=nullptr) &
```

Bind bytes to send; the callback receives a string_view valid only during the call; embedded zero bytes are allowed.

### onInput

```cpp
Terminal & onInput(F &&handler, EventHandle *handle=nullptr) &
```

Bind raw user input, excluding protocol responses; does not cancel existing onData notifications. With an external TerminalModel, only this event is forwarded to the model to avoid sending encoded data twice.

### onResize

```cpp
Terminal & onResize(F &&handler, EventHandle *handle=nullptr) &
```

Bind grid size changes; the callback receives TerminalSize; registration itself does not trigger a notification.

### onTitleChange

```cpp
Terminal & onTitleChange(F &&handler, EventHandle *handle=nullptr) &
```

Bind title changes; the callback receives a UTF-8 string_view valid only during the call.
