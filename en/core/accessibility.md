# Accessibility

`AccessibilityRole` describes the semantics a widget exposes to system accessibility services, and `AccessibilityProps` overrides the information widgets provide automatically. Widgets attach their role and name source automatically in `init()`; application code supplies explicit names for text-free controls such as icon buttons.

## Header

```cpp
#include <hiyui/accessibility/accessibility.h>
```

## Platform backends

| Platform and backend | Default | System service |
| --- | --- | --- |
| Windows + SDL | `ON` | UI Automation; Narrator and NVDA |
| macOS + SDL | `ON` | NSAccessibility; VoiceOver |
| Linux + SDL | `ON` | AT-SPI2 over D-Bus; Orca |
| Other combinations | `OFF` | No system backend; enabling fails the CMake configuration |

`accessibilitySupported()` reports whether the current build includes the system backend; `true` does not imply a running screen reader.

## Roles

| Value | Semantics | Widgets attached automatically |
| --- | --- | --- |
| `Window` | Window root | Each window |
| `Group` | Semantic container | Box, Card, WindowFrame, Menu submenus and other containers |
| `Text` | Static text | Label, Terminal, RichInput |
| `Button` | Activatable button | Button, ToolBar buttons, TitleBar window buttons |
| `Checkbox` | Check box | Checkbox |
| `Radio` | Radio item | Radio, Segmented options |
| `Switch` | Switch | Switch |
| `Slider` | Slider | Slider |
| `Progress` | Progress indicator | Progress |
| `Edit` | Text input | Input, FloatLabelInput |
| `ComboBox` | Combo box with expand and collapse actions | Dropdown and its popup options |
| `Tab` | Tab item carrying selected state | Tabs and TabsEx items |
| `MenuItem` | Menu item; parents carry expanded state | Menu, MenuBar, ContextMenu |
| `TreeItem` | Tree node carrying expanded and selected state | Tree |
| `ListItem` | List row carrying selected state | List |
| `Image` | Image or graphic without text semantics | Image, Icon, Avatar, charts, Spin |
| `Dialog` | Dialog panel | MessageBox, ConfirmDialog, PopupPanel |
| `Table` | Table container carrying row and column counts plus column titles | Table |
| `Cell` | Table row carrying row number and full-row text | Table data rows |

## Props

`AccessibilityProps` fields are applied through the `accessibility(props)` chained method.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `const char *` | `nullptr` | Explicit name; `nullptr` uses the associated label or the widget name |
| `description` | `const char *` | `nullptr` | Supplementary description; `nullptr` clears it |
| `automationId` | `const char *` | `nullptr` | Application-defined identifier, invariant across display languages |
| `decorative` | `bool` | `false` | Omits the widget's own semantics while keeping child semantics |

## Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `accessibilityName(const char *)` / `accessibilityName(const LocalizedText &)` | `Widget &` | Sets the accessibility name; `LocalizedText` follows the language |
| `accessibilityDescription(const char *)` / `accessibilityDescription(const LocalizedText &)` | `Widget &` | Sets the accessibility description |
| `accessibilityRole(role, group)` | `Widget &` | Overrides the role and selection group, keeping explicit names |
| `accessibilityChanged()` | `Widget &` | Notifies the system to reread content |
| `labelledBy(ref)` | `Widget &` | Uses the referenced target's text as the name source |

Methods do nothing when the system backend is absent or the widget is uninitialized; bindings copy text and release automatically on destruction.

## Minimal example

Setting a localized accessibility name on an icon button.

```cpp
Button({.iconCodepoint = HIYUI_ICON_SETTINGS})
    .init(bar)
    .accessibilityName(tr("app.settings", "Settings"))
    .onClick(openSettings);
```

Using another widget's text as the name source.

```cpp
Label label;
label.init(box).text(tr("app.username", "Username"));
Input input;
input.init(box).labelledBy(label.ref());
```

## Behavior notes

- Expandable actions: Dropdown, Menu parents and Tree nodes support screen-reader triggered expand and collapse; Tabs, List and Table rows plus Tree nodes support selection, announced through state-change events.
- Tables: the Table container exposes row and column counts, column titles and row selection to screen readers; cells are custom drawn, so screen readers navigate by row and announce full-row text.
- Linux: role names and `GetLocale` follow the language set through `setLocale()`; widget activation emits state events for screen-reader announcement.
- Embedded and other backends contain no system accessibility implementation: `accessibilitySupported()` returns `false` and all methods do nothing.

## Related pages

- [Widget hints and accessibility text](/en/core/widget#hints-and-accessibility-text)
- [Accessibility build](/en/guide/quick-start#accessibility-build)
- [Internationalization](/en/core/i18n)
