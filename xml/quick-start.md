---
title: XML 布局快速上手
---

# XML 布局快速上手

`XmlLayout` 在一次同步调用中解析 XML、创建组件树并将根组件挂载到父组件。所有加载操作必须在 Hiy-UI UI 线程调用。

## Namespace

Hiy-UI 内置组件使用 namespace URI `urn:hiyui:ui`。内置组件文档通常将该 URI 声明为默认 namespace。

```xml
<VBox xmlns="urn:hiyui:ui" padding="16" gap="8">
  <Label text="{resource:title}"/>
  <Button text="关闭" onClick="onClose"/>
</VBox>
```

XML prefix 只在当前文档内充当 URI 别名。组件查找使用 namespace URI 与 local name，不使用 prefix 字符串作为模块身份。

## 加载入口

| 方法 | 输入 |
|---|---|
| `XmlLayout::fromFile` | 文件路径；设置 `sourceResolver` 时经其读取 |
| `XmlLayout::fromString` | 内存字符串 |
| `XmlLayout::fromReader` | 同步读取回调 |

三个入口都接受 `Widget &` 和 `Ref<T>` 父组件。C ABI 的对应入口接受 `hiyui_widget_t *`，最终进入相同的原生对象加载路径。

```cpp
XmlContext context;
context.setResource("title", "设置");
context.registerCommand("onClose", onClose, userData);

XmlLayout layout = XmlLayout::fromFile(parent, "ui/panel.xml", context);
```

`XmlLayout` 观察已挂载组件树，不拥有该组件树。销毁 `XmlLayout` 不销毁组件；组件销毁后，按 ID 查询返回空引用。

## 事务重载

`XmlReloadHost` 固定挂载父组件并拥有当前提交的 XML 根树。文件、字符串和 reader 三个重载入口都强制使用严格模式。

```cpp
XmlReloadHost host(parent, context);
bool committed = host.reloadFromString(
    R"(<Label xmlns="urn:hiyui:ui" text="预览"/>)");
```

加载成功时，新根树替换旧根树并保持旧根树的同级索引。加载失败时，候选树被销毁，当前根树保持不变。`diagnostics()`、`sourceId()` 和 `dependencies()` 描述最近一次加载尝试，`layout()` 和 `get<T>()` 查询当前已提交布局。`reset()` 销毁当前根树并保留构造时传入的 `XmlContext`。

## ID 与类型

```cpp
Ref<Label> title = layout.get<Label>("title");
lv_obj_t *raw = layout.getRaw("title");
```

`get<T>` 在 ID 不存在、对象已销毁或注册类型不匹配时返回空引用。`getRaw` 不检查组件类型。

## 诊断与回滚

`diagnostics()` 返回结构化诊断，每项包含 `source`、`line`、`column`、`code`、`element`、`attribute` 和 `message`。`hasErrors()` 表示结果中是否存在错误级诊断。

`XmlLoadOptions.strict` 默认为 `true`。严格模式下，任一错误会销毁本次创建的完整根组件树并清除 ID；非严格模式保留已创建的部分组件。`XmlWindowLayout` 始终按整树事务处理窗口内容，窗口属性或内容出现错误时不返回候选窗口。

## 资源限制

`XmlLoadOptions` 控制错误处理和资源限制，三个加载入口都接受该参数：

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `strict` | `bool` | `true` | 普通布局出错时销毁本次组件树 |
| `maxDepth` | `size_t` | `64` | 最大元素嵌套深度，根元素深度为 1 |
| `maxNodes` | `size_t` | `4096` | 最大元素数量，包含 Include 展开内容和 item 节点 |
| `maxBytes` | `size_t` | `4194304` | 根文档与全部 Include 的累计最大字节数 |
| `maxIncludeDepth` | `size_t` | `32` | 最大 Include 嵌套层数 |
| `sourceId` | `const char *` | `nullptr` | 内存或 reader 根文档的规范 source ID |
| `sourceResolver` | `XmlSourceResolver` | `{}` | 同步 source resolver；为空时使用宿主文件 resolver |

## Include

`Include` 属于 `urn:hiyui:ui`，路径属性名为 `src`。

```xml
<VBox xmlns="urn:hiyui:ui">
  <Include src="parts/actions.xml"/>
</VBox>
```

每个 Include 目标都是独立 XML 文档，不继承引用方的默认 namespace 或 prefix。目标文档必须自行声明所用 namespace。

```xml
<HBox xmlns="urn:hiyui:ui" gap="8">
  <Button text="确定"/>
  <Button text="取消"/>
</HBox>
```

Include 目标的根元素也可以是资源元素。此时 `Include` 必须是组件的直接子元素，资源进入该组件的局部资源作用域。

```xml
<VBox xmlns="urn:hiyui:ui">
  <Include src="parts/strings.xml"/>
  <Label text="{resource:includedTitle}"/>
</VBox>
```

`parts/strings.xml`：

```xml
<String xmlns="urn:hiyui:ui" id="includedTitle" value="来自 Include"/>
```

组件根元素的 Include 创建一个子组件；资源根元素的 Include 只声明资源。资源元素不能作为普通组件子树中的非直接后代使用。

`sourceId()` 返回根文档的规范 source ID，`dependencies()` 返回去重后的 Include source ID。循环引用、Include 深度、累计节点和累计字节限制通过结构化诊断报告。

## 相关页面

- [数据绑定与命令](/xml/data-binding)
- [自定义组件](/xml/custom-widget)
- [Schema 与离线校验](/xml/schema-tools)
- [C 绑定与 XML 注册](/xml/c-binding)
