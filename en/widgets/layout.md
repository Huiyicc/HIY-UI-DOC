---
title: Layout Widgets
---

# Layout Widgets

Layout widgets inherit `Container<T>`. Props passed to the constructor are applied when `init(parent)` creates the widget; props passed to `init(parent, props)` override the constructor values. `init` returns the widget itself and supports chaining.

## Box

`Box` sets no arrangement direction and suits absolute positioning, stacking, and use as a styled container.

```cpp
Box overlay({.width = 320, .height = 180, .padding = 12});
overlay.init(parent);

Label({.text = "Overlay"}).init(overlay).align(Anchor::TopLeft);
Button({.text = "Close"}).init(overlay).align(Anchor::TopRight);
```

## VBox and HBox

`VBox` arranges children vertically and `HBox` horizontally. `padding` controls the inner padding, `gap` the spacing between children, and `align` the main-axis alignment.

```cpp
VBox profile({.padding = 16, .gap = 12});
profile.init(parent);

Label({.text = "Profile"}).init(profile);

HBox actions({.gap = 8});
actions.init(profile);

Button({.text = "Cancel"}).init(actions);
Button({.text = "Save"}).init(actions);
```

## FlowBox

`FlowBox` uses a wrapping horizontal layout. `minChildWidth`, `maxChildWidth`, and `childGrow` control the width of each item and are applied when children are mounted.

```cpp
FlowBox cards({.gap = 8, .minChildWidth = 160, .childGrow = true});
cards.init(parent);

Card({.title = "A"}).init(cards);
Card({.title = "B"}).init(cards);
```

## Spacer

`Spacer` occupies the remaining space in a Flex container.

```cpp
HBox bar({.gap = 8});
bar.init(parent);

Label({.text = "Document"}).init(bar);
Spacer().init(bar);
Button({.text = "Save"}).init(bar);
```

## Sizing and constraints

The sizing methods distinguish content size, fill, and remaining space; non-`Px` methods use theme logical pixels.

| Configuration | Behavior |
|---|---|
| `width(HIYUI_AUTO)`, `height(HIYUI_AUTO)` | The corresponding axis is sized to content |
| `fillWidth()`, `fillHeight()`, `fill()` | The corresponding axis uses 100% of the parent content area, still constrained by the minimum and maximum size |
| `flex(grow)` | Distributes remaining space proportionally along the main axis of the parent Flex container; `0` excludes the widget from distribution |
| `minimumSize(w, h)` | Sets the minimum size on both axes; `0` means no limit |
| `maxWidth(w)`, `maxHeight(h)` | Sets the logical maximum size; `0` sets a zero cap, `HIYUI_AUTO` removes the local cap, and other negative values are no-ops |

The parent container should have a definite size on every axis that needs remaining-space distribution or scrolling. When the minimum size is greater than the maximum size, layout uses the minimum size; when the minimum size exceeds the parent content area, the content can overflow. The maximum size does not create a scroll area automatically. Sentinel definitions are in [Constants and Sentinel Values](/en/core/constants), and the full method contracts in [Widget](/en/core/widget).

To change direction, spacing, size, or visibility based on the parent content area, use the [container layout rules](/en/core/responsive#container-layout-rules). The rules keep the existing subtree; business selection and drafts are owned by the application.

The following content area fills the available width and limits the editor content to 640 logical pixels.

```cpp
VBox content({.padding = 16, .gap = 12, .scroll = ScrollMode::Vertical});
content.init(parent).fill();
VBox editor({.gap = 12});
editor.init(content).fillWidth().maxWidth(640);
Label({.text = "设备设置"}).init(editor);
```

## Scrolling

The `scroll` field of VBox, HBox, and FlowBox accepts a `ScrollMode`. On desktop backends, scrollable containers support the mouse wheel and an overlay scrollbar.

A scroll area should have a definite size on the scrolling axis; content beyond that area becomes scrollable, and the minimum size and font size of children keep their values.

## List detail

[ListDetail](/en/widgets/list-detail) switches between a single pane and split panes based on its own content width. Place the list and the detail in `ListDetailList` and `ListDetailContent` respectively; the same subtree is kept across pane switches. When a pane needs scrolling, place a layout container with `scroll` set inside it.
