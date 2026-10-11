---
title: Widget
---

# Widget

`Widget` 是所有组件的基类，提供生命周期、布局、样式、事件和查询接口。

## 生命周期

组件通过 `init()` 挂载到父组件，子组件由父级管理。包装器析构不删除组件；`release()` 解除包装器绑定，不改变父子关系。`destroy()` 立即使自身及子树的引用失效，实际释放在 UI 主循环中完成。

配置类链式方法（样式、尺寸、布局、事件、引用与提示）支持挂载前调用，挂载时按调用顺序应用；同一字段的 Props 先应用，挂载前的链式调用后应用，后应用者覆盖先应用者。动作类方法要求组件已挂载：`focus()`、`clean()`、`redraw()`、`moveToIndex()`、`scrollToX()/scrollToY()` 等在调试构建断言，发布构建无操作；`scrollByPx()`、`scrollToXPx()/scrollToYPx()`、`stopScroll()`、`scrollIntoView()` 和 `sendEvent()` 在未挂载或失效时静默无操作。查询类方法在未挂载时返回零值、空字符串或 `false`。

创建并设置标签的主题文字色。

```cpp
Label label({.text = "Status"});
label.init(parent);
label.textColor(ThemeRole::TextSecondary);
```

大多数组件同时提供 `init(lv_obj_t*)` 和 `init(Widget&)`。

## 基础节点

`initPrimitive(parent, kind)` 创建不附加组件主题的节点，可用于组合自定义组件。父组件必须有效，同一包装器只能初始化一次。

| `PrimitiveKind` 值 | 说明 |
| --- | --- |
| `Object` | 普通节点，也是默认值 |
| `Text` | 文本节点，可调用 `textContent()` 和 `textOverflow()` |
| `Pressable` | 可按压节点 |

以下代码创建带文字的可按压节点，并应用按钮主题。

```cpp
Widget control;
control.initPrimitive(parent, PrimitiveKind::Pressable);
control.themeStyle(WidgetType::Button).keyFocus();
Widget caption;
caption.initPrimitive(control, PrimitiveKind::Text);
caption.textContent("保存").center().clickable(false).eventBubble();
```

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `textContent(const char *)` | `Widget &` | 设置文本节点内容；`nullptr` 刷新当前文本，非文本节点无操作 |
| `textContent()` | `std::string` | 文本副本；非文本节点或失效对象返回空串 |
| `textOverflow(TextOverflow)` | `Widget &` | `Wrap` 换行，`Ellipsis` 单行省略，`Dots` 保留当前高度 |
| `bindText(const LocalizedText &, setter)` | `Widget &` | 复制翻译描述；更新时调用 `setter(Widget &, const char *)`，重复绑定替换 |
| `clearTextBinding()` | `Widget &` | 解除翻译绑定并保留当前文字 |
| `parent()`、`childAt(int)`、`screen()` | `Ref<Widget>` | 获取非拥有引用；不存在、越界或失效时返回空引用 |
| `topLayer()` | `Ref<Widget>` | 所属显示器的顶层节点，借用至显示器销毁；失效对象返回空引用 |
| `reparent(const Widget &)` | `Widget &` | 改挂父级；失效对象或祖先循环无操作 |
| `contains(const Widget &)` | `bool` | 是否包含指定组件，包括自身；失效对象返回 `false` |
| `isHidden()`、`isVisible()` | `bool` | 分别查询自身隐藏标志和包含祖先的实际可见性；失效对象返回 `false` |
| `floating(bool)`、`eventBubble(bool)` | `Widget &` | 分别设置是否脱离父级布局和是否向父级传播事件 |

## C 接口

包含 `<hiyui/c/widget.h>` 后，可通过以下接口创建和组合基础节点。节点句柄由父级拥有；需要跨回调保存时使用 C 引用接口。

| C++ 操作 | C 函数 |
| --- | --- |
| `initPrimitive()` | `hiyui_primitive_create()` |
| `textContent()`、`textOverflow()` | `hiyui_wdg_set_text_content()`、`hiyui_wdg_get_text_content()`、`hiyui_wdg_text_overflow()` |
| `bindText()`、`clearTextBinding()` | `hiyui_wdg_bind_text()`、`hiyui_wdg_clear_text_binding()` |
| `parent()`、`childAt()`、`reparent()` | `hiyui_wdg_parent()`、`hiyui_wdg_child_at()`、`hiyui_wdg_reparent()` |
| `themeStyle(WidgetType)` | `hiyui_wdg_theme_style()` |
| `themeStyle(provider)` | `hiyui_wdg_bind_theme_style()` |
| `style(Style)`、`style(StyleSet)` | `hiyui_wdg_apply_style_spec()`、`hiyui_wdg_apply_style_spec_set()` |
| `Ref::destroy()` | `hiyui_ref_destroy_target()` |
| `scrollMode()`、`scrollbars()`、`scrollSnap()` | `hiyui_wdg_scroll_mode()`、`hiyui_wdg_scrollbars()`、`hiyui_wdg_scroll_snap()` |
| `snapChild()`、`scrollOne()`、`scrollOnFocus()`、`scrollChain()` | `hiyui_wdg_snap_child()`、`hiyui_wdg_scroll_one()`、`hiyui_wdg_scroll_on_focus()`、`hiyui_wdg_scroll_chain()` |
| `scrollToXPx()`、`scrollToYPx()`、`scrollByPx()` | `hiyui_wdg_scroll_to_x_px()`、`hiyui_wdg_scroll_to_y_px()`、`hiyui_wdg_scroll_by_px()` |
| `stopScroll()`、`scrollIntoView()`、`scrollMetrics()` | `hiyui_wdg_stop_scroll()`、`hiyui_wdg_scroll_into_view()`、`hiyui_wdg_get_scroll_metrics()` |
| `posPx()`、`positionPx()`、`translatePx()`、`translationPx()` | `hiyui_wdg_pos_px()`、`hiyui_wdg_get_position_px()`、`hiyui_wdg_translate_px()`、`hiyui_wdg_get_translation_px()` |
| `minimumSizePx()`、`clipCorner()`、`overflowVisible()` | `hiyui_wdg_minimum_size_px()`、`hiyui_wdg_clip_corner()`、`hiyui_wdg_overflow_visible()` |
| `topLayer()`、`textAlign()`、`imageScale()` | `hiyui_wdg_top_layer()`、`hiyui_wdg_text_align()`、`hiyui_wdg_image_scale()` |
| `layoutEnvironment()`、`onEnvironmentChange()` | `hiyui_wdg_layout_environment()`、`hiyui_wdg_on_environment_change()` |
| `maxWidth()`、`maxHeight()` | `hiyui_wdg_max_width()`、`hiyui_wdg_max_height()` |
| `layoutRules()`、`clearLayoutRules()` | `hiyui_wdg_layout_rules()`、`hiyui_wdg_clear_layout_rules()` |

完整参数与返回值见 [Widget C 参考](/bindings/c/widget.h)。

## 布局

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `pos(x, y)` | `Widget &` | 设置逻辑像素坐标 |
| `size(w, h)`、`width(w)`、`height(h)` | `Widget &` | 设置逻辑像素尺寸；对应轴传 `HIYUI_AUTO` 时按内容计算 |
| `fill()` | `Widget &` | 宽高均为父内容区的 100% |
| `fillWidth()`、`fillHeight()` | `Widget &` | 对应轴为父内容区的 100% |
| `flex(grow)` | `Widget &` | 按 grow 比例分配父 Flex 容器主轴的剩余空间；0 不参与分配 |
| `align(anchor, x, y)` | `Widget &` | 相对父对象定位 |
| `hidden(bool)` | `Widget &` | 设置可见性 |
| `enabled(bool)` | `Widget &` | 设置交互状态 |
| `flow(FlexFlow)`、`gap(int)` | `Widget &` | 设置 Flex 方向及逻辑像素间距 |
| `minimumSize(w, h)` | `Widget &` | 设置逻辑像素最小尺寸；`0` 表示不限制 |
| `maxWidth(w)`、`maxHeight(h)` | `Widget &` | 设置最大逻辑尺寸；非负值包含零上限，`HIYUI_AUTO` 移除局部上限，其他负值无操作 |
| `sizePx(w, h)`、`widthPx(w)`、`heightPx(h)` | `Widget &` | 设置物理像素尺寸 |
| `minimumSizePx(w, h)` | `Widget &` | 设置物理像素最小尺寸；`0` 表示不限制 |
| `maxWidthPx(w)`、`maxHeightPx(h)` | `Widget &` | 设置物理像素最大尺寸；`HIYUI_AUTO` 解除限制 |
| `layoutRules(rules)`、`layoutRules(host, rules)` | `Widget &` | 按父容器或指定祖先的内容逻辑尺寸应用一组规则；配置和数组立即复制 |
| `clearLayoutRules()` | `Widget &` | 恢复仍受控字段的 base 并移除规则；重复调用无操作 |
| `posPx(x, y)`、`xPx(x)`、`yPx(y)` | `Widget &` | 设置相对父内容原点的物理像素坐标 |
| `positionPx()` | `Point` | 不包含滚动与平移的物理像素位置；失效对象返回零值 |
| `translatePx(x, y)`、`translationPx()` | `Widget &` / `Point` | 设置或读取不参与布局的物理像素平移 |
| `clipCorner(bool = true)` | `Widget &` | 按圆角裁剪子节点 |
| `overflowVisible(bool = true)` | `Widget &` | 允许子节点绘制到自身边界外 |
| `layoutMetrics()` | `LayoutMetrics` | 查询布局约束，长度为物理像素；百分比尺寸返回百分数及对应标志 |
| `updateLayout()` | `Widget &` | 同步完成布局；事件回调可能删除组件 |
| `invalidateLayout()` | `Widget &` | 请求下一次布局更新，重复请求合并 |

`FlexFlow` 支持以下方向。

| 值 | 说明 |
| --- | --- |
| `Row`、`Column` | 横向、纵向排列 |
| `RowWrap`、`ColumnWrap` | 横向、纵向排列并允许换行 |
| `RowReverse`、`ColumnReverse` | 反向横排、反向纵排 |

内容尺寸和默认值的哨兵定义见 [常量与哨兵值](/core/constants)。

`maxWidth()` 和 `maxHeight()` 支持挂载前配置，挂载时使用当前 DPI；后续随运行时 DPI 更新。逻辑与物理最大尺寸入口写入同一约束，同轴后写值覆盖先写值，另一轴不变；已请求销毁的组件无操作。C 对应入口接受相同哨兵，NULL 目标无操作。

最小尺寸大于最大尺寸时，布局以最小尺寸为准。最大尺寸不会自动开启滚动；最小尺寸超过父内容区时允许溢出，由应用指定的滚动容器处理。尺寸组合见 [布局](/widgets/layout)。

规则支持挂载前配置，非法描述保持原组。显式布局 setter 和样式内边距赋值解除所写字段的控制；后续 clear 或替换不覆盖这些字段。宿主约束、字段默认值、匹配顺序和 C 调用见 [容器布局规则](/core/responsive#容器布局规则)。

## 滚动

允许滚动的轴与滚动条显示方式分别设置。以下方法的动画参数默认是 `false`，滚动偏移与距离均为物理像素。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `scrollMode(ScrollMode)` | `Widget &` | `Off` 禁止滚动，其他值控制允许滚动的轴 |
| `scrollbars(ScrollbarMode)` | `Widget &` | 设置滚动条显示方式 |
| `scrollSnap(Direction, ScrollSnap)` | `Widget &` | 设置水平或垂直方向的子项吸附方式 |
| `snapChild(bool = true)` | `Widget &` | 允许当前节点作为父级滚动吸附目标 |
| `scrollOne(bool = true)` | `Widget &` | 每次拖动至多跨越一个吸附子项 |
| `scrollOnFocus(bool = true)` | `Widget &` | 获得焦点时滚动到可见区域 |
| `scrollChain(bool = true)` | `Widget &` | 在滚动边界向祖先传递滚动 |
| `pressLock(bool = true)` | `Widget &` | 指针移出后保持按压跟踪 |
| `scrollElastic(bool = true)`、`scrollMomentum(bool = true)` | `Widget &` | 分别设置弹性越界和惯性滚动 |
| `scrollToXPx(int, bool)`、`scrollToYPx(int, bool)` | `Widget &` | 滚动至指定偏移；未挂载或失效时无操作 |
| `scrollByPx(dx, dy, bool)` | `Widget &` | 增加偏移，正值使视口向右下移动 |
| `stopScroll()` | `Widget &` | 停止当前滚动动画 |
| `scrollIntoView(bool)` | `Widget &` | 滚动各级祖先容器，使当前节点可见 |
| `scrollMetrics()` | `ScrollMetrics` | `x`、`y` 为偏移，`left`、`top`、`right`、`bottom` 为四边剩余距离；弹性越界时距离可为负，失效对象各字段为零 |

滚动条与吸附方式的可选值如下。

| 值 | 说明 |
| --- | --- |
| `ScrollbarMode::Off` | 隐藏滚动条 |
| `ScrollbarMode::Auto` | 有溢出时显示 |
| `ScrollbarMode::Active` | 滚动期间显示 |
| `ScrollbarMode::Always` | 始终显示 |
| `ScrollSnap::None` | 不吸附 |
| `ScrollSnap::Start`、`ScrollSnap::Center`、`ScrollSnap::End` | 吸附到视口起点、中间或终点 |

以下代码使横向列表按子项中心吸附。

```cpp
track.scrollMode(ScrollMode::Horizontal).scrollbars(ScrollbarMode::Off);
track.scrollSnap(Direction::Horizontal, ScrollSnap::Center).scrollOne();
item.snapChild();
item.scrollIntoView(false);
```

## 样式

`style()` 接收 `Style` 或 `StyleSet`。`bg()`、`textColor()`、`fontSize()`、`radius()`、`padding()`、`margin()` 和边框方法用于单项修改。

固定颜色使用 `uint32_t` RGB 值。响应主题变化的颜色使用 `ThemeRole` 重载。

颜色方法接受 `HIYUI_DEFAULT` 恢复主题默认。`fontSize()`、`radius()`、`padding()`、`margin()`、`opacity()`、`borderWidth()` 和单边内边距/外边距方法接受 `HIYUI_DEFAULT_INT` 恢复组件默认，恢复按当前 DPI 重算。哨兵值定义见 [常量与哨兵值](/core/constants)。

`themeStyle(WidgetType)` 应在显式样式之前调用一次。`themeStyle(provider)` 追加默认样式提供者；提供者返回 `StyleSet`，立即应用并随主题和 DPI 更新。显式 `style()` 和单项样式覆盖默认样式。提供者返回的图片及路径须保持有效，直到图片被替换或组件销毁。

为基础节点设置随主题变化的背景和文字色。

```cpp
control.themeStyle([] {
  StyleSet styles;
  styles.normal.bgFill.color = currentTheme().primary();
  styles.normal.color = currentTheme().onPrimary();
  return styles;
});
```

`state(StyleState, bool)` 设置独立交互状态；`Normal` 无操作。状态样式字段见 [StyleSet](/styling/style-set)。

`textAlign(Align)` 接受 `Start`、`Center`、`End`，设置文字水平对齐。`imageScale(int)` 对图片节点进行居中缩放，`256` 为原始大小；非图片节点无操作。

## 事件

快捷方法包括 `onClick()`、`onPress()`、`onLongPress()` 和 `onChange()`。其他事件通过 `on(EventCode, callback)` 注册，重复绑定追加处理器。

`onEnvironmentChange(callback, handle = nullptr)` 在有效布局完成后通知首个环境快照及后续变化，相同快照不重复通知。回调接受 `const LayoutEnvironment &` 或无参数，支持挂载前绑定，组件销毁时清理；订阅与窗口区域契约见 [响应式布局](/core/responsive#环境通知)。

## 查询

`raw()` 返回底层指针。尺寸和内容区查询依赖布局结果，必要时先调用 `updateLayout()`。`textColor()` 返回当前生效文字色，失效对象返回 0。

`layoutEnvironment(widget)` 查询内容逻辑尺寸、缩放、输入能力和所属窗口区域，不强制同步布局。未挂载或已请求销毁时返回默认快照；无窗口宿主时仍可有有效局部尺寸。字段和单位见 [环境查询](/core/responsive#环境查询)。

`focusedWidget()` 获取默认输入组中的焦点引用，无焦点时返回空引用。`hasFocusGroup()` 查询组件是否属于焦点组，`focusNext(previous)` 在所属组内移动焦点。`windowFocused()` 查询所属桌面窗口的键盘焦点，非桌面平台返回 `false`。

完整成员见 [Widget API](/api-reference/widget/widget)。

## 提示与无障碍文案

Windows、macOS 和 Linux 的 SDL 应用可向系统无障碍服务提供组件信息，macOS 支持 VoiceOver，Linux 通过 AT-SPI2 支持 Orca 等读屏器。平台范围与构建开关见 [无障碍构建](/guide/quick-start#无障碍构建)。

包含 `<hiyui/accessibility/accessibility.h>` 后，可调用 `accessibilitySupported()` 查询当前构建是否包含系统无障碍后端。返回 `true` 不表示屏幕阅读器已开启。

以下方法同时接受普通 UTF-8 字符串与 `LocalizedText`。后者由 [`tr()` 或 `trn()`](/core/i18n) 创建，切换语言时自动更新。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `tooltip(const char *)`、`tooltip(const LocalizedText &)` | `Widget &` | 设置悬停提示；普通字符串取消翻译绑定 |
| `accessibilityName(const char *)`、`accessibilityName(const LocalizedText &)` | `Widget &` | 设置无障碍名称；普通字符串取消绑定，`nullptr` 清除显式值 |
| `accessibilityDescription(const char *)`、`accessibilityDescription(const LocalizedText &)` | `Widget &` | 设置无障碍说明；普通字符串取消绑定，`nullptr` 清除显式值 |

绑定复制文案和参数，组件销毁时自动解除。派生组件上的链式调用返回对应组件类型。

`accessibilityRole(role, group)` 设置无障碍角色及选择组，保留显式名称。`accessibilityChanged()` 通知系统重新读取内容；无障碍后端未启用时无操作。

为保存按钮设置随语言变化的提示和无障碍名称。

```cpp
save.tooltip(tr("app.save.hint", "保存当前文件"))
    .accessibilityName(tr("app.save", "保存"));
```

C API 中，`<hiyui/c/widget.h>` 提供无障碍配置、角色及更新通知；`<hiyui/c/i18n.h>` 提供普通文案和本地化文案接口。

| C++ 操作 | C 函数 |
| --- | --- |
| `accessibility()` | `hiyui_wdg_accessibility()` |
| `accessibilityRole()` | `hiyui_wdg_accessibility_role()` |
| `accessibilityChanged()` | `hiyui_wdg_accessibility_changed()` |
| `accessibilityName(const char *)` | `hiyui_wdg_set_accessibility_name()` |
| `accessibilityDescription(const char *)` | `hiyui_wdg_set_accessibility_description()` |
| `accessibilityName(const LocalizedText &)` | `hiyui_wdg_bind_accessibility_name()` |
| `accessibilityDescription(const LocalizedText &)` | `hiyui_wdg_bind_accessibility_description()` |
