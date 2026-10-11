---
title: "Terminal"
---

# Terminal <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/terminal.h>`

**Namespace:** `hiyui`

Interactive terminal accepting UTF-8 and VT control sequences; it owns no shell or transport connection. All methods must be called on the UI thread. Settings, writes, and event bindings made before mounting take effect on mount. After destruction, writes and runtime settings are no-ops and queries return empty values; user input and protocol responses are sent through onData.

**Inherits:** `hiyui::Chainable< Terminal >`

## Public Methods

### write

```cpp
Terminal & write(std::string_view bytes) &
```

Receives output bytes; UTF-8 and control sequences may be supplied in segments. New output clears the selection.

### paste

```cpp
Terminal & paste(std::string_view text) &
```

Sends text as paste input, honoring bracketed paste mode, with newlines normalized to carriage return.

### clearScrollback

```cpp
Terminal & clearScrollback() &
```

Clears the scrollback history without changing the current screen or shell state.

### scrollLines

```cpp
Terminal & scrollLines(int lines) &
```

Scrolls the history relatively; positive values move toward older content. Scrolling clears the selection.

### fontSize

```cpp
Terminal & fontSize(int size) &
```

Changes the logical font size, which must be a positive integer; HIYUI_DEFAULT_INT restores the default size. An automatic grid updates with the available space; a fixed grid keeps its rows and columns.

### terminalSize

```cpp
TerminalSize terminalSize() const
```

Returns the current rows and columns; changes are reported by onResize.

### terminalSize

```cpp
Terminal & terminalSize(TerminalSize size) &
```

Fixes the grid and shrinks the font to fit the available space. Any non-positive dimension restores the automatic grid.

### readOnly

```cpp
Terminal & readOnly(bool value) &
```

Toggles the read-only state; protocol responses produced by write are not blocked.

### text

```cpp
std::string text() const
```

Returns the current screen text without history; trailing spaces per line and trailing blank lines are removed.

### title

```cpp
std::string title() const
```

Returns the title set by the application through control sequences, or empty when not set.

### selectionText

```cpp
std::string selectionText() const
```

Returns the UTF-8 text of the selection, or empty when there is no selection.

### copySelection

```cpp
Terminal & copySelection() &
```

Copies a non-empty selection to the system clipboard; no-op on platforms without clipboard support.

### onData

```cpp
Terminal & onData(F &&handler, EventHandle *handle=nullptr) &
```

Binds bytes to send; the callback receives a string_view valid only during the call, which may contain embedded zero bytes.

### onInput

```cpp
Terminal & onInput(F &&handler, EventHandle *handle=nullptr) &
```

Binds raw user input, excluding protocol responses; existing onData notifications are not canceled. With an external TerminalModel, hand only this event to the model to avoid sending encoded data twice.

### onResize

```cpp
Terminal & onResize(F &&handler, EventHandle *handle=nullptr) &
```

Binds grid size changes; the callback receives a TerminalSize. Registration itself does not emit a notification.

### onTitleChange

```cpp
Terminal & onTitleChange(F &&handler, EventHandle *handle=nullptr) &
```

Binds title changes; the callback receives a UTF-8 string_view valid only during the call.
