# 无障碍

`AccessibilityRole` 描述组件对系统无障碍服务提供的语义，`AccessibilityProps` 覆盖组件自动提供的无障碍信息。组件在 `init()` 时自动挂接角色与名称来源，应用代码为图标按钮等无文本控件补充显式名称。

## 头文件

```cpp
#include <hiyui/accessibility/accessibility.h>
```

## 平台后端

| 平台与后端 | 默认值 | 系统服务 |
| --- | --- | --- |
| Windows + SDL | `ON` | UI Automation，讲述人与 NVDA |
| macOS + SDL | `ON` | NSAccessibility，VoiceOver |
| Linux + SDL | `ON` | AT-SPI2 D-Bus，Orca |
| 其他组合 | `OFF` | 无系统后端，开启时 CMake 报错 |

`accessibilitySupported()` 返回当前构建是否包含系统无障碍后端，返回 `true` 不表示读屏器已开启。

## 角色表

| 值 | 语义 | 自动挂接的组件 |
| --- | --- | --- |
| `Window` | 窗口根节点 | 每个窗口 |
| `Group` | 语义容器 | Box、Card、WindowFrame、Menu 子菜单等容器 |
| `Text` | 静态文本 | Label、Terminal、RichInput |
| `Button` | 可激活按钮 | Button、ToolBar 按钮、TitleBar 窗口按钮 |
| `Checkbox` | 复选框 | Checkbox |
| `Radio` | 单选项 | Radio、Segmented 选项 |
| `Switch` | 开关 | Switch |
| `Slider` | 滑杆 | Slider |
| `Progress` | 进度指示 | Progress |
| `Edit` | 文本输入 | Input、FloatLabelInput |
| `ComboBox` | 下拉选择，支持展开与收起动作 | Dropdown 及其弹出选项 |
| `Tab` | 页签，携带选中状态 | Tabs 与 TabsEx 的页签 |
| `MenuItem` | 菜单项，父项携带展开状态 | Menu、MenuBar、ContextMenu |
| `TreeItem` | 树节点，携带展开与选中状态 | Tree |
| `ListItem` | 列表行，携带选中状态 | List |
| `Image` | 图片或图形，无文本语义 | Image、Icon、Avatar、Chart 系、Spin |
| `Dialog` | 对话框面板 | MessageBox、ConfirmDialog、PopupPanel |
| `Table` | 表格容器，携带行列数与列标题 | Table |
| `Cell` | 表格行，携带行号与整行文本 | Table 数据行 |

## Props 参数表

`AccessibilityProps` 字段见下表，经 `accessibility(props)` 链式方法应用。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `const char *` | `nullptr` | 显式名称；`nullptr` 使用关联标签或组件自身名称 |
| `description` | `const char *` | `nullptr` | 补充说明；`nullptr` 清除显式说明 |
| `automationId` | `const char *` | `nullptr` | 应用指定的标识，不随显示语言变化 |
| `decorative` | `bool` | `false` | 省略自身语义，保留独立子组件的语义 |

## 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `accessibilityName(const char *)` / `accessibilityName(const LocalizedText &)` | `Widget &` | 设置无障碍名称；`LocalizedText` 随语言更新 |
| `accessibilityDescription(const char *)` / `accessibilityDescription(const LocalizedText &)` | `Widget &` | 设置无障碍说明 |
| `accessibilityRole(role, group)` | `Widget &` | 覆盖角色及选择组，保留显式名称 |
| `accessibilityChanged()` | `Widget &` | 通知系统重新读取内容 |
| `labelledBy(ref)` | `Widget &` | 使用引用目标的文本作为名称来源 |

方法在未启用系统后端或组件未初始化时无操作；绑定复制文案，组件销毁时自动解除。

## 最小示例

为图标按钮设置随语言变化的无障碍名称。

```cpp
Button({.iconCodepoint = HIYUI_ICON_SETTINGS})
    .init(bar)
    .accessibilityName(tr("app.settings", "设置"))
    .onClick(openSettings);
```

以另一个组件的文本作为名称来源。

```cpp
Label label;
label.init(box).text(tr("app.username", "用户名"));
Input input;
input.init(box).labelledBy(label.ref());
```

## 行为细节

- 展开类动作：Dropdown、Menu 父项与 Tree 节点支持读屏器触发展开与收起；Tabs、List、Table 行与 Tree 节点支持选择动作，选择结果通过状态变化事件播报。
- 表格：Table 容器向读屏器提供行列数、列标题与行选择接口；单元格为自绘内容，读屏器按行导航并播报整行文本。
- Linux：角色名称与 `GetLocale` 跟随 `setLocale()` 设置的语言；组件激活时发出状态事件供读屏器播报。
- 嵌入式与其他后端不包含系统无障碍实现，`accessibilitySupported()` 返回 `false`，全部方法为无操作。

## 相关页面

- [Widget 提示与无障碍文案](/core/widget#提示与无障碍文案)
- [无障碍构建](/guide/quick-start#无障碍构建)
- [国际化](/core/i18n)
