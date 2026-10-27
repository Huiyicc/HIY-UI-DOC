---
title: 基础组件
---

# 基础组件

## 文本与图像

| 组件 | 用途 | 常用字段 |
| --- | --- | --- |
| `Label` | 文本 | `text`, `fontSize`, `textColor`, `width`, `ellipsis`, `selectable` |
| `Icon` | Material Symbols 图标 | `codepoint`, `size`, `style`, `animated` |
| `Image` | 文件或图像描述符 | `src`, `width`, `height`, `fit`, `opacity` |
| `Avatar` | 图片、SVG 或文字头像 | `src`, `text`, `size`, `circle` |

> `Label` 未设置 `textColor` 时使用主题文本色并随主题切换更新；显式设置后颜色不随主题切换变化。`selectable` 仅桌面 SDL 后端生效。

在同一行排列图标与标签。

```cpp
HBox row({.gap = 8});
row.init(parent);

Icon({.codepoint = HIYUI_ICON_INFO, .size = 20}).init(row);
Label({.text = "Connection restored"}).init(row);
```

图标字体随库内置。文件路径源在设置时复制；图片描述符源的像素须在替换源或销毁组件前保持有效。

`Icon::color()` 设置固定颜色或主题角色。`colorFrom(Widget &source)` 跟随已挂载组件当前文字色，响应状态与主题变化；重复调用替换来源，来源销毁后保持最后颜色。`rendered()` 查询图像是否可显示，未挂载或渲染不可用时返回 `false`。C 接口为 `hiyui_icon_color_from()` 和 `hiyui_icon_rendered()`。

`Icon` 的布局盒为 `size` 见方，图标内容居中。

`animated` 默认 `true`。`codepoint()` 与 `iconStyle()` 切换时，两个图标的矢量轮廓做对齐插值，图标形状连续变形到目标；`animated(false)`、主题动画关闭或轮廓不可用（无 FreeType 的平台）时直接切换。流变中再次切换从当前形状接续。`iconSize()`、颜色与透明度变化不参与流变。C 接口为 `hiyui_icon_set_animated()`。

播放与暂停图标之间流变切换。

```cpp
Icon state({.codepoint = HIYUI_ICON_PLAY_ARROW, .size = 24});
state.init(parent).color(ThemeRole::Primary).clickable();
bool playing = true;
state.onClick([&] {
  playing = !playing;
  state.codepoint(playing ? HIYUI_ICON_PLAY_ARROW : HIYUI_ICON_PAUSE);
});
```

## 命令与选择

| 组件 | 常用方法 | 事件 |
| --- | --- | --- |
| `Button` | `text()`, `icon()` | `onClick()` |
| `Checkbox` | `checked()`, `isChecked()` | `onChange()` |
| `Radio` | `checked()`, `isChecked()` | `onChange()` |
| `Switch` | `checked()`, `isChecked()` | `onChange()` |
| `Slider` | `value()`, `range()` | `onChange()` |

`Button::icon(uint32_t)` 设置字体图标并清除图片源；`icon(const void *)` 设置图片源并清除字体码点。传入码点 0 或空图片源会移除图标。C 接口为 `hiyui_button_set_icon()` 和 `hiyui_button_set_icon_src()`。

绑定开关值变化事件。

```cpp
Switch notifications({.checked = true});
notifications.init(parent);
notifications.onChange([&] {
  setNotifications(notifications.isChecked());
});
```

## 输入

`Input` 用于单行或多行纯文本编辑。桌面 SDL 后端支持附加选区、多光标输入和矩形选择。

### 最小示例

```cpp
Input input({
    .placeholder = "Search",
    .width = 280,
    .multiline = false,
    .multiCursor = true,
});
input.init(parent);
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | 初始 UTF-8 文本。 |
| `placeholder` | `const char *` | `nullptr` | 内容为空时显示的占位文本。 |
| `password` | `bool` | `false` | 显示密码掩码并禁用撤销重做。 |
| `maxLength` | `int` | `0` | 最大字符数；`0` 表示不限制。 |
| `width` | `int` | `200` | 宽度，单位为逻辑像素。 |
| `height` | `int` | [`HIYUI_AUTO`](/core/constants) | 高度；自动值按字体和样式计算。 |
| `multiline` | `bool` | `false` | 是否允许换行。 |
| `horizontalScroll` | `bool` | `false` | 多行模式下启用横向滚动并关闭自动折行。 |
| `bg` | `uint32_t` | [`HIYUI_DEFAULT`](/core/constants) | 背景色。 |
| `textColor` | `uint32_t` | [`HIYUI_DEFAULT`](/core/constants) | 文本颜色。 |
| `placeholderColor` | `uint32_t` | [`HIYUI_DEFAULT`](/core/constants) | 占位文本颜色。 |
| `fontSize` | `int` | `0` | 字体大小；`0` 使用主题字体。 |
| `radius` | `uint32_t` | [`HIYUI_DEFAULT`](/core/constants) | 圆角半径。 |
| `borderless` | `bool` | `false` | 使用透明背景和无边框样式。 |
| `maxUndoSteps` | `int` | `50` | 最大撤销步骤数；`0` 禁用撤销重做。 |
| `multiCursor` | `bool` | `false` | 是否允许附加选区和多光标输入；仅桌面 SDL 后端生效。 |
| `readOnly` | `bool` | `false` | 禁止编辑，保留选择、复制和滚动；程序调用仍可更新内容。 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `text(const char *)`、`text(const std::string &)` | `Input &` | 替换当前内容。 |
| `text() const` | `std::string` | 获取当前内容。 |
| `placeholder(const char *)` | `Input &` | 设置占位文本并取消该属性的翻译绑定。 |
| `placeholder(const LocalizedText &)` | `Input &` | 绑定随语言更新的占位文本，保留输入内容。 |
| `passwordMode(bool)` | `Input &` | 切换密码模式。 |
| `multiline(bool)` | `Input &` | 切换单行和多行模式。 |
| `horizontalScroll(bool)` | `Input &` | 设置多行横向滚动和自动折行行为。 |
| `clear()` | `Input &` | 清空内容。 |
| `undo()`、`redo()` | `bool` | 撤销或重做一次编辑。 |
| `canUndo()`、`canRedo()` | `bool` | 查询是否存在对应的编辑历史。 |
| `multiCursor(bool)` | `Input &` | 启用或禁用附加选区和多光标输入。 |
| `multiCursorModifier(InputMultiCursorModifier)` | `Input &` | 设置添加多光标时使用的鼠标修饰键。 |
| `readOnly(bool)`、`isReadOnly()` | `Input &`、`bool` | 切换或查询只读状态；只读时撤销重做返回 `false`。 |
| `selection()`、`selections()` | `InputSelection`、`std::vector<InputSelection>` | 获取主选区或全部选区，位置为 UTF-8 字节偏移。 |
| `addSelection(InputSelection)` | `Input &` | 添加选区；多光标关闭时替换主选区。 |
| `clearAdditionalSelections()` | `Input &` | 删除附加选区并保留主选区。 |
| `selectAll()`、`clearSelection()` | `Input &` | 选择全部内容或折叠主选区。 |
| `selectedText()` | `std::string` | 获取主选区文本。 |
| `insertText(const std::string &)` | `Input &` | 替换选中内容并插入文本。 |
| `cursorPos() const`、`cursorPos(int32_t)` | `int32_t`、`Input &` | 获取或设置主光标的 UTF-8 字节偏移。 |

多光标默认使用 `Alt`/`Option` 加左键点击添加光标，使用 `Shift+Alt`/`Shift+Option` 加左键拖动创建矩形选择。设置 `InputMultiCursorModifier::Primary` 后，添加光标改用 Windows/Linux 的 `Ctrl` 或 macOS 的 `Cmd`。非桌面后端忽略多光标配置，`selections()` 返回主选区。

### FloatLabelInput

`FloatLabelInput` 在 `Input` 上提供 outlined 边框和浮动标签。标签在输入框为空且未聚焦时显示在输入区域内；聚焦或有内容时移动到左上方并缩小。

#### 头文件

`<hiyui/widget/float_label_input.h>`

#### 最小示例

```cpp
FloatLabelInput account({
    .label = "Account",
    .input = {.width = 280},
});
account.init(parent);
```

#### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `label` | `const char *` | `nullptr` | 浮动标签文本；创建时为空则使用 `input.placeholder`。 |
| `input` | `InputProps` | `{}` | 内部输入框属性；内部占位文本由浮动标签替代。 |
| `animated` | `bool` | `true` | 是否启用标签位置和缩放动画；主题动画关闭时立即切换。 |

#### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `input()` | `Input &` | 获取内部输入框，生命周期与当前组件一致。 |
| `text(const char *)`、`text(const std::string &)` | `FloatLabelInput &` | 替换当前内容。 |
| `text() const` | `std::string` | 获取当前内容。 |
| `label(const char *)` | `FloatLabelInput &` | 修改标签并取消翻译绑定；空值隐藏标签。 |
| `label(const LocalizedText &)` | `FloatLabelInput &` | 绑定随语言更新的浮动标签，保留输入内容。 |
| `clear()` | `FloatLabelInput &` | 清空内容。 |
| `focus()`、`addToGroup()` | `FloatLabelInput &` | 聚焦或加入内部输入框的默认输入组。 |
| `enabled(bool)` | `FloatLabelInput &` | 设置内部输入框和外层组件是否可交互。 |
| `on(EventCode, F)` | `FloatLabelInput &` | 绑定事件；`ValueChanged` 的目标为当前组件，其他事件的目标为内部输入框。 |
| `onClick()`、`onChange()` | `FloatLabelInput &` | `onClick` 绑定内部输入框点击；`onChange` 绑定文本变化。 |

内部输入框的其他编辑、选区和撤销方法通过 `input()` 获取。

`input.borderless = true` 时保留无边框模式，默认配置使用 outlined 边框。

## 状态显示

`Progress`、`Spin`、`Spectrum` 和 `Toast` 用于进度、加载、颜色范围和短时通知。组件的完整 Props 与事件签名见 [API 参考](/api-reference/)。

## 国际化文案

静态文案可继续通过 Props 设置。以下方法绑定 `tr()` 或 `trn()` 返回的文案描述，普通字符串重载取消对应绑定。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `Label::text(const LocalizedText &)` | `Label &` | 绑定标签文字 |
| `Button::text(const LocalizedText &)` | `Button &` | 绑定按钮文字 |
| `Checkbox::text(const LocalizedText &)` | `Checkbox &` | 绑定复选框文字，保留选中状态 |
| `Radio::text(const LocalizedText &)` | `Radio &` | 绑定单选框文字，保留选中状态 |
| `Progress::text(const LocalizedText &)` | `Progress &` | 绑定进度文字，保留进度值 |

以下按钮切换语言后更新显示文案。

```cpp
Button save;
save.init(parent);
save.text(tr("app.save", "保存"));
```

具名参数、复数和语言包配置见 [国际化](/core/i18n)。
