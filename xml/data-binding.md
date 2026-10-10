---
title: 资源、数据绑定与命令
---

# 资源、数据绑定与命令

`XmlContext` 保存一个 XML 使用域的字符串资源、样式、binding、collection、菜单资源和命令。复制 `XmlContext` 会共享底层状态，布局重载后可继续使用同一个 context。

## XML 资源作用域

`String`、`Style` 和启用 SDL3 时的 `ContextMenu` 是资源元素，不创建 UI 对象。资源元素必须是组件的直接子元素，并且必须声明非空 `id`。

```xml
<VBox xmlns="urn:hiyui:ui" gap="8">
  <String id="title" value="播放列表"/>
  <Style id="section" bg="Surface" radius="8" padH="12" padV="8"
         shadowBlur="2" shadowColor="#000000" shadowOpacity="18"
         shadowBottom="true" shadowPlacement="Inset">
    <State name="Hovered" bg="SurfaceVariant"/>
  </Style>

  <Label text="{resource:title}"/>
  <HBox style="section">
    <Label text="内容"/>
  </HBox>
</VBox>
```

组件的直接资源对该组件的全部非资源子元素生效，声明顺序不影响引用。内层组件可以声明同名资源；内层声明覆盖外层声明。XML 作用域中没有对应名称时，查询继续使用 `XmlContext` 中的资源。同一作用域中的资源 `id` 跨资源类型保持唯一。

`String` 的 `value` 是 `{resource:name}` 表达式引用的文本。`Style` 的普通状态使用元素属性，其他状态使用 `State` 子元素。

| `Style` 属性 | 取值 |
|---|---|
| `bg`、`color`、`borderColor`、`shadowColor`、`gradientFrom`、`gradientTo`、`backdropTint` | 固定颜色或主题角色 |
| `fontSize` | 大于 0 的整数 |
| `radius`、`padH`、`padV`、`marginH`、`marginV`、`borderWidth`、`shadowBlur` | 大于等于 0 的整数 |
| `shadowOffsetX`、`shadowOffsetY` | 整数 |
| `lineHeight` | `0.5` 到 `4` 的数值 |
| `opacity`、`shadowOpacity`、`gradientFromOpacity`、`gradientToOpacity`、`gradientMainStop`、`gradientGradStop`、`backdropOpacity`、`backdropTintOpacity` | `0` 到 `255` |
| `backdropBlurRadius` | `0` 到 `254` |
| `shadowTop`、`shadowRight`、`shadowBottom`、`shadowLeft` | 布尔值 |
| `shadowPlacement` | `Outer` 或 `Inset` |
| `gradientDir` | `None`、`Vertical` 或 `Horizontal` |
| `transition` | 大于等于 0 的毫秒数 |

未声明四个阴影边缘属性时，阴影默认作用于全部边缘。声明其中任一属性后，四个属性共同决定生效边缘，未声明的边缘按 `false` 处理。

`State.name` 可取 `Hovered`、`Pressed`、`Focused`、`Checked` 或 `Disabled`，其余样式属性与 `Style` 相同，但 `State` 不支持 `backdropTint`、`backdropOpacity`、`backdropTintOpacity` 和 `backdropBlurRadius`。使用主题角色的颜色会随运行时主题切换重新解析。

C++ 也可以向 context 注册全局资源和样式：

```cpp
context.setResource("title", "设置");
context.setStyle("section", {
    .normal = {.radius = 8, .padH = 12, .padV = 8},
});
```

## 属性表达式

| 表达式 | 允许位置 | 结果 |
|---|---|---|
| `{resource:name}` | 普通组件属性 | 当前资源作用域中的字符串 |
| `{binding:name}` | 标记为 bindable 的属性、`commandParameter` | context 中的运行时值 |
| `{i18n:id\|source}` | 完整的可绑定字符串属性 | 当前语言的译文，缺失时按国际化回退规则解析 |
| `{collection:name}` | `Repeater.items` | 具名 collection |
| `{item:field}` | `ItemTemplate` 组件树 | 当前 collection 项的字段 |
| `{item:index}` | `ItemTemplate` 组件树 | 当前项的零基索引 |

resource、binding 和 item 表达式可以在字符串属性中组合：

```xml
<Label xmlns="urn:hiyui:ui"
       text="{resource:title} · 共 {binding:count} 项"/>
```

非字符串属性只接受一个完整表达式。例如 `value="{binding:volume}"` 有效，`value="1{binding:volume}"` 无效。字面量花括号使用 &#123;&#123; 和 &#125;&#125;。

资源与 item 表达式在组件创建时求值。binding 表达式保留订阅，任一引用值变化时重新计算整个属性。资源不存在会产生 `UnknownResource` 错误；binding 不存在会产生 `UnknownBinding` 警告，之后调用 `setBinding` 可以为已有订阅提供值。

## 国际化表达式

`{i18n:id|source}` 使用非空消息 ID 和源文案。加载布局前注册语言包；调用 `setLocale()` 后更新已绑定属性，组件销毁时解除订阅。

以下标签、按钮和输入占位文字使用国际化表达式。

```xml
<VBox xmlns="urn:hiyui:ui">
  <Label text="{i18n:app.title|设置}"/>
  <Button text="{i18n:app.save|保存}"/>
  <Input placeholder="{i18n:app.search|搜索}"/>
</VBox>
```

表达式必须占据整个可绑定字符串属性，不能与字面文本、其他表达式或嵌套花括号组合，不支持具名参数和复数。需要带参数的文案时，通过 C++ 或 C 的文案绑定接口设置。国际化表达式不能作为 `twoWay` 目标，也不能用于禁止绑定的资源属性。

将 XML 文件或所在目录加入 `target_link_i18n(app SOURCES ...)`，或传给 `scripts/i18n.py extract --sources`，可在创建页面前提取全部文案。语言包格式、嵌入与外置加载见 [国际化](/core/i18n)。

## 运行时 Binding

```cpp
context.setBinding("volume", "50");
context.setBinding("count", "3");
```

```xml
<VBox xmlns="urn:hiyui:ui">
  <Slider value="{binding:volume}"/>
  <Label text="音量 {binding:volume}，共 {binding:count} 项"/>
</VBox>
```

组件销毁后，对应订阅自动移除。组件字段或附加属性的 `XmlAttributeSpec.bindable` 决定是否允许 binding。通用可绑定属性为 `hidden`、`enabled`、`scrollable`、`opacity` 和 `flex`。

`updateBinding` 先验证全部有效目标。任一目标验证失败时不保存新值，也不调用 setter。验证通过后逐个应用，`targetCount` 是有效目标数，`updatedCount` 是成功应用数。`ApplyFailed` 表示 setter 拒绝了已经通过验证的值，已经更新的目标不会回滚。`setBinding` 返回该更新结果是否成功，`lastBindingUpdateResult` 返回最近一次同步更新的完整结果。

binding 更新期间再次调用 `setBinding` 或 `updateBinding` 时，请求按调用顺序排队。队列超过内部上限时产生 `BindingError`。

## 双向 Binding

`twoWay` 的值是当前组件中需要回写的属性名。目标属性必须是单个完整 binding 表达式，组件必须为其当前值注册 `valueKind` 和 `valueReader`。

```xml
<Slider xmlns="urn:hiyui:ui"
        value="{binding:volume}"
        twoWay="value"/>
```

组件产生值变化事件时，当前值写回 `volume`，同一 binding 的其他订阅随之更新。任一目标拒绝新值时，context 保留旧值，触发更新的组件恢复为 context 当前值；失败信息由 `lastBindingUpdateResult()` 返回。

`twoWay` 只指定一个属性。插值表达式、没有 value reader 的组件和非 bindable 属性不能作为双向目标。

## Collection 与 Repeater

collection 的每一项由具名字符串字段组成。字段名不能为空、不能重复，`index` 是保留名称。

```cpp
const XmlCollectionField first[] = {
    {"id", "track-01"}, {"title", "Night Drive"}};
const XmlCollectionField second[] = {
    {"id", "track-02"}, {"title", "After Rain"}};
const XmlCollectionItem songs[] = {
    {first, std::size(first)}, {second, std::size(second)}};

XmlCollectionUpdateResult result = context.setCollection("playlist", songs);
```

`Repeater` 使用 VBox 的布局属性，并要求一个 `items` 属性和一个 `ItemTemplate`。模板必须包含一个组件根节点。

```xml
<Repeater xmlns="urn:hiyui:ui"
          items="{collection:playlist}" gap="8" fill="width">
  <ItemTemplate>
    <Button text="{item:index}. {item:title}"
            commandParameter="{item:id}"
            onClick="openSong"/>
  </ItemTemplate>
</Repeater>
```

模板组件树不能声明 `id`，也不能嵌套 `Repeater`。`Repeater` 可以在 `ItemTemplate` 之前声明直接资源，这些资源对每个模板实例可见。collection 尚未注册时，Repeater 以空集合创建并产生 `UnknownBinding` 警告；之后设置同名 collection 会创建对应项。

| 方法 | 结果 |
|---|---|
| `setCollection` | 替换完整 collection |
| `appendCollectionItem` | 在末尾追加一项 |
| `insertCollectionItem` | 在指定索引插入一项 |
| `replaceCollectionItem` | 替换指定索引的一项 |
| `removeCollectionItem` | 删除指定索引的一项 |
| `clearCollection` | 清空 collection，不存在时创建空 collection |

每次更新先为全部有效 Repeater 创建候选内容。任一候选创建失败时，原 collection 和全部已有 Repeater 保持不变。`XmlCollectionUpdateResult.itemCount` 是成功后的项数，`updatedRepeaterCount` 是本次提交的 Repeater 数量。

## 命令与参数

`onClick`、`onPress`、`onLongPress` 和 `onChange` 属性引用具名命令。

```cpp
void openSong(const XmlCommandEvent &event, void *userData) {
  auto *state = static_cast<PlayerState *>(userData);
  if (event.value.kind == XmlValueKind::String)
    state->open(event.value.string);
}

XmlContextRegistration command =
    context.registerCommand("openSong", openSong, &state);
```

```xml
<Button xmlns="urn:hiyui:ui"
        text="打开"
        onClick="openSong"
        commandParameter="track-01"/>
```

未设置 `commandParameter` 时，事件 value 来自组件注册的 `valueReader`；未注册 reader 时为 `None`。设置参数后，事件 value 为 `String`。参数允许字符串插值以及 resource、binding 和 item 表达式，其中 binding 在事件触发时读取当前值。

未注册命令会产生 `UnknownHandler` 警告，并保留命令名。之后注册同名命令即可响应已有组件的事件。命令注销后，已有组件的后续事件不再调用该命令。

## 菜单资源

菜单 XML 仅在 `LV_USE_SDL3` 启用时可用。`ContextMenu` 是资源元素，可由任意组件的 `contextMenu` 属性或 `MenuBar` 顶层项引用。

```xml
<VBox xmlns="urn:hiyui:ui">
  <ContextMenu id="fileMenu" mode="Window">
    <Item text="打开" shortcut="Ctrl+O" onClick="onOpen"/>
    <Item separator="true"/>
    <Item text="退出" disabled="true"/>
  </ContextMenu>

  <MenuBar>
    <Item text="文件" contextMenu="fileMenu"/>
  </MenuBar>
  <Box contextMenu="fileMenu"/>
</VBox>
```

菜单项支持 `text`、`shortcut`、`iconCodepoint`、`separator`、`disabled`、`onClick` 和递归 `Item`。`ContextMenu.mode` 可取 `Inline` 或 `Window`。应用侧菜单可通过 `registerMenuResource` 注册，并使用相同的资源名引用。

## 整树替换

`XmlReloadHost` 在每次加载间复用构造时传入的 `XmlContext`。加载成功时提交候选树并销毁旧根树；加载失败时销毁候选树并保留当前树。

```cpp
XmlReloadHost host(parent, context);
host.reloadFromFile("ui/panel.xml");

context.updateBinding("volume", "75");
host.reloadFromFile("ui/panel.xml");
```

整树替换不保留组件实例状态。context 中的资源、样式、binding、collection、菜单资源和命令在成功替换后继续有效。

## 相关页面

- [XML 布局快速上手](/xml/quick-start)
- [自定义 XML 组件](/xml/custom-widget)
- [Schema 与离线校验](/xml/schema-tools)
- [C 绑定与 XML 注册](/xml/c-binding)
- [国际化](/core/i18n)
