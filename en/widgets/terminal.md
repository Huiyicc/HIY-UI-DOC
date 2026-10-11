---
title: Terminal
---

## Terminal

`Terminal` displays UTF-8 text and VT control sequences, supporting colors, wide characters, the alternate screen, scrollback, selection, and copy.
The widget does not create a shell and owns no process or network connection; all widget methods are called on the UI thread.

### Header

The widget and the windowless model live in the following headers; the widget can also be included through `hiyui/hiyui.h`.

```cpp
#include <hiyui/widget/terminal.h>
#include <hiyui/misc/terminal_model.h>
```

### Minimal example

`parent` is a mounted `Widget`; output bytes can be written in segments.

```cpp
using namespace hiyui;
Terminal terminal({.height = 320});
terminal.init(parent);
terminal.write("\x1b[32mReady\x1b[0m\r\n");
```

### Props

| Field | Type | Default | Description |
|---|---|---|---|
| `width` | `int` | `HIYUI_AUTO` | Logical pixels; the auto value fills the parent container width |
| `height` | `int` | `300` | Logical pixels; the auto value fills the parent container height |
| `fontSize` | `int` | `14` | Positive logical font size |
| `scrollbackLines` | `int` | `2000` | Scrollback line limit; zero keeps no history |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Follows the theme background by default |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | Follows the theme body text color by default |
| `animated` | `bool` | `true` | Allows cursor blinking, also controlled by the theme animation setting |
| `readOnly` | `bool` | `false` | Disables user input; selection, copy, and scrollback remain available |

Sentinel values are described in [Constants and Sentinel Values](/en/core/constants).

### Runtime methods

Chained methods provide lvalue and rvalue overloads; the table lists the lvalue return types. Settings, writes, and bindings made before mounting take effect on mount.
After destruction, writes and settings are no-ops and queries return empty values.

| Method | Returns | Description |
|---|---|---|
| `write(bytes)` | `Terminal &` | Writes output, which may contain UTF-8, control sequences, and zero bytes; clears the selection |
| `paste(text)` | `Terminal &` | Sends input following bracketed paste mode, normalizing line breaks to carriage return; no input while read-only |
| `clearScrollback()` | `Terminal &` | Clears the scrollback and keeps the current screen |
| `scrollLines(lines)` | `Terminal &` | Positive values scroll toward earlier content; clears the selection |
| `fontSize(size)` | `Terminal &` | Changes the positive logical font size; `HIYUI_DEFAULT_INT` restores the default `14` |
| `terminalSize()` | `TerminalSize` | Current grid; zero rows and zero columns while unmounted |
| `terminalSize(size)` | `Terminal &` | Fixes the grid; a non-positive dimension restores automatic sizing from the available space |
| `readOnly(value)` | `Terminal &` | Toggles the user input permission; does not block output query responses |
| `readOnly()` | `bool` | Current read-only state; `false` while unmounted or after destruction |
| `text()` | `std::string` | Current screen text, excluding scrollback, trailing spaces, and trailing empty lines |
| `title()` | `std::string` | Title set by terminal control sequences |
| `selectionText()` | `std::string` | Selection text; empty without a selection |
| `copySelection()` | `Terminal &` | Copies a non-empty selection to the system clipboard |
| `onData(callback, handle)` | `Terminal &` | Encoded input and automatic protocol responses; the callback receives `std::string_view` |
| `onInput(callback, handle)` | `Terminal &` | Raw user input without protocol responses; the callback receives `const TerminalInput &` |
| `onResize(callback, handle)` | `Terminal &` | Grid change notification; the callback receives `TerminalSize`; registering alone does not fire it |
| `onTitleChange(callback, handle)` | `Terminal &` | Title change notification; the callback receives `std::string_view` |

The event `handle` defaults to empty; after an `EventHandle` is passed, `off()` can unbind.
Byte views in callbacks are valid only during the callback. `onInput` does not cancel `onData`; when an
external model takes over input, hand only `onInput` to the model so the two data streams are not sent
to the process at the same time.

### Advanced usage

`TerminalModel` creates no window; calls on the same instance must be serialized. The default size is 80 columns × 24 rows,
the default scrollback is 2000 lines, non-positive sizes become 1, and negative history line counts become zero.

| Method | Returns | Description |
|---|---|---|
| `write(bytes)` | `void` | Feeds shell output and updates the VT state |
| `input(input)` | `void` | Encodes raw input according to the current terminal mode |
| `resize(size)` | `void` | Changes the grid; non-positive sizes are no-ops |
| `size()` | `TerminalSize` | Current grid size |
| `takeOutput()` | `std::string` | Takes the pending input and protocol responses; empty when there is no data |
| `text()` | `std::string` | Current screen text |
| `screen()` | `std::string` | VT paint data of the current screen, including colors, title, cursor, and mouse modes |

`TerminalInput::type` determines the meaning of the input.

| Value | Description |
|---|---|
| `Text` | `text` is text input |
| `Key` | `key` is a navigation, editing, or F1–F12 function key from `TerminalKey` |
| `Character` | `character` is a Unicode codepoint |
| `Paste` | `text` is the content to paste |
| `Focus` | `pressed` indicates focus gained |
| `Mouse` | `row` and `column` are zero-based; `button` 0 means movement, 1–3 are buttons, 4/5 are wheel up/down |

`modifiers` is a bitmask: Shift is 1, Alt is 2, Ctrl is 4. `text` is valid only during the call.

A model and its rendering widget on the same UI thread can be connected as in the example below; the model must outlive the bound callbacks.

```cpp
TerminalModel model({80, 24});
Terminal view;
view.terminalSize(model.size()).init(parent);
view.onInput([&model](const TerminalInput &input) { model.input(input); });
model.write("\x1b[31mremote output\x1b[0m");
view.write(model.screen());
auto outgoing = model.takeOutput();
```

The caller passes `outgoing` to the process or the transport connection. When a background thread produces frames, update the widget through the application's UI dispatch mechanism.
`screen()` excludes the scrollback history and cannot restore another shell's protocol state; the receiving end uses the same grid and returns actions through raw input
events. A fixed grid shrinks the font when space is short, and the actual glyph size of an embedded bitmap font is determined by the chosen font.

## Related pages

- [Events](/en/core/event-system)
- [Theme](/en/styling/theme)
- [C++ Gallery Build](/en/build/cpp-gallery)
