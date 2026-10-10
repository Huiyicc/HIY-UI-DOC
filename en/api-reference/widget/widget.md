---
title: "Widget"
---

# Widget <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/widget.h>`

**Namespace:** `hiyui`

Base class of all UI components

Wraps an lv_obj_t* and provides chained property setting, style application, event binding and reference binding. Widget does not own the widget object, is not copyable, and its destructor does not delete the object. Child objects are managed by the parent; moves transfer wrapper bindings and pending mount configuration without invalidating bound Refs. Props borrow their inputs; construction and configuration calls copy text, paths and description arrays immediately. Image descriptors, pixel buffers and font resources remain owned by the caller and must outlive use of the object. Properties, events, Refs and subtrees can be configured before init and take effect on mount; callbacks are stored by value. Assignments before mount set the initial state and dispatch no change events even with Notify::Yes. init requires an unbound widget and a valid parent; repeated initialization asserts in debug builds and does nothing in release. Actions such as focus, scrolling, editing and popups require mounting; violations assert in debug and do nothing in release. destroy immediately invalidates references to itself and its subtree; a destroyed widget accepts no configuration or re-initialization. Use Ref for access across callbacks and check its validity before operating.



**See also:** `Container`


**See also:** `Button`


**See also:** `Label`

## 生命周期

### Widget

```cpp
Widget(lv_obj_t *existing)
```

Constructs from an existing LVGL object

### Widget

```cpp
Widget(Widget &&other) noexcept
```

Transfers the widget binding; the source wrapper's raw() is nullptr after the move.

### operator=

```cpp
Widget & operator=(Widget &&other) noexcept
```

Replaces the widget binding without deleting the original object.

After the move raw() is nullptr; self-move leaves it unchanged.

### raw

```cpp
lv_obj_t * raw() const
```

Returns the underlying LVGL object pointer

Underlying object; nullptr when unmounted, delete requested, or already deleted.

### destroy

```cpp
void destroy()
```

Requests deletion of this widget and its subtree, immediately invalidating references; actual release happens in the UI main loop. Call on the UI thread, including from callbacks of this widget; repeated calls do nothing.

### release

```cpp
lv_obj_t * release()
```

Unbinds this wrapper from the widget object.

After the call raw() is nullptr; the object is not deleted and its parent-child relation is unchanged.


Previously bound object; nullptr when unbound or called repeatedly.

### initPrimitive

```cpp
Widget & initPrimitive(Widget &parent, PrimitiveKind kind=PrimitiveKind::Object)
```

Creates a base node without the component theme; follows the same parent and repeated-call restrictions as init.

### themeStyle

```cpp
Widget & themeStyle(WidgetType type)
```

Applies the built-in component theme; call once before setting explicit styles.

### themeStyle

```cpp
Widget & themeStyle(F &&provider)
```

Appends a default style provider, applied immediately and refreshed with theme and DPI; explicit styles override its result, and the callback is released on destruction. The returned image source and path are borrowed and must stay valid until the image is replaced or the component is destroyed.

### textContent

```cpp
Widget & textContent(const char *text)
```

Sets native text node content; nullptr refreshes the existing text, and non-text nodes do nothing.

### textContent

```cpp
std::string textContent() const
```

Returns a copy of the text; empty string for non-text nodes or invalid objects.

### textOverflow

```cpp
Widget & textOverflow(TextOverflow value)
```

Sets the text overflow mode; single-line ellipsis height follows font and DPI; non-text nodes do nothing.

### textColor

```cpp
uint32_t textColor() const
```

Currently effective text color; 0 for invalid objects.

### bindText

```cpp
Widget & bindText(const LocalizedText &text, F &&setter)
```

Binds an update function for component text; copies the description, a repeated bind replaces the previous one, and plain text can be unbound with clearTextBinding.

### clearTextBinding

```cpp
Widget & clearTextBinding()
```

Removes the bindText binding and keeps the current displayed text; repeated calls do nothing.

### parent

```cpp
Ref< Widget > parent() const
```

Non-owning parent, child or screen reference; empty reference when absent, out of range, or invalid.

### reparent

```cpp
Widget & reparent(const Widget &parent)
```

Re-parents a mounted node to the given parent; rejects invalid objects and ancestor cycles and does not transfer the wrapper.

### contains

```cpp
bool contains(const Widget &other) const
```

Whether the ancestry contains the other widget, including itself; false for invalid objects.

### isHidden

```cpp
bool isHidden() const
```

Queries the own hidden flag or the effective visibility including ancestors; false when invalid.

### floating

```cpp
Widget & floating(bool value=true)
```

Sets whether the widget is excluded from the parent layout and whether events propagate to the parent.

### state

```cpp
Widget & state(StyleState state, bool value)
```

Sets an individual interaction state; Normal does nothing.

### flow

```cpp
Widget & flow(FlexFlow value)
```

Sets the Flex direction, gap, or scroll axis; the gap is in logical pixels.

### scrollMode

```cpp
Widget & scrollMode(ScrollMode value)
```

Sets the axes allowed to scroll; Off disables scrolling; does not change scrollbar visibility.

### scrollSnap

```cpp
Widget & scrollSnap(Direction axis, ScrollSnap value)
```

Sets the child snap mode on the given axis; children must enable snapChild.

### scrollOne

```cpp
Widget & scrollOne(bool value=true)
```

Limits each drag to crossing at most one snap child.

### scrollMetrics

```cpp
ScrollMetrics scrollMetrics() const
```

Current scroll state; zero values for invalid objects.

### scrollToXPx

```cpp
Widget & scrollToXPx(int value, bool animate=false)
```

Scrolls to a physical pixel offset; no action when unmounted or invalid.

### scrollByPx

```cpp
Widget & scrollByPx(int dx, int dy, bool animate=false)
```

Adds to the scroll offset in physical pixels; positive values move the viewport right and down.

### scrollIntoView

```cpp
Widget & scrollIntoView(bool animate=false)
```

Scrolls the ancestor containers to reveal this node.

### positionPx

```cpp
Point positionPx() const
```

Position in physical pixels relative to the parent content origin, excluding scroll and translation; zero values for invalid objects.

### translatePx

```cpp
Widget & translatePx(int x, int y)
```

Sets a physical pixel translation excluded from layout; no action on invalid objects and queries return zero.

### minimumSizePx

```cpp
Widget & minimumSizePx(int width, int height)
```

Sets the minimum size in physical pixels; 0 means no limit.

### clipCorner

```cpp
Widget & clipCorner(bool value=true)
```

Clips children to the corner radius.

### overflowVisible

```cpp
Widget & overflowVisible(bool value=true)
```

Allows children to draw outside this widget's bounds.

### topLayer

```cpp
Ref< Widget > topLayer() const
```

Top-layer node of the owning display, borrowed until the display is destroyed; empty reference for invalid objects.

### textAlign

```cpp
Widget & textAlign(Align value)
```

Horizontal text alignment; accepts only Start, Center and End.

### imageScale

```cpp
Widget & imageScale(int value)
```

Scales an image node around its center; 256 is the original size; non-image nodes do nothing.

### minimumSize

```cpp
Widget & minimumSize(int width, int height)
```

Sets the minimum size in logical pixels; 0 means no limit.

### maxWidth

```cpp
Widget & maxWidth(int value)
```

Sets the maximum logical width; supports pre-mount configuration and runtime DPI updates. When the minimum width exceeds the limit, layout uses the minimum width; no action once destruction is requested.

Non-negative logical pixels; 0 means a zero limit, HIYUI_AUTO removes the local limit, other negative values do nothing.

### maxHeight

```cpp
Widget & maxHeight(int value)
```

Sets the maximum logical height; supports pre-mount configuration and runtime DPI updates. When the minimum height exceeds the limit, layout uses the minimum height; no action once destruction is requested.

Non-negative logical pixels; 0 means a zero limit, HIYUI_AUTO removes the local limit, other negative values do nothing.

### sizePx

```cpp
Widget & sizePx(int width, int height)
```

Sets the size in physical pixels; use width, height or fill for percentage and content sizes.

### maxWidthPx

```cpp
Widget & maxWidthPx(int value)
```

Sets the maximum size in physical pixels; HIYUI_AUTO removes the limit.

### layoutRules

```cpp
Widget & layoutRules(const LayoutRules &rules)
```

Applies rules against the direct parent's content area and follows a new parent after re-parenting. A component keeps one rule set; a successful replacement first restores the base of fields still controlled by the old set. Explicit layout setters and style padding assignments release control of the fields they write; other fields keep adapting. Theme, DPI and rule updates keep control; released fields are not overwritten by the old base. Host axes used by breakpoints must be sized by the parent layout or explicit sizes, not by controlled descendant content. The previous rules are kept when host constraints are violated or the configuration is invalid; no action once destruction is requested. Can be called before mounting and copies the array immediately; call on the UI thread; layout updates rebuild no subtree and dispatch no ValueChanged. A hidden subtree leaves hit testing and focus traversal; restoring visibility does not move existing valid focus.

### layoutRules

```cpp
Widget & layoutRules(const Widget &host, const LayoutRules &rules)
```

Uses the given ancestor's content area; other behavior matches the default-host overload.

A mounted ancestor; rejects self, descendants and invalid objects; when the target is unmounted its identity is recorded and validated on mount. When the host becomes invalid, is no longer an ancestor, or a breakpoint axis loses its size constraint, the base of still-controlled fields is restored and the rules are cleared.

### clearLayoutRules

```cpp
Widget & clearLayoutRules()
```

Restores the base of still-controlled fields and removes the rules and subscriptions; pixel values from before installation are not restored. Can be called before mounting; no action on repeated calls, when no rules exist, or once destruction is requested.

### layoutMetrics

```cpp
LayoutMetrics layoutMetrics() const
```

Current layout constraints; default values when invalid.

### updateLayout

```cpp
Widget & updateLayout()
```

Completes layout synchronously; callbacks may delete this object.

### invalidateLayout

```cpp
Widget & invalidateLayout()
```

Requests the next layout update; repeated requests are merged.

### sendEvent

```cpp
bool sendEvent(EventCode code, void *data=nullptr)
```

Sends an event synchronously; data is borrowed until the call returns; false for invalid objects; sending Delete is not allowed.

### hasFocusGroup

```cpp
bool hasFocusGroup() const
```

Whether this node belongs to a focus navigation group.

### focusNext

```cpp
Widget & focusNext(bool previous=false)
```

Moves focus within the owning input group; reversed when previous is true; no action without a group.

### windowFocused

```cpp
bool windowFocused() const
```

Whether the owning desktop window has keyboard focus; false on non-desktop platforms.

### accessibilityRole

```cpp
Widget & accessibilityRole(AccessibilityRole role, uint32_t group=0)
```

Sets the accessibility role and selection group, keeping explicit name configuration; no action when the backend is not enabled.

### accessibilityChanged

```cpp
Widget & accessibilityChanged()
```

Notifies the system accessibility service to re-read the current content.

### selectableTextByDefault

```cpp
static bool selectableTextByDefault()
```

Whether this build allows text selection by default.

### imageSourceIsText

```cpp
static bool imageSourceIsText(const void *source)
```

Whether the image source is a path or symbol string that needs copying; false for nullptr.

### focusedWidget

```cpp
static Ref< Widget > focusedWidget()
```

Returns the focused widget of the default input group; empty reference when none exists.

## 尺寸与位置

### pos

```cpp
Widget & pos(int x, int y)
```

Sets the component position

Horizontal coordinate in pixels relative to the parent's top-left corner Vertical coordinate in pixels relative to the parent's top-left corner

### x

```cpp
Widget & x(int x)
```

Sets the X coordinate, changeable separately at runtime

Horizontal coordinate in pixels

### y

```cpp
Widget & y(int y)
```

Sets the Y coordinate, changeable separately at runtime

Vertical coordinate in pixels

### size

```cpp
Widget & size(int w, int h)
```

Sets the component size

Width in pixels; HIYUI_AUTO = fit content Height in pixels; HIYUI_AUTO = fit content

### width

```cpp
Widget & width(int w)
```

Sets the width

Width in pixels; HIYUI_AUTO = fit content

### height

```cpp
Widget & height(int h)
```

Sets the height

Height in pixels; HIYUI_AUTO = fit content

### center

```cpp
Widget & center()
```

Centers the component in its parent

### fill

```cpp
Widget & fill()
```

Fills the parent at 100% width and height

### fillWidth

```cpp
Widget & fillWidth()
```

Fills the parent width at 100%

### fillHeight

```cpp
Widget & fillHeight()
```

Fills the parent height at 100%

### flex

```cpp
Widget & flex(int grow)
```

Sets the flex-grow value

flex-grow value; 0 = no stretching, 1+ = takes remaining space proportionally

### flexAlign

```cpp
Widget & flexAlign(Align main, Align cross=Align::Start, Align track=Align::Start)
```

Sets Flex main-axis, cross-axis and track alignment at runtime

Suited to adding alignment to containers inside a builder; the Props .align field covers common cases. Semantics match CSS Flexbox justify-content / align-items / align-content.

### hidden

```cpp
Widget & hidden(bool h=true)
```

Sets whether the component is hidden

### enabled

```cpp
Widget & enabled(bool e=true)
```

Sets whether the component accepts interaction

### accessibility

```cpp
Widget & accessibility(const AccessibilityProps &props)
```

Replaces the explicit accessibility configuration; strings are copied by the component. Call on the UI thread; no action when unbound or the system accessibility backend is not enabled. The default configuration restores automatic semantics; the configuration becomes invalid when the component is deleted.

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const char *value)
```

Sets the accessibility description; nullptr clears the explicit value, and plain text cancels the matching translation binding.

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const LocalizedText &value)
```

Binds the accessibility description with updates on language change; copies the text and arguments.

### accessibilityName

```cpp
Widget & accessibilityName(const char *value)
```

Sets the accessibility name; nullptr clears the explicit value, and plain text cancels the matching translation binding.

### accessibilityName

```cpp
Widget & accessibilityName(const LocalizedText &value)
```

Binds the accessibility name with updates on language change; copies the text and arguments.

### labelledBy

```cpp
Widget & labelledBy(const Ref< T > &source)
```

Uses the referenced target's text as the accessibility label. Call on the UI thread; does not extend the label's lifetime. An empty reference or a deleted label restores the component's own name. An explicit accessibility name overrides the associated label; no action when unbound or the system accessibility backend is not enabled.

### align

```cpp
Widget & align(lv_align_t a, int x_ofs=0, int y_ofs=0)
```

Sets the component alignment

### align

```cpp
Widget & align(Anchor a, int x_ofs=0, int y_ofs=0)
```

Sets the component alignment with an Anchor, equivalent to align(lv_align_t)

## 子对象 / 滚动 / 焦点

### clean

```cpp
Widget & clean()
```

Removes all child objects without destroying itself

Used to clear old content before rebuilding a subtree; children are reclaimed by LVGL.

### scrollToY

```cpp
Widget & scrollToY(int y, bool animate=false)
```

Scrolls to a vertical offset

Target vertical scroll offset in pixels; 0 = top

### scrollToX

```cpp
Widget & scrollToX(int x, bool animate=false)
```

Scrolls to a horizontal offset

Target horizontal scroll offset in pixels; 0 = left

### scrollToTop

```cpp
Widget & scrollToTop(bool animate=false)
```

Scrolls to the top

### scrollToBottom

```cpp
Widget & scrollToBottom(bool animate=false)
```

Scrolls to the bottom

### focus

```cpp
Widget & focus()
```

Focuses this component; it must already be in an input group

Used for explicit focusing in keyboard navigation.

### addToGroup

```cpp
Widget & addToGroup()
```

Joins the default input group for keyboard navigation; idempotent

### keyFocus

```cpp
Widget & keyFocus()
```

Includes the widget in keyboard focus navigation

Includes addToGroup() behavior; on focus it scrolls into view and shows a theme-colored focus ring. Theme and DPI switches refresh the focus ring automatically; arrow keys move focus when the component has no own key semantics.

## 样式

### style

```cpp
Widget & style(const Style &s)
```

Applies a single style

### style

```cpp
Widget & style(const StyleSet &ss)
```

Applies a multi-state style set

StyleSet holding the normal/pressed/focused/disabled states

### surface

```cpp
Widget & surface(SurfaceRole role)
```

Binds a surface material that updates with theme and DPI; text and layout are unchanged. A repeated call replaces the previous binding; a later explicit default-state background releases the material binding. Can be configured before mounting; unbinds automatically when the object is deleted.

## 样式快捷方法

### bg

```cpp
Widget & bg(uint32_t color)
```

Sets the background color

Color in 0xRRGGBB; HIYUI_DEFAULT = restore the component theme default, HIYUI_NONE = no change, HIYUI_TRANSPARENT = force transparent

### bg

```cpp
Widget & bg(ThemeRole role)
```

Binds the background color to a theme semantic role; reactive and updated automatically on theme switch

### textColor

```cpp
Widget & textColor(uint32_t color)
```

Sets the text color

Color in 0xRRGGBB; HIYUI_DEFAULT = restore the component theme default, HIYUI_NONE = no change, HIYUI_TRANSPARENT = force transparent

### textColor

```cpp
Widget & textColor(ThemeRole role)
```

Binds the text color to a theme semantic role; reactive and updated automatically on theme switch

### fontSize

```cpp
Widget & fontSize(int size)
```

Sets the font size

Font size in pixels; 0 = theme default size

### lineHeight

```cpp
Widget & lineHeight(float ratio)
```

Sets the line height as a font size ratio; bitmap fonts use the original line height; 0 restores the original line height and non-zero values outside 0.5 to 4 have no effect.

### radius

```cpp
Widget & radius(int r)
```

Sets the corner radius

Corner radius in pixels; HIYUI_NONE_INT = no change

### padding

```cpp
Widget & padding(int all)
```

Sets equal padding on all four sides

Padding for all four sides in pixels

### padding

```cpp
Widget & padding(int h, int v)
```

Sets horizontal and vertical padding separately

Horizontal padding, left and right, in pixels Vertical padding, top and bottom, in pixels

### padLeft

```cpp
Widget & padLeft(int v)
```

Sets padding on one side

Uses DPI scaling like padding(); recalculated automatically on theme or DPI switch.


Padding for one side in pixels

### padRight

```cpp
Widget & padRight(int v)
```

Sets right padding, same semantics as padLeft

### padTop

```cpp
Widget & padTop(int v)
```

Sets top padding, same semantics as padLeft

### padBottom

```cpp
Widget & padBottom(int v)
```

Sets bottom padding, same semantics as padLeft

### margin

```cpp
Widget & margin(int all)
```

Sets equal margins on all four sides

The margin is the outer space the component occupies in its parent, including within Flex; semantics match CSS margin. Uses DPI scaling; recalculated automatically on theme or DPI switch.


Margin for all four sides in pixels

### margin

```cpp
Widget & margin(int h, int v)
```

Sets horizontal and vertical margins separately

Horizontal margin, left and right, in pixels Vertical margin, top and bottom, in pixels

### marginLeft

```cpp
Widget & marginLeft(int v)
```

Sets the margin on one side

Margin for one side in pixels

### marginRight

```cpp
Widget & marginRight(int v)
```

Sets right margin, same semantics as marginLeft

### marginTop

```cpp
Widget & marginTop(int v)
```

Sets top margin, same semantics as marginLeft

### marginBottom

```cpp
Widget & marginBottom(int v)
```

Sets bottom margin, same semantics as marginLeft

### opacity

```cpp
Widget & opacity(uint8_t opa)
```

Sets the overall opacity

Opacity in [0,255]; 0 = fully transparent, 255 = opaque

### borderWidth

```cpp
Widget & borderWidth(int w)
```

Sets the border width

Border width in pixels

### borderColor

```cpp
Widget & borderColor(uint32_t color)
```

Sets the border color

Color in 0xRRGGBB; HIYUI_DEFAULT = restore the component theme default, HIYUI_NONE = no change, HIYUI_TRANSPARENT = force transparent

### hoverOverlay

```cpp
Widget & hoverOverlay(uint32_t color, uint8_t opa=LV_OPA_40)
```

Sets the hover background overlay; transparent normally, blended as color + opa on hover

Overlay color in 0xRRGGBB Hover opacity, default LV_OPA_40, same as Theme::kHoverOpa

### underline

```cpp
Widget & underline(bool on=true)
```

Sets text underline; applies to this component and child text inheriting the property

## 过渡动画

### transitionBg

```cpp
Widget & transitionBg(uint32_t timeMs)
```

Sets the background color transition animation

Animation duration in milliseconds

### transitionAll

```cpp
Widget & transitionAll(uint32_t timeMs)
```

Sets the transition animation for all properties

Animation duration in milliseconds

## 查询

### width

```cpp
int width() const
```

Returns the current component width

Width in logical pixels; 0 when unbound.

### height

```cpp
int height() const
```

Returns the current component height

Height in logical pixels; 0 when unbound.

### childCount

```cpp
uint32_t childCount() const
```

Returns the number of child objects

Number of direct children

### contentWidth

```cpp
int contentWidth() const
```

Returns the content width with padding and border removed

Width in logical pixels; 0 when unbound.

### contentHeight

```cpp
int contentHeight() const
```

Returns the content height with padding and border removed

Height in logical pixels; 0 when unbound.

### padLeft

```cpp
int padLeft() const
```

Returns the padding of one side

Padding of the corresponding side in logical pixels; 0 when unbound.

### padRight

```cpp
int padRight() const
```

Returns right padding

### padTop

```cpp
int padTop() const
```

Returns top padding

### padBottom

```cpp
int padBottom() const
```

Returns bottom padding

### widthPx

```cpp
int widthPx() const
```

Queries sizes in physical pixels; 0 when unbound.

### padLeftPx

```cpp
int padLeftPx() const
```

Queries padding in physical pixels; 0 when unbound.

### index

```cpp
int index() const
```

Returns this widget's index within its parent

Index; 0 = first child

### boundsPx

```cpp
Rect boundsPx() const
```

Returns the untransformed bounds in screen coordinates in physical pixels; empty rectangle when unbound.

### contentBoundsPx

```cpp
Rect contentBoundsPx() const
```

Returns the content area relative to the component's top-left corner in physical pixels; empty rectangle when unbound.

### toLocalPx

```cpp
Point toLocalPx(Point screenPoint) const
```

Converts screen physical coordinates to component-local coordinates, including transforms of itself and ancestors; returns the zero point when unbound.

### toScreenPx

```cpp
Point toScreenPx(Point localPoint) const
```

Converts component-local physical coordinates to screen coordinates, including transforms of itself and ancestors; returns the zero point when unbound.

### state

```cpp
WidgetState state() const
```

Queries the current interaction state; all states false when unbound.

### redraw

```cpp
Widget & redraw()
```

Requests a redraw; no action when unbound.

### clickable

```cpp
Widget & clickable(bool on=true)
```

Sets whether pointer clicks are accepted; does not change the disabled state.

## 事件绑定

### onClick

```cpp
Widget & onClick(F &&f, EventHandle *handle=nullptr)
```

Binds the click event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle for this binding

### onPress

```cpp
Widget & onPress(F &&f, EventHandle *handle=nullptr)
```

Binds the press event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle for this binding

### onLongPress

```cpp
Widget & onLongPress(F &&f, EventHandle *handle=nullptr)
```

Binds the long-press event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle for this binding

### onChange

```cpp
Widget & onChange(F &&f, EventHandle *handle=nullptr)
```

Binds the value-changed event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle for this binding

### on

```cpp
Widget & on(EventCode code, F &&handler, EventHandle *handle=nullptr)
```

Binds a callback for any event type

Repeated binds are appended and existing callbacks are not replaced. Callbacks are saved before mounting and connected after mounting; move-only closures are supported. Callbacks are released when the object or the pending mount configuration is destroyed.


Callable type Optional out parameter receiving the unbind handle for this binding

### onBackRequest

```cpp
Widget & onBackRequest(F &&handler, EventHandle *handle=nullptr)
```

Appends a back handler accepting BackRequest &amp;; handlers on the same object run before the default local back. Supports pre-mount binding and move-only closures; the first handler with handled true ends the routing. The argument is valid only during the callback; unbinding and destruction follow the event handle rules of on.

### onEnvironmentChange

```cpp
Widget & onEnvironmentChange(F &&handler, EventHandle *handle=nullptr)
```

Appends an environment subscription notified with the first snapshot after a valid layout and with later changes. Supports pre-mount binding and move-only closures; handlers are not invoked inside the bind call stack. The callback accepts const LayoutEnvironment &amp; or no arguments; the snapshot is valid only during the callback. Identical snapshots do not notify again; moves across parents follow the host and are unaffected by wrapper moves. Handlers may unbind or destroy components; destroying the component removes the source listening.

Optional out parameter; off can be repeated, destruction does not unbind, and scoped unbinding uses ScopedEventHandle.

### onDpiChange

```cpp
Widget & onDpiChange(F &&f)
```

Binds a DPI change callback

The callback runs after DPI recalculation of local style scaling and layout updates completes; repeated binds are appended; unbinds automatically when the component is deleted. Can be bound before mounting; move-only closures are supported.


Callable type with signature void()

### onThemeChange

```cpp
Widget & onThemeChange(F &&f)
```

Binds a theme change callback

Runs after setTheme() refreshes the component styles; repeated binds are appended; unbinds automatically when the component is deleted. The callback must not capture the Widget wrapper; use a Ref proxy. Can be bound before mounting; move-only closures are supported.


Callable type with signature void()

### onRightClick

```cpp
Widget & onRightClick(F &&f, EventHandle *handle=nullptr)
```

Binds the right-click event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle for this binding

### contextMenu

```cpp
Widget & contextMenu(std::vector< ContextMenuItem > items, PopupMode mode=PopupMode::Inline)
```

Binds the right-click context menu

## 鼠标指针

### cursor

```cpp
Widget & cursor(CursorType type)
```

Sets the mouse cursor type of the component in SDL mode

Switches to the given cursor on hover and restores the default arrow on leave.

## 文本选区

### selectableText

```cpp
Widget & selectableText(bool withMenu=true)
```

Enables text selection and copy

Assembles onto the inner text object returned by primaryTextObj(): mouse drag selection, double-click word selection, Primary+A select all, Primary+C copy, IBeam cursor, LV_PART_SELECTED inverted highlight, theme following, and an optional right-click copy/select-all menu. Requires the derived class to override primaryTextObj() to take effect; idempotent.

### selectedText

```cpp
std::string selectedText() const
```

Returns the selected text; empty string when nothing is selected

### installTextSelection

```cpp
static void installTextSelection(lv_obj_t *label, bool withMenu=true)
```

Assembles text selection capability onto any LVGL label object

Same implementation as selectableText() but without depending on primaryTextObj(), assembling directly on the given label. Intended for in-library multi-label components such as per-label assembly in the ChatList virtual pool; idempotent. External components can use selectableText().

## 悬浮提示

### tooltip

```cpp
Widget & tooltip(const char *text)
```

Binds tooltip text, Top direction by default

The tooltip bubble opens automatically after about 500ms of hover and closes on leave. The tooltip is mounted on lv_layer_top() and does not affect component layout.


Tooltip text, copied on call; nullptr clears the tooltip.

### tooltip

```cpp
Widget & tooltip(const LocalizedText &text)
```

Binds tooltip text that updates with the language; copies the description; a plain tooltip call replaces this binding.

### tooltip

```cpp
Widget & tooltip(const struct TooltipConfig &config)
```

Binds a tooltip with full configuration

## 引用绑定

### ref

```cpp
Widget & ref(Ref< T > &r)
```

Binds a component reference for later access to the mounted component

Reference target type, usually the same as this component's type

### ref

```cpp
Ref< Widget > ref() const
```

Returns a non-owning reference that becomes invalid automatically when the component is deleted.

## Friends

### reapplyThemeToAll

Refreshes theme styles of all registered widgets

## Public Methods

### moveToIndex

```cpp
void moveToIndex(int index) const
```

Moves the component to the given index within its parent

Target index; 0 = bottom, -1 = counted from the end

## Protected Methods

### create

```cpp
void create(lv_obj_t *parent)
```

Creates a base LVGL object with lv_obj_create

### create

```cpp
void create(lv_obj_t *parent)
```

Creates the LVGL object with the given creation function

LVGL creation function pointer, such as lv_button_create

### applyThemeDefaults

```cpp
void applyThemeDefaults()
```

Applies the theme default styles

### bindThemeCallback

```cpp
void bindThemeCallback(std::function< void()> fn)
```

Registers a theme refresh callback

setTheme() invokes this callback. The callback must not capture the Widget wrapper.

### bindDpiCallback

```cpp
void bindDpiCallback(std::function< void()> fn)
```

Registers a DPI change callback

The callback runs after local style scaling and layout updates.

### markBgOverridden

```cpp
void markBgOverridden()
```

Marks a fixed background color

### primaryTextObj

```cpp
virtual lv_obj_t * primaryTextObj() const
```

Returns the component's primary text object, the inner label/textarea, used by text capabilities such as selectableText

Derived classes override as needed to return their own primary text object; base text nodes return themselves by default.

### applyCommonProps

```cpp
void applyCommonProps(int width, int height, uint32_t bg, uint32_t textColor, int radius)
```

Applies common properties from Props; internal use

## protected-static-func

### isBgOverridden

```cpp
static bool isBgOverridden(lv_obj_t *obj)
```

Queries whether the object uses a fixed background color

### setCursorForObj

```cpp
static void setCursorForObj(lv_obj_t *obj, CursorType type)
```

Sets the mouse cursor for any lv_obj_t; for internal objects of derived classes
