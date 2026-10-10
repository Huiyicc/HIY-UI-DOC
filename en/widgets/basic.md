---
title: Basic Widgets
---

# Basic Widgets

## Text and images

| Widget | Purpose | Common fields |
| --- | --- | --- |
| `Label` | Text | `text`, `fontSize`, `textColor`, `width`, `ellipsis`, `selectable` |
| `Icon` | Material Symbols icon | `codepoint`, `size`, `style` |
| `Image` | File or image descriptor | `src`, `width`, `height`, `fit`, `opacity` |
| `Avatar` | Image, SVG, or text avatar | `src`, `text`, `size`, `circle` |

> Without `textColor`, `Label` uses the theme text color and updates on theme switches; once the color is set explicitly, it no longer changes with theme switches. `selectable` applies only on the desktop SDL backend.

Arranges an icon and a label in one row.

```cpp
HBox row({.gap = 8});
row.init(parent);

Icon({.codepoint = HIYUI_ICON_INFO, .size = 20}).init(row);
Label({.text = "Connection restored"}).init(row);
```

The icon font ships with the library. File path sources are copied on assignment; the pixels of an image descriptor source must stay valid until the source is replaced or the widget is destroyed.

`Icon::color()` sets a fixed color or a theme role. `colorFrom(Widget &source)` follows the current text color of a mounted widget and responds to state and theme changes; repeated calls replace the source, and the last color is kept after the source is destroyed. `rendered()` reports whether the image is displayable and returns `false` while unmounted or when rendering is unavailable. The C interfaces are `hiyui_icon_color_from()` and `hiyui_icon_rendered()`.

## Commands and selection

| Widget | Common methods | Events |
| --- | --- | --- |
| `Button` | `text()`, `icon()` | `onClick()` |
| `Checkbox` | `checked()`, `isChecked()` | `onChange()` |
| `Radio` | `checked()`, `isChecked()` | `onChange()` |
| `Switch` | `checked()`, `isChecked()` | `onChange()` |
| `Slider` | `value()`, `range()` | `onChange()` |

`Button::icon(uint32_t)` sets a font icon and clears the image source; `icon(const void *)` sets an image source and clears the font codepoint. Passing codepoint 0 or an empty image source removes the icon. The C interfaces are `hiyui_button_set_icon()` and `hiyui_button_set_icon_src()`.

Binds the switch value-change event.

```cpp
Switch notifications({.checked = true});
notifications.init(parent);
notifications.onChange([&] {
  setNotifications(notifications.isChecked());
});
```

## Input

`Input` provides single-line and multi-line plain text editing. The desktop SDL backend supports additional selections, multi-cursor input, and block selection.

### Minimal example

```cpp
Input input({
    .placeholder = "Search",
    .width = 280,
    .multiline = false,
    .multiCursor = true,
});
input.init(parent);
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | Initial UTF-8 text. |
| `placeholder` | `const char *` | `nullptr` | Placeholder shown while the content is empty. |
| `password` | `bool` | `false` | Shows a password mask and disables undo/redo. |
| `maxLength` | `int` | `0` | Maximum character count; `0` means no limit. |
| `width` | `int` | `200` | Width in logical pixels. |
| `height` | `int` | [`HIYUI_AUTO`](/en/core/constants) | Height; the auto value is computed from font and style. |
| `multiline` | `bool` | `false` | Whether line breaks are allowed. |
| `horizontalScroll` | `bool` | `false` | In multi-line mode, enables horizontal scrolling and disables automatic wrapping. |
| `bg` | `uint32_t` | [`HIYUI_DEFAULT`](/en/core/constants) | Background color. |
| `textColor` | `uint32_t` | [`HIYUI_DEFAULT`](/en/core/constants) | Text color. |
| `placeholderColor` | `uint32_t` | [`HIYUI_DEFAULT`](/en/core/constants) | Placeholder text color. |
| `fontSize` | `int` | `0` | Font size; `0` uses the theme font. |
| `radius` | `uint32_t` | [`HIYUI_DEFAULT`](/en/core/constants) | Corner radius. |
| `borderless` | `bool` | `false` | Uses a transparent background and a borderless style. |
| `maxUndoSteps` | `int` | `50` | Maximum undo steps; `0` disables undo/redo. |
| `multiCursor` | `bool` | `false` | Whether additional selections and multi-cursor input are allowed; applies only on the desktop SDL backend. |
| `readOnly` | `bool` | `false` | Disables editing while keeping selection, copy, and scrolling; programmatic calls can still update the content. |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `text(const char *)`, `text(const std::string &)` | `Input &` | Replaces the current content. |
| `text() const` | `std::string` | Returns the current content. |
| `placeholder(const char *)` | `Input &` | Sets the placeholder and removes its translation binding. |
| `placeholder(const LocalizedText &)` | `Input &` | Binds a placeholder that updates with the language, keeping the input content. |
| `passwordMode(bool)` | `Input &` | Toggles password mode. |
| `multiline(bool)` | `Input &` | Switches between single-line and multi-line mode. |
| `horizontalScroll(bool)` | `Input &` | Sets the multi-line horizontal scrolling and automatic wrapping behavior. |
| `clear()` | `Input &` | Clears the content. |
| `undo()`, `redo()` | `bool` | Undoes or redoes one edit. |
| `canUndo()`, `canRedo()` | `bool` | Reports whether the corresponding edit history exists. |
| `multiCursor(bool)` | `Input &` | Enables or disables additional selections and multi-cursor input. |
| `multiCursorModifier(InputMultiCursorModifier)` | `Input &` | Sets the mouse modifier used to add cursors. |
| `readOnly(bool)`, `isReadOnly()` | `Input &`, `bool` | Switches or queries the read-only state; undo and redo return `false` while read-only. |
| `selection()`, `selections()` | `InputSelection`, `std::vector<InputSelection>` | Returns the primary selection or all selections; positions are UTF-8 byte offsets. |
| `addSelection(InputSelection)` | `Input &` | Adds a selection; replaces the primary selection when multi-cursor is off. |
| `clearAdditionalSelections()` | `Input &` | Removes the additional selections and keeps the primary selection. |
| `selectAll()`, `clearSelection()` | `Input &` | Selects all content or collapses the primary selection. |
| `selectedText()` | `std::string` | Returns the primary selection text. |
| `insertText(const std::string &)` | `Input &` | Replaces the selected content and inserts text. |
| `cursorPos() const`, `cursorPos(int32_t)` | `int32_t`, `Input &` | Gets or sets the primary cursor UTF-8 byte offset. |

By default, multi-cursor uses `Alt`/`Option` plus a left click to add a cursor and `Shift+Alt`/`Shift+Option` plus a left drag to create a block selection. With `InputMultiCursorModifier::Primary` set, adding cursors uses `Ctrl` on Windows/Linux or `Cmd` on macOS instead. Non-desktop backends ignore multi-cursor configuration, and `selections()` returns the primary selection.

### FloatLabelInput

`FloatLabelInput` adds an outlined border and a floating label to `Input`. The label is shown inside the input area while the field is empty and unfocused; on focus or with content, it moves to the upper left and shrinks.

#### Header

`<hiyui/widget/float_label_input.h>`

#### Minimal example

```cpp
FloatLabelInput account({
    .label = "Account",
    .input = {.width = 280},
});
account.init(parent);
```

#### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `const char *` | `nullptr` | Floating label text; `input.placeholder` is used when empty at creation. |
| `input` | `InputProps` | `{}` | Inner input props; the inner placeholder is replaced by the floating label. |
| `animated` | `bool` | `true` | Whether label position and scale animation is enabled; switching is immediate when theme animation is off. |

#### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `input()` | `Input &` | Returns the inner input, whose lifetime matches this widget. |
| `text(const char *)`, `text(const std::string &)` | `FloatLabelInput &` | Replaces the current content. |
| `text() const` | `std::string` | Returns the current content. |
| `label(const char *)` | `FloatLabelInput &` | Changes the label and removes the translation binding; a null value hides the label. |
| `label(const LocalizedText &)` | `FloatLabelInput &` | Binds a floating label that updates with the language, keeping the input content. |
| `clear()` | `FloatLabelInput &` | Clears the content. |
| `focus()`, `addToGroup()` | `FloatLabelInput &` | Focuses the inner input or joins its default input group. |
| `enabled(bool)` | `FloatLabelInput &` | Sets whether the inner input and the outer widget are interactive. |
| `on(EventCode, F)` | `FloatLabelInput &` | Binds an event; `ValueChanged` targets this widget, other events target the inner input. |
| `onClick()`, `onChange()` | `FloatLabelInput &` | `onClick` binds inner input clicks; `onChange` binds text changes. |

Other editing, selection, and undo methods of the inner input are available through `input()`.

With `input.borderless = true`, the borderless mode is kept; the default configuration uses an outlined border.

## Status display

`Progress`, `Spin`, `Spectrum`, and `Toast` cover progress, loading, color range, and transient notifications. The full Props and event signatures of these widgets are in the [API reference](/en/api-reference/).

## Localized text

Static text can still be set through Props. The following methods bind text descriptors returned by `tr()` or `trn()`; plain string overloads remove the corresponding binding.

| Method | Returns | Description |
| --- | --- | --- |
| `Label::text(const LocalizedText &)` | `Label &` | Binds the label text |
| `Button::text(const LocalizedText &)` | `Button &` | Binds the button text |
| `Checkbox::text(const LocalizedText &)` | `Checkbox &` | Binds the checkbox text, keeping the checked state |
| `Radio::text(const LocalizedText &)` | `Radio &` | Binds the radio text, keeping the checked state |
| `Progress::text(const LocalizedText &)` | `Progress &` | Binds the progress text, keeping the progress value |

The following button updates its text after a language switch.

```cpp
Button save;
save.init(parent);
save.text(tr("app.save", "保存"));
```

Named parameters, plurals, and language pack configuration are described in [Internationalization](/en/core/i18n).
