---
title: "Widget"
---

# Widget <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/widget.h>`

**Namespace:** `hiyui`

Base class of all UI widgets

Wraps lv_obj_t* and provides common interfaces for chained property setting, style application, event binding and reference binding. Widget does not own the underlying object and is not copyable; destruction does not delete the object. Child widgets are managed by the parent object; moving transfers the wrapper binding and pending configuration without invalidating bound Refs. Props borrow their input; construction and configuration calls copy text, paths and description arrays immediately. Image descriptors, pixel buffers and font resources remain owned by the caller and must outlive the widget's use. Properties, events, Refs and subtrees can be configured before init and take effect on mounting; callbacks are stored by value. Assignments before mounting set the initial state and dispatch no change events even when Notify::Yes is passed. init requires an unbound wrapper and a valid parent; repeated initialization asserts in debug builds and does nothing in release builds. Actions such as focus, scrolling, editing and popups require a mounted widget; violations assert in debug builds and do nothing in release builds. destroy immediately invalidates references to itself and its subtree; after destruction no configuration or re-initialization is accepted. Use Ref for access across callbacks and check its validity before operating.



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

Transfers the object binding; the source wrapper's raw() is nullptr after the move.

### operator=

```cpp
Widget & operator=(Widget &&other) noexcept
```

Replaces the object binding without deleting the original object.

Its raw() is nullptr after the move; self-move leaves it unchanged.

### raw

```cpp
lv_obj_t * raw() const
```

Returns the underlying LVGL object pointer

The underlying object; nullptr when unmounted, destroy requested or already deleted.

### destroy

```cpp
void destroy()
```

Requests deletion of this widget and its subtree, invalidating references immediately; actual release completes in the UI main loop. Call on the UI thread; calling from a callback of this widget is allowed; repeated calls do nothing.

### release

```cpp
lv_obj_t * release()
```

Unbinds this wrapper from the underlying object.

After the call raw() is nullptr; the object is not deleted and its parent-child relation is unchanged.


The previously bound object; nullptr when unbound or called repeatedly.

### initPrimitive

```cpp
Widget & initPrimitive(Widget &parent, PrimitiveKind kind=PrimitiveKind::Object)
```

Creates a base node without a component theme; follows the init parent and repeated-call restrictions.

### themeStyle

```cpp
Widget & themeStyle(WidgetType type)
```

Applies the built-in component theme; call once before setting explicit styles.

### themeStyle

```cpp
Widget & themeStyle(F &&provider)
```

Adds a default style provider, applied immediately and updated with theme and DPI; explicit styles override its result and the callback is released on destruction. The returned image source and path are borrowed and must stay valid until the image is replaced or the widget is destroyed.

### textContent

```cpp
Widget & textContent(const char *text)
```

Sets native text node content; nullptr refreshes the existing text; non-text nodes do nothing.

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

Current effective text color; 0 for invalid objects.

### bindText

```cpp
Widget & bindText(const LocalizedText &text, F &&setter)
```

Binds the text update function for widget copy; copies the description, rebinding replaces, plain text can be unbound with clearTextBinding.

### clearTextBinding

```cpp
Widget & clearTextBinding()
```

Removes the bindText binding and keeps the currently displayed text; repeated calls do nothing.

### parent

```cpp
Ref< Widget > parent() const
```

Non-owning parent, child or screen reference; empty when absent, out of range or invalid.

### reparent

```cpp
Widget & reparent(const Widget &parent)
```

Remounts a mounted node under a new parent; rejects invalid objects and ancestor cycles and does not transfer wrappers.

### contains

```cpp
bool contains(const Widget &other) const
```

Ancestor relation including self; false for invalid objects.

### isHidden

```cpp
bool isHidden() const
```

Queries the own hidden flag or the effective visibility including ancestors; false when invalid.

### floating

```cpp
Widget & floating(bool value=true)
```

Sets whether to leave the parent layout and whether to propagate events to the parent.

### state

```cpp
Widget & state(StyleState state, bool value)
```

Sets an individual interaction state; Normal does nothing.

### flow

```cpp
Widget & flow(FlexFlow value)
```

Sets the Flex direction, gap or scroll axis; gap is in logical pixels.

### scrollMode

```cpp
Widget & scrollMode(ScrollMode value)
```

Sets the scrollable axes; Off disables scrolling and scrollbar display is unchanged.

### scrollSnap

```cpp
Widget & scrollSnap(Direction axis, ScrollSnap value)
```

Sets the child snap mode on the given axis; children must enable snapChild.

### scrollOne

```cpp
Widget & scrollOne(bool value=true)
```

Each drag crosses at most one snap child.

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

Scrolls ancestor containers at each level so this node becomes visible.

### positionPx

```cpp
Point positionPx() const
```

Position in physical pixels relative to the parent content origin, excluding scroll and translation; zero values for invalid objects.

### translatePx

```cpp
Widget & translatePx(int x, int y)
```

Sets a physical pixel translation excluded from layout; no action on invalid objects and queries return zero values.

### minimumSizePx

```cpp
Widget & minimumSizePx(int width, int height)
```

Sets the minimum size in physical pixels; 0 means no limit.

### clipCorner

```cpp
Widget & clipCorner(bool value=true)
```

Clips child nodes to the corner radius.

### overflowVisible

```cpp
Widget & overflowVisible(bool value=true)
```

Allows child nodes to draw outside this widget's bounds.

### topLayer

```cpp
Ref< Widget > topLayer() const
```

Top layer node of the owning display, borrowed until the display is destroyed; empty reference for invalid objects.

### textAlign

```cpp
Widget & textAlign(Align value)
```

Horizontal text alignment; accepts only Start, Center and End.

### imageScale

```cpp
Widget & imageScale(int value)
```

Scales the image node around its center; 256 is the original size; non-image nodes do nothing.

### minimumSize

```cpp
Widget & minimumSize(int width, int height)
```

Sets the minimum size in logical pixels; 0 means no limit.

### maxWidth

```cpp
Widget & maxWidth(int value)
```

Sets the maximum logical width; supports pre-mount configuration and runtime DPI updates. When the minimum width exceeds the cap the widget lays out at the minimum width; no action after destroy is requested.

Non-negative logical pixels; 0 means a zero cap, HIYUI_AUTO removes the local cap, other negative values do nothing.

### maxHeight

```cpp
Widget & maxHeight(int value)
```

Sets the maximum logical height; supports pre-mount configuration and runtime DPI updates. When the minimum height exceeds the cap the widget lays out at the minimum height; no action after destroy is requested.

Non-negative logical pixels; 0 means a zero cap, HIYUI_AUTO removes the local cap, other negative values do nothing.

### sizePx

```cpp
Widget & sizePx(int width, int height)
```

Sets the size in physical pixels; use the width, height or fill methods for percent and content sizing.

### maxWidthPx

```cpp
Widget & maxWidthPx(int value)
```

Sets the maximum size in physical pixels; HIYUI_AUTO removes the limit.

### layoutRules

```cpp
Widget & layoutRules(const LayoutRules &rules)
```

Applies rules against the direct parent content area; follows the new parent after reparenting. One widget keeps a single rule set; a successful replacement first restores the base of still-controlled fields of the old set. Explicit layout setters and style padding assignment release control of the fields they write; other fields keep adapting. Theme, DPI and rule updates keep control; released fields are not overwritten by the old base. Host axes used by breakpoints must be sized by the parent layout or explicit sizes, not by controlled descendant content. The original rules are kept when host constraints are not met or the configuration is invalid; no action after destroy is requested. Can be called before mounting and copies the array immediately; call on the UI thread; layout updates do not rebuild the subtree or dispatch ValueChanged. A hidden subtree leaves hit testing and focus traversal; showing it again does not move existing valid focus.

### layoutRules

```cpp
Widget & layoutRules(const Widget &host, const LayoutRules &rules)
```

Uses the given ancestor content area; other behavior matches the default host overload.

A mounted ancestor; self, descendants and invalid objects are not accepted; an unmounted target has its identity recorded and verified at mount time. When the host becomes invalid, stops being an ancestor or a breakpoint axis loses its size constraint, the base of still-controlled fields is restored and the rules are cleared.

### clearLayoutRules

```cpp
Widget & clearLayoutRules()
```

Restores the base of still-controlled fields and removes the rules and subscriptions; pre-install pixel values are not restored. Can be called before mounting; repeated calls, missing rules or a requested destroy do nothing.

### layoutMetrics

```cpp
LayoutMetrics layoutMetrics() const
```

Current layout constraints; defaults when invalid.

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

Sends an event synchronously; data is borrowed until the call returns; returns false for invalid objects; sending Delete is not allowed.

### hasFocusGroup

```cpp
bool hasFocusGroup() const
```

Whether this node belongs to a focus navigation group.

### focusNext

```cpp
Widget & focusNext(bool previous=false)
```

Moves focus within the owning input group, reversed when previous is true; no action without a group.

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

Queries the focus of the default input group; empty reference when absent.

## 尺寸与位置

### pos

```cpp
Widget & pos(int x, int y)
```

Sets the widget position

Horizontal coordinate in pixels, relative to the parent top-left corner Vertical coordinate in pixels, relative to the parent top-left corner

### x

```cpp
Widget & x(int x)
```

Sets the X coordinate, modifiable individually at runtime

Horizontal coordinate in pixels

### y

```cpp
Widget & y(int y)
```

Sets the Y coordinate, modifiable individually at runtime

Vertical coordinate in pixels

### size

```cpp
Widget & size(int w, int h)
```

Sets the widget size

Width in pixels, HIYUI_AUTO = fit content Height in pixels, HIYUI_AUTO = fit content

### width

```cpp
Widget & width(int w)
```

Sets the width

Width in pixels, HIYUI_AUTO = fit content

### height

```cpp
Widget & height(int h)
```

Sets the height

Height in pixels, HIYUI_AUTO = fit content

### center

```cpp
Widget & center()
```

Centers the widget in its parent

### fill

```cpp
Widget & fill()
```

Fills the parent; width and height are both 100%

### fillWidth

```cpp
Widget & fillWidth()
```

Fills the parent width, 100%

### fillHeight

```cpp
Widget & fillHeight()
```

Fills the parent height, 100%

### flex

```cpp
Widget & flex(int grow)
```

Sets the flex-grow value

flex-grow value; 0 = no stretch, 1+ = takes remaining space proportionally

### flexAlign

```cpp
Widget & flexAlign(Align main, Align cross=Align::Start, Align track=Align::Start)
```

Sets Flex main axis, cross axis and track alignment at runtime

Suits adding alignment to a container inside a builder; Props .align already covers common cases. Semantics match CSS Flexbox justify-content / align-items / align-content.

### hidden

```cpp
Widget & hidden(bool h=true)
```

Sets whether the widget is hidden

### enabled

```cpp
Widget & enabled(bool e=true)
```

Sets whether the widget is interactive

### accessibility

```cpp
Widget & accessibility(const AccessibilityProps &props)
```

Replaces the explicit accessibility configuration; strings are copied by the widget. Call on the UI thread; no action when unbound or the system accessibility backend is not enabled. The default configuration restores automatic semantics; the configuration becomes invalid when the widget is deleted.

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const char *value)
```

Sets the accessibility description; nullptr clears the explicit value; plain text cancels the matching translation binding.

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const LocalizedText &value)
```

Binds the accessibility description with updates on language change; copies text and arguments.

### accessibilityName

```cpp
Widget & accessibilityName(const char *value)
```

Sets the accessibility name; nullptr clears the explicit value; plain text cancels the matching translation binding.

### accessibilityName

```cpp
Widget & accessibilityName(const LocalizedText &value)
```

Binds the accessibility name with updates on language change; copies text and arguments.

### labelledBy

```cpp
Widget & labelledBy(const Ref< T > &source)
```

Uses the referenced target's text as the accessibility label. Call on the UI thread; does not extend the label lifetime. An empty reference or a deleted label restores the widget's own name. An explicit accessibility name overrides the linked label; no action when unbound or the system accessibility backend is not enabled.

### align

```cpp
Widget & align(lv_align_t a, int x_ofs=0, int y_ofs=0)
```

Sets the widget alignment

### align

```cpp
Widget & align(Anchor a, int x_ofs=0, int y_ofs=0)
```

Sets the widget alignment with Anchor, equivalent to align(lv_align_t)

## 子对象 / 滚动 / 焦点

### clean

```cpp
Widget & clean()
```

Removes all child objects without destroying itself

Used to clear old content before rebuilding a subtree dynamically; child objects are recycled by LVGL.

### scrollToY

```cpp
Widget & scrollToY(int y, bool animate=false)
```

Scrolls to the given vertical offset

Target vertical scroll offset in pixels; 0 = top

### scrollToX

```cpp
Widget & scrollToX(int x, bool animate=false)
```

Scrolls to the given horizontal offset

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

Focuses this widget; requires membership in an input group

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

Enrolls in keyboard focus navigation

Includes addToGroup() behavior. On focus the widget scrolls into view and shows a theme-colored focus ring. The ring refreshes automatically on theme and DPI switches. Arrow keys move focus when the widget has no key semantics of its own.

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

A StyleSet containing the four states normal/pressed/focused/disabled

### surface

```cpp
Widget & surface(SurfaceRole role)
```

Binds a surface material that updates with theme and DPI; text and layout stay unchanged. Calling again replaces the previous binding; a later explicit default-state background setting releases the material binding. Can be configured before mounting; unbinds automatically when the object is deleted.

## 样式快捷方法

### bg

```cpp
Widget & bg(uint32_t color)
```

Sets the background color

Color value in 0xRRGGBB format; HIYUI_DEFAULT restores the widget theme default, HIYUI_NONE leaves it unchanged, HIYUI_TRANSPARENT forces transparency

### bg

```cpp
Widget & bg(ThemeRole role)
```

Binds the background color to a theme semantic role; reactive, updates automatically on theme switch

### textColor

```cpp
Widget & textColor(uint32_t color)
```

Sets the text color

Color value in 0xRRGGBB format; HIYUI_DEFAULT restores the widget theme default, HIYUI_NONE leaves it unchanged, HIYUI_TRANSPARENT forces transparency

### textColor

```cpp
Widget & textColor(ThemeRole role)
```

Binds the text color to a theme semantic role; reactive, updates automatically on theme switch

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

Sets the line height as a font size ratio; bitmap fonts use the original line height. 0 restores the original line height; non-zero values outside 0.5 to 4 have no effect.

### radius

```cpp
Widget & radius(int r)
```

Sets the corner radius

Corner radius in pixels; HIYUI_NONE_INT = unchanged

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

Sets single-side padding

Goes through DPI scaling like padding(); recalculated automatically on theme/DPI switches.


Single-side padding in pixels

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

Margins act on the outer space the widget occupies in its parent container, matching CSS margin semantics. Goes through DPI scaling; recalculated automatically on theme/DPI switches.


Margins for all four sides in pixels

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

Sets single-side margin

Single-side margin in pixels

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

Opacity [0,255]; 0 = fully transparent, 255 = opaque

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

Color value in 0xRRGGBB format; HIYUI_DEFAULT restores the widget theme default, HIYUI_NONE leaves it unchanged, HIYUI_TRANSPARENT forces transparency

### hoverOverlay

```cpp
Widget & hoverOverlay(uint32_t color, uint8_t opa=LV_OPA_40)
```

Sets the hover background overlay; transparent at rest, blended as color + opa on hover

Overlay color, 0xRRGGBB Hover opacity, default LV_OPA_40, same as Theme::kHoverOpa

### underline

```cpp
Widget & underline(bool on=true)
```

Sets text underline; applies to this widget and child text inheriting the property

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

Returns the current widget width

Width in logical pixels; 0 when unbound.

### height

```cpp
int height() const
```

Returns the current widget height

Height in logical pixels; 0 when unbound.

### childCount

```cpp
uint32_t childCount() const
```

Returns the number of child objects

The number of direct children

### contentWidth

```cpp
int contentWidth() const
```

Returns the content area width, excluding padding and border

Width in logical pixels; 0 when unbound.

### contentHeight

```cpp
int contentHeight() const
```

Returns the content area height, excluding padding and border

Height in logical pixels; 0 when unbound.

### padLeft

```cpp
int padLeft() const
```

Returns single-side padding

Padding of the corresponding side in logical pixels; 0 when unbound.

### padRight

```cpp
int padRight() const
```

Returns the right padding

### padTop

```cpp
int padTop() const
```

Returns the top padding

### padBottom

```cpp
int padBottom() const
```

Returns the bottom padding

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

Returns the index of this widget within its parent

Index; 0 = first child

### boundsPx

```cpp
Rect boundsPx() const
```

Returns the untransformed bounds in screen coordinates, in physical pixels; an empty rectangle when unbound.

### contentBoundsPx

```cpp
Rect contentBoundsPx() const
```

Returns the content area relative to the widget top-left corner, in physical pixels; an empty rectangle when unbound.

### toLocalPx

```cpp
Point toLocalPx(Point screenPoint) const
```

Converts screen physical coordinates to widget-local coordinates, including the transforms of self and ancestors; returns the zero point when unbound.

### toScreenPx

```cpp
Point toScreenPx(Point localPoint) const
```

Converts widget-local physical coordinates to screen coordinates, including the transforms of self and ancestors; returns the zero point when unbound.

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

Binds a click event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle of this binding

### onPress

```cpp
Widget & onPress(F &&f, EventHandle *handle=nullptr)
```

Binds a press event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle of this binding

### onLongPress

```cpp
Widget & onLongPress(F &&f, EventHandle *handle=nullptr)
```

Binds a long press event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle of this binding

### onChange

```cpp
Widget & onChange(F &&f, EventHandle *handle=nullptr)
```

Binds a value change event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle of this binding

### on

```cpp
Widget & on(EventCode code, F &&handler, EventHandle *handle=nullptr)
```

Binds a callback for any event type

Repeated binding appends; existing callbacks are not replaced. The callback is saved while unmounted and connected after mounting; move-only closures are supported. The callback is released when the object or its pending configuration is destroyed.


Callable type Optional out parameter receiving the unbind handle of this binding

### onBackRequest

```cpp
Widget & onBackRequest(F &&handler, EventHandle *handle=nullptr)
```

Appends a back handler taking BackRequest &amp;; handlers on the same object run before the default local back. Supports pre-mount binding and move-only closures; the first handler with handled true ends the current routing. The argument is valid only during the callback; unbinding and destruction follow the on event handle rules.

### onEnvironmentChange

```cpp
Widget & onEnvironmentChange(F &&handler, EventHandle *handle=nullptr)
```

Appends an environment subscription notified with the first snapshot and later changes once a valid layout completes. Supports pre-mount binding and move-only closures; the handler is not invoked within the binding call stack. The callback accepts const LayoutEnvironment &amp; or no arguments; the snapshot is valid only during the callback. Identical snapshots do not notify again; moving across parents follows the host and is unaffected by wrapper moves. The callback may unbind or destroy widgets; destroying a widget removes its listener from the source.

Optional out parameter; off can be repeated, destruction does not unbind, use ScopedEventHandle for scoped unbinding.

### onDpiChange

```cpp
Widget & onDpiChange(F &&f)
```

Binds a DPI change callback

The callback runs after DPI recalculation completes, covering local style scaling and layout updates. Repeated binding appends. Unbinds automatically when the widget is deleted. Can be bound before mounting. Move-only closures are supported.


Callable type with signature void()

### onThemeChange

```cpp
Widget & onThemeChange(F &&f)
```

Binds a theme change callback

Runs after setTheme() refreshes the widget styles. Repeated binding appends. Unbinds automatically when the widget is deleted. The callback must not capture Widget wrapper objects; use a Ref proxy. Can be bound before mounting. Move-only closures are supported.


Callable type with signature void()

### onRightClick

```cpp
Widget & onRightClick(F &&f, EventHandle *handle=nullptr)
```

Binds a right click event callback

Callable type with signature void() or void(Event&amp;) Optional out parameter receiving the unbind handle of this binding

### contextMenu

```cpp
Widget & contextMenu(std::vector< ContextMenuItem > items, PopupMode mode=PopupMode::Inline)
```

Binds a right click context menu

## 鼠标指针

### cursor

```cpp
Widget & cursor(CursorType type)
```

Sets the widget mouse cursor type, SDL mode

Switches to the given cursor on hover and restores the default arrow on leave.

## 文本选区

### selectableText

```cpp
Widget & selectableText(bool withMenu=true)
```

Enables text selection and copy

Installs onto the inner text object returned by primaryTextObj(). Provides mouse drag selection, double click word selection, Primary+A select all, Primary+C copy, IBeam cursor and LV_PART_SELECTED inverted highlight. Highlight follows theme, with an optional right click copy and select all menu. Requires the derived class to override primaryTextObj() to take effect. Idempotent.

### selectedText

```cpp
std::string selectedText() const
```

Returns the selected text; empty string when nothing is selected

### installTextSelection

```cpp
static void installTextSelection(lv_obj_t *label, bool withMenu=true)
```

Installs text selection capability on any LVGL label object

Same implementation as selectableText() but without depending on primaryTextObj(), installing directly on the given label. Intended for multi-label library widgets such as ChatList virtual pools installing per label. Idempotent. External widgets can just use selectableText().

## 悬浮提示

### tooltip

```cpp
Widget & tooltip(const char *text)
```

Binds tooltip text, Top direction by default

The tooltip bubble pops up automatically after about 500ms of hover and closes on leave. The tooltip mounts to lv_layer_top() and does not affect widget layout.


Tooltip text, copied at call time; nullptr clears the tooltip.

### tooltip

```cpp
Widget & tooltip(const LocalizedText &text)
```

Binds tooltip text that updates with language; copies the description; a plain tooltip call replaces this binding.

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

Binds a widget reference for later access to the mounted widget

Reference target type, usually the same as this widget type

### ref

```cpp
Ref< Widget > ref() const
```

Returns a non-owning reference, invalidated automatically when the widget is deleted.

## Friends

### reapplyThemeToAll

Refreshes theme styles on all registered widgets

## Public Methods

### moveToIndex

```cpp
void moveToIndex(int index) const
```

Moves this widget to the given index within its parent

Target index; 0 = bottommost, -1 = counted from the end

## Protected Methods

### create

```cpp
void create(lv_obj_t *parent)
```

Creates a base LVGL object, lv_obj_create

### create

```cpp
void create(lv_obj_t *parent)
```

Creates the LVGL object with the given create function

LVGL create function pointer, such as lv_button_create

### applyThemeDefaults

```cpp
void applyThemeDefaults()
```

Applies theme default styles

### bindThemeCallback

```cpp
void bindThemeCallback(std::function< void()> fn)
```

Registers a theme refresh callback

setTheme() invokes this callback. The callback must not capture Widget wrapper objects.

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

Returns the widget primary text object, the inner label or textarea, used by text capabilities such as selectableText

Derived classes override as needed to return their own primary text object; base text nodes return themselves by default.

### applyCommonProps

```cpp
void applyCommonProps(int width, int height, uint32_t bg, uint32_t textColor, int radius)
```

Applies common properties from Props, internal use

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

Sets the mouse cursor for any lv_obj_t, for use on derived class internal objects
