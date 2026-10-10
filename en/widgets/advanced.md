---
title: Composite Widgets
---

# Composite Widgets

Composite widgets contain internal objects, popup layers, or virtualized data structures. Data and callback lifetimes follow the corresponding Props and API documentation.

## Containers and navigation

| Widget | Purpose |
| --- | --- |
| `Card` | Content container with a title |
| [Tabs](/en/widgets/navigation#tabs) | Tab pages and content panels |
| [TabsEx](/en/widgets/navigation#tabsex) | Session tabs, close requests, renaming, and reordering |
| [Menu](/en/widgets/navigation#menu) | Grouped and nested menu |
| [MenuBar](/en/widgets/navigation#menubar) | Desktop top menu bar |
| [Segmented](/en/widgets/navigation#segmented) | Segmented radio |
| `Carousel` | Page or image carousel |
| [Pagination](/en/widgets/navigation#pagination) | Page navigation within a finite width |
| `TitleBar` | Title bar for frameless windows |

The following tabs create two navigation items and set content for the first page.

```cpp
Tabs tabs({.width = 600, .height = 400});
tabs.init(parent);
tabs.items({{.text = "General"}, {.text = "Advanced"}});
tabs.tabPanel(0, [](Widget &panel) {
  Label label({.text = "General settings"});
  label.init(panel);
});
```

`Card::title(const LocalizedText &)` and `TitleBar::title(const LocalizedText &)` bind the card title and the title bar text respectively and return the widget reference. `Card` creates its title area when it does not exist yet. A plain `title(const char *)` call removes the corresponding translation binding.

### Navigation item localization

After items are created, their display text can be bound individually; language switches keep the content panels and the selection state.

| Method | Returns | Description |
| --- | --- | --- |
| `Tabs::itemText(int, LocalizedText)` | `Tabs &` | Updates tab text by index starting from `0` |
| `Menu::itemText(int, LocalizedText)` | `Menu &` | Updates node text in the menu's preorder traversal; indices include parents and separators |
| `Segmented::itemText(int, LocalizedText)` | `Segmented &` | Updates segment text by index starting from `0` |

Each method also provides a `const char *` overload that removes the corresponding item's translation binding. Out-of-range indices are no-ops. Replacing an entire item collection clears translation bindings on the collection; a `Menu` separator only updates an existing group label.

The following snippet binds titles to already created tabs.

```cpp
tabs.itemText(0, tr("settings.general", "常规"))
    .itemText(1, tr("settings.advanced", "高级"));
```

### Pagination width

`PaginationProps::width` defaults to `HIYUI_AUTO`, and the widget lays out page numbers by content width. After a finite width is set or `fillWidth()` is called, the widget adjusts the number of visible page numbers when the parent container size changes; the previous page, next page, and current page state stay unchanged. When the parent container becomes wider again, the number of visible page numbers is restored accordingly.

The following pagination uses the parent container's available width.

```cpp
Pagination pagination({.total = 500, .pageSize = 10, .buttonSize = 32});
pagination.init(parent);
pagination.fillWidth();
pagination.onChange([](int page) { loadPage(page); });
```

## Selection and popups

`Dropdown`, `DatePicker`, `TimePicker`, `ColorPicker`, `ContextMenu`, and `PopupPanel` present content in a separate popup layer. When the parent object, a scrolling ancestor, or the window closes, the popup layer is cleaned up at the same time.

### Popup modes and close notification

`PopupPanelProps::mode` defaults to `PopupMode::Inline`. With `Window` set, a separate system child window is used; `Inline` is used when there is no window manager or when `closeOnOutsideClick == false`. Closing the panel destroys child components created by the content builder callback.

On desktop, `ContextMenu::open(items, x, y, screen, owner, mode, maxHeight, closed)` takes a public `Widget` screen and a nullable owner and returns whether creation succeeded. `x` and `y` are physical pixel coordinates on that screen; items are copied during the call. `closed` is notified once during the close after a successful open, and the menu can be reopened inside the callback; it is not called when creation fails.

`ContextMenu::close(screen)` closes the menu on the given screen; repeated closes are no-ops. The C interfaces are `hiyui_context_menu_open()`, `hiyui_context_menu_close()`, and `hiyui_context_menu_close_all()`. C close callback data is released by `destroy` after the menu has closed and the chosen action has returned, and also when opening fails; the item `action_ud` must stay valid until the corresponding action returns.

The full C parameters are in [ContextMenu](/en/bindings/c/context_menu.h) and [PopupPanel](/en/bindings/c/popup_panel.h).

### Picker panel presentation

`DatePicker`, `TimePicker`, and `ColorPicker` outside embedded mode set the panel presentation through `presentation`.

| Value | Description |
| --- | --- |
| `PickerPresentation::Auto` | On open, reads the logical width of the window available area; below `720` a bottom sheet is used, at or above `720` an anchored popup is used |
| `PickerPresentation::Anchored` | Positioned relative to the Picker input area; `placement` sets the alignment direction |
| `PickerPresentation::BottomSheet` | Shows a full-width panel at the bottom of the window available area; ignores `placement` |

The available area uses `WindowArea.availableArea`, which already excludes known safe area restrictions and keyboard occlusion; without a window host, the owning screen bounds are used. Occlusion not reported by the platform cannot be avoided automatically; the area semantics are in [Responsive Layout](/en/core/responsive#window-area).

While the panel is open, window size or available area changes only relayout the current presentation, and constrained content can scroll. The panel closes when the available area becomes empty or the anchor is destroyed, hidden, or moved to another window. When it is opened again after closing, `Auto` reads the available width again. With `ColorPickerProps::panelMode` set to `true`, the panel is embedded directly in the parent container and `presentation` is ignored.

A window back request closes the current Picker; the page behind it does not navigate back during the close. Theme switches close the date, time, and color panels; DPI changes close the date and time panels, and the color panel relayouts.

The following date picker uses a bottom sheet in a narrow available area and a right-aligned anchored popup in a wide available area.

```cpp
DatePicker picker({
    .placement = DatePickerPlacement::BottomRight,
    .presentation = PickerPresentation::Auto,
});
picker.init(parent);
```

The following dropdown sets the initial selection and listens for changes.

```cpp
Dropdown dropdown({.selectedIndex = 1});
dropdown.init(parent);
dropdown.items({{"Small"}, {"Medium"}, {"Large"}});
dropdown.onChange([&] { setSize(dropdown.selectedIndex()); });
```

### Picker and menu text

Default placeholder text of `Dropdown`, `DatePicker`, and `TimePicker` uses library strings; date titles, weekday names, the confirm button, and the dropdown search and empty-result hints update with the language. Custom placeholder text is bound through the following methods.

| Method | Returns | Description |
| --- | --- | --- |
| `Dropdown::placeholder(LocalizedText)` | `Dropdown &` | Binds the placeholder text, keeping the current value |
| `DatePicker::placeholder(LocalizedText)` | `DatePicker &` | Binds the placeholder text, keeping the selected date |
| `TimePicker::placeholder(LocalizedText)` | `TimePicker &` | Binds the placeholder text, keeping the selected time |
| `Dropdown::itemText(int, LocalizedText)` | `Dropdown &` | Binds item text by index starting from `0`, keeping the collection and selection state; out-of-range is a no-op |

Plain string overloads of the methods above remove the corresponding bindings. `placeholder(nullptr)` restores the default text; replacing a dropdown's entire collection clears item text bindings.

On desktop, `ContextMenuItem::localizedText` takes an owning descriptor returned by `tr()` or `trn()`; once set it overrides the item's `text`. Built-in edit menu action names such as copy and paste use library translations.

## Data widgets

| Widget | Data model |
| --- | --- |
| `List` | Array of `ListItem` |
| `TemplateList<T>` | Data array with `ItemTemplate<T>` |
| `Table` | `TableColumn` and `TableRow` |
| `Tree` | `TreeNodeConfig` |
| `ChatList` | `ChatItem` |

`TemplateList`, `Table`, and `Tree` maintain row objects only for the visible area. After updating data, use the widget's public refresh or batch update methods.

## Dialogs

`ConfirmDialog`, `MessageBox`, and `Toast` cover confirmation, messages, and notifications. Callbacks may run before the object is deleted; do not keep popup internal object pointers in callbacks.

`ConfirmDialogProps::confirmText`, `ConfirmDialogProps::cancelText`, and `MessageBoxProps::confirmText` all default to `nullptr`, meaning library button text that changes with the language is used. After a plain string is passed explicitly, that text is fixed; for custom internationalized text use the runtime methods below.

| Method | Returns | Description |
| --- | --- | --- |
| `ConfirmDialog::title(LocalizedText)` | `ConfirmDialog &` | Binds the title |
| `ConfirmDialog::content(LocalizedText)` | `ConfirmDialog &` | Binds the body text |
| `ConfirmDialog::confirmText(LocalizedText)` | `ConfirmDialog &` | Binds the confirm button text |
| `ConfirmDialog::cancelText(LocalizedText)` | `ConfirmDialog &` | Binds the cancel button text |
| `MessageBox::title(LocalizedText)` | `MessageBox &` | Binds the title |
| `MessageBox::content(LocalizedText)` | `MessageBox &` | Binds the body text |
| `MessageBox::confirmText(LocalizedText)` | `MessageBox &` | Binds the confirm button text |
| `Toast::message(LocalizedText)` | `Toast &` | Binds the notification text |

Each method also provides a plain string overload for removing the corresponding translation binding. After a dialog is shown, only already created text areas are updated; to bind the title or body after showing, reserve the corresponding area with a non-null pointer at creation, and an empty string `""` also works. Binding after creation through the C API follows the same restriction.

`Toast::info()`, `success()`, `warning()`, and `error()` accept `LocalizedText`, display for `3000` ms by default, and use `ToastPosition::TopCenter`. Switching the language while a notification is still visible updates its text.

The following notification uses text from the application language pack.

```cpp
Toast::success(tr("app.saved", "已保存"));
```

Language pack creation and loading are described in [Internationalization](/en/core/i18n).

## Charts

The chart widgets include line, bar, pie, gauge, and waveform charts. They share axis, legend, and interaction configuration. Use `TiledPointBuffer` for large time-series point counts.
