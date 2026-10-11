---
title: Widget
---

# Widget

`Widget` is the base class of all widgets and provides lifecycle, layout, style, event, and query interfaces.

## Lifecycle

Widgets mount to a parent through `init()`, and children are managed by the parent. Destroying the wrapper does not delete the widget; `release()` unbinds the wrapper without changing the parent-child relation. `destroy()` immediately invalidates references to itself and its subtree; actual release completes in the UI main loop.

Configuration chained methods (styles, sizes, layout, events, references, and tooltips) can be called before mounting and are applied in call order at mount time; for the same field, Props apply first and pre-mount chained calls apply later, so the later setting overrides the earlier one. Action methods require a mounted widget: `focus()`, `clean()`, `redraw()`, `moveToIndex()`, `scrollToX()`/`scrollToY()` and similar assert in debug builds and are no-ops in release builds; `scrollByPx()`, `scrollToXPx()`/`scrollToYPx()`, `stopScroll()`, `scrollIntoView()`, and `sendEvent()` silently do nothing when unmounted or invalidated. Query methods return zero values, empty strings, or `false` when unmounted.

Creates a label and sets its theme text color.

```cpp
Label label({.text = "Status"});
label.init(parent);
label.textColor(ThemeRole::TextSecondary);
```

Most widgets provide both `init(lv_obj_t*)` and `init(Widget&)`.

## Primitive nodes

`initPrimitive(parent, kind)` creates a node without a widget theme attached and can compose custom widgets. The parent widget must be valid, and a wrapper can be initialized only once.

| `PrimitiveKind` value | Description |
| --- | --- |
| `Object` | Plain node, also the default |
| `Text` | Text node; `textContent()` and `textOverflow()` can be called |
| `Pressable` | Pressable node |

The following code creates a pressable node with text and applies the button theme.

```cpp
Widget control;
control.initPrimitive(parent, PrimitiveKind::Pressable);
control.themeStyle(WidgetType::Button).keyFocus();
Widget caption;
caption.initPrimitive(control, PrimitiveKind::Text);
caption.textContent("保存").center().clickable(false).eventBubble();
```

| Method | Returns | Description |
| --- | --- | --- |
| `textContent(const char *)` | `Widget &` | Sets text node content; `nullptr` refreshes the current text, no-op on non-text nodes |
| `textContent()` | `std::string` | Copy of the text; empty string for non-text nodes or invalid objects |
| `textOverflow(TextOverflow)` | `Widget &` | `Wrap` wraps lines, `Ellipsis` ellipsizes on a single line, `Dots` keeps the current height |
| `bindText(const LocalizedText &, setter)` | `Widget &` | Copies the translation description; on update calls `setter(Widget &, const char *)`, repeated binding replaces |
| `clearTextBinding()` | `Widget &` | Removes the translation binding and keeps the current text |
| `parent()`, `childAt(int)`, `screen()` | `Ref<Widget>` | Returns non-owning references; empty reference when absent, out of range, or invalid |
| `topLayer()` | `Ref<Widget>` | Top-layer node of the owning display, borrowed until the display is destroyed; empty reference for invalid objects |
| `reparent(const Widget &)` | `Widget &` | Changes the parent; no-op for invalid objects or ancestor cycles |
| `contains(const Widget &)` | `bool` | Whether the widget contains the given widget, including itself; `false` for invalid objects |
| `isHidden()`, `isVisible()` | `bool` | Query the own hidden flag and the effective visibility including ancestors respectively; `false` for invalid objects |
| `floating(bool)`, `eventBubble(bool)` | `Widget &` | Set whether to leave the parent layout and whether events propagate to the parent respectively |

## C interface

After including `<hiyui/c/widget.h>`, primitive nodes can be created and composed through the following interfaces. Node handles are owned by the parent; use the C reference interface to store them across callbacks.

| C++ operation | C function |
| --- | --- |
| `initPrimitive()` | `hiyui_primitive_create()` |
| `textContent()`, `textOverflow()` | `hiyui_wdg_set_text_content()`, `hiyui_wdg_get_text_content()`, `hiyui_wdg_text_overflow()` |
| `bindText()`, `clearTextBinding()` | `hiyui_wdg_bind_text()`, `hiyui_wdg_clear_text_binding()` |
| `parent()`, `childAt()`, `reparent()` | `hiyui_wdg_parent()`, `hiyui_wdg_child_at()`, `hiyui_wdg_reparent()` |
| `themeStyle(WidgetType)` | `hiyui_wdg_theme_style()` |
| `themeStyle(provider)` | `hiyui_wdg_bind_theme_style()` |
| `style(Style)`, `style(StyleSet)` | `hiyui_wdg_apply_style_spec()`, `hiyui_wdg_apply_style_spec_set()` |
| `Ref::destroy()` | `hiyui_ref_destroy_target()` |
| `scrollMode()`, `scrollbars()`, `scrollSnap()` | `hiyui_wdg_scroll_mode()`, `hiyui_wdg_scrollbars()`, `hiyui_wdg_scroll_snap()` |
| `snapChild()`, `scrollOne()`, `scrollOnFocus()`, `scrollChain()` | `hiyui_wdg_snap_child()`, `hiyui_wdg_scroll_one()`, `hiyui_wdg_scroll_on_focus()`, `hiyui_wdg_scroll_chain()` |
| `scrollToXPx()`, `scrollToYPx()`, `scrollByPx()` | `hiyui_wdg_scroll_to_x_px()`, `hiyui_wdg_scroll_to_y_px()`, `hiyui_wdg_scroll_by_px()` |
| `stopScroll()`, `scrollIntoView()`, `scrollMetrics()` | `hiyui_wdg_stop_scroll()`, `hiyui_wdg_scroll_into_view()`, `hiyui_wdg_get_scroll_metrics()` |
| `posPx()`, `positionPx()`, `translatePx()`, `translationPx()` | `hiyui_wdg_pos_px()`, `hiyui_wdg_get_position_px()`, `hiyui_wdg_translate_px()`, `hiyui_wdg_get_translation_px()` |
| `minimumSizePx()`, `clipCorner()`, `overflowVisible()` | `hiyui_wdg_minimum_size_px()`, `hiyui_wdg_clip_corner()`, `hiyui_wdg_overflow_visible()` |
| `topLayer()`, `textAlign()`, `imageScale()` | `hiyui_wdg_top_layer()`, `hiyui_wdg_text_align()`, `hiyui_wdg_image_scale()` |
| `layoutEnvironment()`, `onEnvironmentChange()` | `hiyui_wdg_layout_environment()`, `hiyui_wdg_on_environment_change()` |
| `maxWidth()`, `maxHeight()` | `hiyui_wdg_max_width()`, `hiyui_wdg_max_height()` |
| `layoutRules()`, `clearLayoutRules()` | `hiyui_wdg_layout_rules()`, `hiyui_wdg_clear_layout_rules()` |

For full parameters and return values see [Widget C Reference](/en/bindings/c/widget.h).

## Layout

| Method | Returns | Description |
| --- | --- | --- |
| `pos(x, y)` | `Widget &` | Sets coordinates in logical pixels |
| `size(w, h)`, `width(w)`, `height(h)` | `Widget &` | Sets size in logical pixels; passing `HIYUI_AUTO` for an axis computes it from content |
| `fill()` | `Widget &` | Both width and height become 100% of the parent content area |
| `fillWidth()`, `fillHeight()` | `Widget &` | The corresponding axis becomes 100% of the parent content area |
| `flex(grow)` | `Widget &` | Distributes remaining space on the parent Flex container main axis by the grow ratio; 0 takes no share |
| `align(anchor, x, y)` | `Widget &` | Positions relative to the parent object |
| `hidden(bool)` | `Widget &` | Sets visibility |
| `enabled(bool)` | `Widget &` | Sets the interaction state |
| `flow(FlexFlow)`, `gap(int)` | `Widget &` | Sets the Flex direction and spacing in logical pixels |
| `minimumSize(w, h)` | `Widget &` | Sets the minimum size in logical pixels; `0` means no limit |
| `maxWidth(w)`, `maxHeight(h)` | `Widget &` | Sets the maximum logical size; non-negative values include a zero cap, `HIYUI_AUTO` removes the local cap, other negative values are no-ops |
| `sizePx(w, h)`, `widthPx(w)`, `heightPx(h)` | `Widget &` | Sets size in physical pixels |
| `minimumSizePx(w, h)` | `Widget &` | Sets the minimum size in physical pixels; `0` means no limit |
| `maxWidthPx(w)`, `maxHeightPx(h)` | `Widget &` | Sets the maximum physical size; `HIYUI_AUTO` removes the limit |
| `layoutRules(rules)`, `layoutRules(host, rules)` | `Widget &` | Applies a rule set against the parent container or a given ancestor's logical content size; configuration and arrays are copied immediately |
| `clearLayoutRules()` | `Widget &` | Restores the base of still-controlled fields and removes rules; repeated calls are no-ops |
| `posPx(x, y)`, `xPx(x)`, `yPx(y)` | `Widget &` | Sets physical pixel coordinates relative to the parent content origin |
| `positionPx()` | `Point` | Physical pixel position excluding scrolling and translation; zero for invalid objects |
| `translatePx(x, y)`, `translationPx()` | `Widget &` / `Point` | Sets or reads physical pixel translation that does not participate in layout |
| `clipCorner(bool = true)` | `Widget &` | Clips children to the corner radius |
| `overflowVisible(bool = true)` | `Widget &` | Allows children to draw outside the widget bounds |
| `layoutMetrics()` | `LayoutMetrics` | Queries layout constraints; lengths are physical pixels; percentage sizes return the percentage and the corresponding flag |
| `updateLayout()` | `Widget &` | Completes layout synchronously; event callbacks may delete widgets |
| `invalidateLayout()` | `Widget &` | Requests the next layout update; repeated requests merge |

`FlexFlow` supports the following directions.

| Value | Description |
| --- | --- |
| `Row`, `Column` | Horizontal and vertical arrangement |
| `RowWrap`, `ColumnWrap` | Horizontal and vertical arrangement with wrapping |
| `RowReverse`, `ColumnReverse` | Reversed horizontal and vertical order |

Sentinel definitions for content size and default values are in [Constants and Sentinel Values](/en/core/constants).

`maxWidth()` and `maxHeight()` support configuration before mounting and use the current DPI at mount time; afterwards they follow runtime DPI updates. The logical and physical maximum size entries write the same constraint; on the same axis the later value overrides the earlier one and the other axis is unchanged; no-op on widgets that requested destruction. The C counterparts accept the same sentinels; NULL targets are no-ops.

When the minimum size exceeds the maximum size, layout follows the minimum size. The maximum size does not enable scrolling automatically; overflow is allowed when the minimum size exceeds the parent content area and is handled by a scroll container chosen by the application. Size combinations are described in [Layout Widgets](/en/widgets/layout).

Rules support configuration before mounting; invalid descriptions keep the previous set. Explicit layout setters and style padding assignments release control of the fields they write; a later clear or replacement does not overwrite these fields. Host constraints, field defaults, matching order, and C calls are described in [Container Layout Rules](/en/core/responsive#container-layout-rules).

## Scrolling

Scrollable axes and scrollbar visibility are set independently. The animation parameter of the following methods defaults to `false`; scroll offsets and distances are physical pixels.

| Method | Returns | Description |
| --- | --- | --- |
| `scrollMode(ScrollMode)` | `Widget &` | `Off` disables scrolling, other values control the scrollable axes |
| `scrollbars(ScrollbarMode)` | `Widget &` | Sets scrollbar visibility |
| `scrollSnap(Direction, ScrollSnap)` | `Widget &` | Sets the child snap mode for the horizontal or vertical direction |
| `snapChild(bool = true)` | `Widget &` | Allows this node as a snap target of parent scrolling |
| `scrollOne(bool = true)` | `Widget &` | Each drag crosses at most one snap child |
| `scrollOnFocus(bool = true)` | `Widget &` | Scrolls into view when focus is gained |
| `scrollChain(bool = true)` | `Widget &` | Forwards scrolling to ancestors at the scroll boundary |
| `pressLock(bool = true)` | `Widget &` | Keeps press tracking after the pointer moves out |
| `scrollElastic(bool = true)`, `scrollMomentum(bool = true)` | `Widget &` | Set elastic overscroll and momentum scrolling respectively |
| `scrollToXPx(int, bool)`, `scrollToYPx(int, bool)` | `Widget &` | Scroll to the given offset; no-op when unmounted or invalid |
| `scrollByPx(dx, dy, bool)` | `Widget &` | Adds to the offset; positive values move the viewport toward the bottom-right |
| `stopScroll()` | `Widget &` | Stops the current scroll animation |
| `scrollIntoView(bool)` | `Widget &` | Scrolls ancestor containers at each level to make this node visible |
| `scrollMetrics()` | `ScrollMetrics` | `x`, `y` are offsets; `left`, `top`, `right`, `bottom` are the remaining distances on the four sides; distances can be negative during elastic overscroll; all fields are zero for invalid objects |

Available scrollbar and snap values follow.

| Value | Description |
| --- | --- |
| `ScrollbarMode::Off` | Hides scrollbars |
| `ScrollbarMode::Auto` | Shown when content overflows |
| `ScrollbarMode::Active` | Shown while scrolling |
| `ScrollbarMode::Always` | Always shown |
| `ScrollSnap::None` | No snapping |
| `ScrollSnap::Start`, `ScrollSnap::Center`, `ScrollSnap::End` | Snap to the viewport start, middle, or end |

The following code makes a horizontal list snap to child centers.

```cpp
track.scrollMode(ScrollMode::Horizontal).scrollbars(ScrollbarMode::Off);
track.scrollSnap(Direction::Horizontal, ScrollSnap::Center).scrollOne();
item.snapChild();
item.scrollIntoView(false);
```

## Styling

`style()` accepts a `Style` or a `StyleSet`. `bg()`, `textColor()`, `fontSize()`, `radius()`, `padding()`, `margin()`, and the border methods modify single properties.

Fixed colors use `uint32_t` RGB values. Colors that follow theme changes use the `ThemeRole` overloads.

Color methods accept `HIYUI_DEFAULT` to restore the theme default. `fontSize()`, `radius()`, `padding()`, `margin()`, `opacity()`, `borderWidth()`, and per-side padding and margin methods accept `HIYUI_DEFAULT_INT` to restore the component default; restored values are recomputed at the current DPI. Sentinel definitions are in [Constants and Sentinel Values](/en/core/constants).

`themeStyle(WidgetType)` is called once before explicit styles. `themeStyle(provider)` appends a default style provider; the provider returns a `StyleSet`, which is applied immediately and updated with theme and DPI. Explicit `style()` and single-property styles override default styles. Images and paths returned by the provider must stay valid until the image is replaced or the widget is destroyed.

Sets theme-following background and text colors on a primitive node.

```cpp
control.themeStyle([] {
  StyleSet styles;
  styles.normal.bgFill.color = currentTheme().primary();
  styles.normal.color = currentTheme().onPrimary();
  return styles;
});
```

`state(StyleState, bool)` sets an individual interaction state; `Normal` is a no-op. State style fields are described in [StyleSet](/en/styling/style-set).

`textAlign(Align)` accepts `Start`, `Center`, `End` and sets horizontal text alignment. `imageScale(int)` scales image nodes around the center; `256` is the original size; no-op on non-image nodes.

## Events

Shortcut methods include `onClick()`, `onPress()`, `onLongPress()`, and `onChange()`. Other events are registered through `on(EventCode, callback)`; repeated binding appends handlers.

`onEnvironmentChange(callback, handle = nullptr)` delivers the first environment snapshot after the first valid layout completes and subsequent changes afterwards; identical snapshots are not delivered again. The callback accepts a `const LayoutEnvironment &` or no parameters, pre-mount binding is supported, and subscriptions are cleaned up when the widget is destroyed; the subscription and window area contracts are described in [Responsive Layout](/en/core/responsive#environment-notifications).

## Queries

`raw()` returns the underlying pointer. Size and content area queries depend on layout results; call `updateLayout()` first when needed. `textColor()` returns the currently effective text color and 0 for invalid objects.

`layoutEnvironment(widget)` queries the logical content size, scale, input capabilities, and the owning window area without forcing a synchronous layout. It returns the default snapshot when the widget is unmounted or has requested destruction; without a window host a valid local size can still be returned. Fields and units are described in [Environment Query](/en/core/responsive#environment-query).

`focusedWidget()` returns the focus reference in the default input group, or an empty reference when there is no focus. `hasFocusGroup()` queries whether the widget belongs to a focus group, and `focusNext(previous)` moves focus within the owning group. `windowFocused()` queries the keyboard focus of the owning desktop window and returns `false` on non-desktop platforms.

For the full member list see [Widget API](/en/api-reference/widget/widget).

## Tooltips and Accessibility Text

SDL applications on Windows, macOS and Linux can provide widget information to system accessibility services; macOS supports VoiceOver and Linux exposes AT-SPI2 for screen readers such as Orca. Platform coverage and build switches are described in [Accessibility Build](/en/guide/quick-start#accessibility-build).

After including `<hiyui/accessibility/accessibility.h>`, `accessibilitySupported()` queries whether the current build contains the system accessibility backend. A `true` return does not mean a screen reader is active.

The following methods accept both plain UTF-8 strings and `LocalizedText`. The latter is created by [`tr()` or `trn()`](/en/core/i18n) and updates automatically when the language changes.

| Method | Returns | Description |
| --- | --- | --- |
| `tooltip(const char *)`, `tooltip(const LocalizedText &)` | `Widget &` | Sets the hover tooltip; a plain string removes the translation binding |
| `accessibilityName(const char *)`, `accessibilityName(const LocalizedText &)` | `Widget &` | Sets the accessibility name; a plain string removes the binding, `nullptr` clears the explicit value |
| `accessibilityDescription(const char *)`, `accessibilityDescription(const LocalizedText &)` | `Widget &` | Sets the accessibility description; a plain string removes the binding, `nullptr` clears the explicit value |

Binding copies the text and arguments and is removed automatically when the widget is destroyed. Chained calls on derived widgets return the corresponding widget type.

`accessibilityRole(role, group)` sets the accessibility role and selection group and keeps the explicit name. `accessibilityChanged()` asks the system to re-read the content; no-op when the accessibility backend is not enabled.

Sets a language-following tooltip and accessibility name on a save button.

```cpp
save.tooltip(tr("app.save.hint", "保存当前文件"))
    .accessibilityName(tr("app.save", "保存"));
```

In the C API, `<hiyui/c/widget.h>` provides accessibility configuration, roles, and update notifications; `<hiyui/c/i18n.h>` provides plain text and localized text interfaces.

| C++ operation | C function |
| --- | --- |
| `accessibility()` | `hiyui_wdg_accessibility()` |
| `accessibilityRole()` | `hiyui_wdg_accessibility_role()` |
| `accessibilityChanged()` | `hiyui_wdg_accessibility_changed()` |
| `accessibilityName(const char *)` | `hiyui_wdg_set_accessibility_name()` |
| `accessibilityDescription(const char *)` | `hiyui_wdg_set_accessibility_description()` |
| `accessibilityName(const LocalizedText &)` | `hiyui_wdg_bind_accessibility_name()` |
| `accessibilityDescription(const LocalizedText &)` | `hiyui_wdg_bind_accessibility_description()` |
