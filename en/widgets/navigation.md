---
title: Navigation Widgets
---

# Navigation Widgets

The examples below are in the `hiyui` namespace, and `parent` is a mounted `Widget &`. Sizes and font sizes use theme logical pixels; colors are `0xRRGGBB`, where `HIYUI_DEFAULT` follows the theme. Sentinel values are described in [Constants and Sentinel Values](/en/core/constants).

Methods with a `Notify` parameter default to `Notify::No`; with `Notify::Yes`, `onChange()` fires only when the selected value actually changes, including changes caused by user clicks. Event subscriptions accept an `EventHandle *` to obtain an unbind handle; repeated subscriptions append callbacks, and all are removed when the widget is destroyed.

## Menu

The side menu supports nesting, grouping, accordion expansion, and three display modes.

### Header

`#include <hiyui/widget/menu.h>`

### Minimal example

Creates two leaf items and one menu item with children.

```cpp
Menu menu({.width = 200, .height = 360});
menu.init(parent);
menu.items({{.text = "概览"}, {.text = "任务"},
            {.text = "设置", .children = {{.text = "常规"}, {.text = "网络"}}}});
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `int` | `180` | Width in wide mode |
| `height` | `int` | `HIYUI_AUTO` | Height adapts to content |
| `itemHeight` | `int` | `40` | Menu row height |
| `selectedIndex` | `int` | `0` | Initial leaf index |
| `indentPerLevel` | `int` | `16` | Indent per child level |
| `accordion` | `bool` | `true` | Collapses other parents at the same level when one expands |
| `iconFillOnSelected` | `bool` | `true` | Selected items use the filled font icon style |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Background color |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | Selection indicator background color |
| `activeTextColor` | `uint32_t` | `HIYUI_DEFAULT` | Selected item text color |
| `hoverColor` | `uint32_t` | `HIYUI_DEFAULT` | Hover background color |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | Unselected item text color |
| `fontSize` | `int` | `0` | `0` uses the theme default font size |
| `iconSize` | `int` | `20` | Icon size |
| `padding` | `int` | `8` | Inner padding |
| `mode` | `MenuMode` | `MenuMode::Wide` | Initial display mode |
| `collapsedWidth` | `int` | `56` | Width in `NarrowIcon` mode |
| `narrowIconTextWidth` | `int` | `88` | Width in `NarrowIconText` mode |
| `showToggleBtn` | `bool` | `true` | Whether the mode toggle button is shown |
| `toggleBtnPos` | `ToggleBtnPos` | `ToggleBtnPos::Bottom` | Mode toggle button position |
| `toggleIcon` | `uint32_t` | `0` | The current version always shows the default arrow; setting this field does not change the icon |

### MenuItem

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | UTF-8 text |
| `iconSrc` | `const void *` | `nullptr` | Image source |
| `iconCodepoint` | `uint32_t` | `0` | Font icon codepoint; overrides `iconSrc` when non-zero |
| `iconStyle` | `FontIconStyle` | `{}` | Font icon style |
| `separator` | `bool` | `false` | Whether the item is a separator; separators are excluded from leaf indices |
| `groupTag` | `const char *` | `nullptr` | Group text above the separator; used only by separators |
| `expanded` | `bool` | `false` | Initial expanded state of a parent item |
| `data` | `int` | `0` | Application data associated with a leaf item |
| `children` | `std::vector<MenuItem>` | `{}` | When non-empty, the item is an expandable parent |

### Display modes and button position

| Value | Description |
| --- | --- |
| `MenuMode::Wide` | Icons and text side by side; children expand inside the menu |
| `MenuMode::NarrowIcon` | Icons only; hovering a parent shows its submenu |
| `MenuMode::NarrowIconText` | Icon above text; hovering a parent shows its submenu |
| `ToggleBtnPos::Bottom` | Toggle button at the bottom |
| `ToggleBtnPos::Top` | Toggle button at the top |
| `ToggleBtnPos::None` | Toggle button hidden |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `Menu &` | Mounts to a parent widget |
| `items(const std::vector<MenuItem> &, Notify)` | `Menu &` | Replaces the whole menu tree; a valid leaf index is kept, otherwise nothing is selected |
| `selectedIndex(int, Notify)` | `Menu &` | Selects a leaf; `HIYUI_NO_SELECTION` clears the selection, other out-of-range values are no-ops |
| `selectedIndex()` | `int` | Current leaf index; `HIYUI_NO_SELECTION` when nothing is selected |
| `itemData(int)` | `int` | Reads `data` by leaf index; returns `0` when out of range |
| `expandItem(int, bool = true)` | `Menu &` | Expands or collapses a parent by preorder index; the preorder index is the position in a preorder traversal of the whole tree, including parents, leaves, and separators |
| `collapseAll()` | `Menu &` | Collapses all expanded parents |
| `mode(MenuMode)`, `mode()` | `Menu &` / `MenuMode` | Sets or reads the display mode |
| `collapsed(bool)` | `Menu &` | `true` switches to `NarrowIcon`, `false` to `Wide` |
| `isCollapsed()` | `bool` | Returns `true` in both narrow modes |
| `itemText(int, const char *)` | `Menu &` | Updates text by preorder index and removes the item's translation binding |
| `itemText(int, LocalizedText)` | `Menu &` | Binds node text; language switches keep the selection and expansion state |
| `onChange(callback, EventHandle * = nullptr)` | `Menu &` | The callback receives the new leaf index |
| `onActivate(callback, EventHandle * = nullptr)` | `Menu &` | Notifies when a leaf is clicked; clicking the current item again also fires |
| `onExpand(callback, EventHandle * = nullptr)` | `Menu &` | The callback receives the preorder index and the expanded state |
| `onCollapse(callback, EventHandle * = nullptr)` | `Menu &` | On display mode switches, the callback receives whether the menu is in a narrow mode |

### Indices and rebuild

Leaf indices count only selectable leaves. In the example above, "常规" has leaf index `2` and preorder index `3`; "设置" has preorder index `2`.

`items()` invalidates the `Ref` of old rows immediately; the actual release happens in the UI main loop. Passing an empty collection clears the selection; rebuilding also removes translation bindings on old entries. `itemText()` is a no-op when out of range, shows empty text for `nullptr`, and for separators only updates an existing group label.

## MenuBar

The top menu bar consists of top-level menus and `ContextMenuItem` submenus and is available only in `LV_USE_SDL3` desktop builds.

### Header

`#include <hiyui/widget/menu_bar.h>`

### Minimal example

Creates a top-level menu with two children.

```cpp
MenuBar bar;
bar.init(parent);
bar.items({{.text = "文件", .children = {{.text = "打开"}, {.text = "保存"}}}});
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `int` | `36` | Menu bar height |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Background color |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | Text color |
| `hoverColor` | `uint32_t` | `HIYUI_DEFAULT` | Hover color of top-level items |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | Background color of top-level items while a menu is open |
| `fontSize` | `int` | `0` | `0` uses the theme default font size |
| `itemPaddingX` | `int` | `12` | Horizontal padding of top-level items |
| `popupMode` | `PopupMode` | `PopupMode::Inline` | Submenu presentation |

### MenuBarItem

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | Top-level item text |
| `iconCodepoint` | `uint32_t` | `0` | Font icon codepoint; `0` shows no icon |
| `iconStyle` | `FontIconStyle` | `{}` | Font icon style |
| `disabled` | `bool` | `false` | When disabled, clicks do not open the menu |
| `children` | `std::vector<ContextMenuItem>` | `{}` | Submenu entries |
| `localizedText` | `std::optional<LocalizedText>` | `{}` | When set, overrides `text` and updates with the language |

### Popup modes

| Value | Description |
| --- | --- |
| `PopupMode::Inline` | Shown inside the current window |
| `PopupMode::Window` | Uses a separate system child window; uses `Inline` when the parent display cannot be determined |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `MenuBar &` | Mounts to a parent widget |
| `items(const std::vector<MenuBarItem> &)` | `MenuBar &` | Replaces all top-level items and submenus; an empty collection clears the menu bar |

Submenu leaf items handle actions through `ContextMenuItem::action` and register desktop shortcuts through `accelerator`. Replacing menu items or destroying the menu bar removes the old shortcuts. Submenu text can be bound to a translation with `localizedText`; descriptors are copied on assignment.

## Tabs

A tabbed container made of a tab bar and content panels, supporting four positions and overflow scrolling.

### Header

`#include <hiyui/widget/tabs.h>`

### Minimal example

Creates two pages and places a label on the first page.

```cpp
Tabs tabs({.width = 600, .height = 360});
tabs.init(parent);
tabs.items({{.text = "常规"}, {.text = "网络"}});
tabs.tabPanel(0, [](Widget &panel) {
  Label({.text = "常规设置"}).init(panel);
});
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `int` | `0` | Initial active index |
| `position` | `TabPosition` | `TabPosition::Top` | Tab bar position |
| `tabBarHeight` | `int` | `44` | Height of top/bottom bars; width of left/right bars |
| `width` | `int` | `HIYUI_AUTO` | Fills the parent width by default |
| `height` | `int` | `HIYUI_AUTO` | Sized to content by default |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | Active item color, theme Primary by default |
| `inactiveColor` | `uint32_t` | `HIYUI_DEFAULT` | Inactive item color, theme TextSecondary by default |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Background color |
| `fontSize` | `int` | `0` | `0` uses the theme default font size |
| `maxVisibleTabs` | `int` | `0` | `0` decides overflow by the actual size; a positive value also shows the scroll entry once the count exceeds it |

### TabItem

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | Tab text, copied on assignment |
| `iconCodepoint` | `uint32_t` | `0` | Font icon codepoint |
| `iconSrc` | `const void *` | `nullptr` | Image source |
| `iconStyle` | `FontIconStyle` | `{}` | Font icon style |
| `data` | `int` | `0` | Application data |

### Tab bar position

| Value | Description |
| --- | --- |
| `TabPosition::Top` | Above the content |
| `TabPosition::Bottom` | Below the content |
| `TabPosition::Left` | Left of the content |
| `TabPosition::Right` | Right of the content |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `Tabs &` | Mounts to a parent widget |
| `items(const std::vector<TabItem> &, Notify)` | `Tabs &` | Replaces the tab collection, destroying the old panels and their content; old panel references become invalid |
| `appendItems(const std::vector<TabItem> &, Notify)` | `Tabs &` | Appends tabs, keeping existing panels and their content |
| `activeIndex(int, Notify)` | `Tabs &` | Switches the active tab and content page; out-of-range values are no-ops |
| `activeIndex()` | `int` | Current index; `HIYUI_NO_SELECTION` when the collection is empty |
| `position(TabPosition)` | `Tabs &` | Switches the tab bar direction at runtime |
| `tabPanel(int, builder)` | `Tabs &` | Runs `builder(Widget &)` on the given panel; not run when out of range |
| `tabContent(int)` | `lv_obj_t *` | Borrows the panel object; returns `nullptr` when out of range; `tabPanel()` can be used to build content |
| `itemData(int)` | `int` | Reads application data; returns `0` when out of range |
| `itemText(int, const char *)`, `itemText(int, LocalizedText)` | `Tabs &` | Updates or binds tab text, keeping content and selection; plain strings remove the binding |
| `activeColor(ThemeRole)`, `inactiveColor(ThemeRole)` | `Tabs &` | Binds the active and inactive item colors to theme roles |
| `onChange(callback, EventHandle * = nullptr)` | `Tabs &` | The callback receives the active index |

After the tab count or the parent container size changes, the overflow entry updates with layout. When content page scrolling settles, the active index and the indicator are synchronized. `items()` removes translation bindings on old entries; `appendItems()` keeps existing panels.

## TabsEx

The session tab bar provides connection state, close requests, renaming, Pin grouping, and drag reordering; content pages are managed by the application.

### Header

`#include <hiyui/widget/tabs_ex.h>`

### Minimal example

Creates two session tabs and sets the connection state of the first item.

```cpp
TabsEx tabs;
tabs.init(parent);
tabs.items({{.title = "本地", .host = "127.0.0.1"}, {.host = "192.168.1.10"}});
tabs.connectionState(0, TabConnectionState::Connected);
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `int` | `0` | Initial active index |
| `width` | `int` | `HIYUI_AUTO` | Fills the parent width by default |
| `height` | `int` | `36` | Tab bar height |
| `fontSize` | `int` | `0` | `0` uses the theme default font size |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Background color |
| `activeBg` | `uint32_t` | `HIYUI_DEFAULT` | Active item background color |
| `indicatorColor` | `uint32_t` | `HIYUI_DEFAULT` | Indicator color, theme Primary by default |
| `indicatorSide` | `TabIndicatorSide` | `TabIndicatorSide::Bottom` | Indicator position |
| `animated` | `bool` | `true` | Animation of the active indicator and scroll positioning, also controlled by the theme animation switch |

### TabsExItem

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `const char *` | `nullptr` | Title; `host` is shown when empty, copied on assignment |
| `host` | `const char *` | `nullptr` | Host or IP text, copied on assignment |
| `iconCodepoint` | `uint32_t` | `0` | Font icon codepoint; overrides `iconSrc` when non-zero |
| `iconSrc` | `const void *` | `nullptr` | Image paths are copied on assignment; descriptors and their pixels are borrowed until the item is removed or replaced |
| `iconStyle` | `FontIconStyle` | `{}` | Font icon style |
| `connection` | `TabConnectionState` | `TabConnectionState::Disconnected` | Connection state |
| `showStatus` | `bool` | `true` | Shows the status dot |
| `closable` | `bool` | `true` | Allows closing; the close button appears on hover or when active |
| `pinned` | `bool` | `false` | Places the item in the Pin group |
| `disabled` | `bool` | `false` | Disables activation and dragging |
| `data` | `int` | `0` | Application data |

### Connection state and indicator

| Value | Description |
| --- | --- |
| `TabConnectionState::Connected` | Connected |
| `TabConnectionState::Disconnected` | Disconnected |
| `TabConnectionState::Error` | Connection error |
| `TabConnectionState::Connecting` | Connecting |
| `TabIndicatorSide::Bottom` | Indicator at the bottom |
| `TabIndicatorSide::Top` | Indicator at the top |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `TabsEx &` | Mounts to a parent widget |
| `items(const std::vector<TabsExItem> &, Notify)` | `TabsEx &` | Replaces all entries, ordered by Pin state; also accepts an initializer list |
| `append(const TabsExItem &, Notify)` | `TabsEx &` | Appends to the matching group |
| `removeTab(int, Notify)` | `TabsEx &` | Removes the item at the given index; out-of-range is a no-op |
| `activeIndex(int, Notify)`, `activeIndex()` | `TabsEx &` / `int` | Sets or reads the active index; disabled items and out-of-range settings are no-ops, `HIYUI_NO_SELECTION` when nothing is selectable |
| `scrollToTab(int)` | `TabsEx &` | Scrolls to the given tab; out-of-range is a no-op |
| `itemCount()` | `int` | Tab count |
| `itemData(int)` | `int` | Application data; returns `0` when out of range |
| `tabTitle(int)` | `std::string` | Copy of the currently displayed title; empty string when out of range |
| `connectionState(int, TabConnectionState)` | `TabsEx &` | Updates the connection state |
| `closable(int, bool)` | `TabsEx &` | Sets whether closing is allowed |
| `pinned(int, bool = true, Notify)`, `isPinned(int)` | `TabsEx &` / `bool` | Updates the group or queries the Pin state; out-of-range queries return `false` |
| `rename(int, const char *)` | `TabsEx &` | Copies the new title; a null pointer or empty string restores showing `host` |
| `onChange()`, `onCloseRequest()`, `onNewRequest()` | `TabsEx &` | Binds activation, close request, and new request callbacks |
| `onRightClick()`, `onRename()`, `onReorder()` | `TabsEx &` | Binds right-click, rename commit, and drag reorder callbacks |

The event methods above accept a callback and an optional `EventHandle *`. Callbacks can take `const TabsExEvent &`, an index, or no parameters.

### Events and interaction

| Value | Description |
| --- | --- |
| `TabsExEventType::Changed` | The active index changed |
| `TabsExEventType::CloseRequest` | Close requested; the application completes removal by calling `removeTab()` |
| `TabsExEventType::NewRequest` | New tab requested; `index` is `HIYUI_NO_SELECTION` |
| `TabsExEventType::RightClick` | Right click on a tab |
| `TabsExEventType::Rename` | The user confirmed a rename |
| `TabsExEventType::Reorder` | Drag reorder finished |

In `TabsExEvent`, `index` is the current tab index and `previousIndex` is the index before an activation change or at drag start; `data`, `text`, and `pinned` refer to the current item. `text` is valid only during the callback; copy the string when it needs to be kept.

Pinned items are placed before normal items, and dragging moves an item only within its own group. Pinning, removal, and reordering change indices; the application can associate sessions with `data`. Double-clicking a title starts editing, Enter commits, and Escape or losing focus cancels. When tabs overflow, they can be scrolled or located through the list entry.

## Pagination

Page numbers start at `1`; with a finite width the number of visible page numbers is reduced automatically.

### Header

`#include <hiyui/widget/pagination.h>`

### Minimal example

Creates pagination for 500 records and fills the parent width.

```cpp
Pagination pagination({.total = 500, .pageSize = 10});
pagination.init(parent);
pagination.fillWidth();
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `total` | `int` | `0` | Total record count |
| `current` | `int` | `1` | Initial page number |
| `pageSize` | `int` | `10` | Records per page |
| `width` | `int` | `HIYUI_AUTO` | Sized to content by default; visible page numbers shrink within a finite width |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | Current page color, theme Primary by default |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | Page number text color |
| `fontSize` | `int` | `0` | `0` uses the default font size |
| `buttonSize` | `int` | `32` | Page button size |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `Pagination &` | Mounts to a parent widget |
| `currentPage(int, Notify)` | `Pagination &` | Jumps to the given page; out-of-range is a no-op |
| `currentPage()` | `int` | Current page number |
| `totalPages()` | `int` | Total page count, at least `1` |
| `activeColor(ThemeRole)`, `textColor(ThemeRole)` | `Pagination &` | Binds the current-page and other-page colors to theme roles |
| `onChange(callback, EventHandle * = nullptr)` | `Pagination &` | The callback receives the new page number |

With `total <= 0` or `pageSize <= 0`, one page is shown. At most five page numbers are visible, and the current page highlight sits in the middle of the page number area; changing the width does not change the current page. When the theme disables animation, switching lands on the target page immediately.

## Segmented

The segmented radio control supports a selection thumb, icons, and per-item disabling.

### Header

`#include <hiyui/widget/segmented.h>`

### Minimal example

Creates three options with the second item selected initially.

```cpp
Segmented segmented({.selectedIndex = 1});
segmented.init(parent);
segmented.items({"日", "周", "月"});
```

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `selectedIndex` | `int` | `0` | Initial selected index |
| `size` | `SegmentedSize` | `SegmentedSize::Medium` | Size preset |
| `width` | `int` | `HIYUI_AUTO` | Fills the parent width by default |
| `height` | `int` | `HIYUI_AUTO` | Determined by the size preset by default |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | Selected item text color |
| `activeBg` | `uint32_t` | `HIYUI_DEFAULT` | Selection thumb background color |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | Overall background color |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | Unselected item text color |
| `fontSize` | `int` | `0` | `0` is determined by the size preset |
| `radius` | `int` | `HIYUI_NONE_INT` | Determined by the size preset when unset |
| `animated` | `bool` | `true` | Thumb animation, also controlled by the theme animation switch |

### SegmentedItem

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | UTF-8 text |
| `iconCodepoint` | `uint32_t` | `0` | Font icon codepoint |
| `iconSrc` | `const void *` | `nullptr` | Image source |
| `iconStyle` | `FontIconStyle` | `{}` | Font icon style |
| `disabled` | `bool` | `false` | Disables selecting the item |
| `data` | `int` | `0` | Application data |

### Size presets

| Value | Description |
| --- | --- |
| `SegmentedSize::Small` | Default height `26`, font size `12`, radius `4` |
| `SegmentedSize::Medium` | Default height `32`, font size `14`, radius `6` |
| `SegmentedSize::Large` | Default height `40`, font size `16`, radius `8` |
| `SegmentedSize::Fit` | Uses an explicit `height`; `32` when height is unset |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(Widget &)` | `Segmented &` | Mounts to a parent widget |
| `items(const std::vector<SegmentedItem> &, Notify)` | `Segmented &` | Replaces the collection; the selection is kept while the current index stays valid and selectable |
| `items(std::initializer_list<const char *>, Notify)` | `Segmented &` | Sets plain text options |
| `selectedIndex(int, Notify)` | `Segmented &` | Selects the given item; out-of-range or disabled items are no-ops |
| `selectedIndex()` | `int` | Current index; `HIYUI_NO_SELECTION` when nothing is selectable |
| `itemData(int)` | `int` | Application data; returns `0` when out of range |
| `itemText(int, const char *)`, `itemText(int, LocalizedText)` | `Segmented &` | Updates or binds option text; plain strings remove the binding |
| `disableItem(int, bool = true, Notify)` | `Segmented &` | Sets the disabled state of one item and adjusts the selection as needed |
| `activeColor(ThemeRole)`, `activeBg(ThemeRole)`, `textColor(ThemeRole)` | `Segmented &` | Binds the selected item text, thumb background, and unselected item text colors |
| `onChange(callback, EventHandle * = nullptr)` | `Segmented &` | The callback receives the new index |

When the current item is disabled, the first available item to its left is selected; when none is available on the left, the first available item on the right is selected. With all items disabled nothing is selected, and re-enabling an item selects it. Replacing the collection removes translation bindings on old entries; updating a single item's text keeps the selection.

## C interface

`<hiyui/c/nav.h>` provides Menu, MenuBar, Tabs, Pagination, and Segmented; TabsEx uses `<hiyui/c/tabs_ex.h>`. Passing `NULL` as the Props pointer of a create function uses the widget's default configuration; with an explicit struct, set each field according to the C header.

| Widget | C interface |
| --- | --- |
| Menu | `hiyui_menu_create()`, `hiyui_menu_set_items()`, `hiyui_menu_set_selected()`, `hiyui_menu_get_selected()`, `hiyui_menu_item_data()`, `hiyui_menu_set_mode()`, `hiyui_menu_get_mode()`, `hiyui_menu_set_collapsed()`, `hiyui_menu_is_collapsed()`, `hiyui_menu_expand_item()`, `hiyui_menu_collapse_all()`; events are `hiyui_menu_on_change()`, `hiyui_menu_on_activate()`, `hiyui_menu_on_expand()`, `hiyui_menu_on_collapse()` |
| MenuBar | `hiyui_menu_bar_create()`, `hiyui_menu_bar_set_items()`; child items handle actions through `action` or `action_ex` |
| Tabs | `hiyui_tabs_create()`, `hiyui_tabs_set_items()`, `hiyui_tabs_append_items()`, `hiyui_tabs_content()`, `hiyui_tabs_set_active_index()`, `hiyui_tabs_get_active_index()`, `hiyui_tabs_set_position()`, `hiyui_tabs_item_data()`, `hiyui_tabs_on_change()` |
| TabsEx | `hiyui_tabs_ex_create()`, `hiyui_tabs_ex_set_items()`, `hiyui_tabs_ex_append()`, `hiyui_tabs_ex_remove()`, `hiyui_tabs_ex_set_active()`, `hiyui_tabs_ex_get_active()`; title, Pin, connection state, and business events in the [TabsEx C Reference](/en/bindings/c/tabs_ex.h) |
| Pagination | `hiyui_pagination_create()`, `hiyui_pagination_set_current()`, `hiyui_pagination_get_current()`, `hiyui_pagination_get_total_pages()`, `hiyui_pagination_on_change()` |
| Segmented | `hiyui_segmented_create()`, `hiyui_segmented_set_items()`, `hiyui_segmented_set_selected_index()`, `hiyui_segmented_get_selected_index()`, `hiyui_segmented_disable_item()`, `hiyui_segmented_item_data()`, `hiyui_segmented_on_change()` |

The C notification parameters are `HIYUI_NOTIFY_NO` / `HIYUI_NOTIFY_YES`. Theme role functions of Tabs, Segmented, and Pagination are in `nav.h`; item text updates and translation bindings are in `<hiyui/c/i18n.h>`. Panel handles and event data in callbacks are borrowed objects and must not be used after the owning widget is destroyed.

## Related pages

- [Widget](/en/core/widget)
- [Events](/en/core/event-system)
- [Internationalization](/en/core/i18n)
- [Theme](/en/styling/theme)
- [Animation](/en/widgets/animation)
- [Navigation Widgets C Reference](/en/bindings/c/nav.h)
- [TabsEx C Reference](/en/bindings/c/tabs_ex.h)
