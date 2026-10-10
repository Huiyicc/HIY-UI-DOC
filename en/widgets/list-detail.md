---
title: List Detail
---

## ListDetail

`ListDetail` shows a single pane or split panes based on its own content logical width and does not rebuild the pane subtrees when switching. Pane presentation, focus, and the switch animation are managed by the widget; business selection and drafts are managed by the application.

### Header

The widget is declared in `<hiyui/widget/list_detail.h>`. The examples below use the umbrella header.

```cpp
#include <hiyui/hiyui.h>
using namespace hiyui;
```

### Minimal example

`parent` is a mounted parent widget with a definite size; both panes are shown once the content logical width reaches 720.

```cpp
Ref<ListDetail> panes;
auto page = ListDetail{}(
    ListDetailList{}(Label{.text = "设备列表"}),
    ListDetailContent{}(Label{.text = "设备详情"})
).ref(panes);
page.init(parent);
```

### Props

| Field | Type | Default | Description |
|---|---|---|---|
| `splitMinWidth` | `int` | `720` | Minimum content logical width for entering split mode; must be greater than `listWidth + gap` |
| `listWidth` | `int` | `240` | List pane width in split mode, in positive logical pixels |
| `gap` | `int` | `12` | Gap between the panes in split mode, in non-negative logical pixels |
| `animated` | `bool` | `true` | Pane switches in single-pane mode use the theme animation; switching is immediate when the theme disables animation |

Invalid Props prevent widget creation. The widget fills by default the size assigned by its parent, and the breakpoint uses its own width after inner padding and borders are removed.

### Runtime methods

Chained methods return `ListDetail &` for lvalues and `ListDetail &&` for temporaries.

| Method | Returns | Description |
|---|---|---|
| `init(parent)`, `init(parent, props)` | the widget itself | Mounts to a parent widget or a Window root content area; explicit Props override the constructor values |
| `activePane()` | `ListDetailPane` | The most recently requested pane; `List` initially, while unmounted, and after destruction has been requested |
| `presentation()` | `ListDetailPresentation` | The current single-pane or split-pane presentation; `Single` when invalid |
| `activePane(value, notify = Notify::No)` | the widget itself | Sets the active pane; can be called before mounting; setting `Detail` is a no-op when no detail pane exists |
| `back()` | `bool` | Returns `true` when the detail pane is shown in single-pane mode with a list present, switches back to the list, and notifies; returns `false` otherwise |
| `onChange(handler, handle = nullptr)` | the widget itself | Accepts `void(ListDetailPane)`, `void(Event &)`, or `void()`; supports move-only closures and an optional unbind handle |

`Notify::Yes` notifies only when the pane value changes. Size, structure, and single-pane/split-pane presentation changes do not trigger `onChange`. `back()` does not touch the application page history and neither cancels nor saves business drafts.

The `ListDetailPane` values:

| Value | Description |
|---|---|
| `List` | List pane |
| `Detail` | Detail pane |

The `ListDetailPresentation` values:

| Value | Description |
|---|---|
| `Single` | Content width is below the breakpoint; the active pane is shown |
| `Split` | Content width has reached the breakpoint; the list uses `listWidth` and the detail fills the remaining width |

### Advanced usage

Each pane holds its content in a scrollable VBox; opening the detail and returning to the list only switch the active pane.

```cpp
ListDetail page({.splitMinWidth = 560, .listWidth = 224, .gap = 16});
const auto panes = page.ref();
page(
    ListDetailList{}(
        VBox{.gap = 8, .scroll = ScrollMode::Vertical}(
            Button{.text = "查看设备"}.onClick([panes] {
                if (panes) panes->activePane(ListDetailPane::Detail);
            })
        ).fill()
    ),
    ListDetailContent{}(
        VBox{.gap = 8, .scroll = ScrollMode::Vertical}(
            Label{.text = "设备详情"},
            Button{.text = "返回列表"}.onClick([panes] {
                if (panes) panes->back();
            })
        ).fill()
    )
);
page.init(parent);
```

The callback stores the associated `Ref` by value, so the local variable `panes` does not need to outlive the widget. The parent widget owns the pane subtrees; entering a pane restores its last valid focusable descendant, or selects the first focusable descendant when no candidate exists. Focus that is still visible after relayout is kept, and scroll offsets are preserved within the new valid range.

Application-level back buttons call `Window::requestBack()`, which is handled in the order of popups, cancelable input, local navigation, and page history; when the request reaches the currently active ListDetail, its `back()` runs. Calling `ListDetail::back()` directly handles only that container. See [Back Request](/en/window/multi-window#back-request).

### C bindings

Include `<hiyui/c/layout.h>`. C and C++ share the same content breakpoint, pane switching, and notification contracts; after creation a C widget's lifecycle is managed by its parent, and a released handle must not be passed again.

`hiyui_list_detail_props_init()` writes the following defaults. Integer 0 keeps its real meaning, so default Props cannot be replaced by zero initialization; for example `gap = 0` means no pane gap.

| Field | Type | Default | Description |
|---|---|---|---|
| `split_min_width` | `int` | `720` | Minimum content logical width for split mode; must be greater than `list_width + gap` |
| `list_width` | `int` | `240` | List pane width in split mode, in positive logical pixels |
| `gap` | `int` | `12` | Gap between the panes in split mode, in non-negative logical pixels |
| `animated` | `hiyui_bool_t` | `HIYUI_BOOL_TRUE` | DEFAULT/TRUE uses the theme animation and FALSE switches immediately; switching is immediate when the theme disables animation |

Function and null-value behavior:

| Method | Returns | Description |
|---|---|---|
| `hiyui_list_detail_props_init(out)` | `void` | NULL is a no-op; repeated calls overwrite the previous values |
| `hiyui_list_detail_create(parent, props)` | `hiyui_widget_t *` | A NULL props uses the defaults; the configuration is copied at call time; returns NULL when the parent or the configuration is invalid |
| `hiyui_list_detail_list_create(parent)` | `hiyui_widget_t *` | parent must be a ListDetail; returns NULL when a list pane already exists or the parent is invalid |
| `hiyui_list_detail_content_create(parent)` | `hiyui_widget_t *` | parent must be a ListDetail; returns NULL when a detail pane already exists or the parent is invalid |
| `hiyui_list_detail_active_pane(w)` | `hiyui_list_detail_pane_t` | Queries the active pane; returns `HIYUI_LIST_DETAIL_PANE_LIST` for NULL or invalid objects |
| `hiyui_list_detail_presentation(w)` | `hiyui_list_detail_presentation_t` | Queries the current presentation; returns `HIYUI_LIST_DETAIL_SINGLE` for NULL or invalid objects |
| `hiyui_list_detail_set_active_pane(w, value, notify)` | `void` | No-op when the detail pane is requested while absent, for invalid pane enums, or for invalid objects; notifies on `HIYUI_NOTIFY_YES` when the value changes |
| `hiyui_list_detail_back(w)` | `int` | Returns 1 when a single-pane detail switches back to an existing list and notifies; returns 0 otherwise |

Pane and presentation enum values:

| Value | Description |
|---|---|
| `HIYUI_LIST_DETAIL_PANE_LIST` | List pane |
| `HIYUI_LIST_DETAIL_PANE_DETAIL` | Detail pane |
| `HIYUI_LIST_DETAIL_SINGLE` | Single-pane presentation |
| `HIYUI_LIST_DETAIL_SPLIT` | Split-pane presentation |

Creates the same breakpoint and panes as the C++ example above; `parent` is a handle to a mounted parent widget with a definite size.

```c
hiyui_list_detail_props_t props;
hiyui_list_detail_props_init(&props);
props.split_min_width = 560;
props.list_width = 224;
props.gap = 16;
hiyui_widget_t *panes = hiyui_list_detail_create(parent, &props);
hiyui_widget_t *list = hiyui_list_detail_list_create(panes);
hiyui_widget_t *detail = hiyui_list_detail_content_create(panes);
hiyui_list_detail_set_active_pane(
    panes, HIYUI_LIST_DETAIL_PANE_DETAIL, HIYUI_NOTIFY_NO);
```

Add the content widgets of each pane to `list` and `detail`. Use `hiyui_wdg_on_change()` to subscribe to pane changes and query `hiyui_list_detail_active_pane()` in the callback; size and structure changes do not send this notification. The window-level back entry point is `hiyui_win_request_back()` in `<hiyui/c/app.h>`.

## ListDetailList

The list pane must be a direct child of a `ListDetail`, at most one per ListDetail.

### Header

Use `<hiyui/widget/list_detail.h>`.

### Minimal example

Creates a list-detail container and adds the list pane; `parent` is a mounted parent widget.

```cpp
ListDetail panes;
panes.init(parent);
ListDetailList list;
list.init(panes);
Label{.text = "设备列表"}.init(list);
```

### Props

No dedicated Props.

### Runtime methods

| Method | Returns | Description |
|---|---|---|
| `init(parent)` | lvalue `ListDetailList &`, rvalue `ListDetailList &&` | Does not create when the parent is not a ListDetail or a list pane already exists |

## ListDetailContent

The detail pane must be a direct child of a `ListDetail`, at most one per ListDetail.

### Header

Use `<hiyui/widget/list_detail.h>`.

### Minimal example

Creates a list-detail container and adds the detail pane; `parent` is a mounted parent widget.

```cpp
ListDetail panes;
panes.init(parent);
ListDetailContent detail;
detail.init(panes);
Label{.text = "请选择设备"}.init(detail);
```

### Props

No dedicated Props.

### Runtime methods

| Method | Returns | Description |
|---|---|---|
| `init(parent)` | lvalue `ListDetailContent &`, rvalue `ListDetailContent &&` | Does not create when the parent is not a ListDetail or a detail pane already exists |

With a single pane, that pane fills the container. After the detail pane is removed, the active pane reverts to `List`; after the list pane is removed, the detail is kept. Structure changes do not send pane value notifications.

## Related pages

- [Layout Widgets](/en/widgets/layout)
- [Responsive Layout](/en/core/responsive)
- [Container and Ref](/en/core/container-ref)
- [Events](/en/core/event-system)
- [Cross-Platform Tasks & Layout](/en/guide/cross-platform)
