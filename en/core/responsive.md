---
title: Responsive Layout
---

# Responsive Layout

## Definition

`layoutRules()` applies layout rules based on ancestor content size. `layoutEnvironment()` queries content size, window area, and input capabilities, and `onEnvironmentChange()` notifies changes after layout completes. `viewportMetrics()` queries external size and the width class, and `WindowFrame` manages navigation presentation.

## Comparison table

| Item | C++ | C |
| --- | --- | --- |
| Width class | `LayoutWidthClass` | `hiyui_layout_width_class_t` |
| Breakpoint | `LayoutBreakpoints::wideMinWidth` | `wide_min_width` of `hiyui_wdg_get_viewport_metrics()` |
| Query result | `ViewportMetrics` | `hiyui_viewport_metrics_t` |
| Query function | `viewportMetrics()` | `hiyui_wdg_get_viewport_metrics()` |
| Environment snapshot | `LayoutEnvironment` | `hiyui_layout_environment_t` |
| Environment query | `layoutEnvironment()` | `hiyui_wdg_layout_environment()` |
| Environment subscription | `Widget::onEnvironmentChange()` | `hiyui_wdg_on_environment_change()` |
| Layout rules | `LayoutRules`, `LayoutRule`, `LayoutValues` | `hiyui_layout_rules_t`, `hiyui_layout_rule_t`, `hiyui_layout_values_t` |
| Install/clear rules | `Widget::layoutRules()`, `clearLayoutRules()` | `hiyui_wdg_layout_rules()`, `hiyui_wdg_clear_layout_rules()` |
| Window area | `WindowArea`, `LogicalRect` | `hiyui_window_area_t`, `hiyui_logical_rect_t` |
| Input capabilities | `InputCapabilities`, `CapabilityState` | `hiyui_input_capabilities_t`, `hiyui_capability_state_t` |
| Display shape | `DisplayShape` | `hiyui_display_shape_t` |
| Size change event | `EventCode::SizeChanged` | `hiyui_wdg_on_size_changed()` |
| Window frame | `WindowFrame` | `hiyui_window_frame_create()` |
| Header area | `FrameHeader` | `hiyui_frame_header_create()` |
| Navigation area | `FrameNavigation` | `hiyui_frame_navigation_create()` |
| Content area | `FrameContent` | `hiyui_frame_content_create()` |

The width class is determined by breakpoints. `LayoutBreakpoints::wideMinWidth` defaults to `720` logical pixels: `viewportMetrics()` returns `Narrow` when its logical width is below the breakpoint and `Wide` when it is greater than or equal to the breakpoint. `width` and `height` exclude the DPI scale factor.

For an invalid widget, `viewportMetrics()` returns `Narrow` metrics with zero width and height. A custom breakpoint must be greater than `0`.

## Environment Query

After including `<hiyui/core/responsive.h>`, call `layoutEnvironment(widget)` on the UI thread. The query does not force layout; call `widget.updateLayout()` first when synchronized geometry is needed. It returns the default snapshot when the widget is unmounted or has requested destruction; when mounted without a window host, the local content size can still be valid.

`LayoutEnvironment` has the following fields.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `valid` | `bool` | `false` | Whether the current widget can be queried |
| `contentWidth` | `int` | `0` | Content width in logical pixels, excluding borders and padding |
| `contentHeight` | `int` | `0` | Content height in logical pixels, excluding borders and padding |
| `scale` | `float` | `1.0f` | Logical to physical pixel ratio, excluding widget transforms |
| `input` | `InputCapabilities` | `{}` | Input facilities currently connected by the backend |
| `window` | `WindowArea` | `{}` | Safe area, available area, and keyboard occlusion of the owning window |

Content size does not subtract scroll offsets and does not subtract the window safe area again. Local arrangement uses `contentWidth/contentHeight`; a nested container cannot treat the window width as its own width. The `viewportMetrics()` width and height include the widget border and padding, fitting scenarios that set breakpoints by external size.

### Window Area

All `WindowArea` rectangles are relative to the top-left corner of the owning window client area in logical pixels; these coordinates cannot be used directly as local coordinates of arbitrary child containers.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `valid` | `bool` | `false` | Whether a window host was found |
| `safeArea` | `LogicalRect` | `{}` | Excludes decorations and known system-reserved areas; clamped to the inscribed rectangle on known round displays |
| `availableArea` | `LogicalRect` | `{}` | Largest rectangle within the safe area after excluding known keyboard occlusion |
| `keyboardArea` | `LogicalRect` | `{}` | Keyboard occlusion; empty when unknown or confirmed closed |
| `safeAreaKnown` | `bool` | `false` | Whether host safe area information was obtained; when false only the currently known content range is guaranteed |
| `keyboardAreaKnown` | `bool` | `false` | Whether keyboard area information was obtained; true with an empty area means confirmed closed or no occlusion |
| `shape` | `DisplayShape` | `DisplayShape::Unknown` | Physical display shape reported by the host |

When candidate areas for `availableArea` have equal size, the upper one wins, then the left one; an empty rectangle is returned when the safe area is fully occluded. When keyboard occlusion is unknown, `availableArea` equals `safeArea`. When window content has already been reduced by the safe area or keyboard, the intersection is computed in window coordinates without subtracting again.

`LogicalRect` has the following fields; a width or height of `0` denotes an empty area.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | `int` | `0` | Left edge, logical pixels |
| `y` | `int` | `0` | Top edge, logical pixels |
| `width` | `int` | `0` | Width, logical pixels |
| `height` | `int` | `0` | Height, logical pixels |

The display shape does not by itself decide which tasks the application should keep.

| Value | Description |
| --- | --- |
| `DisplayShape::Unknown` | The host provides no shape |
| `DisplayShape::Rectangle` | Rectangular display area |
| `DisplayShape::Circle` | Circular display area |

### Input Capabilities

`InputCapabilities` can report multiple available facilities at once and does not represent mutually exclusive device types.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `pointer` | `CapabilityState` | `CapabilityState::Unknown` | Precise pointer, excluding touch emulating a mouse |
| `touch` | `CapabilityState` | `CapabilityState::Unknown` | Direct touch input |
| `keyboard` | `CapabilityState` | `CapabilityState::Unknown` | Connected keyboard, including backend-supported on-screen keyboards |
| `encoder` | `CapabilityState` | `CapabilityState::Unknown` | Connected rotary encoder input |

Capability states distinguish unknown from unavailable.

| Value | Description |
| --- | --- |
| `CapabilityState::Unknown` | The backend lacks information to confirm |
| `CapabilityState::Unavailable` | No usable facility is currently connected |
| `CapabilityState::Available` | A facility usable for interaction is connected |

The information each backend provides follows.

| Backend | Information coverage |
| --- | --- |
| SDL desktop/Android | Provides the SDL safe area and connected input information; direct touch devices not yet discovered stay unknown; when a soft keyboard is active but no occlusion rectangle is reported, the area stays unknown |
| Linux fbdev/evdev | Provides connected keys and rotary encoders; both stay unknown when a generic pointer cannot be classified as mouse or touch |
| Web/other hosts | Environment and capability fields not provided stay unknown; content size is still queried from the current layout |

### Environment Notifications

`widget.onEnvironmentChange(callback, handle)` appends a subscription; `handle` defaults to `nullptr`. The callback accepts a `const LayoutEnvironment &` or no parameters, and move-only closures are supported. The first snapshot is delivered after the first valid layout completes; subsequent size, DPI, window area, input capability, or host changes are delivered after layout completes. Identical snapshots are not delivered again, and handlers are not invoked from within the binding call stack.

Subscribing and unsubscribing before mounting are supported. After a widget or an ancestor is remounted to another parent, the subscription follows the actual host; moving the C++ wrapper does not change the subscription target. The snapshot in the callback is borrowed only until the callback returns and can be copied for storage.

`EventHandle::off()` can be called repeatedly, and handle destruction does not unbind automatically; `ScopedEventHandle` unbinds when leaving scope. Unbinding or requesting widget deletion inside the callback is allowed; subscriptions are cleaned up when the widget is destroyed.

The C environment interface is declared in `<hiyui/c/widget.h>` with types in `<hiyui/c/types.h>`. A successful query returns `1`; a null output returns `0`; an invalid widget writes the default snapshot to a non-null output and returns `0`, with `scale` of `1.0f`.

`hiyui_wdg_on_environment_change()` returns `1` on success and `0` for an invalid widget, a null callback, or an already occupied output handle. `out_handle` can be null; otherwise it must point to an empty handle; a non-null `destroy` takes ownership of `user_data` and is also released once when binding fails. `hiyui_event_off()` unbinds, and `hiyui_event_handle_destroy()` unbinds and releases the handle; when unbinding or destroying the widget inside the callback, the callback context is released after the current dispatch ends.

## Container Layout Rules

Include `<hiyui/core/layout_rules.h>` and install rules through the Widget layout methods. All length conditions use logical pixels of the host content area, excluding padding and borders.

| Method | Returns | Description |
|---|---|---|
| `layoutRules(rules)` | `Widget &` | Observes the direct parent container and follows the new parent after remounting |
| `layoutRules(host, rules)` | `Widget &` | Observes a mounted ancestor; rejects itself, descendants, and invalid objects |
| `clearLayoutRules()` | `Widget &` | Restores the base of still-controlled fields and removes rules and the subscription; repeated calls are no-ops |

Each widget keeps at most one rule set. Configuration and arrays are copied at call time; pre-mount configuration and moved wrappers are supported. `base.fields` declares the controlled fields, and each rule's `values.fields` must be a subset of it. Every update starts from base and overwrites the flagged fields of all matching rules in array order.

A rule takes effect when the conditions on both axes are satisfied, with inclusive lower bounds and exclusive upper bounds. `HIYUI_AUTO` means no upper bound, and equal bounds mean never matching; sentinel definitions are in [Constants and Sentinel Values](/en/core/constants). Unknown field bits, invalid enumerations or values of flagged fields, negative lower bounds, or a finite upper bound below the lower bound invalidate the whole configuration and keep the previous rules.

A host axis used in breakpoints must be assigned by the parent layout or an explicit size and cannot be determined by the content of controlled descendants. When the explicit host becomes invalid, leaves the ancestor chain, or the breakpoint axis loses its size constraint, the still-controlled base is restored and the rules are cleared.

### Rule Data

`LayoutRules` has the following fields.

| Field | Type | Default | Description |
|---|---|---|---|
| `base` | `LayoutValues` | `{}` | Base values and the controlled field set |
| `rules` | `const LayoutRule *` | `nullptr` | Rule array; must be valid when count is greater than 0 |
| `count` | `size_t` | `0` | When 0, only base is applied and the array is not read; the default empty configuration equals clearing |

`LayoutRule` has the following fields.

| Field | Type | Default | Description |
|---|---|---|---|
| `minWidth` | `int` | `0` | Content width lower bound, non-negative logical pixels |
| `maxWidth` | `int` | `HIYUI_AUTO` | Content width upper bound, non-negative logical pixels or unbounded |
| `minHeight` | `int` | `0` | Content height lower bound, non-negative logical pixels |
| `maxHeight` | `int` | `HIYUI_AUTO` | Content height upper bound, non-negative logical pixels or unbounded |
| `values` | `LayoutValues` | `{}` | Fields and values applied on a match |

`LayoutValues` has the following fields; values not flagged in `fields` are ignored.

| Field | Type | Default | Description |
|---|---|---|---|
| `fields` | `LayoutField` | `LayoutField::None` | Combine field bits with `\|` |
| `flow` | `FlexFlow` | `FlexFlow::Row` | Flex direction |
| `gap` | `int` | `0` | Non-negative logical pixels |
| `paddingX` | `int` | `0` | Horizontal padding, non-negative logical pixels |
| `paddingY` | `int` | `0` | Vertical padding, non-negative logical pixels |
| `width` | `LayoutLength` | `{}` | Width description |
| `height` | `LayoutLength` | `{}` | Height description |
| `minWidth` | `int` | `0` | Minimum width, non-negative logical pixels |
| `minHeight` | `int` | `0` | Minimum height, non-negative logical pixels |
| `maxWidth` | `int` | `HIYUI_AUTO` | Maximum width, non-negative logical pixels; AUTO removes the local cap |
| `maxHeight` | `int` | `HIYUI_AUTO` | Maximum height, non-negative logical pixels; AUTO removes the local cap |
| `flex` | `int` | `0` | Main-axis remaining space distribution ratio, range 0 to 255 |
| `hidden` | `bool` | `false` | Whether to hide the subtree |

`LayoutField` values correspond to the controlled items.

| Value | Description |
|---|---|
| `None` | Controls no field |
| `Flow`, `Gap` | Direction, spacing |
| `PaddingX`, `PaddingY` | Horizontal, vertical padding |
| `Width`, `Height` | Width, height |
| `MinWidth`, `MinHeight` | Minimum width, height |
| `MaxWidth`, `MaxHeight` | Maximum width, height |
| `Flex`, `Hidden` | Grow ratio, hidden state |

`LayoutLength` has the following fields.

| Field | Type | Default | Description |
|---|---|---|---|
| `kind` | `LayoutLengthKind` | `LayoutLengthKind::Content` | Meaning of the length |
| `value` | `int` | `0` | Logical length or percentage |

Length kinds have the following values.

| Value | Description |
|---|---|
| `Content` | Computed from content, value ignored |
| `Logical` | value is non-negative logical pixels |
| `Percent` | value is a percentage of the parent content area, range 0 to 100 |

### Explicit Assignment and Clearing

Plain layout setters release rule control of the fields they write; style padding assignments release the corresponding axis. Unwritten fields keep adapting. When rules are cleared or successfully replaced, only the base of fields still controlled by the old set is restored; pre-install pixel values are not restored, and manually assigned fields are not overwritten.

Theme and DPI updates keep rule control, and logical lengths update with scaling. When the minimum size exceeds a finite upper bound, the minimum size wins; overflow is handled by a scroll container chosen by the application. Rules do not rebuild subtrees, do not commit business data, and do not dispatch ValueChanged. A hidden subtree exits hit testing and focus traversal; showing it again does not move existing valid focus.

### C Rule Calls

Include `<hiyui/c/layout.h>` and use `hiyui_layout_values_init()`, `hiyui_layout_rule_init()`, and `hiyui_layout_rules_init()` to write the corresponding defaults; a NULL out-parameter is a no-op, and repeated initialization overwrites the previous values. Integer 0 keeps its real meaning; all-zero initialization cannot replace defaults with AUTO upper bounds.

`hiyui_wdg_layout_rules(w, host, rules)` returning 1 means the install or clear is accepted; returning 0 means the target or configuration is invalid and the previous set is kept. A NULL host observes the direct parent; NULL rules clear. The structure and arrays are copied before returning. When Hidden is flagged, DEFAULT/FALSE means visible and TRUE means hidden; the init functions write FALSE. The clear entry point is a no-op for NULL, invalid objects, and repeated calls; a released handle must not be passed again.

The following C operations match the C++ example on this page: children flow vertically when the parent content width is below 320 and horizontally at 320. `parent` must have its width assigned by external layout.

```c
hiyui_layout_rule_t rule;
hiyui_layout_rule_init(&rule);
rule.min_width = 320;
rule.values.fields = HIYUI_LAYOUT_FIELD_FLOW;
rule.values.flow = HIYUI_FLEX_ROW;

hiyui_layout_rules_t rules;
hiyui_layout_rules_init(&rules);
rules.base.fields = HIYUI_LAYOUT_FIELD_FLOW;
rules.base.flow = HIYUI_FLEX_COLUMN;
rules.rules = &rule;
rules.count = 1;

hiyui_widget_t *actions = hiyui_vbox_create(parent, NULL);
hiyui_wdg_fill_width(actions);
int accepted = hiyui_wdg_layout_rules(actions, NULL, &rules);
```

`accepted` of 1 means the configuration has been copied; the local `rule` and `rules` can leave scope after the call.

## WindowFrame

`WindowFrame` manages the Header, Navigation, and Content areas. At most one direct child object can be created per area type. When crossing a breakpoint, the frame only updates area positions and navigation presentation and does not destroy area objects or their subtrees.

The breakpoint uses the frame's own logical content width, excluding borders and padding, consistent with `layoutEnvironment(frame).contentWidth`. The external size query `viewportMetrics()` keeps its own original meaning.

Navigation presentation is determined by the property for the current width class:

| Value | Description |
| --- | --- |
| `FrameNavigationPresentation::Docked` | Navigation is docked to the left or right side of the frame, and content takes the remaining width |
| `FrameNavigationPresentation::Drawer` | Navigation slides out from the frame edge with a scrim |
| `FrameNavigationPresentation::Hidden` | The navigation area is hidden |

The navigation edge is set by `FrameNavigationEdge`:

| Value | Description |
| --- | --- |
| `FrameNavigationEdge::Left` | Navigation attaches to the left side of the frame |
| `FrameNavigationEdge::Right` | Navigation attaches to the right side of the frame |

`FrameNavigationToggle` must be created inside the `WindowFrame` subtree. When the current presentation is `Drawer`, the button is visible and controls the drawer; under other presentations the button is hidden. `openNavigation()`, `closeNavigation()`, and `toggleNavigation()` change state only under the `Drawer` presentation.

An open drawer can be closed through the window back request; another back request during the closing animation does not fall through to page history. Custom handling is described in [Back Request](/en/core/event-system#back-request).

`WindowFrameProps` has the following parameters:

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `wideMinWidth` | `int` | `720` | Minimum content logical width entering the wide layout, must be greater than `0` |
| `narrowNavigation` | `FrameNavigationPresentation` | `FrameNavigationPresentation::Drawer` | Navigation presentation in the narrow layout |
| `wideNavigation` | `FrameNavigationPresentation` | `FrameNavigationPresentation::Docked` | Navigation presentation in the wide layout |
| `navigationEdge` | `FrameNavigationEdge` | `FrameNavigationEdge::Left` | Frame edge the navigation attaches to |
| `navigationWidth` | `int` | `196` | Docked navigation width, positive logical pixels; `HIYUI_AUTO` follows content, see [Constants and Sentinel Values](/en/core/constants) |
| `drawerWidth` | `int` | `320` | Drawer maximum width, logical pixels |
| `drawerMaxWidthPercent` | `int` | `82` | Maximum percentage of the frame width the drawer occupies |
| `scrimOpacity` | `uint8_t` | `112` | Drawer scrim opacity |
| `animated` | `bool` | `true` | Whether the navigation drawer animation is enabled |
| `dockedNavigationFullHeight` | `bool` | `false` | Whether the docked navigation spans the Header area |

`WindowFrame` has the following runtime methods:

| Method | Returns | Description |
| --- | --- | --- |
| `widthClass()` | `LayoutWidthClass` | Returns the current width class |
| `openNavigation()` | `WindowFrame&` | Opens the Drawer navigation; no state change under other presentations |
| `closeNavigation()` | `WindowFrame&` | Closes the Drawer navigation; no state change under other presentations |
| `toggleNavigation()` | `WindowFrame&` | Toggles the Drawer navigation; no state change under other presentations |
| `navigationOpen()` | `bool` | Returns `true` when the Drawer is open or opening; `false` under other presentations |

## Code example

The following frame uses drawer navigation in the narrow layout and left-docked navigation in the wide layout.

```cpp
WindowFrame frame({.wideMinWidth = 720,
                   .navigationWidth = 220,
                   .drawerWidth = 320});
frame.init(parent);

FrameHeader header;
header.init(frame);
FrameNavigationToggle navigationToggle;
navigationToggle.init(header);

FrameNavigation navigation;
navigation.init(frame);
FrameContent content;
content.init(frame);
```

The following operations change the flow direction based on the parent content width and keep the existing children; `parent` should have its width assigned by external layout.

```cpp
const LayoutRule rules[] = {
    {.minWidth = 320, .values = {.fields = LayoutField::Flow, .flow = FlexFlow::Row}},
};
VBox actions;
actions.init(parent).fillWidth().layoutRules({
    .base = {.fields = LayoutField::Flow, .flow = FlexFlow::Column},
    .rules = rules,
    .count = 1,
});
```

The `320` in the example is an application breakpoint; choose the threshold by task content. The array can be freed after the call returns. More complex runtime logic can be implemented through environment subscriptions.

List selection, filtering, and edit drafts are held by task state. Wide-narrow switching reuses inputs and lists; reduced tasks on devices such as watches are composed by explicit application choice.

## Related pages

- [Widget](/en/core/widget)
- [Events](/en/core/event-system)
- [Layout Widgets](/en/widgets/layout)
- [Composite Widgets](/en/widgets/advanced)
- [Window Creation and Configuration](/en/window/window-api)
- [List Detail](/en/widgets/list-detail)
- [Cross-Platform Tasks & Layout](/en/guide/cross-platform)
