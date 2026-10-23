---
title: "Widget"
---

# Widget <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/widget.h>`

**命名空间：** `hiyui`

所有 UI 组件的基类

封装 lv_obj_t*，提供链式属性设置、样式应用、事件绑定、引用绑定等通用接口。 `Widget` 不持有控件所有权，不可拷贝；析构不删除控件。 子控件由父对象管理；移动转移包装器绑定和待挂载配置，不使已绑定 `Ref` 失效。 Props 自身借用输入；构造及配置调用立即复制文本、路径和描述数组。 图片描述符、像素缓冲和字体资源仍由调用方持有，并须覆盖控件使用期。 属性设置、事件、Ref 和子树可在 init 前配置，挂载时生效；回调按值保存。 挂载前的赋值用于初始状态，即使传入 Notify::Yes 也不派发变更事件。 init 要求未绑定且父组件有效；重复初始化在调试版断言，发布版无操作。 焦点、滚动、编辑和弹出等动作要求已挂载；违反时调试版断言，发布版无操作。 destroy 使自身及子树引用立即失效；销毁后不接受配置或重新初始化。 跨回调访问使用 Ref，并在操作前判断其有效性。



**参见：** `Container`


**参见：** `Button`


**参见：** `Label`

## 生命周期

### Widget

```cpp
Widget(lv_obj_t *existing)
```

从已有 LVGL 对象构造

### Widget

```cpp
Widget(Widget &&other) noexcept
```

转移控件绑定，移动后源包装器的 `raw()` 为 nullptr。

### operator=

```cpp
Widget & operator=(Widget &&other) noexcept
```

替换控件绑定，不删除原控件。

| 参数 | 说明 |
|---|---|
| `other` | 移动后 `raw()` 为 nullptr；自移动时保持不变。 |

### raw

```cpp
lv_obj_t * raw() const
```

获取底层 LVGL 对象指针

**返回值：** 底层对象；未挂载、请求删除或已删除时返回 nullptr。

### destroy

```cpp
virtual void destroy()
```

请求删除当前控件及其子树，立即使引用失效，实际释放在 UI 主循环中完成。 在 UI 线程调用，允许从当前控件的回调中调用；重复调用无操作。

### release

```cpp
lv_obj_t * release()
```

解除当前包装器与控件的绑定。

返回后 `raw()` 为 nullptr，不删除控件或改变其父子关系。



**返回值：** 原绑定对象，未绑定或重复调用时返回 nullptr。

### initPrimitive

```cpp
Widget & initPrimitive(Widget &parent, PrimitiveKind kind=PrimitiveKind::Object)
```

创建无组件主题的基础节点，遵循 init 的父级和重复调用限制。

### themeStyle

```cpp
Widget & themeStyle(WidgetType type)
```

应用内置组件主题；在设置显式样式前调用一次。

### themeStyle

```cpp
Widget & themeStyle(F &&provider)
```

追加默认样式提供者，立即应用并随主题和 DPI 更新；显式样式覆盖其结果，销毁时释放回调。 返回的图片源及路径为借用值，须保持有效至替换该图片或组件销毁。

### textContent

```cpp
Widget & textContent(const char *text)
```

设置原生文本节点内容；nullptr 刷新现有文本，非文本节点无操作。

### textContent

```cpp
std::string textContent() const
```

获取文本副本，非文本节点或失效对象返回空字符串。

### textOverflow

```cpp
Widget & textOverflow(TextOverflow value)
```

设置文本溢出模式，单行省略高度随字体与 DPI 更新；非文本节点无操作。

### textColor

```cpp
uint32_t textColor() const
```

当前生效文字颜色，失效对象返回 0。

### bindText

```cpp
Widget & bindText(const LocalizedText &text, F &&setter)
```

绑定组件文案的更新函数；复制描述，重复绑定替换，普通文案可用 clearTextBinding 解除。

### clearTextBinding

```cpp
Widget & clearTextBinding()
```

解除 bindText 绑定，保留当前显示文本；重复调用无操作。

### parent

```cpp
Ref< Widget > parent() const
```

非拥有的父级、子级或屏幕引用；不存在、越界或失效时返回空引用。

### reparent

```cpp
Widget & reparent(const Widget &parent)
```

将已挂载节点改挂到父级；拒绝失效对象及祖先循环，不转移包装器。

### contains

```cpp
bool contains(const Widget &other) const
```

包含自身的祖先关系，失效对象返回 false。

### isHidden

```cpp
bool isHidden() const
```

查询自身隐藏标志或包含祖先的实际可见性，失效时返回 false。

### floating

```cpp
Widget & floating(bool value=true)
```

设置是否脱离父级布局及是否将事件向父级传播。

### state

```cpp
Widget & state(StyleState state, bool value)
```

设置独立交互状态，Normal 无操作。

### flow

```cpp
Widget & flow(FlexFlow value)
```

设置 Flex 方向、间距或滚动轴；间距为逻辑像素。

### scrollMode

```cpp
Widget & scrollMode(ScrollMode value)
```

设置允许滚动的轴，Off 禁止滚动；不改变滚动条显示方式。

### scrollSnap

```cpp
Widget & scrollSnap(Direction axis, ScrollSnap value)
```

设置指定轴的子项吸附方式，子项须启用 snapChild。

### scrollOne

```cpp
Widget & scrollOne(bool value=true)
```

每次拖动至多跨越一个吸附子项。

### scrollMetrics

```cpp
ScrollMetrics scrollMetrics() const
```

当前滚动状态，失效对象返回零值。

### scrollToXPx

```cpp
Widget & scrollToXPx(int value, bool animate=false)
```

滚动至物理像素偏移；未挂载或失效时无操作。

### scrollByPx

```cpp
Widget & scrollByPx(int dx, int dy, bool animate=false)
```

按物理像素增加滚动偏移，正值向右下移动视口。

### scrollIntoView

```cpp
Widget & scrollIntoView(bool animate=false)
```

滚动各级祖先容器以显示当前节点。

### positionPx

```cpp
Point positionPx() const
```

物理像素位置，相对父容器内容原点，不含滚动与平移；失效对象返回零值。

### translatePx

```cpp
Widget & translatePx(int x, int y)
```

设置不参与布局的物理像素平移；失效对象无操作，查询返回零值。

### minimumSizePx

```cpp
Widget & minimumSizePx(int width, int height)
```

设置物理像素最小尺寸，0 表示不限制。

### clipCorner

```cpp
Widget & clipCorner(bool value=true)
```

按圆角裁剪子节点。

### overflowVisible

```cpp
Widget & overflowVisible(bool value=true)
```

允许子节点绘制到自身边界外。

### topLayer

```cpp
Ref< Widget > topLayer() const
```

所属显示器的顶层节点，借用至显示器销毁；失效对象返回空引用。

### textAlign

```cpp
Widget & textAlign(Align value)
```

文本水平对齐，仅接受 Start、Center、End。

### imageScale

```cpp
Widget & imageScale(int value)
```

图片节点围绕中心缩放，256 为原始大小；非图片节点无操作。

### zoom

```cpp
Widget & zoom(float factor)
```

围绕左上角缩放组件及后代的显示与命中区域，不改变布局尺寸，支持挂载前设置。

| 参数 | 说明 |
|---|---|
| `factor` | 有限倍率 0.1 至 4，1 恢复原始显示；无效值或失效对象无操作。 |

### zoom

```cpp
float zoom() const
```

获取实际生效的缩放倍率，未挂载或失效时返回 1。

### minimumSize

```cpp
Widget & minimumSize(int width, int height)
```

设置最小尺寸，单位逻辑像素，0 表示不限制。

### maxWidth

```cpp
Widget & maxWidth(int value)
```

设置最大逻辑宽度，支持挂载前配置和运行时 DPI 更新。 最小宽度大于上限时按最小宽度布局；已请求销毁时无操作。

| 参数 | 说明 |
|---|---|
| `value` | 非负逻辑像素；0 为零上限，HIYUI_AUTO 移除局部上限，其他负值无操作。 |

### maxHeight

```cpp
Widget & maxHeight(int value)
```

设置最大逻辑高度，支持挂载前配置和运行时 DPI 更新。 最小高度大于上限时按最小高度布局；已请求销毁时无操作。

| 参数 | 说明 |
|---|---|
| `value` | 非负逻辑像素；0 为零上限，HIYUI_AUTO 移除局部上限，其他负值无操作。 |

### sizePx

```cpp
Widget & sizePx(int width, int height)
```

设置物理像素尺寸；百分比和内容尺寸使用 width、height 或 fill 方法。

### maxWidthPx

```cpp
Widget & maxWidthPx(int value)
```

设置最大物理像素尺寸，HIYUI_AUTO 解除限制。

### layoutRules

```cpp
Widget & layoutRules(const LayoutRules &rules)
```

根据直接父容器内容区应用规则，父级改变后跟随新父级。 同一组件只保留一组；成功替换先恢复旧组仍受控字段的 base。 显式布局 setter 及 style 内边距赋值解除所写字段的控制，其他字段继续适配。 主题、DPI 和规则更新保留控制；解除控制的字段不被旧 base 覆盖。 参与断点的宿主轴必须由父布局或显式尺寸分配，不能按受控后代内容定尺寸。 不符合宿主约束或配置无效时保留原规则；已请求销毁时无操作。 支持挂载前调用并立即复制数组；在 UI 线程调用，布局更新不重建子树或派发 ValueChanged。 隐藏子树退出命中和焦点遍历，恢复显示不移动已有有效焦点。

### layoutRules

```cpp
Widget & layoutRules(const Widget &host, const LayoutRules &rules)
```

使用指定祖先内容区，其他行为与默认宿主重载一致。

| 参数 | 说明 |
|---|---|
| `host` | 已挂载祖先，不接受自身、后代或失效对象；目标未挂载时记录身份，挂载时验证。 宿主失效、不再是祖先或断点轴失去尺寸约束时，恢复仍受控字段的 base 并清除规则。 |

### clearLayoutRules

```cpp
Widget & clearLayoutRules()
```

恢复仍受控字段的 base 并移除规则及订阅，不恢复安装前的像素值。 支持挂载前调用；重复调用、无规则或已请求销毁时无操作。

### layoutMetrics

```cpp
LayoutMetrics layoutMetrics() const
```

当前布局约束，失效时返回默认值。

### updateLayout

```cpp
Widget & updateLayout()
```

同步完成布局，回调可能删除当前对象。

### invalidateLayout

```cpp
Widget & invalidateLayout()
```

请求下一次布局更新，重复请求合并。

### sendEvent

```cpp
bool sendEvent(EventCode code, void *data=nullptr)
```

同步发送事件，data 借用至调用返回；失效对象返回 false，不允许发送 Delete。

### hasFocusGroup

```cpp
bool hasFocusGroup() const
```

当前节点是否属于焦点导航组。

### focusNext

```cpp
Widget & focusNext(bool previous=false)
```

在所属输入组内移动焦点，previous 为 true 时反向；无组时无操作。

### windowFocused

```cpp
bool windowFocused() const
```

所属桌面窗口是否获得键盘焦点，非桌面平台返回 false。

### accessibilityRole

```cpp
Widget & accessibilityRole(AccessibilityRole role, uint32_t group=0)
```

设置无障碍角色及选择组，保留显式名称配置；后端未启用时无操作。

### accessibilityChanged

```cpp
Widget & accessibilityChanged()
```

通知系统无障碍服务重新读取当前内容。

### selectableTextByDefault

```cpp
static bool selectableTextByDefault()
```

当前构建是否默认允许文本选择。

### imageSourceIsText

```cpp
static bool imageSourceIsText(const void *source)
```

图片源是否为需复制的路径或符号字符串，nullptr 返回 false。

### focusedWidget

```cpp
static Ref< Widget > focusedWidget()
```

查询默认输入组的焦点，不存在时返回空引用。

## 尺寸与位置

### pos

```cpp
Widget & pos(int x, int y)
```

设置组件位置

| 参数 | 说明 |
|---|---|
| `x` | 水平坐标，单位像素，相对于父容器左上角 |
| `y` | 垂直坐标，单位像素，相对于父容器左上角 |

### x

```cpp
Widget & x(int x)
```

设置 X 坐标，运行时单独修改

| 参数 | 说明 |
|---|---|
| `x` | 水平坐标，单位像素 |

### y

```cpp
Widget & y(int y)
```

设置 Y 坐标，运行时单独修改

| 参数 | 说明 |
|---|---|
| `y` | 垂直坐标，单位像素 |

### size

```cpp
Widget & size(int w, int h)
```

设置组件尺寸

| 参数 | 说明 |
|---|---|
| `w` | 宽度，单位像素，HIYUI_AUTO = 自适应内容 |
| `h` | 高度，单位像素，HIYUI_AUTO = 自适应内容 |

### width

```cpp
Widget & width(int w)
```

设置宽度

| 参数 | 说明 |
|---|---|
| `w` | 宽度，单位像素，HIYUI_AUTO = 自适应内容 |

### height

```cpp
Widget & height(int h)
```

设置高度

| 参数 | 说明 |
|---|---|
| `h` | 高度，单位像素，HIYUI_AUTO = 自适应内容 |

### center

```cpp
Widget & center()
```

在父容器中居中对齐

### fill

```cpp
Widget & fill()
```

填满父容器，宽度和高度均为 100%

### fillWidth

```cpp
Widget & fillWidth()
```

宽度填满父容器，100%

### fillHeight

```cpp
Widget & fillHeight()
```

高度填满父容器，100%

### flex

```cpp
Widget & flex(int grow)
```

设置 flex-grow 值

| 参数 | 说明 |
|---|---|
| `grow` | flex-grow 值，0 = 不伸展，1+ = 按比例占据剩余空间 |

### flexAlign

```cpp
Widget & flexAlign(Align main, Align cross=Align::Start, Align track=Align::Start)
```

运行时设置 Flex 主轴/交叉轴/轨道对齐

适用于在 builder 内对容器补设对齐，Props 的 .align 已覆盖常见场景。 语义同 CSS Flexbox 的 justify-content / align-items / align-content。

### hidden

```cpp
Widget & hidden(bool h=true)
```

设置组件是否隐藏

### enabled

```cpp
Widget & enabled(bool e=true)
```

设置组件是否可交互

### accessibility

```cpp
Widget & accessibility(const AccessibilityProps &props)
```

替换显式无障碍配置，字符串由组件复制保存。 在 UI 线程调用；未绑定或未启用系统无障碍后端时无操作。 默认配置恢复自动语义，组件删除后配置失效。

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const char *value)
```

设置无障碍说明，nullptr 清除显式值，普通文本取消对应翻译绑定。

### accessibilityDescription

```cpp
Widget & accessibilityDescription(const LocalizedText &value)
```

绑定无障碍说明并随语言变化更新，复制文案与参数。

### accessibilityName

```cpp
Widget & accessibilityName(const char *value)
```

设置无障碍名称，nullptr 清除显式值，普通文本取消对应翻译绑定。

### accessibilityName

```cpp
Widget & accessibilityName(const LocalizedText &value)
```

绑定无障碍名称并随语言变化更新，复制文案与参数。

### labelledBy

```cpp
Widget & labelledBy(const Ref< T > &source)
```

使用引用目标的文本作为无障碍标签。 在 UI 线程调用；不延长标签生命周期。空引用或标签删除后恢复组件自身名称。 显式无障碍名称覆盖关联标签；未绑定或未启用系统无障碍后端时无操作。

### align

```cpp
Widget & align(lv_align_t a, int x_ofs=0, int y_ofs=0)
```

设置组件对齐方式

### align

```cpp
Widget & align(Anchor a, int x_ofs=0, int y_ofs=0)
```

使用 `Anchor` 设置组件对齐方式，与 align(lv_align_t) 等价

## 子对象 / 滚动 / 焦点

### clean

```cpp
Widget & clean()
```

清空所有子对象，不销毁自身

用于动态重建子树前清理旧内容，子对象由 LVGL 回收。

### scrollToY

```cpp
Widget & scrollToY(int y, bool animate=false)
```

滚动到纵向指定偏移

| 参数 | 说明 |
|---|---|
| `y` | 目标纵向滚动偏移，像素，0 = 顶部 |

### scrollToX

```cpp
Widget & scrollToX(int x, bool animate=false)
```

滚动到横向指定偏移

| 参数 | 说明 |
|---|---|
| `x` | 目标横向滚动偏移，像素，0 = 左侧 |

### scrollToTop

```cpp
Widget & scrollToTop(bool animate=false)
```

滚动到顶部

### scrollToBottom

```cpp
Widget & scrollToBottom(bool animate=false)
```

滚动到底部

### focus

```cpp
Widget & focus()
```

聚焦当前组件，需已加入输入组

键盘导航场景下用于显式聚焦。

### addToGroup

```cpp
Widget & addToGroup()
```

加入默认输入组，键盘导航用，幂等

### keyFocus

```cpp
Widget & keyFocus()
```

纳入键盘焦点导航

包含 `addToGroup()` 行为；聚焦时滚动到可见位置并显示主题色焦点环， 主题与 DPI 切换自动刷新焦点环；组件无自身按键语义时方向键移动焦点。

## 样式

### style

```cpp
Widget & style(const Style &s)
```

应用单一样式

### style

```cpp
Widget & style(const StyleSet &ss)
```

应用多状态样式集合

| 参数 | 说明 |
|---|---|
| `ss` | StyleSet，包含 normal/pressed/focused/disabled 四种状态 |

### surface

```cpp
Widget & surface(SurfaceRole role)
```

绑定随主题和 DPI 更新的表面材质，文字与布局保持不变。 重复调用替换原绑定；后续显式设置默认状态背景解除材质绑定。 可在挂载前配置，对象删除时自动解绑。

### isBgOverridden

```cpp
static bool isBgOverridden(lv_obj_t *obj)
```

查询对象是否使用固定背景色

## 样式快捷方法

### bg

```cpp
Widget & bg(uint32_t color)
```

设置背景色

| 参数 | 说明 |
|---|---|
| `color` | 0xRRGGBB 格式颜色值，HIYUI_DEFAULT = 恢复组件主题默认值，HIYUI_NONE = 不修改， HIYUI_TRANSPARENT = 强制透明 |

### bg

```cpp
Widget & bg(ThemeRole role)
```

绑定背景色到主题语义角色，响应式，主题切换时自动更新

### textColor

```cpp
Widget & textColor(uint32_t color)
```

设置文字颜色

| 参数 | 说明 |
|---|---|
| `color` | 0xRRGGBB 格式颜色值，HIYUI_DEFAULT = 恢复组件主题默认值，HIYUI_NONE = 不修改， HIYUI_TRANSPARENT = 强制透明 |

### textColor

```cpp
Widget & textColor(ThemeRole role)
```

绑定文字颜色到主题语义角色，响应式，主题切换时自动更新

### fontSize

```cpp
Widget & fontSize(int size)
```

设置字体大小

| 参数 | 说明 |
|---|---|
| `size` | 字体大小，单位像素，0 = 主题默认字号，HIYUI_DEFAULT_INT = 恢复组件默认 |

### lineHeight

```cpp
Widget & lineHeight(float ratio)
```

设置字号倍率行高，点阵字体按原始行高计算；0 恢复原始行高，0.5 至 4 以外的非零值不生效。

### radius

```cpp
Widget & radius(int r)
```

设置圆角半径

| 参数 | 说明 |
|---|---|
| `r` | 圆角半径，单位像素，HIYUI_NONE_INT = 不修改，HIYUI_DEFAULT_INT = 恢复组件默认 |

### padding

```cpp
Widget & padding(int all)
```

设置四边等距内边距

| 参数 | 说明 |
|---|---|
| `all` | 四边内边距，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |

### padding

```cpp
Widget & padding(int h, int v)
```

分别设置水平和垂直内边距

| 参数 | 说明 |
|---|---|
| `h` | 水平内边距，左右，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |
| `v` | 垂直内边距，上下，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |

### padLeft

```cpp
Widget & padLeft(int v)
```

设置单边内边距

与 `padding()` 一样走 DPI 缩放，主题/DPI 切换时自动重算。



| 参数 | 说明 |
|---|---|
| `v` | 单边内边距，单位像素，HIYUI_DEFAULT_INT = 恢复该边组件默认 |

### padRight

```cpp
Widget & padRight(int v)
```

设置右内边距，语义同 padLeft

### padTop

```cpp
Widget & padTop(int v)
```

设置上内边距，语义同 padLeft

### padBottom

```cpp
Widget & padBottom(int v)
```

设置下内边距，语义同 padLeft

### margin

```cpp
Widget & margin(int all)
```

设置四边等距外边距

外边距作用于组件在父容器，Flex中占据的外部空间，语义同 CSS margin。 走 DPI 缩放，主题/DPI 切换时自动重算。



| 参数 | 说明 |
|---|---|
| `all` | 四边外边距，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |

### margin

```cpp
Widget & margin(int h, int v)
```

分别设置水平和垂直外边距

| 参数 | 说明 |
|---|---|
| `h` | 水平外边距，左右，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |
| `v` | 垂直外边距，上下，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |

### marginLeft

```cpp
Widget & marginLeft(int v)
```

设置单边外边距

| 参数 | 说明 |
|---|---|
| `v` | 单边外边距，单位像素，HIYUI_DEFAULT_INT = 恢复该边组件默认 |

### marginRight

```cpp
Widget & marginRight(int v)
```

设置右外边距，语义同 marginLeft

### marginTop

```cpp
Widget & marginTop(int v)
```

设置上外边距，语义同 marginLeft

### marginBottom

```cpp
Widget & marginBottom(int v)
```

设置下外边距，语义同 marginLeft

### opacity

```cpp
Widget & opacity(int opa)
```

设置整体透明度

| 参数 | 说明 |
|---|---|
| `opa` | 透明度 [0,255]，0 = 全透明，255 = 不透明，HIYUI_DEFAULT_INT = 恢复组件默认 |

### borderWidth

```cpp
Widget & borderWidth(int w)
```

设置边框宽度

| 参数 | 说明 |
|---|---|
| `w` | 边框宽度，单位像素，HIYUI_DEFAULT_INT = 恢复组件默认 |

### borderColor

```cpp
Widget & borderColor(uint32_t color)
```

设置边框颜色

| 参数 | 说明 |
|---|---|
| `color` | 0xRRGGBB 格式颜色值，HIYUI_DEFAULT = 恢复组件主题默认值，HIYUI_NONE = 不修改， HIYUI_TRANSPARENT = 强制透明 |

### hoverOverlay

```cpp
Widget & hoverOverlay(uint32_t color, uint8_t opa=LV_OPA_40)
```

设置 hover 背景叠加，常态透明，hover 时以 color + opa 叠加

| 参数 | 说明 |
|---|---|
| `color` | 叠加颜色，0xRRGGBB |
| `opa` | hover 透明度，默认 LV_OPA_40，同 `Theme::kHoverOpa` |

### underline

```cpp
Widget & underline(bool on=true)
```

设置文字下划线，此组件及继承该属性的子文本生效

## 过渡动画

### transitionBg

```cpp
Widget & transitionBg(uint32_t timeMs)
```

设置背景色过渡动画

| 参数 | 说明 |
|---|---|
| `timeMs` | 动画时长，单位毫秒 |

### transitionAll

```cpp
Widget & transitionAll(uint32_t timeMs)
```

设置所有属性的过渡动画

| 参数 | 说明 |
|---|---|
| `timeMs` | 动画时长，单位毫秒 |

## 查询

### width

```cpp
int width() const
```

获取组件当前宽度

**返回值：** 逻辑像素宽度；未绑定时为 0。

### height

```cpp
int height() const
```

获取组件当前高度

**返回值：** 逻辑像素高度；未绑定时为 0。

### childCount

```cpp
uint32_t childCount() const
```

获取子对象数量

**返回值：** 直接子对象数

### contentWidth

```cpp
int contentWidth() const
```

获取内容区宽度，已去除 padding 与 border

**返回值：** 逻辑像素宽度；未绑定时为 0。

### contentHeight

```cpp
int contentHeight() const
```

获取内容区高度，已去除 padding 与 border

**返回值：** 逻辑像素高度；未绑定时为 0。

### padLeft

```cpp
int padLeft() const
```

获取单边内边距

**返回值：** 对应边的逻辑像素内边距；未绑定时为 0。

### padRight

```cpp
int padRight() const
```

获取右内边距

### padTop

```cpp
int padTop() const
```

获取上内边距

### padBottom

```cpp
int padBottom() const
```

获取下内边距

### widthPx

```cpp
int widthPx() const
```

查询物理像素尺寸；未绑定时为 0。

### padLeftPx

```cpp
int padLeftPx() const
```

查询物理像素内边距；未绑定时为 0。

### index

```cpp
int index() const
```

获取自身在父容器中的索引

**返回值：** 索引，0 = 第一个子对象

### boundsPx

```cpp
Rect boundsPx() const
```

获取屏幕坐标中的未变换边界，单位为物理像素；未绑定时为空矩形。

### contentBoundsPx

```cpp
Rect contentBoundsPx() const
```

获取相对组件左上角的内容区，单位为物理像素；未绑定时为空矩形。

### toLocalPx

```cpp
Point toLocalPx(Point screenPoint) const
```

将屏幕物理坐标转换为组件局部坐标，包含自身及祖先的变换；未绑定时返回零点。

### toScreenPx

```cpp
Point toScreenPx(Point localPoint) const
```

将组件局部物理坐标转换为屏幕坐标，包含自身及祖先的变换；未绑定时返回零点。

### state

```cpp
WidgetState state() const
```

查询组件当前交互状态；未绑定时所有状态均为 false。

### redraw

```cpp
Widget & redraw()
```

请求重绘；未绑定时无操作。

### clickable

```cpp
Widget & clickable(bool on=true)
```

设置能否接收指针点击；不改变禁用状态。

## 事件绑定

### onClick

```cpp
Widget & onClick(F &&f, EventHandle *handle=nullptr)
```

绑定点击事件回调

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() 或 void(Event&amp;) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onPress

```cpp
Widget & onPress(F &&f, EventHandle *handle=nullptr)
```

绑定按下事件回调

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() 或 void(Event&amp;) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onLongPress

```cpp
Widget & onLongPress(F &&f, EventHandle *handle=nullptr)
```

绑定长按事件回调

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() 或 void(Event&amp;) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onChange

```cpp
Widget & onChange(F &&f, EventHandle *handle=nullptr)
```

绑定值变化事件回调

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() 或 void(Event&amp;) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### on

```cpp
Widget & on(EventCode code, F &&handler, EventHandle *handle=nullptr)
```

绑定任意事件类型的回调

重复绑定追加，已有回调不被替换。 未挂载时保存回调，挂载完成后连接；支持只可移动闭包。 控件或待挂载配置销毁时释放回调。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型 |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**参见：** `EventCode`


**参见：** `EventHandle`

### onBackRequest

```cpp
Widget & onBackRequest(F &&handler, EventHandle *handle=nullptr)
```

追加返回处理器，接受 `BackRequest` &amp;；同一对象的处理器先于默认局部返回。 支持挂载前绑定和只可移动闭包；首个 handled 为 true 的处理器结束本次路由。 参数仅在回调期间有效；解绑与销毁沿用 on 的事件句柄规则。

### onEnvironmentChange

```cpp
Widget & onEnvironmentChange(F &&handler, EventHandle *handle=nullptr)
```

追加环境订阅，在有效布局完成后通知首个快照及后续变化。 支持挂载前绑定和只可移动闭包；绑定调用栈中不调用处理器。 回调接受 const `LayoutEnvironment` &amp; 或无参数，快照仅在回调期间有效。 相同快照不重复通知；跨父级移动跟随宿主，不受包装器移动影响。 可在回调中解绑或销毁组件；销毁组件移除来源监听。

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参；off 可重复，析构不解绑，作用域解绑使用 ScopedEventHandle。 |

### onDpiChange

```cpp
Widget & onDpiChange(F &&f, EventHandle *handle=nullptr)
```

绑定 DPI 变更回调

回调在 DPI 重算（本地样式缩放、布局更新与显式样式重应用）完成后执行； 重复绑定追加；组件删除时自动解绑。 仅响应以本组件为目标的派发，冒泡自子组件的同类通知不触发回调。 可在挂载前绑定，支持只可移动闭包。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onThemeChange

```cpp
Widget & onThemeChange(F &&f, EventHandle *handle=nullptr)
```

绑定主题变更回调

`setTheme()` 刷新组件样式后执行；重复绑定追加； 组件删除时自动解绑。 仅响应以本组件为目标的派发，冒泡自子组件的同类通知不触发回调。 回调不得捕获 `Widget` 包装对象，使用 `Ref` 代理。 可在挂载前绑定，支持只可移动闭包。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onRightClick

```cpp
Widget & onRightClick(F &&f, EventHandle *handle=nullptr)
```

绑定右键点击事件回调

| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void() 或 void(Event&amp;) |

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### contextMenu

```cpp
Widget & contextMenu(std::vector< ContextMenuItem > items, PopupMode mode=PopupMode::Inline)
```

绑定右键上下文菜单

## 鼠标指针

### cursor

```cpp
Widget & cursor(CursorType type)
```

设置组件的鼠标指针类型，SDL 模式

Hover 时自动切换为指定指针，离开时恢复默认箭头。

## 文本选区

### selectableText

```cpp
Widget & selectableText(bool withMenu=true)
```

开启「文本可选 + 复制」能力

对 `primaryTextObj()` 返回的内层文本对象装配，鼠标拖选、双击选词、Primary+A 全选、Primary+C 复制、IBeam 光标、LV_PART_SELECTED 反白高亮，跟随主题、可选右键 「复制/全选」菜单。需派生类 override `primaryTextObj()` 才生效；幂等。

### selectedText

```cpp
std::string selectedText() const
```

取选中文本，无选中返回空串

### installTextSelection

```cpp
static void installTextSelection(lv_obj_t *label, bool withMenu=true)
```

对任意 LVGL label 对象装配文本选区能力

与 `selectableText()` 同源，但不依赖 `primaryTextObj()`，可直接对指定 label 装配。供库内多 label 组件，如 `ChatList` 虚拟池逐个 label 装配；幂等。 外部组件用 `selectableText()` 即可。

## 悬浮提示

### tooltip

```cpp
Widget & tooltip(const char *text)
```

绑定悬浮提示文本，默认 Top 方向

鼠标悬浮约 500ms 后自动弹出提示气泡，移出后关闭。 提示挂载到 lv_layer_top()，不影响组件布局。



| 参数 | 说明 |
|---|---|
| `text` | 提示文本，调用时复制；nullptr 清空提示。 |

### tooltip

```cpp
Widget & tooltip(const LocalizedText &text)
```

绑定随语言更新的提示文本，复制描述；普通 tooltip 调用替换此绑定。

### tooltip

```cpp
Widget & tooltip(const struct TooltipConfig &config)
```

绑定悬浮提示，完整配置

## 引用绑定

### ref

```cpp
Widget & ref(Ref< T > &r)
```

绑定组件引用，用于后续访问已挂载的组件

| 名称 | 说明 |
|---|---|
| `T` | 引用目标类型，通常与当前组件类型一致 |


**参见：** `Ref`

### ref

```cpp
Ref< Widget > ref() const
```

获取非拥有引用，组件删除后自动失效。

## 友元

### reapplyThemeToAll

刷新所有已注册 `Widget` 的主题样式

## 公开方法

### moveToIndex

```cpp
void moveToIndex(int index) const
```

将组件移动到父容器中的指定索引位置

| 参数 | 说明 |
|---|---|
| `index` | 目标索引，0 = 最底层，-1 = 从末尾计数 |

## 保护方法

### create

```cpp
void create(lv_obj_t *parent)
```

创建基础 LVGL 对象，lv_obj_create

### create

```cpp
void create(lv_obj_t *parent)
```

使用指定创建函数创建 LVGL 对象

| 名称 | 说明 |
|---|---|
| `CreateFn` | LVGL 创建函数指针，如 lv_button_create |

### applyThemeDefaults

```cpp
void applyThemeDefaults()
```

应用主题默认样式

### bindThemeCallback

```cpp
void bindThemeCallback(std::function< void()> fn)
```

注册主题刷新回调

`setTheme()` 调用该回调。回调不得捕获 `Widget` 包装对象。

### bindDpiCallback

```cpp
void bindDpiCallback(std::function< void()> fn)
```

注册 DPI 变更回调

回调在本地样式缩放和布局更新后执行。

### markBgOverridden

```cpp
void markBgOverridden()
```

标记固定背景色

### primaryTextObj

```cpp
virtual lv_obj_t * primaryTextObj() const
```

返回组件的主文本对象，内层 label/textarea，供 selectableText 等文本能力使用

派生类按需 override 返回自己的主文本对象；基础文本节点默认返回自身。

### applyCommonProps

```cpp
void applyCommonProps(int width, int height, uint32_t bg, uint32_t textColor, int radius)
```

应用 Props 中的通用属性，内部使用

## protected-static-func

### setCursorForObj

```cpp
static void setCursorForObj(lv_obj_t *obj, CursorType type)
```

为任意 lv_obj_t 设置鼠标指针，供派生类内部对象使用
