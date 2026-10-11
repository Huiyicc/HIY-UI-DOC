---
title: Cross-Platform Tasks & Layout
---

# Cross-Platform Tasks & Layout

The same business task looks different across devices. Pages reuse task state, input validation, and action handling; arrangement is decided by layout rules, navigation by region widgets, and which content a compact task shows is chosen explicitly by the application.

## Comparison table

| Difference | Mechanism | Owned by the application |
|---|---|---|
| Same task, container size changes | `layoutRules()` adjusts direction, spacing, size, and visibility | Choose the breakpoints the content needs; assign container size and scroll range |
| Same list and detail, side by side on wide screens, page by page on narrow screens | `ListDetail` keeps two region subtrees and switches presentation | Selection, filtering, edit drafts, save, and cancel |
| Main navigation docked on wide screens, drawer on narrow screens | `WindowFrame` manages the navigation and content regions | Navigation entries, current page, and page history |
| A watch or dedicated small screen runs only part of a task | The application mounts a compact widget combination sharing the task actions | Identify the device or object ID, and the retained view, confirm, or control actions |
| Input method or window safe area changes | `layoutEnvironment()` and `onEnvironmentChange()` | Provide reachable actions based on known capabilities; handle the intersection of content and the available area |

Screen width and display shape do not change the business task scope. A narrower window does not automatically remove editing capability; a subtree hidden by `hidden` still keeps its widgets and state. To compact a task, the application chooses the compact entry and does not create unused filter and edit regions.

### Size and input

Breakpoints of nested layouts come from the host's `contentWidth/contentHeight`, in logical pixels, excluding borders and padding. Width or height participating in a breakpoint must be assigned by the outer layout or an explicit size, not by descendant content controlled by the rules. When content may exceed the height, make the container scrollable; a detail reading area can use `maxWidth()` to limit line width.

`WindowArea.availableArea` describes the available region inside the window client area. Before a child container uses that region, intersect it with its own content area and convert coordinates; the library does not apply the region to ordinary containers automatically. The gallery compact device page and Picker both intersect this way.

When the host reports a round screen, the safe area intersects the inscribed rectangle of the viewport. When the host does not report the safe area or keyboard occlusion, the corresponding fields stay unknown and must not be treated as already avoided.

Pointer, touch, keyboard, and rotary input capabilities can coexist. `CapabilityState` has the values `Unknown`, `Unavailable`, and `Available`; `Unknown` means the backend did not report the capability, and it must not be treated as unavailable nor used to remove the only action entry. The main action is carried by a visible button; keyboard and rotary input reach the same action through focusable widgets.

### State and lifecycle

Business state (selection, drafts) lives in page controllers or application state, not in widgets. Layout rule reflows and ListDetail wide/narrow switches keep widgets alive and neither commit nor cancel drafts.

In-application back navigation calls `Window::requestBack()`; when unsaved content needs confirmation, the application binds a back handler and manages the confirmation result.

Callbacks access controls through the associated `Ref<T>`; the reference becomes invalid after the target is destroyed. Business state that must outlive a page is owned by a longer-lived owner; widget references do not provide persistence. Mounting and referencing are described in [Container & Ref](/en/core/container-ref).

### Responsibility split in the gallery

The desktop and Android C++ galleries share the application framework in `gallery_app.h/.cpp`. Adaptation only changes region presentation and margins; business pages are not duplicated per platform. The actual UI and build entry are described in [C++ Gallery Window Framework](/en/build/cpp-gallery#window-frame).

| Owner | Responsibility | Retention boundary |
|---|---|---|
| `ComponentGalleryApp` | Current page, theme, background, and settings state | Window width changes do not reselect or recreate pages |
| `WindowFrame` | Docked catalog, drawer, and its toggle button | Wide/narrow switches keep the region subtrees |
| `LayoutRules` | Adjust the page header and content margins by framework content width | Updates layout, does not run page build functions |
| Widget pages and settings page | Toggle visibility inside the same content region | Opening settings does not destroy widget pages; switching to another widget rebuilds |
| Outer root widget | Handles the settings page back request | Lives outside the framework; the drawer consumes back before it reaches the settings handler |
| `Application` and `Window` | Documentation example navigation, unsaved confirmation, and closing | Share `navigate()` and `requestBack()`; the platform decides window or page presentation |

`ComponentGalleryApp` is an application example, not a public library widget. New applications choose breakpoints, page retention policy, and tool entries by their own tasks.

### C and C++ equivalents

| Purpose | C++ | C |
|---|---|---|
| Environment query and subscription | `layoutEnvironment()`, `onEnvironmentChange()` | `hiyui_wdg_layout_environment()`, `hiyui_wdg_on_environment_change()` |
| Content layout rules | `LayoutRules`, `layoutRules()` | `hiyui_layout_rules_t`, `hiyui_wdg_layout_rules()` |
| List detail | `ListDetail` | `hiyui_list_detail_create()` |
| Window navigation region | `WindowFrame` | `hiyui_window_frame_create()` |
| Window back | `Window::requestBack()` | `hiyui_win_request_back()` |

The C rules and ListDetail Props use their own `*_init()` functions to obtain default values; zero initialization does not represent the default configuration of these interfaces. Full defaults, null semantics, and notification contracts are described in [Responsive Layout](/en/core/responsive) and [List Detail](/en/widgets/list-detail).

## Code example

Use `<hiyui/hiyui.h>` and the `hiyui` namespace. The following action group wraps horizontally when the parent content width reaches 320 logical pixels and stacks vertically otherwise; `parent` is a mounted widget whose width is assigned by the outer layout.

```cpp
const LayoutRule rules[] = {
    {.minWidth = 320,
     .values = {.fields = LayoutField::Flow, .flow = FlexFlow::RowWrap}},
};
auto actions = VBox{.gap = 8}(
    Button({.text = "save"}).minimumSize(0, 44),
    Button({.text = "cancel"}).minimumSize(0, 44)
);
actions.init(parent).fillWidth().layoutRules({
    .base = {.fields = LayoutField::Flow, .flow = FlexFlow::Column},
    .rules = rules,
    .count = 1,
});
```

320 and 44 are example breakpoint and button minimum height, in logical pixels. The rule array is copied when `layoutRules()` is called; button callbacks are still bound to application actions through `.onClick()`.

### Full task and compact task

The gallery's "Layout → Local Device Control" provides filtering, a list, details, and brightness editing; "Layout → Local Device Switch" only shows the state of the specified device, its saved brightness, and the switch. The two pages share task logic and state presentation, and each mount holds its own independent in-memory state.

Launch the compact task with a 240×240 content window from the executable directory.

```powershell
.\demo_component_gallery.exe --compact-device 101
```

The source is in `test/demo/component_gallery/pages/demo_adaptive_layout.cpp`. `buildAdaptiveLayoutPage(parent)` and `buildCompactDeviceView(parent, deviceId)` are gallery-specific build entry points, not part of the public library API; the latter returns false for an invalid device ID and creates no controls. The device list and state semantics are described in [Device Task Example](/en/build/cpp-gallery#device-task-example).

## Platform and release boundaries

The SDL backend covers Windows, Linux, and macOS desktops plus Android; Linux small-screen devices use FBDEV. Input and safe-area information depends on what the host actually provides. `HIYUI_BACKEND=EMBEDDED` targets MCU/RTOS and is not available yet: configuration fails with a list of missing items.

C++ applications link `hiyui-static`. C applications enable `HIYUI_BUILD_C_BINDING` to build the C interface and link `hiyui-c`; `HIYUI_C_STATIC` makes `hiyui-c` a static library. The gallery compact entry reduces the control tree actually created while using the same executable and assets; build options and font boundaries are described in [Build Options](/en/build/options).

Build the application or firmware separately for each operating system and processor target; Android uses the system package format. Different targets do not share one executable.

## Related pages

- [Responsive Layout](/en/core/responsive)
- [Layout Widgets](/en/widgets/layout)
- [List Detail](/en/widgets/list-detail)
- [Back Request](/en/window/multi-window#back-request)
- [Platform Abstraction Layer](/en/advanced/pal)
- [C++ Gallery](/en/build/cpp-gallery)
